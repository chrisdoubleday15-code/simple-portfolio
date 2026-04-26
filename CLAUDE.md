# CLAUDE.md
_chrisdoubleday.com — Claude Code project context_
_Last updated: April 2026_

---

## Commands

```sh
npm run dev      # Dev server → http://localhost:4321
npm run build    # Type-check (astro check) + build to dist/
npm run preview  # Preview production build locally
```

No tests in this project.

---

## Stack

- **Framework:** Astro v5 (static, view transitions enabled)
- **Styling:** Tailwind CSS v3 + CSS custom properties (`src/styles/globals.css`)
- **React:** Interactive components only (e.g. `TabsButtons.tsx`)
- **UI primitives:** ShadCN / Radix UI (tabs, badges, buttons)
- **Fonts:** Bebas Neue (`font-display`), Space Grotesk (`font-sans`) — Google Fonts
- **Video CDN:** Bunny Stream, Library ID `635173`
  - Grid/lightbox embed: `https://iframe.mediadelivery.net/embed/635173/{VIDEO_ID}`
  - Carousel player: `https://player.mediadelivery.net/embed/635173/{VIDEO_ID}`
  - **Do not mix these two URLs — they are different players**

---

## File Map

```
src/
  pages/
    index.astro                  ← Main portfolio page (all sections)
    contact.astro                ← Contact form
  components/
    Navbar.astro                 ← Fixed nav, CD monogram SVG inlined, mobile hamburger
    ReelsCarousel.astro          ← 3D hexagonal carousel (6 cards, 9:16)
    Layout.astro                 ← Root layout: film grain overlay, body bg, main padding
    ProfileInfo.astro            ← Avatar + profile details
    ProfileActionButton.astro    ← CV download button (red CTA)
    SkillCard.astro              ← Skills section cards
    JobDetails.astro             ← Experience section rows
    EduDetail.astro              ← Education badge
    ProjectsCC.astro             ← Projects grid
    BackBtn.astro                ← Back button (red CTA)
    Footer.astro
  styles/
    globals.css                  ← CSS variables (:root), keyframes, global utility classes
  data/
    menu.ts                      ← Nav link definitions
  config.ts                      ← Site metadata, SOCIALS, profileFacts
public/
  images/
    film-grain.png               ← Texturelabs_Grunge_318XL texture
    cd-logo-black.svg            ← Favicon
tailwind.config.mjs
astro.config.mjs
```

---

## Color System

### CSS Variables — source of truth (`src/styles/globals.css` → `:root`)

```css
--color-bg-base:      #0e0e11;   /* page/body background */
--color-bg-surface:   #141418;   /* cards, nav surface, form inputs */
--color-bg-elevated:  #1a1a20;   /* lightbox/modal backdrop */
--color-accent-blue:  #00c8ff;   /* primary accent — all non-CTA highlights */
--color-accent-red:   #ff2d2d;   /* CTA accent — buttons only */
--color-text-primary: #f0f0f0;
--color-text-muted:   #888899;
```

**Never hardcode hex values. Always use `var(--color-*)`.**

### Tailwind Color Tokens (`tailwind.config.mjs`) — legacy, do not rename

```
n200: #e8e8e8        text-n200 — primary text
n500: #888888        text-n500 — muted text
n700: #111111        prose
primary-dark: #ff1a1a    CTA buttons
primary-light: #ff1a1a
dark-theme: #0a0a0a  legacy — mismatches --color-bg-base intentionally, do not change
```

### Accent Usage

| Element | Token |
|---|---|
| Nav active state | `var(--color-accent-blue)` |
| Section nav active state | `var(--color-accent-blue)` |
| Superlabels (FEATURED, SOCIAL, DESIGN, CUT) | `var(--color-accent-blue)` |
| Hover borders, glow effects | `var(--color-accent-blue)` |
| Carousel glow + arrows | `var(--color-accent-blue)` |
| Profile image border | `var(--color-accent-blue)` |
| Skill card icons | `var(--color-accent-blue)` |
| Contact button | `var(--color-accent-red)` / Tailwind `primary-dark` |
| CV download button | `var(--color-accent-red)` / Tailwind `primary-dark` |
| Form submit button | `var(--color-accent-red)` / Tailwind `primary-dark` |
| Back button | `var(--color-accent-red)` / Tailwind `primary-dark` |

---

## Typography

