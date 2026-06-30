import { useState } from "react";
import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { gallery } = siteContent;

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 images initially
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, gallery.images.length));
  };

  const visibleImages = gallery.images.slice(0, visibleCount);
  const hasMore = visibleCount < gallery.images.length;

  return (
    <Section id="gallery" className="bg-brand-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          headline={gallery.headline}
          align="center"
          className="text-cream"
        />
        
        {/* Masonry-style Grid */}
        <div className="mt-16 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {visibleImages.map((image, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden rounded-md group">
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button 
              onClick={handleLoadMore}
              variant="secondary"
              className="border-brand-300 text-brand-700 hover:bg-brand-100 rounded-full px-8 font-body tracking-wider uppercase text-sm"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
