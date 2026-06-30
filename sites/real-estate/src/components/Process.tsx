import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { process } = siteContent;

export default function Process() {
  return (
    <Section id="process" className="bg-canvas-100">
      <SectionHeading eyebrow={process.eyebrow} headline={process.headline} as="h2" />

      <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col"
          >
            {/* Connector line between steps (desktop only). */}
            {i < process.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-12 top-5 hidden h-px w-[calc(100%-2rem)] bg-canvas-200 lg:block"
              />
            )}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-display text-body font-semibold text-white">
              {i + 1}
            </span>
            <h3 className="mt-5 text-h3 font-display font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-body text-ink-muted">{step.body}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
