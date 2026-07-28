import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/brand/Reveal";
import { NumberedSection } from "@/components/brand/NumberedSection";
import { ProjectCard } from "@/components/brand/ProjectCard";
import { ContactSection } from "@/components/brand/ContactSection";
import { business } from "@/config/business";
import { projects, projectCategories } from "@/config/projects";

const TITLE = "Our Work — Houser Construction Projects Across Alaska";
const DESCRIPTION =
  "Homes, remodels, exteriors, and community buildings by Houser Construction. Browse completed Alaska projects with before and after photos.";

const ASPECTS = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[1/1]"];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://houserconstruction.net/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://houserconstruction.net/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="pt-40 md:pt-52 pb-14 bg-background">
          <div className="mx-auto max-w-[1200px] px-6">
            <NumberedSection number="01" eyebrow="Our work" />
            <h1 className="display-hero text-navy">
              Places
              <br />
              we've built.
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-charcoal leading-relaxed">
              Every project below is somewhere in Alaska, and most of them were
              somebody's referral. Names are places, not service categories.
            </p>

            <div
              className="mt-12 flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {["All", ...projectCategories].map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={
                      "font-ui text-[12px] font-bold uppercase tracking-[0.14em] px-4 py-2.5 border transition-colors " +
                      (isActive
                        ? "bg-navy text-white border-navy"
                        : "bg-transparent text-navy border-hairline hover:border-navy")
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32 bg-background">
          <div className="mx-auto max-w-[1200px] px-6">
            {filtered.length === 0 ? (
              <p className="text-charcoal/70">
                Nothing in this category yet — check back soon.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {filtered.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                    <div className={i % 4 === 3 ? "md:pt-16" : undefined}>
                      <ProjectCard
                        project={p}
                        aspect={ASPECTS[i % ASPECTS.length]}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-paper-sunk border-y border-hairline py-16">
          <div className="mx-auto max-w-[1200px] px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="eyebrow">Fresh off the truck</div>
              <p className="display-md text-navy mt-3">
                See what we're working on this week.
              </p>
            </div>
            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
            >
              <Instagram className="h-5 w-5" aria-hidden />
              {business.instagramHandle}
            </a>
          </div>
        </section>

        <ContactSection number="02" />
      </main>
      <SiteFooter />
    </div>
  );
}
