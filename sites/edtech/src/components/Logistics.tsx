import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { logistics } = siteContent;

export default function Logistics() {
  return (
    <Section id="logistics" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={logistics.eyebrow}
          headline={logistics.headline}
          align="center"
          className="text-cream mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logistics.items.map((item, index) => (
            <div key={index} className="bg-surface-50 p-8 rounded-2xl border border-surface-200 shadow-sm text-center">
              <h3 className="text-lg font-display font-bold text-brand-600 mb-3">{item.title}</h3>
              <p className="text-cream-20 font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
