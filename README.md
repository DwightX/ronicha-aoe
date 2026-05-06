# Ronicha — Personal Site

Personal site for Ronicha — a guide for women returning to balance, rooted in ancestral wellness and whole-body healing.

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
│   ├── MissionSection.jsx
│   ├── CTAStrip.jsx
│   ├── ContactForm.jsx      Contact form (placeholder onSubmit — see below)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TriangleDivider.jsx
│   ├── ScrollToTop.jsx
│   └── motion/FadeUp.jsx    Shared scroll-reveal wrapper
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
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
- **Important:** configure a fallback so that all unknown paths serve `/index.html` (otherwise refreshing on `/about` or `/contact` will 404). React Router needs this.

## Wiring the contact form

The form in `src/components/ContactForm.jsx` is a placeholder — submissions are logged to the console and the user sees a thank-you state. Replace the `onSubmit` body when ready. Common options:

- **Formspree / Basin / Web3Forms** — point `<form action="...">` at the endpoint, no JS changes needed.
- **Custom backend** — `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` inside `onSubmit`.

The `// TODO: wire to email service` comment in `ContactForm.jsx` marks the spot.

## Updating content

- **Story / About copy:** `src/pages/AboutPage.jsx`
- **Hero headline:** `src/components/Hero.jsx`
- **Mission copy:** `src/components/MissionSection.jsx`
- **Footer / contact info:** `src/components/Footer.jsx`
- **Color palette:** `src/index.css` (`@theme` block)
- **Photos:** drop new files into `src/assets/`, update the `import` lines in components

## Image optimization

Hero and portrait photos live in `src/assets/` as WebP at quality 80. If you swap in new photos, run them through [Squoosh](https://squoosh.app/) or `cwebp -q 80` before committing — keep each image under 200 KB.

## Tone

Classy, earthy, ritual-led — never aggressive, never sterile. Copy is Ronicha's voice.
