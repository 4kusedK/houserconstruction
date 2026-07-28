import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Phone, Mail } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandButton } from "@/components/brand/BrandButton";
import { Reveal } from "@/components/brand/Reveal";
const HANDSHAKE_IMG =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=75";
import {
  business,
  stats,
  projects,
  testimonials,
  faqs,
} from "@/config/business";
import { useEffect, useState } from "react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=75";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houser Construction — Trusted to Serve | Alaska General Contractor" },
      {
        name: "description",
        content:
          "Houser Construction is a family owned, licensed Alaska general contractor. New construction, remodels, and real estate development, built to serve Alaskan communities with excellence.",
      },
      { property: "og:title", content: "Houser Construction — Trusted to Serve | Alaska General Contractor" },
      {
        property: "og:description",
        content:
          "Houser Construction is a family owned, licensed Alaska general contractor. New construction, remodels, and real estate development, built to serve Alaskan communities with excellence.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: business.name,
          description: business.description,
          telephone: business.phone,
          email: business.email,
          areaServed: business.serviceArea,
          address: {
            "@type": "PostalAddress",
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            addressCountry: business.address.country,
          },
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Positioning />
        <StatBar />
        <ProjectsGallery />
        <Testimonials />
        <Certifications />
        <FAQ />
        <ClosingBand />
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep text-white"
    >
      <img
        src={HERO_IMG}
        alt="Modern architectural build at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/95" />
      <div
        aria-hidden
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-4 [writing-mode:vertical-rl] rotate-180"
      >
        <span className="h-16 w-[2px] bg-red" />
        <span className="font-ui text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
          Family Owned · Alaska
        </span>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 pt-44 md:pt-56 pb-24 min-h-[100svh] flex flex-col justify-end">

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-red" aria-hidden />
            <span className="eyebrow text-white/80">
              Alaska General Contractor · Family Owned
            </span>
          </div>
          <h1 className="display-2xl text-white">
            Trusted to serve
            <br />
            <span className="text-white/85">with excellence.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/85 leading-[1.6]">
            A family owned Alaska contractor building new homes, restoring the
            ones already standing, and developing property across the state.
          </p>
          <span className="mt-10 block h-[2px] w-16 bg-red" aria-hidden />
        </div>
      </div>
      <a
        href="/#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white motion-safe:animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function Positioning() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 md:py-48 bg-sand blueprint-grid"
    >
      <span
        aria-hidden
        className="ghost-number absolute -top-6 right-4 md:right-10 hidden sm:block"
      >
        01
      </span>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="rule-red" aria-hidden />
            <span className="eyebrow">
              <span className="text-navy">01</span>
              <span className="mx-2 opacity-60">—</span>Our philosophy
            </span>
          </div>
          <h2 className="display-lg text-navy max-w-3xl">
            A handshake still means something.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-x-16 gap-y-16 items-start">
          <div className="md:col-span-6">
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden aspect-[4/5] photo-frame">
                <img
                  src={HANDSHAKE_IMG}
                  alt="A Houser Construction contractor shaking hands with a homeowner"
                  loading="lazy"
                  width={1200}
                  height={1408}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="photo-warm absolute inset-0" />
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-1 w-24 bg-red"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-6">
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-red pl-6">
                <p className="display-md text-navy">
                  The person who walks your site is the person who answers the
                  phone.
                </p>
                <p className="mt-4 font-ui text-[12px] font-bold uppercase tracking-[0.2em] text-timber">
                  — David Houser
                </p>
              </blockquote>
              <p className="mt-12 text-lg text-charcoal leading-[1.6]">
                Houser Construction is family owned and family run. When we tell
                you how a job will go, that is how it goes.
              </p>
              <p className="mt-8 text-lg text-charcoal/80 leading-[1.6]">
                We kept the company small on purpose. Whoever stands behind the
                finished work still lives in the community it was built for.
              </p>
              <Link
                to="/about"
                className="mt-12 inline-flex items-center gap-2 font-ui text-[12px] font-bold uppercase tracking-[0.2em] text-navy hover:text-timber transition-colors link-underline"
              >
                Meet the family <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


function StatBar() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white blueprint-grid-dark">
      <span aria-hidden className="absolute top-0 left-0 h-1 w-40 bg-red" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:divide-x md:divide-white/10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className={i === 0 ? "md:pr-8" : "md:px-8"}>
              <span className="rule-red mb-5" aria-hidden />
              <div className="display-lg text-white">{s.value}</div>
              <div className="eyebrow mt-4 text-white/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}



function ProjectsGallery() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-28 md:py-40 bg-background"
    >
      <span
        aria-hidden
        className="ghost-number absolute -top-8 left-4 md:left-10 hidden sm:block"
      >
        02
      </span>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <SectionHeading eyebrow="Gallery" number="02" title="Our work." />
          </div>
        </Reveal>


        <ul
          aria-label="Photo gallery of Houser Construction work"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 list-none p-0"
        >
          {projects.map((p, i) => (
            <li key={p.n}>
              <Reveal delay={(i % 3) * 0.05}>
                <div className="group relative overflow-hidden aspect-[4/3] bg-navy photo-frame shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <img
                    src={p.image}
                    alt={`${p.name} by Houser Construction`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-1 w-0 bg-red transition-all duration-500 group-hover:w-16"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-timber">
                    {p.category}
                  </p>
                  <h3 className="font-display text-lg font-bold text-navy mt-1">
                    {p.name}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}



function initials(name: string) {
  return name
    .replace(/[&.]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40 bg-navy text-white blueprint-grid-dark">
      <span
        aria-hidden
        className="ghost-number-light absolute -top-8 right-4 md:right-10 hidden sm:block"
      >
        03
      </span>
      <div className="relative mx-auto max-w-[1200px] px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Client voice"
            number="03"
            title="Owners who've been through it."
            onDark
          />
        </Reveal>
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="border-t border-white/15 pt-8 h-full flex flex-col">
                <span className="h-[2px] w-8 bg-red block mb-6" aria-hidden />
                <blockquote className="font-display text-xl leading-snug text-white flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-mid border border-white/15 font-display text-sm font-bold text-white tabular-nums"
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="font-ui font-bold text-white text-sm uppercase tracking-[0.14em]">
                      {t.name}
                    </div>
                    <div className="text-white/60 text-sm mt-1">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const items = [
    "AK Licensed Contractor",
    "Bonded",
    "Insured",
    "Family Owned & Operated",
  ];

  return (
    <section className="py-16 md:py-24 bg-sand-sunk border-y border-hairline">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="eyebrow">Credentials</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {items.map((c) => (
              <span
                key={c}
                className="font-ui text-xs font-bold uppercase tracking-[0.18em] text-silver"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-28 md:py-40 bg-sand">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="Answers"
              number="04"
              title="Frequently asked."
            />
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group py-6" open={i === 0}>
                  <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                    <h3 className="font-display text-lg md:text-xl font-bold text-navy pr-4">
                      {f.q}
                    </h3>
                    <span
                      className="mt-1 shrink-0 h-6 w-6 border-2 border-navy flex items-center justify-center text-navy transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-charcoal/85 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <span
        aria-hidden
        className="absolute top-0 left-0 h-1 w-40 md:w-64 bg-red"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <h2 className="display-lg text-white">
            Building better communities.
          </h2>
          <p className="mt-8 text-lg text-white/80 leading-relaxed max-w-2xl">
            Every structure we put up outlasts the contract that paid for it.
            Houses become homes, empty lots become neighborhoods, and worn out
            buildings get another life. That is the part of this work that
            matters to our family.
          </p>
          <p className="mt-12 display-md text-white/90">
            The old is gone. The new has come.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* Editorial red rule accent, top-right */}
      <span
        aria-hidden
        className="absolute top-0 right-0 h-1 w-40 md:w-64 bg-red"
      />
      <span
        aria-hidden
        className="absolute top-0 right-0 h-40 md:h-64 w-1 bg-red"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:py-40 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-red" aria-hidden />
            <span className="eyebrow text-white/70">
              <span className="text-white">05</span>
              <span className="mx-2 opacity-60">—</span>Start the conversation
            </span>
          </div>
          <h2 className="display-lg text-white max-w-2xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-6 text-white/80 max-w-xl text-lg leading-relaxed">
            Whether you have drawings in hand or just an idea of what you want
            built, reach out. We are happy to talk it through.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="bg-navy-mid/60 border border-white/10 p-6 md:p-8 flex flex-col gap-3">
            <BrandButton
              as="a"
              href={business.emailHref}
              variant="accent"
              size="lg"
              block
            >
              Email us <ArrowRight className="h-4 w-4" />
            </BrandButton>

            <BrandButton
              as="a"
              href={business.phoneHref}
              variant="outline-light"
              size="lg"
              block
            >
              <Phone className="h-4 w-4" /> {business.phone}
            </BrandButton>

            <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-sm">
              <a
                href={business.emailHref}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-red" />
                {business.email}
              </a>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-red" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling ~80% of viewport height, hide when at contact section
      const contact = document.getElementById("contact");
      const past = window.scrollY > window.innerHeight * 0.8;
      let atContact = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        atContact = rect.top < window.innerHeight * 0.6;
      }
      setShow(past && !atContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="bg-navy border-t border-white/10 px-4 py-3">
        <a
          href="/#contact"
          className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 bg-red text-white font-ui font-bold text-[12px] uppercase tracking-[0.14em] rounded-[4px]"
        >
          Contact <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
