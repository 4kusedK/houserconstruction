# Handshake illustration + blueprint contact background

## What changes

1. **Partnership section image** — replace the photographic handshake with the uploaded flat navy/red handshake illustration. Since it is a graphic (not a photo), it gets a light neutral panel behind it and `object-contain` instead of a cropped 4:5 photo fill, so the artwork isn't cut off. The warm photo overlay and red corner rule stay off/on as follows: warm overlay removed (it would muddy flat colors), red baseline rule kept.

2. **Contact section background** — swap the Unsplash dusk jobsite photo for the uploaded Houser blueprint pattern. The current sand/white veil is removed and replaced with a navy-tinted scrim so the panel reads as brand blue, not washed white. Text on that panel flips to white/light so it stays legible on the blue field (headline, body, and the red "Start here" link stay red).

## Technical notes

- Both uploads are pushed to the CDN with `lovable-assets create` and referenced through `.asset.json` pointers in `src/assets/`; no binaries land in the repo.
- `src/routes/index.tsx`:
  - `Positioning`: swap `handshakeImg` import for the new pointer, adjust the image wrapper (neutral background, `object-contain`, drop `photo-warm`), update alt text.
  - `ClosingAndContact`: replace `CONTACT_BG` with the blueprint pointer, change the veil from `bg-sand/75` + sand gradient to a navy scrim (e.g. `bg-navy/70` with a left-to-right gradient), and recolor the left panel type from navy/silver to white/white-70.
- The old `src/assets/promise-handshake.jpg` import is removed; if nothing else references it, the file is deleted.

## Not changing

Layout, section order, copy, and the navy contact detail panel on the right.
