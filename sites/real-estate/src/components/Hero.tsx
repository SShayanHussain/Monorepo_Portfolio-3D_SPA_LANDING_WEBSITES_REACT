import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const AbstractHouse = lazy(() => import("@/components/3d/AbstractHouse"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={AbstractHouse}
        mobileFallback="static"
        activeFrameloop="always" // Needs continuous for parallax
        className="absolute inset-0 h-full w-full pointer-events-auto"
        camera={{ position: [5, 3, 8], fov: 45 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
          alt: "Meridian Properties Architecture",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-surface-100" />
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-6 md:px-8 pointer-events-none">
            <div className="max-w-2xl bg-surface/80 md:bg-transparent p-6 md:p-0 backdrop-blur-sm md:backdrop-blur-none rounded-lg">
              <h1 className="text-display font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream leading-[1.05]">
                {hero.headline}
              </h1>
              
              <div className="mt-8 mb-10 h-1 w-20 bg-brand-500" />
              
              <p className="text-xl font-body text-cream-20 leading-relaxed font-light max-w-lg">
                {hero.subhead}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <Button 
                  href={hero.primaryCta.href} 
                  variant="primary" 
                  className="bg-cream hover:bg-brand-900 text-surface font-display font-semibold tracking-wide px-8 py-4 transition-colors"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button 
                  href={hero.secondaryCta.href} 
                  variant="secondary" 
                  className="bg-transparent border border-cream/20 text-cream hover:bg-surface-100 font-display font-semibold tracking-wide px-8 py-4 transition-colors"
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
