import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '../../types/project';
import { PillTag, MonoTag } from './Badge';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = 'grid',
  className = ''
}) => {
  const isFeatured = layout === 'featured';
  const projectImage = project.thumbnail || project.heroImage;

  return (
    <article
      className={`project-card ${isFeatured ? 'project-card-featured' : ''} ${className}`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all var(--transition-fast)',
        position: 'relative'
      }}
    >
      <Link
        to={`/work/${project.slug}`}
        aria-label={`View case study for ${project.title}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        {/* Visual Mockup Header / Real Project Image */}
        <div
          className="project-card-visual"
          style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
            borderBottom: '1px solid var(--border-light)',
            minHeight: isFeatured ? '280px' : '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {projectImage && (
            <>
              <img
                src={projectImage}
                alt={project.title}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-normal)'
                }}
                className="card-photo"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(18, 20, 19, 0.45) 0%, rgba(18, 20, 19, 0.15) 50%, rgba(18, 20, 19, 0.65) 100%)'
                }}
              />
            </>
          )}

          {/* Top Bar with Badge and Arrow */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}
          >
            <span
              className="media-wireframe-badge"
              style={{
                background: projectImage ? 'rgba(20, 22, 21, 0.75)' : undefined,
                color: projectImage ? '#FFFFFF' : undefined,
                borderColor: projectImage ? 'rgba(255, 255, 255, 0.2)' : undefined,
                backdropFilter: 'blur(8px)'
              }}
            >
              {project.categoryTag}
            </span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: projectImage ? 'rgba(20, 22, 21, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                color: projectImage ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: projectImage ? 'rgba(255, 255, 255, 0.25)' : 'var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform var(--transition-fast)'
              }}
              className="card-arrow-badge"
            >
              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Fallback wireframe graphics if no project photo */}
          {!projectImage && (
            <div
              className="media-wireframe-graphic"
              style={{
                height: isFeatured ? '140px' : '90px',
                marginTop: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div className="wireframe-bar accent" style={{ width: '40%' }}></div>
              <div className="wireframe-bar" style={{ width: '75%' }}></div>
              <div className="wireframe-grid-mini">
                <div className="wireframe-cell"></div>
                <div className="wireframe-cell"></div>
                <div className="wireframe-cell"></div>
              </div>
            </div>
          )}

          {/* Live Link Pill on photo if available */}
          {project.liveUrl && (
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.25rem 0.625rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.92)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  display: 'inline-block'
                }}
              />
              <span>Live Site</span>
              <ExternalLink size={11} />
            </div>
          )}
        </div>

        {/* Card Body */}
        <div
          style={{
            padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              {project.client}
            </span>
            <MonoTag>{project.year}</MonoTag>
          </div>

          <h3
            style={{
              fontSize: isFeatured ? '1.5rem' : '1.25rem',
              fontWeight: 600,
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              color: 'var(--text-primary)'
            }}
          >
            {project.title}
          </h3>

          <p
            className="body-small"
            style={{
              marginBottom: '1.25rem',
              flexGrow: 1,
              display: '-webkit-box',
              WebkitLineClamp: isFeatured ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {project.shortDesc}
          </p>

          {/* Technology Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.375rem',
              marginBottom: project.metrics ? '1rem' : 0
            }}
          >
            {project.technology.slice(0, 3).map((tech) => (
              <PillTag key={tech}>{tech}</PillTag>
            ))}
            {project.technology.length > 3 && (
              <PillTag>+{project.technology.length - 3}</PillTag>
            )}
          </div>

          {/* Verified Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="work-metrics-badge" style={{ margin: '0.75rem 0 0 0' }}>
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <React.Fragment key={metric.label}>
                  {idx > 0 && <div className="metric-separator" />}
                  <div className="metric-item">
                    <span className="metric-val">{metric.value}</span>
                    <span className="metric-lbl">{metric.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};
