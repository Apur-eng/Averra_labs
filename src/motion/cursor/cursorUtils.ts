/**
 * Cursor & Pointer System Utilities
 */

export interface CursorState {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  velocityX: number;
  velocityY: number;
  isPointerDevice: boolean;
}

export const INITIAL_CURSOR_STATE: CursorState = {
  x: 0,
  y: 0,
  normalizedX: 0,
  normalizedY: 0,
  velocityX: 0,
  velocityY: 0,
  isPointerDevice: false
};

/**
 * Detects if the current device has a fine pointer (mouse/trackpad) and not purely touch.
 */
export function isPointerCapableDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

/**
 * Normalizes viewport coordinates to WebGL NDC [-1, 1] range.
 */
export function normalizeCoordinates(x: number, y: number, width: number, height: number): { normalizedX: number; normalizedY: number } {
  if (width <= 0 || height <= 0) return { normalizedX: 0, normalizedY: 0 };
  return {
    normalizedX: (x / width) * 2 - 1,
    normalizedY: -(y / height) * 2 + 1
  };
}
