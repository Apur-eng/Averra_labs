import React, { useState } from 'react';
import { MessageSquare, Phone, Instagram, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Eyebrow } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectInquiry } from '../types/inquiry';

const WHATSAPP_NUMBER = '+91 92782 09518';
const WHATSAPP_URL = 'https://wa.me/919278209518';
const PHONE_NUMBER = '+91 88400 65294';
const PHONE_URL = 'tel:+918840065294';

const TEAM = ['Apurv Singh', 'Abhinav Tiwari', 'Ritesh Singh'];

const PROJECT_TYPES = [
  'Website / Flagship',
  'Dynamic / 3D Animated',
  'E-commerce Store',
  'Web Application',
  'SaaS Product',
  'AI & Automation',
  'Other / Custom'
];

const BUDGET_RANGES = [
  '₹8,000 — Basic Website',
  '₹15,000 — Dynamic / 3D',
  '₹25,000+ — E-commerce',
  'Custom Scope'
];

const TIMELINE_OPTIONS = [
  '7–14 Days (Fast Track)',
  '2–4 Weeks (Standard)',
  '1–2 Months',
  'Flexible'
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Averra Project Brief Received:', formData);
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      details: ''
    });
  };

  return (
    <div className="page-contact" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem'
          }}
          className="contact-layout-grid"
        >
          {/* Main Grid Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3.5rem'
            }}
            className="grid-contact-split"
          >
            {/* Left Column: Direct Info */}
            <div>
              <div style={{ maxWidth: '520px', marginBottom: '3rem' }}>
                <Eyebrow>Start a Project</Eyebrow>
                <h1 className="display-title" style={{ marginBottom: '1.25rem' }}>
                  Have an idea? <br />
                  <span style={{ color: 'var(--accent-blue)' }}>Let's build it.</span>
                </h1>
                <p className="lead-text">
                  Whether you need a high-performance marketing flagship, a custom web app, or an automated operational pipeline, we are ready to bring your concept into live production.
                </p>
              </div>

              {/* Pricing Reference */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem 2rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                  Starting Prices
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { label: 'Basic Website', price: '₹8,000' },
                    { label: 'Dynamic / 3D Animated', price: '₹15,000' },
                    { label: 'E-commerce', price: '₹25,000+' }
                  ].map(({ label, price }, i, arr) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem 0',
                        borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none'
                      }}
                    >
                      <span className="body-small" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}>{price}</span>
                    </div>
                  ))}
                </div>
                <p className="body-small" style={{ marginTop: '1rem', color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>
                  Final scope and pricing depend on requirements. Tell us what you're building.
                </p>
              </div>

              {/* Direct Channels */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div className="mono-tag" style={{ color: 'var(--accent-blue)' }}>
                  Direct Contact
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      flexShrink: 0
                    }}
                  >
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem', marginBottom: '0.2rem' }}>WhatsApp</div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      {WHATSAPP_NUMBER} →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem', marginBottom: '0.2rem' }}>Phone</div>
                    <a
                      href={PHONE_URL}
                      style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      flexShrink: 0
                    }}
                  >
                    <Instagram size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem', marginBottom: '0.2rem' }}>Instagram</div>
                    <a
                      href="https://instagram.com/averralabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    >
                      @averralabs
                    </a>
                  </div>
                </div>
              </div>

              {/* Team */}
              <div
                style={{
                  padding: '1.5rem 2rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.875rem' }}>
                  The Team
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {TEAM.map((name) => (
                    <div key={name} className="body-small" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Project Brief Form */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Project Brief
              </h2>
              <p className="body-small" style={{ marginBottom: '2rem' }}>
                Fill out the details below. We review every brief and respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="inq-name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="inq-phone" className="form-label">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="inq-phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Company */}
                <div className="form-group">
                  <label htmlFor="inq-company" className="form-label">
                    Company / Organization
                  </label>
                  <input
                    id="inq-company"
                    type="text"
                    placeholder="Company or organization name"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                {/* Project Category Selection */}
                <div className="form-group">
                  <label className="form-label">What are you looking to build?</label>
                  <div className="pill-select-group">
                    {PROJECT_TYPES.map((type) => (
                      <div
                        key={type}
                        className={`pill-option ${formData.projectType === type ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="form-group">
                  <label className="form-label">Approximate Budget</label>
                  <div className="pill-select-group">
                    {BUDGET_RANGES.map((budget) => (
                      <div
                        key={budget}
                        className={`pill-option ${formData.budget === budget ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, budget })}
                      >
                        {budget}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Timeline */}
                <div className="form-group">
                  <label className="form-label">Target Timeline</label>
                  <div className="pill-select-group">
                    {TIMELINE_OPTIONS.map((timeline) => (
                      <div
                        key={timeline}
                        className={`pill-option ${formData.timeline === timeline ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, timeline })}
                      >
                        {timeline}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <label htmlFor="inq-details" className="form-label">
                    Tell us what you're building *
                  </label>
                  <textarea
                    id="inq-details"
                    required
                    placeholder="Describe the project — goals, requirements, references, or specific problems to solve..."
                    className="form-textarea"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  icon={<ArrowRight size={18} />}
                >
                  Send Project Brief
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Feedback Modal */}
      {isSubmitted && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(18, 20, 19, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 1000,
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={handleModalClose}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem',
              position: 'relative',
              textAlign: 'center',
              boxShadow: 'var(--shadow-hover)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleModalClose}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.5rem',
                color: 'var(--text-tertiary)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-blue-subtle)',
                color: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Brief Received
            </h3>

            <p className="body-text" style={{ marginBottom: '1.25rem' }}>
              Thank you, <strong>{formData.name || 'there'}</strong>. We will review your project and get back to you within 24 hours.
            </p>

            <p className="body-small" style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              In the meantime, reach us on{' '}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-blue)', fontWeight: 600 }}
              >
                WhatsApp
              </a>
              {' '}or call{' '}
              <a href={PHONE_URL} style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{PHONE_NUMBER}</a>.
            </p>

            <Button
              variant="primary"
              size="md"
              onClick={handleModalClose}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

