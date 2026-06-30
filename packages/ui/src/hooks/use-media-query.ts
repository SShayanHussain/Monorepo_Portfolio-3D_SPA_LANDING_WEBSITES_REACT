import { useEffect, useState } from "react";

/**
 * Subscribe to a CSS media query. SSR/first-paint safe: returns `false` until
 * mounted, then reflects the real match. Used for the `<md` viewport gate in
 * Canvas3DWrapper and the `(hover: hover) and (pointer: fine)` touch check.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** True below Tailwind's `md` (768px) breakpoint — the 3D mobile-fallback boundary. */
export function useIsBelowMd(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/**
 * True only on devices with a precise hover-capable pointer (mouse/trackpad).
 * Cursor-follow and magnetic effects must be disabled when this is false.
 */
export function useHasFinePointer(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
