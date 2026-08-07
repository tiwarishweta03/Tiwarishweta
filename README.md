# Shweta Tiwari — Portfolio

HR Business Partner portfolio for **Shweta Tiwari** — organizational development, employee engagement, and talent strategy.

**Repo:** https://github.com/tiwarishweta03/Tiwarishweta

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- [Anime.js v4](https://animejs.com/) — hero timeline, scroll reveals, skill chip energy, hover micro-interactions
- [Motion](https://motion.dev/) — carousel drag + infinite skills slider
- [Realtime Colors](https://www.realtimecolors.com/)-style design tokens
- Light / dark theme (`localStorage` key: `shweta_theme`)

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Theme toggle

Use the **sun / moon** button in the top nav (also on mobile). Preference is saved in `localStorage` and applied before paint to avoid FOUC.

## Build

```bash
npm run build
npm run preview
```

## Contents

- Brand-first hero + frosted profile panel
- About, impact metrics, signature-program carousel
- Skills infinite marquee
- Experience & education
- Social cards (LinkedIn / Instagram / Facebook) with thumbnails
- Downloadable resume: `public/ShwetaTiwariResume2026.pdf`
- Mobile-first responsive layout (~360 / 768 / 1024+)
