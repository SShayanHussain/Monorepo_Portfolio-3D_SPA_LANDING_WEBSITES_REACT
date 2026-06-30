import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

export default function QuoteForm() {
  return (
    <Section id="quote" className="bg-surface py-24 md:py-32 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-display text-4xl md:text-5xl uppercase tracking-wide text-textMain mb-6">
              Request a Consultation
            </h2>
            <p className="font-body text-textMuted leading-relaxed mb-10">
              Provide your logistics requirements, and our engineering team will evaluate your network to design a customized capacity and routing solution.
            </p>
            <div className="p-8 bg-surface-100 border-l-4 border-brand">
              <p className="font-body italic text-textMain leading-relaxed mb-6">
                "{siteContent.testimonials[0].quote}"
              </p>
              <p className="font-display uppercase tracking-widest text-brand text-sm">
                {siteContent.testimonials[0].author} <span className="text-textMuted mx-2">|</span> {siteContent.testimonials[0].role}, {siteContent.testimonials[0].company}
              </p>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <form className="bg-surface-100 p-8 md:p-12 border border-surface-200 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-textMuted mb-2">Company Name</label>
                  <input type="text" className="w-full bg-surface border border-surface-200 p-4 text-textMain focus:outline-none focus:border-brand transition-colors" required />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-textMuted mb-2">Contact Name</label>
                  <input type="text" className="w-full bg-surface border border-surface-200 p-4 text-textMain focus:outline-none focus:border-brand transition-colors" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-textMuted mb-2">Email Address</label>
                  <input type="email" className="w-full bg-surface border border-surface-200 p-4 text-textMain focus:outline-none focus:border-brand transition-colors" required />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-textMuted mb-2">Primary Service of Interest</label>
                  <select defaultValue="" className="w-full bg-surface border border-surface-200 p-4 text-textMain focus:outline-none focus:border-brand transition-colors appearance-none" required>
                    <option value="" disabled>Select an option...</option>
                    <option value="ltl">LTL / FTL Freight</option>
                    <option value="lastmile">Last-Mile Delivery</option>
                    <option value="warehousing">Warehousing & Fulfillment</option>
                    <option value="expedited">Expedited Logistics</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-10">
                <label className="block font-body text-xs uppercase tracking-widest text-textMuted mb-2">Project Details & Volume</label>
                <textarea rows={5} className="w-full bg-surface border border-surface-200 p-4 text-textMain focus:outline-none focus:border-brand transition-colors resize-none" required></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand hover:bg-brand-400 text-white font-display text-lg uppercase tracking-wider py-5 transition-colors"
              >
                Submit Request
              </button>
              <p className="text-center font-body text-xs text-textMuted mt-4">Typical response time: 2-4 hours.</p>
            </form>
          </div>
        </div>

      </div>
    </Section>
  );
}
