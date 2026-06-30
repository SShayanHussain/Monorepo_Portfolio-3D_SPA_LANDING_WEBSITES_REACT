import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { sized, srcSet } from "@/lib/img";

const { listings } = siteContent;

function StatItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-h3 font-display font-semibold leading-none text-ink">
        {value.toLocaleString()}
      </span>
      <span className="text-small text-ink-muted">{label}</span>
    </div>
  );
}

export default function FeaturedListings() {
  return (
    <Section id="listings" className="bg-canvas">
      <SectionHeading
        eyebrow={listings.eyebrow}
        headline={listings.headline}
        subhead={listings.subhead}
        as="h2"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {listings.items.map((item, i) => (
          <motion.article
            key={item.address}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col overflow-hidden rounded-lg border border-canvas-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={sized(item.imageBase, 768)}
                srcSet={srcSet(item.imageBase)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-small font-medium text-brand-700 backdrop-blur-sm">
                {item.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              {/* Price + key stats are visible immediately — no hover required
                  (conversion priority #2: scannable in under 5 seconds). */}
              <div className="flex items-baseline justify-between">
                <p className="text-h3 font-display font-semibold text-ink">
                  {item.price}
                </p>
              </div>
              <p className="mt-1 text-body text-ink-muted">{item.address}</p>

              <div className="mt-4 flex gap-6 border-t border-canvas-200 pt-4">
                <StatItem value={item.beds} label="Beds" />
                <StatItem value={item.baths} label="Baths" />
                <StatItem value={item.sqft} label="Sq ft" />
              </div>

              {/* Non-essential detail revealed on hover/focus-within. */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out-expo group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="pt-4 text-small text-ink-muted">{item.blurb}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-small font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                View details
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
