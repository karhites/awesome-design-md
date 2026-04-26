# Silver Seam — Design System

> Visual reference: [fey.com](https://www.fey.com). Structural skeleton: Linear's design-md.
> Apply this file whenever building marketing pages, the app shell, or any UI surface. Treat it as the source of truth.

## 1. Visual Theme & Atmosphere

Silver Seam is a wealth management firm — the website must feel **institutional, confident, and quietly luxurious**, not flashy. The design language is **dark-mode-native editorial fintech**: a pure-black canvas where charts, device mockups, and 3D motifs emerge from the dark like objects lit in a gallery. Every element sits in a tight luminance hierarchy — ultra-thin borders at ~5–10% white opacity, near-white primary text, and a single chromatic accent per section.

The page reads as a **vertical long-form editorial** rather than a grid of marketing blocks: one large statement per viewport, a single hero visual (a 3D object, a device mockup, or a constellation), and a one-line subhead in muted gray. Scrolling should feel cinematic — sections float in against black, accent-colored headlines act as chapter markers, and motion is slow and deliberate (no bouncy easing, no parallax noise).

**Signature effects (must-haves):**
- **Pure-black canvas** (`#000000`) with near-zero-opacity borders. Darkness is the background — not a theme applied on top of a light design.
- **Ghost display headlines** — the home hero's giant `h1` renders at `rgba(255,255,255,0.047)`, creating a massive dreamlike word that reads as atmosphere, not type. Use once per page, never twice.
- **One accent color per section** — each scroll chapter owns exactly one chromatic hue (amber / lime / emerald / blue / magenta). The accent appears in the section headline and in one UI element (badge, pill, glow). Never mix two accents in one section.
- **Glass pill overlays** — floating navigation / action bars with `rgba(255,255,255,0.04–0.08)` backgrounds and `backdrop-filter: blur(20px)`, resting on top of photographic 3D hero objects.
- **Photoreal 3D motifs** — a stone, a constellation of logos, a laptop lit from above. These are **pre-rendered MP4 / WebM loops** (Fey ships a 4K analyze-video at 3840×2160), not live WebGL. Author them offline in Blender / C4D / Spline → export to video.
- **Radial accent glow** — a single radial-gradient halo, section-colored, behind the central object. No glow without an object at its center.
- **Device mockup framing** — every product shot sits inside a rounded-corner dark bezel, shot from slight downward perspective, floating above a soft horizon gradient.
- **Rounded pill CTAs** — primary button is a light-filled pill (`radius: 999px`) with a faint white bloom shadow (`0 0 14px rgba(255,255,255,0.25)`).
- **Calibre typeface** used for everything — Fey uses it; it's the same family Stripe and Superhuman rely on. Semibold (600) is the workhorse weight.

## 2. Color Palette & Roles

### Backgrounds (layered darkness)
- **Canvas Black** `#000000` — the page background. Pure black, no undertone.
- **Section Black** `#0b0b0b` — adjacent blocks and footer.
- **Panel Dark** `#131313` — elevated panels, hover states.
- **Panel Gray** `#1a1b20` (`rgba(26,27,32,1)`) — toast / card surfaces on black.
- **Glass Tint 04** `rgba(255,255,255,0.04)` — faintest glass fill.
- **Glass Tint 08** `rgba(255,255,255,0.08)` — standard glass / icon-button fill.

### Text
- **Primary** `#ffffff` — headlines, data values.
- **Near-white** `#e6e6e6` — button labels, emphasized body.
- **Secondary** `rgba(255,255,255,0.8)` — body copy on black.
- **Tertiary** `rgba(255,255,255,0.6)` — captions, metadata.
- **Muted Gray** `#868f97` (`rgba(134,143,151,1)`) — labels, placeholder, axis ticks.
- **Ghost** `rgba(255,255,255,0.047)` — reserved for single hero `h1`. Do not use elsewhere.

### Borders & Dividers
- **Hairline** `rgba(255,255,255,0.05)` — the default.
- **Standard** `rgba(255,255,255,0.08)` — cards, inputs, toolbar chips.
- **Strong** `rgba(255,255,255,0.1)` — buttons, pills, active states.
- **Panel Stroke** `rgba(62,62,62,0.4)` — solid dividers inside dark panels.
- Never use a solid border above 10% opacity on the canvas.

### Section Accents (one per chapter, applied to headline + one UI element)
| Role | Hex | RGB | Use |
|------|-----|-----|-----|
| **Silver Accent** (primary brand) | `#c9ccd1` | 201,204,209 | Brand mark, primary links, "Silver Seam" wordmark |
| **Amber Earnings** | `#ffa16c` | 255,161,108 | Earnings / news headline chapter |
| **Burnt Amber** | `#d88036` | 216,128,54 | Trial / urgency badge ("7-day free trial") |
| **Emerald Trust** | `#4ebe96` | 78,190,150 | Compliance, success states, "verified" badges |
| **Link Blue** | `#479ffa` | 71,159,250 | Inline text links only |
| **Magenta Spark** | `#e75ece` | 231,94,206 | Optional tertiary accent for charts |
| **Negative Red** | `#ff5c5c` | 255,92,92 | Losses, destructive, down-markets |

**Rule:** Silver Seam's primary brand accent is `#c9ccd1` (a cool platinum — matches the "Silver Seam" name). Fey rotates peach/green/lime; we rotate **platinum → emerald → amber → blue** to read as *classic finance* rather than consumer product. Never introduce a new accent without removing one.

### Status tokens
- **Positive** `#4ebe96` (returns up, trades filled)
- **Negative** `#ff5c5c` (returns down)
- **Neutral** `#868f97`
- Background tints: `rgba(78,190,150,0.16)` for positive chips, `rgba(255,92,92,0.16)` for negative.

## 3. Typography

### Font stack
- **Primary (everything)**: `calibre, "calibre Fallback", system-ui, -apple-system, "Segoe UI", sans-serif`
- **Monospace (tickers, timestamps, keyboard hints)**: `"Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace`
- License Calibre from Klim Type (Stripe/Superhuman/Fey all do). If budget blocks it, substitute **Inter Variable** with `font-feature-settings: "cv01","ss03"` — geometric alternates narrow the gap.

### Scale
| Role | Size | Weight | Line Height | Tracking | Notes |
|------|------|--------|-------------|----------|-------|
| Ghost Display | 180–240px | 600 | 0.9 | -2% | `color: rgba(255,255,255,0.047)` — atmospheric only |
| Hero Display | 54–72px | 600 | 1.0 | normal | Chapter headlines, one per section |
| Section Head | 40px | 600 | 1.1 | normal | Pricing, feature subsections |
| Eyebrow | 13–14px | 600 | 1.0 | +4% uppercase optional | Accent-colored, sits above hero |
| H3 Card | 20–22px | 600 | 1.3 | normal | Card titles, nav |
| Body Large | 18px | 400 | 1.55 | normal | Hero subheads |
| Body | 16px | 400 | 1.4 | normal | Default reading size |
| Small | 14px | 400–600 | 1.35 | normal | Badges, footer |
| Mono Ticker | 13px | 500 | 1.0 | +2% | Uppercase tickers, timestamps |

### Rules
- **600 is the workhorse.** Almost all Silver Seam UI is weight 600. Reserve 400 for flowing body copy and 700+ for nothing.
- **Tight leading on display.** Hero headlines use `line-height: 1.0` (Fey: 54/54).
- **No letter-spacing on display.** Fey keeps display normal; the weight does the work.
- **Never center body copy.** Only headlines and the pricing hero center-align.

## 4. Components

### Primary button (pill CTA)
```
background: #e6e6e6;
color: #000000;
border-radius: 999px;
padding: 10px 22px;
font: 600 14px calibre;
box-shadow: 0 0 14px rgba(255,255,255,0.25);
transition: transform 240ms cubic-bezier(0.25,0.46,0.45,0.94),
            box-shadow 240ms cubic-bezier(0.25,0.46,0.45,0.94);
```
Hover: `box-shadow: 0 0 22px rgba(255,255,255,0.4)`. No scale transform — Fey's CTAs don't bounce.

### Secondary chip ("Press release", "Join live call", "Learn more ›")
```
background: rgba(255,255,255,0.05);
color: #e6e6e6;
border: 1px solid rgba(255,255,255,0.1);
border-radius: 6px;
padding: 4px 10px;
font: 600 14px calibre;
```

### Icon button (nav arrows, close)
```
background: rgba(255,255,255,0.08);
width: 36px; height: 36px;
border-radius: 50%;
color: #ffffff;
```

### Glass floating toolbar (the signature Fey nav pill over the 3D stone)
```
background: rgba(10,10,10,0.6);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 999px;
backdrop-filter: blur(24px) saturate(140%);
padding: 8px 14px;
box-shadow: 0 20px 50px rgba(0,0,0,0.5);
```
Reserved for hero surfaces — never put this on a scrolled section.

### Status badge
```
font: 600 12px calibre;
padding: 2px 8px;
border-radius: 999px;
/* positive */
background: rgba(78,190,150,0.16); color: #4ebe96;
/* negative */
background: rgba(255,92,92,0.16); color: #ff5c5c;
```

### Device mockup frame
- Rounded corners: `border-radius: 14px` (desktop), `24px` (laptop lid mockup).
- Bezel color: `#0a0a0a` with `1px` `rgba(255,255,255,0.06)` stroke.
- Drop inside a `radial-gradient(ellipse at center top, rgba(255,255,255,0.04), transparent 70%)` to suggest a soft overhead spotlight.
- Horizon: a thin horizontal line at 70% page width, `rgba(255,255,255,0.08)`, fading from left/right — the "ground" the mockup sits on.

### Toast / inline alert (e.g. "Cloudflare earnings call just started")
```
background: rgba(20,20,20,0.9);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 14px;
padding: 10px 14px;
backdrop-filter: blur(12px);
```
Leading icon is a 20×20 rounded-square brand mark. Accent color of the section drives the icon background.

### Card (feature highlight, carousel tile)
- `background: #0a0a0a`
- `border: 1px solid rgba(255,255,255,0.06)`
- `border-radius: 18px`
- Inside padding: 20px
- Hover: border → `rgba(255,255,255,0.12)`, `transform: translateY(-2px)` over 300ms ease-out.

## 5. Layout & Spacing

### Grid
- **Max content width: 1200px** centered (Fey's feel), but inner copy columns cap at **680px** for readability.
- **Section vertical rhythm: 160px top/bottom padding on desktop**, 80px on tablet, 48px on mobile. Long, airy.
- **Hero first viewport: ~900–1100px tall** — the 3D object must breathe.
- 12-column grid with 24px gutters for product / data layouts.

### Spacing scale (4px base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 160`
Never improvise a value — snap to the scale.

### Composition rules
- **One statement per viewport.** Each scroll-section presents a single proposition (headline + subhead + one visual). Do not stack two ideas vertically inside a section.
- **Center-aligned for editorial sections, left-aligned for product sections.** Fey alternates: the hero ("Make better investments.") is left-aligned on a device screenshot; "Earnings in real time." is center-aligned portrait. Follow that cadence.
- **No multi-column marketing copy.** Single column or 50/50 split only.
- **Footer is tiny.** `© 2026, Silver Seam Inc.` + nav links at 13px, 50% opacity. Nothing more.

## 6. Depth, Shadow & Glow

Silver Seam uses light as substance — every surface has a relationship with an imagined overhead light.

- **Button bloom** `box-shadow: 0 0 14px rgba(255,255,255,0.25)` — signature primary-CTA halo.
- **Hero vignette** `box-shadow: inset 0 -200px 200px -100px rgba(0,0,0,0.8)` — darkens the bottom of hero imagery so the headline underneath has contrast.
- **Card lift** `box-shadow: 0 8px 32px rgba(0,0,0,0.4)` — only on hover.
- **Floating pill nav** `box-shadow: 0 20px 50px rgba(0,0,0,0.5)` — anchors the glass pill to the 3D object below it.
- **Accent glow** `box-shadow: 0 0 80px rgba(<accent>,0.35)` — applied to the central object in a section, colored by that section's accent.
- **Radial section halo** `background: radial-gradient(ellipse at center, rgba(<accent>,0.18), transparent 60%)` — behind the hero object only.

No soft gray drop shadows, no multi-layer Material-style elevation. Every shadow is either pure black (depth) or a single accent-colored glow (light source).

## 7. Motion & 3D

### Easing curves (pulled from Fey's `:root`)
```
--ease-in:     cubic-bezier(0.55, 0.085, 0.68, 0.53);
--ease-out:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.455, 0.03, 0.515, 0.955);
```
These are **quadratic** curves — slower and more deliberate than the default `ease` (which is cubic). Use `--ease-out` for entrances, `--ease-in` for exits, `--ease-in-out` for reversible transitions. No spring physics, no bounce.

### Durations
- Micro (hover, focus): **160ms**
- Small (fade, chip swap): **240ms**
- Medium (section reveal, card lift): **400–600ms**
- Long (hero load, 3D intro): **1200ms**

### Scroll-reveal pattern
Each section fades in from `opacity: 0, transform: translateY(24px)` to `1, 0` over 600ms with `--ease-out`, triggered when 25% in view. Use IntersectionObserver — not scroll-driven libraries.

### 3D & video motifs (the "goodness")
Fey's hero 3D is **not** live WebGL — it's pre-rendered MP4 (`analyze-video_4k.mp4` @ 3840×2160, autoplay/muted, `loop=false`). Adopt this pattern:

**Spec for Silver Seam's 3D assets:**
- Author in **Spline** (easiest export), **Blender**, or **Cinema 4D**.
- Motifs: a **silver seam / fault line** in a dark rock, a **slow-rotating platinum coin**, a **floating laptop with live chart**, a **constellation sphere** of holdings tickers with a radial silver glow at center.
- Render at **3840×2160 @ 30fps**, encode to **H.264 MP4 + WebM VP9** (both), target ≤ 3 MB per clip.
- `autoplay muted playsinline loop` for ambient motion; no-loop one-shot for hero intros.
- Poster frame at first frame; preload `none` on below-the-fold clips.
- Provide a **static PNG fallback** for `prefers-reduced-motion`.

**When to use live WebGL (only if truly necessary):** an interactive 3D object that reacts to cursor. Use **React Three Fiber** with Drei's `OrbitControls` locked to tilt-only. Budget ≤ 2 MB GLB, ≤ 30k triangles. Fall back to the video on mobile.

### Cursor interactions
- Subtle parallax on hero objects only: `transform: translate3d(mouseX*6px, mouseY*6px, 0)` with 600ms ease-out follow. Max 6px displacement.
- Magnet hover on primary CTA: 3px translation toward cursor on hover, 240ms.

### `prefers-reduced-motion`
Disable all video autoplay, disable parallax, collapse transitions to 0ms. Non-negotiable.

## 8. Do & Don't

**Do**
- Keep the canvas pure black. Every deviation costs luxury.
- Use one accent per section. Rotate through the platinum → emerald → amber → blue rhythm.
- Render 3D objects offline and ship as video.
- Write headlines at 600 weight, 1.0 line-height, no tracking.
- Leave huge vertical whitespace (160px) between sections on desktop.
- Always pair a glass overlay with a photographic 3D object underneath — never on flat black.
- Use monospace for tickers, timestamps, keyboard hints only.
- Let data tell the story — show real numbers in mockups (Fey shows `$130,067.18 · +31.52%`).

**Don't**
- Don't use pure saturated primary colors (no `#00f`, `#f00`). All accents are muted / desaturated.
- Don't combine two accents in one section.
- Don't apply drop-shadows with blur > 50px in gray — only pure-black depth or single-accent glow.
- Don't center body paragraphs longer than one line.
- Don't use live WebGL for ambient motion. Video is lighter, sharper, and battery-friendly.
- Don't introduce card gradients (hero-to-dark is fine, card-internal is cheap).
- Don't use rounded corners larger than 24px on content surfaces. Buttons get `999px`, cards cap at `18px`.
- Don't animate headlines on scroll letter-by-letter. Section-level opacity/translate only.
- Don't ever use Comic Sans, Poppins, Montserrat, Lato, or Open Sans. Calibre or Inter, period.
- Don't add testimonials with circular headshot collages. If social proof is needed, use press-logo row at 40% opacity, monochrome.

## 9. Responsive Behavior

**Breakpoints**
- `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536

**Rules**
- Display sizes collapse aggressively: hero 72→54→40→32px across xl→lg→md→sm.
- Section vertical rhythm: 160px → 120px → 80px → 48px.
- Device mockups become full-bleed on mobile with 16px gutters, not side-padded.
- Glass floating pill nav collapses into a full-width bottom sheet on < md.
- Footer becomes stacked, centered, on < md.
- Disable parallax & cursor-follow effects under md (touch devices).
- 3D videos: ship a 720p variant to phones via `<source media="(max-width: 768px)">`.

## 10. Agent Prompt Guide

When asking an AI agent to build UI for Silver Seam, include this preamble:

> Build against `DESIGN.md`. This is a wealth management firm's site — institutional, quiet, luxurious. Dark-mode native, pure black canvas, Calibre typeface at weight 600. One accent color per section (platinum `#c9ccd1`, emerald `#4ebe96`, amber `#ffa16c`, or blue `#479ffa`). Use the three easing curves defined in section 7 — no default `ease`, no spring bounces. Primary CTA is a light-filled pill with a faint white bloom. 3D is pre-rendered video (MP4/WebM), never live WebGL for ambient motion. Big type, huge whitespace, one statement per viewport.

**Starter checklist for every new page/component:**
1. Set `body { background: #000; color: #fff; font: 400 16px calibre; }`
2. Section wrapper: `max-width: 1200px; margin: 0 auto; padding: 160px 24px;`
3. Pick one section accent from §2. Apply to the headline color and one UI element.
4. Put the 3D motif (video) center-stage. Wrap in the radial accent halo.
5. Use §7 easings on every transition. Use §5 spacing scale for every gap.
6. Verify against "Don't" list before shipping.

---

_Last refreshed from fey.com on 2026-04-24. When Fey redesigns, re-run the extraction pipeline in `fey-design/`._
