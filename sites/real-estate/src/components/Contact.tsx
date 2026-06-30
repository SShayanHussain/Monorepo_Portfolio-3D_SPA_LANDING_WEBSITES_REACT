import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { contact } = siteContent;

const fieldClass =
  "w-full rounded-md border border-canvas-200 bg-white px-4 py-3 text-body text-ink placeholder:text-ink-muted/50 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors";

export default function Contact() {
  return (
    <Section id="contact" className="bg-canvas">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={contact.eyebrow}
            headline={contact.headline}
            subhead={contact.subhead}
            as="h2"
          />
          {/* Conversion priority #3: phone available alongside the form. */}
          <div className="mt-8 rounded-lg border border-canvas-200 bg-canvas-100 p-6">
            <p className="text-small uppercase tracking-wide text-ink-muted">
              Prefer to call?
            </p>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="mt-1 inline-block text-h2 font-display font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Stubbed consultation form. A real client would point `action` at
            Formspree or their CRM intake endpoint (per memory.md). */}
        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="flex flex-col gap-5 rounded-lg border border-canvas-200 bg-white p-7 shadow-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-small font-medium text-ink">
                Name
              </label>
              <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-small font-medium text-ink">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="(555) 000-0000" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-small font-medium text-ink">
              Email
            </label>
            <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@example.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="intent" className="text-small font-medium text-ink">
              I'm interested in
            </label>
            <select id="intent" name="intent" className={`${fieldClass} appearance-none`} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {contact.intentOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-small font-medium text-ink">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${fieldClass} resize-none`}
              placeholder="A neighborhood, a timeline, a question — anything helps."
            />
          </div>

          <Button type="submit" variant="primary" className="mt-2 w-full justify-center">
            Request a consultation
          </Button>
          <p className="text-center text-small text-ink-muted">
            No obligation. We respond within one business day.
          </p>
        </form>
      </div>
    </Section>
  );
}
