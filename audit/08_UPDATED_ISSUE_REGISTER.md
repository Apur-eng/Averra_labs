# 08 — Updated Issue Register

All issues below are **verified directly** from source code inspection, HTTP checks, and headless Chrome CDP testing across `http://localhost:5174/` and `https://averra-labs.vercel.app/`.

---

## Issue Register

### ISS-01 — Contact Form Does Not Submit Inquiries (Silent Lead Loss)
- **Severity:** Critical
- **Evidence:** `src/pages/Contact.tsx:51-55` (`handleSubmit` only runs `console.log('Averra Project Brief Received:', formData)` and `setIsSubmitted(true)`). Zero `fetch`/`axios` calls exist in `src/`.
- **Affected Page / Component:** `/contact` — `Contact` (`src/pages/Contact.tsx`)
- **Business Impact:** 100% of prospective clients submitting the Project Brief see a false "Brief Received" confirmation while their inquiry is never delivered.
- **Proposed Solution:** Integrate a serverless form endpoint (e.g., Vercel Serverless Function + Resend/SMTP, or Formspree/Web3Forms) with loading state, error handling, and spam protection.
- **Acceptance Criteria:** Submitting `/contact` sends an HTTP `POST` to a live endpoint, persists/emails the brief, displays an error banner if delivery fails, and only shows the confirmation modal on `2xx` response.

### ISS-02 — `IntroMedia` Center Callout Clipped on Tablet & Mobile Viewports
- **Severity:** High
- **Evidence:** Visually verified in `audit/screenshots/local-home-tablet.png` (`768×1024`) and `audit/screenshots/local-home-mobile.png` (`375×812`): `"INTRO VIDEO"` pill and `"Reserved Media Area..."` text are pushed off the right edge and clipped. Caused by `IntroMedia.tsx:67-77` placing `<img>` (`width: 100%`) and the `position: relative` callout side-by-side inside a `display: flex` container.
- **Affected Page / Component:** `/` — `IntroMedia` (`src/components/ui/IntroMedia.tsx`)
- **Business Impact:** Broken above-the-fold/hero visual presentation for all mobile and tablet visitors.
- **Proposed Solution:** Position the `<img>` / `<video>` layer with `position: absolute; inset: 0` (or position the center callout with `position: absolute; inset: 0; display: flex; align-items: center; justify-content: center`), and hide/wrap the long bottom caption cleanly on `< 640px`.
- **Acceptance Criteria:** At `375×812` and `768×1024`, the `"INTRO VIDEO"` pill and caption remain centered inside the 16:9 frame with zero horizontal clipping.

### ISS-03 — Contact Page Stuck in Single-Column Layout on Desktop
- **Severity:** High
- **Evidence:** Verified in `audit/screenshots/local-contact-desktop.png` and CDP (`gridComputedCols: "1160px"`). `src/pages/Contact.tsx:79, 88` uses `contact-layout-grid` and `grid-contact-split`, which are undefined in `src/styles/utilities.css`.
- **Affected Page / Component:** `/contact` — `Contact` (`src/pages/Contact.tsx`, `src/styles/utilities.css`)
- **Business Impact:** Pushes the primary Project Brief form below the fold on `1440px` desktops, increasing friction and drop-off.
- **Proposed Solution:** Define `.grid-contact-split` in `utilities.css` with a 2-column grid at `@media (min-width: 960px)` (e.g., `grid-template-columns: 5fr 7fr; align-items: start;`).
- **Acceptance Criteria:** At `1440×900`, the Direct Info column and Project Brief form render side-by-side above the fold; at `375×812`, they stack cleanly in 1 column.

### ISS-04 — Empty Portfolio Filter Categories (`SaaS`, `AI & Automation`)
- **Severity:** Medium
- **Evidence:** Verified via CDP on `/work`: clicking `"SaaS"` returns `workAfterSaas: 0`; `"AI & Automation"` also has 0 matching projects in `src/data/projects.ts`.
- **Affected Page / Component:** `/work` — `Work` (`src/pages/Work.tsx`, `src/data/projects.ts`)
- **Business Impact:** Visitors clicking advertised core capabilities hit an empty state, undermining credibility.
- **Proposed Solution:** Either add verified SaaS / AI & Automation case studies or dynamically render only `CATEGORIES` that have `>= 1` matching project.
- **Acceptance Criteria:** Every visible filter pill on `/work` returns at least 1 project card.

### ISS-05 — Keyboard Accessibility Failures (`Contact` Pills & `CaseStudy` Next Card)
- **Severity:** Medium
- **Evidence:** Verified via CDP: `.pill-option` elements in `Contact.tsx:355-394` have `pillTagName: "DIV"` and `pillTabIndex: null`; `CaseStudy.tsx:523` uses `<div onClick={...}>` for the Next Case Study card.
- **Affected Page / Component:** `/contact` (`Contact.tsx`), `/work/:slug` (`CaseStudy.tsx`)
- **Business Impact:** Keyboard-only and screen-reader users cannot select project type/budget/timeline or navigate to the next case study.
- **Proposed Solution:** Convert `.pill-option` to `<button type="button" aria-pressed={...}>` and the Next Case Study card to `<Link to={...}>`.
- **Acceptance Criteria:** All interactive controls are reachable via `Tab`, activatable via `Enter`/`Space`, and expose semantic roles.

