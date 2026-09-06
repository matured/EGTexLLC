# EGTex LLC — Trucking & Logistics Website

A modern, animated marketing site for EGTex LLC, a family-owned trucking and
logistics company based in Waller, Texas. Built with React + Vite, GSAP
ScrollTrigger, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
```

## Deployment (GitHub Pages)

This repo deploys automatically via `.github/workflows/deploy.yml` on every
push to `main`. One-time setup required in the GitHub UI (cannot be done via
code): go to **Settings → Pages → Source** and select **GitHub Actions**.

Once that's set, the site will be live at:
`https://<your-github-username>.github.io/EGTexLLC/`

If you ever move to a custom domain or a `<username>.github.io` root repo,
update `base` in `vite.config.js` (currently `/EGTexLLC/`) to match.

A manual fallback deploy is also available via `npm run deploy` (uses the
`gh-pages` package to push `./dist` to a `gh-pages` branch), in case Actions
is ever unavailable.

## Things to finish before launch

This site ships fully functional but with a few clearly-marked placeholders
that only the EGTex LLC team can fill in:

1. **Real logo** — `src/assets/logo/egtex-logo-placeholder.svg` and
   `egtex-logo-mark.svg` are placeholder wordmarks. Replace those files (keep
   the same filenames) once you have your real logo, and it will update
   everywhere (navbar, footer, favicon source).
2. **About page stats** — `src/data/stats.js` has placeholder numbers (years
   in business, states served, on-time %, loads delivered). Update with real
   figures.
3. **Company story** — `src/components/sections/AboutStory.jsx` has a
   generic placeholder narrative. Replace with your actual founding story.
4. **Services list** — `src/data/services.js` lists plausible trucking
   service categories (dry van, flatbed, expedited, etc.). Confirm these
   match what EGTex LLC actually offers and edit as needed.
5. **Contact form** — the form in `src/components/sections/ContactForm.jsx`
   is wired to [Formspree](https://formspree.io) but needs your real form ID.
   Create a free Formspree account, create a new form, and replace
   `FORMSPREE_FORM_ID = 'YOUR_FORM_ID'` at the top of that file with your
   actual form ID. Until then, the form shows a friendly message asking
   visitors to call or WhatsApp instead — it won't silently fail.
6. **Photos** — the hero and other sections currently use CSS gradients and
   an animated route-line motif rather than real truck/team photos. Adding
   real photography (in `src/assets/images/`) will make the site feel even
   more personal — ask and I can wire them in wherever you'd like.

## Design notes

- **Colors/fonts:** defined as CSS custom properties in
  `src/styles/variables.css` — navy/steel-blue + orange palette, Archivo
  (headings) + Inter (body).
- **Animation:** GSAP ScrollTrigger drives the big scroll-scrubbed pieces
  (hero parallax, the self-drawing route-line motif); Framer Motion handles
  component-level polish (mobile menu, hover states, staggered card
  reveals). Everything respects `prefers-reduced-motion` — see
  `src/hooks/usePrefersReducedMotion.js`.
- **Company info:** address, phone, WhatsApp, and DOT/MC numbers are
  centralized in `src/data/companyInfo.js` so every section that displays
  them stays in sync. The company's EIN is intentionally **not** published
  anywhere on the site (unlike DOT/MC numbers, an EIN isn't meant to be
  public and offers no benefit to site visitors).
