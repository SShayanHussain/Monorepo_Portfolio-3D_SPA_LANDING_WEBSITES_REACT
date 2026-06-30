import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { services } = siteContent;

export default function Services() {
  return (
    <Section id="services" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          headline={services.headline}
          align="left"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((service, index) => (
            <div key={index} className="bg-surface-50 border border-surface-200 p-8 hover:border-brand-500 transition-colors group">
              <div className="w-16 h-16 bg-cream text-surface rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-500 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-cream mb-4">{service.name}</h3>
              <p className="text-cream-20 font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
