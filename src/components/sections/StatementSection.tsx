/**
 * StatementSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Averra — Step 4.5 / Narrative Statement
 *
 * This section lives between the Hero and the future Cinematic Media Frame.
 * Its purpose is editorial: a confident manifesto moment that accumulates
 * meaning as the user scrolls, and then — deliberately — opens at the bottom
 * rather than closing, creating visual pull toward what comes next.
 *
 * Intended page sequence:
 *   HERO  →  STATEMENT (this)  →  [future: CINEMATIC MEDIA FRAME]  →  WORK
 *
 * Bottom transition strategy:
 *   - No border-bottom: the section breathes open, not closed.
 *   - Corner frame marks (bottom-left / bottom-right) signal an incoming
 *     frame — the universal architectural language for "something appears here."
 *   - Generous bottom padding creates spatial anticipation before the frame.
 *   - The page background (#FAFAF8) is unbroken so a future dark media frame
 *     hits with maximum contrast.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Reveal } from '../motion/Reveal';

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll-driven horizontal drift on the two statement lines —
  // the left line pulls slightly left, the right pulls slightly right,
  // giving the typography physical weight as the user scrolls through.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineLeftX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-10, 10]
  );

  const lineRightX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [10, -10]
  );

  return (
    <section
      ref={containerRef}
      className="statement-section"
      id="statement"
      aria-label="Averra studio position statement"
    >
      {/* ── Top hairline ──────────────────────────────────────── */}
      <div className="statement-top-rule" aria-hidden="true">
        <span className="statement-rule-label">02 // POSITION</span>
      </div>

      {/* ── Eyebrow ───────────────────────────────────────────── */}
      <Reveal distance={10} duration={0.65}>
        <div className="statement-eyebrow">
          <span className="statement-eyebrow-dot" aria-hidden="true" />
          <span>AVERRA STUDIO — INDEPENDENT PRODUCT ENGINEERING</span>
          <span className="statement-eyebrow-divider" aria-hidden="true">/</span>
          <span>EST. 2024</span>
        </div>
      </Reveal>

      {/* ── Main Statement Typography ─────────────────────────── */}
      <div className="statement-body">
        {/*
          Line 1 — wide, anchored left, drifts left on scroll
          The phrase "We don't build websites." deliberately breaks the
          expected SaaS framing. It should feel confident, not boastful.
        */}
        <motion.div
          className="statement-line-wrap"
          style={{ x: lineLeftX }}
          aria-hidden="true"
        >
          <p className="statement-line statement-line--left">
            We don't build websites.
          </p>
        </motion.div>

        {/*
          Line 2 — indented right, drifts right on scroll (asymmetric depth)
          The asymmetry makes the composition feel editorial, not centered.
        */}
        <motion.div
          className="statement-line-wrap"
          style={{ x: lineRightX }}
          aria-hidden="true"
        >
          <p className="statement-line statement-line--right">
            We build the infrastructure
            <span className="statement-accent"> ambitious ideas</span>
          </p>
        </motion.div>

        {/*
          Line 3 — resolves the thought, left-anchored, smaller weight
        */}
        <motion.div
          className="statement-line-wrap"
          style={{ x: lineLeftX }}
          aria-hidden="true"
        >
          <p className="statement-line statement-line--resolve">
            need to become enduring products
            <span className="statement-period">.</span>
          </p>
        </motion.div>

        {/* Accessible full text for screen readers */}
        <p className="sr-only">
          We don't build websites. We build the infrastructure ambitious ideas need to become enduring products.
        </p>
      </div>

      {/* ── Supporting Editorial Column ───────────────────────── */}
      <Reveal distance={12} delay={0.1} duration={0.7}>
        <div className="statement-supporting">
          <div className="statement-supporting-inner">
            <div className="statement-supporting-marker" aria-hidden="true">
              <span className="statement-supporting-num">—</span>
            </div>
            <p className="statement-supporting-text">
              Averra partners with founders and organizations who understand that
              software is not a commodity. Strategy, design, and engineering
              are a single discipline here — not three separate invoices.
            </p>
          </div>

          <div className="statement-supporting-tags" aria-label="Studio disciplines">
            <span className="statement-tag">STRATEGY</span>
            <span className="statement-tag-sep" aria-hidden="true">·</span>
            <span className="statement-tag">DESIGN SYSTEMS</span>
            <span className="statement-tag-sep" aria-hidden="true">·</span>
            <span className="statement-tag">PRODUCT ENGINEERING</span>
            <span className="statement-tag-sep" aria-hidden="true">·</span>
            <span className="statement-tag">ENDURING SOFTWARE</span>
          </div>
        </div>
      </Reveal>

      {/* ── Bottom Frame-Entry Transition Zone ────────────────── */}
      {/*
        These corner marks signal the incoming cinematic media frame.
        They sit at the bottom of the section and "frame" the empty space
        below — creating visual pull toward what is about to appear.
        No border-bottom. The page background continues unbroken.
      */}
      <div className="statement-frame-entry" aria-hidden="true">
        <span className="statement-frame-corner statement-frame-corner--bl" />
        <div className="statement-frame-center-cue">
          <span className="statement-frame-label">VISUAL // INCOMING</span>
        </div>
        <span className="statement-frame-corner statement-frame-corner--br" />
      </div>
    </section>
  );
};
