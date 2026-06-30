import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { practiceAreas } = siteContent;

export default function PracticeAreas() {
  return (
    <Section id="practice-areas" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={practiceAreas.eyebrow}
          headline={practiceAreas.headline}
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-200 border border-surface-200">
          {practiceAreas.items.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-surface p-10 lg:p-14 transition-colors hover:bg-surface-50 group"
            >
              <div className="text-brand-500 text-sm font-bold tracking-widest mb-4">
                0{index + 1}
              </div>
              <h3 className="text-3xl font-display text-cream mb-4 group-hover:text-brand-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-cream-20 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
