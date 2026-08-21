# Strip-down pass: hero, gallery, FAQ, About

## 1. Hero (home)

- Remove the vertical left rail label "Steve & David Houser · Alaska".
- Remove the eyebrow line "Steve & David Houser" (the red tick above the headline goes with it, so the headline leads).
- Replace the red "Selected work" button with a red "Contact us" button linking to the contact section (`/#contact`). Same red block styling and sliding arrow.
- Scroll chevron currently points at `/#about`; it will point at the gallery instead since the philosophy section keeps its id.

## 2. Contact section background

The About page hero photo (the dusk Alaska construction image) becomes the background of the left/light contact panel: the image sits behind the panel with a heavy off-white/sand veil over it so navy text stays fully readable, plus a subtle darkening at the edge where it meets the navy side. The navy right panel is unchanged.

Since the About page is being deleted, that image reference moves into the home route.

## 3. Gallery section

- Rename heading from "Selected work." to "Residential works." and change the eyebrow from "Gallery" to "Residential".
- Remove the ghost "02" number.
- Remove all location-based naming: no street names ("Westland Avenue"), no "Anchorage, AK". Each tile shows its category only ("Whole-home remodel", "Kitchen & bath renovation", "Interior renovation") as the title.
- Same removal applied on the `/work` page so the two match: section titles become the category, location lines drop.
- Photo alt text keeps descriptive room language but drops the street name and city.
- Intro copy adjusted so it no longer says "Anchorage remodel".
- The three featured images stay as they are for now; easy to swap later.

## 4. Remove FAQ

Delete the FAQ section from the home page, including the FAQPage JSON-LD block in the home route head. The `faqs` array in the business config is removed since nothing else reads it.

## 5. Remove the About page

- Delete `src/routes/about.tsx`.
- Remove "About" from the header nav (desktop + mobile) and the footer links.
- Remove `/about` from the sitemap.

## Technical notes

Files touched: `src/routes/index.tsx`, `src/routes/work.tsx`, `src/routes/about.tsx` (deleted), `src/components/site/SiteHeader.tsx`, `src/components/site/SiteFooter.tsx`, `src/routes/sitemap[.]xml.ts`, `src/config/projects.ts` (name/location fields), `src/config/business.ts` (drop `faqs`). No backend or data-layer changes. After the edits I'll run a browser pass at mobile and desktop widths to confirm nothing overflows or errors.
