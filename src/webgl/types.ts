/**
 * WebGL System Types
 * Architectural foundation for shared WebGL layer & DOM proxy synchronization
 */

export interface WebGLProxyElement {
  id: string;
  element: HTMLElement;
  rect?: DOMRect;
}

export interface WebGLContextValue {
  /**
   * Whether WebGL is supported by the client browser/hardware.
   */
  isSupported: boolean;
  /**
   * Whether WebGL is currently enabled (respects user settings & reduced-motion).
   */
  isEnabled: boolean;
  /**
   * Registers a DOM proxy element to sync its bounds with the shared WebGL canvas.
   */
  registerProxy: (id: string, element: HTMLElement) => void;
  /**
   * Unregisters a DOM proxy element.
   */
  unregisterProxy: (id: string) => void;
  /**
   * Enables or disables WebGL enhancement layer.
   */
  setEnabled: (enabled: boolean) => void;
}
