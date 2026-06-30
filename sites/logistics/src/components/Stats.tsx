import { StatCountUp } from "@portfolio/ui";
import { siteContent } from "@/data/content";

export default function Stats() {
  return (
    <section className="bg-surface py-20 border-b border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-surface-200">
          {siteContent.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center pt-8 sm:pt-0">
              <div className="text-display text-6xl text-brand mb-2">
                <StatCountUp 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.value % 1 !== 0 ? 1 : 0} 
                />
              </div>
              <p className="font-body text-sm font-medium uppercase tracking-widest text-textMuted text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
