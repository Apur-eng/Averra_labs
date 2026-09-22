import { useContext } from 'react';
import { LenisContext, LenisContextValue } from './LenisProvider';

/**
 * Hook to access the global Lenis smooth scroll instance and scrollTo helper.
 */
export function useLenis(): LenisContextValue {
  return useContext(LenisContext);
}
