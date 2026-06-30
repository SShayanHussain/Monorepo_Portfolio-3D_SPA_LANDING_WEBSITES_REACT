// Shared component library for the 8-site portfolio.
// Build order (per CLAUDE.md / dependency depth): Section → SectionHeading →
// Button → Nav → Canvas3DWrapper → Cursor.

export { Section, type SectionProps } from "./components/Section";
export {
  SectionHeading,
  type SectionHeadingProps,
} from "./components/SectionHeading";
export { Button, type ButtonProps } from "./components/Button";
export { Nav, type NavProps, type NavLink, type NavCta } from "./components/Nav";
export {
  Canvas3DWrapper,
  type Canvas3DWrapperProps,
  type MobileFallback,
  type SceneQuality,
  type Scene3DProps,
} from "./components/Canvas3DWrapper";
export { Cursor, type CursorProps } from "./components/Cursor";

// Hooks & utilities sites reuse.
export { cn } from "./lib/cn";
export {
  useMediaQuery,
  useIsBelowMd,
  useHasFinePointer,
} from "./hooks/use-media-query";
export { useMagnetic } from "./hooks/use-magnetic";
