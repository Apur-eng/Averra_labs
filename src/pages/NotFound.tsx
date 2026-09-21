import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Badge';

export const NotFound: React.FC = () => {
  return (
    <div
      className="page-not-found"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <Eyebrow>404 Error</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}
        >
          Page Not Found
        </h1>
        <p className="lead-text" style={{ marginBottom: '2.5rem' }}>
          The page you are looking for has been moved, archived, or does not exist in the Averra studio catalog.
        </p>
        <Button to="/" variant="primary" size="lg" icon={<ArrowLeft size={18} />} iconPosition="left">
          Return to Studio Home
        </Button>
      </div>
    </div>
  );
};
