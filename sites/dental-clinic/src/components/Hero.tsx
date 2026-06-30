import { lazy } from "react";
import { Canvas3DWrapper, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const WellnessBlob = lazy(() => import("@/components/3d/WellnessBlob"));

const { hero } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-surface">
      <Canvas3DWrapper
        scene={WellnessBlob}
        mobileFallback="static"
        activeFrameloop="always"
        className="absolute inset-0 h-full"
        camera={{ position: [0, 0, 5], fov: 45 }}
        staticImage={{
          src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
          alt: "Abstract soft medical aesthetic",
        }}
        fallback2D={
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-surface to-brand-50 opacity-80 mix-blend-multiply" />
        }
        overlay={
          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-2 md:px-8 h-full pt-24 md:pt-0">
            {/* Very soft white gradient overlay on the text side */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-surface/20 -z-10 md:w-2/3" />
            
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-display font-display font-extrabold tracking-tight text-brand-700 drop-shadow-sm">
                {hero.headline}
              </h1>
              
              <p className="mt-6 text-h3 font-body text-cream-20 max-w-xl leading-relaxed">
                {hero.subhead}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row pointer-events-auto">
                <Button href={hero.primaryCta.href} variant="primary" className="bg-brand-500 hover:bg-brand-600 border-brand-500 text-surface font-semibold shadow-sm">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" className="border-brand-500/20 text-brand-700 hover:bg-brand-50 font-semibold shadow-sm">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            {/* Empty right column for the 3D Wellness Blob */}
            <div className="hidden md:block"></div>
          </div>
        }
      />
    </section>
  );
}
