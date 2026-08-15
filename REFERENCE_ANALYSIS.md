# roberttran.com.au — Deep Analysis
> Reference document for rebuilding this aesthetic in the Rahul Goswami portfolio.
> Source: live HTML + RSC payload from roberttran.com.au

---

## 1. Typography System

Robert's site uses **four custom fonts** loaded as local woff2 files (not Google Fonts):

| Role | Font | CSS var |
|------|------|---------|
| Display / headlines | Libre Caslon Display 400 | `font-display` |
| Body serif text | Libre Caslon Text 400 / 400i / 700 | `font-text` |
| Gothic / labels / nav | Libre Franklin (variable) | `font-gothic` |
| Monospace / metadata | JetBrains Mono (variable) | `font-mono` |

**Our equivalent (Google Fonts):**
- `font-display` → **Playfair Display** (headlines, project titles, hero name)
- `font-text` → **Playfair Display** italic for body paragraphs
- `font-gothic` → **Space Mono** bold uppercase for labels, nav, eyebrows
- `font-mono` → **Space Mono** regular for metadata, dates, codes

**Key type sizes (extracted from classes):**
- Hero name: `clamp(40px, 8.5vw, 104px)` — massive, centered
- Hero sub-tagline: `clamp(8px, 1.7vw, 14px)` — small-caps, wide tracking
- Section h2: `clamp(30px, 4vw, 46px)`
- Hero body headline: `clamp(40px, 6.6vw, 86px)`
- Pull-quote / italic aside: `clamp(18px, 2vw, 23px)`
- Project card h3: `28px` (grid cards) / `clamp(30px, 3.6vw, 46px)` (featured)
- Body text: `15–17px`, `leading-[1.55]`, `[text-align:justify]`, `[hyphens:auto]`
- Labels / eyebrows: `11px`, `font-bold`, `uppercase`, `tracking-[0.14–0.18em]`
- Mono metadata: `11–13px`

---

## 2. Colour Palette

Extracted from Tailwind classes used throughout:

| Token | Usage | Approximate value |
|-------|-------|-------------------|
| `bg-paper` | Page background | `#FBFAF5` (warm off-white) |
| `bg-paper-bright` | Card/image frame bg | slightly brighter than paper |
| `bg-paper-warm` | Hover state on rows/cards | slightly warmer tint |
| `bg-paper-deep` | Photo tape strip | darker warm paper |
| `text-ink` | Primary text | `#16140F` (near-black warm) |
| `text-ink-soft` | Secondary / muted text | ~`#6B6459` |
| `text-ink-faint` | Placeholder text | very light warm grey |
| `text-stamp` / `border-stamp` | Red accent (stamp, exhibit labels, CTA underlines) | `#A6382C` |
| `text-stamp-bright` / `border-stamp-bright` | Brighter red (footer Case Closed stamp) | `#C0392B` or similar |
| `bg-ink` | Footer background, nav CTA fill | `#16140F` |
| `text-paper` | Text on dark bg | `#FBFAF5` |

**Our current palette is close but needs adjustment:**
- `paper: #F5F0E8` → should be `#FBFAF5` (less yellow, more neutral warm)
- `stamp: #C0392B` → should be `#A6382C` (slightly more muted/brown-red)
- `ink: #1A1714` → should be `#16140F` (slightly cooler)

---

## 3. Page Structure & Layout

