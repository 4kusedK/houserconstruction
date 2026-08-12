# Real project photos — placement plan

## What's in the zip

28 finished-interior photos (1500x1000, MLS/listing quality) from three Anchorage properties:

- 3950 Westland Ave — 18 photos (kitchens, living rooms, baths, bedrooms, entry)
- 2521 W 77th Ave — 6 photos (kitchen, baths, living)
- 3006 W 30th Ave — 4 photos (kitchen, living, bath)

All are after/finished shots — no exteriors, no jobsite or commercial images, no "before" photos.

## Naming

Street name only, no house numbers:

- Westland Avenue — Anchorage, AK
- West 77th Avenue — Anchorage, AK
- West 30th Avenue — Anchorage, AK

Category label: "Whole-home remodel" (adjust per project once the client confirms scope).

## Structure

1. Home page gallery (section 02) shows three real projects — one lead image each — linking to the new Work page.
2. New `/work` page holds all 28 photos, grouped by project, with a click-to-enlarge lightbox.

## Home page changes

- Replace the stock Before & After block with a single featured project: the strongest Westland Avenue shot, full width, with the project name, category, location, and a link to `/work`.
- Replace the three Unsplash tiles with one real lead photo per property, keeping the existing staggered grid, hover zoom, and red rule.
- Section copy shifts slightly: the gallery intro should acknowledge that the shown work is residential remodel and restoration, while commercial capability stays stated in the hero and services copy. Commercial photos can slot in later without restructuring.
- Header nav "Work" points to `/work`; the home gallery keeps its `#work` anchor so existing links still land somewhere valid.

## New `/work` page

- Hero: short heading ("Selected work.") plus a line on statewide commercial, real estate and residential scope.
- One section per property: name, category, location, and a responsive photo grid (3-up desktop, 2-up tablet, 1-up mobile) using the existing photo-frame and hover treatment.
- Lightbox: click a photo to open it large with prev/next and Esc-to-close, built with the shadcn dialog already in the project.
- Own `head()` metadata: title, description, og tags, and og:image pointing at the featured Westland photo.
- Added to the sitemap.

## Technical notes

- Photos are uploaded to the Lovable CDN with `lovable-assets`, so the 6.5 MB of JPEGs never enters the repo; each becomes a small `.asset.json` pointer under `src/assets/projects/`.
- A new `src/config/projects.ts` holds the three project records (slug, name, category, location, photo list, alt text). `projects` and `featuredProject` in `src/config/business.ts` are rewritten to read from real data; the Unsplash URLs and their TODO comments go away.
- Alt text is written per room type ("Renovated kitchen with granite counters — Westland Avenue, Anchorage") rather than repeated boilerplate.
- All gallery images stay `loading="lazy"` except the home featured shot; the hero preload stays as is.

## Out of scope

- No before/after pairs until the client supplies before photos.
- No commercial project section yet — the page layout leaves room to add one.
- No changes to hero, philosophy, credentials, FAQ, or contact sections.
