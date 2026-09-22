import React, { createContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';
import { useReducedMotionPreference } from '../reducedMotion';

export interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (target: number | string | HTMLElement, options?: Parameters<Lenis['scrollTo']>[1]) => void;
}

export const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {}
});

export interface LenisProviderProps {
  children: React.ReactNode;
}

/**
 * Global Lenis Smooth Scrolling Provider.
 * 
 * Performance & Architecture Guarantees:
 * 1. Exactly ONE global Lenis instance across the entire application lifecycle.
 * 2. Driven by exactly ONE centralized requestAnimationFrame loop.
 * 3. Fully respects `prefers-reduced-motion`:
 *    - Automatically sets duration: 0 and smoothWheel: false.
 *    - Leaves native, instant browser scrolling intact for users requesting reduced motion.
 * 4. Automatic immediate scroll reset to top (0, 0) upon React Router route transitions.
 * 5. Complete, leak-free teardown canceling RAF and destroying the Lenis instance on unmount.
 */
export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const location = useLocation();
  const rafIdRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    // Single global Lenis instance
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      autoRaf: false,
      respectReducedMotion: true
    });

    setLenisInstance(lenis);

    // Single unified requestAnimationFrame loop
    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  // Handle route change scroll reset cleanly
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, lenisInstance]);

  const scrollTo = useCallback((
    target: number | string | HTMLElement,
    options?: Parameters<Lenis['scrollTo']>[1]
  ) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, options);
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });
      }
    }
  }, [lenisInstance, prefersReducedMotion]);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};
