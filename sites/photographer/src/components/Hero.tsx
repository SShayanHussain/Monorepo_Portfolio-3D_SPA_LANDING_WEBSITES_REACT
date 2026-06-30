import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/data/content";
import { Button } from "@portfolio/ui";

const { hero, brand } = siteContent;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tie parallax strictly to scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background image zooms in slightly as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Background image moves down slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Text moves up slightly as you scroll down (creates depth against the slow background)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100svh] overflow-hidden bg-surface">
      
      {/* Background layer */}
      <motion.div 
        className="absolute inset-0 origin-center"
        style={{ scale, y }}
      >
        <img 
          src={hero.image} 
          alt="Hero" 
          className="w-full h-full object-cover"
          loading="eager"
          {...{ fetchpriority: "high" } as any}
        />
        {/* Subtle overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-surface/20 mix-blend-multiply" />
      </motion.div>
      
      {/* Foreground Content */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ y: textY, opacity }}
      >
        <h1 className="text-display text-5xl sm:text-7xl md:text-9xl tracking-tight text-surface mb-6 drop-shadow-sm font-medium">
          {brand}
        </h1>
        <p className="text-body text-surface text-lg sm:text-xl md:text-2xl tracking-wide font-light max-w-2xl drop-shadow-sm">
          {hero.headline}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <Button 
            href={hero.primaryCta.href} 
            variant="primary" 
            className="bg-surface text-brand hover:bg-surface-100 font-body uppercase tracking-widest text-xs px-10 py-4 transition-colors"
          >
            {hero.primaryCta.label}
          </Button>
          <Button 
            href={hero.secondaryCta.href} 
            variant="secondary" 
            className="bg-transparent border border-surface text-surface hover:bg-surface/10 font-body uppercase tracking-widest text-xs px-10 py-4 transition-colors"
          >
            {hero.secondaryCta.label}
          </Button>
        </div>
      </motion.div>
      
    </section>
  );
}
