import {
  Suspense,
  useRef,
  type ComponentProps,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react";
import { Canvas } from "@react-three/fiber";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "../lib/cn";
import { useIsBelowMd } from "../hooks/use-media-query";

/**
 * What renders below the `md` (768px) breakpoint. This is set explicitly
 * per-site (never inferred from a boolean) — see .claude/memory.md:
 *   'static'  → Canvas never mounts; a raster hero image is shown.
 *               (restaurant, dental, salon, law-firm, home-services)
 *   'reduced' → a lighter 3D scene mounts (reduced instance/poly count).
 *               (gym, saas)
 *   'none'    → no Canvas at all; the composition is recreated in 2D CSS/SVG.
 *               (real-estate)
 */
export type MobileFallback = "static" | "reduced" | "none";

/** Quality tier handed to the scene so it can scale geometry/instance counts. */
export type SceneQuality = "full" | "reduced";

/** Props every lazy 3D scene receives from the wrapper. */
export interface Scene3DProps {
  quality: SceneQuality;
}

export interface Canvas3DWrapperProps {
  /**
   * The 3D scene, code-split with `React.lazy()` so the Three.js bundle is a
   * lazy chunk that never blocks first paint (CLAUDE.md performance rule).
   */
  scene: LazyExoticComponent<ComponentType<Scene3DProps>>;
  /** Per-site mobile behavior. Required — forces an explicit choice per site. */
  mobileFallback: MobileFallback;
  /**
   * Raster hero image. Used for `mobileFallback: 'static'` AND as the
   * prefers-reduced-motion fallback on every site, so provide it whenever a
   * meaningful static frame exists.
   */
  staticImage?: { src: string; alt: string };
  /**
   * Hand-built 2D (CSS/SVG) recreation for `mobileFallback: 'none'`. Must be
   * static-safe (no autoplay motion) so it can double as the reduced-motion
   * fallback when no `staticImage` is supplied.
   */
  fallback2D?: ReactNode;
  /**
   * Real DOM content layered above the visual (headline, CTAs). Rendered in
   * EVERY branch — canvas, static, none, skeleton — so meaningful text is never
   * trapped inside the WebGL canvas and never vanishes in a fallback
   * (design-system a11y rule).
   */
  overlay?: ReactNode;
  /** Skeleton shown while the lazy 3D chunk downloads. */
  skeleton?: ReactNode;
  /**
   * R3F frameloop mode while the scene is in view. Out of view it is forced to
   * `'never'` so the render loop pauses (CLAUDE.md viewport-pause rule).
   * Use `'always'` for continuously-animating heroes (gym particles, saas
   * node-network), `'demand'` for near-static scenes (law-firm).
   */
  activeFrameloop?: "always" | "demand";
  camera?: ComponentProps<typeof Canvas>["camera"];
  className?: string;
}

const DefaultSkeleton = () => (
  <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-neutral-100 to-neutral-200" />
);

/**
 * Wraps a lazy-loaded R3F scene with the portfolio's three guarantees:
 *
 *  1. prefers-reduced-motion is a HARD GATE evaluated FIRST and always wins —
 *     the Canvas never mounts and the static frame is shown, regardless of
 *     viewport or `mobileFallback`.
 *  2. Below `md`, behavior branches on `mobileFallback` ('static' | 'reduced'
 *     | 'none'). Reduced-motion and viewport are INDEPENDENT axes.
 *  3. The Canvas lazy-loads (code-split), pauses its render loop when scrolled
 *     out of view, shows a skeleton while loading, and is `aria-hidden` with
 *     the meaningful content living in the `overlay` DOM layer.
 */
export function Canvas3DWrapper({
  scene: Scene,
  mobileFallback,
  staticImage,
  fallback2D,
  overlay,
  skeleton,
  activeFrameloop = "always",
  camera,
  className,
}: Canvas3DWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const isBelowMd = useIsBelowMd();
  const containerRef = useRef<HTMLDivElement>(null);
  // 200px margin so the loop resumes just before the hero scrolls back in.
  const inView = useInView(containerRef, { margin: "200px" });

  const renderStatic = (): ReactNode => {
    if (staticImage) {
      return (
        <img
          src={staticImage.src}
          alt={staticImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          // Hero image is the LCP element — eager + high priority, no lazy.
          loading="eager"
          {...{ fetchpriority: "high" } as any}
        />
      );
    }
    // Graceful degradation: a static-safe 2D recreation can stand in.
    if (fallback2D) return fallback2D;
    // Vite-safe dev guard (no @types/node in this lib).
    if ((import.meta as { env?: { DEV?: boolean } }).env?.DEV) {
      console.warn(
        "[Canvas3DWrapper] reduced-motion/static path has no `staticImage` or `fallback2D` to show.",
      );
    }
    return <DefaultSkeleton />;
  };

  const renderCanvas = (quality: SceneQuality): ReactNode => (
    <Canvas
      className="inset-0 h-full w-full"
      style={{ position: "absolute" }}
      // aria-hidden: the canvas is decorative; real content is in `overlay`.
      aria-hidden="true"
      // Loop pauses entirely when the hero is off-screen.
      frameloop={inView ? activeFrameloop : "never"}
      // Cap DPR so high-density mobile screens don't blow the fragment budget;
      // the reduced tier caps lower still.
      dpr={quality === "reduced" ? [1, 1.5] : [1, 2]}
      gl={{ antialias: quality === "full", powerPreference: "high-performance" }}
      camera={camera}
    >
      {/* No Suspense boundary here on purpose: the lazy-chunk AND in-scene
          loader suspensions propagate up to the outer skeleton boundary below,
          so the skeleton actually shows while the 3D chunk downloads. */}
      <Scene quality={quality} />
    </Canvas>
  );

  // ── Gating order (the contract) ────────────────────────────────────────
  let visual: ReactNode;
  if (prefersReducedMotion) {
    // 1. HARD GATE — motion preference wins over viewport and mobileFallback.
    visual = renderStatic();
  } else if (isBelowMd) {
    // 2. Viewport gate — branch on the explicit per-site mode.
    switch (mobileFallback) {
      case "static":
        visual = renderStatic();
        break;
      case "none":
        visual = fallback2D ?? renderStatic();
        break;
      case "reduced":
        visual = renderCanvas("reduced");
        break;
    }
  } else {
    // 3. Desktop / ≥md — full-quality scene.
    visual = renderCanvas("full");
  }

  // Whether a live Canvas is mounted in this branch (controls the skeleton).
  const canvasMounted =
    !prefersReducedMotion && (!isBelowMd || mobileFallback === "reduced");

  return (
    <div ref={containerRef} className={cn("relative isolate overflow-hidden", className)}>
      {/* Skeleton only matters while a lazy Canvas chunk is resolving. */}
      {canvasMounted && (
        <Suspense fallback={skeleton ?? <DefaultSkeleton />}>{visual}</Suspense>
      )}
      {!canvasMounted && visual}

      {/* Real DOM content, present in every branch. */}
      {overlay != null && (
        <div className="relative z-10 flex h-full w-full flex-col">{overlay}</div>
      )}
    </div>
  );
}
