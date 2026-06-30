import { Section, SectionHeading, Button } from "@portfolio/ui";
import { useState } from "react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Confidential Evaluation"
          headline="REQUEST A CONSULTATION"
          align="center"
          className="text-surface"
        />
        
        <div className="mt-12 bg-surface p-10 md:p-14 shadow-lg border border-surface-200">
          <div className="mb-10 p-4 bg-surface-50 border-l-4 border-brand-500">
            <p className="text-sm font-body text-cream-20 font-medium">
              <strong>Attorney-Client Privilege Notice:</strong> The information you submit via this form is strictly confidential. Providing this information does not create an attorney-client relationship, but it will be protected under confidentiality standards.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <h3 className="text-3xl font-display text-cream mb-4">Request Received</h3>
              <p className="text-cream-20 font-body">
                Our intake team will contact you shortly to schedule your confidential consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cream mb-2 uppercase tracking-wide">Full Name</label>
                  <input type="text" id="name" required className="w-full bg-surface-50 border border-surface-200 p-4 text-cream focus:border-brand-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-cream mb-2 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full bg-surface-50 border border-surface-200 p-4 text-cream focus:border-brand-500 focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-cream mb-2 uppercase tracking-wide">Practice Area</label>
                <select id="practice" className="w-full bg-surface-50 border border-surface-200 p-4 text-cream focus:border-brand-500 focus:outline-none transition-colors appearance-none rounded-none">
                  <option>Business Litigation</option>
                  <option>Corporate Governance</option>
                  <option>Real Estate Law</option>
                  <option>Intellectual Property</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-cream mb-2 uppercase tracking-wide">Brief Description of Case</label>
                <textarea id="details" rows={4} className="w-full bg-surface-50 border border-surface-200 p-4 text-cream focus:border-brand-500 focus:outline-none transition-colors resize-none"></textarea>
              </div>

              <div className="pt-6 border-t border-surface-200 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <Button type="submit" variant="primary" className="bg-brand-500 hover:bg-brand-400 text-surface border-none px-10 py-4 font-bold tracking-widest uppercase w-full md:w-auto">
                  Submit Request
                </Button>
                <p className="text-xs text-cream-20 text-center md:text-right max-w-xs">
                  Submissions are encrypted and transmitted securely.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
