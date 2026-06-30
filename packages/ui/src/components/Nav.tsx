import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/cn";
import { Button } from "./Button";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavCta {
  label: string;
  href: string;
}

export interface NavProps {
  /** Brand mark — text or a logo node. */
  brand: ReactNode;
  links: readonly NavLink[];
  /**
   * Primary CTA. Per several PRDs this stays visible/sticky in the nav after
   * scroll (restaurant, real-estate, dental, gym, law-firm).
   */
  cta?: NavCta;
  /** Scroll distance (px) at which the bar switches transparent → solid. */
  solidAfter?: number;
  className?: string;
}

/**
 * Sticky header that fades from transparent (over the hero) to a solid,
 * blurred bar after scrolling past `solidAfter`. Collapses to a slide-in drawer
 * on mobile. Semantic `<nav>`; drawer is keyboard-dismissable (Esc) and locks
 * body scroll while open.
 */
export function Nav({
  brand,
  links,
  cta,
  solidAfter = 24,
  className,
}: NavProps) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > solidAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidAfter]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out-expo",
        solid
          ? "border-b border-black/5 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-white/5 dark:bg-neutral-900/80 dark:supports-[backdrop-filter]:bg-neutral-900/60"
          : "bg-transparent",
        className,
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#top" className="text-h3 font-display font-semibold">
          {brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-small font-medium text-neutral-700 transition-colors duration-hover hover:text-[color:var(--brand-accent)] dark:text-neutral-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {cta && (
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          )}
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            className="fixed inset-0 z-50 md:hidden"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-white p-6 shadow-xl dark:bg-neutral-900"
              initial={prefersReducedMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? { x: 0 } : { x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="self-end inline-flex h-10 w-10 items-center justify-center rounded-md"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-h3 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {cta && (
                <Button href={cta.href} variant="primary" className="mt-auto w-full">
                  {cta.label}
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
