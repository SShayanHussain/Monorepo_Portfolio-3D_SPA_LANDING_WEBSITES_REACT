import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { services } = siteContent;

export default function Services() {
  return (
    <Section id="services" className="bg-surface-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="mb-16">
          <h2 className="text-display text-4xl md:text-5xl uppercase tracking-wide text-textMain">
            {services.headline}
          </h2>
          <div className="w-24 h-1 bg-brand mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.items.map((svc, idx) => (
            <div key={idx} className="group bg-surface p-10 border border-surface-200 hover:border-brand-400 transition-colors">
              <div className="w-12 h-12 mb-6 text-brand">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} />
                </svg>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-textMain mb-4">{svc.title}</h3>
              <p className="font-body text-textMuted leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
