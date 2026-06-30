import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

/**
 * Testimonials with a mini case-study stat per quote.
 */
export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-50">
      <SectionHeading
        eyebrow={testimonials.eyebrow}
        headline={testimonials.headline}
        align="center"
        className="mb-16"
      />

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col rounded-2xl border border-white/10 bg-surface-100 p-8"
          >
            {/* Stat chip. */}
            <div className="mb-6 flex items-center gap-2 self-start rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1">
              <span className="text-small font-bold text-brand-400">
                {t.stat.value}
              </span>
              <span className="text-xs text-neutral-400">{t.stat.label}</span>
            </div>

            <p className="flex-1 text-body leading-relaxed text-neutral-300">
              &ldquo;{t.quote}&rdquo;
            </p>

            <footer className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
              {/* Avatar placeholder. */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-small font-bold text-brand-400">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <cite className="block text-small font-semibold not-italic text-white">
                  {t.name}
                </cite>
                <span className="text-xs text-neutral-500">
                  {t.title}, {t.company}
                </span>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
