import React, { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { CAPABILITIES, Capability } from '../../data/capabilities';
import { Button } from '../ui/Button';

export const CapabilitiesSection: React.FC = () => {
  const [activeNumber, setActiveNumber] = useState<string>('01');

  return (
    <section
      className="section"
      id="capabilities"
      style={{
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-primary)'
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
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
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
              02 — WHAT WE BUILD
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
              Disciplined digital products across five core capabilities.
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
            We reject bloated page builders and generic templates. Every build is engineered from semantic foundations, tailored design tokens, and resilient data layers.
          </p>
        </div>

        {/* Editorial Service Index Rows */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column'
          }}
          role="list"
          aria-label="Averra studio capabilities"
        >
          {CAPABILITIES.map((cap: Capability) => {
            const isActive = activeNumber === cap.number;

            return (
              <div
                key={cap.number}
                onClick={() => setActiveNumber(isActive ? '' : cap.number)}
                onMouseEnter={() => {
                  // Optional hover activation on desktop
                  if (window.innerWidth >= 1024) {
                    setActiveNumber(cap.number);
                  }
                }}
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  paddingTop: 'clamp(1.5rem, 3vw, 2.25rem)',
                  paddingBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
                  cursor: 'pointer',
                  transition: 'background-color var(--transition-fast), border-color var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                  paddingLeft: isActive ? 'clamp(1rem, 2vw, 1.5rem)' : '0',
                  paddingRight: isActive ? 'clamp(1rem, 2vw, 1.5rem)' : '0',
                  borderRadius: isActive ? 'var(--radius-sm)' : '0'
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1.25rem, 3vw, 2.5rem)', flex: 1 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 600,
                        color: isActive ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {cap.number}
                    </span>

                    <h3
                      style={{
                        fontSize: 'clamp(1.35rem, 2.4vw, 2rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.025em',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-primary)',
                        margin: 0,
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      className="mono-tag"
                      style={{
                        display: 'none',
                        color: 'var(--text-muted)'
                      }}
                      id={`tag-${cap.number}`}
                    >
                      {cap.tag}
                    </span>

                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '1px solid var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        backgroundColor: 'var(--bg-card)',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {isActive ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                </div>

                {/* Expandable Editorial Drawer */}
                {isActive && (
                  <div
                    style={{
                      marginTop: '1.75rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px dashed var(--border-medium)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '2rem',
                      animation: 'fadeIn 0.25s ease-out'
                    }}
                  >
                    <div>
                      <div className="mono-tag" style={{ color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                        Scope & Purpose
                      </div>
                      <p
                        style={{
                          fontSize: 'var(--text-base)',
                          lineHeight: 1.65,
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}
                      >
                        {cap.description}
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          lineHeight: 1.6,
                          color: 'var(--text-muted)',
                          marginTop: '0.75rem',
                          marginBottom: 0
                        }}
                      >
                        {cap.details}
                      </p>
                    </div>

                    <div>
                      <div className="mono-tag" style={{ color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                        Verified Deliverables
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="pill-tag"
                            style={{
                              backgroundColor: 'var(--bg-card)',
                              borderColor: 'var(--border-medium)',
                              color: 'var(--text-primary)',
                              fontSize: '0.75rem'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button
                        to="/contact"
                        variant="outline-blue"
                        size="sm"
                        icon={<ArrowRight size={14} />}
                      >
                        Inquire About {cap.title}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
