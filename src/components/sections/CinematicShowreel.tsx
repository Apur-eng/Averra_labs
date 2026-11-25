import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { IntroMedia, type IntroMediaSource } from '../ui/IntroMedia';

export interface CinematicScrollTimeline {
  /** Entry into the editorial frame is held through this point. */
  entryEnd: number;
  /** Fullscreen expansion ends and the immersive hold begins. */
  expansionEnd: number;
  /** End of the main fullscreen immersion. */
  immersionEnd: number;
  /** End of the configurable closing-frame hold. */
  closingEnd: number;
  /** End of the return to the editorial frame. */
  contractionEnd: number;
}

export const DEFAULT_CINEMATIC_TIMELINE: CinematicScrollTimeline = {
  entryEnd: 0.2,
  expansionEnd: 0.4,
  immersionEnd: 0.75,
  closingEnd: 0.85,
  contractionEnd: 0.95,
};

export interface CinematicShowreelProps {
  videoSrc?: string;
  videoSources?: IntroMediaSource[];
  posterImage?: string;
  endingPosterImage?: string;
  showControls?: boolean;
  /** Override scroll phase boundaries, including the separate closing hold. */
  timeline?: Partial<CinematicScrollTimeline>;
}

interface ViewportSize {
  width: number;
  height: number;
}

const getViewportSize = (): ViewportSize => ({
  width: typeof window === 'undefined' ? 1440 : window.innerWidth,
  height: typeof window === 'undefined' ? 900 : window.innerHeight,
});

const isValidTimeline = (timeline: CinematicScrollTimeline) =>
  timeline.entryEnd > 0 &&
  timeline.entryEnd < timeline.expansionEnd &&
  timeline.expansionEnd < timeline.immersionEnd &&
  timeline.immersionEnd < timeline.closingEnd &&
  timeline.closingEnd < timeline.contractionEnd &&
  timeline.contractionEnd < 1;

export const CinematicShowreel: React.FC<CinematicShowreelProps> = ({
  videoSrc = '/videos/averra-showreel.mp4',
  videoSources,
  posterImage = '/images/showreel-poster.jpg',
  endingPosterImage = '/images/showreel-ending.jpg',
  showControls = true,
  timeline: timelineOverrides,
}) => {
  const trackRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [viewport, setViewport] = useState(getViewportSize);

  const timeline = useMemo(() => {
    const candidate = { ...DEFAULT_CINEMATIC_TIMELINE, ...timelineOverrides };
    return isValidTimeline(candidate) ? candidate : DEFAULT_CINEMATIC_TIMELINE;
  }, [timelineOverrides]);

  useEffect(() => {
    const updateViewport = () => setViewport(getViewportSize());
    window.addEventListener('resize', updateViewport, { passive: true });
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const progressStops = [
    0,
    timeline.entryEnd,
    timeline.expansionEnd,
    timeline.immersionEnd,
    timeline.closingEnd,
    timeline.contractionEnd,
    1,
  ];

  const editorialGutter = Math.min(72, Math.max(20, viewport.width * 0.04));
  const editorialWidth = Math.min(
    1240,
    viewport.width - editorialGutter * 2,
    (viewport.height - 48) * (16 / 9)
  );
  const editorialHeight = editorialWidth * (9 / 16);
  const insetX = Math.max(0, (viewport.width - editorialWidth) / 2);
  const insetY = Math.max(0, (viewport.height - editorialHeight) / 2);
  const initialClip = `inset(${insetY.toFixed(2)}px ${insetX.toFixed(2)}px ${insetY.toFixed(2)}px ${insetX.toFixed(2)}px round 8px)`;
  const fullscreenClip = 'inset(0px 0px 0px 0px round 0px)';

  const clipPath = useTransform(
    scrollYProgress,
    progressStops,
    [initialClip, initialClip, fullscreenClip, fullscreenClip, fullscreenClip, initialClip, initialClip]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    progressStops,
    [8, 8, 0, 0, 0, 8, 8]
  );
  const mediaScale = useTransform(
    scrollYProgress,
    progressStops,
    [1.035, 1.035, 1.015, 1.015, 1.015, 1.035, 1.035]
  );
  const mediaY = useTransform(
    scrollYProgress,
    progressStops,
    [8, 8, 0, 0, 0, -8, -8]
  );

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const isTakeover =
      !prefersReducedMotion &&
      progress >= Math.max(timeline.entryEnd, timeline.expansionEnd - 0.04) &&
      progress < timeline.closingEnd;
    document.documentElement.classList.toggle('cinematic-takeover-active', isTakeover);
  });

  useEffect(() => () => {
    document.documentElement.classList.remove('cinematic-takeover-active');
  }, []);

  if (prefersReducedMotion) {
    return (
      <section className="cinematic-reduced-section" aria-label="Averra Labs showreel">
        <div className="cinematic-reduced-frame">
          <IntroMedia
            videoSrc={videoSrc}
            videoSources={videoSources}
            posterImage={posterImage}
            endingPosterImage={endingPosterImage}
            showControls={showControls}
            autoPlay={false}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      className="cinematic-track"
      aria-label="Averra Labs showreel"
    >
      <div className="cinematic-sticky-frame">
        <motion.div
          className="cinematic-reveal-frame"
          style={{ clipPath, borderRadius }}
        >
          <motion.div className="cinematic-media-motion" style={{ scale: mediaScale, y: mediaY }}>
            <IntroMedia
              videoSrc={videoSrc}
              videoSources={videoSources}
              posterImage={posterImage}
              endingPosterImage={endingPosterImage}
              showControls={showControls}
              playbackProgress={scrollYProgress}
              playbackStartAt={Math.max(timeline.entryEnd, timeline.expansionEnd - 0.06)}
              playbackEndAt={timeline.contractionEnd}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

