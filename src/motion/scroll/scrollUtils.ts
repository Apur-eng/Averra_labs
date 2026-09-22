/**
 * Scroll Utility Functions
 */

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Calculates normalized scroll progress [0, 1] given current scroll and total scrollable range.
 */
export function calculateScrollProgress(current: number, max: number): number {
  if (max <= 0) return 0;
  return clamp(current / max, 0, 1);
}
