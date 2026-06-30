import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { quote } = siteContent;

export default function QuoteForm() {
  return (
    <Section id="quote" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <SectionHeading
          eyebrow={quote.eyebrow}
          headline={quote.headline}
          align="center"
          className="text-cream"
        />
        <p className="text-center text-cream-20 font-body mb-16">{quote.subhead}</p>
        
        <form className="bg-surface-50 p-8 md:p-12 border border-surface-200 shadow-sm rounded-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-cream uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-surface border border-surface-200 px-4 py-3 font-body focus:outline-none focus:border-brand-500 transition-colors rounded-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-cream uppercase tracking-widest mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-surface border border-surface-200 px-4 py-3 font-body focus:outline-none focus:border-brand-500 transition-colors rounded-sm"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold text-cream uppercase tracking-widest mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-surface border border-surface-200 px-4 py-3 font-body focus:outline-none focus:border-brand-500 transition-colors rounded-sm"
              placeholder="john@example.com"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="projectType" className="block text-sm font-bold text-cream uppercase tracking-widest mb-2">Project Type</label>
            <select 
              id="projectType" 
              className="w-full bg-surface border border-surface-200 px-4 py-3 font-body focus:outline-none focus:border-brand-500 transition-colors rounded-sm appearance-none"
            >
              <option value="">Select a project type...</option>
              <option value="kitchen">Kitchen Remodel</option>
              <option value="bath">Bathroom Remodel</option>
              <option value="addition">Home Addition</option>
              <option value="roofing">Roofing / Exterior</option>
              <option value="other">Other / Custom</option>
            </select>
          </div>
          
          <div className="mb-8">
            <label htmlFor="details" className="block text-sm font-bold text-cream uppercase tracking-widest mb-2">Project Details</label>
            <textarea 
              id="details" 
              rows={4}
              className="w-full bg-surface border border-surface-200 px-4 py-3 font-body focus:outline-none focus:border-brand-500 transition-colors rounded-sm resize-none"
              placeholder="Briefly describe what you're looking to have done..."
            ></textarea>
          </div>
          
          <Button 
            type="submit"
            variant="primary"
            className="w-full bg-brand-500 hover:bg-brand-600 text-surface font-bold uppercase tracking-widest py-4 border-b-4 border-brand-700 active:border-b-0 active:translate-y-1 rounded-sm transition-all"
          >
            Submit Request
          </Button>
        </form>
      </div>
    </Section>
  );
}
