import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { about } = siteContent;

export default function About() {
  return (
    <Section id="about" className="bg-surface-50 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:gap-24">
        
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <img 
              src={about.image.src} 
              alt={about.image.alt} 
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Subtle border accent */}
            <div className="absolute inset-0 border border-brand-500/20" />
          </div>
        </motion.div>

        {/* Copy side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col gap-6 md:w-1/2"
        >
          <SectionHeading
            eyebrow={about.eyebrow}
            headline={<span className="font-display leading-tight">{about.headline}</span>}
            align="left"
          />
          <p className="text-body text-cream/70 leading-relaxed">
            {about.description}
          </p>
        </motion.div>

      </div>
    </Section>
  );
}
