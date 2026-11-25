# 04 — Portfolio Layouts Research

## Pattern Analysis

### 1. Swiss 2-Column "Latest" Showcase Grid (`work.co`)
- **Screenshot:** [workco.png](file:///d:/averra/design-research/screenshots/portfolios/workco.png)
- **Layout:** Left column (`Latest` sticky label), right column multi-frame UI grid showing clean product interfaces on neutral `#F4F4F1`-like backgrounds—no heavy dark gradient overlays or floating badges obscuring screenshots.
- **Why It Works:** Lets the actual shipped product UI speak for itself.
- **Averra Reinterpretation:** In `ProjectCard.tsx` and `SelectedWorkSection.tsx`, remove the dark gradient scrim + multiple overlapping pills (`category`, `LIVE`, `year`, `CASE STUDY ↗`) from *inside* the image frame. Place metadata cleanly **below** the image using Averra's existing `.dashed-label` (`Client -------- Category`) and clean 16:10 frames.

### 2. Multi-Panel Product + Diagram Cards (`bakkenbaeck.com`)
- **Screenshot:** [bakkenbaeck.png](file:///d:/averra/design-research/screenshots/heroes/bakkenbaeck.png)
- **Visual Pattern:** Combines a human/brand photo, a clean UI card, and a **technical execution diagram** (e.g., `Transcription 242ms -> Initialization 231ms -> Supervisor`) in one horizontal project band.
- **Relevance to Averra:** Ideal for `Finservkart Enterprise` (7-portal flow) and `Fundamics LMS` (Student/Teacher/Admin architecture), turning text-heavy descriptions into scannable engineering proof.
- **Stack / Complexity:** `Medium` complexity using pure CSS/SVG cards inside React—zero WebGL required.

### 3. Category-Filtered Archive (`pentagram.com`, `area17.com`)
- **Best Practice:** Never expose filter tabs that resolve to `0` items. Either dynamically derive filter pills from `PROJECTS` or ship verified `SaaS` / `AI & Automation` case studies before displaying those tabs.
