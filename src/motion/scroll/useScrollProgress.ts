import React, { useState, useEffect, useRef } from 'react';
import { useMotionValue, MotionValue } from 'framer-motion';
import { useScroll } from './useScroll';
import { ElementProgressOptions } from './types';
import { calculateElementProgress } from './scrollUtils';

export interface ScrollProgressOptions {
  /**
   * Minimum progress change required before triggering a React state update.
   * Default: 0.002 (prevents micro-re-renders while maintaining smooth visual updates).
   */
  threshold?: number;
}

/**
 * Hook to track normalized document scroll progress [0, 1] as a React state.
 * 
 * Performance Guarantee:
 * Consumes the central ScrollProvider subscription.
 * Uses a quantization threshold to prevent 60-120fps React render storms.
 */
export function useScrollProgress(options: ScrollProgressOptions = {}): number {
  const { threshold = 0.002 } = options;
  const { getScrollState, subscribeScroll } = useScroll();
  const [progress, setProgress] = useState(() => getScrollState().progress);
  const lastProgressRef = useRef(progress);

  useEffect(() => {
    // Initial sync
    const initial = getScrollState().progress;
    lastProgressRef.current = initial;
    setProgress(initial);

    const unsubscribe = subscribeScroll((state) => {
      if (Math.abs(state.progress - lastProgressRef.current) >= threshold) {
        lastProgressRef.current = state.progress;
        setProgress(state.progress);
      }
    });

    return unsubscribe;
  }, [subscribeScroll, getScrollState, threshold]);

  return progress;
}

/**
 * Hook to track normalized document scroll progress [0, 1] as a Framer Motion MotionValue.
 * 
 * Performance Guarantee:
 * Updates at 60-120fps directly without triggering ANY React component re-renders.
 * Reusable with useTransform() for hardware-accelerated transforms.
 */
export function useScrollProgressValue(): MotionValue<number> {
  const { getScrollState, subscribeScroll } = useScroll();
  const progressValue = useMotionValue(getScrollState().progress);

  useEffect(() => {
    progressValue.set(getScrollState().progress);

    const unsubscribe = subscribeScroll((state) => {
      progressValue.set(state.progress);
    });

    return unsubscribe;
  }, [subscribeScroll, getScrollState, progressValue]);

  return progressValue;
}

/**
 * Hook to track normalized scroll progress [0, 1] of an individual DOM element as it traverses the viewport.
 * 
 * Reusable for:
 * - changing/rotating text
 * - hero choreography
 * - image movement & depth
 * - GSAP timelines
 * - WebGL synchronization
 * 
 * Performance Guarantee:
 * Uses a Framer Motion MotionValue to update at 60-120fps with zero React component re-renders.
 */
export function useElementScrollProgress(
  targetRef: React.RefObject<HTMLElement>,
  options: ElementProgressOptions = {}
): MotionValue<number> {
  const { offset = ['start end', 'end start'], clamp = true } = options;
  const { subscribeScroll } = useScroll();
  const elementProgressValue = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const el = targetRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const progress = calculateElementProgress(rect, window.innerHeight, offset, clamp);
      elementProgressValue.set(progress);
    };

    // Initial update
    update();

    // Subscribe to central scroll updates
    const unsubscribe = subscribeScroll(update);
    return unsubscribe;
  }, [targetRef, offset, clamp, subscribeScroll, elementProgressValue]);

  return elementProgressValue;
}
