export const siteContent = {
  brand: "Meridian Properties",
  nav: {
    links: [
      { label: "Listings", href: "#listings" },
      { label: "Process", href: "#process" },
      { label: "Agents", href: "#agents" },
      { label: "Reviews", href: "#testimonials" },
    ],
    cta: {
      label: "Schedule a Consultation",
      href: "#contact",
    },
  },
  hero: {
    headline: "Find the home that finds you.",
    subhead: "Meridian Properties is a boutique residential agency matching discerning clients with exceptional homes.",
    primaryCta: {
      label: "Schedule a Consultation",
      href: "#contact",
    },
    secondaryCta: {
      label: "Browse Listings",
      href: "#listings",
    },
  },
  featuredListings: {
    eyebrow: "Featured Properties",
    headline: "CURATED FOR YOU",
    listings: [
      {
        id: "l1",
        address: "1248 Oakwood Drive, Brentwood",
        price: "$2,850,000",
        beds: 4,
        baths: 3.5,
        sqft: "3,200",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "l2",
        address: "880 Skyline Avenue, Penthouse B",
        price: "$4,100,000",
        beds: 3,
        baths: 3,
        sqft: "2,850",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "l3",
        address: "34 Maple Court, Highland Park",
        price: "$1,650,000",
        beds: 5,
        baths: 4,
        sqft: "4,100",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "l4",
        address: "1200 Ocean View Blvd",
        price: "$5,500,000",
        beds: 4,
        baths: 5,
        sqft: "5,000",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  stats: {
    metrics: [
      { value: 15, suffix: "+", label: "Years Experience" },
      { value: 500, suffix: "+", label: "Homes Sold" },
      { value: 14, suffix: "", label: "Avg Days on Market" },
      { value: 1.2, suffix: "B", prefix: "$", label: "Volume Sold" },
    ]
  },
  process: {
    eyebrow: "Our Approach",
    headline: "HOW WE WORK",
    steps: [
      {
        title: "1. The Discovery",
        description: "We start with a thorough consultation to understand exactly what you're looking for, or how to best position your home for sale."
      },
      {
        title: "2. The Strategy",
        description: "For sellers, we execute a targeted marketing plan. For buyers, we curate a highly specific list of off-market and on-market properties."
      },
      {
        title: "3. The Negotiation",
        description: "We leverage our 15+ years of market knowledge to secure the absolute best terms and price on your behalf."
      },
      {
        title: "4. The Closing",
        description: "We handle all the logistical complexities, ensuring a seamless and stress-free transition into your new chapter."
      }
    ]
  },
  agents: {
    eyebrow: "The Team",
    headline: "EXPERT GUIDANCE",
    members: [
      {
        name: "Eleanor Hayes",
        title: "Principal Broker",
        bio: "Eleanor founded Meridian with a vision to bring personalized, high-end service to the residential market.",
        phone: "(555) 019-8234",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Marcus Thorne",
        title: "Senior Partner",
        bio: "Marcus specializes in luxury condominiums and has consistently ranked in the top 1% of agents citywide.",
        phone: "(555) 019-8235",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
      },
      {
        name: "Julia Chen",
        title: "Listing Specialist",
        bio: "Julia's background in interior architecture allows her to stage and market homes to maximize their value.",
        phone: "(555) 019-8236",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  testimonials: {
    eyebrow: "Client Stories",
    headline: "A PROVEN TRACK RECORD",
    reviews: [
      {
        text: "Eleanor and her team are in a class of their own. They found us our dream home before it even hit the market and negotiated brilliantly.",
        author: "Sarah & David M.",
        role: "Buyers"
      },
      {
        text: "Marcus sold our penthouse in just 8 days for over asking price. The marketing materials were spectacular and the process was effortless.",
        author: "James L.",
        role: "Seller"
      },
      {
        text: "As a first-time seller, I was anxious about the process. Julia walked me through every step, staged the house perfectly, and handled everything.",
        author: "Elena R.",
        role: "Seller"
      }
    ]
  },
  contact: {
    eyebrow: "Let's Talk",
    headline: "SCHEDULE A CONSULTATION",
    subhead: "Ready to make a move? Contact us today to discuss your real estate goals."
  },
  footer: {
    address: [
      "Meridian Properties",
      "400 Corporate Pointe, Suite 300",
      "Los Angeles, CA 90030",
    ],
    phone: "(555) 019-8000",
    email: "inquiries@meridianproperties.com",
    license: "DRE #01928374",
  },
};
