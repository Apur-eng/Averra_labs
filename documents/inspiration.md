# Averra Motion & Creative Development --- Inspiration.md

> **Purpose:** This file is the permanent reference for Averra's motion
> architecture, interaction philosophy, and technical direction.
>
> **Mandatory implementation rule:** Before implementing or modifying
> any animation, interaction, scroll, cursor, WebGL, shader, transition,
> parallax, or visual-motion system, read this file and follow its
> principles, architecture, performance rules, and implementation
> guidance.

------------------------------------------------------------------------

# 1. Core Direction

Averra should feel like a modern independent digital product and
technology studio.

The target is not "lots of animation."

The target is:

-   smooth
-   intentional
-   editorial
-   technical
-   restrained
-   responsive
-   tactile
-   visually memorable
-   fast enough to feel effortless

The reference direction is inspired by the design and engineering
approach publicly demonstrated by 14islands, but Averra must have its
own identity.

Do NOT copy:

-   proprietary source code
-   text
-   logos
-   branding
-   illustrations
-   images
-   exact layouts
-   proprietary 3D assets
-   exact animation sequences

Use the underlying principles as inspiration and implement original
Averra systems.

------------------------------------------------------------------------

# 2. The Most Important Lesson

The quality of a creative website does not come from using WebGL
everywhere.

The quality comes from a coherent motion language.

A good Averra experience should have a small number of reusable motion
principles.

For example:

1.  scrolling has physical smoothness
2.  content enters with controlled easing
3.  typography responds to scroll
4.  images have subtle depth
5.  navigation responds intelligently to scroll direction
6.  cursor interactions feel slightly delayed and physical
7.  WebGL is introduced only where it materially improves the experience
8.  everything has a fallback

The site should feel like one system rather than a collection of
effects.

------------------------------------------------------------------------

# 3. Reference Architecture

The architectural model to aim for is:

``` text
                         React / HTML / CSS
                                │
                                │
                     semantic page content
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
          DOM elements                       Motion layer
              │                                   │
              │                         Lenis / Framer / GSAP
              │                                   │
              └─────────────────┬─────────────────┘
                                │
                         optional enhancement
                                │
                         Shared WebGL Canvas
                                │
                         React Three Fiber
                                │
                             Three.js
                                │
                              GLSL
```

The normal website must always exist independently.

WebGL is enhancement, not the foundation.

------------------------------------------------------------------------

# 4. Progressive Enhancement

14islands publicly describes mixing traditional HTML/CSS with WebGL and
allowing React components to opt into the WebGL layer.

This is a major principle for Averra.

## Correct architecture

``` text
HTML content
    +
CSS layout
    +
normal images
    +
accessible interactions
    +
optional WebGL enhancement
```

## Incorrect architecture

``` text
WebGL canvas
    ↓
all important content
```

If WebGL fails, the site must not become empty.

Users with:

-   WebGL disabled
-   weak hardware
-   reduced-motion enabled
-   mobile devices
-   accessibility requirements

must still receive the complete experience.

------------------------------------------------------------------------

# 5. Smooth Scrolling

## Technology

Use:

**Lenis**

for the global smooth-scroll layer.

Do not build a custom smooth-scroll engine unless there is a very
specific reason.

Conceptually:

``` text
native wheel / touch input
          ↓
      target scroll
          ↓
       Lenis
          ↓
  interpolated scroll
          ↓
       page motion
```

Instead of the visual position immediately jumping to the new scroll
value, the value approaches it smoothly.

Example:

``` text
target: 800

frame 1: 100
frame 2: 220
frame 3: 350
frame 4: 480
frame 5: 600
frame 6: 700
frame 7: 760
frame 8: 790
frame 9: 800
```

The exact numbers are illustrative; the important concept is
interpolation/easing.

------------------------------------------------------------------------

# 6. Scroll Synchronization

A major issue in creative websites is that native browser scrolling can
move faster than JavaScript-driven visual layers.

If DOM and WebGL use different scroll values, the WebGL layer can appear
to lag or detach from the page.

A smooth-scroll architecture should therefore provide a consistent
scroll source.

Conceptually:

``` text
Lenis scroll value
       │
       ├────────→ DOM motion
       │
       ├────────→ text choreography
       │
       └────────→ WebGL positioning
```

For future WebGL work, DOM elements can be treated as proxies:

``` text
DOM element
    ↓
getBoundingClientRect()
    ↓
world-space conversion
    ↓
WebGL mesh
```

This is the conceptual role of scroll-rig systems.

------------------------------------------------------------------------

# 7. 14islands Scroll-Rig Research

14islands open-sourced:

`@14islands/r3f-scroll-rig`

Repository:

https://github.com/14islands/r3f-scroll-rig

Its purpose is to make DOM and WebGL work together while scrolling.

