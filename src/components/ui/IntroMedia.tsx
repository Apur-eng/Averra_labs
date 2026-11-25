import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion, type MotionValue } from 'framer-motion';

export interface IntroMediaSource {
  src: string;
  type?: 'video/mp4' | 'video/webm';
}

export interface IntroMediaProps {
  videoSrc?: string;
  videoSources?: IntroMediaSource[];
  posterImage?: string;
  endingPosterImage?: string;
  alt?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControls?: boolean;
  playbackProgress?: MotionValue<number>;
  playbackStartAt?: number;
  playbackEndAt?: number;
}

/** Media playback is managed separately from the Framer Motion scroll geometry. */
export const IntroMedia: React.FC<IntroMediaProps> = ({
  videoSrc,
  videoSources = [],
  posterImage = '/images/showreel-poster.jpg',
  endingPosterImage = '/images/showreel-ending.jpg',
  alt = 'Averra Labs cinematic brand film',
  autoPlay = true,
  muted = true,
  loop = false,
  showControls = true,
  playbackProgress,
  playbackStartAt = 0,
  playbackEndAt = 1,
}) => {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoEligible = useRef(false);
  const manuallyStarted = useRef(false);
  const manuallyPaused = useRef(false);
  const desiredPlayback = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const hasVideo = Boolean(videoSrc || videoSources.length > 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [hasEnded, setHasEnded] = useState(false);

  const syncPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (document.hidden) {
      desiredPlayback.current = false;
      video.pause();
      return;
    }

    const shouldPlay = !video.ended && !manuallyPaused.current &&
      (manuallyStarted.current || (!prefersReducedMotion && autoEligible.current));
    if (shouldPlay === desiredPlayback.current) return;
    desiredPlayback.current = shouldPlay;
    if (shouldPlay) {
      void video.play().catch(() => { desiredPlayback.current = false; });
    } else {
      video.pause();
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo || !autoPlay) return;

    const updateEligibility = (progress: number) => {
      autoEligible.current = progress >= playbackStartAt && progress < playbackEndAt;
      syncPlayback();
    };
    const unsubscribe = playbackProgress?.on('change', updateEligibility);
    if (playbackProgress) {
      updateEligibility(playbackProgress.get());
    } else if (mediaRef.current && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        autoEligible.current = entries.some((entry) => entry.intersectionRatio >= 0.72);
        syncPlayback();
      }, { threshold: [0, 0.72] });
      observer.observe(mediaRef.current);
      const onVisibilityChange = () => syncPlayback();
      document.addEventListener('visibilitychange', onVisibilityChange);
      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', onVisibilityChange);
        video.pause();
      };
    }

    const onVisibilityChange = () => syncPlayback();
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      unsubscribe?.();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      autoEligible.current = false;
      desiredPlayback.current = false;
      video.pause();
    };
  }, [autoPlay, hasVideo, playbackEndAt, playbackProgress, playbackStartAt, syncPlayback]);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended || hasEnded) {
      video.currentTime = 0;
      setHasEnded(false);
    }
    manuallyPaused.current = false;
    manuallyStarted.current = true;
    desiredPlayback.current = true;
    void video.play().catch(() => { desiredPlayback.current = false; });
  };

  const pause = () => {
    manuallyPaused.current = true;
    manuallyStarted.current = false;
    desiredPlayback.current = false;
    videoRef.current?.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="intro-media-container" ref={mediaRef}>
      <div className="intro-media-frame">
        {hasVideo ? (
          <>
            <video
              ref={videoRef}
              className="intro-media-asset"
              poster={posterImage}
              autoPlay={false}
              playsInline
              muted={isMuted}
              loop={loop}
              controls={false}
              preload="metadata"
              aria-label="Averra Labs cinematic brand film"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                desiredPlayback.current = false;
                manuallyStarted.current = false;
                setHasEnded(true);
                setIsPlaying(false);
              }}
            >
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
              {videoSources.map((source) => (
                <source key={`${source.type ?? 'video'}-${source.src}`} src={source.src} type={source.type} />
              ))}
            </video>
            {hasEnded && endingPosterImage && (
              <img className="intro-media-ending-frame" src={endingPosterImage} alt="" aria-hidden="true" />
            )}
            {showControls && (
              <div className="intro-media-controls" role="group" aria-label="Showreel controls">
                <button type="button" onClick={isPlaying ? pause : play} aria-label={hasEnded ? 'Replay showreel' : isPlaying ? 'Pause showreel' : 'Play showreel'}>
                  {hasEnded ? 'Replay' : isPlaying ? 'Pause' : 'Play'}
                </button>
                <button type="button" onClick={toggleSound} aria-label={isMuted ? 'Turn showreel sound on' : 'Turn showreel sound off'}>
                  {isMuted ? 'Sound off' : 'Sound on'}
                </button>
              </div>
            )}
          </>
        ) : (
          <img src={posterImage} alt={alt} loading="eager" decoding="async" fetchPriority="high" className="intro-media-asset" />
        )}
      </div>
    </div>
  );
};