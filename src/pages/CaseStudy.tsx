import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Eyebrow, PillTag } from '../components/ui/Badge';

export const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="display-title" style={{ marginBottom: '1rem' }}>
            Case Study Not Found
          </h1>
          <p className="lead-text" style={{ marginBottom: '2rem' }}>
            The requested project archive does not exist or has been relocated.
          </p>
          <Button to="/work" variant="primary" icon={<ArrowLeft size={16} />} iconPosition="left">
            Back to All Work
          </Button>
        </div>
      </div>
    );
  }

  // Next Project navigation
  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  return (
    <div className="page-case-study" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em'
            }}
          >
            <ArrowLeft size={14} />
            Back to All Work
          </Link>
        </div>

        {/* Project Hero Header */}
        <div style={{ maxWidth: '960px', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <Eyebrow>{project.categoryTag} Case Study</Eyebrow>
            {project.liveUrl && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.25rem 0.625rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-blue-subtle)',
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span>Active Live Domain</span>
              </span>
            )}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem'
            }}
          >
            {project.title}
          </h1>
          <p className="lead-text" style={{ marginBottom: '1.75rem' }}>{project.description}</p>

          {/* Direct Live Website Action */}
          {project.liveUrl && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>Visit Live Website</span>
                <ExternalLink size={18} />
              </a>
              <span className="mono-tag" style={{ color: 'var(--text-tertiary)' }}>
                {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </div>
          )}
        </div>

        {/* Metadata Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            padding: '1.75rem 2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.375rem' }}>Client</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.client}</div>
          </div>
          <div>
            <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.375rem' }}>Industry</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.industry}</div>
          </div>
          <div>
            <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.375rem' }}>Category</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.category}</div>
          </div>
          <div>
            <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.375rem' }}>Year</div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.year}</div>
          </div>
          {project.liveUrl && (
            <div>
              <div className="mono-tag" style={{ fontSize: '0.6875rem', marginBottom: '0.375rem' }}>Live Domain</div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <span>Launch</span>
                <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Hero Media Showcase (Real Image or Fallback Graphic) */}
        {project.heroImage ? (
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              marginBottom: '4.5rem',
              position: 'relative',
              background: 'var(--bg-secondary)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <img
              src={project.heroImage}
              alt={`${project.title} Hero Showcase`}
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.25rem 2rem',
                background: 'linear-gradient(transparent, rgba(18, 20, 19, 0.88))',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  className="media-wireframe-badge"
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    color: '#FFFFFF',
                    borderColor: 'rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  {project.categoryTag}
                </span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Live Platform Showcase</span>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#121413',
                    border: '1px solid #FFFFFF',
                    gap: '0.375rem',
                    fontWeight: 600
                  }}
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div
            style={{
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginBottom: '4.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="media-wireframe-badge">Project Showcase Preview</span>
              <span className="mono-tag" style={{ background: 'rgba(255,255,255,0.7)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                {project.categoryTag}
              </span>
            </div>

            <div
              className="media-wireframe-graphic"
              style={{
                maxWidth: '680px',
                height: '180px',
                margin: '3rem auto'
              }}
            >
              <div className="wireframe-bar accent" style={{ width: '55%' }}></div>
              <div className="wireframe-bar" style={{ width: '80%' }}></div>
              <div className="wireframe-grid-mini" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="wireframe-cell"></div>
                <div className="wireframe-cell"></div>
                <div className="wireframe-cell"></div>
                <div className="wireframe-cell"></div>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>
              ENGINEERED WITH RIGOR & PRECISION
            </div>
          </div>
        )}

        {/* Section 01: The Challenge */}
        <div className="grid-editorial-split" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              01 / Context
            </div>
            <h2 className="section-title">The Challenge</h2>
          </div>
          <div>
            <p className="body-large">{project.challenge}</p>
          </div>
        </div>

        {/* Section 02: The Strategy & Approach */}
        <div className="grid-editorial-split" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              02 / Strategy
            </div>
            <h2 className="section-title">The Approach</h2>
          </div>
          <div>
            <p className="body-large" style={{ marginBottom: '1.5rem' }}>{project.approach}</p>
            <div className="mono-tag" style={{ marginBottom: '0.75rem' }}>Scope of Services</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.services.map((svc) => (
                <PillTag key={svc} variant="blue">{svc}</PillTag>
              ))}
            </div>
          </div>
        </div>

        {/* Section 03: Visual Showcase with Real Images */}
        <div style={{ paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3.5rem' }}>
          <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            03 / Interface
          </div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Experience Showcase</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {project.visualShowcase.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {item.image ? (
                  <div
                    style={{
                      height: '220px',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      background: 'var(--bg-secondary)',
                      position: 'relative',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <span
                      className="media-wireframe-badge"
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(20, 22, 21, 0.8)',
                        color: '#FFFFFF',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {item.badge || `UI View 0${idx + 1}`}
                    </span>
                  </div>
                ) : (
                  <div
                    className="work-media-placeholder"
                    style={{ minHeight: '180px', marginBottom: '1.25rem' }}
                  >
                    <span className="media-wireframe-badge">
                      {item.badge || `UI View 0${idx + 1}`}
                    </span>
                    <div className="wireframe-bar accent" style={{ width: '120px' }}></div>
                  </div>
                )}
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p className="body-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 04: Design System */}
        <div className="grid-editorial-split" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              04 / Craft
            </div>
            <h2 className="section-title">Design System & UX</h2>
          </div>
          <div>
            <p className="body-large">{project.design}</p>
          </div>
        </div>

        {/* Section 05: Development & Tech Stack */}
        <div className="grid-editorial-split" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid var(--border-light)', marginBottom: '3.5rem' }}>
          <div>
            <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
              05 / Engineering
            </div>
            <h2 className="section-title">Development & Technology</h2>
          </div>
          <div>
            <p className="body-large" style={{ marginBottom: '1.5rem' }}>{project.development}</p>
            <div className="mono-tag" style={{ marginBottom: '0.75rem' }}>Technology Stack & Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 06: Outcome & Testimonial */}
        <div style={{ paddingBottom: '4rem', borderBottom: '1px solid var(--border-light)', marginBottom: '4rem' }}>
          <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            06 / Impact
          </div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Measurable Outcomes</h2>

          {project.metrics && project.metrics.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: '1.75rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                    {m.value}
                  </div>
                  <div className="mono-tag" style={{ marginTop: '0.5rem' }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.testimonial && (
            <div
              style={{
                padding: '2rem 2.5rem',
                backgroundColor: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent-blue)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                border: '1px solid var(--border-light)',
                borderLeftWidth: '3px'
              }}
            >
              <p
                style={{
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: 1.6
                }}
              >
                “{project.testimonial.quote}”
              </p>
              <div className="mono-tag" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                — {project.testimonial.author}
                {project.testimonial.title ? `, ${project.testimonial.title}` : ''}
              </div>
            </div>
          )}
        </div>

        {/* Next Project & Inquiry Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {/* Next Project Card */}
          <div
            onClick={() => {
              navigate(`/work/${nextProject.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              padding: '2.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div>
              <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.75rem' }}>
                Next Case Study →
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {nextProject.title}
              </h3>
              <p className="body-small">{nextProject.shortDesc}</p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
              <span>Explore Case Study</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Project Inquiry Prompt */}
          <div
            style={{
              padding: '2.5rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <Eyebrow>Start a Project</Eyebrow>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Want to build something similar?
              </h3>
              <p className="body-small">
                Let’s talk about your technical requirements, architectural options, and timeline.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Button to="/contact" variant="primary" size="md" icon={<ArrowRight size={16} />}>
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
