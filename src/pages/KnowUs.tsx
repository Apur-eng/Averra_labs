import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { PROCESS_STEPS, PHILOSOPHY_VALUES } from '../data/process';
import { Button } from '../components/ui/Button';
import { Eyebrow, PillTag } from '../components/ui/Badge';
import { RoadmapSection } from '../components/sections/RoadmapSection';

export const KnowUs: React.FC = () => {
  return (
    <div className="page-know-us" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">

        {/* 1. Who We Are */}
        <div style={{ maxWidth: '880px', marginBottom: '4.5rem' }}>
          <Eyebrow>Who We Are</Eyebrow>
          <h1 className="display-title" style={{ marginBottom: '1.5rem' }}>
            A small, ambitious technology studio turning ideas into polished digital products.
          </h1>
          <p className="lead-text">
            We are designers, full-stack engineers, and product builders. We do not operate like a bloated legacy agency; we work as dedicated technical allies for founders, startups, and established brands ready to launch modern, high-performance software.
          </p>
        </div>

        <div className="section-divider" style={{ marginBottom: '4.5rem' }} />

        {/* 2. Our Story */}
        <div className="grid-editorial-split" style={{ marginBottom: '4.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              01 / Origin
            </div>
            <h2 className="section-title">Our Story</h2>
          </div>
          <div>
            <p className="body-large" style={{ marginBottom: '1.25rem' }}>
              Averra began with a straightforward conviction: the traditional digital agency model is broken. Most agencies deliver slow, template-heavy websites and immediately pass clients off to non-technical account managers.
            </p>
            <p className="body-text" style={{ marginBottom: '1.5rem' }}>
              We set out to create a modern product studio rooted in engineering rigor, craft, and clean editorial design. We bridge strategy with code, shipping high-performing products for clients today while developing our own proprietary software tools for tomorrow.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Senior-Only</div>
                <div className="mono-tag" style={{ marginTop: '0.25rem' }}>Zero Outsourcing</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Direct Access</div>
                <div className="mono-tag" style={{ marginTop: '0.25rem' }}>No Middlemen</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Sprint-Based</div>
                <div className="mono-tag" style={{ marginTop: '0.25rem' }}>Transparent Delivery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom: '4.5rem' }} />

        {/* 3. How We Work */}
        <div className="grid-editorial-split" style={{ marginBottom: '4.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              02 / Protocol
            </div>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div>
            <p className="body-large" style={{ marginBottom: '2rem' }}>
              Every product follows a disciplined, battle-tested 5-stage lifecycle:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '1.25rem',
                    paddingBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-blue)' }}>
                      {step.step}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{step.title}</span>
                  </div>
                  <div className="body-small" style={{ lineHeight: 1.6 }}>{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom: '4.5rem' }} />

        {/* 4. Team */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              03 / People
            </div>
            <h2 className="section-title">The Studio Team</h2>
            <p className="lead-text" style={{ marginTop: '0.5rem' }}>
              Direct access to the engineers and designers building your software.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {member.initial}
                  </div>

                  <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {member.name}
                  </h3>
                  <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                    {member.role}
                  </div>
                  <p className="body-small" style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {member.bio}
                  </p>
                </div>

                <div>
                  <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.5rem' }}>
                    Focus Areas
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {member.expertise.map((exp) => (
                      <PillTag key={exp}>{exp}</PillTag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom: '4.5rem' }} />

        {/* 5. How We Collaborate */}
        <div className="grid-editorial-split" style={{ marginBottom: '4.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              04 / Partnership
            </div>
            <h2 className="section-title">How We Collaborate</h2>
          </div>
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Direct Communication
                </h4>
                <p className="body-small">
                  You communicate directly with the lead engineer responsible for your architecture in dedicated Slack or WhatsApp channels.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Total Transparency
                </h4>
                <p className="body-small">
                  Live staging environments and shared tracking boards so you always know real-time project progress.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Iterative Sprints
                </h4>
                <p className="body-small">
                  Rapid feedback cycles and continuous staging deployments instead of waiting weeks for surprises.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  Shared Ownership
                </h4>
                <p className="body-small">
                  We treat your product as if it were our own, advocating for the soundest architectural and UX decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom: '4.5rem' }} />

        {/* 6. Our Philosophy */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              05 / Core Values
            </div>
            <h2 className="section-title">Our Philosophy</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {PHILOSOPHY_VALUES.map((val) => (
              <div
                key={val.title}
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {val.title}
                </h4>
                <p className="body-small">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 7. Where We're Going (Embedded Roadmap) */}
      <RoadmapSection />

      {/* 8. Bottom CTA */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <div>
            <Eyebrow>Studio Evolution</Eyebrow>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Join us on the journey.
            </h3>
            <p className="body-text">
              Ready to collaborate with a studio that treats your vision with serious care?
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
