import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, className = '' }) => {
  return <div className={`eyebrow ${className}`.trim()}>{children}</div>;
};

interface PillTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue';
  className?: string;
}

export const PillTag: React.FC<PillTagProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variantClass = variant === 'blue' ? 'pill-tag-blue' : '';
  return (
    <span className={`pill-tag ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

interface MonoTagProps {
  children: React.ReactNode;
  className?: string;
}

export const MonoTag: React.FC<MonoTagProps> = ({ children, className = '' }) => {
  return <span className={`mono-tag ${className}`.trim()}>{children}</span>;
};
