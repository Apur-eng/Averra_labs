# 02 — Hero Sections Research

## Pattern Analysis

### 1. Asymmetric Display Typography + Subtle Media Peek (`14islands.com`)
- **Screenshot:** [14islands.png](file:///d:/averra/design-research/screenshots/heroes/14islands.png)
- **Visual & Typography:** `#FFFFFF` canvas, `BentonSans`, oversized `"Design / & Technology"` with indented second line and muted `&`.
- **Layout & Motion:** Top metadata strip right-aligned above the fold; rounded media reel peeks into the bottom 15% of the viewport to invite scroll.
- **Why It Works:** Establishes immediate studio authority without blocking content behind a preloader or full-screen video.
- **Averra Reinterpretation:** Averra's current `HeroSection` already uses a 3-line indented headline (`DIGITAL / PRODUCTS / BUILT TO GROW.`). Removing the `"Future Insertion Slot"` text from `IntroMedia` and replacing it with a real crisp product reel (matching 14islands' clean media peek) will elevate the hero immediately.
- **Stack / Complexity / Perf / A11y:** React + Framer Motion (`Low` complexity). Ensure eager hero media is `< 200 KB` WebP/poster and respects `useReducedMotion()`.

### 2. Statement + Proof Strip + Diagrammatic Showcase (`bakkenbaeck.com`)
- **Screenshot:** [bakkenbaeck.png](file:///d:/averra/design-research/screenshots/heroes/bakkenbaeck.png)
- **Visual & Typography:** `50px` `bbSans` 2-line manifesto (`"Bakken & Bæck is a design and technology studio. We build digital products, from zero to launch."`), followed immediately by a monochrome client logo strip (`phantom`, `ramp`, `SIERRA`, `parallel`, `Sanity`) and live product/diagram cards.
- **Why It Works:** Answers *who you are*, *what you do*, and *who trusts you* in under 3 seconds above the fold.
- **Averra Reinterpretation:** Add a restrained monochrome client/project strip (`Finservkart`, `Fundamics`, `Mokshita`, `Solasta`, `Feel Fresh`) directly beneath the Hero actions instead of burying proof 2,000px down the page.
- **Stack / Complexity / Perf / A11y:** Pure CSS grid + SVG/monochrome logos (`Low` complexity, zero runtime overhead).

### 3. Editorial Statement + Press Validation (`work.co`)
- **Screenshot:** [workco.png](file:///d:/averra/design-research/screenshots/portfolios/workco.png)
- **Visual & Typography:** `56px` `HelveticaNowDisplay` paired with `adobe-garamond-pro` serif quote (`Fast Company`) in a strict 2-column Swiss split (`35% / 65%`).
- **Why It Works:** Communicates senior-only seriousness without decorative badges or coordinate noise.
- **Averra Reinterpretation:** Trim redundant coordinate/edition strips (`EDITION 2026`, `COORD // 28°36'N`) from `HeroSection` bottom/top so the editorial lead and primary CTA carry the visual weight.
