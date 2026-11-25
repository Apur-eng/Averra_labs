# 05 — Case Study Storytelling Research

## Pattern Analysis

### 1. Warm Editorial Framing + Video/Device Showcase (`instrument.com`)
- **Screenshot:** [instrument.png](file:///d:/averra/design-research/screenshots/case-studies/instrument.png)
- **Visual Pattern:** Generous warm neutral container (`#FAF8F2`-like) framing a clean browser/device mockup with bold editorial typography and a single clear play/explore trigger.
- **Relevance to Averra:** Currently `CaseStudy.tsx` uses raw full-bleed photos (`heroImage`) with a dark bottom bar. Wrapping UI screenshots (`Finservkart`, `Fundamics LMS`) in clean `#F4F4F1` architectural frames with `1px solid #E5E5E0` borders will eliminate awkward cropping (like Solasta's blister pack).

### 2. Narrative Depth vs. Spec Sheet (`area17.com`, `work.co`)
- **Observed Pattern:** High-converting case studies lead with **Business Problem → Architectural Decision → Shipped Artifact → Measurable Outcome**, rather than burying the reader in generic service tags.
- **Averra Reinterpretation:** Keep Averra's 6-section split grid (`01 / Context` through `06 / Impact`), fix the `LIVE DOMAINLaunch ↗` spacing bug, convert the bottom "Next Case Study" `<div onClick>` to a semantic `<Link>`, and replace generic `"Managing Team"` quotes with verified client names/roles or remove unattributed quotes.
