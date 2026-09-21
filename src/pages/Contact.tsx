import React, { useState } from 'react';
import { Mail, MessageSquare, Instagram, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Eyebrow } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectInquiry } from '../types/inquiry';

// Clear production placeholder for WhatsApp (easily configured by studio)
const WHATSAPP_CONTACT_URL = 'https://wa.me/?text=Hello%20Averra%2C%20I%20would%20like%20to%20discuss%20a%20project';

const PROJECT_TYPES = [
  'Website / Flagship',
  'E-commerce Store',
  'Web Application',
  'SaaS Product',
  'AI & Automation',
  'Other / Custom'
];

const BUDGET_RANGES = [
  '₹7,500 (Growth Tier)',
  '₹12,000 (Premium Flagship)',
  '₹15,000+ (3D + SaaS Package)',
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
    email: '',
    company: '',
    projectType: 'Website / Flagship',
    budget: '₹12,000 (Premium Flagship)',
    timeline: '7–14 Days (Fast Track)',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Averra v2 Project Inquiry Received:', formData);
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Website / Flagship',
      budget: '₹12,000 (Premium Flagship)',
      timeline: '7–14 Days (Fast Track)',
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
                  <span style={{ color: 'var(--accent-blue)' }}>Let’s build it.</span>
                </h1>
                <p className="lead-text">
                  Whether you need a high-performance marketing flagship, a custom web app, or an automated operational pipeline, we are ready to bring your concept into live production.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}
              >
                <div className="mono-tag" style={{ color: 'var(--accent-blue)' }}>
                  Direct Contact Channels
                </div>

                {/* Email */}
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
                      color: 'var(--text-primary)'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem' }}>Email Us Directly</div>
                    <a
                      href="mailto:hello@averralabs.com"
                      style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}
                    >
                      hello@averralabs.com
                    </a>
                  </div>
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
                      color: 'var(--text-primary)'
                    }}
                  >
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem' }}>WhatsApp Direct</div>
                    <a
                      href={WHATSAPP_CONTACT_URL}
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
                      Chat with an Engineer →
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
                      color: 'var(--text-primary)'
                    }}
                  >
                    <Instagram size={18} />
                  </div>
                  <div>
                    <div className="body-small" style={{ fontSize: '0.75rem' }}>Instagram</div>
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

              {/* Studio Availability Notice */}
              <div
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div className="mono-tag" style={{ color: 'var(--accent-blue)', marginBottom: '0.375rem' }}>
                  Availability Notice
                </div>
                <p className="body-small">
                  We accept a limited number of client engagements each month to maintain obsessive attention to quality.
                  Current estimated start: <strong>Immediate / Within 3 Days</strong>.
                </p>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
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
                Project Inquiry
              </h2>
              <p className="body-small" style={{ marginBottom: '2rem' }}>
                Fill out the details below. We review every brief carefully and respond with technical recommendations within 24 hours.
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
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="inq-email" className="form-label">
                    Work Email *
                  </label>
                  <input
                    id="inq-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    placeholder="e.g. Acme Corp or Startup Name"
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

                {/* Approximate Budget Range */}
                <div className="form-group">
                  <label className="form-label">Approximate Budget Range</label>
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
                    Project Details & Objectives *
                  </label>
                  <textarea
                    id="inq-details"
                    required
                    placeholder="Tell us about the project goals, key requirements, references, or specific problems to solve..."
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
                  Submit Inquiry
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
              Inquiry Received
            </h3>

            <p className="body-text" style={{ marginBottom: '2rem' }}>
              Thank you, <strong>{formData.name || 'there'}</strong>. An Averra lead engineer will review your project requirements and get in touch within 24 hours.
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
