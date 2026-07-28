import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Logo } from "@/components/brand/Logo";
import { BrandButton } from "@/components/brand/BrandButton";
import { business } from "@/config/business";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-white border-b border-hairline">
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-20 md:h-24">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Houser Construction — home"
          >
            <Logo variant="full" className="h-14 md:h-16 w-auto" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-red" }}
                className="font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
              >
                {item.label}
              </Link>
            ))}


            <a
              href={business.phoneHref}
              className="hidden lg:inline-flex items-center gap-2 font-ui text-[13px] font-bold uppercase tracking-[0.14em] text-navy hover:text-red transition-colors"
              aria-label={`Call ${business.phone}`}
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <BrandButton as="a" href="/#contact" variant="accent" size="sm">
              Contact
            </BrandButton>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm text-navy"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 bg-navy text-white flex flex-col"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between h-20 md:h-24 px-6 border-b border-white/10">
              <Logo variant="full-white" className="h-14 w-auto" />
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav
              className="flex-1 flex flex-col justify-center gap-6 px-8"
              aria-label="Mobile"
            >
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-bold text-white hover:text-red-bright transition-colors"
                >
                  {item.label}
                </Link>

              ))}
              <div className="pt-8 flex flex-col gap-3">
                <BrandButton
                  as="a"
                  href="/#contact"
                  variant="accent"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </BrandButton>
                <a
                  href={business.phoneHref}
                  className="font-ui text-sm font-bold uppercase tracking-[0.14em] text-white/80 hover:text-white inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
