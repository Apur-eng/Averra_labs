import React from 'react';
import { ROADMAP_PHASES } from '../../data/process';
import { Reveal } from '../motion/Reveal';

export const RoadmapSection: React.FC = () => {
  return (
    <section
      className="section"
      id="roadmap"
      style={{
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <Reveal distance={16} duration={0.7}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-light)'
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
                06 — WHERE WE'RE GOING
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
                From client product partnerships to independent technology platforms.
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
              We are deliberately evolving from a high-touch client engineering studio into an independent technology company building its own software products.
            </p>
          </div>
        </Reveal>

        {/* 3-Column Roadmap Progression */}
        <Reveal distance={12} delay={0.1} duration={0.65}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(260px, 30vw, 360px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
          >
            {ROADMAP_PHASES.map((phase) => (
              <div
                key={phase.phase}
                style={{
                  backgroundColor: phase.active ? 'var(--bg-card)' : 'var(--bg-secondary)',
                  border: phase.active ? '1px solid var(--text-primary)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  boxShadow: phase.active ? 'var(--shadow-card)' : 'none',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Status Indicator */}
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
                        color: phase.active ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      PHASE {phase.phase}
                    </span>

                    <span
                      className="mono-tag"
                      style={{
                        fontSize: '0.6875rem',
                        padding: '0.2rem 0.5rem',
                        backgroundColor: phase.active ? 'var(--accent-blue-subtle)' : 'var(--bg-tertiary)',
                        color: phase.active ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid',
                        borderColor: phase.active ? 'var(--accent-blue-border)' : 'var(--border-light)'
                      }}
                    >
                      {phase.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.875rem 0'
                    }}
                  >
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      margin: '0 0 1.5rem 0'
                    }}
                  >
                    {phase.description}
                  </p>
                </div>

                {/* Deliverable Points */}
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px dashed var(--border-medium)'
                  }}
                >
                  <div className="mono-tag" style={{ color: 'var(--text-tertiary)', marginBottom: '0.625rem', fontSize: '0.6875rem' }}>
                    CORE DELIVERABLES
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.375rem'
                    }}
                  >
                    {phase.deliverables.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: 'var(--accent-blue)', fontSize: '0.875rem' }}>›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
