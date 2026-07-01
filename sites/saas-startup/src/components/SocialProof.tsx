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
            <div className="flex items-center gap-2">
              <img
                src={`https://cdn.simpleicons.org/${logo.name.toLowerCase()}/white`}
                alt={`${logo.name} logo`}
                className="h-5 w-5"
              />
              <span className="text-[15px] font-semibold text-white tracking-tight">
                {logo.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
