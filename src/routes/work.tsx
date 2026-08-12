import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandButton } from "@/components/brand/BrandButton";
import { Reveal } from "@/components/brand/Reveal";
import { business } from "@/config/business";
import { workProjects, featuredWork } from "@/config/projects";

const SITE_URL = "https://houserconstruction.net";
const OG_IMAGE = `${SITE_URL}${featuredWork.photo.src}`;

const WORK_TITLE = "Selected Work — Houser Construction, Anchorage AK";
const WORK_DESC =
  "Completed Houser Construction projects across Anchorage and Alaska: whole-home remodels, kitchen and bath renovations, and interior restoration. Photos of finished work.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: WORK_TITLE },
      { name: "description", content: WORK_DESC },
      { property: "og:title", content: WORK_TITLE },
      { property: "og:description", content: WORK_DESC },
      { property: "og:url", content: `${SITE_URL}/work` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: WORK_TITLE },
      { name: "twitter:description", content: WORK_DESC },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/work` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Selected work — Houser Construction",
          description: WORK_DESC,
          about: {
            "@type": "GeneralContractor",
            name: business.name,
            telephone: business.phone,
            email: business.email,
            areaServed: business.serviceArea,
          },
        }),
      },
    ],
  }),
  component: WorkPage,
});

type LightboxState = { project: number; photo: number } | null;

function WorkPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((dir: 1 | -1) => {
    setLightbox((cur) => {
      if (!cur) return cur;
      const photos = workProjects[cur.project]!.photos;
      const next = (cur.photo + dir + photos.length) % photos.length;
      return { project: cur.project, photo: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close, step]);

  const active = lightbox
    ? {
        project: workProjects[lightbox.project]!,
        photo: workProjects[lightbox.project]!.photos[lightbox.photo]!,
      }
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <WorkHero />

        {workProjects.map((p, pi) => (
          <section
            key={p.slug}
            id={p.slug}
            className={`relative overflow-hidden py-20 md:py-28 ${
              pi % 2 === 0 ? "bg-background blueprint-grid" : "bg-paper-sunk"
            }`}
          >
            <span
              aria-hidden
              className="ghost-number absolute -top-8 right-4 md:right-10 hidden sm:block"
            >
              {p.n}
            </span>
            <div className="relative mx-auto max-w-[1200px] px-6">
              <Reveal>
                <div className="mb-10 md:mb-14 max-w-2xl">
                  <p className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-silver">
                    {p.category} · {p.location}
                  </p>
                  <h2 className="display-lg text-navy mt-2">{p.name}</h2>
                  <span aria-hidden className="mt-4 block h-[2px] w-10 bg-red" />
                  <p className="mt-5 text-[17px] leading-relaxed text-silver">
                    {p.blurb}
                  </p>
                </div>
              </Reveal>

              <ul
                aria-label={`Photos of the ${p.name} project`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0"
              >
                {p.photos.map((photo, i) => (
                  <li key={photo.src}>
                    <Reveal delay={Math.min(i, 5) * 0.04}>
                      <button
                        type="button"
                        onClick={() => setLightbox({ project: pi, photo: i })}
                        className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                      >
                        <div className="relative overflow-hidden bg-navy photo-frame h-[220px] md:h-[240px]">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </button>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <WorkCTA />
      </main>
      <SiteFooter />

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.project.name} photo viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 md:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 md:left-6 p-3 text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 md:right-6 p-3 text-white/80 hover:text-white"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <figure
            className="max-w-[1100px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.photo.src}
              alt={active.photo.alt}
              className="mx-auto max-h-[76vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              {active.project.name} · {active.project.location}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <span aria-hidden className="navy-depth" />
      <div className="relative mx-auto max-w-[1200px] px-6 pt-36 md:pt-48 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="rule-red" aria-hidden />
          <span className="eyebrow text-white/80">Work</span>
        </div>
        <h1 className="display-xl text-white max-w-3xl">Selected work.</h1>
        <p className="mt-6 max-w-2xl text-[17px] md:text-lg leading-relaxed text-white/70">
          Finished projects photographed on completion. Houser Construction
          works statewide on commercial, real estate, and residential
          projects — the remodels and renovations below are recent Anchorage
          work.
        </p>
      </div>
    </section>
  );
}

function WorkCTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-20 md:py-28">
      <span aria-hidden className="navy-depth" />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="Next" title="Have a project in mind?" onDark>
          Tell us what you are building or restoring and we will walk the site
          with you.
        </SectionHeading>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <BrandButton
            as="a"
            href={business.emailHref}
            variant="accent"
            size="lg"
          >
            Email us <ArrowRight className="h-4 w-4" />
          </BrandButton>
          <BrandButton
            as="a"
            href={business.phoneHref}
            variant="outline-light"
            size="lg"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </BrandButton>
        </div>

      </div>
    </section>
  );
}
