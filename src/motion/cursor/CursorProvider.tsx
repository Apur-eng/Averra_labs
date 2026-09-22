import React, { createContext, useEffect, useRef, useCallback } from 'react';
import { CursorState, INITIAL_CURSOR_STATE, isPointerCapableDevice, normalizeCoordinates } from './cursorUtils';

export type CursorSubscriber = (state: CursorState) => void;

export interface CursorContextValue {
  /**
   * Ref-based direct getter for 60fps consumers (canvas, WebGL, RAF loops).
   * Does NOT trigger React component re-renders.
   */
  getCursorData: () => CursorState;
  /**
   * Event subscriber for components needing imperative frame-by-frame updates.
   */
  subscribe: (subscriber: CursorSubscriber) => () => void;
  /**
   * Whether the current device is a fine pointer device (not touch-only).
   */
  isPointerDevice: boolean;
}

export const CursorContext = createContext<CursorContextValue>({
  getCursorData: () => INITIAL_CURSOR_STATE,
  subscribe: () => () => {},
  isPointerDevice: false
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPointerDevice = useRef(false);
  const cursorStateRef = useRef<CursorState>({ ...INITIAL_CURSOR_STATE });
  const rawTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const subscribersRef = useRef<Set<CursorSubscriber>>(new Set());
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    isPointerDevice.current = isPointerCapableDevice();
    cursorStateRef.current.isPointerDevice = isPointerDevice.current;

    // Do NOT activate cursor tracking on touch devices
    if (!isPointerDevice.current) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      rawTargetRef.current.x = e.clientX;
      rawTargetRef.current.y = e.clientY;
    };

    let prevX = 0;
    let prevY = 0;

    const loop = () => {
      const targetX = rawTargetRef.current.x;
      const targetY = rawTargetRef.current.y;

      const vx = targetX - prevX;
      const vy = targetY - prevY;
      prevX = targetX;
      prevY = targetY;

      const { normalizedX, normalizedY } = normalizeCoordinates(
        targetX,
        targetY,
        window.innerWidth,
        window.innerHeight
      );

      const state: CursorState = {
        x: targetX,
        y: targetY,
        normalizedX,
        normalizedY,
        velocityX: vx,
        velocityY: vy,
        isPointerDevice: true
      };

      cursorStateRef.current = state;

      // Notify any subscribers without triggering React re-renders of the tree
      subscribersRef.current.forEach((subscriber) => {
        subscriber(state);
      });

      rafIdRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      subscribersRef.current.clear();
    };
  }, []);

  const getCursorData = useCallback(() => {
    return cursorStateRef.current;
  }, []);

  const subscribe = useCallback((subscriber: CursorSubscriber) => {
    subscribersRef.current.add(subscriber);
    return () => {
      subscribersRef.current.delete(subscriber);
    };
  }, []);

  return (
    <CursorContext.Provider
      value={{
        getCursorData,
        subscribe,
        isPointerDevice: isPointerDevice.current
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
