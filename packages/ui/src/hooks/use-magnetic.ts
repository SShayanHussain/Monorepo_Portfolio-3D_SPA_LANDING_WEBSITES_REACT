import { useRef } from "react";
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useHasFinePointer } from "./use-media-query";

interface UseMagneticOptions {
  /** How far the element drifts toward the pointer, as a fraction of cursor offset. */
  strength?: number;
  /** Pointer distance (px) within which the pull engages. */
  radius?: number;
}

interface UseMagneticResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  /** True when magnetism is active (fine pointer + motion allowed). */
  enabled: boolean;
  onPointerMove: (e: React.PointerEvent<T>) => void;
  onPointerLeave: () => void;
}

/**
 * Magnetic-hover math shared by Button and the magnetic targets the custom
 * Cursor snaps to. Disabled on touch devices and under prefers-reduced-motion —
 * both return springs pinned at 0 so consumers can bind unconditionally.
 *
 * Springs (not tweens) here are intentional: this is drag-like pointer
 * tracking, the one place the design system permits spring physics on hover.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  { strength = 0.35, radius = 120 }: UseMagneticOptions = {},
): UseMagneticResult<T> {
  const ref = useRef<T>(null);
  const hasFinePointer = useHasFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const enabled = hasFinePointer && !prefersReducedMotion;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 300, damping: 22, mass: 0.6 });

  const onPointerMove = (e: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!enabled || !el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    if (Math.hypot(dx, dy) > radius) {
      rawX.set(0);
      rawY.set(0);
      return;
    }
    rawX.set(dx * strength);
    rawY.set(dy * strength);
  };

  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return { ref, x, y, enabled, onPointerMove, onPointerLeave };
}