Useful concepts from this architecture:

-   shared WebGL canvas
-   DOM proxy elements
-   DOM bounds synchronized to WebGL
-   React integration
-   smooth scrolling
-   scroll-linked WebGL
-   optional WebGL enhancement

Averra does not need to adopt the library immediately.

First understand the architecture.

When Averra reaches the WebGL stage, evaluate whether using the library
is preferable to writing a smaller custom synchronization layer.

------------------------------------------------------------------------

# 8. Motion Tool Responsibilities

Do not make every library responsible for everything.

## Lenis

Use for:

-   global smooth scrolling
-   scroll interpolation
-   shared scroll state

## Framer Motion

Use for:

-   React component animation
-   navbar
-   page transitions
-   enter/exit
-   hover states
-   buttons
-   small UI interactions
-   simple text reveals

## GSAP / ScrollTrigger

Use when necessary for:

-   complex scroll choreography
-   timelines
-   pinned sections
-   precise scroll progress
-   multi-element sequences
-   advanced section transitions

Do not use GSAP simply because an animation exists.

## React Three Fiber

Use for:

-   React-managed WebGL scenes
-   image planes
-   interactive WebGL
-   future 3D
-   fluid cursor rendering

## Three.js

Underlying 3D/WebGL engine for R3F.

## GLSL

Use for:

-   image displacement
-   fluid simulation
-   procedural effects
-   GPU-based distortion

## CSS

Prefer CSS whenever the effect can be achieved cleanly with CSS.

This is both simpler and often more performant.

------------------------------------------------------------------------

# 9. Changing / Rotating Text

The changing text effect should NOT be treated as a normal carousel.

Conceptually, multiple text states occupy the same region:

``` text
STATE 1
Intelligent Products
from vision to launch

        ↓ transition

STATE 2
Branded Experiences
that grow your business

        ↓ transition

STATE 3
Strategic Innovation
to unlock opportunities
```

Each state can have:

-   opacity
-   translateY
-   scale
-   blur
-   clip
-   timing

controlled by a progress value.

The effect should feel like one statement transforming into another.

Possible implementation:

``` text
scroll progress
      ↓
normalized 0 → 1
      ↓
determine active text state
      ↓
interpolate outgoing/incoming state
      ↓
Framer Motion or GSAP
```

For simple timed changes, Framer Motion is enough.

For complex scroll-linked text choreography, use GSAP/ScrollTrigger or a
carefully designed custom progress system.

Do not add WebGL just to change text.

------------------------------------------------------------------------

# 10. Custom Cursor

14islands has publicly documented its custom cursor work.

Reference:

https://develop.14islands.com/journal/developing-a-performant-custom-cursor/

Core principle:

The visual cursor should not necessarily equal the raw pointer position.

Instead:

``` text
actual pointer
      ↓
pointer x/y
      ↓
requestAnimationFrame
      ↓
lerp / interpolation
      ↓
visual cursor
```

Conceptual implementation:

``` js
visualX += (pointerX - visualX) * easing
visualY += (pointerY - visualY) * easing
```

This produces a subtle physical lag.

The cursor system can expose:

``` text
x
y
normalizedX
normalizedY
velocityX
velocityY
```

These values can later drive:

-   CSS variables
-   hover effects
-   image tilt
-   image displacement
-   WebGL effects
-   fluid simulation

Do not put high-frequency pointer state directly into React state unless
necessary.

Use refs/requestAnimationFrame for high-frequency values.

Do not enable custom cursor systems on touch devices.

------------------------------------------------------------------------

# 11. Fluid Cursor / Colored Paint Effect

The colored trail observed in the reference experience is conceptually a
GPU fluid effect rather than a normal CSS hover.

The pipeline is approximately:

``` text
mouse movement
      ↓
mouse position
      ↓
mouse velocity
      ↓
fluid simulation input
      ↓
velocity / density fields
      ↓
GPU simulation
      ↓
color rendering
      ↓
canvas
```

Mouse velocity can be estimated from:

``` js
velocityX = currentX - previousX
velocityY = currentY - previousY
```

Fast movement creates stronger input.

Slow movement creates weaker input.

The simulation can then model concepts such as:

-   advection
-   velocity
-   density
-   pressure
-   divergence
-   dissipation

The exact implementation should be selected during the WebGL phase.

Do NOT implement a heavy fluid simulation during the initial
architecture phase.

------------------------------------------------------------------------

# 12. Fluid Simulation Mental Model

Think of the canvas as a 2D fluid field.

The cursor injects energy/color:

``` text
                cursor
                  ↓
          ┌───────────────┐
          │       ●       │
          │      ↘        │
          │       ~~~     │
          │     ~~~~~~~   │
          │   ~~~~~~~~~~  │
          └───────────────┘
```

