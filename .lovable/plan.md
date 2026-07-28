## Small wins polish pass (no video)

Purely presentational changes to the homepage and header. No new routes, data, or dependencies.

### 1. Whitespace rhythm
Standardize vertical section padding on the home page so the page breathes consistently instead of the current mix of `py-16 / py-20 md:py-28 / py-24 md:py-32`:
- Major content sections (Positioning, Gallery, Testimonials, FAQ, Closing, Contact): `py-28 md:py-40`
- Thin band sections (StatBar, Credentials): `py-16 md:py-24`
- Increase the gap between a section heading and its content (heading blocks get `mb-16 md:mb-20`).

### 2. Pull quote in section 01
Inside the "01 — Our philosophy" text column, replace the second paragraph's plain treatment with a large pull quote set in the display font, left red rule, e.g. "The person who walks your site is the person who answers the phone." The remaining prose stays below it, trimmed so nothing is duplicated.

### 3. Vertical margin mark
Add a rotated, small-caps "Family Owned · Alaska" mark pinned to the left margin of the hero (hidden below `lg` so it never crowds mobile), using the existing silver/white token and red hairline. Decorative only, `aria-hidden`.

### 4. Nav refinement
Widen nav letter-spacing from `0.14em` to `0.2em` and drop nav size to `12px` so the links read as quieter, more premium type against the larger logo. Same treatment on the phone link. Increase nav gap from `gap-8` to `gap-10`.

### 5. Gallery breathing room
Increase gallery grid gap from `gap-4 md:gap-6` to `gap-6 md:gap-10` so the photo wall reads as a curated grid rather than a contact sheet.

## Technical notes
- All edits in `src/routes/index.tsx` and `src/components/site/SiteHeader.tsx`.
- No token changes needed; uses existing `bg-red`, `text-silver`, `display-md`, `eyebrow`.
- Verify at 375px and desktop after the change.
