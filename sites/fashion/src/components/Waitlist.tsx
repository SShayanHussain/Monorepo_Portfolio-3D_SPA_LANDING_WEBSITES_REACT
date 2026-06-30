import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { waitlist } = siteContent;

export default function Waitlist() {
  return (
    <Section className="bg-surface-100 py-32 border-y border-surface-200">
      <div className="mx-auto max-w-2xl px-6 md:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-display text-cream mb-4">{waitlist.headline}</h2>
        <p className="text-brand-600 font-body text-sm md:text-base mb-10 max-w-md mx-auto">
          {waitlist.subhead}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-1 bg-surface border border-surface-200 px-4 py-3 font-body text-sm text-cream focus:outline-none focus:border-cream transition-colors placeholder:text-brand-300"
            required
          />
          <button 
            type="submit"
            className="bg-cream hover:bg-cream-10 text-surface font-body text-xs tracking-widest uppercase px-8 py-3 transition-colors whitespace-nowrap"
          >
            {waitlist.cta}
          </button>
        </form>
        
      </div>
    </Section>
  );
}
