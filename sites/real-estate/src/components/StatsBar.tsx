import { useRef } from "react";
import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const { stats } = siteContent;

// Animated Counter component
function Counter({ value, suffix, prefix }: { value: number, suffix: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Create a spring that goes from 0 to target value
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  // When in view, trigger the spring to the target value
  if (inView) {
    springValue.set(value);
  }

  // Format the spring value as an integer string
  const displayValue = useTransform(springValue, (latest) => {
    // If it's a decimal like 1.2, keep one decimal place, else integer
    if (value % 1 !== 0) {
      return latest.toFixed(1);
    }
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
    <Section id="stats" className="bg-brand-900 py-20 text-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 divide-x divide-brand-800/50">
          {stats.metrics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-300 mb-3">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-sm font-body tracking-widest uppercase opacity-80 text-surface">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
