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
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-surface-200" />
              )}
              
              <div className="w-16 h-16 bg-surface-100 text-brand-500 font-display text-2xl font-bold flex items-center justify-center rounded-full mb-8 relative z-10 border-4 border-surface group-hover:border-brand-100 transition-colors">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-display font-bold text-cream mb-4">{step.title}</h3>
              <p className="text-cream-20 font-body leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