```
font-display  Bebas Neue       headings, hero, section titles
font-sans     Space Grotesk    body, nav, labels, descriptions

tracking-display  0.15em
tracking-widest   0.2em
```

**Section heading pattern (used in every content section):**

```html
<p class="text-sm tracking-widest uppercase" style="color: var(--color-accent-blue)">SUPERLABEL</p>
<h2 class="font-display tracking-display text-5xl md:text-7xl text-n200">Section Title</h2>
<p class="text-n500 mt-4 max-w-lg">Description copy.</p>
```

---

## Layout

### Container (Tailwind config)

```
sm: 100%   md: 100%   lg: 720px   xl: 880px   padding: 2rem
```

The container is narrow-capped. Full-bleed sections use `w-full` instead.

### Main padding (`Layout.astro`)

```html
<main class="pt-16 pb-12">
```

### Section wrapper classes (`globals.css`)

```
.section-wrapper        w-full px-8 md:px-16 py-8 overflow-hidden relative isolate
.section-wrapper-light  background: var(--color-bg-surface)
.section-wrapper-dark   background: var(--color-bg-surface)
```

### Index section spacing

```
Hero:            pt-8 pb-4
Featured:        py-4
All others:      py-12
Section headers: mb-6
Section divider: border-t border-white/5
```

---

## Page Structure (`src/pages/index.astro`)

Section order:

1. **Hero** — `<section class="text-center relative pt-8 pb-4">`
2. **Featured** — `<section id="featured" class="py-4">` → `<ReelsCarousel />`
3. **Sticky section nav** — `<div class="sticky top-[72px] z-10 ...">`
4. **Showreel** — `<section id="showreel" class="py-12 border-t border-white/5">`
5. **Motion Design** — `<section id="motion-design" class="py-12 border-t border-white/5">`
6. **Video Editing** — `<section id="video-editing" class="py-12 border-t border-white/5">`
7. **Short-form & Reels** — `<section id="reels" class="py-12 border-t border-white/5">`

### Sticky nav

```html
<div class="sticky top-[72px] z-10 border-y border-white/5 backdrop-blur-md"
     style="background: color-mix(in srgb, var(--color-bg-base) 90%, transparent);">
```

Links: `Featured | Showreel | Motion Design | Video Editing | Short-form & Reels`
Active state: `IntersectionObserver` adds `.active` → `color: var(--color-accent-blue)`

### JS conventions (`index.astro`)

- All JS lives in a single `<script>` block
- Wrapped in `function init()`, called on `astro:page-load`
- Component-specific CSS goes in scoped `<style>` blocks

---

## Video IDs (Bunny Stream Library `635173`)

### Carousel — uses `player.mediadelivery.net`

```
Card 0: a8690e6e-a04f-4b23-b12e-6a85fed5e559   Airrack Teaser
Card 1: 12af665e-cacc-41ae-929b-81430ede21fa   Bali Recap
Card 2: 14aa4474-bd9f-420d-8173-458083df44f5   Tom Brady Dynasty
Card 3: 317bcbe4-b3a9-4307-ade6-02f4f1f4de5c   Cruise Recap
Card 4: 5629d473-f7ce-49e2-9264-cba3e6fc68f0   Mark Rober Interview
Card 5: 510b0d07-cd34-4daf-92d4-74bbac5e915b   President's Club
```

### Showreel — uses `iframe.mediadelivery.net`

```
b7da40bf-36c4-45d2-9a4b-c2ccd82482a2
```

### Motion Design grid — uses `iframe.mediadelivery.net`

```
e2a9c8f2-1429-4b94-a05c-2ad99da565c3
7125608a-fd3c-4047-8657-c8384556fefd
d588c3c9-8722-46c2-bc98-ce9d412cd237
f143afcd-46f0-478d-ac6d-1922cb6a2bcf
```

Cards carry `data-section="motion"` → routed to `#motion-lightbox`. **Do not remove this attribute.**

### Video Editing grid — uses `iframe.mediadelivery.net`

```
23d4f219-d53c-4d6a-ada3-4213d9904d66
cecc7cde-69fa-40e7-a2c7-ae15da37c852
6d4255ef-8984-49e7-9beb-a17f36a421b0
dfcfb265-cf70-46d2-a944-92ba1ee0b431
```

### Short-Form & Reels grid (9:16) — uses `iframe.mediadelivery.net`

