import { useContext } from 'react';
import { ScrollContext } from './ScrollProvider';
import { ScrollContextValue } from './types';

/**
 * Access the centralized Averra Scroll Context.
 * 
 * Provides:
 * - `getScrollState()`: Ref-based getter for high-frequency scroll data (scrollY, velocity, direction, progress, isAtTop, limit).
 * - `getDirectionState()`: Ref-based getter for discrete UI direction state.
 * - `subscribeScroll(subscriber)`: High-frequency scroll frame listener (60-120fps).
 * - `subscribeDirection(subscriber)`: Discrete direction/visibility listener (fires only on state flip).
 * - `scrollTo(target, options)`: Global smooth scroll helper.
 */
export function useScroll(): ScrollContextValue {
  return useContext(ScrollContext);
}
