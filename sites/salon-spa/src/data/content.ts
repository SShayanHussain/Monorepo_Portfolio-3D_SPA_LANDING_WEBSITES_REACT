export const siteContent = {
  brand: "Lumen Studio",
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Stylists", href: "#stylists" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#testimonials" },
    ],
    cta: {
      label: "Book Now",
      href: "#booking",
    },
  },
  hero: {
    headline: "Radiance, Reimagined.",
    subhead: "A sanctuary for modern hair and skin care. Discover your ultimate glow in our luxurious day spa and salon.",
    primaryCta: {
      label: "Book Your Appointment",
      href: "#booking",
    },
    secondaryCta: {
      label: "View Services",
      href: "#services",
    },
  },
  services: {
    eyebrow: "Our Offerings",
    headline: "CURATED TREATMENTS",
    categories: [
      {
        id: "hair",
        title: "Hair Design & Color",
        items: [
          { name: "Signature Cut & Style", duration: "60 min", price: "$95+" },
          { name: "Balayage & Gloss", duration: "180 min", price: "$250+" },
          { name: "Full Highlighting", duration: "150 min", price: "$210+" },
          { name: "Restorative Hair Masque", duration: "30 min", price: "$45" },
        ]
      },
      {
        id: "spa",
        title: "Spa & Skin Care",
        items: [
          { name: "Lumen Signature Facial", duration: "60 min", price: "$145" },
          { name: "Hydrafacial MD", duration: "45 min", price: "$199" },
          { name: "Hot Stone Massage", duration: "90 min", price: "$180" },
          { name: "Aromatherapy Massage", duration: "60 min", price: "$130" },
        ]
      },
      {
        id: "nails",
        title: "Nails & Beauty",
        items: [
          { name: "Gel Manicure", duration: "45 min", price: "$55" },
          { name: "Spa Pedicure", duration: "60 min", price: "$75" },
          { name: "Lash Lift & Tint", duration: "45 min", price: "$110" },
          { name: "Brow Lamination", duration: "45 min", price: "$85" },
        ]
      }
    ]
  },
  gallery: {
    eyebrow: "Portfolio",
    headline: "OUR WORK",
    images: [
      { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", alt: "Blonde balayage" },
      { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", alt: "Spa treatment" },
      { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop", alt: "Nail art" },
      { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", alt: "Facial massage" },
      { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop", alt: "Hair cutting" },
      { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop", alt: "Relaxing spa" },
      { src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop", alt: "Beautiful hair" },
      { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop", alt: "Skincare products" },
      { src: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop", alt: "Hair coloring" },
      { src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=800&auto=format&fit=crop", alt: "Massage stones" },
      { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop", alt: "Manicure" },
      { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", alt: "Hair styling" },
    ]
  },
  stylists: {
    eyebrow: "Our Team",
    headline: "MEET THE EXPERTS",
    members: [
      {
        name: "Clara Vance",
        title: "Master Colorist & Founder",
        bio: "With over 15 years of experience, Clara specializes in lived-in color and balayage techniques that enhance natural beauty.",
        image: {
          src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
          alt: "Clara Vance",
        },
      },
      {
        name: "David Chen",
        title: "Lead Aesthetician",
        bio: "David is renowned for his holistic approach to skin health, combining cutting-edge technology with restorative massage.",
        image: {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          alt: "David Chen",
        },
      },
      {
        name: "Maya Brooks",
        title: "Senior Stylist",
        bio: "Maya's precision cuts and textured styling have made her highly sought after for both everyday wear and special events.",
        image: {
          src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
          alt: "Maya Brooks",
        },
      },
    ],
  },
  testimonials: {
    eyebrow: "Love Notes",
    headline: "CLIENT STORIES",
    reviews: [
      {
        text: "I've never felt more taken care of. The balayage Clara did is flawless, and the entire studio feels like a luxurious escape from the city.",
        author: "Sarah J.",
        service: "Color & Cut"
      },
      {
        text: "David's signature facial completely transformed my skin. He took the time to understand my concerns and recommended a routine that actually works.",
        author: "Emily R.",
        service: "Lumen Signature Facial"
      },
      {
        text: "The atmosphere is so calming and the staff is incredibly talented. I always leave feeling completely refreshed and renewed.",
        author: "Jessica T.",
        service: "Spa Package"
      },
    ],
  },
  bookingFooter: {
    eyebrow: "Visit Us",
    headline: "READY FOR YOUR GLOW?",
    address: [
      "450 Beauty Lane, Suite 100",
      "Los Angeles, CA 90015",
    ],
    hours: [
      "Tue - Fri: 10am - 7pm",
      "Sat: 9am - 5pm",
      "Sun - Mon: Closed"
    ],
    phone: "(310) 555-8241",
    email: "hello@lumenstudio.com",
    map: {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
      alt: "Lumen Studio interior",
    },
  },
};
