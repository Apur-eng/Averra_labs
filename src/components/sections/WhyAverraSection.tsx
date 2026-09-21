import React, { useState } from 'react';
import { WHY_AVERRA_PRINCIPLES } from '../../data/process';

export const WhyAverraSection: React.FC = () => {
  const [hoveredNum, setHoveredNum] = useState<string | null>(null);

  return (
    <section
      className="section"
      id="why-averra"
      style={{
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-medium)'
          }}
        >
          <div>
            <div
              className="mono-tag"
              style={{
                color: 'var(--accent-blue)',
                marginBottom: '0.75rem',
                letterSpacing: '0.1em'
              }}
            >
              05 — WHY AVERRA
            </div>
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                margin: 0,
                maxWidth: '640px'
              }}
            >
              Small team. Serious work. No layers in between.
            </h2>
          </div>

          <p
            className="body-small"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '380px',
              margin: 0,
              lineHeight: 1.6
            }}
          >
            We choose partners deliberately. Every project gets executive-level architectural focus, direct founder access, and zero corporate overhead.
          </p>
        </div>

        {/* 3x2 Architectural Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 360px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.75rem)'
          }}
        >
          {WHY_AVERRA_PRINCIPLES.map((principle) => {
            const isHovered = hoveredNum === principle.num;

            return (
              <div
                key={principle.num}
                onMouseEnter={() => setHoveredNum(principle.num)}
                onMouseLeave={() => setHoveredNum(null)}
                style={{
                  backgroundColor: isHovered ? 'var(--bg-card)' : 'var(--bg-primary)',
                  border: isHovered ? '1px solid var(--accent-blue)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isHovered ? 'var(--shadow-card)' : 'none'
                }}
              >
                <div>
                  {/* Top Bar: Number + Theme Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        color: isHovered ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {principle.num}
                    </span>

                    <span
                      className="mono-tag"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.1em',
                        color: isHovered ? 'var(--accent-blue)' : 'var(--text-muted)'
                      }}
                    >
                      {principle.theme}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.1875rem, 1.5vw, 1.375rem)',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.75rem 0'
                    }}
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {principle.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Marker */}
                <div
                  style={{
                    paddingTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem'
                  }}
                >
                  <span
                    style={{
                      width: isHovered ? '24px' : '12px',
                      height: '1px',
                      backgroundColor: isHovered ? 'var(--accent-blue)' : 'var(--border-medium)',
                      transition: 'all var(--transition-fast)'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      color: isHovered ? 'var(--accent-blue)' : 'transparent',
                      letterSpacing: '0.06em',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    DISCIPLINE PILLAR
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
