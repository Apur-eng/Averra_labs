# 07 — WebGL & 3D Experiences Research

Averra already scaffolds `WebGLProvider.tsx` and `WebGLCanvas.tsx` (currently an empty fixed `div`), with `prefers-reduced-motion` and WebGL capability checks built in.

---

## 1. Observed WebGL Patterns
- **`lusion.co` (`screenshots/motion-webgl/lusion.png`):** Light-mode (`#FFFFFF`) canvas with interactive `<canvas>` geometry. Proves WebGL does not require a dark-mode aesthetic.
- **`basement.studio` (`screenshots/motion-webgl/basement.png`):** Uses `<canvas>` selectively as an atmospheric engineering layer behind sharp `Geist` typography.
- **`raggededge.com` (`screenshots/case-studies/raggededge.png`):** Light `#FFFFFF` background with subtle `<canvas>` texture/motion integrated behind bold `82px` display type.
- **`activetheory.net` (`screenshots/motion-webgl/activetheory.png`):** Returned `"Not Supported"` in headless Chrome—a stark warning that hard WebGL dependencies break accessibility and non-GPU environments.

## 2. Recommendation for Averra Labs
- **Do NOT add Three.js / React Three Fiber** unless a specific interactive hero or product artifact justifies the `+150–300 KB` gzipped bundle cost.
- **Lightweight Alternative (Zero New Dependencies):** Use a **subtle, low-power 2D HTML5 `<canvas>` architectural dot/grid field** or **shader-like CSS radial gradient** inside `WebGLCanvas` (or remove `WebGLCanvas` entirely if choosing Direction A).
- **Performance & A11y Rules:** Lazy-load any `<canvas>` effect after `requestIdleCallback`, pause when `document.hidden === true`, and return `null` when `prefers-reduced-motion: reduce` is active.
