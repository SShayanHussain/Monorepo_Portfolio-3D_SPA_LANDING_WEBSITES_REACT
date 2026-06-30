import { motion } from "framer-motion";
import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { socialProof } = siteContent;

/**
 * Logo strip positioned high on the page — SaaS buyers look for this fast.
 * Placeholder SVG logos since this is a portfolio build (per memory.md #5).
 */
export default function SocialProof() {
  return (
    <Section
      className="border-b border-white/5 bg-surface-50 py-10 md:py-12"
      reveal
    >
      <p className="mb-6 text-center text-small font-medium uppercase tracking-widest text-neutral-400">
        {socialProof.heading}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-40">
        {socialProof.logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-2"
          >
            {/* Placeholder logo — geometric shape + company name. */}
            <svg
              width={logo.width}
              height="28"
              viewBox={`0 0 ${logo.width} 28`}
              fill="none"
              aria-label={logo.name}
            >
              <rect
                x="0"
                y="4"
                width="20"
                height="20"
                rx="4"
                fill="currentColor"
                className="text-neutral-300"
              />
              <text
                x="26"
                y="19"
                fill="currentColor"
                className="text-neutral-300"
                fontSize="13"
                fontFamily="Inter Variable, sans-serif"
                fontWeight="600"
              >
                {logo.name}
              </text>
            </svg>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
