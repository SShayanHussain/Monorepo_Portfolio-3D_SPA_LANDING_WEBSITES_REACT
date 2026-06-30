import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="results" className="bg-surface-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          className="text-cream"
        />
        
        <p className="mt-6 max-w-2xl text-cream-20 font-body text-sm italic opacity-80">
          * {testimonials.disclaimer}
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.cases.map((caseItem, index) => (
            <div 
              key={index} 
              className="bg-surface border-t-2 border-brand-500 p-10 shadow-sm"
            >
              <h3 className="text-xl font-display font-medium text-cream mb-2">
                {caseItem.title}
              </h3>
              <div className="text-brand-500 font-body font-bold uppercase tracking-wider text-sm mb-6">
                Outcome: {caseItem.outcome}
              </div>
              <p className="text-cream-20 font-body leading-relaxed text-sm">
                "{caseItem.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
