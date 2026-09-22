import React from 'react';
import { LenisProvider } from '../motion/lenis/LenisProvider';
import { ScrollProvider } from '../motion/scroll/ScrollProvider';
import { CursorProvider } from '../motion/cursor/CursorProvider';
import { WebGLProvider } from '../webgl/WebGLProvider';

export interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Root MotionProvider composing Averra's foundational motion layers:
 * 1. Lenis Smooth Scrolling (Single instance, single RAF loop)
 * 2. Centralized Scroll Coordinator (Zero-render ref state & dual-channel subscribers)
 * 3. High-performance Cursor & Pointer Tracking (Decoupled from touch devices)
 * 4. Shared WebGL Layer Context (Progressive enhancement fallback)
 */
export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  return (
    <LenisProvider>
      <ScrollProvider>
        <CursorProvider>
          <WebGLProvider>
            {children}
          </WebGLProvider>
        </CursorProvider>
      </ScrollProvider>
    </LenisProvider>
  );
};
