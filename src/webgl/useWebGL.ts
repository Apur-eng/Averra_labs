import { useContext, useEffect } from 'react';
import { WebGLContext } from './WebGLProvider';
import { WebGLContextValue } from './types';

/**
 * Hook to access the WebGL layer context.
 */
export function useWebGL(): WebGLContextValue {
  return useContext(WebGLContext);
}

/**
 * Helper hook to register a DOM element as a proxy for the shared WebGL layer.
 * Automatically handles registration on mount and unregistration on unmount.
 */
export function useWebGLProxy(id: string, elementRef: React.RefObject<HTMLElement | null>) {
  const { registerProxy, unregisterProxy, isEnabled } = useWebGL();

  useEffect(() => {
    if (!isEnabled || !elementRef.current) return;

    registerProxy(id, elementRef.current);
    return () => {
      unregisterProxy(id);
    };
  }, [id, elementRef, isEnabled, registerProxy, unregisterProxy]);
}
