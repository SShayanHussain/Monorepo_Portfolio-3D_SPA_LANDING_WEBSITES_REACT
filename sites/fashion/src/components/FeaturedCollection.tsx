import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { collection } = siteContent;

export default function FeaturedCollection() {
  return (
    <Section id="collection" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="flex justify-between items-end mb-16 border-b border-surface-200 pb-8">
          <h2 className="text-3xl md:text-4xl font-display text-cream tracking-wide">{collection.headline}</h2>
          <a href="#" className="font-body text-sm tracking-[0.2em] uppercase text-cream hover:text-brand-500 transition-colors">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {collection.items.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image container with aspect ratio */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-100">
                {/* Primary Image */}
                <img 
                  src={item.image1} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                {/* Hover Reveal Image */}
                <img 
                  src={item.image2} 
                  alt={`${item.name} detail`} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <h3 className="font-display text-lg text-cream">{item.name}</h3>
                <span className="font-body text-sm text-brand-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
