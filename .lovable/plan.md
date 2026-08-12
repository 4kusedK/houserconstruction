# Fix the flow: closing band → contact → footer

## What's actually off

The bottom of the page runs through four surfaces in a row with no rhythm:

```text
FAQ            white + grid
Closing band   navy        "Building better communities."
Contact left   white       "Bring the plans."
Contact right  navy-deep   phone + email
Footer         navy        logo, columns, credentials
```

Three problems come out of that stack:

1. **Three navy shades touching.** Closing (navy) sits directly above the contact panel (navy-deep), which sits directly above the footer (navy). The eye reads two accidental seams instead of one deliberate dark ending.
2. **The white contact panel is an island.** It drops a bright block into the middle of a dark run, right after the FAQ was already white. So the page goes white → navy → white → navy → navy.
3. **Red is doing too much.** A 6px red slab on the panel edge, a 4px red rule on top of the closing band, plus red icons and red link — red stops being an accent and becomes a border style.

## The fix

**One continuous dark ending.** Everything from the closing statement to the footer becomes a single navy field with the footer as its natural bottom, so the page reads: light FAQ → one long dark close. No white island.

- Closing statement and the contact block share the same navy, separated by a hairline rule and spacing, not by a color change.
- The "Bring the plans / Or just the idea" panel keeps its split-screen structure and its position, but inverts: navy with white type instead of a white block. The split reads through a vertical hairline and a tone shift (navy vs. navy-deep) rather than a hard light/dark cut.
- Footer loses its own top edge and continues the same field — it becomes the closing frame, not a fifth section.

**Give the split real hierarchy.** Left side is the invitation (statement + "Start here"), right side is the hard contact data (phone, email). Right side gets a subtle recessed panel (navy-deep with a thin border) so it reads as the "card" of information against the invitation.

**Calm the red down.** Red keeps three jobs only: the short rule above the closing headline, the "Start here" arrow link, and the phone icon. The 6px slab edges and the duplicated top rules go away; separation is handled by hairlines at `white/10-15`.

**Fix the vertical rhythm.** Right now the closing band and the contact panel both use py-28/py-40, so they feel like two equal-weight sections colliding. The closing statement gets the larger air above it, the contact block a tighter, more functional pace, and the footer a clear breathing gap before the credential chips.

## Colors used

No new tokens. Existing `--navy`, `--navy-deep`, `--red`, plus `white/10`, `white/60`, `white/80` for hierarchy — same palette, applied with fewer hard switches.

## Files

- `src/routes/index.tsx` — rework `ClosingAndContact`: single navy field, inverted split panel, reduced red, retuned spacing.
- `src/components/site/SiteFooter.tsx` — remove the visual break at the top so the footer continues the dark field; tighten the credentials/copyright rhythm.

Content, copy, links and section order stay exactly as they are.
