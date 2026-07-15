// Houser Construction — real business info from client intake.
// Email domain pending (no custom domain yet). Update when finalized.
export const business = {
  name: "Houser Construction",
  legalName: "Houser Construction LLC",
  tagline: "Built to last.",
  secondaryTagline: "The old is gone, the new has come.",
  description:
    "Houser Construction is a licensed Alaska general contractor. We handle new builds, remodels, and development work for homeowners, businesses, and public agencies across the state.",
  phone: "(907) 310-6828",
  phoneHref: "tel:+19073106828",
  // TODO: swap to hello@houserconstruction.com once the domain is live.
  email: "houserconstruction@gmail.com",
  emailHref: "mailto:houserconstruction@gmail.com",
  address: {
    city: "Alaska",
    region: "AK",
    country: "US",
  },
  serviceArea: "Alaska",
  regNumber: "Licensed · Bonded · Insured",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "AK", label: "Statewide Coverage" },
  { value: "3", label: "Sectors Served" },
  { value: "100%", label: "Licensed · Bonded · Insured" },
] as const;


export const services = [
  {
    slug: "new-construction",
    title: "New Construction",
    blurb:
      "Ground-up homes and commercial buildings. One crew from permit through final walkthrough, so nothing falls between trades.",
  },
  {
    slug: "remodeling",
    title: "Remodeling & Renovation",
    blurb:
      "Whole-home renovations, additions, and tenant improvements. We work in older buildings without cutting corners on what's behind the walls.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    blurb:
      "Retail, office, and mixed-use builds. Delivered on schedule and ready for inspection the first time through.",
  },
  {
    slug: "government",
    title: "Government Contracting",
    blurb:
      "Public-sector work with the paperwork, compliance, and reporting these jobs require. Federal, state, and municipal contracts welcome.",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Subdivisions",
    blurb:
      "Development work ranging from single-property flips to full residential subdivisions. Before-and-afters you can walk through.",
  },
  {
    slug: "decks-fences",
    title: "Decks, Fences & Exteriors",
    blurb:
      "Exterior carpentry built for Alaskan weather. Decks, fences, and outdoor structures that still look right after a few winters.",
  },
] as const;

export const projects = [
  {
    n: "01",
    name: "Residential Remodel",
    category: "Before & After",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "02",
    name: "Custom Deck Build",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "03",
    name: "Cedar Fence Install",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1590725175735-df0f6f7dfd1c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "04",
    name: "Real Estate Renovation",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "05",
    name: "Strip Mall Development",
    category: "Commercial · Coming Soon",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "06",
    name: "Government Contract",
    category: "Public Sector · Coming Soon",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "We walk the site with you, talk through what you want, and note the real constraints: schedule, budget, code, and Alaska weather.",
  },
  {
    n: "02",
    title: "Estimate & Design",
    body: "You get a fixed scope, clear drawings, and a realistic timeline before anyone breaks ground.",
  },
  {
    n: "03",
    title: "Build",
    body: "Licensed crews on site with weekly updates, so you always know where the job stands.",
  },
  {
    n: "04",
    title: "Closeout",
    body: "We finish the punch list, hand over the as-builts, and walk the project with you before we call it done.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Clear communication from day one, and the finished remodel looks better than we imagined. Highly recommend.",
    name: "Residential Client",
    role: "Anchorage, AK",
  },
  {
    quote:
      "Deck turned out solid and built to last through Alaska winters. Fair pricing and an honest timeline.",
    name: "Homeowner",
    role: "Mat-Su Valley",
  },
  {
    quote:
      "Professional, on time, and cleaned up after themselves every day. We'll be calling them for the next project.",
    name: "Property Owner",
    role: "Alaska",
  },
] as const;

export const faqs = [
  {
    q: "What areas does Houser Construction serve?",
    a: "We work across Alaska. Residential, commercial, and public projects, statewide.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. Houser Construction is fully licensed in Alaska, bonded, and carries general liability and workers' compensation coverage.",
  },
  {
    q: "What types of projects do you take on?",
    a: "New construction and remodels for homes, businesses, and government agencies. We also handle exterior work like decks and fences, plus real estate development including subdivisions.",
  },
  {
    q: "How do I get a quote?",
    a: "Send a note through the contact form or call the office. We'll schedule a site visit and follow up with a written estimate.",
  },
  {
    q: "Do you handle real estate projects?",
    a: "Yes. We take on renovation and development work, from single-property flips to full subdivisions.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every Houser project carries a one-year workmanship warranty. Manufacturer warranties on installed products and systems pass through to you.",
  },
] as const;
