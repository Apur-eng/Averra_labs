/**
 * Reveal.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Averra Motion Core — Reusable scroll-triggered entrance component.
 *
 * Philosophy (inspiration.md §2):
 *   - Content enters with controlled easing: dignified, physical deceleration.
 *   - One coherent motion language: the same variant set everywhere.
 *   - No gratuitous animation. Every reveal must feel earned.
 *   - Full prefers-reduced-motion support.
 *   - once: true — elements enter once, never replay (no jitter on scroll-up).
 *
 * Usage:
 *   <Reveal>
 *     <h2>...</h2>
 *   </Reveal>
 *
 *   <Reveal delay={0.15} distance={20}>
 *     <p>...</p>
 *   </Reveal>
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';

// ─── Types ───────────────────────────────────────────────────────────────────

interface RevealProps {
  children: React.ReactNode;

  /** Vertical travel distance (px) — default 20 */
  distance?: number;

  /** Delay before entrance begins (s) — default 0 */
  delay?: number;

  /** Entrance duration (s) — default 0.75 */
  duration?: number;

  /** Framer Motion viewport margin (when to trigger) — default "-80px" */
  margin?: string;

  /** Amount of element visible before triggering — default 0.1 */
  amount?: number;

  /** Extra class name(s) */
  className?: string;

  /** Inline style overrides */
  style?: React.CSSProperties;
}

// ─── Motion Variants ─────────────────────────────────────────────────────────

const buildVariants = (distance: number, duration: number): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.16, 1, 0.3, 1], // --ease-physical: dignified deceleration
    },
  },
});

const instantVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

// ─── Component ───────────────────────────────────────────────────────────────

export const Reveal: React.FC<RevealProps> = ({
  children,
  distance = 20,
  delay = 0,
  duration = 0.75,
  margin = '-80px',
  amount = 0.1,
  className,
  style,
}) => {
  // Always use a div-based ref — Reveal is always a block wrapper.
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    margin: margin as `${number}px`,
    amount,
  });

  const variants = shouldReduceMotion
    ? instantVariants
    : buildVariants(distance, duration);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay }
      }
    >
      {children}
    </motion.div>
  );
};
