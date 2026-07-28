# How to add a project

Everything on the **Work** page comes from one file:

```
src/config/projects.ts
```

Add a project there and it automatically shows up on `/work`, gets its own page
at `/work/<slug>`, and is added to the sitemap for Google. Nothing else to touch.

---

## 1. Add the photos

Put the images here:

```
src/assets/projects/
```

Naming convention — use the project slug:

```
birch-ridge-before.jpg
birch-ridge-after.jpg
birch-ridge-2.jpg      (extra gallery photos)
```

**Photo guidelines**

- JPG, at least 1600px on the long side, under ~600KB each.
- Shoot the "before" from roughly the same spot as the "after". It matters.
- Landscape works best for before/after pairs.
- No photos yet? Leave `after` pointing at any placeholder and set
  `photosPending: true` — the page will say "Final photos coming soon."

---

## 2. Import the photos at the top of `projects.ts`

```ts
import birchBefore from "@/assets/projects/birch-ridge-before.jpg";
import birchAfter from "@/assets/projects/birch-ridge-after.jpg";
```

---

## 3. Add the entry

Copy this block into the `projects` array:

```ts
{
  slug: "birch-ridge",                 // URL: /work/birch-ridge — lowercase, dashes, no spaces
  name: "Birch Ridge",                 // Place name, not a service name
  category: "Remodel",                 // Must be one of the categories listed below
  year: "2025",                        // Or "In progress"
  location: "Mat-Su Valley, AK",
  summary: "One sentence for the card.",
  situation: "What the place was like when we got there.",
  work: "What we actually did.",
  scope: [
    "Full exterior tear-off and re-side",
    "Standing seam metal roof",
  ],
  before: birchBefore,                 // Optional — omit if there's no before photo
  after: birchAfter,                   // Required
  gallery: [birchAfter],               // Optional extra photos
  quote: {                             // Optional
    text: "They said three weeks and it took three weeks.",
    attribution: "Homeowner, Wasilla",
  },
  featured: true,                      // Optional — shows on the homepage (keep to 2)
  photosPending: false,                // Optional
}
```

**Allowed categories** (must match exactly):

- `New Construction`
- `Remodel`
- `Exterior`
- `Commercial`
- `Community`

To add a new category, add it to the `ProjectCategory` type and the
`projectCategories` list in the same file.

---

## 4. Feature it on the homepage

The homepage shows the two projects marked `featured: true`. To swap what's
featured, set `featured: true` on the new one and remove it from the old one.

The full-bleed before/after strip near the top of the homepage uses the **first
project in the list that has a `before` photo**. Move a project higher in the
array to feature it there.

---

## 5. Writing tips

The site's job is confirmation, not a sales pitch. Most people who land here
were referred. Write like you're describing the job to a neighbor:

- Name projects after places, not services. "Birch Ridge", not "Deck Build".
- Say what was wrong and what you did. Skip adjectives like "stunning".
- Real numbers are good: "two hundred feet of fence", "fifty winters".

---

## 6. Placeholder copy to replace

Anything with `TODO: confirm with client` in `src/config/projects.ts` is
placeholder text. Search the file for `TODO` to find them all.

Business details (phone, email, Instagram handle) live in
`src/config/business.ts` — also marked with `TODO` where they still need
confirming.
