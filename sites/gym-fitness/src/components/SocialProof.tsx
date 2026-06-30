import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { socialProof } = siteContent;

export default function SocialProof() {
  return (
    <Section id="results" className="bg-surface py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow={socialProof.eyebrow}
            headline={socialProof.headline}
            className="text-cream"
          />
          
          <div className="flex flex-wrap gap-8 md:gap-16">
            {socialProof.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-black text-brand-400 text-gradient-neon leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-cream-20 font-bold uppercase tracking-widest text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialProof.images.map((image, index) => (
            <div 
              key={index} 
              className={`aspect-square overflow-hidden bg-surface-100 ${
                index % 2 !== 0 ? "md:translate-y-8" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
