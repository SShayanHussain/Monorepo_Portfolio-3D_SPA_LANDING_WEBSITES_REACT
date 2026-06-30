import { useState } from "react";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { faq } = siteContent;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow={faq.eyebrow}
          headline={faq.headline}
          align="center"
          className="text-surface"
        />
        
        <div className="mt-16 space-y-4">
          {faq.questions.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-cream-20"
            >
              <button
                className="w-full text-left py-6 flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-display font-medium text-surface group-hover:text-brand-400 transition-colors">{item.q}</h3>
                <div className={`transform transition-transform duration-300 text-brand-400 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-surface-200 font-body leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