The fluid then evolves across frames.

The GPU calculates the result for many pixels simultaneously.

This is why GLSL/WebGL is appropriate.

A CPU-based DOM implementation would become unnecessarily expensive and
visually limited for this kind of effect.

------------------------------------------------------------------------

# 13. Image Distortion

A normal image:

``` text
<img />
```

can eventually be enhanced into:

``` text
DOM image
   ↓
WebGL texture
   ↓
plane geometry
   ↓
shader
   ↓
displacement
   ↓
rendered image
```

Inputs can include:

-   mouse velocity
-   scroll velocity
-   pointer position
-   section progress
-   time

Example concept:

``` text
scroll quickly
     ↓
image displacement increases

scroll stops
     ↓
displacement settles
```

The effect should be subtle.

The image should still look like an image, not a screensaver.

------------------------------------------------------------------------

# 14. Shared WebGL Canvas

If Averra eventually contains several WebGL effects, prefer one shared
WebGL canvas over many independent canvases.

Conceptually:

``` text
             Shared WebGL Canvas
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
 Image Mesh     Fluid Cursor   Future 3D
```

Advantages:

-   fewer rendering contexts
-   centralized animation loop
-   shared resources
-   easier performance management
-   easier progressive enhancement
-   better synchronization

Do not create one canvas per component unless there is a strong reason.

------------------------------------------------------------------------

# 15. The Creative Development Principle

One of the strongest lessons from 14islands' own writing is that the
motion concept should be developed together with design and development.

Do not:

``` text
finish entire design
      ↓
add random animations
```

Instead:

``` text
visual idea
    ↓
interaction idea
    ↓
technical prototype
    ↓
design refinement
    ↓
implementation
    ↓
performance refinement
```

For Averra, each major interaction should answer:

> Why does this motion exist?

If there is no good answer, remove it.

------------------------------------------------------------------------

# 16. Motion Language for Averra

Averra should develop a consistent motion vocabulary.

Suggested principles:

### 1. Heavy typography

Large type should move slowly and deliberately.

### 2. Small metadata

Technical labels can have quicker, subtle transitions.

### 3. Images

Images should have physical inertia rather than obvious "parallax."

### 4. Navigation

Navbar disappears while moving down and returns while moving up.

### 5. Buttons

Small magnetic/hover movement can be introduced later.

### 6. Cursor

The cursor can have slight inertia.

### 7. WebGL

WebGL should feel like an environmental layer, not an advertisement for
WebGL.

------------------------------------------------------------------------

# 17. Navbar Motion

Desired behavior:

``` text
At top:
navbar visible

scroll down:
navbar smoothly exits upward

scroll up:
navbar smoothly returns

stop:
navbar remains in its current state
```

Use:

``` text
position: fixed
transform: translateY(...)
```

Do not repeatedly mount/unmount the navbar.

Use a small scroll threshold to avoid flicker.

Example conceptual states:

``` text
VISIBLE
  ↓ scroll down past threshold
HIDDEN

HIDDEN
  ↑ scroll up past threshold
VISIBLE
```

Framer Motion is sufficient.

------------------------------------------------------------------------

# 18. Performance Rules

Creative does not mean inefficient.

## Always prefer

-   transform
-   opacity
-   requestAnimationFrame
-   refs for high-frequency values
-   CSS where possible
-   lazy loading
-   shared animation loops
-   shared WebGL canvas
-   GPU shaders for truly GPU-oriented effects

## Avoid

-   animating layout properties unnecessarily
-   forced synchronous layout in loops
-   multiple RAF loops doing the same work
-   excessive React state updates
-   one WebGL canvas per component
-   huge textures
-   unnecessary 3D models
-   WebGL for ordinary UI

------------------------------------------------------------------------

# 19. Accessibility

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

-   disable smooth-scroll enhancement if appropriate
-   reduce transitions
-   disable fluid cursor
-   disable heavy parallax
-   disable unnecessary WebGL
-   preserve all content and functionality

Motion must never be required to understand the site.

------------------------------------------------------------------------

# 20. Mobile Strategy

Do not simply scale the desktop experience down.

On mobile:

-   simplify motion
-   remove expensive WebGL where necessary
-   use touch-friendly interactions
-   do not use custom cursor
-   reduce parallax
-   reduce shader resolution
-   keep typography controlled
-   preserve performance

A beautiful mobile site is better than a broken desktop experience
squeezed onto a phone.

------------------------------------------------------------------------

# 21. Suggested Averra Technology Stack

## Foundation

-   React
-   TypeScript
-   Vite
-   CSS

## Motion

-   Lenis
-   Framer Motion

## Advanced scroll

-   GSAP
-   ScrollTrigger

Use only where needed.

## WebGL

-   Three.js
-   React Three Fiber
-   Drei

