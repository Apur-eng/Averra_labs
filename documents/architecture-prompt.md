# Averra --- Motion-First Frontend Architecture Prompt

You are working inside the existing Averra React + TypeScript website.

Your first task is NOT to redesign the homepage or add fancy effects.
Your first task is to establish a clean, scalable architecture that can
support the motion system we will build later.

## Mandatory reference rule

Before implementing or modifying ANY animation, interaction, scroll
behavior, cursor behavior, WebGL, shader, transition, parallax, or
visual-motion system, you MUST read:

`inspiration.md`

Treat `inspiration.md` as the project's motion/design/technical
reference document.

Use this exact instruction internally whenever relevant:

> **Before implementing or modifying any animation, interaction, scroll,
> cursor, WebGL, shader, transition, parallax, or visual-motion system,
> read `inspiration.md` and follow its principles, architecture,
> performance rules, and implementation guidance.**

Do not skip this step.

------------------------------------------------------------------------

# 1. First inspect the existing project

Before changing code:

-   inspect package.json
-   inspect src/
-   inspect existing routing
-   inspect existing components
-   inspect existing CSS/global styles
-   inspect existing assets
-   inspect current homepage
-   inspect existing animation libraries
-   inspect whether Lenis, Framer Motion, GSAP, Three.js, React Three
    Fiber, or other motion packages are already installed
-   inspect the current build configuration
-   inspect TypeScript configuration

Do not blindly replace the existing project.

Preserve working functionality and useful existing components.

The architecture should be introduced incrementally.

------------------------------------------------------------------------

# 2. Target architecture

Create a clear separation between:

1.  content
2.  UI components
3.  page sections
4.  motion systems
5.  scroll systems
6.  cursor systems
7.  WebGL systems
8.  utilities
9.  data
10. assets

Use an architecture approximately like:

src/ ├── app/ │ ├── App.tsx │ ├── routes.tsx │ └── providers/ │ └──
MotionProvider.tsx │ ├── pages/ │ ├── Home/ │ │ └── Home.tsx │ ├── Work/
│ │ └── Work.tsx │ ├── Project/ │ │ └── Project.tsx │ ├── KnowUs/ │ │
└── KnowUs.tsx │ └── Contact/ │ └── Contact.tsx │ ├── components/ │ ├──
layout/ │ │ ├── Navbar/ │ │ │ ├── Navbar.tsx │ │ │ └── navbar.css │ │
├── Footer/ │ │ └── PageTransition/ │ │ │ ├── sections/ │ │ ├── Hero/ │
│ ├── Intro/ │ │ ├── SelectedWork/ │ │ ├── Services/ │ │ ├── Process/ │
│ └── ContactCTA/ │ │ │ ├── motion/ │ │ ├── Reveal/ │ │ ├── SplitText/ │
│ ├── Magnetic/ │ │ ├── Parallax/ │ │ └── ScrollText/ │ │ │ └── ui/ │
├── Button/ │ ├── Link/ │ └── Container/ │ ├── motion/ │ ├── lenis/ │ │
├── LenisProvider.tsx │ │ └── useLenis.ts │ ├── scroll/ │ │ ├──
useScrollDirection.ts │ │ ├── useScrollProgress.ts │ │ └──
scrollUtils.ts │ ├── cursor/ │ │ ├── CursorProvider.tsx │ │ ├──
useCursor.ts │ │ └── cursorUtils.ts │ ├── transitions/ │ └──
constants.ts │ ├── webgl/ │ ├── WebGLCanvas.tsx │ ├── scenes/ │ ├──
shaders/ │ ├── materials/ │ ├── textures/ │ └── utils/ │ ├── data/ │ ├──
projects.ts │ ├── services.ts │ └── site.ts │ ├── hooks/ ├── lib/ ├──
utils/ ├── styles/ │ ├── globals.css │ ├── variables.css │ └──
typography.css │ └── assets/

You may adapt this structure to the existing project rather than forcing
a destructive rewrite.

------------------------------------------------------------------------

# 3. Motion architecture rules

Create a single conceptual motion system.

Do NOT scatter random animation logic throughout components.

Motion responsibilities:

