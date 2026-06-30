import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { features } = siteContent;

/**
 * Feature showcase — alternating image-left/text-right layout for visual rhythm.
 * Each feature has a scroll-triggered micro-animation and a stat highlight.
 */
export default function Features() {
  return (
    <Section id="features" className="bg-surface">
      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={feature.eyebrow}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className={`flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-16 md:py-20 ${
              !isEven ? "md:flex-row-reverse" : ""
            } ${i > 0 ? "border-t border-white/5" : ""}`}
          >
            {/* Visual / illustration placeholder. */}
            <div className="flex flex-1 items-center justify-center">
              <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-surface-100">
                {/* Abstract feature visual — glowing accent orb. */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="h-32 w-32 rounded-full bg-brand-500/20 blur-2xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
                  <div className="text-h2 font-bold text-gradient">
                    {feature.stat.value}
                  </div>
                  <div className="text-small text-neutral-400">
                    {feature.stat.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Copy. */}
            <div className="flex flex-1 flex-col gap-4">
              <SectionHeading
                eyebrow={feature.eyebrow}
                headline={feature.headline}
                subhead={feature.description}
              />
            </div>
          </motion.div>
        );
      })}
    </Section>
  );
}
