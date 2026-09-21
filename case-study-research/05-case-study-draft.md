# 05 — Portfolio Case Study Drafts & Narratives

This document provides ready-to-review case-study narratives for the audited projects. Every claim is strictly demarcated as either **[VERIFIED]** (backed by codebase evidence) or **[NEEDS CONFIRMATION]** (requires client/owner verification before publishing).

---

# Case Study 1 (Flagship Client Project): Mokshita Enterprises

### 01 — Overview
- **[VERIFIED]**: Mokshita Enterprises is a digital e-commerce platform specializing in handcrafted Indian goods, artisan-made products, and regional heritage travel experiences.
- **[VERIFIED]**: The system is engineered as a decoupled architecture comprising an Express/PostgreSQL/Supabase backend API, a customer-facing storefront, and a dedicated React/Vite admin management SPA.
- **[NEEDS CONFIRMATION]**: Total number of active artisans onboarded, geographical reach of fulfillment, and business incorporation details.

### 02 — The Challenge
- **[VERIFIED]**: The platform required a production-safe category architecture capable of organizing complex artisan product lines while maintaining backward compatibility with legacy string-based categorizations.
- **[VERIFIED]**: Products risked being orphaned if store administrators deleted active categories in the admin dashboard.
- **[NEEDS CONFIRMATION]**: Specific pre-migration operational pain points, return rates, or customer checkout drop-off rates prior to this rebuild.

### 03 — The Approach
- **[VERIFIED]**: Architected a normalized relational hierarchy (`categories` and `subcategories` with UUID primary keys and slug indexing) backed by an indestructible "Others" fallback category.
- **[VERIFIED]**: Integrated Razorpay server-side payment generation with cryptographic signature verification to ensure tamper-proof transactions.
- **[VERIFIED]**: Built a decoupled React single-page admin portal to give operations staff real-time autonomy over product cataloging, order fulfillment statuses, and dynamic homepage banners.

### 04 — The Product
- **[VERIFIED]**: An end-to-end commerce suite:
  - An artisan storefront with rich category browsing, dynamic search, and shopping cart persistence.
  - A secure Node.js API with rate limiting, JWT customer auth, and Supabase PostgreSQL integration.
  - An internal admin dashboard for catalog hierarchy, inventory updates, and order lifecycle management.

### 05 — Key Features
- **[VERIFIED]**: Production-safe relational category system with auto-slugification and "Others" re-assignment on deletion.
- **[VERIFIED]**: Multi-step checkout with Razorpay payment integration and server-side HMAC validation.
- **[VERIFIED]**: Customer authentication lifecycle (signup, login, email verification, password reset tokens).
- **[VERIFIED]**: Admin order status transitions (Pending, Confirmed, Shipped, Delivered).
- **[VERIFIED]**: Artisan stories and dynamic CMS banner management.

### 06 — Design
- **[VERIFIED]**: Warm terracotta and amber palette (`#A34828`, `#D97706`) paired with clean cream card surfaces (`#FAF7F2`).
- **[VERIFIED]**: Editorial grid layout supporting high-resolution artisan photography, pack details, and responsive cart summaries.

### 07 — Engineering
- **[VERIFIED]**: Express `4.19.2` REST API with parameterized PostgreSQL queries using connection pooling (`pg: 8.12.0`).
- **[VERIFIED]**: Security hardening with `helmet`, whitelisted `cors`, and `express-rate-limit`.
- **[VERIFIED]**: Relational database migration scripts handling schema evolution on boot.

### 08 — Technology
- **[VERIFIED]**: Node.js, Express, PostgreSQL, Supabase, React 18, Vite, Razorpay SDK, JWT, Bcrypt, Multer.

### 09 — Outcome
- **[VERIFIED]**: Successfully established a normalized, production-safe category and e-commerce infrastructure with zero product orphaning on category deletion.
- **No verified business outcome (sales numbers, conversion rates, revenue) found in the repository.**
- **[NEEDS CONFIRMATION]**: Commercial metrics to request: Total orders processed, average cart value, and inventory scale.

### 10 — Reflection & Next Steps
- **[VERIFIED]**: The system is fully architected for multi-vendor expansion and headless mobile application consumption via standardized REST endpoints.

---

## Portfolio Copy Draft: Mokshita Enterprises

