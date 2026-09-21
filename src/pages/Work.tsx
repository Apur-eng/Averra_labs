import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Button } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Badge';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => {
        const cat = project.category.toLowerCase();
        const sel = selectedCategory.toLowerCase();
        const tag = project.categoryTag.toLowerCase();
        return cat.includes(sel) || tag.includes(sel) || sel.includes(cat);
      });

  return (
    <div className="page-work" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">
        {/* Header Block */}
        <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
          <Eyebrow>Case Studies & Deliverables</Eyebrow>
          <h1 className="display-title" style={{ marginBottom: '1rem' }}>
            Work we’re proud of.
          </h1>
          <p className="lead-text">
            We don’t do superficial mockups. Every project is engineered with clear product thinking, clean systems architecture, and measurable commercial utility.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '3rem'
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: '0.5rem 1.125rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--text-primary)' : 'var(--border-light)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: isActive ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} layout="featured" />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)'
            }}
          >
            <p className="lead-text">No case studies currently active in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn btn-outline"
              style={{ marginTop: '1rem' }}
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Work Bottom CTA */}
        <div
          style={{
            marginTop: '6rem',
            paddingTop: '3.5rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Have something in mind?
            </h3>
            <p className="body-text">
              We design and engineer custom digital experiences tailored to your growth goals.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
};
