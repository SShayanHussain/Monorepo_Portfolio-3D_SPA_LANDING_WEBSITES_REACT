import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { menuPreview } = siteContent;

export default function MenuPreview() {
  return (
    <Section id="menu" className="bg-surface py-24 md:py-32">
      <SectionHeading
        eyebrow={menuPreview.eyebrow}
        headline={<span className="font-display">{menuPreview.headline}</span>}
        align="center"
        className="mb-16 md:mb-24"
      />

      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 md:grid-cols-2">
        {menuPreview.items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm sm:h-32 sm:w-32">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-2">
                <h3 className="font-display text-h4 font-medium text-cream">{item.name}</h3>
                <span className="text-brand-400 font-medium">{item.price}</span>
              </div>
              <p className="mt-3 text-small text-cream/60">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <a href="#menu-full" className="group flex items-center gap-2 text-small font-medium uppercase tracking-widest text-brand-400 hover:text-brand-300 transition-colors">
          View full menu
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </Section>
  );
}
