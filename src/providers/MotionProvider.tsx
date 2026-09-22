import React from 'react';
import { LenisProvider } from '../motion/lenis/LenisProvider';
import { CursorProvider } from '../motion/cursor/CursorProvider';
import { WebGLProvider } from '../webgl/WebGLProvider';

export interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Root MotionProvider composing Averra's foundational motion layers:
 * 1. Lenis Smooth Scrolling
 * 2. High-performance Cursor & Pointer Tracking
 * 3. Shared WebGL Layer Context
 */
export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  return (
    <LenisProvider>
      <CursorProvider>
        <WebGLProvider>
          {children}
        </WebGLProvider>
      </CursorProvider>
    </LenisProvider>
  );
};
