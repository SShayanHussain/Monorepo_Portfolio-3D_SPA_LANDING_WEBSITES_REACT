export const siteContent = {
  brand: "Brightpath",
  nav: {
    links: [
      { label: "Curriculum", href: "#curriculum" },
      { label: "Instructor", href: "#instructor" },
      { label: "Logistics", href: "#logistics" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: {
      label: "Enroll Now",
      href: "#pricing",
    },
  },
  hero: {
    headline: "Become a Senior-Level Engineer in 12 Weeks.",
    subhead: "The most structured, outcome-driven cohort for mid-level developers who want to cross the chasm. No generic tutorials—just real architecture, system design, and guided mentorship.",
    primaryCta: {
      label: "Apply for the next Cohort",
      href: "#pricing",
    },
    secondaryCta: {
      label: "View Curriculum",
      href: "#curriculum",
    },
  },
  stats: {
    metrics: [
      { value: 85, suffix: "%", label: "Completion Rate" },
      { value: 450, suffix: "+", label: "Alumni Hired" },
      { value: 42, prefix: "$", suffix: "k", label: "Avg Salary Increase" },
      { value: 12, suffix: "", label: "Weeks Duration" },
    ]
  },
  curriculum: {
    eyebrow: "The Blueprint",
    headline: "WHAT YOU WILL BUILD",
    modules: [
      {
        title: "Phase 1: Advanced System Architecture",
        description: "Move beyond standard CRUD. We cover event-driven systems, microservices boundaries, and designing for scale without premature optimization.",
        time: "Weeks 1-3"
      },
      {
        title: "Phase 2: Performance & Observability",
        description: "You can't fix what you can't see. Learn to implement distributed tracing, identify bottlenecks in real-time, and optimize data layer queries.",
        time: "Weeks 4-6"
      },
      {
        title: "Phase 3: The Capstone System",
        description: "Build a distributed, high-throughput service from scratch, subjected to simulated production loads and code-reviewed by staff engineers.",
        time: "Weeks 7-10"
      },
      {
        title: "Phase 4: Technical Leadership",
        description: "Writing code is only half the job. Master RFC writing, leading technical migrations, and effectively mentoring junior engineers.",
        time: "Weeks 11-12"
      }
    ]
  },
  instructor: {
    eyebrow: "Lead Instructor",
    headline: "LEARN FROM EXPERIENCE",
    name: "Dr. Sarah Chen",
    role: "Former Staff Engineer @ Stripe",
    bio: "Sarah spent 8 years designing payment infrastructure at scale before founding Brightpath. She realized that the gap between 'mid-level' and 'senior' isn't syntax—it's system design, trade-off analysis, and technical communication. She built this course to teach exactly that.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  logistics: {
    eyebrow: "Format",
    headline: "HOW IT WORKS",
    items: [
      { title: "Live + Self-Paced", description: "Pre-recorded deep dives + 2 live review sessions per week." },
      { title: "Time Commitment", description: "Expect 10-15 hours per week of focused engineering work." },
      { title: "Next Cohort", description: "Starts October 15th. Limited to 40 engineers." },
      { title: "Prerequisites", description: "2+ years of professional backend engineering experience." }
    ]
  },
  testimonials: {
    eyebrow: "Outcomes",
    headline: "FROM OUR ALUMNI",
    reviews: [
      {
        text: "Before Brightpath, I struggled with system design interviews. The Capstone project gave me the exact architecture experience I needed to land a Senior role at a Series C startup.",
        author: "Marcus T.",
        role: "Senior Backend Engineer"
      },
      {
        text: "The module on observability completely changed how I write code. I implemented tracing at my current job and got promoted the next cycle. Worth every penny.",
        author: "Elena R.",
        role: "Engineering Lead"
      }
    ]
  },
  pricing: {
    eyebrow: "Enrollment",
    headline: "SECURE YOUR SPOT",
    price: "$2,400",
    paymentPlan: "Or 3 monthly payments of $850",
    features: [
      "Lifetime access to curriculum updates",
      "12 weeks of live mentorship",
      "Private alumni community",
      "Code review on all assignments",
      "1-on-1 career strategy session"
    ],
    cta: "Apply Now"
  },
  faq: {
    eyebrow: "Questions",
    headline: "FAQ",
    questions: [
      {
        q: "What is the time commitment?",
        a: "You should expect to spend 10-15 hours per week. This includes watching the core lectures, attending the two live sessions, and completing the weekly architectural assignments."
      },
      {
        q: "What if I miss a live session?",
        a: "All live sessions (including Q&A and code reviews) are recorded and uploaded to the platform within 24 hours."
      },
      {
        q: "Is there a refund policy?",
        a: "Yes. If you complete the first two weeks of assignments and decide the program isn't right for you, we offer a full, no-questions-asked refund."
      },
      {
        q: "Can I expense this to my company?",
        a: "Absolutely. Over 60% of our students expense the course using their company's L&D budget. We provide a detailed invoice and a templated request letter upon enrollment."
      }
    ]
  },
  footer: {
    links: [
      { label: "Curriculum", href: "#curriculum" },
      { label: "Instructor", href: "#instructor" },
      { label: "Logistics", href: "#logistics" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: "admissions@brightpath.io",
  },
};
