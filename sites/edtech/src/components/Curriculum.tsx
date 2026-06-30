import { useState } from "react";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { curriculum } = siteContent;

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Section id="curriculum" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow={curriculum.eyebrow}
          headline={curriculum.headline}
          align="left"
          className="text-cream"
        />
        
        <div className="mt-16 space-y-4">
          {curriculum.modules.map((module, index) => (
            <div 
              key={index} 
              className={`border-l-4 transition-colors duration-300 bg-surface-50 ${openIndex === index ? 'border-brand-500 shadow-md' : 'border-surface-200 hover:border-brand-300'}`}
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div>
                  <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-1 block">{module.time}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream">{module.title}</h3>
                </div>
                <div className={`transform transition-transform duration-300 text-brand-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-cream-20 font-body leading-relaxed text-lg pt-4 border-t border-surface-200">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
