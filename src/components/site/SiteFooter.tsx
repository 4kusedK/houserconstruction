import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { business } from "@/config/business";

const PAGES = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
] as const;


export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="full-white" className="h-12 w-auto" />
            <p className="mt-6 text-sm text-white/70 max-w-sm leading-relaxed">
              A family owned Alaska general contractor. We build, restore, and
              stand behind our work across {business.serviceArea}.
            </p>

            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-3 text-sm text-white/85 hover:text-red-bright transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center border border-white/20 rounded-sm">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="font-ui text-[12px] font-bold uppercase tracking-[0.14em]">
                {business.instagramHandle}
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-white/60 mb-4">Pages</h3>
            <ul className="space-y-3">
              {PAGES.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-white/85 hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow text-white/60 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={business.phoneHref}
                  className="text-sm text-white/85 hover:text-white transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="text-sm text-white/85 hover:text-white transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>
            <address className="not-italic text-sm text-white/60 leading-relaxed mt-4">
              Based in {business.address.city} · Serving{" "}
              {business.serviceArea} statewide
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
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
