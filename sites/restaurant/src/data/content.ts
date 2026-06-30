/**
 * Typed content for the restaurant site.
 * Tone: Sensory, unhurried, specific. Short sentences. No exclamation points.
 */

export const siteContent = {
  brand: "Ember & Salt",

  nav: {
    links: [
      { label: "Our Philosophy", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
    ],
    cta: { label: "Reserve a table", href: "#reservations" },
  },

  hero: {
    headline: "Ember & Salt",
    subhead: "Wood-fired seasonal plates. Warm light. The kind of bread you tear, not slice.",
    primaryCta: { label: "Reserve a table", href: "#reservations" },
    secondaryCta: { label: "View menu", href: "#menu" },
  },

  about: {
    eyebrow: "Our Philosophy",
    headline: "Cooking over open flame changes the nature of an ingredient.",
    description:
      "We source locally and cook simply. The char from the wood grill. The bite of coarse salt. We believe the best meals are unhurried, shared, and loud with conversation. Come as you are, and let us take care of the rest.",
    image: {
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
      alt: "Chef working over a wood-fired grill",
    },
  },

  menuPreview: {
    eyebrow: "The Menu",
    headline: "A taste of what's cooking",
    items: [
      {
        name: "Charred Heirloom Carrots",
        description: "Whipped ricotta, spiced honey, toasted pistachios.",
        price: "$14",
        image: {
          src: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=600&auto=format&fit=crop",
          alt: "Roasted carrots on a ceramic plate",
        },
      },
      {
        name: "Wood-Fired Ribeye",
        description: "Dry-aged 30 days. Blistered shishito peppers, smoked sea salt.",
        price: "$48",
        image: {
          src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop",
          alt: "Sliced steak with peppers",
        },
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Foraged chanterelles, aged parmesan, truffle oil drizzle.",
        price: "$28",
        image: {
          src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop",
          alt: "Creamy mushroom risotto",
        },
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "Dark caramelized crust, molten center. Served with seasonal fruit compote.",
        price: "$12",
        image: {
          src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=600&auto=format&fit=crop",
          alt: "Basque cheesecake slice",
        },
      },
    ],
  },

  gallery: {
    eyebrow: "Atmosphere",
    headline: "Settle in",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        alt: "Warm, dimly lit restaurant interior",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
        alt: "Table set for a meal",
      },
      {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        alt: "Bartender pouring a drink",
      },
      {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
        alt: "Close up of food preparation",
      },
      {
        src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
        alt: "Restaurant exterior at night",
      },
    ],
  },

  reservations: {
    eyebrow: "Reservations",
    headline: "Save your seat",
    description: "Bookings open 30 days in advance. For parties of 6 or more, please call us directly.",
    info: {
      address: "124 Market Street\nPortland, OR 97204",
      phone: "(555) 019-2834",
      hours: [
        { days: "Wed – Sun", time: "5:00 PM – 10:30 PM" },
        { days: "Mon – Tue", time: "Closed" },
      ],
    },
  },

  footer: {
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    map: {
      src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
      alt: "Map showing Ember & Salt location",
    },
  },
} as const;
