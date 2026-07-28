## Answers to your bracketed notes

**Testimonials stay.** You and the client like them — I'll leave the Client voice section as-is. I'd only add attribution (first name + town) when David supplies real ones.

**Privacy/Terms.** Agreed, don't lose the thread. I'll remove the dead footer links now and drop a `TODO-LEGAL.md` at the repo root noting exactly when they become required (contact form that stores data, analytics/tracking scripts, or any email capture). If we wire up Formspree or Google Analytics later, that's the trigger.

**Statewide vs. towns.** Yes, still list towns — but framed as *statewide with hubs*, not as a limited service area. Search doesn't have a "whole state" query; people type "general contractor Wasilla." A page that says "Statewide — from Anchorage and the Mat-Su Valley to the Kenai and beyond" reads truthfully to a human *and* gives crawlers the town tokens. It never claims he's regional. Schema handles this cleanly: `areaServed` becomes the `State: Alaska` plus a few `City` entries as examples.

**FAQ.** Keeping your existing questions. Instead of adding two location FAQs, I'll fold the coverage answer into one existing FAQ's body copy (the "where do you work" style one) so the statewide + hub-town language lands in `FAQPage` schema without new questions. If none of the current FAQs is a natural fit, I'll add exactly one: "Do you work outside Anchorage?" — answered statewide.

---

## Revised plan

### 1. Credibility

- Keep the testimonials (unchanged).
- Fix the crew photo alt text so it doesn't assert something the caption denies — describe it as a reference/job-site photo.
- Drop projects 05 and 06 ("Coming Soon") from the homepage gallery until real work replaces them.

### 2. Metadata correctness

- Absolute `canonical` + `og:url`: `https://houserconstruction.net/` on Home, `https://houserconstruction.net/about` on About.
- Add route-specific `twitter:title` / `twitter:description` to About so it stops inheriting the homepage's.
- Generate a branded 1200×630 OG image, ship it as a local asset, and use its absolute URL for `og:image` / `twitter:image` on the leaf routes — replacing the r2.dev preview screenshot and About's hotlinked Unsplash image.
- Note: platforms cache link previews; shared links won't update until they re-scrape (can be forced in each platform's debugger).

### 3. Dead links

- Socials: render only `business.socials` entries with a real URL — the row hides itself until David provides Instagram/Facebook.
- Remove Careers from the footer.
- Remove Privacy and Terms links; add `TODO-LEGAL.md` documenting the conditions that make them required.

### 4. Local SEO (statewide framing)

- Add a `serviceArea` block to `business.ts`: statewide primary, with hub examples (Anchorage, Eagle River, Palmer, Wasilla / Mat-Su Valley, Girdwood).
- Work that phrasing into body copy — closing band and the footer Office block — always as "Alaska statewide, from X to Y," never as a limited region.
- Expand `areaServed` in the `GeneralContractor` JSON-LD to `State: Alaska` plus `City` entries.
- Fold statewide coverage language into an existing FAQ answer (or add one coverage FAQ if none fits).
- Client action, off-site: claim the Google Business Profile using the exact phone and email on the site. Highest-leverage item on this list.

### 5. `/work` (separate build, after real photos)

- `src/config/projects.ts` content model (slug, name, town, category, scope, images, optional before/after pair).
- `/work` index with filterable grid; homepage `#work` becomes a teaser linking there.
- `/work/$slug` detail route with per-project `head()`.
- `HOW-TO-ADD-A-PROJECT.md` for handoff.

### Technical notes

Steps 1–4 are one pass touching `src/config/business.ts`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/__root.tsx`, `src/components/site/SiteFooter.tsx`, plus one new OG image asset and `TODO-LEGAL.md`. `sitemap.xml` updates when `/work` lands in step 5.