```
┌─────────────────────────────────────────────┐
│  INTRO ANIMATION (fm-intro)                 │  ← full-screen, skippable
│  "Wanted — Robert Tran" masthead zoom       │
│  Newspaper column lines animate in          │
│  "Take the glass — find the subject" hint   │
│  [Skip intro →] button                      │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  STATIC MASTHEAD (header, not sticky)       │
│  Row 1: Brisbane, Australia | The           │
│          Investigation Edition | Est. 2023  │
│  Row 2: HUGE centered name (Caslon Display) │
│          "The Personal Record of a Web Dev" │
│  Row 3: Date · Vol. III · Selected Works    │
│          & Notes · Price: One Coffee        │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  STICKY NAV (nav-wrap, z-40)                │
│  Left: "Robert Tran" (display font, 22px)   │
│  Right: Work | Stack | Contact | [Hire him] │
│  Mobile: hamburger → full-height menu       │
│  Underline hover on nav links               │
│  CTA: filled bg-ink, border-2 border-ink    │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  HERO SECTION (pb-2 pt-[30px])              │
│  Breadcrumb: "Front Page | Filed under:     │
│               Open Investigations"          │
│  Grid: [1.55fr] [1fr] at 940px+             │
│                                             │
│  LEFT:                                      │
│  - "Case No. 43 — Findings Published"       │
│    (gothic, xs, bold, uppercase)            │
│  - H1: huge display headline (no italic)    │
│    "A Brisbane web developer who likes      │
│     building things — front to back."       │
│  - Pull-quote: italic, border-l-4, 30ch max │
│  - Byline: "By The Investigation Desk ·    │
│    Reporting from Brisbane..."              │
│  - CTAs: [Read the work →] [Get in touch]  │
│  - Stat cards: 2×2 → 4 cols at 600px       │
│    No. 43 | 21°C | Global | Late Final      │
│                                             │
│  RIGHT:                                     │
│  - Portrait: aspect-square, border-2,       │
│    mix-blend-multiply, no grayscale         │
│  - Caption: "Pictured: the subject..."      │
│  - 2 paragraphs of bio (dropcap first)      │
│    justified text, hyphens:auto             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  <hr> border-t-4 border-ink (section divider)│
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  WORK SECTION (#work, py-[76px])            │
│  Header: eyebrow + h2 + rule (h-1 bg-ink)  │
│  "The Evidence" / "Selected Works"          │
│  "Exhibits A–G · Entered 2023–Now"          │
│                                             │
│  FEATURED EXHIBIT (Exhibit A):              │
│  flex-row at 940px, gap-8                   │
│  Image side (46% width):                   │
│  - Paper frame: border, p-2, shadow         │
│  - Tape strip: absolute, -top-2, rotate-2  │
│  - Image: grayscale, mix-blend-multiply     │
│  - Hover: red dot-grid overlay appears      │
│  - Hover: "Confirmed" stamp appears         │
│    (rotates from 8deg → -8deg, scales in)  │
│  - Below image: "Exhibit A · recovered from │
│    domain" with SVG sketch underline on     │
│    "Exhibit A" text (red oval path)         │
│                                             │
│  Content side:                              │
│  - "Exhibit A" stamp label (red)            │
│  - "Client · domain" (ink, extrabold)       │
│  - H3: project name (display, large)        │
│  - Description: justified, hyphens          │
│  - Tech tags: border border-ink, mono 11px  │
│  - Footer: date/role | "Open case file →"  │
│    (stamp color, border-b underline)        │
│                                             │
│  GRID EXHIBITS (B–G):                       │
│  1 col → 2 col (600px) → 3 col (940px)     │
│  Each card: same paper frame treatment      │
│  Image height: fixed 176px                 │
│  Card has border-r dividers between cols    │
│  Hover: bg-paper-warm background            │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  STACK SECTION (#stack, py-[76px])          │
│  "Forensics" eyebrow / "The Lab Report" h2  │
│  "Substances detected on the subject..."    │
│                                             │
│  Table: border-2 border-ink wrapper         │
│  Header row: bg-ink text-paper (hidden      │
│  on mobile, grid on sm+)                    │
│  Columns: [2.4fr 1fr 1fr 1.3fr]            │
│  Each row: grid, hover:bg-paper-warm        │
│  Mobile: stacked layout with inline code    │
│                                             │
│  "Finding" column uses stamp badges:        │
│  - "Primary tool": border-stamp text-stamp  │
│    rotate-[-1.5deg]                         │
│  - "Comfortable": border-ink/60 text-ink    │
│    rotate-[±1deg]                           │
│  - "Trace amount": same as comfortable      │
│  All badges: rv-stampchild class (animated) │
│                                             │
│  Footnote: right-aligned on sm+             │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  CAREER SECTION (#career, py-[76px])        │
│  "Known Whereabouts" / "The Career Ledger"  │
│  "Movements on record since 2016"           │
│                                             │
│  border-t-2 border-ink container            │
│  Each entry: grid 1col → [170px 1fr 0.9fr] │
│  at 600px                                   │
│  - Date: mono 13px, text-ink-soft           │
│    wrapped in rv-stampchild span            │
│  - Role + Company: display 24px             │
│    Company in <b> gothic xs uppercase below │
│  - Description: font-text 15px, ink-soft    │
│  Entries separated by border-b border-ink/25│
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  CONTACT SECTION (#contact, border-t-4)     │
│  "Submit a Tip" / "Letters & Commissions"   │
│  "The desk is open for select work — 2026"  │
│                                             │
│  Grid: border-2 border-ink wrapper          │
│  1 col → [1.15fr 0.85fr] at 600px          │
│                                             │
│  LEFT (form):                               │
│  - H3: "Put it in writing" (display 32px)  │
│  - Subtext paragraph                        │
│  - Honeypot: hidden company field           │
│  - Name + Email: 2-col grid                 │
│  - Subject field                            │
│  - "The story" textarea (resize-y)          │
│  - Footer: "Usually replies within 24h" |  │
│    [Send the letter] button                 │
│  All inputs: border-2 border-ink, bg-paper- │
│  bright, font-text 16px, no outline         │
│                                             │
│  RIGHT (side panel, bg-paper-warm):         │
│  - Direct line (email, display 21px)        │
│  - The Desk (location)                      │
│  - Availability                             │
│  - Social icon buttons: 42×42, border-2,   │
│    hover:bg-ink hover:text-paper            │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  FOOTER (border-t-[6px] bg-ink text-paper)  │
│  - Huge centered name (display, clamp 42–82)│
│  - 4-col grid: bio | Sections | Desk | Wire │
│  - "Case Closed" stamp: -rotate-6,          │
│    border-4 border-stamp-bright,            │
│    [filter:url(#fm-rough)] SVG distortion   │
│  - Copyright row + social icon buttons      │
│  - "Reopen the case" button (replay intro)  │
└─────────────────────────────────────────────┘
```