### Lenis

Responsible for:

-   smooth page scrolling
-   normalized smooth scroll position
-   providing the scroll source for advanced effects

### Framer Motion

Responsible for:

-   React component entrance/exit
-   navbar show/hide
-   page transitions
-   simple reveals
-   hover states
-   button interactions
-   small UI motion

### GSAP / ScrollTrigger

Only introduce/use when needed for:

-   complex scroll choreography
-   timelines involving multiple elements
-   pinned sections
-   precise scroll progress
-   complex sequencing

Do not use GSAP for basic UI animations that Framer Motion can handle.

### React Three Fiber / Three.js

Reserved for:

-   WebGL image effects
-   fluid cursor
-   advanced visual effects
-   future 3D experiences

Do not introduce WebGL merely because an effect could be done with
WebGL.

### GLSL

Reserved for GPU effects such as:

-   fluid simulation
-   image displacement
-   distortion
-   procedural visual effects

------------------------------------------------------------------------

# 4. Global providers

Create a clean provider layer.

The application should conceptually support:

`<App>`{=html} `<MotionProvider>`{=html} `<LenisProvider>`{=html}
`<CursorProvider>`{=html} `<Router />`{=html} `</CursorProvider>`{=html}
`</LenisProvider>`{=html} `</MotionProvider>`{=html} `</App>`{=html}

Do not create providers that do nothing yet.

Only introduce a provider when there is a real responsibility for it.

The architecture should make future additions easy without requiring a
rewrite.

------------------------------------------------------------------------

# 5. Lenis implementation

If Lenis is not already installed, install it.

Create a reusable LenisProvider.

Requirements:

-   initialize one Lenis instance
-   drive it through requestAnimationFrame
-   clean it up on unmount
-   expose access through a hook if needed
-   avoid multiple Lenis instances
-   do not create independent smooth-scroll systems in individual
    components
-   respect prefers-reduced-motion
-   keep native scrolling available as a fallback

Do not use CSS scroll-behavior as a substitute for Lenis.

------------------------------------------------------------------------

# 6. Scroll direction system

Create:

`useScrollDirection()`

It should expose something conceptually like:

{ direction: "up" \| "down", scrollY: number, isAtTop: boolean }

Requirements:

-   use the Lenis scroll value when available
-   apply a small threshold/dead zone to avoid flickering
-   do not update React state on every tiny scroll delta unnecessarily
-   use refs where appropriate
-   keep the implementation performant

This hook will later control the navbar.

------------------------------------------------------------------------

# 7. Navbar architecture

Create a reusable Navbar component.

The Navbar must support:

-   fixed positioning
-   visible at page top
-   hide when scrolling down
-   reveal when scrolling up
-   smooth transform animation
-   mobile navigation
-   accessible keyboard navigation
-   reduced-motion behavior

Do not implement the hide/show logic directly inside Home.tsx.

The Navbar owns its own presentation.

The scroll-direction hook owns scroll state.

Framer Motion owns the visual transition.

------------------------------------------------------------------------

# 8. Cursor architecture

Prepare the architecture for a future custom cursor, but DO NOT build
the fluid WebGL cursor yet.

Create the conceptual API so that later components can subscribe to
cursor state:

{ x, y, normalizedX, normalizedY, velocityX, velocityY, isPointerDevice
}

For now:

-   detect pointer-capable devices
-   track pointer position efficiently
-   use requestAnimationFrame where appropriate
-   do not attach expensive React state updates to every pointer event
-   avoid custom cursor behavior on touch devices
-   do not build the fluid simulation yet

The future WebGL fluid cursor must be able to consume this data without
rewriting the cursor system.

------------------------------------------------------------------------

# 9. WebGL architecture

Prepare a WebGL layer without adding unnecessary visual effects.

Create:

`WebGLCanvas`

It should eventually provide one shared WebGL canvas.

Do NOT create a separate Three.js canvas inside every component.

The future architecture should support:

DOM element ↓ DOM bounds / proxy ↓ WebGL scene ↓ Three.js mesh ↓
shader/material

Keep WebGL completely optional.

The normal HTML/CSS experience must remain functional if WebGL is
unavailable or disabled.

