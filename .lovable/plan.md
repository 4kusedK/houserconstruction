
# Houser Construction — Phase 1 (Home + shell)

Build a clean, premium, industrial-editorial marketing site for Houser Construction. This phase ships the design system, shared header/footer, and the full Home page. About / Services / Projects / Process / Contact / 404 come in a follow-up pass after your review.

## Stack decisions

- Keep the project's native stack: TanStack Start (file routing) + Vite + TS + Tailwind v4 + shadcn/ui + Framer Motion. No react-router-dom, no react-helmet-async — TanStack's `head()` gives real SSR meta tags, which is strictly better for SEO/AEO.
- All meta/OG/JSON-LD via per-route `head()`; sitewide defaults in `__root.tsx`.
- Business details (phone, email, address, service area, reg #) rendered from a single `src/config/business.ts` with `TODO` placeholders so you can swap them in one place later.

## Brand system integration

Unpack the uploaded zip and wire it in as ground truth:

- Extract logos to `src/assets/logo/` (full-color, white-reversed, symbol color + white) and import them as ES modules.
- Favicon = symbol mark; replace `public/favicon.ico` and add PNG icons + `theme-color #0A2342` + web manifest.
- Port the design system into `src/styles.css` under Tailwind v4 `@theme`:
  - Colors: navy `#0A2342`, red `#B5121B`, silver `#7E838A`, charcoal `#3C4046`, paper `#FBFCFD` / `#F2F4F7`, plus navy + red + grey ramps. Mapped as semantic tokens (`--color-background`, `--color-primary` = navy, `--color-accent` = red, `--color-foreground` = charcoal, `--color-muted-foreground` = silver, `--color-ring` = `#2A578F`, etc.) so shadcn stays consistent.
  - Radii: 2 / 4 / 8 px (no pills except tags).
  - Shadows: navy-tinted xs → lg per spec.
  - Spacing: 4px base scale.
  - Motion tokens: 120/200/320ms, `cubic-bezier(0.16,1,0.3,1)`.
- Fonts loaded via `<link>` in `__root.tsx` head (Google Fonts): Chakra Petch 700, Archivo 700–900, Inter 400–600. Registered as `--font-display` (Chakra Petch), `--font-ui` (Archivo), `--font-sans` (Inter).
- Reference the uploaded design-system component prompts (`components/core/*.prompt.md`) for `Button`, `Badge`, `Card`, `Rule`, `SectionHeading`, `Input`, and brand `Logo` / `LicenseLine` — reimplement as typed React + Tailwind using shadcn primitives where useful.

## Shared layout (built once, reused)

- `src/routes/__root.tsx` extended with:
  - Google Fonts `<link>` tags + font preconnect.
  - Sitewide meta defaults, `og:site_name`, theme-color, manifest, favicon (symbol).
  - Organization / GeneralContractor JSON-LD sitewide.
- `SiteHeader`: transparent over hero, condenses on scroll to a compact white bar with the symbol mark. Desktop nav (Work / Services / About / Process / Contact) + red "Get a quote" button. Mobile → full-screen navy overlay menu with the reversed logo, large Chakra Petch links, focus trap, ESC + backdrop close, `prefers-reduced-motion` respected.
- `SiteFooter`: navy background, white reversed logo, three link columns, office block (address / phone / email / hours), socials, reg # line, certification/accreditation logo row (placeholder greys), fine-print bar.

## Reusable primitives

Under `src/components/`:

- `ui/Button` (variants: `primary` red, `ghost` outline navy, `link`), `Badge`, `Card`, `Input`, `Rule` (2px red or 3px navy).
- `SectionHeading` — eyebrow (Archivo 700 / 13px / 0.18em / silver, uppercase) + 2px red rule + Chakra Petch H2.
- `ServiceCard`, `ProjectCard` (numbered `01 / 06` caption, navy hover overlay with project name), `StatBar`, `CTABand`, `Logo`, `LicenseLine`.
- `motion/Reveal` — subtle fade + 12px slide-up on scroll, gated by `useReducedMotion`.

## Home page (`src/routes/index.tsx` — replaces placeholder)

Sections top to bottom:

1. **Hero** — full-viewport architectural Unsplash photo, navy overlay, reversed logo in header, oversized Chakra Petch headline ("Built to last."), one-line subhead, primary red "Get a quote" + ghost "View our work". Scroll-cue chevron.
2. **Positioning statement** — short paragraph, generous whitespace, eyebrow + red rule.
3. **StatBar** — 4 stats (years, projects, on-time %, safety record). Thin hairline dividers.
4. **Services overview** — 6 `ServiceCard`s (General Contracting, Design-Build, Remodeling, Commercial, Residential, Project Management) in a 3-col grid → 2 → 1.
5. **Featured projects** — horizontal-scroll gallery of 6 `ProjectCard`s with numbered captions and navy hover overlays.
6. **Why choose us / process** — 4 numbered steps, chamfered corners, Archivo labels.
7. **Testimonials** — 2–3 quotes, Chakra Petch pull-quote treatment, silver attribution.
8. **Certifications / trust row** — greyscale placeholder marks with tooltip labels.
9. **FAQ** — 4–6 Q&A items (service area, licensed/insured, project types, quote process, timeline, warranty) with `FAQPage` JSON-LD in `head()`.
10. **Final red CTA band** — full-bleed navy → red accent, headline + "Start your project" button.
11. **Footer** (shared).

Home `head()` sets title, description, canonical `/`, OG/Twitter, and stacks `GeneralContractor` + `FAQPage` JSON-LD.

Copy: realistic construction voice (not lorem), reg # rendered as `[AK Reg. # ____]` from `business.ts`.

Photography: curated Unsplash architectural/construction URLs with `srcset`, explicit width/height, `loading="lazy"` (hero eager + preloaded).

## SEO / AEO / infra (this phase)

- `public/robots.txt` allowing all + sitemap pointer (relative until domain set).
- `src/routes/sitemap[.]xml.ts` server route listing `/` now; extended when later pages land.
- `public/site.webmanifest` with name, theme-color `#0A2342`, symbol icons.
- Semantic HTML, single H1, descriptive alts, focus rings, ≥44px targets, ≥16px base, `lang="en"` on `<html>`.

## Accessibility

- AA contrast enforced (silver only for ≥18px or non-essential text).
- Visible focus ring `#2A578F`.
- Mobile menu: focus trap, ESC to close, `aria-expanded`, `aria-controls`.
- All icon buttons get `aria-label`. `prefers-reduced-motion` disables Framer reveals.

## Out of scope (phase 2, after your review)

About, Services (overview + detail sections), Projects index + detail template, Process, Contact (form + map + validation), 404, expanded sitemap, BreadcrumbList + Service JSON-LD on inner pages. Contact form submission left as a `TODO` for Lovable Cloud wiring.

## Technical notes

- Tailwind v4 tokens live in `src/styles.css` under `@theme` / `@theme inline`; no `tailwind.config.js`.
- Fonts via `<link>` in root `head().links` (never `@import` remote URLs in CSS on v4).
- Framer Motion added via `bun add framer-motion`.
- Logo assets imported as ES modules from `src/assets/logo/` (not `public/`) so Vite hashes them.
- No new deps beyond `framer-motion`; shadcn primitives already present.