---

## 4. Animation System — "rv-" Classes

Robert uses a custom `Reveal` component (`rv rv-*` classes) that triggers on scroll entry. These are **not Framer Motion** — they're custom CSS + IntersectionObserver animations.

### Animation types found:

| Class | Effect | Description |
|-------|--------|-------------|
| `rv rv-settle` | Fade + slide up | Standard scroll reveal, `--rv-delay` CSS var for stagger |
| `rv rv-fade` | Fade in only | Used on eyebrow labels |
| `rv rv-develop` | Photo develop | Image fades in like a darkroom print (desaturated → colour) |
| `rv rv-rule` | Rule draw | Horizontal rule animates width 0 → 100% |
| `rv rv-word` | Word-by-word | Each `rv-word` span staggers in with `--i` index |
| `rv rv-stampchild` | Stamp appear | Badge/stamp pops in with slight rotation |
| `rv rv-sketch` | SVG path draw | SVG `pathLength="1"` stroke-dashoffset animation |

### Stagger pattern:
```html
<div class="rv rv-settle" style="--rv-delay: 0ms">...</div>
<div class="rv rv-settle" style="--rv-delay: 60ms">...</div>
<div class="rv rv-settle" style="--rv-delay: 120ms">...</div>
```

### Reduced motion:
```js
// In <script> tag in <body>:
try {
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
    document.documentElement.classList.add("js-motion")
} catch(e) {}
// All rv- animations only trigger when html.js-motion is present
```

---

