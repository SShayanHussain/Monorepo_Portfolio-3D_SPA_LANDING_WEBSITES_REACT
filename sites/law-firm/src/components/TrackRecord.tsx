import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const { trackRecord } = siteContent;

// Simple animated counter component
function AnimatedCounter({ value, inView }: { value: string, inView: boolean }) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    // Very simple count up over 2 seconds
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * numValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, numValue]);

  // If it's not a number we can parse, just return it immediately
  if (isNaN(numValue)) return <>{value}</>;

  return <>{count}{suffix}</>;
}

export default function TrackRecord() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="track-record" className="bg-cream py-24 md:py-32 border-y border-brand-500/20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={trackRecord.eyebrow}
          headline={trackRecord.headline}
          align="center"
          className="text-surface"
        />
        
        <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-surface-20/20">
          {trackRecord.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display text-brand-400 mb-4 font-light text-gradient-gold">
                <AnimatedCounter value={stat.value} inView={inView} />
              </div>
              <div className="text-surface-100 text-sm md:text-base font-body tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
