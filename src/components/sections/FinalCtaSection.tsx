import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      className="section"
      id="cta"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'clamp(4rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7.5rem)'
      }}
    >
      <div className="container">
        <Reveal distance={20} duration={0.8}>
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              padding: 'clamp(2.5rem, 6vw, 5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 560px), 1fr))',
              alignItems: 'center',
              gap: 'clamp(2rem, 4vw, 4rem)',
              position: 'relative'
            }}
          >
            {/* Top Hairline Indicator */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 'clamp(2.5rem, 6vw, 5rem)',
                right: 'clamp(2.5rem, 6vw, 5rem)',
                height: '1px',
                backgroundColor: 'var(--accent-blue)'
              }}
            />

            <div>
              <div
                className="mono-tag"
                style={{
                  color: 'var(--accent-blue)',
                  marginBottom: '1rem',
                  letterSpacing: '0.1em'
                }}
              >
                07 — FINAL CTA
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--text-primary)',
                  margin: '0 0 1.25rem 0'
                }}
              >
                Have an idea? <br />
                <span style={{ color: 'var(--accent-blue)' }}>Let's build it.</span>
              </h2>

              <p
                className="lead-text"
                style={{
                  fontSize: 'clamp(1.0625rem, 1.3vw, 1.2rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0,
                  maxWidth: '520px'
                }}
              >
                Tell us about what you want to bring to life. An Averra partner and lead engineer will review your project requirements and respond within 24 hours.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Start a Project
              </Button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-tertiary)'
                }}
              >
                <Mail size={14} style={{ color: 'var(--accent-blue)' }} />
                <span>Or email us directly:</span>
                <a
                  href="mailto:hello@averralabs.com"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-medium)'
                  }}
                >
                  hello@averralabs.com
                </a>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-muted)'
                }}
              >
                DIRECT FOUNDER REVIEW // NO SALES SPAM // 24-HOUR SLA
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
