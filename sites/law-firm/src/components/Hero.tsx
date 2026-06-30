import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const AbstractScale = lazy(() => import("@/components/3d/AbstractScale"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      <Canvas3DWrapper
        scene={AbstractScale}
        mobileFallback="static" // Allows falling back to the static image on mobile
        activeFrameloop="demand" // Will pause when out of viewport, as per PRD
        className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
        camera={{ position: [0, 2, 10], fov: 45 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop",
          alt: "Abstract architectural pillars",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-cream/90" />
        }
        overlay={
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 py-32 md:py-0 pointer-events-none">
            <div className="max-w-3xl">
              <h1 className="text-display font-display text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-surface leading-[1.1]">
                {hero.headline}
              </h1>
              
              <div className="mt-8 mb-12 h-px w-24 bg-brand-500" />
              
              <p className="text-xl font-body text-surface-200 leading-relaxed font-light">
                {hero.subhead}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto">
                <Button 
                  href={hero.primaryCta.href} 
                  variant="primary" 
                  className="bg-brand-500 hover:bg-brand-400 text-surface font-body font-semibold tracking-wide px-8 py-4 transition-all rounded-sm border-none shadow-sm"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button 
                  href={hero.secondaryCta.href} 
                  variant="secondary" 
                  className="border-surface/20 text-surface hover:bg-surface/10 font-body font-medium tracking-wide px-8 py-4 transition-all rounded-sm"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        }
      />
    </section>
  );
}

