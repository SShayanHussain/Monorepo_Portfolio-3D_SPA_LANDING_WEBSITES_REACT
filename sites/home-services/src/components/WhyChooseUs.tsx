import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { whyChooseUs } = siteContent;

export default function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-cream text-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading
              eyebrow={whyChooseUs.eyebrow}
              headline={whyChooseUs.headline}
              align="left"
              className="text-surface"
            />
            
            <div className="mt-12 bg-surface/5 border border-surface/10 p-8 rounded-lg">
              <h4 className="text-brand-500 font-display text-xl font-bold mb-6">Our Credentials</h4>
              <ul className="space-y-4 font-body text-surface-200">
                {whyChooseUs.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 content-center">
            {whyChooseUs.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start border-l-2 border-brand-500 pl-6 py-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-surface mb-2">{stat.value}</div>
                <div className="text-sm font-body text-surface-200 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
