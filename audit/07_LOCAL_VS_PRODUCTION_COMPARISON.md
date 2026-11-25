# 07 — Local Working Version vs. Production Deployment Comparison

**Local Dev URL:** `http://localhost:5174/` (Vite v5.4.21 dev server)  
**Production URL:** `https://averra-labs.vercel.app/` (Vercel CDN)  
**Comparison Timestamp:** 2026-11-25

---

## 1. Content & Code Parity

Following the earlier commit & push (`fac78b8` on `main`), Vercel automatically deployed the updated portfolio to production. As verified by `cdp-audit.mjs`, **both Local and Production currently serve the exact same 9 case studies** (`initialCount: 9` on `/work`, `selectedWorkCards: 6` on `/`), including the newly added `fundamics-lms` and updated `finservkart-enterprise-portal`.

---

## 2. Runtime, Build & Infrastructure Differences

| Dimension | Local Dev (`localhost:5174`) | Production (`averra-labs.vercel.app`) | Impact / Observation |
| :--- | :--- | :--- | :--- |
| **Serving Mode** | Unbundled Vite ESM dev server | Minified, gzipped Vite production bundle on Vercel Edge (`bom1::`) | Prod is ~10x faster on FCP. |
| **First Contentful Paint (FCP)** | `5,476 ms` | `544 ms` | Dev compiles/transforms 1,979 modules on demand. |
| **DOMContentLoaded / Load** | `5,035 ms` / `5,039 ms` | `297 ms` / `297 ms` | — |
| **JS Transfer Size** | `4,063 KB` (unbundled) | `133 KB` (gzipped from `439.18 KB` raw) | Prod bundle is compact, though lacks route-level code splitting. |
| **CSS Transfer Size** | `41 KB` | `7 KB` (gzipped from `24.35 KB` raw) | — |
| **Console Warnings** | `17` warnings (dev mode) | `0` warnings | `0` console errors in both. |
| **HTTP Caching & Headers** | Vite dev server defaults | `Strict-Transport-Security` present; **missing** `CSP`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` | Security headers should be added in `vercel.json`. |
| **404 HTTP Status** | `200 OK` (Vite SPA fallback) | `200 OK` (`vercel.json` rewrite `/(.*) -> /index.html`) | Non-existent URLs return soft-404 `HTTP 200` to crawlers. |
| **Contact Form Behavior** | `console.log` only | `console.log` only | Both environments silently drop form submissions. |
| **Visual Bugs** | `IntroMedia` clipped on mobile/tablet; `Contact` 1-col on desktop | Identical (`IntroMedia` clipped; `Contact` 1-col on desktop) | Shared across both environments. |
