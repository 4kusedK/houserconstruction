// Real Houser Construction project photography (client supplied).
// Photos live on the Lovable CDN; these imports are small JSON pointers.
// Naming rule: no street names or locations — projects are labeled by scope.

import w12 from "@/assets/projects/westland-12.jpg.asset.json";
import w13 from "@/assets/projects/westland-13.jpg.asset.json";
import w17 from "@/assets/projects/westland-17.jpg.asset.json";
import w19 from "@/assets/projects/westland-19.jpg.asset.json";
import w21 from "@/assets/projects/westland-21.jpg.asset.json";
import w23 from "@/assets/projects/westland-23.jpg.asset.json";
import w30 from "@/assets/projects/westland-30.jpg.asset.json";
import w34 from "@/assets/projects/westland-34.jpg.asset.json";
import w38 from "@/assets/projects/westland-38.jpg.asset.json";
import w39 from "@/assets/projects/westland-39.jpg.asset.json";
import w48 from "@/assets/projects/westland-48.jpg.asset.json";
import w49 from "@/assets/projects/westland-49.jpg.asset.json";
import w5 from "@/assets/projects/westland-5.jpg.asset.json";
import w50 from "@/assets/projects/westland-50.jpg.asset.json";
import w6 from "@/assets/projects/westland-6.jpg.asset.json";
import w7 from "@/assets/projects/westland-7.jpg.asset.json";
import w8 from "@/assets/projects/westland-8.jpg.asset.json";

import s17 from "@/assets/projects/w77th-17.jpg.asset.json";
import s20 from "@/assets/projects/w77th-20.jpg.asset.json";
import s23 from "@/assets/projects/w77th-23.jpg.asset.json";
import s32 from "@/assets/projects/w77th-32.jpg.asset.json";
import s42 from "@/assets/projects/w77th-42.jpg.asset.json";
import s44 from "@/assets/projects/w77th-44.jpg.asset.json";

import t16 from "@/assets/projects/w30th-16.jpg.asset.json";
import t21 from "@/assets/projects/w30th-21.jpg.asset.json";
import t22 from "@/assets/projects/w30th-22.jpg.asset.json";
import t31 from "@/assets/projects/w30th-31.jpg.asset.json";

export interface ProjectPhoto {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  n: string;
  name: string;
  blurb: string;
  photos: ProjectPhoto[];
}

export const workProjects: Project[] = [
  {
    slug: "project-01",
    n: "01",
    name: "Whole-home remodel",
    blurb:
      "A full interior rebuild: new kitchen, refinished stone fireplace wall, four reworked bathrooms, and new flooring and lighting throughout.",
    photos: [
      {
        src: w21.url,
        alt: "Renovated open living room with a stone fireplace and new wide-plank flooring",
      },
      {
        src: w12.url,
        alt: "New kitchen island with granite counters and pendant lighting",
      },
      {
        src: w13.url,
        alt: "Remodeled kitchen with hickory cabinets, granite counters and a black composite sink",
      },
      {
        src: w17.url,
        alt: "Kitchen range wall with stainless appliances and custom cabinetry",
      },
      {
        src: w19.url,
        alt: "Vaulted living space opened up to the entry with a stone fireplace surround",
      },
      {
        src: w23.url,
        alt: "Living room looking through to the remodeled kitchen",
      },
      {
        src: w8.url,
        alt: "Finished dining area with new window trim and flooring",
      },
      {
        src: w5.url,
        alt: "Entry hallway with a new front door and wide-plank flooring",
      },
      {
        src: w30.url,
        alt: "Upper landing with a rebuilt stair railing and new carpet",
      },
      {
        src: w38.url,
        alt: "Finished primary bedroom with new carpet and built-in shelving",
      },
      {
        src: w39.url,
        alt: "Second bedroom finished with new carpet and paint",
      },
      {
        src: w34.url,
        alt: "Guest bathroom with a wood vanity, round mirror and marble-look tub surround",
      },
      {
        src: w48.url,
        alt: "Double-vanity bathroom with a skylight and tiled tub surround",
      },
      {
        src: w49.url,
        alt: "Double vanity beside a tiled walk-in shower",
      },
      {
        src: w50.url,
        alt: "Tiled walk-in shower with a mosaic accent band",
      },
      {
        src: w7.url,
        alt: "Half bath with a wood vanity and matte black fixtures",
      },
      {
        src: w6.url,
        alt: "Hallway leading to a finished bathroom",
      },
    ],
  },
  {
    slug: "project-02",
    n: "02",
    name: "Kitchen & bath renovation",
    blurb:
      "New kitchen with butcher-block counters and white cabinetry, plus three bathrooms rebuilt from the studs out.",
    photos: [
      {
        src: s17.url,
        alt: "Renovated kitchen with white cabinets and butcher-block counters opening to the living room",
      },
      {
        src: s20.url,
        alt: "Kitchen with a gas range, stainless appliances and butcher-block counters",
      },
      {
        src: s23.url,
        alt: "Bathroom with a marble-look tub surround and a white vanity",
      },
      {
        src: s32.url,
        alt: "Tiled curbless walk-in shower in a remodeled bathroom",
      },
      {
        src: s42.url,
        alt: "Double-vanity bathroom with gray cabinetry and open shelving",
      },
      {
        src: s44.url,
        alt: "Double vanity with framed mirrors and new lighting",
      },
    ],
  },
  {
    slug: "project-03",
    n: "03",
    name: "Interior renovation",
    blurb:
      "Opened-up main floor with a cedar accent wall and fireplace, a new hickory kitchen, and a refinished bathroom.",
    photos: [
      {
        src: t16.url,
        alt: "Living room with a cedar accent wall and a fireplace insert",
      },
      {
        src: t21.url,
        alt: "New kitchen with hickory cabinets, granite counters and stainless appliances",
      },
      {
        src: t22.url,
        alt: "Open living area looking through to the renovated kitchen",
      },
      {
        src: t31.url,
        alt: "Refinished bathroom with a wood vanity and new lighting",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// HOME PAGE PICKS — edit these to change which photos show on the home page.
// Each entry names the project slug and the photo file to use.
// ---------------------------------------------------------------------------

// Big featured image at the top of the home gallery.
export const featuredWork = {
  project: workProjects[0]!,
  photo: {
    src: w19.url,
    alt: "Open living room with a stone fireplace and new wide-plank flooring",
  },
};

// The two smaller tiles below the featured image.
export const homeTiles: { slug: string; name: string; photo: ProjectPhoto }[] = [
  {
    slug: "project-01",
    name: "Kitchen renovation",
    photo: {
      src: w17.url,
      alt: "Renovated kitchen with hickory cabinets, granite counters and a black sink",
    },
  },
  {
    slug: "project-02",
    name: "Bathroom renovation",
    photo: {
      src: s42.url,
      alt: "Double-vanity bathroom with gray cabinetry and framed mirrors",
    },
  },
];

