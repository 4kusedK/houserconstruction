# Final build audit — cleanup for handoff

I ran a typecheck, lint, sitemap fetch, asset-usage sweep and route/metadata review. The site is structurally healthy: TypeScript passes clean, `/sitemap.xml` renders both routes, `robots.txt` and the OG image both resolve, and every image asset in `src/assets` is referenced. Below is what I'd fix before handoff.

## What's wrong today

1. **Formatting lint failures** — `eslint .` reports 81 errors, all Prettier whitespace/wrapping in `src/routes/index.tsx` and `src/routes/work.tsx`. No logic errors, but a client dev running lint sees a red build.
2. **Metadata layered in the wrong place** — `__root.tsx` carries a page-level title, description, `og:image` and `twitter:image`. Root should hold sitewide defaults only; per-page tags belong on the leaf routes (which already have their own). As-is, the root image is inherited by any future page whether or not it fits.
3. **Dead code** — the `use-mobile` hook is never imported; the `Testimonials` block and its `initials()` helper render nothing because `testimonials` is intentionally empty; `TODO-LEGAL.md` is a working note that shouldn't ship in a handoff repo as-is.
4. **Missing structured data on /work** — the homepage has `GeneralContractor` JSON-LD, `/work` has `CollectionPage`, but there's no `BreadcrumbList` tying `/work` back to home, which is the cheapest AEO win left.
5. **No handoff documentation** — nothing in the repo tells the next owner where content lives (`src/config/business.ts`, `src/config/projects.ts`), how to swap home-page photos, or what's still pending (contact form, analytics, legal pages).

## What I'll do

- Run Prettier across the project so `bun run lint` exits clean; no visual or behavioural change.
- Move `title`, `description`, `og:image` and `twitter:image` out of `__root.tsx`, leaving charset, viewport, theme-color, `og:site_name`, `og:type` and `twitter:card` there. Home and `/work` already declare their own full set, so nothing loses tags. Add a sitewide `Organization` JSON-LD to root.
- Add `BreadcrumbList` JSON-LD to `/work`.
- Delete `src/hooks/use-mobile.tsx`.
- Keep the empty-`testimonials` block (it's a deliberate placeholder) but add a one-line comment above it stating it renders only when the array is populated, so it isn't mistaken for dead code.
- Fold `TODO-LEGAL.md` into a new `HANDOFF.md` covering: where copy/contact details live, how to change home-page featured photos, how to add project photos, the pending items (contact form wiring, analytics, privacy/terms), and domain/DNS notes.
- Re-verify afterwards: typecheck, lint, `/` and `/work` render at mobile (390px) and desktop widths via a headless browser pass, plus a console-error check.

## Technical notes

Metadata rules followed: canonical stays on leaf routes only (already correct), `og:url` and canonical self-reference each page, and no `lastmod` is added to the sitemap since there's no authoritative per-page timestamp.

Left alone deliberately: the unused shadcn/Radix dependencies in `package.json` (removing them risks breaking future component adds for the client and saves nothing at runtime — the bundler tree-shakes them), and the empty testimonials/contact-form placeholders, which are waiting on client content.
