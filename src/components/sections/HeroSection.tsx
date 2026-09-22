import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { IntroMedia } from '../ui/IntroMedia';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll-driven parallax (restrained, architectural)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -28]
  );

  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 18]
  );

  // Easing curve: restrained architectural editorial rhythm
  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        ...transitionConfig,
        delay: shouldReduceMotion ? 0 : custom * 0.12
      }
    })
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...transitionConfig,
        delay: shouldReduceMotion ? 0 : custom * 0.14
      }
    })
  };

  return (
    <section ref={containerRef} className="hero-editorial-section" id="hero">
      {/* 1. Top Studio Interface Metadata Row */}
      <motion.div
        className="hero-top-strip"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeVariants}
      >
        <div className="hero-meta-item">
          <span className="hero-meta-dot" />
          <span>STUDIO // 01</span>
          <span className="hero-meta-divider">/</span>
          <span>DIGITAL PRODUCT ENGINEERING</span>
        </div>

        <div className="hero-meta-item desktop-only">
          <span>“WE BUILD. YOU GROW.”</span>
          <span className="hero-meta-divider">/</span>
          <span>AVAILABILITY: Q3/Q4</span>
        </div>

        <div className="hero-meta-item desktop-only">
          <span>COORD // 28°36'N 77°12'E</span>
        </div>
      </motion.div>

      {/* 2. Controlled Asymmetric Hero Headline */}
      <motion.div
        className="hero-headline-wrap"
        style={{ y: headlineY }}
        initial="hidden"
        animate="visible"
      >
        <h1 className="hero-giant-title">
          {/* Line 1: Left-anchored */}
          <span className="hero-headline-line hero-line-1">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={1}
              variants={lineVariants}
            >
              DIGITAL
            </motion.span>
          </span>

          {/* Line 2: Left-anchored */}
          <span className="hero-headline-line hero-line-2">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={2}
              variants={lineVariants}
            >
              PRODUCTS
            </motion.span>
          </span>

          {/* Line 3: Deliberately indented horizontal asymmetry */}
          <span className="hero-headline-line hero-line-3">
            <motion.span
              style={{ display: 'inline-block' }}
              custom={3}
              variants={lineVariants}
            >
              BUILT TO GROW<span className="hero-accent-dot">.</span>
            </motion.span>
          </span>
        </h1>
      </motion.div>

      {/* 3. Lower Asymmetrical Grid: Editorial Statement & Intro Media */}
      <div className="hero-lower-grid">
        {/* Left Column: Separated Editorial Statement, CTAs, Discipline Badges */}
        <motion.div
          className="hero-editorial-col"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeVariants}
        >
          <div className="hero-editorial-badge">
            <span>01 // PERSPECTIVE</span>
            <span className="hero-meta-divider">—</span>
            <span>MEASURED LONGEVITY</span>
          </div>

          <p className="hero-editorial-lead">
            Averra is an independent product and systems engineering studio partnering with founders and ambitious organizations. 
            We combine <strong>strategic product thinking</strong>, <strong>editorial design craft</strong>, and <strong>hardened engineering</strong> to build enduring software that commands authority.
          </p>

          {/* Subtle CTAs */}
          <div className="hero-actions">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight size={16} />}
            >
              Start a Project
            </Button>

            <a
              href="#work"
              className="hero-work-link"
              onClick={(e) => {
                const target = document.getElementById('work');
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>View Selected Work</span>
              <ArrowDownRight size={14} />
            </a>
          </div>

          {/* Discipline Badges */}
          <div className="hero-discipline-tags">
            <span className="hero-tag-item">[ 01 STRATEGY ]</span>
            <span className="hero-tag-item">[ 02 CRAFT & SYSTEMS ]</span>
            <span className="hero-tag-item">[ 03 PRODUCTION ENGINEERING ]</span>
          </div>
        </motion.div>

        {/* Right Column: Commanding Intro Media Viewport (Preserved Video Section) */}
        <motion.div
          className="hero-media-col"
          style={{ y: mediaY }}
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeVariants}
        >
          <IntroMedia
            placeholderImage="/images/intro-monolith.jpg"
            label="INTRO VIDEO"
            aspectRatio="16 / 9"
            maxWidth="100%"
            caption="Averra Cinematic Visual — 4K Monolith Master (Future Insertion Slot)"
          />
        </motion.div>
      </div>

      {/* 4. Bottom Technical Coordinate Strip */}
      <div className="hero-bottom-strip">
        <div>AVERRA STUDIO SYSTEM // EDITION 2026</div>
        <div>SCALE // 1:1 ARCHITECTURAL GRID</div>
        <div>ENDURING PRODUCTS ONLY</div>
      </div>
    </section>
  );
};
