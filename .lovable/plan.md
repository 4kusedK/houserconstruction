Plan: Replace the current hero-home.jpg with a new generated image that better fits the commercial-Alaska vibe.

Current state
- The Hero in src/routes/index.tsx imports heroImg from src/assets/hero-home.jpg.
- The existing image is a generated dusk-and-spruce scene; the user feels it doesn't fit the brand.

Goal
- Create a hero image that reads as a real photograph: an Alaskan landscape with a clean, modern commercial/flex building, or a strong architectural detail shot.
- Keep it compatible with the navy/red overlay and white text.
- Avoid AI tells (no impossible geometry, no oversaturated surreal colors, no weird hands/signage).

Steps

1. Generate a new hero image
   - Save to src/assets/hero-home.jpg (or a new name like hero-alaska.jpg if we want to keep the old file for comparison).
   - Prompt direction: photorealistic, documentary-style, modern commercial or mixed-use building in an Alaska setting, natural dusk or overcast light, subtle mountains or spruce in the background, clean lines, muted palette, no visible people, no unreadable signage, 16:9-ish landscape composition.
   - Use the agent generate_image tool at standard quality; review for obvious AI artifacts before wiring it in.

2. Wire the new image into the Hero
   - Update the import in src/routes/index.tsx.
   - Update the alt text to describe the actual image (e.g., "Modern commercial building against an Alaskan landscape").
   - Keep the existing gradient overlay and text layout intact.

3. Verify in preview
   - Check desktop and mobile: the image should read clearly behind the white headline, the gradient should still provide enough contrast, and the focal point should not fight with the text.
   - If contrast is weak, adjust the gradient opacity slightly.

4. Optional: generate one alt if the first isn't right
   - If the user wants options after seeing the first image, generate 1–2 alternates with different compositions (architectural detail vs. wide landscape) and present them side by side before finalizing.

Out of scope
- No changes to other sections, typography, or colors unless the image forces a contrast fix.
- No new pages or backend work.