import Lenis from 'lenis';

export type ScrollDirection = 'up' | 'down';

export interface ScrollState {
  /** Current vertical scroll offset (clamped to >= 0) */
  scrollY: number;
  /** Current scroll velocity in px/frame or px/ms (signed: positive = down, negative = up) */
  velocity: number;
  /** Primary directional intent determined using anti-flicker threshold */
  direction: ScrollDirection;
  /** Normalized scroll progress across entire document [0, 1] */
  progress: number;
  /** Whether the scroll position is within the defined top zone */
  isAtTop: boolean;
  /** Total scrollable distance (scrollHeight - windowHeight) */
  limit: number;
}

export interface ScrollDirectionState {
  /** Stable scroll direction */
  direction: ScrollDirection;
  /** Whether auto-hiding UI (such as the Navbar) should be visible */
  isVisible: boolean;
  /** Whether the page is scrolled beyond the top offset zone */
  isScrolled: boolean;
  /** Whether the viewport is resting in the top offset zone */
  isAtTop: boolean;
}

export type ScrollSubscriber = (state: ScrollState) => void;
export type ScrollDirectionSubscriber = (state: ScrollDirectionState) => void;

export interface ScrollContextValue {
  /**
   * Ref-based direct getter for the latest scroll state.
   * Does NOT trigger React component re-renders.
   */
  getScrollState: () => ScrollState;

  /**
   * Ref-based direct getter for discrete direction/visibility state.
   */
  getDirectionState: () => ScrollDirectionState;

  /**
   * Subscribe to high-frequency scroll frames (runs once per animation frame).
   * Ideal for 60-120fps direct DOM mutations, WebGL, canvas, or GSAP timelines.
   */
  subscribeScroll: (subscriber: ScrollSubscriber) => () => void;

  /**
   * Subscribe to discrete direction state changes (only fires when direction, isVisible,
   * isScrolled, or isAtTop changes).
   */
  subscribeDirection: (subscriber: ScrollDirectionSubscriber) => () => void;

  /**
   * Programmatic smooth scrolling helper delegating to Lenis or native scroll.
   */
  scrollTo: (
    target: number | string | HTMLElement,
    options?: Parameters<Lenis['scrollTo']>[1]
  ) => void;
}

export interface ScrollOptions {
  /** Delta threshold (dead zone) required to change direction (default: 12) */
  threshold?: number;
  /** Offset from top considered as resting top zone (default: 40) */
  topOffset?: number;
}

export type ViewportAnchor = 'start' | 'center' | 'end';

export interface ElementProgressOptions {
  /**
   * Intersection anchors formatted as [elementAnchor, viewportAnchor]
   * Default: ['start end', 'end start'] (enters bottom of viewport to exits top)
   */
  offset?: [string, string];
  /** Optional clamp range (default: [0, 1]) */
  clamp?: boolean;
}
