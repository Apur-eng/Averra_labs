# 11 — Implementation Feasibility & Roadmap

**Stack Constraint:** Existing `React 18.3` + `TypeScript 5.6` + `Vite 5.4` + `Framer Motion 11` + `Lenis 1.3` + `Lucide React`. **Zero new runtime dependencies required.**

---

## Feasibility Matrix

| Pattern / Improvement | Target Files | Complexity | Perf / A11y Impact |
| :--- | :--- | :--- | :--- |
| **Fix `IntroMedia` mobile/tablet clipping & replace placeholder copy** | `IntroMedia.tsx`, `StatementSection.tsx`, `Home.tsx` | **Low** (1–2h) | Fixes mobile hero UX; removes WIP strings. |
| **Fix `/contact` 2-col desktop grid, `<button>` pills & real form endpoint** | `Contact.tsx`, `utilities.css`, serverless endpoint | **Medium** (3–4h) | Fixes critical lead loss + keyboard A11y. |
| **Clean `ProjectCard` overlays + asymmetric `SelectedWork` flagship layout** | `ProjectCard.tsx`, `SelectedWorkSection.tsx` | **Low** (2h) | Improves visual hierarchy & scannability. |
| **Inline SVG architecture diagrams in `CaseStudy.tsx`** | `CaseStudy.tsx`, `projects.ts` | **Medium** (3–4h) | `< 5 KB` inline SVG; high technical credibility. |
| **Optimize `public/images/` (`16.02 MB` → WebP) + `React.lazy` routes** | `public/images/`, `App.tsx` | **Medium** (2–3h) | Cuts hero image & initial JS bundle significantly. |
| **Pause `CursorProvider` / `LenisProvider` RAF when idle** | `CursorProvider.tsx`, `LenisProvider.tsx` | **Low** (1–2h) | Eliminates `121` idle RAF ticks / `2s`. |
| **Dynamic per-route SEO `<title>`/`<meta>` + `vercel.json` security headers** | `vercel.json`, page components, `public/` | **Low** (1–2h) | Improves SEO indexing & security posture. |

---

## Summary
Every high-impact improvement across **Direction A + C** is achievable cleanly within the existing Vite + React + Framer Motion + Lenis architecture, with **zero unnecessary library additions** and clear, incremental milestones.
