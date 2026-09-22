import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Button } from '../ui/Button';
import { Reveal } from '../motion/Reveal';

export const SelectedWorkSection: React.FC = () => {
  // Prioritize the requested projects: Mokshita, Fundamics, Solasta, Feel Fresh, Pathik
  const selectedSlugs = [
    'mokshita-enterprises',
    'fundamics-tutorials',
    'solasta-life-sciences',
    'feel-fresh-cafe',
    'pathik-organic-farming'
  ];

  const showcaseProjects = selectedSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section
      className="section"
      id="work"
      style={{
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-secondary)'
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
                03 — SELECTED WORK
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
                Real products. Real engineering. Zero placeholders.
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Button
                to="/work"
                variant="secondary"
                size="md"
                icon={<ArrowRight size={16} />}
              >
                View All Projects ({PROJECTS.length})
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Editorial Project Grid */}
        <Reveal distance={14} delay={0.1} duration={0.7}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 45vw, 560px), 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              rowGap: 'clamp(3rem, 6vw, 5rem)'
            }}
          >
            {showcaseProjects.map((project) => {
              if (!project) return null;
              const displayImage = project.thumbnail || project.heroImage || '/images/intro-monolith.jpg';

              return (
                <article key={project.slug} className="editorial-project-wrapper">
                  {/* Main Clickable Card Container */}
                  <Link
                    to={`/work/${project.slug}`}
                    className="editorial-project-card"
                    aria-label={`View case study for ${project.client}`}
                  >
                    {/* Cinematic Image Frame */}
                    <div className="editorial-project-media">
                      <img
                        src={displayImage}
                        alt={project.title}
                        loading="lazy"
                        className="editorial-project-img"
                      />

                      {/* Subtle Overlay Gradient on Hover */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, transparent 60%, rgba(20, 22, 21, 0.45) 100%)',
                          pointerEvents: 'none'
                        }}
                      />

                      {/* Top Badges */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          right: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          pointerEvents: 'none'
                        }}
                      >
                        <span
                          className="mono-tag"
                          style={{
                            backgroundColor: 'rgba(20, 22, 21, 0.75)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            color: 'var(--text-inverse)',
                            padding: '0.25rem 0.625rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.6875rem'
                          }}
                        >
                          {project.category}
                        </span>

                        {project.liveUrl && (
                          <span
                            className="mono-tag"
                            style={{
                              backgroundColor: 'rgba(30, 58, 138, 0.85)',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              color: 'var(--text-inverse)',
                              padding: '0.25rem 0.625rem',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '0.6875rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}
                          >
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                backgroundColor: '#60A5FA'
                              }}
                            />
                            LIVE
                          </span>
                        )}
                      </div>

                      {/* Bottom Metadata Chip on Image */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '1rem',
                          left: '1rem',
                          right: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: 'rgba(252, 251, 248, 0.85)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          pointerEvents: 'none'
                        }}
                      >
                        <span>{project.year}</span>
                        <span>CASE STUDY ↗</span>
                      </div>
                    </div>

                    {/* 14islands-inspired Architectural Dashed Label */}
                    <div className="dashed-label" style={{ marginBottom: '0.75rem' }}>
                      <span className="dashed-label-title">{project.client}</span>
                      <span className="dashed-label-line" />
                      <span className="dashed-label-suffix">{project.categoryTag || project.category}</span>
                    </div>
                  </Link>

                  {/* Narrative Excerpt & Quick Actions */}
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: '0 0 1rem 0'
                    }}
                  >
                    {project.shortDesc}
                  </p>

                  {/* Footer Action Links */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      paddingTop: '0.5rem'
                    }}
                  >
                    <Link
                      to={`/work/${project.slug}`}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        letterSpacing: '0.04em'
                      }}
                    >
                      READ CASE STUDY <ArrowRight size={13} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          letterSpacing: '0.04em'
                        }}
                      >
                        VISIT SITE <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
