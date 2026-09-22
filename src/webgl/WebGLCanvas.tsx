import React from 'react';
import { useWebGL } from './useWebGL';

export interface WebGLCanvasProps {
  className?: string;
}

/**
 * Shared WebGL Canvas Container.
 * Positioned as a fixed background layer beneath standard DOM content.
 * Progressive enhancement: Returns null if WebGL is unsupported or disabled.
 */
export const WebGLCanvas: React.FC<WebGLCanvasProps> = ({ className = '' }) => {
  const { isSupported, isEnabled } = useWebGL();

  // If WebGL is unavailable or disabled (e.g. reduced motion, weak device),
  // render nothing. All HTML/CSS content continues to work 100%.
  if (!isSupported || !isEnabled) {
    return null;
  }

  return (
    <div
      id="averra-shared-webgl-layer"
      className={`webgl-viewport-layer ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* 
        This is the shared mounting point for the future single R3F / Three.js canvas.
        Individual components never create their own canvas; they register proxies via useWebGLProxy().
      */}
    </div>
  );
};
