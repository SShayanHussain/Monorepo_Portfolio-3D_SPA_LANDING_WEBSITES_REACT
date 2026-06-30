import { motion } from "framer-motion";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { sized, srcSet } from "@/lib/img";

const { agents } = siteContent;

export default function Agents() {
  return (
    <Section id="agents" className="bg-canvas">
      <SectionHeading
        eyebrow={agents.eyebrow}
        headline={agents.headline}
        subhead={agents.subhead}
        as="h2"
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {agents.items.map((agent, i) => (
          <motion.article
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col overflow-hidden rounded-lg border border-canvas-200 bg-white shadow-sm"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sized(agent.imageBase, 480)}
                srcSet={srcSet(agent.imageBase, [320, 480, 768])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={agent.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-h3 font-display font-semibold text-ink">
                {agent.name}
              </h3>
              <p className="text-small font-medium uppercase tracking-wide text-brand-600">
                {agent.title}
              </p>
              <p className="mt-3 flex-1 text-body text-ink-muted">{agent.bio}</p>
              <div className="mt-5 flex flex-col gap-1 border-t border-canvas-200 pt-4 text-small">
                <a
                  href={`tel:${agent.phone.replace(/\D/g, "")}`}
                  className="font-medium text-ink transition-colors hover:text-brand-600"
                >
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="text-ink-muted transition-colors hover:text-brand-600"
                >
                  {agent.email}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
