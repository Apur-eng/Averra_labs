import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLenis } from '../../motion/lenis/useLenis';

export type HeroVariant = 'asymmetric' | 'swiss-split' | 'staircase';

const VARIANT_OPTIONS: { id: HeroVariant; code: string; label: string }[] = [
  { id: 'asymmetric', code: '01', label: 'Asymmetric Cascade' },
  { id: 'swiss-split', code: '02', label: 'Swiss Split' },
  { id: 'staircase', code: '03', label: 'Stepped Staircase' },
];

function getInitialVariant(): HeroVariant {
  if (typeof window === 'undefined') return 'asymmetric';
  const param = new URLSearchParams(window.location.search).get('hero');
  if (param === 'swiss-split' || param === '2') return 'swiss-split';
  if (param === 'staircase' || param === '3') return 'staircase';
  return 'asymmetric';
}

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollTo } = useLenis();
  const [variant, setVariant] = useState<HeroVariant>(getInitialVariant);

  // Seamless scroll-driven transition: typography lifts & softens while the cinematic showreel expands into focus
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const typographyY = useTransform(
    scrollYProgress,
    [0, 0.7],
    shouldReduceMotion ? [0, 0] : [0, -44]
  );

  const typographyOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    shouldReduceMotion ? [1, 1] : [1, 0.35]
  );

  const easeArchitectural = [0.16, 1, 0.3, 1] as const;

  // Short, crisp masked line reveals
  const maskLineVariants = {
    hidden: { y: shouldReduceMotion ? '0%' : '105%', opacity: shouldReduceMotion ? 1 : 0 },
    visible: (index: number) => ({
      y: '0%',
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.65,
            ease: easeArchitectural,
            delay: 0.08 + index * 0.065,
          },
    }),
  };

  const fadeVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: (delaySteps: number) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.55,
            ease: easeArchitectural,
            delay: delaySteps * 0.07,
          },
    }),
  };

  const handleExploreWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById('work');
    if (target) {
      e.preventDefault();
      scrollTo(target, { offset: -24 });
    }
  };

  const handleVariantChange = (nextVariant: HeroVariant) => {
    setVariant(nextVariant);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('hero', nextVariant);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <section
      ref={containerRef}
      className={`hero-editorial-section hero-variant--${variant}`}
      id="hero"
      aria-label="Averra Labs Hero"
    >
      {/* 1. Compact Architectural Top Bar + Prototype Variation Switcher */}
      <motion.div
        className="hero-top-strip"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeVariants}
      >
        <div className="hero-meta-item">
          <span className="hero-meta-dot" aria-hidden="true" />
          <span>AVERRA LABS</span>
          <span className="hero-meta-divider" aria-hidden="true">/</span>
          <span>DIGITAL PRODUCT STUDIO</span>
        </div>

        {/* Prototype Layout Variation Switcher (A / B / C) */}
        <div className="hero-variant-switcher" role="group" aria-label="Hero typography variations">
          <span className="hero-variant-prefix desktop-only">LAYOUT //</span>
          {VARIANT_OPTIONS.map((opt) => {
            const isActive = variant === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleVariantChange(opt.id)}
                aria-pressed={isActive}
                className={`hero-variant-btn ${isActive ? 'active' : ''}`}
                title={`Variation ${opt.code}: ${opt.label}`}
              >
                <span className="hero-variant-code">{opt.code}</span>
                <span className="hero-variant-name desktop-only">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* 2. Typography & CTA Composition (3 Variations, Same Exact Offerings) */}
      <motion.div
        key={variant}
        className="hero-composition"
        style={{ y: typographyY, opacity: typographyOpacity }}
        initial="hidden"
        animate="visible"
      >
        {variant === 'asymmetric' && (
          <div className="hero-layout-asymmetric">
            <div className="hero-asymmetric-top">
              <div className="hero-kicker-mask">
                <motion.p className="hero-lead-kicker" custom={0} variants={maskLineVariants}>
                  We build<span className="hero-accent-dot">.</span>
                </motion.p>
              </div>

              <motion.div className="hero-aside-meta" custom={3.5} variants={fadeVariants}>
                <p className="hero-tagline">
                  Designed to impress. <strong>Engineered to perform.</strong>
                </p>
                <div className="hero-actions">
                  <Button to="/contact" variant="primary" size="md" icon={<ArrowRight size={16} />}>
                    Start a Project
                  </Button>
                  <a href="#work" className="hero-work-link" onClick={handleExploreWork}>
                    <span>Explore Our Work</span>
                    <ArrowDownRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>

            <h1 className="hero-display-stack" aria-label="We build Websites, Mobile Apps, SaaS and AI-Powered Assistants">
              <span className="hero-line-mask hero-asym-line-1">
                <motion.span className="hero-line-inner" custom={1} variants={maskLineVariants}>
                  Websites<span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
              <span className="hero-line-mask hero-asym-line-2">
                <motion.span className="hero-line-inner" custom={2} variants={maskLineVariants}>
                  Mobile Apps<span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
              <span className="hero-line-mask hero-asym-line-3">
                <motion.span className="hero-line-inner" custom={3} variants={maskLineVariants}>
                  SaaS &amp; <span className="hero-accent-text">AI-Powered Assistants</span>
                  <span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
            </h1>
          </div>
        )}

        {variant === 'swiss-split' && (
          <div className="hero-layout-swiss">
            <motion.div className="hero-swiss-left" custom={1} variants={fadeVariants}>
              <div className="hero-kicker-mask">
                <motion.p className="hero-lead-kicker hero-lead-kicker--lg" custom={0} variants={maskLineVariants}>
                  We build
                </motion.p>
              </div>
              <p className="hero-tagline hero-tagline--swiss">
                Designed to impress.
                <br />
                <strong>Engineered to perform.</strong>
              </p>
              <div className="hero-actions">
                <Button to="/contact" variant="primary" size="md" icon={<ArrowRight size={16} />}>
                  Start a Project
                </Button>
                <a href="#work" className="hero-work-link" onClick={handleExploreWork}>
                  <span>Explore Our Work</span>
                  <ArrowDownRight size={14} />
                </a>
              </div>
            </motion.div>

            <h1 className="hero-swiss-right" aria-label="We build Websites, Mobile Apps, SaaS and AI-Powered Assistants">
              <span className="hero-swiss-row">
                <span className="hero-swiss-idx">01</span>
                <span className="hero-line-mask">
                  <motion.span className="hero-line-inner" custom={1} variants={maskLineVariants}>
                    Websites.
                  </motion.span>
                </span>
              </span>
              <span className="hero-swiss-row">
                <span className="hero-swiss-idx">02</span>
                <span className="hero-line-mask">
                  <motion.span className="hero-line-inner" custom={2} variants={maskLineVariants}>
                    Mobile Apps.
                  </motion.span>
                </span>
              </span>
              <span className="hero-swiss-row hero-swiss-row--accent">
                <span className="hero-swiss-idx">03</span>
                <span className="hero-line-mask">
                  <motion.span className="hero-line-inner" custom={3} variants={maskLineVariants}>
                    SaaS &amp; <span className="hero-accent-text">AI-Powered Assistants</span>.
                  </motion.span>
                </span>
              </span>
            </h1>
          </div>
        )}

        {variant === 'staircase' && (
          <div className="hero-layout-staircase">
            <div className="hero-staircase-header">
              <div className="hero-kicker-mask">
                <motion.p className="hero-lead-kicker" custom={0} variants={maskLineVariants}>
                  We build
                </motion.p>
              </div>
              <motion.p className="hero-tagline" custom={1} variants={fadeVariants}>
                Designed to impress. <strong>Engineered to perform.</strong>
              </motion.p>
            </div>

            <h1 className="hero-staircase-stack" aria-label="We build Websites, Mobile Apps, SaaS and AI-Powered Assistants">
              <span className="hero-line-mask hero-stair-1">
                <motion.span className="hero-line-inner" custom={1} variants={maskLineVariants}>
                  Websites<span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
              <span className="hero-line-mask hero-stair-2">
                <motion.span className="hero-line-inner" custom={2} variants={maskLineVariants}>
                  Mobile Apps<span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
              <span className="hero-line-mask hero-stair-3">
                <motion.span className="hero-line-inner" custom={3} variants={maskLineVariants}>
                  SaaS &amp; <span className="hero-accent-text">AI-Powered Assistants</span>
                  <span className="hero-accent-dot">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.div className="hero-staircase-footer" custom={4} variants={fadeVariants}>
              <div className="hero-actions">
                <Button to="/contact" variant="primary" size="md" icon={<ArrowRight size={16} />}>
                  Start a Project
                </Button>
                <a href="#work" className="hero-work-link" onClick={handleExploreWork}>
                  <span>Explore Our Work</span>
                  <ArrowDownRight size={14} />
                </a>
              </div>
              <div className="hero-staircase-note desktop-only">
                <span>SCROLL FOR SHOWREEL &amp; SELECTED WORK</span>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

    </section>
  );
};
