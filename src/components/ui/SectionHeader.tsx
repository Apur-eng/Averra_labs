import React from 'react';
import { Eyebrow } from './Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center' | 'between';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  lead,
  action,
  align = 'left',
  className = ''
}) => {
  if (align === 'between' && action) {
    return (
      <div
        className={`section-header-between ${className}`}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="section-title">{title}</h2>
          {lead && <p className="lead-text" style={{ marginTop: '0.75rem' }}>{lead}</p>}
        </div>
        <div>{action}</div>
      </div>
    );
  }

  const isCenter = align === 'center';

  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '840px',
        margin: isCenter ? '0 auto 3rem auto' : '0 0 2.5rem 0'
      }}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="lead-text" style={{ marginTop: '0.75rem' }}>{lead}</p>}
    </div>
  );
};
