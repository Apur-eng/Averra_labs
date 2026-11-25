# 02 — Visual & UI/UX Audit

**Target:** Averra Labs (`http://localhost:5174/` and `https://averra-labs.vercel.app/`)  
**Viewports Inspected:** Desktop (`1440×900`), Tablet (`768×1024`), Mobile (`375×812`)  
**Screenshots Directory:** `audit/screenshots/`

---

## 1. Executive Visual Assessment

Averra Labs establishes a **restrained, editorial technology-studio aesthetic** (`#FAFAF8` off-white canvas, `#121312` charcoal ink, `#1E3A8A` deep blue accent, `Plus Jakarta Sans` + `JetBrains Mono`). On desktop (`1440×900`), the hero typography, whitespace, and hairline rules read as intentional and contemporary. However, **visual and responsive execution breaks down in several high-visibility areas**, most critically in the `IntroMedia` placeholder frame on tablet/mobile, the single-column `Contact` page on desktop, and inconsistent section numbering/decorative placeholder cues.

---

## 2. Detailed Evaluation by Dimension

### Premium Agency Appearance & Brand Personality
- **Strengths:** Clean `#FAFAF8` surface hierarchy, crisp `1px solid #E5E5E0` borders, disciplined monospaced metadata strips (`STUDIO // 01`, `COORD // 28°36'N 77°12'E`).
- **Weaknesses:** Excessive "meta-scaffolding" labels (`VISUAL // INCOMING`, `Reserved Media Area — Future Cinematic Experience`, `4K Monolith Master (Future Insertion Slot)`, `EDITION 2026`) signal an **unfinished template/WIP site** to paying clients rather than a finished flagship.

### Typography & Colour Palette
- **Typography:** `Plus Jakarta Sans` (400–800) and `JetBrains Mono` (400–700) load cleanly (`48` font faces registered, `9` active weights loaded). Display hierarchy (`clamp(3.75rem, 8vw, 7.5rem)`) is strong.
- **Colour Palette:** High-contrast light editorial palette with `#1E3A8A` accent blue. No dark-mode clutter; `#10B981` status dots and `#1E3A8A` badges are restrained.

### Hero Section (`src/components/sections/HeroSection.tsx`, `src/components/ui/IntroMedia.tsx`)
- **Desktop (`local-home-desktop.png`):** Asymmetric 3-line display title (`DIGITAL / PRODUCTS / BUILT TO GROW.`) with editorial lead and primary/secondary actions fits cleanly above the fold, with the top edge of `IntroMedia` visible.
- **CRITICAL VISUAL BUG on Tablet (`local-home-tablet.png`) & Mobile (`local-home-mobile.png`):**
  - Inside `IntroMedia.tsx` (lines 67–77 & 207–276), the outer 16:9 frame uses `display: flex`, the `<img>` has `width: 100%; height: 100%` (not `position: absolute`), and the center `"INTRO VIDEO"` callout uses `position: relative` instead of `position: absolute`.
  - As a result, on `768×1024` and `375×812`, the `<img>` occupies 100% of the flex width and **pushes the `"INTRO VIDEO"` pill and `"Reserved Media Area..."` text off the right edge**, clipping them mid-word (`"IN... VI..."`, `"Reserve... Area — Ciner... Exper..."`).

### Navigation & Footer (`Navbar.tsx`, `MobileNav.tsx`, `Footer.tsx`)
- **Desktop Navbar:** Clean single-row layout (`[A] Averra` left; `Work`, `Know Us`, `Contact`, `Start a Project →` right). Active underline indicator works properly.
- **Mobile Drawer (`local-mobilenav-open.png`):** Opens cleanly at `375px` with `Home`, `Work`, `Know Us`, `Contact`, `Start a Project`, and WhatsApp link. However, `MobileNav.tsx:68` references `animation: 'slideInRight ...'`, which is undefined in `base.css`/`utilities.css` (so the drawer snaps in without a slide animation).
- **Footer (`local-404-desktop.png`):** Well-balanced 4-column grid (`Brand`, `Navigation`, `Capabilities`, `Direct Connect`). Status badge still says `"Accepting projects for Q3/Q4"` (hardcoded).

### Section Transitions, Animations & Scroll Depth
- **Page Length:** Home page `scrollHeight` is **`14,213 px`** at `1440px` (~15.8 viewports).
- **Section Numbering Bug (`Home.tsx`):** Sections read `02 // POSITION` → `03 — SELECTED WORK` → `02 — WHAT WE BUILD` → `04 — HOW WE WORK` → `05 — WHY AVERRA` → `06 — WHERE WE'RE GOING` → `07 — FINAL CTA`. `02` is duplicated and out of sequence.
- **Unnecessary / Decorative Elements:**
  - `StatementSection` ends with `"VISUAL // INCOMING"` corner brackets pointing to an empty `/* Step 5 slot: CinematicMediaSection goes here */` comment in `Home.tsx`.
  - `WebGLCanvas` mounts an empty `#averra-shared-webgl-layer` `div` with zero rendering logic, while `CursorProvider` and `LenisProvider` run continuous `requestAnimationFrame` loops (`121` ticks per `2s` idle).

### Portfolio Presentation & Case Study Storytelling (`Work.tsx`, `ProjectCard.tsx`, `CaseStudy.tsx`)
- **Work Grid (`local-work-desktop.png`):** Clean 3-column card grid, but thumbnail cropping is uneven:
  - `Solasta Life Sciences` uses a close-up blister pack photo (`sevasta_400.png`) where text is cropped (`EVASTA-400`).
  - `Fundamics Tutorials` and `Finservkart` overlay dark frosted badges (`Academic Flagship...`) and `"Live Site"` pills directly over busy UI screenshots containing text.
- **Case Study (`local-casestudy-desktop.png`):** Strong 6-part narrative (`Context`, `Strategy`, `Interface`, `Design System`, `Engineering`, `Impact`).
  - **Bug:** In the metadata bar (`CaseStudy.tsx:149-168`), `.mono-tag` is `display: inline-flex`, causing `"LIVE DOMAIN"` and `"Launch ↗"` to render side-by-side without spacing (`LIVE DOMAINLaunch ↗`).

### Contact Experience (`local-contact-desktop.png`, `local-contact-mobile.png`)
- **Desktop Layout Bug (`Contact.tsx:79, 88`):** `className="contact-layout-grid"` and `className="grid-contact-split"` have **no matching CSS rules**, so `getComputedStyle(grid).gridTemplateColumns` evaluates to `"1160px"` (1 column). On `1440×900`, the Project Brief form is pushed completely below the fold beneath three stacked info cards.

### Accessibility & Generic Template Elements
- `CaseStudy.tsx:523` uses `<div onClick={...}>` for "Next Case Study" (not keyboard-focusable).
- `Contact.tsx:355-394` uses `<div className="pill-option">` without `role="button"` or `tabIndex` (verified `pillTagName: "DIV"`, `pillTabIndex: null`).
- `Work.tsx` has `"SaaS"` and `"AI & Automation"` filter pills that return **0 projects**.
