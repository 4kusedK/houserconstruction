# Restore the split contact panel

Keep the navy closing band and the footer exactly as they are now. Only the contact block goes back to the earlier design.

## What changes

The contact block returns to the full-bleed split panel from the reference image:

```text
Closing band     navy       "Building better communities."   (unchanged)
Contact left     white      "Bring the plans. Or just the idea." + START HERE
Contact right    navy-deep  Project line (phone) + email card
Footer           navy       (unchanged, current version)
```

- Left half: white background, navy headline, silver sub-line, red "Start here" arrow link, red vertical slab on its right edge (red top border on mobile).
- Right half: navy-deep, "Project line" eyebrow, large phone number with red phone icon, "Call the company", then a divider and the email block — circled mail icon, "Houser Construction", "Project inquiries · Estimates", and the email address.
- Both the phone and the email stay as real `tel:` / `mailto:` links from the business config.

Everything above the contact block (closing statement, spacing, red rule) and everything below it (footer) stays as it is now.

## Files

- `src/routes/index.tsx` — replace the current single-surface contact grid inside `ClosingAndContact` with the split panel version.
