# Site audit + closing band cleanup

## What the tests found

I loaded Home, About, and Work at mobile (390px) and desktop (1280px) widths in a real browser:

- No horizontal overflow on any page at either width — nothing spills off screen.
- No broken images or failed requests.
- One React console warning on every page: an image attribute is spelled `fetchpriority` instead of `fetchPriority`. Harmless today, but it's noise in the console and should be fixed.
- Mobile hero fills nearly the full screen before any text appears; the headline sits low. Worth tightening so the value line is visible sooner on a phone.

Nothing is broken. The fixes below are polish plus the section change you asked about.

## Changes

1. **Remove "Building better communities."**
   Delete the full statement block (heading, paragraph, and the "The old is gone. The new has come." line) so the page goes from the FAQ straight into the split contact panel. The navy field and the red rule stay, so the flow into contact and footer is unchanged — the page just closes faster and with less preaching.

   If you'd rather not lose the sentiment entirely, the alternative is keeping only "The old is gone. The new has come." as a single short line above the contact split. Tell me which you want; the plan assumes full removal.

2. **Fix the console warning** — correct the image priority attribute casing on the hero image so the console is clean.

3. **Mobile hero tightening** — reduce hero min-height on small screens and trim the top spacing so the eyebrow and headline land inside the first screen instead of below the fold.

4. **Mobile spacing pass on the contact split** — the two panels each carry large vertical padding, which stacks into a very long scroll on a phone. Reduce the mobile padding on both halves (desktop untouched).

## Technical notes

- All edits are in `src/routes/index.tsx`; no config, data, or route changes.
- Removing the statement block does not affect anchors — `#contact` lives on the split grid, not the statement.
- After the edits I'll re-run the same mobile/desktop browser pass to confirm no overflow, no console errors, and correct layout.
