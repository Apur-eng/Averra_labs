import React, { useState } from 'react';
import { Play, Maximize2 } from 'lucide-react';

export interface IntroMediaProps {
  /** Optional video source URL for future real video integration */
  videoSrc?: string;
  /** Poster / placeholder image path */
  placeholderImage?: string;
  /** Primary label displayed over placeholder */
  label?: string;
  /** Aspect ratio CSS value */
  aspectRatio?: string;
  /** Caption or technical metadata */
  caption?: string;
  /** Optional click handler or interactive preview */
  onPlayClick?: () => void;
  /** Custom max-width override (defaults to 1240px) */
  maxWidth?: string;
  /** Custom style overrides */
  style?: React.CSSProperties;
  className?: string;
}

/**
 * IntroMedia Component
 *
 * An intentional architectural media frame reserved for the future cinematic
 * intro video. Renders an overcast monolithic stone landscape placeholder with
 * clean studio coordinate overlays and a clear "INTRO VIDEO" label.
 *
 * Future replacement: Passing a `videoSrc` seamlessly renders the HTML5 video
 * without altering any surrounding layout.
 */
export const IntroMedia: React.FC<IntroMediaProps> = ({
  videoSrc,
  placeholderImage = '/images/intro-monolith.jpg',
  label = 'INTRO VIDEO',
  aspectRatio = '16 / 9',
  caption = 'Averra Cinematic Visual — 4K Framerate Master (Future Insertion Slot)',
  onPlayClick,
  maxWidth,
  style,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`intro-media-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: maxWidth || '1240px',
        margin: maxWidth ? '0' : '0 auto',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        border: '1px solid var(--border-medium)',
        backgroundColor: '#0E100F',
        boxShadow: '0 24px 60px rgba(18, 20, 19, 0.12)',
        transition: 'border-color var(--transition-normal)',
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 16:9 Aspect Ratio Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {videoSrc ? (
          /* Future Real Video Layer */
          <video
            src={videoSrc}
            autoPlay
            playsInline
            muted
            loop
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          /* Premium Architectural Cinematic Placeholder */
          <>
            <img
              src={placeholderImage}
              alt="Averra studio monolithic architecture in misty mountains"
              loading="eager"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.02)' : 'scale(1.0)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                filter: 'brightness(0.92) contrast(1.05)'
              }}
            />

            {/* Subtle Gradient Overlays for Atmospheric Depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(14, 16, 15, 0.35) 0%, rgba(14, 16, 15, 0.1) 40%, rgba(14, 16, 15, 0.65) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Corner Architectural Crop Marks */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                width: '12px',
                height: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '12px',
                height: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.4)',
                borderRight: '1px solid rgba(255, 255, 255, 0.4)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                width: '12px',
                height: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                right: '1.25rem',
                width: '12px',
                height: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                borderRight: '1px solid rgba(255, 255, 255, 0.4)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Bar: Technical Metadata */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '2.5rem',
                right: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'rgba(252, 251, 248, 0.75)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                pointerEvents: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#1E3A8A',
                    boxShadow: '0 0 6px #60A5FA'
                  }}
                />
                <span>FRAME // 001</span>
              </div>
              <div style={{ display: 'none', gap: '1.5rem' }} className="desktop-coords">
                <span>COORD // 28°36'N 77°12'E</span>
                <span>ASPECT // 16:9 CINEMATIC</span>
              </div>
            </div>

            {/* Center Callout: Intentional INTRO VIDEO Pill */}
            <div
              onClick={onPlayClick}
              style={{
                position: 'relative',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: onPlayClick ? 'pointer' : 'default',
                zIndex: 2
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.5rem 1.125rem',
                  backgroundColor: 'rgba(14, 16, 15, 0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1.0)',
                  transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FCFBF8'
                  }}
                >
                  <Play size={10} fill="#FCFBF8" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: '#FCFBF8',
                    textTransform: 'uppercase'
                  }}
                >
                  {label}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'rgba(252, 251, 248, 0.7)',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  maxWidth: '320px',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                Reserved Media Area — Future Cinematic Experience
              </span>
            </div>

            {/* Bottom Bar: Caption & Audio Note */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '2.5rem',
                right: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'rgba(252, 251, 248, 0.65)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.05em'
              }}
            >
              <span>{caption}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span>[MUTE / AMBIENT]</span>
                <Maximize2 size={12} style={{ opacity: 0.7 }} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
