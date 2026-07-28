## What changes

### 1. Sand sections become white with the blueprint grid
In `src/routes/index.tsx`:
- Philosophy section (`bg-sand`) → `bg-background blueprint-grid`
- Gallery section (`bg-sand`) → `bg-background blueprint-grid`
- Credentials band (`bg-sand-sunk border-y border-timber/20`) → `bg-background blueprint-grid` with a hairline border top/bottom so the band still reads as a distinct strip

In `src/routes/about.tsx`:
- The `bg-sand blueprint-grid` story section → `bg-background blueprint-grid` (keeps its existing grid, just loses the warm tint)

FAQ and the navy bands stay exactly as they are.

### 2. Timber bars/rules in those sections become red
Inside the now-white sections, the small accent marks currently on `bg-timber` switch to `bg-red`:
- Philosophy: the 1×24 bar under the photo, the pull-quote rule
- Gallery: the small rules under card labels
- Credentials: the leading rule and border tint

Timber stays where it lives on navy (footer headings, hero rail, closing band) so the warm accent isn't wiped out entirely.

### 3. Verify
Screenshot the homepage at 1280px and 375px to check the grid isn't too loud on large white areas and that the red marks read as deliberate rather than scattered.

### Technical notes
Presentation-only class swaps in `src/routes/index.tsx` and `src/routes/about.tsx`. No token changes in `src/styles.css`, so reverting is a clean swap back to `bg-sand` / `bg-timber`.
