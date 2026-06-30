import { Section, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { pricing } = siteContent;

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-4">{pricing.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">{pricing.headline}</h2>
        </div>
        
        <div className="bg-surface-50 rounded-3xl border-2 border-brand-200 overflow-hidden shadow-xl">
          <div className="bg-brand-500 text-surface p-10 text-center">
            <h3 className="text-2xl font-display font-bold mb-2">Complete Cohort Access</h3>
            <p className="opacity-90 font-body">Everything you need to level up.</p>
            <div className="mt-8">
              <span className="text-6xl font-display font-bold">{pricing.price}</span>
            </div>
            <p className="mt-2 text-brand-100 font-body text-sm">{pricing.paymentPlan}</p>
          </div>
          
          <div className="p-10 md:p-12">
            <ul className="space-y-6 mb-10">
              {pricing.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 text-cream-20 font-body">
                  <svg className="w-6 h-6 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              href="#" 
              variant="primary"
              className="w-full bg-brand-500 hover:bg-brand-600 text-surface font-display font-bold text-lg py-5 rounded-xl transition-colors"
            >
              {pricing.cta}
            </Button>
            <p className="text-center text-cream-20 font-body text-sm mt-4">14-day money-back guarantee.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
