export const siteContent = {
  brand: "Clearwater Dental",
  
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Our Philosophy", href: "#philosophy" },
      { label: "The Team", href: "#team" },
      { label: "Patient Info", href: "#patient-info" },
    ],
    cta: {
      label: "Book Appointment",
      href: "#book",
    }
  },

  hero: {
    headline: "Calm, clear, and focused on you.",
    subhead: "We believe a visit to the dentist should leave you feeling refreshed, not stressed. Experience modern, gentle care in a truly relaxing environment.",
    primaryCta: {
      label: "Book an Appointment",
      href: "#book",
    },
    secondaryCta: {
      label: "Call (555) 123-4567",
      href: "tel:5551234567",
    }
  },

  services: {
    eyebrow: "Our Services",
    headline: "Comprehensive care, gently delivered.",
    items: [
      {
        id: "cleanings",
        name: "Preventative Care",
        description: "Gentle cleanings, exams, and digital x-rays to keep your smile healthy.",
        icon: "ShieldCheck",
      },
      {
        id: "cosmetic",
        name: "Cosmetic Dentistry",
        description: "Professional whitening, veneers, and bonding for a confident smile.",
        icon: "Sparkles",
      },
      {
        id: "restorative",
        name: "Restorative Treatments",
        description: "Crowns, bridges, and tooth-colored fillings that blend seamlessly.",
        icon: "Wrench",
      },
      {
        id: "implants",
        name: "Dental Implants",
        description: "Permanent, natural-looking replacements for missing teeth.",
        icon: "Activity",
      },
      {
        id: "invisalign",
        name: "Clear Aligners",
        description: "Discreet orthodontic treatment for a perfectly straight smile.",
        icon: "Smile",
      },
      {
        id: "emergency",
        name: "Emergency Care",
        description: "Same-day appointments available for urgent dental needs.",
        icon: "Clock",
      }
    ]
  },

  philosophy: {
    eyebrow: "Why Choose Us",
    headline: "We know the dentist isn't your favorite place.",
    description: "That's why we've redesigned the entire experience. From our calming waiting room to our judgment-free approach, everything at Clearwater is built to alleviate anxiety and put you in control of your health.",
    points: [
      {
        title: "Gentle Philosophy",
        description: "We explain every step, never rush, and use the latest pain-management techniques."
      },
      {
        title: "Modern Tech",
        description: "Digital scanning and quiet instruments mean faster, more comfortable visits."
      },
      {
        title: "Total Transparency",
        description: "No surprise bills. We review all treatment plans and costs before we begin."
      }
    ]
  },

  team: {
    eyebrow: "Meet the Team",
    headline: "Familiar faces, expert care.",
    members: [
      {
        name: "Dr. Elena Rostova",
        role: "Lead Dentist, DDS",
        bio: "Dr. Rostova founded Clearwater to create the anxiety-free clinic she wished existed. She specializes in gentle restorative care.",
        image: {
          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
          alt: "Dr. Elena Rostova smiling in clinic"
        }
      },
      {
        name: "Dr. James Chen",
        role: "Prosthodontist, DMD",
        bio: "An expert in complex restorations and implants, Dr. Chen's calm demeanor puts even the most nervous patients at ease.",
        image: {
          src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
          alt: "Dr. James Chen"
        }
      },
      {
        name: "Sarah Jenkins",
        role: "Lead Hygienist",
        bio: "Sarah is known for her incredibly gentle touch and her passion for patient education. She ensures every cleaning is a breeze.",
        image: {
          src: "https://images.unsplash.com/photo-1594824436998-040924fc400e?q=80&w=600&auto=format&fit=crop",
          alt: "Sarah Jenkins"
        }
      }
    ]
  },

  gallery: {
    eyebrow: "Results",
    headline: "Healthy, happy smiles.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop",
        alt: "Patient smiling brightly"
      },
      {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
        alt: "Close up of healthy smile"
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        alt: "Confident patient smile"
      },
      {
        src: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=800&auto=format&fit=crop",
        alt: "Happy patient portrait"
      }
    ]
  },

  patientInfo: {
    eyebrow: "Patient Info",
    headline: "Simple, transparent scheduling.",
    insurance: [
      "Delta Dental", "Cigna", "Aetna", "BlueCross", "MetLife", "Guardian"
    ]
  },

  footer: {
    map: {
      src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
      alt: "Map showing clinic location"
    },
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Yelp", href: "#" }
    ]
  }
};
