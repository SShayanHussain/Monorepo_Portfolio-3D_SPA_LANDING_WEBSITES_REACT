/**
 * Typed content for every section — copy written per the PRD's tone-of-voice:
 * clear, benefit-first, conversational but not cute. No "seamlessly/unlock/
 * empower/leverage/game-changing".
 */

export const siteContent = {
  brand: "Pulse",

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Start free trial", href: "#cta" },
  },

  hero: {
    headline: "See every customer interaction,",
    headlineAccent: "in real time.",
    subhead:
      "Pulse shows you exactly where users drop off, what converts, and what to build next — without waiting for yesterday's report.",
    primaryCta: { label: "Start free trial", href: "#cta" },
    secondaryCta: { label: "Watch demo", href: "#how-it-works" },
  },

  socialProof: {
    heading: "Trusted by product teams at",
    logos: [
      { name: "Vercel", width: 100 },
      { name: "Linear", width: 80 },
      { name: "Notion", width: 90 },
      { name: "Stripe", width: 80 },
      { name: "Figma", width: 72 },
      { name: "Loom", width: 72 },
    ],
  },

  features: [
    {
      eyebrow: "Live Funnels",
      headline: "Watch your funnels fill in real time",
      description:
        "See every step of every funnel as users move through it — not as a stale daily snapshot, but right now. Spot a broken checkout flow at 10:14am, not in tomorrow's standup.",
      stat: { value: "3.2×", label: "faster issue detection" },
    },
    {
      eyebrow: "Cohort Explorer",
      headline: "Compare any group against any other, instantly",
      description:
        "Slice users by signup source, plan tier, geography, or any custom property. See retention, revenue, and feature adoption side by side — no SQL, no exports, no waiting.",
      stat: { value: "40%", label: "less time in spreadsheets" },
    },
    {
      eyebrow: "Smart Alerts",
      headline: "Get told when something changes, not when you remember to check",
      description:
        "Set thresholds on any metric. Pulse watches the trend and notifies your team in Slack the moment conversion dips or a new segment spikes — before it becomes a support ticket.",
      stat: { value: "12min", label: "avg. response time" },
    },
    {
      eyebrow: "Session Replay",
      headline: "Stop guessing what happened — watch it",
      description:
        "Every user session, fully reconstructed. Click into any anomalous data point and see exactly what the user did, tapped, rage-clicked, or abandoned. No setup beyond the SDK.",
      stat: { value: "0", label: "config required" },
    },
  ],

  howItWorks: {
    eyebrow: "How it works",
    headline: "From install to insight in under ten minutes",
    steps: [
      {
        number: "01",
        title: "Drop in the SDK",
        description:
          "One line of JavaScript, or use our React/Next/Vue wrappers. Events start flowing in seconds, not days.",
      },
      {
        number: "02",
        title: "Define what matters",
        description:
          "Name your funnels, set your goals, tag the events that map to revenue. Pulse auto-discovers the rest.",
      },
      {
        number: "03",
        title: "Watch the dashboard light up",
        description:
          "Real-time charts, live user counts, instant cohort comparisons. Share a link — your whole team sees the same data.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    headline: "Straightforward pricing. No seat tax.",
    subhead:
      "Every plan includes unlimited team members. You only pay for tracked events.",
    plans: [
      {
        name: "Starter",
        price: { monthly: 0, annual: 0 },
        description: "For side projects and early-stage products",
        features: [
          "10K events/month",
          "3 funnels",
          "7-day data retention",
          "1 project",
          "Community support",
        ],
        cta: "Start free",
        highlighted: false,
      },
      {
        name: "Pro",
        price: { monthly: 49, annual: 39 },
        description: "For growing teams shipping fast",
        features: [
          "1M events/month",
          "Unlimited funnels",
          "12-month data retention",
          "10 projects",
          "Session replay",
          "Smart alerts",
          "Priority support",
        ],
        cta: "Start free trial",
        highlighted: true,
      },
      {
        name: "Scale",
        price: { monthly: 199, annual: 159 },
        description: "For high-traffic products that need depth",
        features: [
          "10M events/month",
          "Unlimited everything",
          "24-month data retention",
          "SSO & audit log",
          "Custom events API",
          "Dedicated CSM",
          "99.99% SLA",
        ],
        cta: "Talk to sales",
        highlighted: false,
      },
    ],
  },

  testimonials: {
    eyebrow: "What teams are saying",
    headline: "Used by teams that ship, not teams that report",
    items: [
      {
        quote:
          "We caught a payment-flow regression within 14 minutes of deploy. Before Pulse, that would've been a support ticket at 2am.",
        name: "Sarah Chen",
        title: "Head of Engineering",
        company: "Stackline",
        stat: { value: "14min", label: "to detect regressions" },
      },
      {
        quote:
          "Cohort Explorer replaced three Looker dashboards and a weekly export-to-Sheets ritual. Our PM team got four hours a week back.",
        name: "James Okonkwo",
        title: "VP Product",
        company: "Relay",
        stat: { value: "4hrs/wk", label: "saved per PM" },
      },
      {
        quote:
          "The session replay alone justified the cost. We stopped arguing about what users 'probably' did and just watched.",
        name: "Priya Mehta",
        title: "Growth Lead",
        company: "Bloom",
        stat: { value: "40%", label: "fewer UX debates" },
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Common questions",
    items: [
      {
        question: "How long does setup take?",
        answer:
          "Most teams are seeing live data within 10 minutes. The SDK is a single script tag or npm package — no build pipeline changes required.",
      },
      {
        question: "Does Pulse slow down my site?",
        answer:
          "The SDK is under 8KB gzipped and loads asynchronously. It uses a web worker for batching, so it never blocks the main thread.",
      },
      {
        question: "What about GDPR and privacy?",
        answer:
          "Pulse is fully GDPR-compliant out of the box. Data is processed in EU regions by default, session replay auto-masks PII, and you control exactly which events are collected.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes — CSV, JSON, or direct warehouse sync to Snowflake, BigQuery, or Redshift. Your data is yours, always.",
      },
      {
        question: "What happens if I exceed my event limit?",
        answer:
          "We'll notify you at 80% and 100%. We never drop events — overages are billed at the next tier's per-event rate, prorated. No surprises.",
      },
      {
        question: "Do you offer a free trial on paid plans?",
        answer:
          "Every paid plan includes a 14-day free trial with full feature access. No credit card required until you decide to stay.",
      },
    ],
  },

  finalCta: {
    headline: "Start seeing what your users actually do",
    subhead:
      "Free for up to 10K events. No credit card. Set up in under ten minutes.",
    cta: { label: "Start your free trial", href: "#cta" },
  },

  footer: {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
} as const;
