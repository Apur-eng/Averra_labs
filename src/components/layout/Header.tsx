import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`global-header ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          backgroundColor: isScrolled ? 'rgba(252, 251, 248, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          zIndex: 100,
          transition: 'background-color var(--transition-fast), border-color var(--transition-fast)'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
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

          {/* Desktop Navigation Links */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <NavLink
              to="/work"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                padding: '0.25rem 0'
              })}
            >
              Work
            </NavLink>
            <NavLink
              to="/know-us"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                padding: '0.25rem 0'
              })}
            >
              Know Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                padding: '0.25rem 0'
              })}
            >
              Contact
            </NavLink>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="desktop-header-cta"
              icon={<ArrowRight size={15} />}
            >
              Start a Project
            </Button>

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                padding: '0.5rem',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
