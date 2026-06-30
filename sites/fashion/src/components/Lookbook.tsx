import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { lookbook } = siteContent;

export default function Lookbook() {
  return (
    <Section id="lookbook" className="bg-surface py-24">
      {/* Editorial gallery with alternating layouts */}
      <div className="max-w-[1400px] mx-auto">
        
        {/* Full bleed image */}
        <div className="mb-24 md:mb-40">
          <img 
            src={lookbook.images[0]} 
            alt="Look 1" 
            className="w-full h-[60vh] md:h-[90vh] object-cover"
            loading="lazy"
          />
          <div className="text-right px-6 md:px-12 mt-4 font-body text-xs tracking-widest text-brand-400 uppercase">Look 01</div>
        </div>

        {/* Side-by-side offset */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 px-6 md:px-12 mb-24 md:mb-40 items-center">
          <div className="w-full md:w-5/12">
            <img 
              src={lookbook.images[1]} 
              alt="Look 2" 
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="mt-4 font-body text-xs tracking-widest text-brand-400 uppercase">Look 02</div>
          </div>
          <div className="w-full md:w-7/12 md:mt-48">
            <img 
              src={lookbook.images[2]} 
              alt="Look 3" 
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="mt-4 font-body text-xs tracking-widest text-brand-400 uppercase">Look 03</div>
          </div>
        </div>

        {/* Centered focal image */}
        <div className="max-w-4xl mx-auto px-6 mb-24 md:mb-32">
          <img 
            src={lookbook.images[3]} 
            alt="Look 4" 
            className="w-full aspect-[4/5] md:aspect-[16/9] object-cover"
            loading="lazy"
          />
          <div className="text-center mt-4 font-body text-xs tracking-widest text-brand-400 uppercase">Look 04</div>
        </div>

      </div>
    </Section>
  );
}
