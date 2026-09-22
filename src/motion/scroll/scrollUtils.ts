/**
 * Scroll Utility Functions
 * Source of truth: D:\averra\documents\inspiration.md
 */

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Calculates normalized scroll progress [0, 1] given current scroll and total scrollable range.
 */
export function calculateScrollProgress(current: number, max: number): number {
  if (max <= 0) return 0;
  return clamp(current / max, 0, 1);
}

/**
 * Parse an anchor string (e.g. "start end", "center center", "start start")
 * into target pixel offsets relative to element and viewport.
 */
function parseAnchor(
  anchor: string,
  elementSize: number,
  viewportSize: number
): { elementOffset: number; viewportOffset: number } {
  const parts = anchor.trim().split(/\s+/);
  const elStr = parts[0] || 'start';
  const vpStr = parts[1] || 'end';

  let elementOffset = 0;
  if (elStr === 'center') elementOffset = elementSize / 2;
  else if (elStr === 'end') elementOffset = elementSize;

  let viewportOffset = viewportSize;
  if (vpStr === 'start') viewportOffset = 0;
  else if (vpStr === 'center') viewportOffset = viewportSize / 2;

  return { elementOffset, viewportOffset };
}

/**
 * Calculates normalized progress [0, 1] of an element traversing the viewport.
 * 
 * Reusable for:
 * - changing/rotating text choreography
 * - image depth and displacement
 * - section entry/exit transitions
 * - WebGL mesh synchronization
 */
export function calculateElementProgress(
  rect: DOMRect | { top: number; height: number },
  windowHeight: number,
  offset: [string, string] = ['start end', 'end start'],
  shouldClamp = true
): number {
  const startAnchor = parseAnchor(offset[0], rect.height, windowHeight);
  const endAnchor = parseAnchor(offset[1], rect.height, windowHeight);

  // Total distance that the element traverses between start and end anchor alignments
  const totalDistance =
    (startAnchor.viewportOffset - endAnchor.viewportOffset) +
    (endAnchor.elementOffset - startAnchor.elementOffset);

  if (Math.abs(totalDistance) < 0.001) return 0;

  const startPos = rect.top + startAnchor.elementOffset;
  const currentDistance = startAnchor.viewportOffset - startPos;

  const rawProgress = currentDistance / totalDistance;
  return shouldClamp ? clamp(rawProgress, 0, 1) : rawProgress;
}
