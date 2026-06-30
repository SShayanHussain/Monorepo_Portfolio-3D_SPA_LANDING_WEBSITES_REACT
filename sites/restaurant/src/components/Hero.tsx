import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const DishScene = lazy(() => import("@/components/3d/DishScene"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={DishScene}
        mobileFallback="static" // As per PRD and memory.md
        activeFrameloop="always"
        className="absolute inset-0 h-full"
        camera={{ position: [0, 2, 8], fov: 45 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
          alt: "Plated food at Ember & Salt",
        }}
        overlay={
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-2 md:px-8 h-full pt-24 md:pt-0">
            {/* Dark gradient overlay for text readability on static fallback */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-surface/40 -z-10 md:w-2/3" />
            
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-display font-display font-bold text-brand-400 drop-shadow-lg">
                {hero.headline}
              </h1>
              
              <p className="mt-6 text-h3 font-display text-cream/90 max-w-xl leading-relaxed drop-shadow-md">
                {hero.subhead}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row pointer-events-auto">
                <Button href={hero.primaryCta.href} variant="primary" className="bg-brand-500 hover:bg-brand-600 border-brand-500 text-cream">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" className="border-cream/20 text-cream hover:bg-cream/10">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            {/* Empty right column for the 3D Scene */}
            <div className="hidden md:block"></div>
          </div>
        }
      />
    </section>
  );
}