------------------------------------------------------------------------

# 10. Progressive enhancement

This is a fundamental Averra architecture rule.

Every important piece of content must exist in normal HTML/React first.

WebGL is enhancement.

For example:

BAD:

`<WebGLCanvas>`{=html} important project content `</WebGLCanvas>`{=html}

GOOD:

```{=html}
<section>
```
\<img ... /\>
```{=html}
<h2>
```
Project title
```{=html}
</h2>
```
```{=html}
<p>
```
...
```{=html}
</p>
```
```{=html}
</section>
```
Optional WebGL enhancement:

```{=html}
<section>
```
normal HTML content + WebGL visual layer
```{=html}
</section>
```
Users with:

-   low-power devices
-   reduced-motion enabled
-   WebGL unavailable
-   mobile constraints

must still receive the complete website.

------------------------------------------------------------------------

# 11. Performance architecture

Build with performance in mind from the beginning.

Rules:

-   avoid unnecessary React re-renders
-   prefer refs for high-frequency animation values
-   use requestAnimationFrame for pointer/animation loops
-   use transforms and opacity for DOM animation
-   avoid layout-triggering properties during animation
-   do not animate width/height/top/left when transform can achieve the
    effect
-   lazy-load heavy WebGL functionality
-   avoid multiple animation loops
-   clean up event listeners
-   clean up animation frames
-   clean up WebGL resources
-   respect reduced motion
-   do not load large assets until needed

Do not optimize prematurely with complicated abstractions.

Keep the code understandable.

------------------------------------------------------------------------

# 12. Design-system architecture

Create CSS variables for:

-   background
-   foreground
-   muted text
-   accent blue
-   border
-   spacing
-   container width
-   typography scale
-   transition durations
-   easing curves

Example:

:root { --color-bg: ...; --color-fg: ...; --color-muted: ...;
--color-accent: ...; --color-border: ...;

--ease-out: ...; --ease-smooth: ...;

--container: ...; }

Do not hard-code the same values repeatedly across components.

------------------------------------------------------------------------

# 13. Data architecture

Portfolio content must not be hard-coded into visual components.

Use:

src/data/projects.ts

with structured project objects containing:

-   slug
-   title
-   category
-   description
-   client/personal status
-   technologies
-   year
-   images
-   case-study sections

Do not invent metrics or outcomes.

If information is unknown, leave it explicitly marked as unavailable
rather than fabricating it.

------------------------------------------------------------------------

# 14. Do NOT implement these yet

During this architecture phase, do NOT build:

-   fluid WebGL cursor
-   GLSL fluid simulation
-   WebGL image distortion
-   advanced 3D
-   giant scroll timelines
-   complicated text morphing
-   excessive parallax
-   page-wide canvas effects

We are building the foundation first.

------------------------------------------------------------------------

# 15. Dependency policy

Use the smallest appropriate tool for each problem.

Preferred stack:

React TypeScript Vite CSS Lenis Framer Motion

Add:

GSAP + ScrollTrigger

only when complex scroll choreography actually requires it.

Add:

Three.js @react-three/fiber @react-three/drei

only when a real WebGL feature is ready to be implemented.

Do not install libraries merely because they are popular.

------------------------------------------------------------------------

# 16. Build verification

After architecture changes:

1.  run npm install if dependencies changed
2.  run npm run build
3.  fix all TypeScript errors
4.  fix lint errors if linting exists
5.  start the dev server
6.  verify all routes
7.  verify navbar
8.  verify smooth scrolling
9.  verify mobile
10. verify reduced motion
11. verify there are no console errors

Do not disable TypeScript strictness or unused-variable checks to make
the build pass.

------------------------------------------------------------------------

# 17. Final architecture report

When finished, provide:

1.  files created
2.  files modified
3.  dependencies added
4.  architecture explanation
5.  how Lenis is wired
6.  how scroll direction is exposed
7.  how Navbar consumes it
8.  how future CursorSystem will work
9.  how future WebGL will plug in
10. build result
11. any remaining technical risks

Do not redesign the homepage during this phase.

The goal is a clean foundation for the next stages of Averra's motion
system.
