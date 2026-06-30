import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-canvas-100">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        headline={testimonials.headline}
        as="h2"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-lg border border-canvas-200 bg-white p-7 shadow-sm"
          >
            <span aria-hidden="true" className="font-display text-5xl leading-none text-brand-500/30">
              &ldquo;
            </span>
            <blockquote className="-mt-3 flex-1 text-body leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-canvas-200 pt-4">
              <p className="font-medium text-ink">{t.name}</p>
              <p className="text-small text-ink-muted">{t.detail}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