```
d9e1da32-992e-481f-ba9b-ba69eeafa70d
0dd1a40a-3928-4f0a-bd66-7f5729395cb2
043cbe34-6d9e-447a-941d-863c3ba2d9d6
c8b72103-2fa9-4603-9ff9-04a8602fb449
```

### Embed URL formats

```
Grid thumbnail (static):   .../embed/635173/{id}?preload=true&responsive=true&muted=true
Grid thumbnail (autoplay): .../embed/635173/{id}?preload=true&responsive=true&muted=true&autoplay=true
Reels lightbox:            .../embed/635173/{id}?autoplay=true&loop=true
Editing/Motion lightbox:   .../embed/635173/{id}?autoplay=true
Showreel:                  .../embed/635173/{id}
Carousel:                  player.mediadelivery.net/embed/635173/{id}
```

---

## Component Reference

### Navbar (`src/components/Navbar.astro`)

- Fixed, `z-20`, frosted glass: `backdrop-blur-md` + `color-mix(in srgb, var(--color-bg-base) 90%, transparent)`
- CD monogram: SVG **inlined directly** — `fill="currentColor"`, `style="color: white"` on `<a>` wrapper. Not an `<img>` tag.
- Active link: `.active` class → `color: var(--color-accent-blue)`
- Mobile: `#btn-menu` toggles `#navbar-sticky`, re-initialised on `astro:after-swap`
- Link styles: `text-n500 hover:text-n200 tracking-wider uppercase text-sm`

### ReelsCarousel (`src/components/ReelsCarousel.astro`)

6-card hexagonal cylinder, 9:16 aspect ratio.

```css
--card-w: 240px
--card-h: 427px
--carousel-radius: 270px
--carousel-perspective: 810px
```

- **Rotation easing:** `0.5s cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot)
- **Card transition:** `400ms ease-in-out`
- **Iframes:** Two per card — permanent base (static first frame) + `.iframe-active` autoplay overlay, added/removed on each advance
- **Navigation:** Arrow buttons, dot indicators, pointer drag (60px threshold), keyboard `ArrowLeft`/`ArrowRight`
- **Mute control:** Single `#carousel-mute` pill below dot indicators (48×24px). No per-card controls.

**Arrow styling:**

```css
.carousel-arrow {
  width: 52px; height: 52px; border-radius: 50%;
  background: rgba(13, 13, 31, 0.65);
  border: 1.5px solid var(--color-accent-blue);
  color: var(--color-accent-blue);
  font-size: 1.4rem; font-weight: 700;
  backdrop-filter: blur(6px);
}
.carousel-arrow:hover { background: var(--color-accent-blue); color: #000; }
```

Arrow glyphs: `&#10094;` / `&#10095;` — not `&#8592;`/`&#8594;`

**Center card glow:**

```css
.carousel-card[data-offset="0"] .card-face {
  border-color: var(--color-accent-blue);
  animation: card-glow-pulse 3.5s ease-in-out infinite;
}
@keyframes card-glow-pulse {
  0%, 100% { box-shadow: 0 0 6px 1px rgba(0,200,255,0.85),
                         0 0 20px 4px rgba(0,200,255,0.30),
                         0 0 22px 3px rgba(0,200,255,0.15); }
  50%       { box-shadow: 0 0 6px 1px rgba(0,200,255,0.85),
                         0 0 20px 4px rgba(0,200,255,0.30),
                         0 0 22px 3px rgba(0,200,255,0.08); }
}
```

### Film Grain Overlay (`Layout.astro`)

```html
<div id="film-grain" style="position:fixed;inset:0;z-index:0;
  background-image:url('/images/film-grain.png');
  background-size:100vw 100vh;background-repeat:repeat;
  opacity:0.03;pointer-events:none;mix-blend-mode:screen;">
</div>
```

- Jitter: `grain-jitter` keyframe in `globals.css`, `2s steps(1) infinite` → ~4fps hard-cut position jumps
- Parallax: inline scroll listener sets `backgroundPositionY = scrollY * -0.1px`
- **Do not change the `-0.1` multiplier**
- **Do not remove the parallax script** — X-axis jitter from CSS still runs; removing the script breaks the full system

### Grid Cards — hover autoplay pattern

Wired in `index.astro` `<script>`:

