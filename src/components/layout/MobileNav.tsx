import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to dismiss mobile navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-nav-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 20, 19, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        className="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          borderLeft: '1px solid var(--border-light)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            <Link
              to="/"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-primary)'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--text-primary)',
                  color: 'var(--text-inverse)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 700
                }}
              >
                A
              </div>
              <span>Averra</span>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              style={{
                padding: '0.5rem',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Links list */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '2rem' }}>
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.875rem 1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/work"
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.875rem 1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Work
            </NavLink>
            <NavLink
              to="/know-us"
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.875rem 1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Know Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.875rem 1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--bg-secondary)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Bottom CTA & direct email */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            onClick={onClose}
            className="w-full"
            style={{ width: '100%', justifyContent: 'center' }}
            icon={<ArrowRight size={18} />}
          >
            Start a Project
          </Button>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              textAlign: 'center',
              color: 'var(--text-tertiary)',
              marginTop: '1.25rem'
            }}
          >
            hello@averralabs.com
          </div>
        </div>
      </div>
    </div>
  );
};
