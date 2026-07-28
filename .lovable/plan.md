## My take

Strong brief — the core insight is right: the site is well-built but generic, and specificity (names, towns, real places) is what makes a contractor site convincing. I'd do almost all of it. Three notes first:

**Already done in the last pass** (section 8 is mostly stale):

- Canonical and `og:url` are already absolute on both routes.
- Homepage/root `og:image` already points at a local `og-houser-construction.jpg` on our domain; About uses the same local asset, not Unsplash.
- About already has its own `twitter:title` / `twitter:description`.
- Footer socials, Careers, Privacy, Terms are already gone — no `href="#"` remains.
- About crew alt text already reads as a neutral reference photo.
- `areaServed` already lists Anchorage, Eagle River, Palmer, Wasilla, Mat-Su Valley, Girdwood, plus State: Alaska.
- Projects 05 and 06 ("Coming Soon") are already removed — four remain.

So section 8 and 9 are complete; I'll verify rather than rebuild them.

**One disagreement.** Merging the Credentials strip into the value bar contradicts "no sections removed," and the value-bar cell would have to drop "100% Licensed · Bonded · Insured" to make room for Anchorage. My call: keep all three sections, but say it differently in each place — value bar takes the towns, the Credentials strip stays as the place that carries license/bond/insurance detail, footer chips stay. That removes the repetition without deleting a section. Say the word if you'd rather I delete the strip.

**TODO placeholders.** Founding year, real project names/locations, real client names, and the hero photo all get visible `TODO:` comments in code so David's answers slot straight in.

---

## Plan

### 1. Hero

- Delete the "Family Owned · Alaska" chip; keep the rotated left rail.
- Eyebrow becomes `Steve & David Houser · Since {YEAR}` with a TODO for the year.
- Fix the double space in the H1.
- Paragraph opens "A father-and-son contractor…".
- Swap the commercial concrete-pour photo for a finished Alaska home or commercial building or jobsite (Unsplash), marked TODO: client photo.

### 2. Header

- Logo to `h-14 md:h-16`; nav letter-spacing down to ~`0.06em` with a lighter, less shouty treatment so the logo leads.

### 3. Value bar

- Middle column: value `Anchorage`, label `Mat-Su · Palmer · Wasilla`.
- Credentials strip stays (see note above).

### 4. Philosophy

- Promote David's line to a pull quote: italic, `display-md`, `border-l-2 border-red pl-4`, attributed "David Houser" in eyebrow style beneath.

### 5. Gallery — the main change

Heading: "Places we've put our name on."

**Featured before/after** (full width, CSS only):

- Two equal images side by side split by a 3px red vertical divider; stacks on mobile with the divider becoming a 3px red horizontal rule.
- `BEFORE` / `AFTER` labels bottom-left at `text-white/60`; red "Before & After" badge top-left.
- `h-[180px] md:h-[320px]`; caption row beneath — category · location left, "View project →" in red right.

**Staggered three-up below:**

- `grid-cols-[1.4fr_1fr_1fr]` on md+, single column mobile; heights ~215/150/190px; middle tile `pt-8` to break the top edge.
- Each tile: image → `{category} · {location}` eyebrow → name in `display-md` → 32px 2px red rule.

**Naming:** all projects renamed to places (Turnagain, Birch Ridge, Government Hill, Palmer Church Hall), with category + town as metadata. Each gets a TODO to confirm the real name and location.

Every tile is a `<Link to="/#contact">` for now, with visible focus states, so `/work` is a one-line swap later.

### 6. Testimonials

Section stays. Attribution becomes first name + last initial + neighborhood (e.g. "Jenna R. · Turnagain"), TODO-marked pending real permission. Card gains a hairline divider and a small circular avatar placeholder with name above, location below.

### 7. FAQ

Add "Do you build in the Mat-Su Valley?" and "Do you do remodels in Anchorage?", each naming the towns in the first sentence. Verify both land in the existing `FAQPage` JSON-LD.

### 8–9. Technical

Verify the already-shipped items above and fix anything that regressed. No new work expected.

### Checks

375px pass on hero and gallery, build green, no `href="#"`, alt text on every new image.

### Technical notes

Files touched: `src/routes/index.tsx`, `src/config/business.ts` (projects, stats, testimonials, faqs), `src/components/site/SiteHeader.tsx`. No new dependencies; gallery is pure grid/height/padding. `src/components/ui/` untouched.