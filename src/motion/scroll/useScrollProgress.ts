import { useState, useEffect } from 'react';
import { useLenis } from '../lenis/useLenis';
import { calculateScrollProgress } from './scrollUtils';

/**
 * Hook to track normalized document scroll progress [0, 1].
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  const { lenis } = useLenis();

  useEffect(() => {
    const updateProgress = (currentScroll: number) => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const normalized = calculateScrollProgress(currentScroll, scrollHeight);
      setProgress(normalized);
    };

    if (lenis) {
      const onScroll = (e: { scroll: number }) => {
        updateProgress(e.scroll);
      };

      lenis.on('scroll', onScroll);
      updateProgress(lenis.scroll);

      return () => {
        lenis.off('scroll', onScroll);
      };
    } else {
      const onNativeScroll = () => {
        updateProgress(window.scrollY);
      };

      window.addEventListener('scroll', onNativeScroll, { passive: true });
      updateProgress(window.scrollY);

      return () => {
        window.removeEventListener('scroll', onNativeScroll);
      };
    }
  }, [lenis]);

  return progress;
}
