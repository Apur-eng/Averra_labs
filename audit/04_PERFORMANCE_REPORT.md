# 04 — Performance Report (Laboratory Measurements)

> **Methodology & Disclaimer:** Lighthouse CLI was not installed in the host environment (`where.exe lighthouse` returned not found, and installing dependencies is prohibited by audit constraints). All measurements below are **laboratory measurements** collected via headless `Chrome/158.0.8127.37` using the Chrome DevTools Protocol (`Performance.getMetrics`, `PerformanceObserver`/Performance Timeline API, and Network events) at `1440×900` desktop. They represent lab observations, **not real-user field data (CrUX)**.

---

## 1. Laboratory Metrics: Production vs. Local Dev

| Metric | Production (`https://averra-labs.vercel.app/`) | Local Dev (`http://localhost:5174/`) | Notes |
| :--- | :---: | :---: | :--- |
| **First Contentful Paint (FCP)** | `544 ms` | `5,476 ms` | Local Vite serves unbundled ESM modules; prod serves minified/gzipped chunks. |
| **DOMContentLoaded** | `297 ms` | `5,035 ms` | — |
| **Load Event End** | `297 ms` | `5,039 ms` | — |
| **Total Page Transfer (Initial)** | `930 KB` | `4,854 KB` | Above-the-fold initial load (`loading="lazy"` defers below-fold card images). |
| **JavaScript Transfer** | `133 KB` | `4,063 KB` | Prod built bundle: `439.18 KB` raw / `130.44 KB` gzip (`dist/assets/index-*.js`). |
| **CSS Transfer** | `7 KB` | `41 KB` | Prod built CSS: `24.35 KB` raw / `5.19 KB` gzip. |
| **Image Transfer (Initial)** | `789 KB` | `789 KB` | Dominated by `public/images/intro-monolith.jpg` (`788.7 KB`). |
| **Fonts Registered / Loaded** | `48` faces / `9` active weights | `48` faces / `9` active weights | Google Fonts (`Plus Jakarta Sans` + `JetBrains Mono`) via `index.html`. |
| **Idle RAF Ticks (2s window)** | `121` ticks (`~60 fps`) | `121` ticks (`~60 fps`) | Continuous `requestAnimationFrame` loops in `LenisProvider` & `CursorProvider`. |
| **Idle Script Duration (2s)** | `0.0075 s` | `0.0094 s` | Low absolute CPU, but continuous 60Hz wakeups prevent true browser idle. |
| **Idle Task Duration (2s)** | `0.0329 s` | `0.0431 s` | `layoutCountDelta: 0` during idle. |
| **Lighthouse Scores (Perf/A11y/BP/SEO)** | *Not run (Lighthouse CLI unavailable)* | *Not run (Lighthouse CLI unavailable)* | Requires `lighthouse` CLI or Chrome DevTools UI Lighthouse panel. |
| **LCP / CLS / TBT** | *Not directly sampled via Lighthouse* | *Not directly sampled via Lighthouse* | Hero `intro-monolith.jpg` (`788.7 KB`) is the primary LCP candidate. |

---

## 2. Asset & Bundle Analysis

### JavaScript Bundle
- Production `vite build` produces a single main JS chunk (`439.18 KB` uncompressed, `130.44 KB` gzipped) with **no route-based code splitting** (`React.lazy` is not used in `App.tsx`). All 9 case studies and all 6 pages load eagerly on `/`.

### Image Assets (`public/images/`)
- Total size on disk across `public/images/`: **`16.02 MB`** (unoptimized PNG/JPGs, no WebP/AVIF, no `srcset`).
- Largest assets:
  - `result.png`: `1,523.2 KB`
  - `rankers_header.png`: `1,406.3 KB`
  - `hero_classroom.jpg`: `921.8 KB`
  - `photo_interior.png`: `884.5 KB`
  - `photo_bar_counter.png`: `877.7 KB`
  - `photo_red_green_drinks.png`: `831.5 KB`
  - `menu.png`: `805.5 KB`
  - `hero.png`: `796.2 KB`
  - `intro-monolith.jpg`: `788.7 KB` (loaded eagerly in Hero!)
- Note: `loading="lazy"` on `ProjectCard` and `SelectedWorkSection` successfully prevents the 6 below-fold thumbnails from blocking initial home load, though `intro-monolith.jpg` alone accounts for `84.8%` of initial production transfer weight (`789 KB / 930 KB`).

### Animation & Idle Overhead
- `LenisProvider` and `CursorProvider` both run unconditional `requestAnimationFrame` loops even when the page is completely idle and `WebGLCanvas` renders nothing. Stopping/pausing RAF when scroll velocity is `0` and pointer is stationary would eliminate unnecessary `121` ticks / `2s` idle wakeups on laptops and mobile devices.
