import { useState, useEffect, useRef } from 'react';
import { useLenis } from '../lenis/useLenis';
import { SCROLL_DIRECTION_THRESHOLD, SCROLL_TOP_OFFSET } from '../constants';

export interface ScrollDirectionOptions {
  threshold?: number;
  topOffset?: number;
}

export interface ScrollDirectionResult {
  direction: 'up' | 'down';
  isVisible: boolean;
  isScrolled: boolean;
  isAtTop: boolean;
  scrollY: number;
}

/**
 * Directional scroll hook with threshold/dead zone to prevent flickering.
 * Hooks into the global Lenis instance or falls back to native window scroll.
 */
export function useScrollDirection(options: ScrollDirectionOptions = {}): ScrollDirectionResult {
  const { threshold = SCROLL_DIRECTION_THRESHOLD, topOffset = SCROLL_TOP_OFFSET } = options;
  const [state, setState] = useState<ScrollDirectionResult>({
    direction: 'up',
    isVisible: true,
    isScrolled: false,
    isAtTop: true,
    scrollY: 0
  });

  const { lenis } = useLenis();
  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const currentDirectionRef = useRef<'up' | 'down'>('up');
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const handleScroll = (rawScrollY: number) => {
      const scrollY = Math.max(0, rawScrollY);
      const isAtTop = scrollY <= topOffset;

      // When at the very top, navbar is always visible and not scrolled
      if (isAtTop) {
        if (!isVisibleRef.current || state.isScrolled || !state.isAtTop) {
          isVisibleRef.current = true;
          currentDirectionRef.current = 'up';
          accumulatedDeltaRef.current = 0;
          setState({
            direction: 'up',
            isVisible: true,
            isScrolled: false,
            isAtTop: true,
            scrollY
          });
        }
        lastScrollYRef.current = scrollY;
        return;
      }

      const delta = scrollY - lastScrollYRef.current;

      // Scrolling DOWN
      if (delta > 0) {
        if (accumulatedDeltaRef.current < 0) {
          accumulatedDeltaRef.current = 0;
        }
        accumulatedDeltaRef.current += delta;

        if (accumulatedDeltaRef.current >= threshold && isVisibleRef.current) {
          isVisibleRef.current = false;
          currentDirectionRef.current = 'down';
          setState({
            direction: 'down',
            isVisible: false,
            isScrolled: true,
            isAtTop: false,
            scrollY
          });
        }
      }
      // Scrolling UP
      else if (delta < 0) {
        if (accumulatedDeltaRef.current > 0) {
          accumulatedDeltaRef.current = 0;
        }
        accumulatedDeltaRef.current += delta;

        if (accumulatedDeltaRef.current <= -threshold && !isVisibleRef.current) {
          isVisibleRef.current = true;
          currentDirectionRef.current = 'up';
          setState({
            direction: 'up',
            isVisible: true,
            isScrolled: true,
            isAtTop: false,
            scrollY
          });
        }
      }

      lastScrollYRef.current = scrollY;
    };

    if (lenis) {
      const onLenisScroll = (e: { scroll: number }) => {
        handleScroll(e.scroll);
      };

      lenis.on('scroll', onLenisScroll);
      handleScroll(lenis.scroll);

      return () => {
        lenis.off('scroll', onLenisScroll);
      };
    } else {
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

  return state;
}
