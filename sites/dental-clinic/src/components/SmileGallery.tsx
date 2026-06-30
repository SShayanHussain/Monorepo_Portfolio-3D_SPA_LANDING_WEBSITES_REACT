import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { gallery } = siteContent;

export default function SmileGallery() {
  return (
    <Section id="gallery" className="bg-surface-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            headline={gallery.headline}
            className="text-brand-800"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {gallery.images.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-2xl bg-surface shadow-sm ${index % 2 === 0 ? 'md:mt-8' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
