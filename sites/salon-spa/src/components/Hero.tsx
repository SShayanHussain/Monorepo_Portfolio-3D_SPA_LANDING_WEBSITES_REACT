import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const GlowingOrbs = lazy(() => import("@/components/3d/GlowingOrbs"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-brand-50">
      <Canvas3DWrapper
        scene={GlowingOrbs}
        mobileFallback="static" // Falls back to gradient/image on mobile
        activeFrameloop="always" // Continuous subtle motion
        className="absolute inset-0 h-full w-full opacity-60 mix-blend-multiply"
        camera={{ position: [0, 0, 12], fov: 40 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop",
          alt: "Soft glowing spa atmosphere",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-brand-200 to-brand-50" />
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-6 md:px-8 pointer-events-none">
            <div className="max-w-2xl">
              <h1 className="text-display font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-cream leading-[1.05]">
                {hero.headline}
              </h1>
              
              <div className="mt-8 mb-10 h-px w-20 bg-brand-500" />
              
              <p className="text-xl font-body text-cream-20 leading-relaxed font-light">
                {hero.subhead}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto">
                <Button 
                  href={hero.primaryCta.href} 
                  variant="primary" 
                  className="bg-brand-500 hover:bg-brand-600 text-surface font-body font-medium tracking-wide px-10 py-4 transition-all rounded-full border-none shadow-sm"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button 
                  href={hero.secondaryCta.href} 
                  variant="secondary" 
                  className="border-cream/20 text-cream hover:bg-cream/5 font-body font-medium tracking-wide px-10 py-4 transition-all rounded-full"
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
