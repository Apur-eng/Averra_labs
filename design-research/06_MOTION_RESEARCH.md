# 06 — Motion, Cursors & Page Transitions Research

Averra already has `framer-motion` (`^11.11.17`), `lenis` (`^1.3.26`), `Reveal.tsx`, `ScrollProvider.tsx`, and `CursorProvider.tsx`. The goal is **disciplined, purposeful motion** rather than decorative RAF overhead.

---

## 1. Scroll-Triggered Animations (`Reveal.tsx`, `StatementSection.tsx`)
- **References:** `14islands.com`, `area17.com`, `instrument.com`.
- **Pattern:** Masked line-up reveals (`y: 100% → 0`, `cubic-bezier(0.16, 1, 0.3, 1)`), subtle scroll-linked `useScroll`/`useTransform` parallax (`±10px` to `±28px`), and `once: true` intersection triggers so elements never flicker on scroll-up.
- **Performance & A11y:** Only animate `transform` and `opacity` (GPU-composited). Preserve `useReducedMotionPreference()` so `prefers-reduced-motion: reduce` resolves immediately to final state.

## 2. Micro-Interactions & Service Accordions
- **References:** `linear.app` (`screenshots/navigation/linear.png`), `bakkenbaeck.com`, `cuberto.com`.
- **Pattern:** Crisp `150ms` border-color transitions, directional arrow nudges (`translateX(4px)`), and smooth height/opacity drawer expansion in `CapabilitiesSection` using Framer Motion `AnimatePresence` + `layout` rather than abrupt conditional mounting.
- **Reinterpretation for Averra:** Replace `onMouseEnter` auto-switching on `CapabilitiesSection` and `ProcessSection` (which can feel jumpy when scrolling) with explicit click/keyboard-focus triggers and subtle hover border highlights.

## 3. Custom Cursors (`CursorProvider.tsx`)
- **References:** `cuberto.com`, `obys.agency`, `lusion.co`.
- **Pattern:** Context-aware cursor states (e.g., `"VIEW"`, `"EXPLORE ↗"`, or magnetic pill attraction on project media cards) on fine-pointer devices only (`(pointer: fine)`).
- **Critical Performance Note:** Averra's `CursorProvider.tsx` currently runs a `60fps` `requestAnimationFrame` loop even with **0 subscribers** (`121` idle RAF ticks / `2s` measured in audit). If Averra does not render a custom cursor element, `CursorProvider` should stay dormant until a subscriber registers; if implemented, it should sleep whenever the pointer is stationary.

## 4. Page Transitions
- **References:** `14islands.com`, `studiodumbar.com`, `cuberto.com`.
- **Pattern:** Lightweight `200ms–300ms` crossfade/vertical-slip via Framer Motion `AnimatePresence` keyed on `location.pathname`—never a blocking preloader like `obys.agency` (`23%` gate in `screenshots/heroes/obys.png`), which hurts B2B LCP and conversion.
- **Complexity:** Low; uses existing `framer-motion` + `react-router-dom`.
