import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading, Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { pricing } = siteContent;

/**
 * Pricing — 2–3 tiers, monthly/annual toggle, "most popular" highlight.
 * Transparent numbers per PRD conversion priority #3.
 */
export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section id="pricing" className="bg-surface">
      <SectionHeading
        eyebrow={pricing.eyebrow}
        headline={pricing.headline}
        subhead={pricing.subhead}
        align="center"
        className="mb-10"
      />

      {/* Billing toggle. */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <span
          className={`text-small font-medium transition-colors ${
            !annual ? "text-white" : "text-neutral-500"
          }`}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual((v) => !v)}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ${
            annual ? "bg-brand-500" : "bg-surface-300"
          }`}
          aria-label="Toggle annual billing"
        >
          <motion.span
            layout
            className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm"
            style={{ marginLeft: annual ? "auto" : 2, marginRight: annual ? 2 : "auto" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span
          className={`text-small font-medium transition-colors ${
            annual ? "text-white" : "text-neutral-500"
          }`}
        >
          Annual{" "}
          <span className="ml-1 rounded-full bg-brand-500/20 px-2 py-0.5 text-xs text-brand-400">
            Save 20%
          </span>
        </span>
      </div>

      {/* Plan cards. */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-brand-500/40 bg-brand-500/5 shadow-[0_0_40px_rgba(124,58,237,0.1)]"
                : "border-white/10 bg-surface-100"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </div>
            )}

            <h3 className="text-h3 font-semibold text-white">{plan.name}</h3>
            <p className="mt-1 text-small text-neutral-400">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={annual ? "annual" : "monthly"}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="text-display font-bold text-white"
                >
                  ${annual ? plan.price.annual : plan.price.monthly}
                </motion.span>
              </AnimatePresence>
              {plan.price.monthly > 0 && (
                <span className="text-small text-neutral-500">/mo</span>
              )}
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-small text-neutral-300">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              href="#cta"
              variant={plan.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
