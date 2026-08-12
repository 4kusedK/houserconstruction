# Hero CTA + Contact Flow

## 1. Hero call to action

Add a single button under the hero paragraph, above the red rule:

- **Selected work** — solid red block button, uppercase UI type, arrow that slides on hover, links to `/work`.

Full-width on mobile, inline from `sm` up. The red hero rule moves below the button so the composition still ends on the accent. Scroll chevron stays.

## 2. Make the contact section flow

The current seam problems: the FAQ is white, then the contact's left panel is also white but a different white block with a hard 6px red edge, and the navy right panel starts abruptly at the page's midline.

Fixes, all presentation-only:

- **Lead-in rule** — give the contact section a top hairline and a short red tick above the left panel heading, so it reads as the page's closing move instead of a pasted card.
- **Soften the split** — replace the hard 6px red slab between panels with a 1px hairline plus a short red segment aligned to the heading baseline. The panel boundary stops shouting.
- **Tone the left panel** — use the section's off-white/sand surface rather than pure white so it separates from the white FAQ above while staying light.
- **Match vertical rhythm** — equal padding on both panels and align the left heading baseline to the right "Project line" eyebrow so the two halves read as one row.
- **Navy continuity** — the right navy panel keeps its tonal gradient and flows straight into the navy footer with no seam line, as it does now.
- Mobile: panels stack with the red divider becoming a thin top rule on the navy panel only.

## Technical notes

All edits in `src/routes/index.tsx` (`Hero`, `ClosingAndContact`). No config, data, or business-logic changes. Existing tokens only (`red`, `navy`, `navy-deep`, `sand`, `hairline`).
