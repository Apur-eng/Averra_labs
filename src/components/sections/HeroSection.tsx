import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { IntroMedia } from '../ui/IntroMedia';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll-driven physicality (restrained, architectural depth)
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
    shouldReduceMotion ? [0, 0] : [0, 20]
  );

  // Architectural easing: dignified deceleration curve
  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.75, ease: [0.16, 1, 0.3, 1] };

  // Masked line reveal for substantial, controlled headline entrance
  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        ...transitionConfig,
        delay: shouldReduceMotion ? 0 : 0.15 + (custom - 1) * 0.1
      }
    })
  };

  // Subtle upward fade for metadata, supporting text, and media
  const fadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...transitionConfig,
        delay: shouldReduceMotion ? 0 : custom * 0.1
      }
    })
  };

  return (
    <section ref={containerRef} className="hero-editorial-section" id="hero">
      {/* 1. Small Technical Metadata / Eyebrow Row */}
      <motion.div
        className="hero-top-strip"
        initial="hidden"
        animate="visible"
        custom={0.5}
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

      {/* 2. Main Headline (Substantial, Controlled Asymmetry) */}
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

          {/* Line 3: Indented horizontal asymmetry */}
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

      {/* 3. Supporting Description & Actions Row */}
      <div className="hero-supporting-row">
        {/* Left Column: Editorial Statement */}
        <motion.div
          className="hero-editorial-col"
          initial="hidden"
          animate="visible"
          custom={4.8}
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
        </motion.div>

        {/* Right Column: Actions & Discipline Badges */}
        <motion.div
          className="hero-actions-col"
          initial="hidden"
          animate="visible"
          custom={5.6}
          variants={fadeVariants}
        >
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

          <div className="hero-discipline-tags">
            <span className="hero-tag-item">[ 01 STRATEGY ]</span>
            <span className="hero-tag-item">[ 02 CRAFT & SYSTEMS ]</span>
            <span className="hero-tag-item">[ 03 PRODUCTION ENGINEERING ]</span>
          </div>
        </motion.div>
      </div>

      {/* 4. Wide Commanding Intro Media Viewport */}
      <motion.div
        className="hero-media-wrap"
        style={{ y: mediaY }}
        initial="hidden"
        animate="visible"
        custom={6.6}
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

      {/* 5. Bottom Technical Coordinate Strip */}
      <motion.div
        className="hero-bottom-strip"
        initial="hidden"
        animate="visible"
        custom={7.8}
        variants={fadeVariants}
      >
        <div>AVERRA STUDIO SYSTEM // EDITION 2026</div>
        <div>SCALE // 1:1 ARCHITECTURAL GRID</div>
        <div>ENDURING PRODUCTS ONLY</div>
      </motion.div>
    </section>
  );
};
