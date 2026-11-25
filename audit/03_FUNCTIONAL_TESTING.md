# 03 — Functional Testing Report

**Environments Tested:**
- **Local Dev:** `http://localhost:5174/` (Vite v5.4.21)
- **Production:** `https://averra-labs.vercel.app/` (Vercel)
**Method:** Automated Chrome DevTools Protocol (`Chrome/158.0.8127.37`, headless) + `curl.exe` HTTP checks.  
**Constraint:** Chrome DevTools MCP (`DevToolsActivePort` on default user profile) was unavailable because Chrome was not running with `chrome://inspect/#remote-debugging` enabled; testing was executed via an isolated Chrome CDP profile without altering application code or submitting live inquiries.

---

## Functional Test Matrix

| Area | Test Case | Local Result | Prod Result | Notes & Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **Navigation** | Desktop nav links (`/work`, `/know-us`, `/contact`, `/`) | PASS | PASS | All routes render expected views without page reload errors. |
| **Mobile Nav** | Hamburger toggle open + `Escape` key close at `375×812` | PASS | PASS | `hasToggle: true`, `mobileDrawerOpen: true`, `mobileDrawerAfterEsc: false`. (CSS `slideInRight` keyframe missing). |
| **Portfolio Grid** | `/work` initial project count | PASS (`9`) | PASS (`9`) | Both environments serve 9 case studies after commit `fac78b8`. |
| **Portfolio Filtering** | Click `SaaS` filter on `/work` | **FAIL (Empty)** | **FAIL (Empty)** | `workAfterSaas: 0`. `SaaS` and `AI & Automation` categories have 0 projects; shows empty state fallback. |
| **Case Study Routing** | `/work/mokshita-enterprises` & Next Project nav | PASS (mouse) / **FAIL (kbd)** | PASS (mouse) / **FAIL (kbd)** | Renders full case study; "Next Case Study" card is a `<div onClick>` so keyboard `Tab` cannot activate it. |
| **Contact Validation** | `form.checkValidity()` when empty (no live submit) | PASS | PASS | `formValidWhenEmpty: false` (`required` attributes on Name, Phone, Details). |
| **Contact Submission** | Form backend integration (`Contact.tsx:51-55`) | **FAIL (No backend)** | **FAIL (No backend)** | `handleSubmit` only runs `console.log(...)` and opens modal; no API/email/webhook delivery exists. |
| **Contact Pills** | Keyboard accessibility of Project Type/Budget/Timeline pills | **FAIL** | **FAIL** | `pillTagName: "DIV"`, `pillTabIndex: null` — unreachable via keyboard. |
| **WhatsApp & Phone** | `wa.me` and `tel:` links | PASS | PASS | `https://wa.me/919278209518` and `tel:+918840065294` present with `rel="noopener noreferrer"`. |
| **Social Links** | Instagram link | PASS | PASS | `https://instagram.com/averralabs` present with `target="_blank" rel="noopener noreferrer"`. |
| **Direct Routes & 404** | Direct load of `/non-existent-audit-route` | PASS (UI) | **SOFT 404 (HTTP 200)** | React Router renders `"Page Not Found"`, but Vercel `vercel.json` rewrite returns `HTTP/1.1 200 OK`. |
| **Responsive Overflow** | `scrollWidth > innerWidth` at `1440`, `768`, `375` | PASS (`false`) | PASS (`false`) | Document-level `overflowX: false` at all 3 widths (though `IntroMedia` clips internally). |
| **Reduced Motion** | `Emulation.setEmulatedMedia` `prefers-reduced-motion: reduce` | PASS | PASS | `matchMedia('(prefers-reduced-motion: reduce)').matches === true`; `LenisProvider` & `Reveal` respect it. |
| **Console Errors** | Runtime JS errors across tested routes | PASS (`0`) | PASS (`0`) | `consoleErrors: []` on both local and prod (`17` Vite/React dev warnings locally, `0` in prod). |
| **Network Failures** | HTTP `>= 400` or failed requests | PASS (`0`) | PASS (`0`) | `failedRequests: []` on both local and prod. |
