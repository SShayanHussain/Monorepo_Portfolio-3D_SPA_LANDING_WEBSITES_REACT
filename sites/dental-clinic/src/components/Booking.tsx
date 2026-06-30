import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { patientInfo } = siteContent;

export default function Booking() {
  return (
    <Section id="book" className="bg-brand-600 py-24 md:py-32 text-surface overflow-hidden relative">
      {/* Soft decorative background circles */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-500/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-brand-700/50 blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading
              eyebrow={patientInfo.eyebrow}
              headline={patientInfo.headline}
              className="text-surface"
            />
            <p className="mt-6 text-lg text-surface-50 max-w-md leading-relaxed">
              We accept most major insurance plans and offer flexible financing options so you can focus on your health, not your wallet.
            </p>
            
            <div className="mt-10">
              <h4 className="text-sm font-bold tracking-widest uppercase text-brand-200 mb-4">
                Accepted Insurances
              </h4>
              <div className="flex flex-wrap gap-3">
                {patientInfo.insurance.map((ins) => (
                  <span key={ins} className="rounded-full border border-brand-400 bg-brand-500/20 px-4 py-2 text-sm font-semibold">
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Simple embedded-style booking form */}
          <div className="bg-surface p-8 md:p-10 rounded-3xl shadow-xl text-cream">
            <h3 className="text-2xl font-display font-bold mb-6 text-brand-800">
              Request an Appointment
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-cream-20">First Name</label>
                  <input type="text" className="w-full rounded-lg border border-surface-200 bg-surface-50 px-4 py-3 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" placeholder="Jane" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-cream-20">Last Name</label>
                  <input type="text" className="w-full rounded-lg border border-surface-200 bg-surface-50 px-4 py-3 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-cream-20">Phone Number</label>
                <input type="tel" className="w-full rounded-lg border border-surface-200 bg-surface-50 px-4 py-3 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" placeholder="(555) 000-0000" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-cream-20">Reason for visit</label>
                <select className="w-full rounded-lg border border-surface-200 bg-surface-50 px-4 py-3 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow appearance-none">
                  <option>Routine Cleaning</option>
                  <option>Pain / Emergency</option>
                  <option>Consultation</option>
                </select>
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center bg-brand-500 hover:bg-brand-600 text-surface border-none mt-2">
                Submit Request
              </Button>
              <p className="text-xs text-center text-cream-20 mt-4">
                Our team will call you within 1 business day to confirm your time.
              </p>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
}
