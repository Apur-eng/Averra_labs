# 10 — Proposed Design System Refinements

Builds directly on `src/styles/tokens.css`, `src/styles/base.css`, and `src/styles/utilities.css` without introducing Tailwind or CSS-in-JS.

---

## 1. Preserved Foundation Tokens
- **Surfaces:** `--bg-primary: #FAFAF8`, `--bg-secondary: #F4F4F1`, `--bg-card: #FFFFFF`, `--bg-dark: #121413`
- **Ink:** `--text-primary: #121312`, `--text-secondary: #4E5250`, `--text-tertiary: #767A78`
- **Accent:** `--accent-blue: #1E3A8A`, `--accent-blue-hover: #172554`, `--accent-blue-subtle: #EEF2FB`
- **Typography:** `--font-sans: 'Plus Jakarta Sans'`, `--font-mono: 'JetBrains Mono'`
- **Hairlines:** `1px solid var(--border-light)` (`#E5E5E0`)

## 2. Proposed Token & CSS Additions
- **Missing Utility Classes:** Add `.grid-contact-split` (`1fr` mobile → `5fr 7fr` at `>= 960px`) and `@keyframes slideInRight` in `base.css` for `MobileNav`.
- **Fluid Container & Card Standards:** Move repeated inline `style={{ ... }}` objects from `CaseStudy.tsx`, `KnowUs.tsx`, `Contact.tsx`, and `Footer.tsx` into semantic classes in `utilities.css` (e.g., `.case-meta-grid`, `.contact-card`, `.pill-option` as `<button>`).
- **Clean Media Frames:** Remove overlapping floating pills from `.editorial-project-media` / `.project-card-visual` and place metadata cleanly below the image frame.
- **Diagram & Interactive Tokens:** Add `--stroke-diagram: #D4D4CE` and `--stroke-diagram-active: var(--accent-blue)` for inline SVG system architecture diagrams.
