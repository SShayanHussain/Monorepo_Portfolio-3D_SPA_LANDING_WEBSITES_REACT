import { motion } from "framer-motion";
import { Section, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { finalCta } = siteContent;

/**
 * Final CTA — full-width, high-contrast, repeat conversion one last time.
 * This is the 3rd CTA placement per the PRD requirement.
 */
export default function FinalCta() {
  return (
    <Section
      id="cta"
      className="relative overflow-hidden bg-surface"
      reveal
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Background glow. */}
        <div className="absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-h2 font-bold text-white"
        >
          {finalCta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative mt-4 text-body text-neutral-400"
        >
          {finalCta.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mt-8"
        >
          <Button href={finalCta.cta.href} variant="primary">
            {finalCta.cta.label}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