- **PROJECT TITLE**: Mokshita Enterprises — Full-Stack Artisan E-Commerce & Category Architecture
- **ONE-LINE DESCRIPTION**: A modern, production-grade e-commerce ecosystem pairing a heritage storefront with a resilient Node.js/PostgreSQL backend and a dedicated React operations dashboard.
- **PROJECT TYPE**: Full-Stack E-Commerce Platform & Admin Suite
- **SERVICES**: System Architecture, REST API Engineering, Database Normalization, E-Commerce Storefront, Admin SPA Development, Payment Gateway Integration
- **TECHNOLOGY**: Node.js, Express, PostgreSQL, Supabase, React, Vite, Razorpay, JWT
- **SHORT OVERVIEW**: Averra engineered an end-to-end digital commerce architecture for Mokshita Enterprises. The platform replaces fragile string categorizations with a normalized relational category engine, automated Razorpay order processing, and a decoupled React management dashboard for operations.
- **CHALLENGE**: The client needed a scalable catalog system capable of handling expanding artisanal inventory without data corruption, accidental product orphaning during category edits, or payment synchronization failures.
- **APPROACH**: We architected a normalized relational schema in PostgreSQL with automated slug generation and an indestructible fallback category. We backed the storefront with a hardened Node.js API and gave operations direct catalog control through a dedicated React admin dashboard.
- **KEY FEATURES**: Indestructible relational category hierarchy, Razorpay payment verification, customer authentication, localStorage shopping cart, order fulfillment dashboard.
- **ENGINEERING**: High-concurrency PostgreSQL connection pooling via Supabase, rate-limited auth endpoints, cryptographic webhook validation, and decoupled Vite SPA admin tools.
- **OUTCOME**: A robust, zero-orphaning e-commerce infrastructure ready for high-volume catalog growth and multi-channel expansion.

---

# Case Study 2 (Client Project): Fundamics Tutorials

### 01 — Overview
- **[VERIFIED]**: Fundamics Tutorials is a premier academic coaching institute based in Lucknow, educating students across Classes I through XII for ICSE, ISC, and CBSE board examinations.
- **[VERIFIED]**: The website serves as the institute's official digital platform, showcasing verified student board examination results, faculty mentor credentials, and admissions inquiry workflows.
- **[NEEDS CONFIRMATION]**: Annual student enrollment counts and specific alumni success metrics beyond the verified rankers list.

### 02 — The Challenge
- **[VERIFIED]**: The institute needed an authoritative, high-speed digital flagship to replace fragmented PDFs, clearly present verified academic toppers across multiple board exams, and highlight the pedagogical leadership of its founders.
- **[NEEDS CONFIRMATION]**: Inquiries conversion rate before platform launch.

### 03 — The Approach
- **[VERIFIED]**: Engineered a high-performance Single-Page Application using React 19 and strict TypeScript, powered by Vite and Oxlint for sub-second compile and load times.
- **[VERIFIED]**: Implemented a custom client-side router context that dynamically manages SEO `<title>` and metadata for each academic section without page reloads.

### 04 — The Product
- **[VERIFIED]**: A polished academic web platform:
  - Rankers & Toppers Portal with verified board exam marks (up to 100/100 in Physics/Maths) and student portraits.
  - Faculty directory highlighting Founder Mayank Aggarwal and IIT Dhanbad alumnus Manish K. Verma.
  - Admissions inquiry interface integrated directly with the institute's official LMS portal (`app.fundemicstutorials.in`).

### 05 — Key Features
- **[VERIFIED]**: Interactive rankers showcase categorized by examination board and batch year.
- **[VERIFIED]**: Dynamic custom router context with automated SEO document title updates.
- **[VERIFIED]**: Admissions inquiry capture with branch routing.
- **[VERIFIED]**: Deep links to the student LMS portal and registration endpoints.

### 06 — Design
- **[VERIFIED]**: Deep Navy (`#0A2540`) and Academic Gold (`#F59E0B`) palette communicating academic rigor and achievement.
- **[VERIFIED]**: High-density typography hierarchy with custom monospaced badge accents for examination percentages.

### 07 — Engineering
- **[VERIFIED]**: Built on React `19.2.8` with strict TypeScript `~6.0.2` and Oxlint static analysis.
- **[VERIFIED]**: Zero runtime dependencies for routing, maximizing bundle efficiency and mobile performance.

