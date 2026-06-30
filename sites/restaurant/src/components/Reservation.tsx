import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { reservations } = siteContent;

export default function Reservation() {
  return (
    <Section id="reservations" className="bg-surface py-24 md:py-32 relative isolate overflow-hidden">
      {/* Decorative large ampersand in background */}
      <div className="pointer-events-none absolute -left-20 top-10 select-none text-[20rem] font-display font-bold italic leading-none text-surface-50/50 opacity-20">
        &amp;
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:gap-24 relative z-10">
        <div className="flex w-full flex-col md:w-1/2">
          <SectionHeading
            eyebrow={reservations.eyebrow}
            headline={<span className="font-display leading-tight">{reservations.headline}</span>}
            align="left"
            className="mb-6"
          />
          <p className="text-body text-cream/70 mb-12 max-w-md">
            {reservations.description}
          </p>

          <div className="flex flex-col gap-8 text-cream/80">
            <div>
              <h4 className="text-small font-bold uppercase tracking-widest text-brand-400 mb-2">Location</h4>
              <p className="whitespace-pre-line leading-relaxed">{reservations.info.address}</p>
            </div>
            <div>
              <h4 className="text-small font-bold uppercase tracking-widest text-brand-400 mb-2">Hours</h4>
              <ul className="flex flex-col gap-2">
                {reservations.info.hours.map((h, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-24 text-cream/60">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-small font-bold uppercase tracking-widest text-brand-400 mb-2">Contact</h4>
              <a href={`tel:${reservations.info.phone.replace(/\D/g, "")}`} className="hover:text-brand-300 transition-colors">
                {reservations.info.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Stubbed Booking Form (per memory.md rule) */}
        <div className="w-full md:w-1/2">
          <div className="bg-surface-50 p-8 sm:p-12 border border-brand-500/10 shadow-xl rounded-sm">
            <h3 className="font-display text-h4 mb-8 text-cream">Request a Table</h3>
            {/* Real client would embed Resy/OpenTable here. We use a stubbed HTML form. */}
            <form action="https://formspree.io/f/placeholder" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-small font-medium text-cream/60">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-surface border-b border-cream/20 px-4 py-3 text-cream focus:border-brand-500 focus:outline-none transition-colors" 
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-small font-medium text-cream/60">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                    className="bg-surface border-b border-cream/20 px-4 py-3 text-cream focus:border-brand-500 focus:outline-none transition-colors [color-scheme:dark]" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="guests" className="text-small font-medium text-cream/60">Guests</label>
                  <select 
                    id="guests" 
                    name="guests" 
                    className="bg-surface border-b border-cream/20 px-4 py-3 text-cream focus:border-brand-500 focus:outline-none transition-colors appearance-none"
                  >
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                    <option value="6+">6+ People (Please call)</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="notes" className="text-small font-medium text-cream/60">Special Notes</label>
                <textarea 
                  id="notes" 
                  name="notes" 
                  rows={2}
                  className="bg-surface border-b border-cream/20 px-4 py-3 text-cream focus:border-brand-500 focus:outline-none transition-colors resize-none" 
                  placeholder="Allergies, celebrations..."
                />
              </div>
              <Button type="submit" variant="primary" className="mt-4 bg-brand-500 hover:bg-brand-600 border-brand-500 text-cream w-full justify-center">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
