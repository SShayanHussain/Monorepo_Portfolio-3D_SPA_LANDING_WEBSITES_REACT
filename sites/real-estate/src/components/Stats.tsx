import { Section, SectionHeading, StatCountUp } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { stats } = siteContent;

export default function Stats() {
  return (
    <Section className="bg-brand-700 text-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow={<span className="text-brand-50/80">{stats.eyebrow}</span>}
          headline={<span className="text-white">{stats.headline}</span>}
          subhead={<span className="text-brand-50/70">{stats.subhead}</span>}
          as="h2"
        />

        <dl className="grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <dt className="order-2 text-small text-brand-50/70">
                {item.label}
              </dt>
              <dd className="order-1 text-display font-display font-semibold leading-none">
                <StatCountUp value={item.value} suffix={item.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
