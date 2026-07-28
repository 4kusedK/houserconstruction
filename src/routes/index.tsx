import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/brand/Reveal";
import { NumberedSection } from "@/components/brand/NumberedSection";
import { BeforeAfter } from "@/components/brand/BeforeAfter";
import { ProjectCard } from "@/components/brand/ProjectCard";
import { ContactSection } from "@/components/brand/ContactSection";
import handshakeImg from "@/assets/promise-handshake.jpg";
import { business } from "@/config/business";
import {
  getBeforeAfterProjects,
  getFeaturedProjects,
} from "@/config/projects";

const HERO_IMG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=75";

const TITLE = "Houser Construction — Trusted to Serve | Alaska General Contractor";
const DESCRIPTION =
  "Houser Construction is a family owned, licensed Alaska general contractor. New builds, remodels, and community restoration across the state.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://houserconstruction.net/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://houserconstruction.net/" }],
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
          url: "https://houserconstruction.net/",
          address: {
            "@type": "PostalAddress",
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            addressCountry: business.address.country,
          },
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
        <FeaturedStrip />
        <OurWord />
        <WhatWeveBuilt />
        <ClosingBand />
        <ContactSection number="03" />
      </main>
      <SiteFooter />
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
        alt="Crew working on a steel-framed building at a construction site"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/95" />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-40 md:pt-56 pb-28 min-h-[100svh] flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[2px] w-10 bg-red" aria-hidden />
          <span className="eyebrow text-white/80">
            Alaska General Contractor · Family Owned
          </span>
        </div>
        <h1 className="display-hero text-white">
          Trusted
          <br />
          to serve
          <br />
          <span className="text-white/85">with excellence.</span>
        </h1>
        <p className="mt-10 max-w-xl text-lg text-white/85 leading-relaxed">
          A family owned Alaska contractor building new homes, restoring the
          ones already standing, and serving the communities they sit in.
        </p>
      </div>
      <a
        href="#featured"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white motion-safe:animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function FeaturedStrip() {
  const featured = getBeforeAfterProjects()[0];
  if (!featured) return null;

  return (
    <section id="featured" className="bg-paper-sunk py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="full-bleed md:full-bleed">
          <BeforeAfter
            before={featured.before}
            after={featured.after}
            name={featured.name}
            aspect="aspect-[3/2] md:aspect-[16/10]"
          />
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="eyebrow">
              {featured.category}
              <span className="mx-2 opacity-40">·</span>
              {featured.location}
            </div>
            <h2 className="display-md text-navy mt-3">{featured.name}</h2>
          </div>
          <Link
            to="/work/$slug"
            params={{ slug: featured.slug }}
            className="inline-flex items-center gap-2 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
          >
            See the project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OurWord() {
  return (
    <section id="our-word" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <NumberedSection
              number="01"
              eyebrow="Our word"
              title="A handshake still means something."
            />
            <p className="mt-8 text-lg text-charcoal leading-relaxed">
              Houser Construction is family owned and family run. When we tell
              you how a job will go, that is how it goes. No layers of managers
              between you and the people holding the tools.
            </p>
            <p className="mt-6 text-lg text-charcoal/85 leading-relaxed">
              We kept the company small on purpose. The person who walks your
              site is the person who answers the phone and still lives in the
              community the work was built for.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
            >
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={handshakeImg}
                alt="A Houser Construction contractor shaking hands with a homeowner at an Alaska job site"
                loading="lazy"
                width={1200}
                height={1408}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-1 w-24 bg-red"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatWeveBuilt() {
  const featured = getFeaturedProjects().slice(0, 2);

  return (
    <section id="work" className="py-24 md:py-32 bg-paper-sunk">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <NumberedSection
              number="02"
              eyebrow="What we've built"
              title="Places, not packages."
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors shrink-0"
            >
              All work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {featured[0] ? (
            <div className="md:col-span-7">
              <Reveal>
                <ProjectCard project={featured[0]} aspect="aspect-[4/3]" />
              </Reveal>
            </div>
          ) : null}
          {featured[1] ? (
            <div className="md:col-span-5 md:pt-20">
              <Reveal delay={0.08}>
                <ProjectCard project={featured[1]} aspect="aspect-[3/4]" />
              </Reveal>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ClosingBand() {
  return (
    <section className="bg-navy-deep text-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <span className="h-[2px] w-12 bg-red block mb-8" aria-hidden />
          <p className="display-lg text-white max-w-3xl">
            Building better communities, one project at a time.
          </p>
          <p className="mt-8 font-display text-xl text-white/60">
            {business.secondaryTagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
