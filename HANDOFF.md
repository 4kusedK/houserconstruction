# Houser Construction — site handoff

Marketing site for Houser Construction, a licensed Alaska general contractor.
Two public pages: `/` (home) and `/work` (project gallery).

Stack: React 19 + TypeScript + TanStack Start (Vite) + Tailwind v4.
No database, no backend, no third-party scripts. Everything is static.

## Where the content lives

| What | File |
| --- | --- |
| Phone, emails, named contacts, service area, stats | `src/config/business.ts` |
| Projects, photos, alt text, home-page picks | `src/config/projects.ts` |
| Home page copy and layout | `src/routes/index.tsx` |
| Work / gallery page | `src/routes/work.tsx` |
| Header and footer | `src/components/site/` |
| Colors, fonts, textures | `src/styles.css` |
| Sitemap | `src/routes/sitemap[.]xml.ts` |
| Crawler rules | `public/robots.txt` |

Brand: Navy `#0A2342`, Red `#B5121B`. Fonts: Barlow (headline),
Archivo (display/UI), Inter (body).

## Common edits

**Change a phone number or email** — edit `src/config/business.ts`. It feeds
the header, footer, contact panel, and the structured data search engines read.

**Swap the home-page photos** — open the `HOME PAGE PICKS` block at the bottom
of `src/config/projects.ts`. `featuredWork` is the large photo; `homeTiles` is
the two-up grid below it. Point them at any photo already in the projects list.

**Add a new project** — drop the photos in `src/assets/projects/`, then add a
project entry (name, blurb, photos with alt text) in `src/config/projects.ts`.
It appears on `/work` automatically.

**Add a new page** — create a file in `src/routes/`, give it its own `head()`
with a unique title, description, `og:title`, `og:description`, `og:url`, and a
canonical link, then add its path to the `entries` array in
`src/routes/sitemap[.]xml.ts`.

## Deliberate placeholders (not bugs)

- **Testimonials** — the section in `src/routes/index.tsx` renders nothing
  while the `testimonials` array in `src/config/business.ts` is empty. Add real,
  permissioned client quotes and it appears.
- **Social links** — the footer icons are hidden until real profile URLs are
  filled into `business.socials`.
- **No contact form** — contact is by phone and direct email link on purpose.
  A form would need a form service (Formspree, Basin) or a backend to go
  anywhere; a form that submits nowhere loses leads silently.

## Before or as the site grows — legal pages

The footer has no Privacy Policy or Terms links because the site currently
collects nothing. Add both pages the moment **any** of these becomes true:

- A contact form actually submits somewhere (form service, email service, CRM).
- Analytics or tracking is added (Google Analytics, Meta Pixel, Hotjar, ads).
- Newsletter or email capture of any kind.
- Cookies beyond what is strictly needed to serve the page.
- Online payments, quotes, or bookings.

When that happens: create `src/routes/privacy.tsx` and `src/routes/terms.tsx`
each with their own `head()` metadata, restore the links in
`src/components/site/SiteFooter.tsx`, add both paths to the sitemap, and
consider a cookie notice if tracking is involved.

## Domain and email

The site is built for `https://houserconstruction.net` — that domain is baked
into the canonical tags, `og:url` tags, sitemap, and `robots.txt`. If the
domain ever changes, search for `houserconstruction.net` and update every hit.

Custom email (e.g. Google Workspace) is independent of the site: it uses MX
records on the same domain and does not affect hosting. The site only ever
links to the addresses in `src/config/business.ts`.

## Analytics, when wanted

Google Analytics 4 is free and is a single script tag added to the root route's
`head()` in `src/routes/__root.tsx`. Adding it triggers the legal-pages
requirement above.

## Running it locally

```
bun install
bun run dev      # http://localhost:8080
bun run build    # production build
bun run lint     # eslint + prettier
```
