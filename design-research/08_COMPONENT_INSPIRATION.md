# 08 — Component-Level Inspiration & Pattern Library

Synthesizing the remaining component categories across our 26 references, mapped to Averra's existing stack:

1. **Editorial Typography (`14islands`, `AREA 17`, `Work & Co`):** Pair oversized `Plus Jakarta Sans` (`700–800`) display headlines with tight tracking (`-0.035em`) and `JetBrains Mono` (`11–12px`, uppercase, `+0.08em` tracking) for metadata indices.
2. **Architectural Grids (`Obys`, `Work & Co`, `Pentagram`):** Use explicit `1px solid var(--border-light)` dividers, 2-column `.grid-editorial-split` (`320px 1fr`), and consistent `max-width: 1240px` alignment across every section.
3. **Service Presentation (`Bakken & Bæck`, `Instrument`):** Replace generic marketing paragraphs with numbered capability rows (`01`–`05`) showing concrete deliverables + linked proof case studies (`Finservkart`, `Fundamics LMS`, `Mokshita`).
4. **Process Sections (`Linear`, `Work & Co`):** Connected 5-stage horizontal stepper on desktop, collapsing cleanly to a vertical numbered timeline on mobile with explicit step-to-deliverable mapping.
5. **Technical Diagrams (`Bakken & Bæck` Sierra showcase, `Linear`):** Inline SVG architecture diagrams (e.g., Finservkart's 7-portal RBAC flow, Mokshita's PostgreSQL + Razorpay webhook pipeline) styled with `#1E3A8A` and `#E5E5E0` strokes.
6. **Interactive Backgrounds (`Ragged Edge`, `Linear`):** Subtle hairline architectural grid lines or mouse-reactive radial spotlight (`CSS custom properties --mx/--my`) on light `#FAFAF8` surfaces—zero heavy WebGL overhead.
7. **Cinematic Media Sections (`14islands`, `Cuberto`, `Instrument`):** Replace Averra's `"Reserved Media Area — Future Cinematic Experience"` placeholder with a real 16:9 product showreel (MP4/WebM + WebP poster) or interactive tabbed live-product preview.
8. **Team Sections (`Work & Co`, `Bakken & Bæck`):** Upgrade `KnowUs.tsx` `TEAM_MEMBERS` from name-only rows to role, engineering specialty, and direct GitHub/LinkedIn links for founder credibility.
9. **Contact Pages (`Bakken & Bæck`, `Linear`):** Fix `.grid-contact-split` (`5fr 7fr` on desktop) so Direct Contact + transparent scope tiers sit beside the Project Brief form above the fold; use semantic `<button type="button">` pills.
10. **Footer Designs (`Studio Freight`, `AREA 17`):** Compact 4-column architectural footer with live availability copy (no stale `Q3/Q4`), direct WhatsApp/phone/email, and `Privacy` / `Terms` links.
11. **Mobile Design Patterns (`Linear`, `14islands`):** Touch-friendly `44px+` tap targets, clean `slideInRight` drawer animation, and stacked single-column cards with zero internal clipping (fixing `IntroMedia` on `375px`/`768px`).
