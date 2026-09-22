/**
 * Averra Motion Constants & Easing Tokens
 * Source of truth: D:\averra\documents\inspiration.md
 * 
 * Easing Curves:
 * - EASE_OUT: [0.16, 1, 0.3, 1] — Architectural cubic bezier for structural UI, navbars, and text reveals
 * - EASE_SMOOTH: [0.25, 0.1, 0.25, 1] — Smooth continuous interpolation
 * - EASE_PHYSICAL: [0.19, 1, 0.22, 1] — Physical deceleration curve
 */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;
export const EASE_PHYSICAL = [0.19, 1, 0.22, 1] as const;

/**
 * Transition Durations (in seconds)
 */
export const DURATION_FAST = 0.2;
export const DURATION_NORMAL = 0.4;
export const DURATION_SLOW = 0.85;

/**
 * Scroll System Thresholds
 */
export const SCROLL_DIRECTION_THRESHOLD = 12; // Dead zone delta to prevent micro-flickering
export const SCROLL_TOP_OFFSET = 40;          // Region considered "at top" of viewport
