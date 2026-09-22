import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';
import { ScrollDirectionState, ScrollDirection } from './types';

export interface ScrollDirectionOptions {
  threshold?: number;
  topOffset?: number;
}

export interface ScrollDirectionResult {
  direction: ScrollDirection;
  isVisible: boolean;
  isScrolled: boolean;
  isAtTop: boolean;
  scrollY: number;
}

/**
 * Directional scroll hook with threshold/dead-zone anti-flickering and top-locking boundary.
 * 
 * Performance Guarantees:
 * - Consumes the centralized ScrollProvider subscription.
 * - Attaches ZERO duplicate scroll listeners to window or Lenis.
 * - Only triggers React re-renders when directional/visibility state flips (e.g. crossing threshold).
 * - Remains completely quiet (0 re-renders) during continuous scrolling in one direction.
 */
export function useScrollDirection(_options: ScrollDirectionOptions = {}): ScrollDirectionResult {
  const { getDirectionState, getScrollState, subscribeDirection } = useScroll();

  const [state, setState] = useState<ScrollDirectionResult>(() => ({
    ...getDirectionState(),
    scrollY: getScrollState().scrollY
  }));

  useEffect(() => {
    // Initial sync
    setState({
      ...getDirectionState(),
      scrollY: getScrollState().scrollY
    });

    // Subscribe to discrete direction state flips only
    const unsubscribe = subscribeDirection((dirState: ScrollDirectionState) => {
      setState({
        ...dirState,
        scrollY: getScrollState().scrollY
      });
    });

    return unsubscribe;
  }, [subscribeDirection, getDirectionState, getScrollState]);

  return state;
}