## 5. Intro Animation — "fm-intro"

The most distinctive feature. A full-screen overlay that plays on first load.

### Structure:
```html
<div class="fm-intro">
  <div class="fm-zoom">           <!-- zoom-in wrapper -->
    <div class="fm-scene fm-scene--base">
      <!-- 5 newspaper columns, each with: -->
      <div class="fm-col">
        <div class="fm-col-h">The Morning Brief</div>  <!-- column header -->
        <div class="fm-col-r"></div>                    <!-- rule line -->
        <div class="fm-col-l x"></div>                  <!-- text line (x = longer) -->
        <div class="fm-col-l s"></div>                  <!-- text line (s = shorter) -->
        <div class="fm-col-l"></div>                    <!-- text line (normal) -->
        <!-- ~60 lines per column -->
      </div>
      <!-- columns: The Morning Brief, Notes from the Desk, Field Report, 
                    Late Edition, On the Record -->
      
      <!-- Masthead overlay in center: -->
      <div class="fm-masthead">
        <div class="fm-masthead-k">Wanted</div>   <!-- small label -->
        <div class="fm-masthead-t">Robert Tran</div>  <!-- huge name -->
        <div class="fm-masthead-r"></div>          <!-- rule -->
      </div>
    </div>
  </div>
  <div class="fm-hint">Take the glass — find the subject</div>
  <button class="fm-skip" type="button">Skip intro →</button>
</div>
```

### Behaviour:
1. Renders full-screen over the page
2. Newspaper columns animate in (lines appear sequentially)
3. "Wanted — Robert Tran" masthead zooms in from center
4. Hint text fades in at bottom
5. After ~1.5s auto-dismisses OR user clicks "Skip intro →"
6. Overlay fades/zooms out, page content revealed
7. Footer has "Reopen the case" button to replay it

### Custom cursor:
```html
<!-- Fixed, pointer-events-none, follows mouse -->
<div class="fixed left-0 top-0 z-[9000] opacity-0 ...">
  <svg> <!-- magnifying glass icon --> </svg>
</div>
```
A magnifying glass cursor appears on the intro screen ("find the subject").

---

## 6. SVG Filter — Rough/Stamp Effect

Used on "Confirmed" badges and "Case Closed" footer stamp:
```html
<svg aria-hidden="true" width="0" height="0" style="position:absolute">
  <filter id="fm-rough" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.035 0.06" 
                  numOctaves="2" seed="7" result="t"/>
    <feDisplacementMap in="SourceGraphic" in2="t" scale="7" 
                       xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```
Applied via: `[filter:url(#fm-rough)]` Tailwind arbitrary value.
This makes text/borders look slightly hand-stamped/rough.

---

## 7. Project Card — Image Frame Detail