```js
card.addEventListener('mouseenter', () => { iframe.src = baseSrc + '&autoplay=true&muted=true'; });
card.addEventListener('mouseleave', () => { iframe.src = baseSrc; });
```

Grid iframes always carry `pointer-events: none` and `tabindex="-1"`.

### Lightboxes

Three independent lightboxes in `index.astro`:

| Lightbox | ID | Iframe ID | Backdrop ID | Triggered by |
|---|---|---|---|---|
| Reels | `reels-lightbox` | `reels-iframe` | `reels-backdrop` | `.reel-card` |
| Video Editing | `editing-lightbox` | `editing-iframe` | `editing-backdrop` | `.editing-card:not([data-section="motion"])` |
| Motion Design | `motion-lightbox` | `motion-iframe` | `motion-backdrop` | `.editing-card[data-section="motion"]` |

- Open: add `.open`, set `aria-hidden="false"`, set `iframe.src`
- Close: remove `.open`, set `aria-hidden="true"`, clear `iframe.src`
- Close triggers: backdrop click, `Escape` key

Lightbox dimensions:
- Reels: `height: 85vh; aspect-ratio: 9/16`
- Editing / Motion: `max-width: 85vw; max-height: 85vh; aspect-ratio: 16/9; width: min(85vw, calc(85vh * 16/9))`

---

## Hero (`src/pages/index.astro`)

```html
<section class="text-center relative pt-8 pb-4">
```

**Per-letter hover effect:**

```css
.hero-letter {
  color: var(--color-text-primary);
  -webkit-text-stroke: 2px transparent;
  paint-order: stroke fill;
  transition: color 0.15s ease, -webkit-text-stroke-color 0.15s ease;
}
.hero-letter:hover {
  color: transparent;
  -webkit-text-stroke-color: var(--color-accent-blue);
  text-shadow: 0 0 20px rgba(0,200,255,0.4), 0 0 60px rgba(0,200,255,0.2), 0 0 100px rgba(0,200,255,0.08);
}
```

Hero entrance: `.hero-word` animates via `hero-rise` keyframe (translateY 110% → 0).
`.hero-clip` has `overflow: visible` — **do not change to `overflow: hidden`**, it breaks the glow bleed.

---

## Scroll Reveal System

### Heading reveal

```html
<div class="reveal-clip">
  <p class="reveal-word" style="--reveal-delay: 0ms">...</p>
</div>
```

```css
.reveal-word { transform: translateY(110%); opacity: 0; }
.is-visible .reveal-word { transform: translateY(0); opacity: 1; }
```

`IntersectionObserver` adds `.is-visible` to parent section.
Sections observed: `#showreel`, `#reels`, `#motion-design`, `#video-editing`

### Card stagger

```css
.stagger-card { transform: translateY(24px); opacity: 0; transition-delay: var(--card-delay, 0ms); }
.card-grid.is-visible .stagger-card { transform: translateY(0); opacity: 1; }
```

Observer watches `.card-grid` elements.

---

## Global Animations (`globals.css`)

```
glow              Showreel iframe pulse — applied via .glow class
grain-jitter      Film grain position jitter (~4fps)
fade-in           General fade — .animate-fade-in
hero-rise         Hero entrance — defined in index.astro scoped style
card-glow-pulse   Carousel center card — defined in ReelsCarousel.astro scoped style
placeholder-pulse Fallback card shimmer
```

---

## Known Issues — Do Not Touch

| Issue | Status |
|---|---|
| `.fade-overlay` has hardcoded `rgba(10,10,10,...)` | Leave unless specifically tasked |
| `.prose` link colors use `primary-light`/`primary-dark` (red) | Not converted to blue. Leave unless specifically tasked |
| Tailwind tokens `dark-theme: #0a0a0a`, `n700: #111111` mismatch CSS variable values | Legacy. Do not rename. |
| `SOCIALS` in `config.ts` have placeholder URLs | Out of scope |
| `ReelsCarouselBackup.astro` exists as dead code | Not rendered anywhere. Do not delete or reference. |
| Film grain Y-axis: scroll parallax JS overrides CSS animation Y | Known. X-axis still works. Acceptable. Do not fix. |
| Mobile nav uses legacy `border-gray-100 / dark:border-gray-700` | Not converted to CSS variables |

---

## Deployment

- **Target:** Vercel + custom domain `chrisdoubleday.com`
- CORS errors on Bunny thumbnails are a localhost-only issue — resolves on the live domain
