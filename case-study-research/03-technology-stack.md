# 03 — Verified Technology Stacks

This document details the verified technology stacks across the audited repositories. Every technology listed has been verified through active import statements, configuration files, and runtime usage.

---

## 1. Mokshita Enterprises (`D:\mokshita_all_folder`)

### Frontend (Storefront & Admin SPA)
- **Languages**: JavaScript (ES6+), HTML5, CSS3, JSX.
- **Frameworks & Libraries**:
  - Storefront: Vanilla JS (Modular ES6 architecture).
  - Admin Dashboard: React `18.3.1`, React DOM `18.3.1`, Lucide React icons.
- **State Management**: Browser `localStorage` (Cart sync), React `useState` & `useContext` (Admin session).
- **Styling**: Custom CSS custom properties, utility classes, responsive grid systems.

### Backend
- **Runtime & Framework**: Node.js `>=18.0.0` with Express `4.19.2`.
- **Security & Middlewares**:
  - `helmet` (`7.1.0`): Strict HTTP headers.
  - `cors` (`2.8.5`): Domain access controls.
  - `express-rate-limit` (`7.3.1`): Endpoint request throttling.
  - `express-validator` (`7.1.0`): Body and query parameter validation.
  - `bcryptjs` (`2.4.3`): Password hashing.
  - `jsonwebtoken` (`9.0.2`): Stateless token issuance and verification.
  - `morgan` (`1.10.0`): HTTP request logging.
  - `multer` (`2.1.1`): Multipart media and image upload handling.

### Database
- **Database Engine**: PostgreSQL `15+`.
- **Database Service**: Supabase (Cloud PostgreSQL).
- **Data Access Layer**: `pg` (`8.12.0`) connection pool with raw SQL parameterized queries and migrations, `@supabase/supabase-js` (`2.108.2`) client.

### Infrastructure & Deployment
- **Hosting Platforms**:
  - Live Production Domain: `www.mokshitahandicrafts.com` (`https://www.mokshitahandicrafts.com`).
  - Backend API: Render (`https://mokshita-final-release.onrender.com`) / Railway (`railway.json`, `Procfile`).
  - Storefront: Vercel (`vercel.json`) / Static Edge.
  - Database: Supabase Cloud (`https://syycggibqwvqravtdhhx.supabase.co`).

### Third-Party Services
- **Payments**: Razorpay (`razorpay: ^2.9.6`) with server-side HMAC validation.
- **Storage**: Supabase Storage buckets for product and artisan media uploads.

### Development Tools
- **Bundler & Dev Server**: Vite `5.4.2` (for admin dashboard), Nodemon `3.1.4` (for backend auto-reload).
- **Package Manager**: npm.

---

## 2. Solasta Life Sciences (`D:\solasta`)

### Frontend
- **Languages**: HTML5, Vanilla JavaScript, Vanilla CSS.
- **Libraries**:
  - AOS (Animate On Scroll) `2.3.4`: Scroll animations.
- **Typography**: Google Fonts CDN (`Inter` and `Outfit`).
- **Data Architecture**: Structured JSON file (`solasta_data.json`) hydrated dynamically via client-side JavaScript.

### Backend
- *None (Static-first corporate architecture with client-side DOM hydration).*

### Database
- *None (Flat-file data architecture via `solasta_data.json`).*

### Infrastructure
- **Live Deployment Domain**: `https://solasta-clone-website.vercel.app/`
- Static web hosting compatible with Netlify, Vercel, Cloudflare Pages, or traditional Apache/Nginx web servers.

### Third-Party Services
- Google Fonts API.
- UNPKG CDN for AOS scripts and stylesheets.

### Development Tools
- Local web servers (Live Server / standard HTTP daemons).

---

## 3. Fundamics Tutorials (`D:\fundamics\fundamics_website`)

### Frontend
- **Framework**: React `19.2.8`, React DOM `19.2.8`.
- **Language**: TypeScript `~6.0.2` (Strict mode enabled).
- **Icons**: `lucide-react` (`1.46.0`).
- **Routing**: Custom React Context Router (`RouterContext.tsx`) with dynamic SEO document title management.
- **State Management**: React `useState`, `useContext`, `useEffect`.
- **Data Models**: TypeScript interfaces defining `RankerItem`, `TeacherItem`, `CourseItem`, `SiteConfig`.

