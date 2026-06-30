import { lazy } from "react";
import { Canvas3DWrapper, Button, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

// Code-split: Three.js/R3F only loads when the canvas mounts.
const NodeNetworkScene = lazy(
  () => import("@/components/3d/NodeNetworkScene"),
);

const { hero } = siteContent;

/**
 * Hero — full-viewport, dark, with the 3D node-network behind the copy.
 * mobileFallback='reduced' per the confirmed matrix (gym/saas keep a lighter 3D
 * scene on mobile rather than going fully static).
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface"
    >
      {/* Ambient glow behind the 3D scene. */}
      <div className="hero-glow" />

      <Canvas3DWrapper
        scene={NodeNetworkScene}
        mobileFallback="reduced"
        activeFrameloop="always"
        className="absolute inset-0 h-full"
        camera={{ position: [0, 0, 10], fov: 50 }}
        staticImage={{
          src: "/hero-static.webp",
          alt: "Abstract network of glowing data nodes connected by faint lines — a visualization of real-time analytics",
        }}
        overlay={
          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center md:px-8">
            <SectionHeading
              as="h1"
              align="center"
              eyebrow="Real-time analytics"
              headline={
                <>
                  {hero.headline}
                  <br />
                  <span className="text-gradient">{hero.headlineAccent}</span>
                </>
              }
              subhead={hero.subhead}
              className="max-w-3xl"
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        }
      />
    </section>
  );
}