### ISS-06 — Placeholder / WIP Copy & Stale Quarter Text in Production UI
- **Severity:** Medium
- **Evidence:** `HeroSection.tsx:80` & `Footer.tsx:94` hardcode `"Q3/Q4"`; `IntroMedia.tsx:39, 274` displays `"Reserved Media Area — Future Cinematic Experience"` and `"(Future Insertion Slot)"`; `StatementSection.tsx:167` displays `"VISUAL // INCOMING"`; `Home.tsx:28` leaves an empty slot.
- **Affected Page / Component:** `/` (`HeroSection`, `StatementSection`, `IntroMedia`), Global `Footer`
- **Business Impact:** Signals an unfinished site to prospective paying clients.
- **Proposed Solution:** Replace placeholder labels with real studio/product media (or remove the unimplemented `"VISUAL // INCOMING"` cue) and keep availability copy evergreen or centrally managed.
- **Acceptance Criteria:** Zero `"Future Insertion Slot"` or `"Reserved Media Area"` strings appear in production UI.

### ISS-07 — Inconsistent Section Numbering on Home Page
- **Severity:** Low
- **Evidence:** `Home.tsx` renders `02 // POSITION` (`StatementSection`) → `03 — SELECTED WORK` (`SelectedWorkSection`) → `02 — WHAT WE BUILD` (`CapabilitiesSection`) → `04 — HOW WE WORK` (`ProcessSection`).
- **Affected Page / Component:** `/` — `SelectedWorkSection.tsx`, `CapabilitiesSection.tsx`
- **Business Impact:** Minor editorial polish inconsistency.
- **Proposed Solution:** Renumber sections sequentially (`02` Statement, `03` Selected Work, `04` Capabilities, `05` Process, `06` Why Averra, `07` Roadmap, `08` Final CTA).
- **Acceptance Criteria:** All homepage section numbers increment monotonically without duplicates.

### ISS-08 — Missing Security Headers, Soft-404s, and Static Per-Route SEO Metadata
- **Severity:** Medium
- **Evidence:** `curl.exe -sI https://averra-labs.vercel.app/non-existent-audit-route` returns `HTTP/1.1 200 OK` without `CSP`, `X-Frame-Options`, `X-Content-Type-Options`, or `Referrer-Policy`. All routes share identical static `<title>`/`<meta>` from `index.html`; no `robots.txt` or `sitemap.xml` exists.
- **Affected Page / Component:** Global (`vercel.json`, `index.html`, `public/`, page components)
- **Business Impact:** Weakens clickjacking/MIME-sniffing defense and prevents `/work/:slug` case studies from indexing with unique titles/descriptions.
- **Proposed Solution:** Add security headers to `vercel.json`, add `robots.txt` + `sitemap.xml`, and set dynamic per-route `document.title` and meta tags.
- **Acceptance Criteria:** Security headers present in `curl -I` response; every route sets a unique `<title>` and meta description.

### ISS-09 — Unoptimized Images (`16.02 MB`), Missing Route Splitting, and Idle 60fps RAF Loops
- **Severity:** Medium
- **Evidence:** `public/images/` totals `16.02 MB` (e.g., `result.png` `1.52 MB`, `rankers_header.png` `1.41 MB`, eager `intro-monolith.jpg` `788.7 KB`). `App.tsx` imports all pages eagerly (`439.18 KB` raw JS). CDP idle check measured `121` RAF ticks in `2s` at idle.
- **Affected Page / Component:** Global (`App.tsx`, `LenisProvider.tsx`, `CursorProvider.tsx`, `public/images/`)
- **Business Impact:** Slower LCP on mobile networks and unnecessary battery drain on idle tabs.
- **Proposed Solution:** Convert hero/project images to compressed WebP/AVIF, lazy-load `/work`, `/work/:slug`, `/know-us`, and `/contact` via `React.lazy`, and pause `CursorProvider`/`LenisProvider` RAF loops when idle.
- **Acceptance Criteria:** Initial Hero image `< 200 KB`; idle RAF ticks drop to `0` when no scroll/pointer input occurs.

### ISS-10 — Minor UI Polish Defects (`MobileNav` Keyframe, `CaseStudy` Metadata Gap, Duplicated Config)
- **Severity:** Low
- **Evidence:** `MobileNav.tsx:68` references undefined `@keyframes slideInRight`. `CaseStudy.tsx:150-166` renders `"LIVE DOMAINLaunch ↗"` without spacing (`local-casestudy-desktop.png`). `SITE_CONFIG` (`src/data/site.ts`) is unused while contact details are duplicated across 4 components.
- **Affected Page / Component:** `MobileNav.tsx`, `CaseStudy.tsx`, `Footer.tsx`, `Contact.tsx`, `FinalCtaSection.tsx`, `src/data/site.ts`
- **Business Impact:** Minor visual glitches and maintenance drift risk.
- **Proposed Solution:** Define `@keyframes slideInRight` in `base.css`, add block/margin spacing to `CaseStudy` metadata labels, and source contact/nav constants from `SITE_CONFIG`.
- **Acceptance Criteria:** Mobile drawer animates smoothly; `LIVE DOMAIN` and `Launch ↗` have clear vertical separation; contact numbers are defined in one place.
