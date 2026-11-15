# Lovebatch — Small-batch cookies for big-time cravings

The complete Lovebatch cookie-studio website: announcement bar, hero with floating
cookies, story section, filterable "Our batches" product grid with cart badge,
manifesto, special editions, Instagram wall, bulk-orders section and footer.

Built with **React 18 + Vite**, plain hand-written CSS (`public/lovebatch.css`) and
variable fonts (DM Sans + Playfair Display via Fontsource). No backend required —
the cart counter and collection filters run entirely in the browser.

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
```

## Production build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the production build locally
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the
   site on every push to `main` (or run it manually from the **Actions** tab).
4. Your site goes live at `https://<username>.github.io/<repo>/`.

All asset URLs are relative (`vite.config.js` sets `base: "./"`), so the site works
both on project pages, user pages and custom domains with no extra configuration.

## Project structure

```
├── index.html                  # Vite entry HTML (meta, favicon, stylesheet)
├── vite.config.js              # Vite + React config (relative base for GitHub Pages)
├── package.json                # dependencies and scripts
├── .github/workflows/deploy.yml# GitHub Pages deployment workflow
└── public/
    ├── lovebatch.css           # full site stylesheet (design system, sections, responsive)
    ├── logo.svg                # favicon / heart mark
    └── images/                 # all product photos, hero floaters
└── src/
    ├── main.jsx                # entry — loads fonts + app
    ├── App.jsx                 # renders the Home page
    └── pages/
        └── Home.jsx            # entire site: markup, product data, filters, cart counter
```

## Customising

- **Products, prices, categories** — edit the product cards and the `PRODUCTS`
  map in `src/pages/Home.jsx`.
- **Colours, spacing, responsive rules** — `public/lovebatch.css` (CSS variables at
  the top of the file).
- **Images** — drop new files into `public/images/` and update the `src` paths in
  `src/pages/Home.jsx`.
- **WhatsApp number / Instagram links** — search for `wa.me` and
  `instagram.com/lovebatch.in` in `src/pages/Home.jsx`.

© Lovebatch. All rights reserved.
