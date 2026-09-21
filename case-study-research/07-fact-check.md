# 07 — Comprehensive Fact-Check Table

This table verifies every technical claim, architectural detail, and business attribute across the audited repositories. Claims without direct codebase backing are flagged for manual confirmation.

---

## Fact-Check Matrix

| Claim | Evidence | Confidence | Needs Confirmation? |
| :--- | :--- | :---: | :---: |
| **Mokshita: Node.js & Express REST API** | `mokshita-new-backend/package.json` (`express: ^4.19.2`, `server.js`) | **High** | **No** |
| **Mokshita: PostgreSQL & Supabase Database** | `mokshita-new-backend/package.json` (`pg: ^8.12.0`, `@supabase/supabase-js: ^2.108.2`), `supabase_import.sql` | **High** | **No** |
| **Mokshita: Razorpay Payment Integration** | `mokshita-new-backend/package.json` (`razorpay: ^2.9.6`), `src/controllers/payment.controller.js` | **High** | **No** |
| **Mokshita: Indestructible "Others" Category Fallback** | `CATEGORY_MANAGEMENT_SYSTEM.md`, `category.controller.js` (lines reassigning products to Others on deletion) | **High** | **No** |
| **Mokshita: Dedicated React Admin Dashboard** | `test-dashboard-mok/package.json` (`react: ^18.3.1`, `vite: ^5.4.2`), `src/pages/admin/` | **High** | **No** |
| **Mokshita: Live Render Deployment** | `mokhsita-org/config.js` (`window.BACKEND_URL = 'https://mokshita-final-release.onrender.com'`) | **High** | **No** |
| **Mokshita: "Boosted sales by 45%"** | No sales metrics or transaction logs found in repository | **None** | **YES** |
| **Mokshita: Exact active artisan count** | No verified artisan registry count in code | **None** | **YES** |
| **Solasta: Super-Specialty Pharma Focus** | `solasta_data.json` ("Nephrology, Urology, Cardiology, Gastroenterology, Critical Care") | **High** | **No** |
| **Solasta: WHO-GMP Certified Facilities** | `solasta_data.json`, `index.html` (Lines 80–120), `about.html` | **High** | **No** |
| **Solasta: Real Formulations Catalog (Torasta, Sevasta, Ketocut)** | `solasta_data.json` (dosage, pack size, indication specified per drug) | **High** | **No** |
| **Solasta: Interactive Modal Product Viewer** | `products.html` (modal overlay script and DOM container) | **High** | **No** |
| **Solasta: National distributor count / sales metrics** | No business revenue or B2B contracts in repository | **None** | **YES** |
| **Fundamics: React 19 + TypeScript + Vite Stack** | `package.json` (`react: ^19.2.8`, `typescript: ~6.0.2`, `vite: ^8.3.0`), `tsconfig.app.json` | **High** | **No** |
| **Fundamics: Static Analysis with Oxlint** | `package.json` (`oxlint: ^1.81.0`), `.oxlintrc.json` | **High** | **No** |
| **Fundamics: Verified Board Toppers (ICSE, ISC, CBSE)** | `src/data/rankers.ts`, student photos (`Manish K.Verma.jpeg`, `Mayank Aggarwal.jpeg`), document archives | **High** | **No** |
| **Fundamics: Co-Founder IIT Dhanbad Alumnus** | `src/data/teachers.ts` (Manish K. Verma: B.Tech, M.Tech IIT Dhanbad) | **High** | **No** |
| **Fundamics: Custom Router with Dynamic Document Titles** | `src/context/RouterContext.tsx`, `src/App.tsx` (Lines 11–32) | **High** | **No** |
| **Fundamics: Official LMS Integration URL** | `src/data/siteConfig.ts` (`https://app.fundemicstutorials.in/app/login.php`) | **High** | **No** |
| **Fundamics: "Increased student admissions by 50%"** | No admissions conversion analytics found in repository | **None** | **YES** |
| **Pathik: 600vh GSAP Canvas Scrollytelling** | `D:\Antigravity\antigravity\pathik\app.js` (Lines 30–120), `index.html` | **High** | **No** |
| **Pathik: Bilingual English/Hindi Language Toggle** | `D:\Antigravity\antigravity\pathik\app.js`, `index.html` (`lang-toggle` button) | **High** | **No** |
| **Pathik: Interactive Before/After Soil Slider** | `D:\Antigravity\antigravity\pathik\app.js`, `index.html` (`before-after-container`) | **High** | **No** |
| **Pathik: Total masterclass student enrollment** | No transactional student registry found in code | **None** | **YES** |
| **Mokshita: Live Production Domain** | User / Stakeholder confirmed: `www.mokshitahandicrafts.com` (`https://www.mokshitahandicrafts.com`) | **High** | **No** |
| **Mokshita: Authentic Visual Assets** | Copied from `mokhsita-org`: hero banner, craft blue pottery, wood carving, pichwai | **High** | **No** |
| **Solasta: Live Vercel Deployment** | User / Stakeholder confirmed: `https://solasta-clone-website.vercel.app/` | **High** | **No** |
| **Solasta: Authentic Packaging Assets** | Copied from `medicine screenshots/`: Torasta, Sevasta, Ketocut, Sodasta, Renibus-Heal | **High** | **No** |
| **Fundamics: Live Production Domain** | User / Stakeholder confirmed: `https://www.fundemicstutorials.in/` | **High** | **No** |
| **Fundamics: Authentic Visual Assets** | Copied from project root: classroom hero, rankers banner, result table, mobile layout, director portraits | **High** | **No** |
| **Sterling Law: Cloudflare Edge Hono API** | `src/worker/index.ts`, `wrangler.json`, `package.json` (`hono: 4.7.7`, `@cloudflare/vite-plugin`) | **High** | **No** |
| **Sterling Law: React 19 + TailwindCSS + Radix UI** | `package.json` (`react: 19.0.0`, `tailwindcss: ^3.4.17`, `radix-ui: ^1.4.3`) | **High** | **No** |
| **Sterling Law: Real law firm client contracts** | Repository is based on Mocha app generator template (`README.md`) | **High (as demo/personal)** | **No** |
| **Feel Fresh: Live Vercel Deployment** | User confirmed: `https://feel-fresh.vercel.app/` | **High** | **No** |
| **Feel Fresh: Google Rating (4.3 ★ with 56+ reviews)** | Verified in `index.html` lines 65, 230 and Google Maps link | **High** | **No** |
| **Feel Fresh: 40+ Handcrafted Drink Catalog** | Itemized in `index.html` (cocktails, premium cocktails, shakes, premium shakes) | **High** | **No** |
| **Feel Fresh: Authentic Visual Assets** | Copied from `feel fresh/`: neon hero shake, cold coffee cups, cocktail bar counter | **High** | **No** |
| **Feel Fresh: Open Until 1 AM Daily** | Verified in `index.html` lines 85, 385 | **High** | **No** |

