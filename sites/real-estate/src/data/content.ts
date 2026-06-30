/**
 * Typed content for Meridian Properties (real-estate).
 * Tone: confident, concise, benefit-led. One specific detail does the work of
 * three adjectives — no stacked superlatives ("stunning", "luxurious").
 */

export const siteContent = {
  brand: "Meridian",

  nav: {
    links: [
      { label: "Listings", href: "#listings" },
      { label: "Process", href: "#process" },
      { label: "Agents", href: "#agents" },
      { label: "Reviews", href: "#testimonials" },
    ],
    // Conversion priority #1: the consultation CTA stays in the sticky nav.
    cta: { label: "Schedule a consultation", href: "#contact" },
  },

  hero: {
    eyebrow: "Boutique residential · Est. 2007",
    headline: "Find the home that finds you.",
    subhead:
      "Meridian represents a small, considered list of homes — and the buyers who belong in them. Fewer listings, more attention.",
    primaryCta: { label: "Browse listings", href: "#listings" },
    secondaryCta: { label: "Talk to an agent", href: "#contact" },
  },

  listings: {
    eyebrow: "Featured listings",
    headline: "Currently on the market",
    subhead:
      "A current selection from our portfolio. Each one represented end to end by a single agent.",
    items: [
      {
        status: "For sale",
        price: "$1,485,000",
        beds: 4,
        baths: 3,
        sqft: 3120,
        address: "812 Crestline Drive, Highland Park",
        blurb: "Mid-century post-and-beam on a quiet cul-de-sac. North-facing studio off the garden.",
        imageBase:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&auto=format&fit=crop",
        alt: "Modern single-family home with a landscaped front yard",
      },
      {
        status: "For sale",
        price: "$960,000",
        beds: 3,
        baths: 2,
        sqft: 1980,
        address: "27 Marlowe Court, Eastgate",
        blurb: "Renovated craftsman with original millwork. Two blocks from the farmers' market.",
        imageBase:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&auto=format&fit=crop",
        alt: "Craftsman-style house with a covered front porch",
      },
      {
        status: "New",
        price: "$2,240,000",
        beds: 5,
        baths: 4,
        sqft: 4450,
        address: "1500 Vista Ridge, Summit West",
        blurb: "Glass-walled hillside home. Pool, accessory dwelling, and a view that does the selling.",
        imageBase:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&auto=format&fit=crop",
        alt: "Contemporary glass-walled house at dusk with pool",
      },
      {
        status: "For sale",
        price: "$725,000",
        beds: 2,
        baths: 2,
        sqft: 1340,
        address: "44 Linden Ave, Unit 6, Riverside",
        blurb: "Top-floor loft conversion. Twelve-foot ceilings, west light all afternoon.",
        imageBase:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&auto=format&fit=crop",
        alt: "Bright open-plan loft interior with large windows",
      },
      {
        status: "Pending",
        price: "$1,150,000",
        beds: 4,
        baths: 3,
        sqft: 2760,
        address: "309 Hawthorn Lane, Brookside",
        blurb: "Center-hall colonial, fully updated systems. Fenced yard, mature oaks.",
        imageBase:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&auto=format&fit=crop",
        alt: "Two-story colonial home with a manicured lawn",
      },
      {
        status: "New",
        price: "$3,100,000",
        beds: 5,
        baths: 5,
        sqft: 5200,
        address: "9 Aldercrest, Summit West",
        blurb: "Architect's own residence. Board-formed concrete, courtyard, and a wine cellar.",
        imageBase:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&auto=format&fit=crop",
        alt: "Large modern luxury home with manicured landscaping",
      },
    ],
  },

  stats: {
    eyebrow: "Why Meridian",
    headline: "A track record you can check.",
    subhead:
      "We keep our list short on purpose. It's the only way to represent a home the way it deserves.",
    items: [
      { value: 18, suffix: "", label: "Years representing this market" },
      { value: 1240, suffix: "+", label: "Homes sold since 2007" },
      { value: 21, suffix: " days", label: "Average time to accepted offer" },
      { value: 98, suffix: "%", label: "Of list price, on average" },
    ],
  },

  process: {
    eyebrow: "How it works",
    headline: "Four steps, no surprises.",
    steps: [
      {
        title: "Consultation",
        body: "We sit down, learn what you're after, and tell you honestly what it will take.",
      },
      {
        title: "Strategy",
        body: "Pricing, prep, and timing — built around your goals, not a generic playbook.",
      },
      {
        title: "Market & negotiate",
        body: "Your agent runs every showing and every offer personally. No handoffs.",
      },
      {
        title: "Close & beyond",
        body: "We stay on through closing and the move — and we're here for the next one.",
      },
    ],
  },

  agents: {
    eyebrow: "Your agents",
    headline: "The people who'll represent you.",
    subhead: "Small team, by design. You work with one of them start to finish.",
    items: [
      {
        name: "Elena Marsh",
        title: "Principal Broker",
        bio: "Twenty years in residential sales. Specializes in architecturally significant homes and first-time luxury buyers.",
        phone: "(555) 204-7781",
        email: "elena@meridian.example",
        imageBase:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&auto=format&fit=crop",
        alt: "Portrait of Elena Marsh, principal broker",
      },
      {
        name: "Daniel Okonkwo",
        title: "Senior Agent",
        bio: "Former appraiser, which means your pricing is grounded in data. Known for calm, unhurried negotiation.",
        phone: "(555) 204-7782",
        email: "daniel@meridian.example",
        imageBase:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&auto=format&fit=crop",
        alt: "Portrait of Daniel Okonkwo, senior agent",
      },
      {
        name: "Priya Venkatesan",
        title: "Buyer's Agent",
        bio: "Relocation specialist. If you're moving into the area sight-unseen, you want Priya on your side.",
        phone: "(555) 204-7783",
        email: "priya@meridian.example",
        imageBase:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&auto=format&fit=crop",
        alt: "Portrait of Priya Venkatesan, buyer's agent",
      },
    ],
  },

  testimonials: {
    eyebrow: "In their words",
    headline: "Clients on working with us.",
    items: [
      {
        quote:
          "They talked us out of the first house we loved — it had a foundation problem we couldn't see. That honesty is why we bought the second one through them too.",
        name: "Marcus & Lena Hill",
        detail: "Bought in Brookside",
      },
      {
        quote:
          "Sold in nine days, over asking, with one agent who answered the phone every single time. I never felt like a number.",
        name: "Joan Petrakis",
        detail: "Sold in Highland Park",
      },
      {
        quote:
          "We relocated from out of state and bought a home we'd only seen on video. Priya's read on the neighborhood was exactly right.",
        name: "The Adeyemi Family",
        detail: "Relocated to Eastgate",
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    headline: "Schedule a consultation.",
    subhead:
      "Buying, selling, or just weighing your options — tell us a little and we'll be in touch within one business day. No obligation.",
    phone: "(555) 204-7780",
    intentOptions: ["I'm buying", "I'm selling", "Both", "Just exploring"],
  },

  footer: {
    address: "118 Meridian Row, Suite 400\nHighland Park",
    phone: "(555) 204-7780",
    email: "hello@meridian.example",
    // Real estate sites commonly require the broker's license number on the
    // page by law — placeholder for the portfolio build.
    license: "Licensed Real Estate Broker · Lic. #00-RE-PLACEHOLDER",
    social: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    map: {
      src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
      alt: "Map showing the Meridian Properties office location",
    },
  },
} as const;
