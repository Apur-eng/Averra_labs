import { useContext } from 'react';
import { CursorContext, CursorContextValue } from './CursorProvider';

/**
 * Hook to access the underlying cursor/pointer data system.
 * Designed to feed future WebGL and canvas effects at 60fps with zero React re-render overhead.
 */
export function useCursor(): CursorContextValue {
  return useContext(CursorContext);
}
