import { forwardRef, type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "../lib/cn";

export interface SectionProps {
  children: ReactNode;
  /** Semantic element to render. Defaults to `<section>`. */
  as?: ElementType;
  className?: string;
  /** Inner max-width container. Set false for full-bleed sections (e.g. hero). */
  contained?: boolean;
  /** Disable the scroll-reveal wrapper (e.g. for an always-visible hero). */
  reveal?: boolean;
  id?: string;
  "aria-label"?: string;
}

// Entrance: fade + 20px translate-Y, easeOutExpo — the design-system default.
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Page-section wrapper: consistent vertical padding (64px mobile / 96px desktop)
 * and a scroll-reveal that animates ONCE at ~18% visibility and never
 * re-triggers on scroll-back. Under prefers-reduced-motion the reveal collapses
 * to an instant state change (no translate, no fade-in delay).
 */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
    as = "section",
    className,
    contained = true,
    reveal = true,
    id,
    "aria-label": ariaLabel,
  },
  ref,
) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  const inner = contained ? (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
  ) : (
    children
  );

  if (!reveal || prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag ref={ref} id={id} aria-label={ariaLabel} className={cn("py-16 md:py-24", className)}>
        {inner}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={cn("py-16 md:py-24", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealVariants}
    >
      {inner}
    </MotionTag>
  );
});
