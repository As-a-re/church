# Church of Christ Hilltop — Website Redesign

A premium, emotionally engaging redesign of the Hilltop church website,
built on the original Next.js codebase. Design language: "Dawn over the
Hilltop" — a night-to-gold gradient story (deep indigo dusk → warm dawn
light), expressed through glassmorphism, soft aurora light effects, and a
serif/sans type pairing (Fraunces + Plus Jakarta Sans).

## What's new

- **Animated logo intro** — a one-time, skippable sunrise/wordmark splash
  shown once per browser session (`components/splash-intro.tsx`).
- **Dark mode toggle** — persisted via `localStorage`, flash-free on load
  (`components/theme-toggle.tsx`).
- **Ambient worship sound toggle** — a soft, synthesized ambient pad (no
  audio file needed) via the Web Audio API (`components/sound-toggle.tsx`).
- **Smooth page transitions** — fade/lift on route change
  (`components/page-transition.tsx`).
- **Scroll-reveal animations** — content fades and lifts into view as you
  scroll (`components/reveal.tsx`).
- **Subtle 3D tilt cards** — pointer-driven tilt on feature/event/sermon
  cards, desktop only (`components/tilt-card.tsx`).
- **Sliding image gallery** — autoplay carousel with Ken Burns zoom, pause/
  play, and graceful fallback art when no photo is uploaded yet
  (`components/gallery-carousel.tsx`, see `public/gallery/README.md`).
- **Rotating scripture verse carousel** (`components/verse-carousel.tsx`).
- **Video spotlight** — glass-framed YouTube embed for the latest sermon
  (`components/video-spotlight.tsx`).
- **Animated stat counters**, aurora light backgrounds, and hill-ridge
  section dividers throughout.
- Every existing page (Home, About, Events, Sermons, Sermon Detail, Live
  Worship, Prayer, Giving, Contact, Directory) has been restyled to match,
  with all original content and functionality preserved.

## Adding your own photos & videos

See `public/gallery/README.md` — just drop image files into
`public/gallery/` using the listed filenames, and the sliding gallery
picks them up automatically. To change which sermon plays in the homepage
video spotlight, edit the `youtubeId` field in `lib/data.ts`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Building for production

```bash
npm run build
npm run start
```

Note: fonts (Fraunces, Plus Jakarta Sans) are loaded via `next/font/google`
and require internet access at build time to fetch correctly — this is
normal and will work automatically on any standard host (Vercel, etc.).
