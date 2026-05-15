# Vijaya Dairy — Design Demo

Four-tier design demo for the Krishna District Milk Producers' Mutually Aided Co-operative Union (Vijaya). Built with **Next.js 16**, **Tailwind CSS 3**, and **Framer Motion**.

Each tier is a separate live page showcasing a distinct design direction at a different price point:

| Route | Tier | Vibe |
| --- | --- | --- |
| `/` | **V1 — The Essentials** | Clean & honest |
| `/v2` | **V2 — Fresh Everyday** | Modern & energetic |
| `/v3` | **V3 — Since 1965** | Cinematic & premium |
| `/v4` | **V4 — The Flagship** | Flagship · brand-first |

A floating dock at the bottom of every page lets reviewers jump between tiers and read a short note on what each design communicates.

## Stack

- Next.js 16.2.6 (App Router · Turbopack dev)
- React 19
- Tailwind CSS 3.4
- Framer Motion 12
- Plus Jakarta Sans · Fraunces · Source Serif 4 · Noto Sans Telugu (Google Fonts)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Turbopack dev server on `:3000` |
| `npm run build` | Generate production build (`.next/`) |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js lint |

## Project layout

```
src/
├── app/                 # App Router pages (/, /v2, /v3, /v4)
├── components/
│   ├── DesignSwitcher.tsx   # Bottom dock + drawer (shared)
│   ├── v1/                  # V1 sections
│   ├── v2/                  # V2 sections
│   ├── v3/                  # V3 sections
│   └── v4/                  # V4 sections (flagship)
└── lib/
    └── designs.ts       # Tier metadata: label, tagline, price, drawer copy

public/
├── logo.png
├── Krishna-Distric-Milk-Producers.png
├── v1/ … v4/            # Generated illustrations + brand-supplied product PNGs
└── v3/social/, v4/social/  # Instagram post images
```

## Per-tier notes

- **V1** — minimal hero, products grid, numbered journey, simple testimonials.
- **V2** — sticky white header, trust badge strip, products carousel, "Across Andhra" map.
- **V3** — cinematic dark hero, photo-led trust pillars, **filterable product collection (25 products)**, founder/farmer essay, **Instagram feed**, distributor band.
- **V4** — flagship. 60-year anniversary mark, **6 interactive welfare programmes** (Palasekarana, Vatsa Krishna, Kalyanamasthu, Pashuposhaka, Kshira Bandhu, Arogya), founder quote with Telugu verse, all 25 products with category filter, Across-Andhra interactive map, Instagram feed, Annual Report download.

## Notes for the client team

- All four tiers are static demos. The production build for V3 / V4 will include a dedicated admin panel (login, product image swap, contact-form logs, distributor enquiry export) and richer scroll/hover/animation polish.
- The maintenance retainer is the same across all four tiers; only the one-time build cost differs.
- Demo notes shown inside the bottom drawer reflect the above.

## License

Demo prepared for Vijaya Dairy / Krishna Milk Union. All rights reserved.
