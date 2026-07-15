// TODO: swap placeholders with real Houser Construction details.
export const business = {
  name: "Houser Construction",
  legalName: "Houser Construction LLC",
  tagline: "Built to last.",
  description:
    "Houser Construction is a general contractor building durable, well-crafted commercial and residential projects. Design-build, remodeling, and construction management delivered on time and on budget.",
  phone: "(907) 000-0000",
  phoneHref: "tel:+19070000000",
  email: "hello@houserconstruction.com",
  emailHref: "mailto:hello@houserconstruction.com",
  address: {
    street: "1234 Example Ave",
    city: "Anchorage",
    region: "AK",
    postal: "99501",
    country: "US",
  },
  serviceArea: "Anchorage and South-Central Alaska",
  hours: "Mon–Fri · 8am–5pm",
  regNumber: "[AK Reg. # ____]",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

export const stats = [
  { value: "25+", label: "Years Building" },
  { value: "180+", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Completion" },
  { value: "0", label: "Recordable Incidents 2025" },
] as const;

export const services = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    blurb:
      "Full-scope construction management from mobilization to closeout, with a single point of accountability.",
  },
  {
    slug: "design-build",
    title: "Design-Build",
    blurb:
      "Architecture and construction under one contract — faster schedules, tighter budgets, fewer surprises.",
  },
  {
    slug: "remodeling",
    title: "Remodeling & Renovation",
    blurb:
      "Whole-home and tenant-improvement renovations executed with respect for the existing structure.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    blurb:
      "Retail, office, and light-industrial builds delivered to spec, on schedule, and inspection-ready.",
  },
  {
    slug: "residential",
    title: "Residential",
    blurb:
      "Custom homes and additions built to withstand Alaskan winters — thoughtful details, tight envelopes.",
  },
  {
    slug: "project-management",
    title: "Project Management",
    blurb:
      "Owner's-rep and PM services for clients who bring their own trades and need experienced oversight.",
  },
] as const;

export const projects = [
  {
    n: "01",
    name: "Cook Inlet Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "02",
    name: "Midtown Office Fit-Out",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "03",
    name: "Turnagain Renovation",
    category: "Remodel",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "04",
    name: "Spenard Warehouse",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1590725175735-df0f6f7dfd1c?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "05",
    name: "Hillside Custom Home",
    category: "Design-Build",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    n: "06",
    name: "Downtown Retail Build",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "We meet on site, listen to your goals, and map the constraints — schedule, budget, code, and climate.",
  },
  {
    n: "02",
    title: "Estimate & Design",
    body: "Fixed-scope pricing, clear drawings, and a realistic timeline before a single nail is driven.",
  },
  {
    n: "03",
    title: "Build",
    body: "Licensed crews, weekly reporting, and disciplined site management from foundation to finish.",
  },
  {
    n: "04",
    title: "Closeout",
    body: "Punch-list to zero, documented as-builts, and a warranty walkthrough you'll actually want to attend.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Houser delivered on every commitment — schedule, budget, quality. They ran the site like professionals should.",
    name: "M. Callahan",
    role: "Owner, Midtown Office",
  },
  {
    quote:
      "Best remodel experience we've had. Clear communication, real craftsmanship, and no last-minute surprises.",
    name: "J. & R. Whitaker",
    role: "Turnagain Homeowners",
  },
  {
    quote:
      "They caught issues our architect missed and solved them without drama. We'll build with Houser again.",
    name: "S. Novak",
    role: "Developer, Spenard Retail",
  },
] as const;

export const faqs = [
  {
    q: "What areas does Houser Construction serve?",
    a: "We build across Anchorage and South-Central Alaska, including the Mat-Su Valley and the Kenai Peninsula on select projects.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. Houser Construction is fully licensed in Alaska, bonded, and carries general liability and workers' compensation insurance. License number available on request.",
  },
  {
    q: "What types of projects do you take on?",
    a: "General contracting, design-build, commercial fit-outs, custom residential construction, and full-scope remodels. If it needs to last a generation, we're a fit.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us a note through the contact form or call the office. We'll set a site visit within a week and follow up with a written estimate.",
  },
  {
    q: "How long does a typical project take?",
    a: "Remodels run 8–16 weeks. Custom homes and commercial builds range from six months to over a year depending on scope, permitting, and season.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every Houser project carries a one-year workmanship warranty, with manufacturer warranties passed through on installed products and systems.",
  },
] as const;
