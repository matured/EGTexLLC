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

## Deployment (GitHub Pages + custom domain)

This repo deploys automatically via `.github/workflows/deploy.yml` on every
push to `main`. Two one-time setup steps in the GitHub UI (cannot be done via
code):

1. **Settings → Pages → Source** → select **GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches and tags**
   → add `main` as an allowed branch (GitHub auto-creates this environment
   with no branches allowed by default, which blocks every deploy until
   `main` is added here).

The site is configured to serve from the custom domain **egtexllc.com** (see
`public/CNAME` and `base: '/'` in `vite.config.js`) rather than
`<username>.github.io/EGTexLLC/`. That requires matching DNS records at your
domain registrar (Namecheap): four `A` records for host `@` pointing to
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
plus entering `egtexllc.com` under **Settings → Pages → Custom domain** in
GitHub. DNS changes can take up to ~24 hours to propagate, and GitHub may
take a little while after that to provision the HTTPS certificate (check
**Enforce HTTPS** once it's no longer greyed out).

If you ever move off the custom domain back to the default
`<username>.github.io/EGTexLLC/` URL, remove `public/CNAME` and change
`base` in `vite.config.js` back to `/EGTexLLC/`.

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