## Shaders

-   GLSL

## Optional synchronization

-   `@14islands/r3f-scroll-rig`

Evaluate during the WebGL stage.

------------------------------------------------------------------------

# 22. Implementation Order

Do NOT build everything at once.

Recommended progression:

## Phase 1 --- Foundation

``` text
React
TypeScript
CSS
routing
component architecture
data architecture
```

## Phase 2 --- Smooth motion

``` text
Lenis
navbar hide/reveal
Framer Motion
basic reveals
hover interactions
```

## Phase 3 --- Scroll choreography

``` text
scroll progress
text transitions
image movement
section transitions
GSAP only where necessary
```

## Phase 4 --- Cursor

``` text
pointer tracking
lerp
velocity
custom cursor
```

## Phase 5 --- WebGL

``` text
R3F
Three.js
shared canvas
DOM/WebGL synchronization
```

## Phase 6 --- Shader effects

``` text
image displacement
mouse distortion
scroll distortion
```

## Phase 7 --- Fluid cursor

``` text
mouse velocity
fluid fields
color injection
GPU simulation
```

## Phase 8 --- Optimization

``` text
mobile fallback
reduced motion
lazy loading
GPU/resource cleanup
performance profiling
```

------------------------------------------------------------------------

# 23. Official Research Sources

These are the primary references used for this direction.

## 14islands --- Progressive Enhancement with WebGL and React

https://www.14islands.com/journal/progressive-enhancement-with-webgl-and-react

Important concepts:

-   HTML/CSS + WebGL
-   progressive enhancement
-   shared WebGL canvas
-   React components opting into WebGL
-   DOM/WebGL synchronization
-   easing
-   virtual scroll
-   feature detection
-   react-three-fiber

------------------------------------------------------------------------

## 14islands --- Our Stack of Choice, Revisited

https://www.14islands.com/journal/our-stack-of-choice-revisited

Important concepts:

-   pragmatic technology selection
-   CSS where possible
-   Framer Motion
-   react-three-fiber
-   Lottie
-   Lenis
-   avoiding unnecessary complexity

------------------------------------------------------------------------

## 14islands --- The Secret Behind Designing Creative Websites

https://develop.14islands.com/journal/the-secret-behind-designing-creative-websites

Important concepts:

-   motion concept developed with design and development
-   one coherent visual idea
-   minimal interaction
-   avoiding unnecessary effects
-   experimentation before final implementation

------------------------------------------------------------------------

## 14islands --- Interactive Marquee with Framer Motion

https://www.14islands.com/journal/interactive-marquee-with-framer-motion

Important concepts:

-   React
-   Framer Motion
-   interaction without requiring WebGL
-   reusable motion components

------------------------------------------------------------------------

## 14islands --- Developing a Performant Custom Cursor

https://develop.14islands.com/journal/developing-a-performant-custom-cursor/

Important concepts:

-   pointer tracking
-   requestAnimationFrame
-   interpolation / lerp
-   custom cursor state
-   CSS variables
-   performance

------------------------------------------------------------------------

## 14islands --- r3f-scroll-rig

https://github.com/14islands/r3f-scroll-rig

Important concepts:

-   DOM/WebGL synchronization
-   shared WebGL canvas
-   React
-   Three.js
-   React Three Fiber
-   scroll-linked WebGL
-   progressive enhancement

------------------------------------------------------------------------

# 24. What Not To Do

Do not turn Averra into a technology demo.

Avoid:

-   random gradients
-   excessive glassmorphism
-   floating 3D blobs everywhere
-   excessive cursor effects
-   constant parallax
-   text animations on every word
-   unnecessary page transitions
-   huge WebGL scenes
-   expensive 3D assets
-   animation for animation's sake
-   copying 14islands

The reference is a **design and engineering philosophy**, not a
template.

------------------------------------------------------------------------

# 25. Final Rule

Before writing animation code, ask:

``` text
Does this improve the story?
        ↓
Does it fit Averra's motion language?
        ↓
Can CSS/Framer Motion handle it?
        ↓
If not, does GSAP solve it cleanly?
        ↓
If not, is WebGL genuinely justified?
        ↓
Does it have a mobile/reduced-motion fallback?
        ↓
Is it performant?
```

Only then implement it.

------------------------------------------------------------------------

# 26. Permanent AI Instruction

Every future coding agent working on Averra must follow this rule:

> **Before implementing or modifying any animation, interaction, scroll,
> cursor, WebGL, shader, transition, parallax, or visual-motion system,
> read `inspiration.md` and follow its principles, architecture,
> performance rules, accessibility requirements, progressive-enhancement
> strategy, and implementation order.**

Do not proceed from memory when this document is available.

`inspiration.md` is the source of truth for Averra's motion direction.
