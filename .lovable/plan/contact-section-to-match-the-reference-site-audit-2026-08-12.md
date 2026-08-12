# Contact section to match the reference + site audit

## 1. Contact section — match the reference exactly

Right now the navy side shows one generic "Houser Construction · Project inquiries · Estimates · houserconstruction@gmail.com" card. Replace it with the two-person layout from your reference:

```text
PROJECT LINE
[phone icon] (907) 310-6828
Call the company
------------------------------------
(env) | DAVID HOUSER
      | Project inquiries · Day-to-day
      | david@houserconstruction.net
------------------------------------
(env) | STEVE HOUSER
      | Planning · Project support
      | steve@houserconstruction.net
```

- Each row: circled envelope icon, name in bold display caps, muted role line, email as the link.
- Hairline dividers above and between the rows, matching the reference.
- Left panel unchanged: off-white, "Bring the plans. / Or just the idea.", "We'll tell you the next practical step.", red "START HERE →", red vertical slab on the right edge.

**Emails become the real ones**: `david@houserconstruction.net` and `steve@houserconstruction.net`. I'll add both to the business config as `contacts` (name, role, email) and drop the placeholder gmail from the visible UI. The footer and any other "email us" links point to David's address as the primary inbox.

Note: those addresses only receive mail once Google Workspace is set up on houserconstruction.net — the site will be correct in advance.

On mobile the two rows stack full width with the icon beside the text, and the whole panel sits under the invitation panel.

## 2. Remove "Building better communities."

Delete the closing statement block (heading, paragraph, and "The old is gone. The new has come.") so the FAQ runs straight into the contact split. The navy field and red rule stay, so the flow into the footer is unchanged.

## 3. Audit results and fixes

I tested Home, About, and Work at 390px and 1280px in a real browser:

- No horizontal overflow anywhere, no broken images, no failed requests.
- One React console warning on every page: an image attribute spelled `fetchpriority` instead of `fetchPriority`. I'll fix it.
- Mobile hero fills the screen before any text shows — I'll reduce the hero min-height on small screens so the headline lands above the fold.
- Contact panels carry heavy vertical padding that stacks into a long scroll on a phone — reduce mobile padding on both halves, desktop untouched.

## Technical notes

- Edits: `src/config/business.ts` (add `contacts`, update primary email), `src/routes/index.tsx` (contact panel, closing block removal, hero/mobile spacing), `src/components/site/SiteFooter.tsx` (email link).
- Re-run the mobile/desktop browser pass afterwards to confirm no overflow and a clean console.
