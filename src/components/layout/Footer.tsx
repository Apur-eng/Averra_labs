import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        {/* Top multi-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem'
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

            <p className="body-small" style={{ marginBottom: '1.25rem' }}>
              We turn business ideas into polished digital products. Strategy, design, full-stack engineering, and AI automation.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-secondary)'
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
              <span>Accepting projects for Q3/Q4</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Work & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/know-us" className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Know Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              Capabilities
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                01 — Modern Websites
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                02 — E-commerce Platforms
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                03 — Web Applications
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                04 — SaaS Products
              </li>
              <li className="body-small" style={{ color: 'var(--text-secondary)' }}>
                05 — AI Automation Systems
              </li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              Direct Connect
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="mailto:hello@averralabs.com"
                  className="body-small"
                  style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  hello@averralabs.com
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="body-small"
                  style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  WhatsApp Inquiries (Via Contact)
                  <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/averralabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-small"
                  style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Instagram @averralabs
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)'
          }}
        >
          <div>© {new Date().getFullYear()} Averra Labs. All rights reserved.</div>
          <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
            Small team. Serious work.
          </div>
        </div>
      </div>
    </footer>
  );
};