The "photo pinned to board" treatment:
```html
<div class="relative border border-ink/25 bg-paper-bright p-2 pb-0 
            shadow-[0_2px_14px_rgba(22,20,15,0.14)]">
  <!-- Tape strip (decorative) -->
  <span class="absolute -top-2 left-1/2 z-[1] h-4 w-16 -translate-x-1/2 
               -rotate-2 border border-ink/10 bg-paper-deep/75" />
  
  <div class="relative overflow-hidden border border-ink/40 bg-paper 
              aspect-video">  <!-- or fixed height -->
    <img class="grayscale contrast-[1.04] mix-blend-multiply 
                group-hover:scale-[1.03] transition-transform duration-500" />
    
    <!-- Red dot-grid overlay on hover -->
    <span class="absolute inset-0 
                 bg-[radial-gradient(rgba(166,56,44,0.5)_0.7px,transparent_0.8px)] 
                 bg-[length:4px_4px] opacity-0 mix-blend-multiply 
                 group-hover:opacity-60 transition-opacity duration-300" />
    
    <!-- "Confirmed" stamp badge -->
    <span class="absolute right-2.5 top-2.5 
                 rotate-[8deg] scale-150          ← initial state (hidden)
                 border-[3px] border-stamp bg-paper-bright/85 
                 px-2.5 py-1 font-gothic text-[11px] font-black 
                 uppercase tracking-[0.18em] text-stamp
                 opacity-0 [filter:url(#fm-rough)]
                 group-hover:-rotate-[8deg]       ← hover state
                 group-hover:scale-100 
                 group-hover:opacity-100
                 transition-all duration-200">
      Confirmed
    </span>
  </div>
  
  <!-- Below image: "Exhibit X · recovered from domain" -->
  <div class="flex items-center justify-between px-1 py-1.5 
              font-mono text-[11px] text-ink-soft">
    <span class="relative font-bold uppercase text-ink">
      Exhibit A
      <!-- SVG sketch underline (red oval path, animated stroke-dashoffset) -->
      <svg viewBox="0 0 120 44" class="absolute -bottom-1.5 -left-2 ...">
        <path d="M10 24 C 8 10, 44 4, 76 7 C 104 10, 116 18, 112 28 
                 C 108 38, 70 42, 40 39 C 16 37, 8 30, 12 20"
              stroke="#a6382c" stroke-width="3" pathLength="1"
              class="rv-sketch" />
      </svg>
    </span>
    <span>recovered from www.domain.com</span>
  </div>
</div>
```

---

## 8. Navigation Detail

### Static masthead (above sticky nav):
```
[Brisbane, Australia]  [The Investigation Edition]  [Est. 2023]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              ROBERT TRAN  (huge Caslon Display)
         The Personal Record of a Web Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  [Date]  •  Vol. III  •  Selected Works & Notes  •  Price: One Coffee
```

### Sticky nav (separate element, `sticky top-0 z-40`):
- Left: name in display font (22px), acts as scroll-to-top
- Right: Work | Stack | Contact | [Hire him]
- Nav links: `border-b-2 pb-0.5` underline on hover (border-transparent → border-ink)
- CTA button: `border-2 border-ink bg-ink text-paper hover:bg-transparent hover:text-ink`
- Mobile: hamburger (3 lines, 42×42 border-2 box) + full-height dropdown
- Mobile menu items: display font 30px with arrow icon

---

## 9. Key Differences vs Our Current Build

| Feature | roberttran.com.au | Our current build |
|---------|-------------------|-------------------|
| Masthead | Static above sticky nav (2 separate elements) | Single sticky header |
| Hero name | Centered, huge, in static masthead | Left-aligned in hero section |
| Intro animation | Full-screen newspaper zoom (custom CSS) | None |
| Portrait | Square, no rotation, mix-blend-multiply | Rotated frame, grayscale toggle |
| Bio placement | Right column of hero grid | Separate About section |
| Project layout | Featured (full-width) + 3-col grid | All alternating rows |
| Image treatment | Paper frame + tape + dot overlay + stamp | Simple border + grayscale |
| Stamp badge | SVG rough filter, hover animation | CSS border only |
| Lab report table | Bordered box, ink header row, stamp badges | Plain table |
| Career ledger | 3-col grid (date / role / description) | 2-col (date / content) |
| Contact | Bordered box, 2-col split | Form + side panel |
| Footer | Dark (bg-ink), huge name, "Case Closed" stamp | Light paper |
| Custom cursor | Magnifying glass on intro | None |
| Fonts | Libre Caslon + Franklin (self-hosted) | Playfair + Space Mono (Google) |

---

## 10. What to Implement Next (Priority Order)

### High impact, implement now:
1. **Split header into static masthead + sticky nav** — biggest visual difference
2. **Hero layout**: centered name in masthead, hero grid [1.55fr 1fr] with bio in right column
3. **Project image frame**: paper border + tape strip + dot-grid hover + "Confirmed" stamp with SVG rough filter
4. **SVG sketch underline** on "Exhibit X" labels
5. **Dark footer** (bg-ink, text-paper, huge centered name, "Case Closed" stamp)
6. **Lab report table**: bordered box with ink header row, stamp badges with rotation

