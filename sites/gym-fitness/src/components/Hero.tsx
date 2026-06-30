import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const KineticParticles = lazy(() => import("@/components/3d/KineticParticles"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={KineticParticles}
        mobileFallback="static" // Fallback to a static rendering path if preferred-reduced-motion is enabled
        activeFrameloop="always" // Must be 'always' for continuous particle animation (wrapper automatically pauses it when out of view)
        className="absolute inset-0 h-full w-full opacity-60"
        camera={{ position: [0, 0, 8], fov: 50 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
          alt: "Gym training action shot",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-surface/90 mix-blend-multiply" />
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center text-center px-6 md:px-8 pointer-events-none">
            
            <h1 className="text-display font-display font-black tracking-tight text-cream uppercase max-w-4xl leading-none drop-shadow-2xl mix-blend-difference">
              {hero.headline}
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl font-body text-cream-20 max-w-2xl leading-relaxed drop-shadow-md">
              {hero.subhead}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row pointer-events-auto">
              <Button href={hero.primaryCta.href} variant="primary" className="bg-brand-500 hover:bg-brand-400 border-none text-surface font-bold uppercase tracking-widest text-sm px-10 py-4 shadow-lg shadow-brand-500/20 transition-all hover:scale-105">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" className="border-brand-500/30 text-brand-500 hover:bg-brand-500/10 font-bold uppercase tracking-widest text-sm px-10 py-4 transition-all">
                {hero.secondaryCta.label}
              </Button>
            </div>
            
          </div>
        }
      />
    </section>
  );
}
