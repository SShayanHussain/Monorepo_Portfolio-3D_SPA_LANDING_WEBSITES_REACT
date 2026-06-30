import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const AscendingNodes = lazy(() => import("@/components/3d/AscendingNodes"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={AscendingNodes}
        mobileFallback="static"
        activeFrameloop="always"
        className="absolute inset-0 h-full w-full pointer-events-auto"
        camera={{ position: [0, 2, 12], fov: 45 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
          alt: "Brightpath Cohort",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-gradient-to-tr from-surface to-brand-50" />
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-6 md:px-8 pointer-events-none">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 font-bold tracking-widest text-sm uppercase mb-8 backdrop-blur-sm">
                Next Cohort: Oct 15th
              </div>
              <h1 className="text-display font-display text-5xl md:text-7xl font-bold tracking-tight text-cream leading-[1.1]">
                {hero.headline}
              </h1>
              
              <p className="mt-8 text-xl font-body text-cream-20 leading-relaxed font-light max-w-2xl bg-surface/80 md:bg-transparent p-4 md:p-0 backdrop-blur-sm md:backdrop-blur-none rounded-lg">
                {hero.subhead}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <Button 
                  href={hero.primaryCta.href} 
                  variant="primary" 
                  className="bg-brand-500 hover:bg-brand-600 text-surface font-display font-semibold tracking-wide px-8 py-4 transition-colors"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button 
                  href={hero.secondaryCta.href} 
                  variant="secondary" 
                  className="bg-surface border-2 border-surface-200 text-cream hover:bg-surface-100 hover:border-surface-200 font-display font-semibold tracking-wide px-8 py-4 transition-colors"
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
