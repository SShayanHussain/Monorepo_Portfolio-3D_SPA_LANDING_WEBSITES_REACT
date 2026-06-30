import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "../lib/cn";

export interface StatCountUpProps {
  /** Final value to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to render. Default 0. */
  decimals?: number;
  /** Count duration in seconds. Default 1.6. */
  duration?: number;
  /** Thousands grouping (1,200). Default true. */
  group?: boolean;
  className?: string;
}

function formatNumber(n: number, decimals: number, group: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!group) return fixed;
  const [int, frac] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac ? `${grouped}.${frac}` : grouped;
}

/**
 * Animated count-up that fires once when scrolled into view (real-estate &
 * law-firm stat rows, gym social proof). Respects prefers-reduced-motion by
 * rendering the final value instantly — no animation. Render the number only;
 * pair it with a label in the consuming layout.
 */
export function StatCountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  group = true,
  className,
}: StatCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() =>
    formatNumber(prefersReducedMotion ? value : 0, decimals, group),
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(formatNumber(value, decimals, group));
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(formatNumber(v, decimals, group)),
    });
    return () => controls.stop();
  }, [inView, value, prefersReducedMotion, duration, decimals, group]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
