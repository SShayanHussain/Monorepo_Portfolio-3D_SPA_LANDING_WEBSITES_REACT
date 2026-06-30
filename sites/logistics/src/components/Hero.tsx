import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const NetworkSim = lazy(() => import("@/components/3d/NetworkSim"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={NetworkSim}
        mobileFallback="reduced"
        activeFrameloop="always"
        className="absolute inset-0 h-full w-full pointer-events-auto"
        camera={{ position: [0, 0, 10], fov: 50 }}
        fallback2D={
          <div className="absolute inset-0 bg-surface-100 flex items-center justify-center">
             <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed745090c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        }
        overlay={
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-8 pointer-events-none">
            
            <div className="max-w-3xl">
              <h1 className="text-display text-6xl md:text-8xl tracking-tight text-textMain uppercase mb-6 drop-shadow-lg">
                {hero.headline}
              </h1>
              
              <p className="text-lg md:text-2xl font-body text-textMuted max-w-2xl leading-relaxed mb-10 drop-shadow-md">
                {hero.subhead}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <Button 
                  href={hero.primaryCta.href} 
                  variant="primary" 
                  className="bg-brand hover:bg-brand-400 text-white font-display text-lg uppercase tracking-wider px-10 py-4 transition-colors"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button 
                  href={hero.secondaryCta.href} 
                  variant="secondary" 
                  className="bg-surface-200/50 backdrop-blur-sm border border-surface-200 text-white hover:bg-surface-200 font-display text-lg uppercase tracking-wider px-10 py-4 transition-colors"
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
