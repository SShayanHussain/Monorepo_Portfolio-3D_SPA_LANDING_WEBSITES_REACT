import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const FabricSim = lazy(() => import("@/components/3d/FabricSim"));

const { hero, brand } = siteContent;

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={FabricSim}
        mobileFallback="static"
        activeFrameloop="always"
        className="absolute inset-0 h-full w-full pointer-events-auto"
        camera={{ position: [0, 0, 8], fov: 45 }}
        staticImage={{
          // Macro fabric texture for mobile fallback to ensure immediate load
          src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
          alt: "Silk Texture",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-surface" />
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 md:px-8 pointer-events-none text-center">
            
            <h1 className="text-display font-display text-7xl md:text-9xl font-medium tracking-wide text-cream leading-none mix-blend-difference drop-shadow-md">
              {brand}
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl font-display text-cream italic tracking-wide mix-blend-difference drop-shadow-sm">
              {hero.headline}
            </p>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 pointer-events-auto">
              <Button 
                href={hero.primaryCta.href} 
                variant="primary" 
                className="bg-cream hover:bg-cream-10 text-surface font-body font-normal tracking-[0.2em] uppercase px-10 py-4 transition-colors text-sm"
              >
                {hero.primaryCta.label}
              </Button>
              <Button 
                href={hero.secondaryCta.href} 
                variant="secondary" 
                className="bg-transparent border border-cream text-cream hover:bg-cream/5 font-body font-normal tracking-[0.2em] uppercase px-10 py-4 transition-colors text-sm"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
            
          </div>
        }
      />
    </section>
  );
}
