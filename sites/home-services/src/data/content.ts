export const siteContent = {
  brand: "Sterling Home Co.",
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "Reviews", href: "#testimonials" },
    ],
    cta: {
      label: "Get a Free Quote",
      href: "#quote",
    },
  },
  hero: {
    headline: "Craftsmanship You Can Trust.",
    subhead: "Fully licensed, insured, and dedicated to building homes that last. Over 20 years of delivering uncompromising quality in every renovation.",
    primaryCta: {
      label: "Get a Free Quote",
      href: "#quote",
    },
    secondaryCta: {
      label: "View Our Work",
      href: "#projects",
    },
  },
  services: {
    eyebrow: "Our Expertise",
    headline: "WHAT WE BUILD",
    items: [
      {
        id: "kitchen",
        name: "Kitchen Remodels",
        description: "From custom cabinetry to luxury countertops, we build kitchens that serve as the heart of your home.",
        icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm9 8h-7V7h7v10z" // Simple SVG path placeholder
      },
      {
        id: "bathroom",
        name: "Bathroom Renovations",
        description: "Transform your daily routine with spa-like walk-in showers, custom tiling, and modern fixtures.",
        icon: "M20 13V6c0-3.31-2.69-6-6-6S8 2.69 8 6v7H6c-1.1 0-2 .9-2 2v4h20v-4c0-1.1-.9-2-2-2h-2zm-10-7c0-2.21 1.79-4 4-4s4 1.79 4 4v7h-8V6z"
      },
      {
        id: "additions",
        name: "Home Additions",
        description: "Seamlessly expand your living space with structurally sound, architecturally matched room additions.",
        icon: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
      },
      {
        id: "roofing",
        name: "Roofing & Exteriors",
        description: "Protect your investment with durable roofing systems, siding replacement, and weatherproofing.",
        icon: "M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2z"
      }
    ]
  },
  featuredProjects: {
    eyebrow: "Our Work",
    headline: "BEFORE & AFTER",
    description: "Drag the slider to see the transformation.",
    projects: [
      {
        id: "p1",
        title: "Modern Kitchen Overhaul",
        location: "Oak Park, IL",
        before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", // A somewhat dated kitchen
        after: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop", // A beautiful modern kitchen
      },
      {
        id: "p2",
        title: "Master Bath Expansion",
        location: "Evanston, IL",
        before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", // Just using placeholders for now
        after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", 
      }
    ]
  },
  whyChooseUs: {
    eyebrow: "The Sterling Difference",
    headline: "BUILT ON TRUST",
    stats: [
      { value: "22", label: "Years in Business" },
      { value: "1,400+", label: "Projects Completed" },
      { value: "10 yr", label: "Workmanship Warranty" },
      { value: "A+", label: "BBB Rating" },
    ],
    certifications: [
      "Fully Licensed General Contractor (#GC-884920)",
      "Comprehensive Liability Insurance ($2M)",
      "Workers' Compensation Coverage",
      "EPA Lead-Safe Certified Firm"
    ]
  },
  process: {
    eyebrow: "How We Work",
    headline: "NO SURPRISES",
    steps: [
      {
        title: "1. Consultation",
        description: "We visit your home to understand your vision, measure the space, and discuss your budget realistically."
      },
      {
        title: "2. Detailed Quote",
        description: "You receive a transparent, line-itemized proposal with no hidden fees and a clear timeline."
      },
      {
        title: "3. Construction",
        description: "Our licensed crew treats your home with respect, keeping the site clean and communicating daily."
      },
      {
        title: "4. Walkthrough",
        description: "We don't consider the job done until we've walked through the space together and you are 100% satisfied."
      }
    ]
  },
  testimonials: {
    eyebrow: "Client Reviews",
    headline: "HEAR FROM OUR HOMEOWNERS",
    reviews: [
      {
        text: "Sterling Home Co. completely gutted and rebuilt our kitchen on time and on budget. Their crew was respectful, clean, and the craftsmanship is outstanding.",
        author: "Mark & Lisa D.",
        project: "Kitchen Remodel"
      },
      {
        text: "Finding a contractor you can actually trust is hard. Sterling provided a detailed quote, stuck to it, and the new master bath looks like a luxury hotel.",
        author: "James T.",
        project: "Bathroom Addition"
      },
      {
        text: "We had a major roof leak that caused structural damage. Sterling responded immediately, secured the house, and managed the entire rebuild perfectly.",
        author: "Sarah W.",
        project: "Roofing & Structural Repair"
      }
    ]
  },
  quote: {
    eyebrow: "Start Your Project",
    headline: "REQUEST A FREE QUOTE",
    subhead: "Fill out the form below and we'll get back to you within 24 hours to schedule a consultation. No obligation, just honest advice."
  },
  footer: {
    address: [
      "Sterling Home Co.",
      "124 Industrial Way, Suite A",
      "Chicago, IL 60601",
    ],
    hours: [
      "Mon - Fri: 7am - 5pm",
      "Emergency repairs available 24/7"
    ],
    phone: "(312) 555-0198",
    email: "quotes@sterlinghomeco.com",
    license: "License #GC-884920",
    serviceArea: "Proudly serving the Greater Chicago area and surrounding suburbs."
  },
};
