import { Project } from '../types/project';

export const PROJECTS: Project[] = [
  {
    slug: 'mokshita-enterprises',
    title: 'Mokshita Enterprises — Full-Stack Artisan E-Commerce & Category Architecture',
    client: 'Mokshita Enterprises',
    industry: 'Artisan Goods & Heritage Commerce',
    year: '2025',
    category: 'E-commerce',
    categoryTag: 'Full-Stack E-Commerce & Systems Engineering',
    shortDesc: 'Decoupled artisan e-commerce ecosystem pairing a heritage storefront with a resilient Node.js/PostgreSQL backend and a dedicated React operations dashboard.',
    description: 'Averra engineered an end-to-end digital commerce architecture for Mokshita Enterprises. The platform features an indestructible relational category engine, automated Razorpay order processing, and a decoupled React management dashboard for operations.',
    challenge: 'The client needed a scalable catalog system capable of handling expanding artisanal inventory without data corruption, accidental product orphaning during category edits, or payment synchronization failures.',
    approach: 'We architected a normalized relational schema in PostgreSQL with automated slug generation and an indestructible fallback category. We backed the storefront with a hardened Node.js API and gave operations direct catalog control through a dedicated React admin dashboard.',
    design: 'Warm terracotta and amber palette (#A34828, #D97706) paired with clean cream card surfaces (#FAF7F2). Editorial grid layout supporting high-resolution artisan photography, pack details, and responsive cart summaries.',
    development: 'Express 4.19.2 REST API with parameterized PostgreSQL queries using connection pooling via Supabase, rate-limited auth endpoints, Razorpay cryptographic webhook validation, and decoupled Vite SPA admin tools.',
    services: [
      'System Architecture',
      'REST API Engineering',
      'Database Normalization',
      'E-Commerce Storefront',
      'Admin SPA Development',
      'Razorpay Payment Gateway'
    ],
    technology: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Supabase',
      'React',
      'Vite',
      'Razorpay',
      'JWT'
    ],
    liveUrl: 'https://www.mokshitahandicrafts.com',
    heroImage: '/images/projects/mokshita/hero.png',
    thumbnail: '/images/projects/mokshita/artisan_hero.jpg',
    visualShowcase: [
      {
        title: 'Blue Pottery & Heritage Craft',
        desc: 'Production-safe relational category system with auto-slugification and "Others" re-assignment on deletion.',
        badge: 'Craft Catalog',
        image: '/images/projects/mokshita/craft_blue_pottery.png'
      },
      {
        title: 'Artisan Wood Carving Showcase',
        desc: 'React + Vite admin panel enabling real-time product CRUD, inventory sync, and order lifecycle tracking.',
        badge: 'Woodwork Line',
        image: '/images/projects/mokshita/artisan_wood_carving.png'
      },
      {
        title: 'Pichwai Traditional Art Workshop',
        desc: 'Server-side order generation and cryptographic webhook signature verification.',
        badge: 'Heritage Art',
        image: '/images/projects/mokshita/craft_pichwai.png'
      }
    ],
    metrics: [
      { value: '0', label: 'Orphaned Products' },
      { value: '100%', label: 'Payment Verification' },
      { value: 'Full-Stack', label: 'Decoupled Architecture' }
    ],
    testimonial: {
      quote: 'The new category system and admin dashboard completely resolved our inventory sync bottlenecks. We can update our entire catalog and process orders with total confidence.',
      author: 'Managing Team',
      title: 'Mokshita Enterprises'
    },
    featured: true
  },
  {
    slug: 'solasta-life-sciences',
    title: 'Solasta Life Sciences — Super-Specialty Pharmaceutical Platform & Medication Catalog',
    client: 'Solasta Life Sciences Pvt. Ltd.',
    industry: 'Pharmaceuticals & Healthcare',
    year: '2025',
    category: 'Websites',
    categoryTag: 'Pharmaceutical Corporate Platform',
    shortDesc: 'Super-specialty pharmaceutical corporate platform and interactive formulation catalog spanning Nephrology, Cardiology, Urology, Gastroenterology, and Critical Care.',
    description: 'Averra developed a corporate digital flagship and formulation catalog for Solasta Life Sciences, providing healthcare practitioners and medical distributors instant access to critical medicine specifications across five core therapeutic areas.',
    challenge: 'Needed to present clinical drug formulations clearly to healthcare professionals, distributors, and procurement teams with immediate access to composition, pack size, and indications without sluggish page loads.',
    approach: 'Engineered a static-first corporate website powered by a structured JSON data architecture, pairing minimal clinical card designs with instant modal inspection and WHO-GMP compliance certification highlights.',
    design: 'Clinical white (#FFFFFF) and slate (#0F172A) contrast paired with medical cerulean (#0284C7). Bold Outfit display typography with readable Inter body paragraphs.',
    development: 'Lightweight static-first frontend with structured JSON data hydration, AOS scroll animations, client-side category filtering, and modal formulation inspector.',
    services: [
      'Digital Flagship Design',
      'Product Catalog Architecture',
      'Modal Formulation Inspector',
      'Responsive UI/UX',
      'Talent Acquisition Flow'
    ],
    technology: [
      'HTML5',
      'Vanilla JavaScript',
      'Vanilla CSS',
      'AOS Animations',
      'JSON Data Architecture'
    ],
    liveUrl: 'https://solasta-clone-website.vercel.app/',
    heroImage: '/images/projects/solasta/torasta_10.png',
    thumbnail: '/images/projects/solasta/sevasta_400.png',
    visualShowcase: [
      {
        title: 'Torasta-10 Formulation Package',
        desc: 'Interactive tabs allowing healthcare professionals to filter by Nephrology, Cardiology, Urology, Gastroenterology, and Critical Care.',
        badge: 'Nephrology',
        image: '/images/projects/solasta/torasta_10.png'
      },
      {
        title: 'Ketocut Tablets Packaging',
        desc: 'Instant clinical inspection modal detailing generic composition, pack sizes, and therapeutic indications.',
        badge: 'CKD Care',
        image: '/images/projects/solasta/ketocut.png'
      },
      {
        title: 'Renibus-Heal Clinical Presentation',
        desc: 'Complete generic formulation documentation with pack sizes and clinical indications.',
        badge: 'Critical Care',
        image: '/images/projects/solasta/renibus_heal.png'
      }
    ],
    metrics: [
      { value: '5', label: 'Therapeutic Areas' },
      { value: 'WHO-GMP', label: 'Certified Manufacturing' },
      { value: '100%', label: 'Static-First Speed' }
    ],
    testimonial: {
      quote: 'Our medical catalog is fast, precise, and immediately accessible on any device. It has streamlined how our distributors review formulations across India.',
      author: 'Corporate Communications',
      title: 'Solasta Life Sciences'
    },
    featured: true
  },
  {
    slug: 'fundamics-tutorials',
    title: 'Fundamics Tutorials — Academic Flagship & Board Rankers Results Platform',
    client: 'Fundemics Tutorials LLP',
    industry: 'Education & Academic Coaching',
    year: '2025',
    category: 'Websites',
    categoryTag: 'Academic Flagship & Results Showcase',
    shortDesc: 'High-performance React 19 web application presenting verified academic achievements, faculty credentials, and admissions workflows for a premier coaching institute.',
    description: 'Averra designed and engineered the digital platform for Fundamics Tutorials in Lucknow, replacing static brochures with a reactive, high-speed web application showcasing verified student board toppers and streamlining admissions inquiries.',
    challenge: 'The institute required a credible, fast-loading digital showcase to present years of top examination results across ICSE, ISC, and CBSE boards without third-party template bloat.',
    approach: 'We built a lightweight Single-Page Application using React 19 and strict TypeScript, implementing custom client-side routing with automatic SEO title hydration and structured academic result filtering.',
    design: 'Deep Navy (#0A2540) and Academic Gold (#F59E0B) palette communicating academic rigor and achievement. High-density typography hierarchy with custom monospaced badge accents for examination percentages.',
    development: 'React 19.2.8 with strict TypeScript and Oxlint static analysis. Zero runtime dependencies for routing, maximizing bundle efficiency and mobile performance.',
    services: [
      'Frontend Architecture',
      'UI/UX Design',
      'Performance Optimization',
      'Custom Routing',
      'Academic Results System',
      'LMS Integration'
    ],
    technology: [
      'React 19',
      'TypeScript',
      'Vite',
      'Oxlint',
      'Lucide React'
    ],
    liveUrl: 'https://www.fundemicstutorials.in/',
    heroImage: '/images/projects/fundamics/hero_classroom.jpg',
    thumbnail: '/images/projects/fundamics/rankers_header.png',
    visualShowcase: [
      {
        title: 'Verified Board Examination Results',
        desc: 'Board examination toppers archive across ICSE, ISC, and CBSE with verified marks up to 100/100 in Physics and Mathematics.',
        badge: 'Verified Results',
        image: '/images/projects/fundamics/result.png'
      },
      {
        title: 'Leadership & Faculty Mentor Direction',
        desc: 'Detailed faculty directory featuring Director Mayank Aggarwal and IIT Dhanbad alumnus Manish K. Verma.',
        badge: 'Faculty Leadership',
        image: '/images/projects/fundamics/mayank_aggarwal.jpeg'
      },
      {
        title: 'Mobile-Optimized Academic Interface',
        desc: 'Zero-dependency context router that dynamically hydrates document.title and meta tags for every section.',
        badge: 'Mobile UX',
        image: '/images/projects/fundamics/edge_mobile.png'
      }
    ],
    metrics: [
      { value: '100/100', label: 'Top Physics & Math Scores' },
      { value: '2019–2026', label: 'Board Batches Archived' },
      { value: 'Sub-second', label: 'Compile & Load Speed' }
    ],
    testimonial: {
      quote: 'Averra built a platform that honors the hard work of our students and faculty. It is blisteringly fast, authoritative, and clean.',
      author: 'Academic Leadership',
      title: 'Fundamics Tutorials'
    },
    featured: true
  },
  {
    slug: 'pathik-organic-farming',
    title: 'Pathik — Organic Farming Scrollytelling, Learning Hub & Masterclass Funnel',
    client: 'Pathik Natural Farming',
    industry: 'Agriculture & Sustainable Living',
    year: '2026',
    category: 'Websites',
    categoryTag: 'Organic Farming Narrative & Masterclass Funnel',
    shortDesc: 'An immersive natural farming web experience pairing 600vh GSAP canvas scrollytelling with a free recipe Learning Hub and cohort enrollment funnel.',
    description: 'A narrative platform documenting 20+ years of natural farming wisdom, government endorsements, and river revival across Uttar Pradesh. Features GSAP canvas morning mist sequence, bilingual English/Hindi toggle, and interactive before/after soil recovery inspection.',
    challenge: 'Rural farmers and urban students needed access to high-value pesticide-free farming wisdom, but video streaming causes severe buffering on low-bandwidth rural mobile networks.',
    approach: 'Architected an HTML5 canvas sequence driven by GSAP ScrollTrigger using 90+ optimized WebP images, completely bypassing video player overhead while delivering a cinematic morning mist crop walk.',
    design: 'Warm organic linen (#F5F0E8) and deep moss green (#1B2D1B) palette with frosted glassmorphism elements.',
    development: 'HTML5 2D canvas frame scrubbing, GSAP animation timeline, bilingual DOM attribute switcher, and interactive split drag slider.',
    services: [
      'Canvas Scrollytelling',
      'UI/UX Design',
      'Bilingual Localization',
      'Learning Hub Directory',
      'Cohort Sales Funnel'
    ],
    technology: [
      'HTML5 Canvas',
      'GSAP',
      'ScrollTrigger',
      'Vanilla JavaScript',
      'CSS3 Glassmorphism'
    ],
    heroImage: '/images/projects/pathik/hero.jpg',
    thumbnail: '/images/projects/pathik/hero.jpg',
    visualShowcase: [
      {
        title: '600vh Canvas Scrollytelling',
        desc: 'Scroll-triggered 90-frame morning mist sequence with zero video buffering on mobile networks.',
        badge: 'Canvas Scrollytelling',
        image: '/images/projects/pathik/hero.jpg'
      },
      {
        title: 'Before & After Soil Slider',
        desc: 'Interactive drag comparison contrasting chemical-degraded soil with organic crop regeneration.',
        badge: 'Interactive Slider'
      },
      {
        title: 'Bilingual Interface Toggle',
        desc: 'Instant English / Hindi language switcher tailored for regional farming communities.',
        badge: 'Bilingual Toggle'
      }
    ],
    metrics: [
      { value: '90+', label: 'Optimized Canvas Frames' },
      { value: '0s', label: 'Video Buffering Lag' },
      { value: 'Bilingual', label: 'English & Hindi Support' }
    ],
    testimonial: {
      quote: 'The canvas animation brings our fields to life without making rural farmers wait for heavy video buffering. It communicates our life mission with heart.',
      author: 'Organic Farming Master',
      title: 'Pathik Mission'
    },
    featured: false
  },
  {
    slug: 'sterling-and-associates-law',
    title: 'Sterling & Associates Law — Full-Stack Edge Architecture & Legal Platform',
    client: 'Sterling & Associates',
    industry: 'Corporate & Commercial Law',
    year: '2025',
    category: 'Applications',
    categoryTag: 'Cloudflare Edge Legal Platform',
    shortDesc: 'Modern corporate legal firm web application showcasing full-stack edge computing with React 19, TailwindCSS, Radix UI, and Hono on Cloudflare Workers.',
    description: 'A modern corporate legal web application engineered for instant global response times using Cloudflare Workers edge runtime and React 19 component primitives.',
    challenge: 'Corporate legal clients expect instant load times, confidentiality, and accessible scheduling without traditional server cold start delays.',
    approach: 'Built on Cloudflare edge infrastructure using Hono framework and Vite Cloudflare plugin, pairing Radix UI accessible modal dialogs with Zod request validation.',
    design: 'Obsidian navy (#0F172A) and polished brass (#B45309) aesthetic with clean hairline borders.',
    development: 'Hono edge worker runtime, React 19 with React Router 7, TailwindCSS, and Radix UI dialog primitives.',
    services: [
      'Cloudflare Edge Architecture',
      'Hono API Engineering',
      'React 19 Frontend',
      'Radix UI Components',
      'Consultation Booking'
    ],
    technology: [
      'React 19',
      'Hono',
      'Cloudflare Workers',
      'TailwindCSS',
      'Radix UI',
      'Zod',
      'Vite'
    ],
    visualShowcase: [
      {
        title: 'Sub-Millisecond Edge Hono API',
        desc: 'Serverless edge runtime running globally on Cloudflare Workers.',
        badge: 'Edge Hono API'
      },
      {
        title: 'Accessible Radix UI Modals',
        desc: 'Keyboard-accessible consultation booking dialogs with Zod schema validation.',
        badge: 'Radix UI Primitives'
      }
    ],
    metrics: [
      { value: '< 15ms', label: 'Edge Response Time' },
      { value: 'React 19', label: 'Modern Component Stack' },
      { value: 'Global', label: 'Cloudflare Edge Network' }
    ],
    testimonial: {
      quote: 'The speed and crisp execution of this edge-native application set an immediate tone of technical precision and professionalism for our clients.',
      author: 'Practice Director',
      title: 'Sterling & Associates'
    },
    featured: false
  },
  {
    slug: 'feel-fresh-cafe',
    title: 'Feel Fresh Cafe — Landmark Lucknow Cafe Flagship & Interactive Menu Experience',
    client: 'Feel Fresh Cafe',
    industry: 'Hospitality & Food and Beverage',
    year: '2025',
    category: 'Websites',
    categoryTag: 'Hospitality & F&B Digital Flagship',
    shortDesc: 'High-speed digital flagship for Lucknow’s iconic late-night cold coffee destination opposite Chota Imambara, featuring 40+ dynamic drink menus, live Google reviews, and direct ordering.',
    description: 'Averra designed and developed the digital flagship for Feel Fresh Cafe in Husainabad, Lucknow. Located beside the historic Ghantaghar Clock Tower, the platform serves over 40+ handcrafted cold coffees, shakes, and mocktails with instant menu categorization, mobile-first calling, and real-time reviews.',
    challenge: 'The cafe needed a blazing-fast, mobile-first web presence to serve evening tourists, students, and late-night visitors in old Lucknow without bloated page weight, while prominently featuring its 40+ drink menu and 4.3-star Google rating.',
    approach: 'Engineered a zero-dependency, ultra-lightweight frontend using semantic HTML5, custom CSS variables, and vanilla JavaScript. Integrated IntersectionObserver scroll reveal animations, interactive tabbed menu filtering, dynamic metric counters, and one-tap calling.',
    design: 'Moody late-night neon aesthetic with deep espresso charcoal, vibrant neon mint (#00F5D4), and warm gold accents inspired by Lucknow nightlife. Elegant typography pairing Inter with classic Playfair Display.',
    development: 'Lightweight Vanilla JS with modular observers, responsive mobile drawer navigation, live Google Maps embedding, schema-optimized local SEO, and sub-second load times.',
    services: [
      'Digital Brand Identity',
      'Mobile-First UI/UX',
      'Interactive Menu Architecture',
      'Local SEO Optimization',
      'Google Reviews Integration',
      'Direct Order & Call Workflows'
    ],
    technology: [
      'HTML5',
      'Vanilla JavaScript',
      'Vanilla CSS',
      'IntersectionObserver',
      'Google Maps API',
      'Vercel'
    ],
    liveUrl: 'https://feel-fresh.vercel.app/',
    heroImage: '/images/projects/feel-fresh/photo_shake_hero.png',
    thumbnail: '/images/projects/feel-fresh/photo_cold_coffee_neon.png',
    visualShowcase: [
      {
        title: 'Neon Ambiance & Cold Coffee Bar',
        desc: 'Signature cold coffee with ice-cream served in front of the landmark neon installation opposite Chota Imambara.',
        badge: 'Signature Cold Coffee',
        image: '/images/projects/feel-fresh/photo_cold_coffee_neon.png'
      },
      {
        title: '40+ Dynamic Menu & Virgin Cocktails',
        desc: 'Interactive tabbed menu categorizing 40+ drinks from Virgin Mojitos to premium Monin syrup blends and energy infusions.',
        badge: 'Interactive Drink Menu',
        image: '/images/projects/feel-fresh/photo_red_green_drinks.png'
      },
      {
        title: 'Stocked Bar & Late-Night Heritage Vibe',
        desc: 'Full cafe bar counter stocked with Monin syrups, welcoming visitors until 1:00 AM daily in historic Husainabad.',
        badge: 'Late-Night Cafe',
        image: '/images/projects/feel-fresh/photo_bar_counter.png'
      }
    ],
    metrics: [
      { value: '4.3 ★', label: 'Google Rating (56+ Reviews)' },
      { value: '40+', label: 'Handcrafted Drinks' },
      { value: '1:00 AM', label: 'Late-Night Heritage Service' }
    ],
    testimonial: {
      quote: 'Our customers love having instant access to the entire 40+ drink menu and location on their phones. It captures the exact nighttime energy of our cafe by Ghantaghar.',
      author: 'Management Team',
      title: 'Feel Fresh Cafe Lucknow'
    },
    featured: true
  },
  {
    slug: 'finservkart-financial-services',
    title: 'Finservkart — Financial Services Marketplace & Public Consumer Storefront',
    client: 'Finservkart',
    industry: 'Fintech & Corporate Regulatory Services',
    year: '2025',
    category: 'Websites',
    categoryTag: 'Financial Services Marketplace',
    shortDesc: 'High-converting consumer and corporate financial services marketplace offering dynamic catalog discovery, instant KYC document intake, and SabPaisa payment checkout.',
    description: 'Averra architected and refined the public financial services flagship for Finservkart, providing individuals, MSMEs, and startups instant access to 12+ regulatory, taxation, and corporate licensing services with transparent pricing, instant document collection, and zero-latency service search.',
    challenge: 'Consumers and business founders struggled with fragmented regulatory filing processes across disjointed platforms, requiring a unified, authoritative digital storefront with instant search, automated document prerequisites, and frictionless payment checkout.',
    approach: 'Engineered a responsive, high-converting digital marketplace pairing semantic HTML5, Bootstrap 5, and customized modern styling with instant client-side service filtering, multi-file KYC upload pipelines, and seamless SabPaisa payment processing.',
    design: 'Trust-centric royal financial blue (#0066CC, #0052A3) and crisp white surfaces with gold accent highlights. Poppins display typography paired with legible Inter body scales and subtle floating micro-animations.',
    development: 'Modular PHP component architecture, responsive CSS variables, client-side live search filtering, SabPaisa gateway integration with cryptographic status validation, and automated PDF invoice generation.',
    services: [
      'Marketplace Architecture',
      'Financial Service Catalog',
      'Instant Search & Discovery',
      'KYC & Document Upload Engine',
      'SabPaisa Payment Gateway',
      'Automated PDF Invoicing'
    ],
    technology: [
      'PHP',
      'Bootstrap 5',
      'jQuery 3.6.0',
      'Vanilla CSS',
      'SabPaisa Gateway',
      'PDFMake',
      'MySQL'
    ],
    liveUrl: 'https://finservkart.com',
    heroImage: '/images/projects/finservkart/hero_carousel.jpg',
    thumbnail: '/images/projects/finservkart/financial_advisory.jpg',
    visualShowcase: [
      {
        title: '12+ Dynamic Financial Verticals',
        desc: 'Dynamic catalog covering GST, ITR, Company Incorporations, Audits, CIBIL repair, and Bank Project Reports with instant requirements checklist.',
        badge: 'Service Catalog',
        image: '/images/projects/finservkart/service_gst.jpg'
      },
      {
        title: 'Corporate Setup & Statutory Licensing',
        desc: 'End-to-end entity registration workflows for Private Limited companies, LLPs, OPCs, and Trusts with transparent documentation requisites.',
        badge: 'Company Formation',
        image: '/images/projects/finservkart/service_pvtltd.png'
      },
      {
        title: 'Credit Engineering & Bank Project Reports',
        desc: 'CIBIL score analysis and CMA data project preparation for commercial bank loans with secure KYC document upload.',
        badge: 'Credit & Loan CMA',
        image: '/images/projects/finservkart/service_cibil.png'
      }
    ],
    metrics: [
      { value: '10,000+', label: 'Active Retail & MSME Clients' },
      { value: '12+', label: 'Regulatory & Tax Verticals' },
      { value: '100%', label: 'Digital KYC Submission' }
    ],
    testimonial: {
      quote: 'Finservkart has simplified complex regulatory compliances and tax filings for thousands of business owners. The storefront makes finding and purchasing verified CA services effortless.',
      author: 'Executive Team',
      title: 'Finservkart Financial Services'
    },
    featured: true
  },
  {
    slug: 'finservkart-enterprise-portal',
    title: 'Finservkart Enterprise — 7-Portal Financial Operations Platform & Design System',
    client: 'Finservkart',
    industry: 'Fintech & Enterprise Workflow Automation',
    year: '2026',
    category: 'Applications',
    categoryTag: 'React 19 Multi-Portal Financial Platform',
    shortDesc: '68-page enterprise financial services platform spanning 7 role-based portals (Public, Customer, Agent, CA, Franchise, Coordinator, and Admin) built on React 19, Meta Astryx, and TanStack Query.',
    description: 'Averra architected and engineered the modern React 19 frontend for the Finservkart Enterprise Platform. Spanning 68 pages across 7 dedicated role-based portals, it unifies public service discovery, customer KYC onboarding, load-balanced CA filing workflows, franchise territory oversight, multi-tier commission ledgers, and an interactive Demo Role Switcher.',
    challenge: 'Finservkart needed to unify 7 distinct stakeholder workflows—Public visitors, Customers, Field Agents, Chartered Accountants, Franchise owners, Operations Coordinators, and Central Admins—into one cohesive, type-safe, high-density web application with consistent design standards.',
    approach: 'Engineered a modular React 19 + TypeScript architecture powered by Meta\'s Astryx Design System and StyleX tokens, React Router v7 nested role layouts, TanStack React Query for server state, React Hook Form + Zod validation, and 87 automated Vitest test cases across 10 suites.',
    design: 'Restrained institutional palette (#0F172A obsidian navy, #0066CC primary action blue, #F8FAFC canvas, #FFFFFF surfaces) with Manrope headings and Inter body typography via Fontsource.',
    development: 'React 19.3, TypeScript, Vite 8, Meta Astryx (@astryxdesign/core v0.7.16), StyleX, React Router 7, TanStack React Query 5, React Hook Form + Zod 4, Oxlint, and Vitest.',
    services: [
      '7-Portal Role Architecture',
      'Design System Engineering',
      'Public Marketplace & Onboarding',
      'CA Workflow & Document Desk',
      'Multi-Tier Commission Ledger',
      'Automated Vitest Test Suite'
    ],
    technology: [
      'React 19',
      'TypeScript',
      'Vite 8',
      'Astryx / StyleX',
      'React Router 7',
      'TanStack Query',
      'Zod',
      'Vitest'
    ],
    liveUrl: 'https://finserkart-frontend.vercel.app/',
    heroImage: '/images/projects/finservkart/portal_hero.jpg',
    thumbnail: '/images/projects/finservkart/portal_auth.png',
    visualShowcase: [
      {
        title: '7-Portal Role-Based Architecture',
        desc: 'Dedicated layouts and routes for Public (10 pages), Customer (12), Agent (9), CA (10), Franchise (8), Coordinator (8), and Central Admin (11) with an interactive Demo Role Switcher.',
        badge: '7-Portal System',
        image: '/images/projects/finservkart/portal_auth.png'
      },
      {
        title: 'CA Assignment & Filing Workflow Desk',
        desc: 'Load-balanced coordinator assignment desk routing customer filings to accredited Chartered Accountants with milestone tracking and document verification.',
        badge: 'Workflow Engine',
        image: '/images/projects/finservkart/screenshot_workflow.jpg'
      },
      {
        title: 'Statutory Audit & Commission Treasury',
        desc: 'Dedicated CA deliverable handover workspace alongside franchise override statements, agent payout ledgers, and immutable admin audit logs.',
        badge: 'Treasury & Audit',
        image: '/images/projects/finservkart/service_audit.jpg'
      }
    ],
    metrics: [
      { value: '68 Pages', label: 'Across 7 Role Portals' },
      { value: '87 Tests', label: '10 Automated Vitest Suites' },
      { value: 'React 19', label: 'Astryx + StyleX Stack' }
    ],
    testimonial: {
      quote: 'Unifying all seven portals onto a single React 19 and Astryx design system transformed how our customers, agents, CAs, and coordinators collaborate every day.',
      author: 'Operations & Technology Head',
      title: 'Finservkart Enterprise'
    },
    featured: true
  },
  {
    slug: 'fundamics-lms',
    title: 'Fundamics LMS — Cross-Platform Learning Management System (iOS, Android & Web)',
    client: 'Fundemics Tutorials LLP',
    industry: 'EdTech & Academic Learning Management',
    year: '2026',
    category: 'Applications',
    categoryTag: 'React Native & Expo Cross-Platform LMS',
    shortDesc: 'Cross-platform mobile and web LMS engineered with React Native, Expo 52, and TypeScript—delivering multi-role Student, Teacher, and Admin dashboards, attendance tracking, exam results, and study materials.',
    description: 'Averra designed and built the Fundamics LMS cross-platform application using React Native and Expo 52, giving students, teachers, and administrators a unified mobile and web workspace for daily class schedules, attendance calendars, test results with PDF report sheets, study material access, and fee/notification management.',
    challenge: 'Students and faculty at Fundamics Tutorials needed an instant, mobile-first portal to track daily attendance, inspect detailed exam results, download study resources, and receive institutional notices across Android, iOS, and web browsers without maintaining separate codebases.',
    approach: 'Architected a modular feature-sliced React Native + Expo 52 TypeScript codebase with React Navigation 7 (native stack + bottom tabs), Expo Secure Store for token persistence, and an Academic Blue design system shared across mobile and react-native-web.',
    design: 'Academic Blue institutional palette (#075B86 deep academic blue, #087BAF vivid CTA blue, #F5F9FC pale canvas, #15966A attendance present green, #C69A45 academic gold) with light/dark theme support.',
    development: 'React Native 0.76.9, Expo ~52.0.37, React 18.3, TypeScript, React Navigation 7, Expo Secure Store, Expo Linear Gradient, and automated Node test contracts.',
    services: [
      'Cross-Platform Mobile & Web App',
      'Multi-Role LMS Dashboards',
      'Attendance & Calendar System',
      'Results & PDF Sheet Viewer',
      'Study Material Repository',
      'Secure Auth & Recovery Flow'
    ],
    technology: [
      'React Native',
      'Expo 52',
      'TypeScript',
      'React Navigation 7',
      'Expo Secure Store',
      'React Native Web'
    ],
    heroImage: '/images/projects/fundamics/hero_classroom.jpg',
    thumbnail: '/images/projects/fundamics/edge_mobile.png',
    visualShowcase: [
      {
        title: 'Multi-Role Student, Teacher & Admin Dashboards',
        desc: 'Role-aware home screens surfacing today\'s class timeline, attendance summaries, quick academic metrics, and recent notices.',
        badge: 'Multi-Role LMS',
        image: '/images/projects/fundamics/edge_mobile.png'
      },
      {
        title: 'Exam Results & PDF Document Sheets',
        desc: 'Interactive test result detail sheets, academic examination records, and downloadable PDF scorecards.',
        badge: 'Results & Analytics',
        image: '/images/projects/fundamics/result.png'
      },
      {
        title: 'Attendance Calendar & Study Resources',
        desc: 'Visual attendance calendar preview alongside organized study material, assignments, exams, and fee status modules.',
        badge: 'Student Workspace',
        image: '/images/projects/fundamics/rankers_header.png'
      }
    ],
    metrics: [
      { value: '3 Platforms', label: 'iOS, Android & Web' },
      { value: '3 Roles', label: 'Student, Teacher & Admin' },
      { value: '12+ Modules', label: 'Attendance, Results & Fees' }
    ],
    testimonial: {
      quote: 'Having attendance, test results, and study materials in one fast mobile app has made daily coordination effortless for our students, parents, and faculty.',
      author: 'Academic Leadership',
      title: 'Fundamics Tutorials'
    },
    featured: true
  }
];

export const CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Websites', value: 'Websites' },
  { label: 'E-commerce', value: 'E-commerce' },
  { label: 'Applications', value: 'Applications' },
  { label: 'SaaS', value: 'SaaS' },
  { label: 'AI & Automation', value: 'AI & Automation' }
];
