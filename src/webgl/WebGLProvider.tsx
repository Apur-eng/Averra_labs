import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { WebGLContextValue } from './types';
import { useReducedMotionPreference } from '../motion/reducedMotion';

export const WebGLContext = createContext<WebGLContextValue>({
  isSupported: false,
  isEnabled: false,
  registerProxy: () => {},
  unregisterProxy: () => {},
  setEnabled: () => {}
});

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export const WebGLProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotionPreference();
  const proxiesRef = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const supported = checkWebGLSupport();
    setIsSupported(supported);
    // Disable by default if reduced motion is requested
    setIsEnabled(supported && !prefersReducedMotion);
  }, [prefersReducedMotion]);

  const registerProxy = useCallback((id: string, element: HTMLElement) => {
    proxiesRef.current.set(id, element);
  }, []);

  const unregisterProxy = useCallback((id: string) => {
    proxiesRef.current.delete(id);
  }, []);

  return (
    <WebGLContext.Provider
      value={{
        isSupported,
        isEnabled,
        registerProxy,
        unregisterProxy,
        setEnabled: setIsEnabled
      }}
    >
      {children}
    </WebGLContext.Provider>
  );
};