### Medium impact:
7. **Intro animation**: newspaper columns + "Wanted" masthead zoom + skip button
8. **Custom magnifying glass cursor** (intro only)
9. **rv-word animation**: section h2 words stagger in one by one
10. **rv-rule animation**: thick rule draws left-to-right on section entry

### Lower priority / polish:
11. Adjust colour tokens (paper slightly less yellow, stamp slightly more muted)
12. `mix-blend-multiply` on portrait (removes white bg, blends with paper)
13. `[hyphens:auto] [text-align:justify]` on all body paragraphs
14. `dropcap` first paragraph in bio
15. Honeypot field in contact form
16. "Reopen the case" button in footer

---

## 11. Exact Tailwind Classes to Replicate

### Section heading pattern:
```jsx
// Eyebrow
<span className="font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
  The Evidence
</span>

// H2 with word-by-word animation
<h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal 
               leading-[1.02] tracking-[-0.015em]">
  <span className="rv-word" style={{"--i": 0}}>Selected</span>{" "}
  <span className="rv-word" style={{"--i": 1}}>Works</span>
</h2>

// Thick rule
<div className="rv rv-rule h-1 bg-ink" />
```

### Tech tag pill:
```jsx
<span className="inline-flex items-center gap-1.5 border border-ink 
                 px-2.5 py-[3px] font-mono text-[11px] font-medium 
                 bg-transparent text-ink">
  Next.js
</span>
```

### "Open case file →" link:
```jsx
<a className="group inline-flex items-center gap-1.5 border-b-[1.5px] 
              border-stamp pb-0.5 font-gothic text-xs font-bold 
              uppercase tracking-[0.08em] text-stamp 
              after:absolute after:inset-0 after:content-['']">
  Open case file{" "}
  <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
</a>
```

### Stat card:
```jsx
<div className="px-[18px] py-4 border-r border-ink/25">
  <div className="font-display text-[clamp(22px,2.3vw,32px)] leading-none">
    No. 43
  </div>
  <div className="mt-[7px] font-gothic text-[11px] font-semibold 
                  uppercase tracking-[0.12em] text-ink-soft">
    Edition · first printing
  </div>
</div>
```

### Career ledger row:
```jsx
<div className="grid grid-cols-1 items-baseline gap-1.5 
                border-b border-ink/25 px-1 py-[22px]
                min-[600px]:grid-cols-[170px_1fr_0.9fr] 
                min-[600px]:gap-6">
  <div className="font-mono text-[13px] text-ink-soft">Apr 2026 — Now</div>
  <div className="font-display text-[24px] leading-[1.1]">
    Junior Software Engineer
    <b className="mt-1.5 block font-gothic text-xs font-bold 
                  uppercase tracking-[0.12em] text-ink-soft">
      Mintifi
    </b>
  </div>
  <div className="font-text text-[15px] leading-[1.55] text-ink-soft">
    Description...
  </div>
</div>
```

---

## 12. Fonts — Google Fonts Equivalents

Since we can't use Libre Caslon (not on Google Fonts), our substitutions:

```html
<!-- In index.html -->
<link href="https://fonts.googleapis.com/css2?
  family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700
  &family=Space+Mono:ital,wght@0,400;0,700;1,400
  &display=swap" rel="stylesheet" />
```

```js
// tailwind.config.js
fontFamily: {
  display: ['"Playfair Display"', 'Georgia', 'serif'],  // headlines, project names
  text:    ['"Playfair Display"', 'Georgia', 'serif'],  // body paragraphs (italic)
  gothic:  ['"Space Mono"', 'monospace'],               // labels, nav, eyebrows
  mono:    ['"Space Mono"', 'monospace'],               // metadata, dates, codes
}
```

Note: `font-gothic` and `font-mono` will both be Space Mono — differentiate via
`font-bold` + `uppercase` + `tracking-*` for gothic vs regular for mono.
