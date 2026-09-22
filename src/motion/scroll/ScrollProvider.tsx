import React, { createContext, useEffect, useRef, useCallback } from 'react';
import { useLenis } from '../lenis/useLenis';
import { SCROLL_DIRECTION_THRESHOLD, SCROLL_TOP_OFFSET } from '../constants';
import {
  ScrollContextValue,
  ScrollDirection,
  ScrollDirectionState,
  ScrollDirectionSubscriber,
  ScrollOptions,
  ScrollState,
  ScrollSubscriber
} from './types';
import { calculateScrollProgress } from './scrollUtils';

const INITIAL_SCROLL_STATE: ScrollState = {
  scrollY: 0,
  velocity: 0,
  direction: 'up',
  progress: 0,
  isAtTop: true,
  limit: 0
};

const INITIAL_DIRECTION_STATE: ScrollDirectionState = {
  direction: 'up',
  isVisible: true,
  isScrolled: false,
  isAtTop: true
};

export const ScrollContext = createContext<ScrollContextValue>({
  getScrollState: () => INITIAL_SCROLL_STATE,
  getDirectionState: () => INITIAL_DIRECTION_STATE,
  subscribeScroll: () => () => {},
  subscribeDirection: () => () => {},
  scrollTo: () => {}
});

export interface ScrollProviderProps {
  children: React.ReactNode;
  options?: ScrollOptions;
}

/**
 * Central Scroll Coordinator for Averra.
 * 
 * Performance & Architecture Guarantees:
 * 1. Single subscriber to Lenis or window scroll — zero duplicate listeners.
 * 2. Ref-based state store — ScrollProvider NEVER re-renders child components on scroll.
 * 3. Dual-channel subscriptions:
 *    - `subscribeScroll`: High-frequency channel for 60-120fps direct consumers (WebGL, canvas, GSAP, transforms).
 *    - `subscribeDirection`: Discrete channel with dead-zone threshold for UI (Navbar) — only fires on state flip.
 * 4. Reliable top-locking boundary preventing micro-flicker at scrollY <= topOffset.
 */
export const ScrollProvider: React.FC<ScrollProviderProps> = ({
  children,
  options = {}
}) => {
  const { threshold = SCROLL_DIRECTION_THRESHOLD, topOffset = SCROLL_TOP_OFFSET } = options;
  const { lenis, scrollTo: lenisScrollTo } = useLenis();

  // High-frequency mutable state ref
  const scrollStateRef = useRef<ScrollState>({ ...INITIAL_SCROLL_STATE });
  // Discrete UI state ref (Navbar, direction)
  const directionStateRef = useRef<ScrollDirectionState>({ ...INITIAL_DIRECTION_STATE });

  // Subscriber registries
  const subscribersRef = useRef<Set<ScrollSubscriber>>(new Set());
  const directionSubscribersRef = useRef<Set<ScrollDirectionSubscriber>>(new Set());

  // Tracking refs for dead-zone delta accumulation
  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);

  useEffect(() => {
    const handleScroll = (rawScrollY: number, rawVelocity?: number, rawProgress?: number, rawLimit?: number) => {
      const scrollY = Math.max(0, rawScrollY);
      const isAtTop = scrollY <= topOffset;

      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const limit = typeof rawLimit === 'number' && rawLimit > 0
        ? rawLimit
        : Math.max(0, scrollHeight - windowHeight);

      const progress = typeof rawProgress === 'number'
        ? rawProgress
        : calculateScrollProgress(scrollY, limit);

      const delta = scrollY - lastScrollYRef.current;
      const velocity = typeof rawVelocity === 'number' ? rawVelocity : delta;

      let nextDirection: ScrollDirection = directionStateRef.current.direction;
      let nextIsVisible = directionStateRef.current.isVisible;
      let nextIsScrolled = !isAtTop;

      // 1. Force stable state at top boundary
      if (isAtTop) {
        nextDirection = 'up';
        nextIsVisible = true;
        nextIsScrolled = false;
        accumulatedDeltaRef.current = 0;
      } else {
        // 2. Dead-zone threshold detection
        if (delta > 0) {
          // Scrolling DOWN (toward larger scrollY)
          if (accumulatedDeltaRef.current < 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current += delta;

          if (accumulatedDeltaRef.current >= threshold) {
            nextDirection = 'down';
            nextIsVisible = false;
          }
        } else if (delta < 0) {
          // Scrolling UP (toward smaller scrollY)
          if (accumulatedDeltaRef.current > 0) {
            accumulatedDeltaRef.current = 0;
          }
          accumulatedDeltaRef.current += delta;

          if (accumulatedDeltaRef.current <= -threshold) {
            nextDirection = 'up';
            nextIsVisible = true;
          }
        }
      }

      // Update mutable high-frequency state ref
      scrollStateRef.current = {
        scrollY,
        velocity,
        direction: nextDirection,
        progress,
        isAtTop,
        limit
      };

      // Check if discrete direction state changed
      const prevDir = directionStateRef.current;
      const hasDirectionChanged =
        prevDir.direction !== nextDirection ||
        prevDir.isVisible !== nextIsVisible ||
        prevDir.isScrolled !== nextIsScrolled ||
        prevDir.isAtTop !== isAtTop;

      if (hasDirectionChanged) {
        directionStateRef.current = {
          direction: nextDirection,
          isVisible: nextIsVisible,
          isScrolled: nextIsScrolled,
          isAtTop
        };

        // Notify discrete subscribers (e.g. Navbar)
        const updatedDirState = directionStateRef.current;
        directionSubscribersRef.current.forEach((sub) => {
          sub(updatedDirState);
        });
      }

      // Notify high-frequency subscribers (WebGL, RAF callbacks, MotionValues)
      const updatedScrollState = scrollStateRef.current;
      subscribersRef.current.forEach((sub) => {
        sub(updatedScrollState);
      });

      lastScrollYRef.current = scrollY;
    };

    if (lenis) {
      // Subscribe to single global Lenis instance
      const onLenisScroll = (instance: typeof lenis) => {
        handleScroll(instance.scroll, instance.velocity, instance.progress, instance.limit);
      };

      lenis.on('scroll', onLenisScroll);
      // Run initial tick
      handleScroll(lenis.scroll, lenis.velocity, lenis.progress, lenis.limit);

      return () => {
        lenis.off('scroll', onLenisScroll);
      };
    } else {
      // Fallback for native scrolling
      const onNativeScroll = () => {
        handleScroll(window.scrollY);
      };

      window.addEventListener('scroll', onNativeScroll, { passive: true });
      handleScroll(window.scrollY);

      return () => {
        window.removeEventListener('scroll', onNativeScroll);
      };
    }
  }, [lenis, threshold, topOffset]);

  const getScrollState = useCallback(() => scrollStateRef.current, []);
  const getDirectionState = useCallback(() => directionStateRef.current, []);

  const subscribeScroll = useCallback((subscriber: ScrollSubscriber) => {
    subscribersRef.current.add(subscriber);
    return () => {
      subscribersRef.current.delete(subscriber);
    };
  }, []);

  const subscribeDirection = useCallback((subscriber: ScrollDirectionSubscriber) => {
    directionSubscribersRef.current.add(subscriber);
    return () => {
      directionSubscribersRef.current.delete(subscriber);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        getScrollState,
        getDirectionState,
        subscribeScroll,
        subscribeDirection,
        scrollTo: lenisScrollTo
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
