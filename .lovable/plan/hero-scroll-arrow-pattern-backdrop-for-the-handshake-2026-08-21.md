# Hero scroll arrow + pattern backdrop for the handshake

## 1. Hero scroll arrow

The chevron is a plain `<a href="/#work">`, which makes the router re-navigate to the home route and lands under the fixed header instead of scrolling cleanly to the gallery.

Fix: turn it into a button that scrolls to the `#work` section smoothly (respecting reduced-motion), and add scroll offset to that section so the heading isn't hidden behind the sticky header.

## 2. Handshake backdrop

Put the uploaded navy Houser logo pattern behind the handshake illustration only. The rest of the "Built on partnership" band stays white with the blueprint grid and navy text.

- The pattern fills the 4:5 image panel (cover), with the flat handshake illustration centered on top with padding.
- A slight navy scrim keeps the pattern from competing with the artwork; the red baseline rule and photo frame stay.

## Technical notes

- Upload `full_pattern_blue.png` via `lovable-assets` and reference the `.asset.json` pointer.
- Edits are confined to `src/routes/index.tsx` (`Hero` chevron, `ProjectsGallery` scroll offset, `Positioning` image panel).
