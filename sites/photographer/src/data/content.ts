export const siteContent = {
  brand: "WREN HALE",
  nav: {
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
    ],
    cta: {
      label: "Inquire",
      href: "#inquire",
    },
  },
  hero: {
    headline: "Capturing the quiet moments.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    parallaxImages: [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
      // If we had cutouts, we'd place foreground elements here, but we will use CSS scaling for parallax depth
    ],
    primaryCta: {
      label: "View Work",
      href: "#portfolio",
    },
    secondaryCta: {
      label: "Inquire",
      href: "#inquire",
    },
  },
  portfolio: {
    categories: ["All", "Editorial", "Portrait", "Commercial"],
    images: [
      {
        id: "img1",
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
        alt: "Editorial portrait 1",
        category: "Editorial",
        aspect: "aspect-[3/4]"
      },
      {
        id: "img2",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        alt: "Studio portrait",
        category: "Portrait",
        aspect: "aspect-square"
      },
      {
        id: "img3",
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        alt: "Commercial lifestyle",
        category: "Commercial",
        aspect: "aspect-[4/5]"
      },
      {
        id: "img4",
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
        alt: "Portrait 2",
        category: "Portrait",
        aspect: "aspect-[3/4]"
      },
      {
        id: "img5",
        src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop",
        alt: "Editorial 2",
        category: "Editorial",
        aspect: "aspect-video"
      },
      {
        id: "img6",
        src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
        alt: "Commercial product",
        category: "Commercial",
        aspect: "aspect-[3/4]"
      },
      {
        id: "img7",
        src: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=800&auto=format&fit=crop",
        alt: "Portrait 3",
        category: "Portrait",
        aspect: "aspect-square"
      },
      {
        id: "img8",
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
        alt: "Editorial 3",
        category: "Editorial",
        aspect: "aspect-[4/3]"
      }
    ]
  },
  about: {
    headline: "Observer.",
    text: "My approach is rooted in quiet observation. Whether on a busy commercial set or an intimate editorial session, my goal is to strip away the artifice and capture a moment of genuine presence. I shoot primarily on medium format digital and 35mm film.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  },
  process: {
    headline: "How it works.",
    steps: [
      {
        title: "01. Inquiry",
        description: "Submit a brief regarding your project, timeline, and budget. I will review and respond within 48 hours to confirm availability."
      },
      {
        title: "02. Consultation",
        description: "We discuss the creative direction, mood boards, and logistical requirements to ensure our visions align."
      },
      {
        title: "03. The Shoot",
        description: "Execution on set or on location. Depending on the scale, I work independently or bring on a dedicated lighting and styling crew."
      },
      {
        title: "04. Delivery",
        description: "High-resolution selects are delivered via private digital gallery within the agreed timeframe, fully retouched and licensed."
      }
    ]
  },
  testimonials: [
    {
      quote: "Wren has an incredible ability to make anyone feel completely at ease. The resulting images are the most honest portraits I've ever seen of myself.",
      author: "Sarah L.",
      role: "Editorial Subject",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  ],
  footer: {
    instagram: "https://instagram.com",
    email: "hello@wrenhale.com",
    location: "Based in New York. Available worldwide."
  }
};
