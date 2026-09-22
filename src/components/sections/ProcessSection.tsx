import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/process';
import { Reveal } from '../motion/Reveal';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section
      className="section"
      id="process"
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
                04 — HOW WE WORK
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
                A connected progression from initial problem framing to live production.
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
              We operate in tight, iterative cycles. No bureaucratic layers or handoff delays—just continuous alignment between strategy, design, and code.
            </p>
          </div>
        </Reveal>

        {/* Connected Horizontal / Adaptive Process Stepper */}
        <Reveal distance={12} delay={0.1} duration={0.65}>
          <div className="process-timeline" role="list" aria-label="Averra engineering methodology">
            {PROCESS_STEPS.map((step, idx) => {
              const isCurrent = activeStep === step.step;

              return (
                <div
                  key={step.step}
                  className={`process-step-node ${isCurrent ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStep(step.step)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    backgroundColor: isCurrent ? 'var(--bg-secondary)' : 'transparent',
                    padding: '1.5rem 1rem 1rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div>
                    {/* Step Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          color: isCurrent ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {step.step}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          color: isCurrent ? 'var(--text-primary)' : 'var(--text-muted)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        PHASE 0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      style={{
                        fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: isCurrent ? 'var(--text-primary)' : 'var(--text-primary)',
                        margin: '0 0 0.375rem 0'
                      }}
                    >
                      {step.title}
                    </h3>

                    <div
                      className="mono-tag"
                      style={{
                        fontSize: '0.6875rem',
                        color: isCurrent ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        marginBottom: '1rem'
                      }}
                    >
                      {step.subtitle}
                    </div>

                    {/* Narrative Body */}
                    <p
                      style={{
                        fontSize: 'var(--text-sm)',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Step Indicator Cue */}
                  <div
                    style={{
                      paddingTop: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: isCurrent ? 'var(--accent-blue)' : 'transparent',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    <CheckCircle2 size={12} />
                    <span>STEP VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
