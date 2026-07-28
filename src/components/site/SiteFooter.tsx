import { Logo } from "@/components/brand/Logo";
import { business } from "@/config/business";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const COLS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#work" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: business.phone, href: business.phoneHref },
      { label: business.email, href: business.emailHref },
    ],
  },
];

// Only rendered when a real profile URL exists in business.socials.
const SOCIALS = [
  { key: "instagram", label: "Instagram", Icon: Instagram, href: business.socials.instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook, href: business.socials.facebook },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin, href: business.socials.linkedin },
].filter((s) => s.href && s.href !== "#");

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="full-white" className="h-12 w-auto" />
            <p className="mt-6 text-sm text-white/70 max-w-sm leading-relaxed">
              A family owned Alaska general contractor. We build, restore, and
              stand behind our work anywhere in the state.
            </p>


            {SOCIALS.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map(({ key, label, Icon, href }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 hover:bg-red hover:border-timber hover:text-white transition-colors rounded-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {COLS.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <h3 className="eyebrow text-white/70 mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/85 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4 md:col-start-9">
            <h3 className="eyebrow text-white/70 mb-4">Where we work</h3>
            <address className="not-italic text-sm text-white/85 leading-relaxed">
              Alaska statewide — no fixed base
              <br />
              <span className="text-white/60">
                Residential and commercial work in Anchorage, Eagle River,
                Palmer, Wasilla and the Mat-Su Valley, Girdwood, and wherever
                else the contract takes us.
              </span>
            </address>
          </div>


        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="mb-6">
            <p className="eyebrow text-white/50 mb-4">Licensed &amp; Insured</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                "Licensed AK Contractor",
                "Bonded",
                "Insured",
                "Family Owned & Operated",
              ].map((c) => (

                <span
                  key={c}
                  className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 border border-white/15 px-3 py-2 rounded-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
            <div>
              © {new Date().getFullYear()} {business.legalName}. All rights
              reserved. · {business.regNumber}
            </div>
            {/* Privacy / Terms links intentionally removed — see TODO-LEGAL.md.
                Restore them the moment the site collects data or adds analytics. */}
          </div>
        </div>
      </div>
    </footer>
  );
}
