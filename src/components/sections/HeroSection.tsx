import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { IntroMedia } from '../ui/IntroMedia';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        {/* Top Studio Identification Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.375rem 0.875rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-blue)',
              boxShadow: '0 0 6px rgba(30, 58, 138, 0.4)'
            }}
          />
          <span>Digital Product & Technology Studio</span>
          <span style={{ color: 'var(--border-medium)' }}>//</span>
          <span style={{ color: 'var(--text-muted)' }}>Active Q3/Q4</span>
        </div>

        {/* Primary Large Editorial Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '1080px',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)'
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: 'var(--text-hero)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.045em',
              color: 'var(--text-primary)',
              margin: 0
            }}
          >
            We build.{' '}
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>You grow.</span>
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'end',
              paddingTop: '0.5rem'
            }}
          >
            <p
              className="lead-text"
              style={{
                fontSize: 'clamp(1.0625rem, 1.4vw, 1.25rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0,
                maxWidth: '560px'
              }}
            >
              Averra is an independent digital product studio partnering with founders and ambitious teams.
              We combine <strong>product strategy</strong>, <strong>editorial design</strong>, and{' '}
              <strong>systems engineering</strong> to build enduring software that commands authority and drives measurable revenue.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                alignItems: 'center'
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
              <Button
                to="#work"
                variant="secondary"
                size="lg"
                onClick={(e) => {
                  const target = document.getElementById('work');
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* 01 — INTRO: Dedicated Cinematic Media Frame */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <IntroMedia
            placeholderImage="/images/intro-monolith.jpg"
            label="INTRO VIDEO"
            caption="Averra Cinematic Visual — 4K Monolith Experience (Future Media Slot)"
          />
        </div>

        {/* Architectural Discipline Matrix Strip */}
        <div
          style={{
            paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            borderTop: '1px solid var(--border-light)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)'
          }}
        >
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.375rem' }}>
              01 / Strategy
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Product Thinking & Problem Framing
            </div>
            <p className="body-small" style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Aligning technical architecture directly with commercial traction and user retention.
            </p>
          </div>

          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.375rem' }}>
              02 / Design
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Editorial Craft & Design Systems
            </div>
            <p className="body-small" style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              High-contrast typography, restrained palettes, and purposeful micro-interactions.
            </p>
          </div>

          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.375rem' }}>
              03 / Engineering
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Full-Stack & Edge Infrastructure
            </div>
            <p className="body-small" style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Sub-second response times, relational data integrity, and production-ready APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
