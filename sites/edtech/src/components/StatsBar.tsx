import { useRef } from "react";
import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const { stats } = siteContent;

// Animated Counter component
function Counter({ value, suffix, prefix }: { value: number, suffix: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  if (inView) {
    springValue.set(value);
  }

  const displayValue = useTransform(springValue, (latest) => {
    return Math.floor(latest).toString();
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}<motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <Section id="stats" className="bg-surface-50 py-16 border-y border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-surface-200">
          {stats.metrics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-500 mb-3">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-sm font-body tracking-wider uppercase text-cream-20 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
