# The Rahul Goswami Times — Personal Portfolio

Editorial newspaper / detective dossier themed portfolio built with Vite + React + Tailwind CSS + Framer Motion.

## Stack

- **Vite** — build tool
- **React 18** — functional components + hooks
- **Tailwind CSS** — all styling (no plain CSS except base resets in `index.css`)
- **Framer Motion** — scroll animations, header transitions
- **Web3Forms** — contact form backend (no server required)
- **Google Fonts** — Playfair Display (headlines) + Space Mono (body/labels)

## Design Theme

"The Personal Record" — a vintage broadsheet newspaper crossed with a private investigator's case file. Cream paper background, near-black ink, hairline rules, serif display headlines, monospace metadata labels, and a red rubber-stamp accent.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the dist/ output locally
```

## Deploy to Vercel

Push to GitHub, import the repo in Vercel. Framework preset: **Vite**. No `vercel.json` needed — Vite's default output (`dist/`) is auto-detected.

## Sections

| Anchor | Section |
|--------|---------|
| `#top` | Hero masthead |
| `#about` | The Full Story (bio + skills) |
| `#work` | The Evidence (projects) |
| `#stack` | Lab Report (tech table) |
| `#ledger` | Career Ledger (experience) |
| `#contact` | Letters & Commissions (contact form) |

## Customisation

- Colors: `tailwind.config.js` → `theme.extend.colors`
- Content: edit the data arrays at the top of each component file
- Contact form key: `ContactSection.jsx` → `access_key` value (Web3Forms)
