# Air of Earth Aesthetics — Ronicha

Personal site for Ronicha, owner and licensed esthetician at Air of Earth Aesthetics. Companion to the brand site at [airofearth.co](https://www.airofearth.co/).

## Stack

- Vite + React 19
- Tailwind CSS 4
- framer-motion (page + scroll animations)
- react-router-dom (client-side routing)

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → /dist
npm run preview      # preview the prod build
```

## Project layout

```
src/
├── assets/                  Optimized WebP photos
├── components/
│   ├── Hero.jsx             Home hero with parallax + staggered text reveal
│   ├── StorySection.jsx
│   ├── ApproachSection.jsx
│   ├── MissionSection.jsx
│   ├── ServicesGrid.jsx
│   ├── ServiceCard.jsx
│   ├── BookingForm.jsx      Placeholder form (see "Wiring booking" below)
│   ├── FAQ.jsx
│   ├── CTAStrip.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TriangleDivider.jsx
│   ├── ScrollToTop.jsx
│   └── motion/FadeUp.jsx    Shared scroll-reveal wrapper
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   └── BookingPage.jsx
├── data/services.js         Service list — single source of truth
├── App.jsx                  Routes + page transitions
├── main.jsx
└── index.css                Tailwind 4 theme tokens (cream/bone/sand/clay/earth/ink)
```

## Deploying

The site is a static SPA. Both configs below are committed — pick whichever host you use.

### Netlify

`netlify.toml` and `public/_redirects` are already configured.

1. Push the repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build command and publish dir auto-detect from `netlify.toml` (`npm run build` → `dist`).

### Vercel

`vercel.json` is already configured.

1. Push the repo to GitHub.
2. In Vercel: **Add New → Project** → pick the repo.
3. Framework preset auto-detects as Vite. No further config needed — `vercel.json` handles SPA fallback.

### Anything else (Cloudflare Pages, GitHub Pages, S3, etc.)

- Build command: `npm run build`
- Publish dir: `dist`
- **Important:** configure a fallback so that all unknown paths serve `/index.html` (otherwise refreshing on `/about`, `/services`, or `/book` will 404). React Router needs this.

## Wiring booking to a real backend (when ready)

The booking form in `src/components/BookingForm.jsx` is a placeholder — submissions are logged to the console and the user sees a thank-you state. Replace the `onSubmit` body when ready. Common options:

- **Calendly / Square Appointments / Acuity** — replace the form with an embed (or link out from the buttons in `Hero.jsx`, `CTAStrip.jsx`, and `BookingPage.jsx`).
- **Formspree / Basin / Web3Forms** — point `<form action="...">` at the endpoint, no JS changes needed.
- **Custom backend** — `fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) })` inside `onSubmit`.

The `// TODO: wire to Calendly/Square` comment in `BookingForm.jsx` marks the spot.

## Updating content

- **Service list (name, duration, price, description):** `src/data/services.js`
- **FAQ:** `src/components/FAQ.jsx`
- **Studio policies:** `src/pages/BookingPage.jsx`
- **Story / About copy:** `src/pages/AboutPage.jsx`
- **Hero headline:** `src/components/Hero.jsx`
- **Color palette:** `src/index.css` (`@theme` block)
- **Photos:** drop new files into `src/assets/`, update the `import` lines in components

## Image optimization

Hero and portrait photos live in `src/assets/` as WebP at quality 80. If you swap in new photos, run them through [Squoosh](https://squoosh.app/) or `cwebp -q 80` before committing — keep each image under 200 KB.

## Brand notes

- Primary brand: [airofearth.co](https://www.airofearth.co/)
- Instagram: [@airofearth.co](https://www.instagram.com/airofearth.co/)
- Tone: classy, earthy, ritual-led — never aggressive, never sterile
- Copy is Ronicha's voice and is finalized — please don't paraphrase without her sign-off
