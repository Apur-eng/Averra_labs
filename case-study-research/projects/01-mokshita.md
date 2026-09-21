# Case Study Research Deep Dive — Mokshita Enterprises

**Location**: `D:\mokshita_all_folder`  
**Classification**: Client-Based Project  
**Category**: E-Commerce & Systems Engineering  

---

## 1. Executive Summary
Mokshita Enterprises is an Indian digital commerce platform that unites handcrafted goods, traditional artisan stories, and heritage travel experiences. Averra engineered a decoupled architecture pairing an Express/PostgreSQL/Supabase backend API with an indestructible category management engine, a customer-facing storefront, and a dedicated React/Vite admin dashboard.

---

## 2. Verified Technical Architecture

### 2.1 Backend API Server (`mokshita-new-backend`)
- **Runtime**: Node.js `>=18.0.0`, Express `4.19.2`.
- **Database Engine**: PostgreSQL on Supabase (`pg: 8.12.0`, `@supabase/supabase-js: 2.108.2`).
- **Security Middleware**: `helmet`, whitelisted `cors`, `express-rate-limit`, `express-validator`.
- **Authentication**: JWT token signing (`jsonwebtoken: 9.0.2`) with `bcryptjs` password hashing.
- **Payment Pipeline**: Server-side Razorpay order creation (`razorpay: 2.9.6`) with cryptographic signature verification.
- **Live Production Domain**: `www.mokshitahandicrafts.com` (`https://www.mokshitahandicrafts.com`) [VERIFIED BY USER]
- **Deployment Target**: Render (`https://mokshita-final-release.onrender.com`) and Railway.
- **Visual Assets**: Authentically integrated in Averra portfolio (`/images/projects/mokshita/hero.png`, `artisan_hero.jpg`, `craft_blue_pottery.png`, `artisan_wood_carving.png`, `craft_pichwai.png`).

### 2.2 Relational Category Architecture
- **Problem Solved**: Replaced fragile string categorizations with a normalized relational schema (`categories` and `subcategories` with UUID primary keys).
- **Indestructible Fallback**: Guaranteed "Others" category. Deleting any category reassigns associated products to "Others" automatically, completely eliminating orphaned products.
- **Dynamic Slugification**: Automatically creates URL-safe slugs from category names.

### 2.3 Operations Dashboard SPA (`test-dashboard-mok`)
- **Framework**: React `18.3.1` + Vite `5.4.2`.
- **Modules**:
  - `AdminOverviewPage`: Real-time order metrics, fulfillment counters, inventory health.
  - `AdminProductsPage`: Complete product CRUD, stock adjustment, category reassignment.
  - `AdminCategoriesPage`: Hierarchical category/subcategory management.
  - `AdminOrdersPage`: Order lifecycle progression (Pending, Confirmed, Shipped, Delivered).
  - `AdminCMSPage`: Homepage banner selections, artisan spotlights.

### 2.4 Customer Storefront (`mokhsita-org`)
- **Technology**: Vanilla ES6+ JavaScript, semantic HTML5, custom responsive CSS.
- **Features**: Cart persistence with `localStorage`, instant search, artisan story reading, dynamic product detail rendering.

---

## 3. Verified Metrics & Status
- **Verified Code Integrity**: Complete decoupled repository, migrations running on boot, active endpoints.
- **Commercial Outcome**: *No verified business outcome found in repository (request order volumes and average cart value from client).*
