import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { process } = siteContent;

export default function Process() {
  return (
    <Section id="process" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={process.eyebrow}
          headline={process.headline}
          align="center"
          className="text-cream"
        />
        
        {/* Horizontal Stepper */}
        <div className="mt-20 overflow-x-auto hide-scrollbar pb-8">
          <div className="flex flex-nowrap min-w-max md:min-w-0 md:grid md:grid-cols-4 gap-8">
            {process.steps.map((step, index) => (
              <div key={index} className="w-72 md:w-auto flex-shrink-0 relative">
                {/* Connecting Line */}
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-[-2rem] h-px bg-surface-200 z-0" />
                )}
                
                <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center font-bold text-lg mb-8 relative z-10 shadow-sm">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-display font-bold text-cream mb-4">{step.title.split('. ')[1]}</h3>
                <p className="text-cream-20 font-body text-sm leading-relaxed pr-6 md:pr-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
