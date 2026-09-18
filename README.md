# PureClean — Website Redesign

A modern, polished rebuild of the PureClean marketing site (biological/septic
cleaning services in Nea Michaniona, Thessaloniki), built as a static
frontend-only React app.

> **Note on content:** this rebuild's copy (services, stats, testimonials,
> contact details) is realistic placeholder content for this industry, not
> content scraped from the original site — the original site could not be
> accessed while building this. Before launch, replace the values in
> `src/data/site.ts` with the real business name, phone numbers, address,
> hours, and verified service descriptions.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for the build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for client-side routing
- [lucide-react](https://lucide.dev/) for icons
- No backend — this is a fully static site. The contact form composes a
  `mailto:` link client-side; wire it up to a real form endpoint (Formspree,
  Netlify Forms, a serverless function, etc.) before launch.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, floating call button
    sections/   Page sections (Hero, Services grid, Testimonials, ...)
    ui/         Small reusable primitives (Button, Container, icons)
  data/
    site.ts     All editable business content lives here
  pages/        Route-level pages (Home, Services, ServiceDetail, Contact)
```

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run lint      # oxlint
npm run preview   # preview the production build locally
```

## Live preview (GitHub Pages)

Every push to `main` or `claude/pure-clean-redesign-9eupbt` builds the site
and deploys it to GitHub Pages via `.github/workflows/deploy.yml`. The first
deploy may require enabling **Settings → Pages → Source: GitHub Actions**
once for the repository if it isn't already set. The live URL will be:

```
https://<github-owner>.github.io/<repo-name>/
```
