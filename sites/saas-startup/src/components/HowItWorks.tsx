import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { howItWorks } = siteContent;

/**
 * 3-step "How it works" — numbered cards with staggered reveal.
 */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface-50">
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        headline={howItWorks.headline}
        align="center"
        className="mb-16"
      />

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col items-center text-center"
          >
            {/* Step number. */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-h3 font-bold text-brand-400 transition-colors duration-300 group-hover:border-brand-500/40 group-hover:bg-brand-500/20">
              {step.number}
            </div>

            {/* Connector line (between cards, desktop only). */}
            {i < howItWorks.steps.length - 1 && (
              <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-500/30 to-transparent md:block" />
            )}

            <h3 className="mb-2 text-h3 font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-body text-neutral-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
