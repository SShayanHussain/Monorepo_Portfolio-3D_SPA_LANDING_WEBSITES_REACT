import { lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import HeroFallback2D from "@/components/HeroFallback2D";

// Code-split the 3D scene so the Three.js chunk stays out of first paint.
const HouseAssemblyScene = lazy(
  () => import("@/components/3d/HouseAssemblyScene"),
);

const { hero } = siteContent;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fade = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-canvas"
    >
      <Canvas3DWrapper
        scene={HouseAssemblyScene}
        // real-estate is the 'none' tier: below md the Canvas never mounts and
        // the SVG recreation is shown instead (see .claude/memory.md).
        mobileFallback="none"
        fallback2D={<HeroFallback2D />}
        activeFrameloop="always"
        className="absolute inset-0 h-full w-full"
        camera={{ position: [3.2, 2.4, 6.2], fov: 42 }}
        overlay={
          <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center px-6 pt-24 md:grid-cols-2 md:px-8 md:pt-0">
            <div className="flex flex-col items-start text-left">
              <motion.span
                {...fade}
                className="text-small font-medium uppercase tracking-[0.16em] text-brand-600"
              >
                {hero.eyebrow}
              </motion.span>

              <motion.h1
                {...fade}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }
                }
                className="mt-5 max-w-xl text-display font-display font-semibold leading-[1.05] text-ink"
              >
                {hero.headline}
              </motion.h1>

              <motion.p
                {...fade}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }
                }
                className="mt-6 max-w-md text-body text-ink-muted"
              >
                {hero.subhead}
              </motion.p>

              <motion.div
                {...fade}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }
                }
                className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Button href={hero.primaryCta.href} variant="primary">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </motion.div>
            </div>

            {/* Right column intentionally empty — the 3D/SVG composition sits
                behind it on the right half at md+. */}
            <div aria-hidden="true" />
          </div>
        }
      />

      {/* Scroll affordance */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="text-small uppercase tracking-[0.2em] text-ink-muted/60">
          Scroll
        </span>
      </div>
    </section>
  );
}
