import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { gallery } = siteContent;

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-surface-100 py-24 md:py-32 overflow-hidden">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        headline={<span className="font-display">{gallery.headline}</span>}
        align="center"
        className="mb-16 md:mb-24"
      />

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-8" style={{ scrollbarWidth: 'none' }}>
        <div className="flex gap-4 md:gap-8 w-max">
          {gallery.images.map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-[4/5] w-[70vw] max-w-sm shrink-0 overflow-hidden rounded-sm md:w-[30vw] snap-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
