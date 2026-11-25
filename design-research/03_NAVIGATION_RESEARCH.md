# 03 — Navigation Research

## Pattern Analysis

### 1. Minimalist Left-Wordmark / Right-Cluster (`area17.com`, `14islands.com`)
- **Screenshots:** [area17.png](file:///d:/averra/design-research/screenshots/navigation/area17.png), [14islands.png](file:///d:/averra/design-research/screenshots/heroes/14islands.png)
- **Layout:** Left-anchored wordmark (`A/`) or studio name; right-aligned flat text links (`Clients`, `Capabilities`, `Culture`, `Contact`, `Latest`) with generous horizontal breathing room and zero heavy pill chrome.
- **Why It Works:** Keeps the header weightless so oversized hero typography owns the top of the viewport.
- **Averra Reinterpretation:** Averra's `Navbar.tsx` already follows this exact pattern (`[A] Averra` left; `Work`, `Know Us`, `Contact`, `Start a Project →` right). Keep this structure; focus on fixing the missing `@keyframes slideInRight` in `MobileNav.tsx` and ensuring `prefers-reduced-motion` is respected.

### 2. Floating Centered Pill Dock (`bakkenbaeck.com`)
- **Screenshot:** [bakkenbaeck.png](file:///d:/averra/design-research/screenshots/heroes/bakkenbaeck.png)
- **Visual & Layout:** Centered white bar with `1px` border and a high-contrast dark `Get in touch` block button on the right edge (`BB | Work About Clients Join us A-Z | Get in touch`).
- **Why It Works:** Creates an unmistakable architectural toolbar feel.
- **Feasibility:** `Low` complexity in `Navbar.tsx`, though Averra's current full-width hairline header integrates better with its Swiss top-strip grid.

### 3. Corner-Pinned Editorial Micro-Nav (`studiofreight.com`)
- **Screenshot:** [studiofreight.png](file:///d:/averra/design-research/screenshots/heroes/studiofreight.png)
- **Visual & Layout:** Emblem top-left, active route indicator (`• Home`) center-left, comma-separated links center-right, `Contact` top-right.
- **Accessibility Note:** Comma-separated inline text links risk small touch targets on mobile if not given `min-height: 44px` hit areas; Averra's `MobileNav` drawer is superior for mobile usability.
