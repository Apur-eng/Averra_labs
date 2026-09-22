import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';
import { useScrollDirection } from '../../../motion/scroll/useScrollDirection';
import { EASE_OUT, DURATION_NORMAL } from '../../../motion/constants';
import { useReducedMotionPreference } from '../../../motion/reducedMotion';
import { MobileNav } from '../MobileNav';

export interface NavbarProps {
  className?: string;
}

/**
 * Reusable Editorial Navbar Component
 * 
 * Behavior:
 * - Fixed positioning at viewport top
 * - Always visible at page top (scrollY <= 40px)
 * - Smoothly translates upward (-100%) when scrolling DOWN past dead zone
 * - Smoothly translates downward (0%) when scrolling UP
 * - Remains visible whenever mobile drawer is open
 * - Uses Framer Motion for transform-based animation (no display:none / unmounting)
 * - Instant transition when prefers-reduced-motion is active
 */
export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotionPreference();
  const { isVisible, isScrolled } = useScrollDirection();

  // Close mobile navigation drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Navbar must stay visible if drawer is open, if keyboard focus is inside, or when scrolling up / at top
  const isNavVisible = isVisible || mobileMenuOpen || isFocused;

  return (
    <>
      <motion.header
        className={`global-header ${isScrolled ? 'scrolled' : 'at-top'} ${className}`}
        initial={false}
        animate={{
          y: isNavVisible ? '0%' : '-100%'
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : DURATION_NORMAL,
          ease: EASE_OUT
        }}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setIsFocused(false);
          }
        }}
      >
        <div className="header-container">
          {/* LEFT: [A] Averra logo anchored firmly left */}
          <Link to="/" className="header-brand" aria-label="Averra Homepage">
            <div className="header-brand-mark">
              A
            </div>
            <span className="header-brand-text">Averra</span>
          </Link>

          {/* RIGHT: Horizontal editorial navigation & integrated CTA */}
          <div className="header-nav-cluster">
            <nav className="desktop-nav" aria-label="Primary Navigation">
              <NavLink
                to="/work"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Work
              </NavLink>
              <NavLink
                to="/know-us"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Know Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </nav>

            {/* Restrained integrated CTA: Start a Project → */}
            <Link to="/contact" className="header-editorial-cta desktop-cta">
              <span className="header-cta-label">Start a Project</span>
              <ArrowRight size={14} className="header-cta-arrow" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
