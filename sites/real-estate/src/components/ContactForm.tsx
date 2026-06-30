import { Section, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { contact } = siteContent;

export default function ContactForm() {
  return (
    <Section id="contact" className="bg-cream text-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">{contact.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{contact.headline}</h2>
          <p className="text-surface-200 font-body max-w-2xl mx-auto">{contact.subhead}</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-surface-100 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-cream-10 border border-cream-20 text-surface px-4 py-3 font-body focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-surface-100 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-cream-10 border border-cream-20 text-surface px-4 py-3 font-body focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-surface-100 uppercase tracking-widest mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-cream-10 border border-cream-20 text-surface px-4 py-3 font-body focus:outline-none focus:border-brand-400 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="intent" className="block text-sm font-bold text-surface-100 uppercase tracking-widest mb-2">I am looking to...</label>
              <select 
                id="intent" 
                className="w-full bg-cream-10 border border-cream-20 text-surface px-4 py-3 font-body focus:outline-none focus:border-brand-400 transition-colors appearance-none"
              >
                <option value="buy">Buy a home</option>
                <option value="sell">Sell a home</option>
                <option value="both">Buy and Sell</option>
                <option value="other">General Inquiry</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-surface-100 uppercase tracking-widest mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-cream-10 border border-cream-20 text-surface px-4 py-3 font-body focus:outline-none focus:border-brand-400 transition-colors resize-none"
              placeholder="Tell us about your real estate goals..."
            ></textarea>
          </div>
          
          <div className="pt-4 text-center">
            <Button 
              type="submit"
              variant="primary"
              className="bg-brand-500 hover:bg-brand-600 text-surface font-display font-bold uppercase tracking-widest px-12 py-4 transition-colors"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
