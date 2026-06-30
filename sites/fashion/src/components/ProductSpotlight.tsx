import { Section, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { spotlight } = siteContent;

export default function ProductSpotlight() {
  return (
    <Section className="bg-surface py-24 md:py-40 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 order-2 lg:order-1">
            <p className="text-brand-500 font-body text-xs tracking-[0.2em] uppercase mb-6">{spotlight.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-display text-cream mb-4">{spotlight.headline}</h2>
            <p className="text-brand-600 font-body mb-8">{spotlight.price}</p>
            
            <p className="text-cream-20 font-body leading-relaxed mb-10">
              {spotlight.description}
            </p>
            
            <ul className="space-y-2 mb-10 border-l border-brand-300 pl-4">
              {spotlight.details.map((detail, index) => (
                <li key={index} className="text-sm font-body text-brand-600">{detail}</li>
              ))}
            </ul>
            
            <Button 
              href="#" 
              variant="primary"
              className="w-full bg-cream hover:bg-cream-10 text-surface font-body tracking-widest uppercase text-xs py-4 transition-colors"
            >
              Add to Cart
            </Button>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2">
            <img 
              src={spotlight.image} 
              alt={spotlight.headline} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
        </div>
        
      </div>
    </Section>
  );
}
