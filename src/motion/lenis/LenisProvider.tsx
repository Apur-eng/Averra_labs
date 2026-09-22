import React, { createContext, useEffect, useRef, useState } from 'react';
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

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const location = useLocation();
  const rafIdRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    // Single global Lenis instance configuration
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      autoRaf: false
    });

    setLenisInstance(lenis);

    // RAF loop
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

  const scrollTo = (target: number | string | HTMLElement, options?: Parameters<Lenis['scrollTo']>[1]) => {
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
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};
