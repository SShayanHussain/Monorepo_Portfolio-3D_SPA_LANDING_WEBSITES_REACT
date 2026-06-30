import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useHasFinePointer } from "../hooks/use-media-query";

export interface CursorProps {
  /** Diameter (px) of the dot in its resting state. */
  size?: number;
  /** Diameter (px) when hovering a magnetic/interactive target. */
  hoverSize?: number;
  className?: string;
}

/**
 * Shared custom cursor — a soft dot that trails the pointer and expands over
 * interactive targets marked `data-cursor="magnetic"` (Button sets this). Only
 * renders on devices with a fine, hover-capable pointer and when motion is
 * allowed; on touch or under prefers-reduced-motion it renders nothing and the
 * native cursor is left untouched. Mount once per site, near the app root.
 */
export function Cursor({ size = 12, hoverSize = 40, className }: CursorProps) {
  const hasFinePointer = useHasFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const enabled = hasFinePointer && !prefersReducedMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const cx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const cy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as Element | null)?.closest?.(
        "[data-cursor='magnetic'], a, button",
      );
      setHovering(Boolean(target));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  const diameter = hovering ? hoverSize : size;
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cx,
        y: cy,
        width: diameter,
        height: diameter,
        marginLeft: -diameter / 2,
        marginTop: -diameter / 2,
        borderRadius: "9999px",
        pointerEvents: "none",
        zIndex: 9999,
        backgroundColor: "var(--brand-accent)",
        mixBlendMode: "difference",
      }}
      animate={{ width: diameter, height: diameter, opacity: hovering ? 0.6 : 1 }}
      transition={{ width: { duration: 0.18 }, height: { duration: 0.18 } }}
    />
  );
}
