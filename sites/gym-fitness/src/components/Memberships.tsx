import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { memberships } = siteContent;

export default function Memberships() {
  return (
    <Section id="memberships" className="bg-surface-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={memberships.eyebrow}
          headline={memberships.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 items-center">
          {memberships.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 md:p-10 bg-surface border ${
                plan.popular 
                  ? 'border-brand-500 shadow-[0_0_30px_rgba(101,230,0,0.15)] scale-100 md:scale-105 z-10' 
                  : 'border-surface-200 opacity-90 hover:opacity-100 transition-opacity'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-surface font-bold px-4 py-1 uppercase tracking-widest text-xs">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold text-cream uppercase mb-2">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-8 border-b border-surface-200 pb-8">
                <span className="text-5xl font-display font-black text-brand-400">{plan.price}</span>
                <span className="text-cream-20 font-bold uppercase tracking-wide">{plan.period}</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream-10 font-medium">
                    <svg className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                href="#book" 
                variant={plan.popular ? "primary" : "secondary"} 
                className={`w-full justify-center py-4 font-bold uppercase tracking-widest text-sm ${
                  plan.popular ? "bg-brand-500 hover:bg-brand-400 text-surface border-none" : "border-surface-200 text-cream hover:bg-surface-200"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
