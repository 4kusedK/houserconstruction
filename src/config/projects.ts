// Houser Construction — project content model.
// Single source of truth for /work, /work/$slug, and the homepage grid.
//
// All six entries below are PLACEHOLDERS seeded so the site renders.
// TODO: confirm with client — names, years, locations, and copy.
// See HOW-TO-ADD-A-PROJECT.md in the repo root.

import birchBefore from "@/assets/projects/birch-ridge-before.jpg";
import birchAfter from "@/assets/projects/birch-ridge-after.jpg";
import turnagainBefore from "@/assets/projects/turnagain-before.jpg";
import turnagainAfter from "@/assets/projects/turnagain-after.jpg";
import eagleRiverAfter from "@/assets/projects/eagle-river-after.jpg";
import knikAfter from "@/assets/projects/knik-crossing-after.jpg";
import palmerAfter from "@/assets/projects/palmer-commons-after.jpg";
import wasillaAfter from "@/assets/projects/wasilla-chapel-after.jpg";

export type ProjectCategory =
  | "New Construction"
  | "Remodel"
  | "Exterior"
  | "Commercial"
  | "Community";

export interface Project {
  slug: string;
  /** Place name, not a service label. */
  name: string;
  category: ProjectCategory;
  /** Year completed, or "In progress". */
  year: string;
  location: string;
  /** One line used on cards and in the index. */
  summary: string;
  /** What the place was like when we got there. */
  situation: string;
  /** What we actually did. */
  work: string;
  scope: string[];
  before?: string;
  after: string;
  gallery?: string[];
  quote?: { text: string; attribution: string };
  featured?: boolean;
  /** Shown as a "Coming soon" flag when photos aren't in yet. */
  photosPending?: boolean;
}

export const projects: Project[] = [
  {
    slug: "birch-ridge",
    name: "Birch Ridge",
    category: "Remodel",
    year: "2025",
    location: "Mat-Su Valley, AK",
    summary:
      "A tired 1970s ranch brought back to weathertight, with new siding, roof, and a covered entry.",
    situation:
      "The house had been standing for fifty winters and looked every one of them. Siding was failing at the base, the roof had two layers of shingle on it, and there was no covered entry, so the front door took the weather head on. TODO: confirm with client.",
    work:
      "We stripped the exterior back, corrected what we found underneath, and rebuilt it in board-and-batten with a standing-seam roof. The new porch gives the entry a place to shed snow and gives the house a front. TODO: confirm with client.",
    scope: [
      "Full exterior tear-off and re-side",
      "Standing seam metal roof",
      "New covered entry and timber posts",
      "Window and door trim replacement",
      "Grading and driveway cleanup",
    ],
    before: birchBefore,
    after: birchAfter,
    gallery: [birchAfter],
    featured: true,
  },
  {
    slug: "turnagain",
    name: "Turnagain",
    category: "Remodel",
    year: "2025",
    location: "Anchorage, AK",
    summary:
      "A closed-off 1980s kitchen opened up, relit, and rebuilt for a family that cooks every night.",
    situation:
      "Dark oak, a dropped ceiling, and a layout that put the cook in a corner. The owners had lived with it for eleven years. TODO: confirm with client.",
    work:
      "We pulled the soffits, reworked the lighting, and rebuilt the run with shaker cabinets, butcher block, and a working island. Everything behind the walls got updated while it was open. TODO: confirm with client.",
    scope: [
      "Full kitchen demolition",
      "Electrical and plumbing rough-in",
      "Custom cabinetry install",
      "Butcher block and quartz counters",
      "Wide plank flooring throughout",
    ],
    before: turnagainBefore,
    after: turnagainAfter,
    gallery: [turnagainAfter],
    quote: {
      text: "They told us how long it would take, and that's how long it took.",
      attribution: "Homeowner, Anchorage — TODO: confirm with client",
    },
    featured: true,
  },
  {
    slug: "eagle-river",
    name: "Eagle River",
    category: "Exterior",
    year: "2024",
    location: "Eagle River, AK",
    summary:
      "A full-width cedar deck built to hold snow load and still feel light in summer.",
    situation:
      "The original deck was undersized and sagging at the ledger. TODO: confirm with client.",
    work:
      "Rebuilt from the footings up with a wider footprint, cable railing to keep the view, and hardware rated for what Alaska does to a deck. TODO: confirm with client.",
    scope: [
      "New footings and framing",
      "Cedar decking",
      "Black cable railing system",
      "Integrated stair run",
    ],
    after: eagleRiverAfter,
    gallery: [eagleRiverAfter],
  },
  {
    slug: "knik-crossing",
    name: "Knik Crossing",
    category: "Exterior",
    year: "2024",
    location: "Wasilla, AK",
    summary:
      "Two hundred feet of cedar privacy fence set to survive frost heave.",
    situation:
      "Open property line on a road that had gotten busier every year. TODO: confirm with client.",
    work:
      "Posts set below frost, boards run tight, line held straight across a grade that did not want to cooperate. TODO: confirm with client.",
    scope: [
      "Post layout and frost-depth setting",
      "Cedar board fencing",
      "Gate fabrication and hang",
    ],
    after: knikAfter,
    gallery: [knikAfter],
  },
  {
    slug: "palmer-commons",
    name: "Palmer Commons",
    category: "Commercial",
    year: "In progress",
    location: "Palmer, AK",
    summary:
      "A small-town retail block going up in timber and steel. Photos coming as it tops out.",
    situation:
      "A vacant gravel lot on a main road that the community had been asking about for years. TODO: confirm with client.",
    work:
      "Ground-up commercial shell with heavy timber covered walkway, staged so tenants can finish out as they sign. TODO: confirm with client.",
    scope: [
      "Site work and foundations",
      "Steel and heavy timber frame",
      "Building envelope",
      "Tenant-ready shell delivery",
    ],
    after: palmerAfter,
    gallery: [palmerAfter],
    photosPending: true,
  },
  {
    slug: "wasilla-chapel",
    name: "Community Restoration",
    category: "Community",
    year: "In progress",
    location: "Wasilla, AK",
    summary:
      "Restoring a community hall that a lot of people in town grew up in.",
    situation:
      "Decades of deferred maintenance on a building the community still uses every week. TODO: confirm with client.",
    work:
      "Siding, trim, and roof work done in phases so the hall never had to close. TODO: confirm with client.",
    scope: [
      "Phased exterior restoration",
      "Roof repair",
      "Siding and trim replacement",
      "Accessibility improvements at the entry",
    ],
    after: wasillaAfter,
    gallery: [wasillaAfter],
    photosPending: true,
  },
];

export const projectCategories: ProjectCategory[] = [
  "New Construction",
  "Remodel",
  "Exterior",
  "Commercial",
  "Community",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured);
  return featured.length ? featured : projects.slice(0, 2);
}

export function getBeforeAfterProjects(): Project[] {
  return projects.filter((p) => p.before);
}
