# New hero image + cleaner handshake illustration

## 1. Hero background — Alaskan mountain range
Replace the current hero photo with a wide, cinematic shot of an Alaskan mountain range: broad horizontal composition, cool blue-grey peaks, snow, big sky, with enough clear space on the left for the headline block to stay readable.

- Generate a wide (1920x1080) photographic landscape and save it over `src/assets/hero-home.jpg`.
- Keep the existing navy scrim/overlay so the white headline and red rule keep contrast; adjust overlay opacity only if the new image is too bright.
- Update the hero `alt` text and the OG/twitter image description references that mention the old building shot.

## 2. Cleaner handshake illustration
Keep the illustrated line-art direction, but redraw it cleaner: fewer, smoother strokes, consistent line weight, simpler cuff/sleeve detail, no sketchy or noisy texture — a crisp minimal mark rather than an engraving.

- Generate a new white-on-transparent line illustration, upload it as a CDN asset (`handshake-mark.png`), and point the partnership panel at the new pointer.
- Delete the old `handshake-lineart` asset once nothing references it.
- Slightly enlarge the mark inside the blueprint panel so it fills the frame better.

## Technical notes
Changes touch `src/routes/index.tsx` (hero image import, alt text, handshake pointer + sizing) and `src/assets/`. No layout, copy, or route changes.