### Backend
- *Static frontend SPA with external LMS API handoff.*

### Database
- *None in repository (Structured TypeScript static datasets with real board examination scores and faculty data).*

### Infrastructure
- **Live Production Domain**: `https://www.fundemicstutorials.in/`
- Build artifact generated via `vite build` into `dist/`, deployable to Vercel, Netlify, or Cloudflare Pages.

### Third-Party Services
- External LMS Portal: `app.fundemicstutorials.in`.
- Google Fonts API.

### Development Tools
- **Build Tool**: Vite `8.3.0` with `@vitejs/plugin-react` (using `oxc` parser).
- **Linter**: `oxlint` (`1.81.0`) with `@oxlintrc.json`.
- **Type Checker**: TypeScript Compiler `tsc -b`.

---

## 4. Pathik Organic Farming (`D:\Antigravity\antigravity\pathik`)

### Frontend
- **Languages**: HTML5, Vanilla JavaScript, CSS3.
- **Libraries & Engines**:
  - HTML5 `<canvas>` rendering engine with 2D context.
  - GSAP (GreenSock Animation Platform) + ScrollTrigger for frame scrubbing.
- **Typography**: Google Fonts (`Inter`).
- **Media Optimization**: Extracted compressed `.webp` frame sequence for high-density mobile playback.

### Backend
- *None (Static narrative web application with lead capture forms).*

### Database
- *None.*

### Infrastructure
- Static hosting (Vercel, Netlify, Cloudflare Pages, or GitHub Pages).

### Third-Party Services
- Google Fonts API.

### Development Tools
- Node/npm scripts, image compression pipelines.

---

## 5. Sterling & Associates Law (`D:\Antigravity\antigravity\Sterling-And-Associates-Law`)

### Frontend
- **Framework**: React `19.0.0`, React DOM `19.0.0`.
- **Routing**: React Router `7.5.3`.
- **Component Primitives**: Radix UI (`radix-ui`), `class-variance-authority`, `tailwind-merge`, `clsx`.
- **Icons**: `lucide-react` (`0.510.0`).
- **Styling**: TailwindCSS `3.4.17`, `tailwindcss-animate`, PostCSS `8.5.3`, Autoprefixer `10.4.21`.

### Backend / Edge Worker
- **Framework**: Hono `4.7.7` running on Cloudflare Workers edge runtime.
- **Validation**: Zod `3.24.3` via `@hono/zod-validator`.

### Database
- Cloudflare D1 / KV bindings supported via `wrangler.json`.

### Infrastructure
- **Edge Platform**: Cloudflare Workers (`wrangler` CLI `4.33.0`).
- **Vite Cloudflare Integration**: `@cloudflare/vite-plugin` (`1.12.0`).

### Development Tools
- **Bundler**: Vite `7.1.3`.
- **Type Checker**: TypeScript `5.8.3`.
- **Dead Code Analysis**: Knip `5.51.0`.
- **Linter**: ESLint `9.25.1`.

---

## 6. Feel Fresh Cafe (`D:\Antigravity\antigravity\feel fresh`)

### Frontend
- **Languages**: HTML5, Vanilla JavaScript (ES6+), CSS3.
- **Typography**: Google Fonts CDN (`Inter` and `Playfair Display`).
- **DOM & Scroll APIs**: Native `IntersectionObserver` API with cubic ease-out easing curve.
- **Components**: Dynamic 4-category tabbed menu switcher, modal/drawer navigation, Google Maps iframe embed.

### Backend
- *None (Static-first hospitality digital flagship).*

### Database
- *None (Direct client-side menu data embedded in semantic HTML).*

### Infrastructure & Deployment
- **Live Deployment Domain**: `https://feel-fresh.vercel.app/`
- **Hosting Platform**: Vercel Static Edge.

### Third-Party Services
- Google Maps Embed API.
- Google Maps Reviews (`maps.app.goo.gl`).
- Direct telephony protocols (`tel:`).

### Development Tools
- Local HTTP preview servers.