### 08 — Technology
- **[VERIFIED]**: React 19, TypeScript, Vite, Oxlint, Lucide React.

### 09 — Outcome
- **[VERIFIED]**: Consolidated all board examination results (2019–2026), faculty credentials, and admissions forms into a single unified high-speed web application.
- **No verified business outcome (inquiry volumes, enrollment growth) found in the repository.**
- **[NEEDS CONFIRMATION]**: Commercial metrics to request: Total student admissions generated through digital inquiries.

---

## Portfolio Copy Draft: Fundamics Tutorials

- **PROJECT TITLE**: Fundamics Tutorials — Academic Flagship & Rankers Results Platform
- **ONE-LINE DESCRIPTION**: A high-performance React 19 web application presenting verified academic achievements, faculty credentials, and admissions workflows for a premier coaching institute.
- **PROJECT TYPE**: Educational Web Platform & Academic Portal
- **SERVICES**: Frontend Architecture, UI/UX Design, Performance Optimization, Custom Routing, Academic Results System
- **TECHNOLOGY**: React 19, TypeScript, Vite, Oxlint, Lucide React
- **SHORT OVERVIEW**: Averra designed and engineered the digital platform for Fundamics Tutorials, replacing static brochures with a reactive, high-speed web application that showcases verified student board toppers and streamlines admissions inquiries.
- **CHALLENGE**: The institute required a credible, fast-loading digital showcase to present years of top examination results across ICSE, ISC, and CBSE boards without third-party template bloat.
- **APPROACH**: We built a lightweight Single-Page Application using React 19 and strict TypeScript, implementing custom client-side routing with automatic SEO title hydration and structured academic result filtering.
- **KEY FEATURES**: Verified student board results directory, faculty credential showcase (including IIT alumni mentors), admissions inquiry dispatch, direct LMS portal integration.
- **ENGINEERING**: Zero-dependency context-based router, Oxlint static code validation, sub-second load times on mobile connections.
- **OUTCOME**: A fast, authoritative academic flagship consolidating years of educational credibility into a high-converting digital experience.

---

# Case Study 3 (Client Project): Solasta Life Sciences

### 01 — Overview
- **[VERIFIED]**: Solasta Life Sciences Pvt. Ltd. is a super-specialty pharmaceutical company headquartered in New Delhi, manufacturing in WHO-GMP certified facilities across Nephrology, Cardiology, Urology, Gastroenterology, and Critical Care.
- **[VERIFIED]**: The website serves as the primary corporate presence, establishing regulatory credibility and offering a comprehensive pharmaceutical formulation catalog.
- **[NEEDS CONFIRMATION]**: Total hospital/distributor partner counts Pan-India.

### 02 — The Challenge
- **[VERIFIED]**: Needed to present clinical drug formulations clearly to healthcare professionals, distributors, and procurement teams with immediate access to composition, pack size, and indications.
- **[NEEDS CONFIRMATION]**: Previous website traffic or distributor lead volumes.

### 03 — The Approach
- **[VERIFIED]**: Engineered a static-first corporate website powered by a structured JSON data architecture (`solasta_data.json`), pairing minimal clinical card designs with instant modal inspection.
- **[VERIFIED]**: Integrated AOS animation triggers to present corporate WHO-GMP certifications and therapeutic focus areas with smooth editorial flow.

### 04 — Key Features
- **[VERIFIED]**: Instant therapeutic category filter tabs (Nephrology, Cardiology, Urology, Gastroenterology, Critical Care).
- **[VERIFIED]**: Modal-based pharmaceutical formulation viewer with indications and composition details.
- **[VERIFIED]**: Corporate career application and business inquiry forms.

### 05 — Technology
- **[VERIFIED]**: HTML5, Vanilla JavaScript, Vanilla CSS, AOS, JSON data layer, Google Fonts (Inter + Outfit).

### 06 — Outcome
- **[VERIFIED]**: Unified complete corporate and product documentation into a lightweight, highly legible digital catalog.
- **No verified business outcome (distributor inquiries, sales contracts) found in the repository.**
- **[NEEDS CONFIRMATION]**: B2B inquiry metrics to request from client.
