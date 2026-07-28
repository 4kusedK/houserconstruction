# Pass B v2 — Portfolio Architecture

Confirmed current state: the site is still a single homepage (`src/routes/index.tsx`, 558 lines) with Hero, StatBar, Projects, Testimonials, Certifications, FAQ, ClosingBand, CTA. `src/config/projects.ts`, `/about`, `/work`, the new brand components, and `HOW-TO-ADD-A-PROJECT.md` do not exist. `src/assets/` contains only the logo and `promise-handshake.jpg` — the previously "generated" hero and project images are not on disk either.

## What gets built

### 1. Project content model
New `src/config/projects.ts` as the single source of truth: slug, place name, category, year, location, summary, situation/work narrative, scope list, before/after pair, gallery, optional pull quote, `featured` flag. Six seeded entries with place names (not service labels), each flagged `TODO: confirm with client`. The `projects` array is removed from `business.ts` along with its dead imports.

### 2. Placeholder imagery
Generate a hero background plus before/after and gallery placeholders so every route renders with real pictures instead of grey boxes. Images live in `src/assets/` and are wired through the project model. Hero: I'll use the original Unsplash steel-frame photo you said you liked, unless you'd rather have a generated Alaska build shot.

### 3. Components — `src/components/brand/`
- `ProjectImage` — aspect-ratio wrapper, graceful fallback when a photo is missing
- `BeforeAfter` — CSS-only split, no JS slider
- `ProjectCard` — image, place name, category, year
- `NumberedSection` — `01 —` eyebrow + heading system
- `ContactSection` — shared block used by home and project pages

### 4. Routes
- `/` rebuilt short: Hero (`Trusted / to serve / with excellence.`) → full-bleed featured before/after → `01 — Our word` → `02 — What we've built` (asymmetric two-up) → closing band → `03 — Let's talk`. Testimonials, FAQ, stat bar, certifications come off the homepage.
- `/about` — intro, "Our story" chronology with client copy prompts, photo cluster, value bar, people grid
- `/work` — category filter pills (useState), masonry-ish card grid, Instagram link
- `/work/$slug` — title block, full-bleed before/after, situation/work, scope list, gallery, optional pull quote, contact section. Includes `notFoundComponent` and `errorComponent`.

### 5. Chrome, SEO, handoff
- Header nav becomes exactly Home · About · Work + red Contact button (`/#contact`), using `<Link>` for real routes
- Footer: dead links and services column removed, Instagram surfaced
- Per-route `head()` metadata; `sitemap[.]xml.ts` emits `/about`, `/work`, and every project slug
- `HOW-TO-ADD-A-PROJECT.md` at repo root

## Technical notes

- Typography tokens in `src/styles.css`: `display-hero` clamp 52→96px, `display-lg` clamp(32px,5.5vw,56px), `display-md` clamp(22px,3vw,30px), `eyebrow` 10px/0.2em, body Inter 16/1.65.
- File-based routing: `src/routes/work/index.tsx` → `createFileRoute("/work/")`, `src/routes/work/$slug.tsx` → `createFileRoute("/work/$slug")`.
- No new dependencies. Same navy/red/Barlow system.
- Verification: typecheck plus screenshots of all four routes at 375px and desktop.

## Risks

- Removing `projects` from `business.ts` breaks `index.tsx` until it is rebuilt — both land in the same pass.
- FAQ JSON-LD currently sits on the homepage; with the FAQ section gone I'll move the FAQ content to `/about` and keep its structured data with it rather than dropping it.
