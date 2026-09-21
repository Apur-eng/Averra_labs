# 04 — Design Systems & Visual Analysis

This document provides a technical design analysis of the audited codebases, examining concrete color palettes, typography scales, layout architectures, responsive breakpoints, and interaction patterns.

---

## 1. Mokshita Enterprises

### Visual Style & Aesthetic
- **Direction**: Warm artisanal e-commerce aesthetic pairing earthy heritage tones with structured commercial product grids.
- **Color System**:
  - Primary Background: `#FAF7F2` (Warm Sand / Parchment) and `#FFFFFF` (Card surfaces).
  - Primary Accent: `#A34828` (Terracotta / Burnt Clay) and `#D97706` (Amber Ochre).
  - Neutral Charcoal: `#1F2937` (Deep Slate) for headings and high-contrast pricing.
  - Secondary Text: `#4B5563` and `#6B7280` (Warm Stone Gray).
  - Borders: `#E5E7EB` (Subtle hairlines).
- **Typography**:
  - Headings: Serif display pairing evoking heritage craft traditions.
  - Body & UI: Sans-serif (`system-ui`, `-apple-system`, `sans-serif`) for crisp legible navigation and checkout forms.
- **Layout & Grids**:
  - Product Catalog: Multi-column CSS Grid (`repeat(auto-fill, minmax(280px, 1fr))`) with 24px gutters.
  - Checkout Flow: 2-column layout on desktop (Order Summary sticky right, Customer & Shipping details left), collapsing to single-column on screens below 768px.
- **Interaction Patterns**:
  - Product Card Hover: Subtle image scaling (`transform: scale(1.03)`), elevation shadow (`box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1)`), and quick "Add to Cart" slide-up button.
  - Category Carousel: Horizontal overflow scrolling with touch inertia for mobile users.

---

## 2. Solasta Life Sciences

### Visual Style & Aesthetic
- **Direction**: Clinical, high-trust corporate pharmaceutical identity utilizing clean whites, clinical blues, and dark slate contrast sections.
- **Color System**:
  - Primary Background: `#FFFFFF` (Pure clinical white).
  - Secondary Surfaces: `#F8FAFC` (Cool slate tint) and `#0F172A` (Dark navy contrast banner).
  - Brand Primary Blue: `#0284C7` (Sky Medical Blue) and `#0369A1` (Deep Cerulean).
  - Value Block Contrast: Bright Blue (`#2563EB`) for "Quality", Dark Slate (`#1E293B`) for "Responsibility".
  - Text Hierarchy: `#0F172A` (Headings) and `#475569` (Body paragraphs).
- **Typography Scale**:
  - Display Font: `Outfit` (font-weights `600`, `700`, `800`) with tight letter-spacing (`-0.02em`) for bold scientific authority.
  - Body Font: `Inter` (font-weights `300`, `400`, `500`) with `line-height: 1.6` for pharmaceutical legibility.
- **Component Architecture**:
  - Medicine Cards: Equal-height white cards (`border-radius: 8px`, `border: 1px solid #E2E8F0`, `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)`).
  - Modal Inspector: Centered overlay (`fixed`, `inset: 0`, `background: rgba(15, 23, 42, 0.75)`, `backdrop-filter: blur(4px)`) detailing clinical formulations without full-page navigation.
- **Animation & Scroll**:
  - Scroll Reveals: AOS library (`data-aos="fade-up"`, `data-aos-duration="800"`, `data-aos-offset="120"`).

---

## 3. Fundamics Tutorials

### Visual Style & Aesthetic
- **Direction**: Energetic academic institution design balancing structured academic credibility with warm approachable mentor presentation.
- **Color System**:
  - Primary Background: `#FFFFFF` and `#F8F9FA` (Soft neutral foundation).
  - Primary Brand Identity: Deep Navy (`#0A2540`) paired with Academic Gold/Amber (`#F59E0B`) and Forest Green (`#10B981`) for high score callouts.
  - Typography: `#1E293B` (Charcoal primary) and `#64748B` (Secondary subtext).
- **Typography**:
  - Clean contemporary sans-serif hierarchy with monospaced accents for batch dates and percentage badges (`font-family: monospace`, `letter-spacing: 0.04em`).
- **Layout Architecture**:
  - Rankers Grid: Responsive 3-column / 2-column / 1-column layout displaying student portrait, ICSE/CBSE badge, overall percentage, and individual subject marks (e.g. 100 in Mathematics/Physics).
  - Faculty Cards: Two-column mentor split highlighting Director Mayank Aggarwal and IIT Dhanbad alumnus Manish K. Verma with pedagogical philosophy and subject scope.
- **Responsive Breakpoints**:
  - Mobile: `< 640px` (Single column, full-width admission buttons, sticky phone bar).
  - Tablet: `640px – 1024px` (2-column rankers grid, collapsed navigation drawer).
  - Desktop: `> 1024px` (Full horizontal navigation with LMS quick-link button).

---

## 4. Pathik Organic Farming

### Visual Style & Aesthetic
- **Direction**: Earthy, photographic "Scrollytelling" aesthetic evoking morning mist, fertile soil, and natural living.
- **Color System**:
  - Canvas & Background: `#F5F0E8` (Warm Organic Linen) and `#1B2D1B` (Deep Earth Moss Dark).
  - Accents: Leaf Green (`#2E7D32`) and Sun Gold (`#D4AF37`).
  - Frosted Glass: `rgba(245, 240, 232, 0.92)` with `backdrop-filter: blur(18px)`.
- **Motion & Canvas System**:
  - 600vh sticky scroll sequence powered by GSAP ScrollTrigger. As the user scrolls vertically, 90 compressed WebP keyframes paint sequentially onto an HTML5 `<canvas>`, depicting a walk through organic fields with morning mist.
  - Dynamic Header: Header remains fully transparent throughout the 600vh hero and transitions smoothly to frosted glass (`border-bottom: 1px solid rgba(0,0,0,0.08)`) once the canvas journey completes.
- **Interactive UI**:
  - Before/After Comparison: Split-screen image container with custom drag handle allowing real-time inspection of chemical-degraded vs. organic soil recovery.

---

## 5. Sterling & Associates Law

### Visual Style & Aesthetic
- **Direction**: Minimalist modern corporate legal firm design built on TailwindCSS and Radix UI.
- **Color System**:
  - Dominant Dark: Deep Navy / Obsidian (`#0F172A`).
  - Primary Neutral: Alabaster Gray (`#F8FAFC`).
  - Accent: Polished Brass / Warm Amber (`#B45309`) for consultation CTAs and practice badges.
- **Component System**:
  - Radix UI accessible modal dialogs for appointment scheduling.
  - Clean card grids with subtle 1px hairline borders (`border-slate-200 dark:border-slate-800`).
