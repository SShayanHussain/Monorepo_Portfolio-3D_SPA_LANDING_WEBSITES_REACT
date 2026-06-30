import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { story } = siteContent;

export default function Story() {
  return (
    <Section id="story" className="bg-cream text-surface py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={story.image} 
                alt="Material details" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 md:pr-12">
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-wide mb-10 text-brand-100">
              {story.headline}
            </h2>
            <p className="text-brand-300 font-body text-lg md:text-xl leading-relaxed font-light">
              {story.text}
            </p>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
