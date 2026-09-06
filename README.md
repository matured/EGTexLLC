# EGTex Broker LLC — Freight Brokerage Website

A modern, animated marketing site for EGTex Broker LLC, a family-owned
freight brokerage based in Waller, Texas. Built with React + Vite, GSAP
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
that only the EGTex Broker LLC team can fill in:

1. **Company story** — `src/components/sections/AboutStory.jsx` has a
   generic placeholder narrative. Replace with your actual founding story.
2. **Services list** — `src/data/services.js` lists plausible freight
   brokerage categories (dry van, flatbed, expedited, etc.), written around
   arranging freight through a carrier network rather than owning trucks.
   Confirm these match what EGTex Broker LLC actually offers and edit as
   needed.
3. **Photos** — the hero and other sections currently use CSS gradients and
   an animated route-line motif rather than real photos. Adding real
   photography (in `src/assets/images/`) will make the site feel even more
   personal — ask and I can wire them in wherever you'd like.

Already done: the real logo (Star & Route design, `src/assets/logo/`), the
Formspree contact form (real form ID wired into
`src/components/sections/ContactForm.jsx`), and the About page stats
(`src/data/stats.js`, confirmed accurate) are all live.

## Design notes

- **Colors/fonts:** defined as CSS custom properties in
  `src/styles/variables.css` — a navy/red/silver Texas-flag palette
  (matching the logo) plus Archivo (headings) and Inter (body). A
  lighter `--color-accent-on-dark` red is used specifically for text on
  navy backgrounds, since the true flag red doesn't hit 4.5:1 contrast
  there.
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
- **Business model:** EGTex Broker LLC is a freight brokerage — it
  connects shippers with a carrier network rather than operating its own
  fleet. Copy across the site (About, Services, Value Props) is written
  accordingly ("arrange," "carrier network," "Licensed & Bonded") rather
  than using owned-fleet language ("our drivers," "our trucks").
