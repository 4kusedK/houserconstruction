import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Logo } from "@/components/brand/Logo";
import { BrandButton } from "@/components/brand/BrandButton";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const isLight = scrolled || !overHero;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isLight
            ? "bg-white/95 backdrop-blur border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Houser Construction — home"
          >
            {scrolled ? (
              <Logo variant="symbol" className="h-9 w-auto" />
            ) : (
              <Logo
                variant={overHero ? "full-white" : "full"}
                className="h-10 md:h-11 w-auto"
              />
            )}
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-ui text-[13px] font-bold uppercase tracking-[0.14em] transition-colors",
                  isLight
                    ? "text-navy hover:text-red"
                    : "text-white/90 hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
            <BrandButton
              as="a"
              href="/#contact"
              variant={isLight ? "accent" : "accent"}
              size="sm"
            >
              Get a quote
            </BrandButton>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm",
              isLight ? "text-navy" : "text-white",
            )}
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
            <div className="flex items-center justify-between h-16 md:h-20 px-6 border-b border-white/10">
              <Logo variant="full-white" className="h-10 w-auto" />
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
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-bold text-white hover:text-red-bright transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-8">
                <BrandButton
                  as="a"
                  href="/#contact"
                  variant="accent"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  Get a quote
                </BrandButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
