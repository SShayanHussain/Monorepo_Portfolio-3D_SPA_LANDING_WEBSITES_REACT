export const siteContent = {
  brand: "FORGE FITNESS",
  nav: {
    links: [
      { label: "Classes", href: "#classes" },
      { label: "Trainers", href: "#trainers" },
      { label: "Memberships", href: "#memberships" },
      { label: "Schedule", href: "#schedule" },
    ],
    cta: {
      label: "Start Free Trial",
      href: "#book",
    },
  },
  hero: {
    headline: "TRAIN HARDER. RECOVER SMARTER.",
    subhead: "The ultimate strength and conditioning facility designed to push your limits and forge the best version of you.",
    primaryCta: {
      label: "START FREE TRIAL",
      href: "#book",
    },
    secondaryCta: {
      label: "VIEW CLASSES",
      href: "#classes",
    },
  },
  classes: {
    eyebrow: "Our Methods",
    headline: "FIND YOUR FIRE",
    items: [
      {
        id: "hiit",
        name: "HIIT Inferno",
        icon: "Flame",
        description: "High-intensity interval training designed to maximize calorie burn and cardiovascular endurance.",
      },
      {
        id: "strength",
        name: "Barbell Basics",
        icon: "Dumbbell",
        description: "Focus on the big lifts. Build raw strength, perfect your form, and push heavier plates.",
      },
      {
        id: "mobility",
        name: "Flow & Recover",
        icon: "Activity",
        description: "Active recovery sessions focusing on joint mobility, deep stretching, and muscle repair.",
      },
      {
        id: "endurance",
        name: "Engine Build",
        icon: "Heart",
        description: "Long-duration, sustained effort workouts on rowers, bikes, and treads to build an unstoppable engine.",
      },
      {
        id: "hybrid",
        name: "The Forge Hybrid",
        icon: "Zap",
        description: "Our signature class mixing heavy lifts with intense sprint intervals. Not for the faint of heart.",
      },
    ],
  },
  trainers: {
    eyebrow: "The Coaches",
    headline: "LEARN FROM THE BEST",
    members: [
      {
        name: "Jaxson 'Jax' Vance",
        role: "Head Strength Coach",
        bio: "Former collegiate powerlifter. Jax doesn't do excuses. He focuses on perfect mechanics and maximum effort.",
        image: {
          src: "https://images.unsplash.com/photo-1567013127542-490d732e519a?q=80&w=800&auto=format&fit=crop",
          alt: "Jaxson Vance",
        },
      },
      {
        name: "Maya Silva",
        role: "HIIT & Conditioning Lead",
        bio: "With a background in track and field, Maya's classes are fast, loud, and relentless. Bring a towel.",
        image: {
          src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
          alt: "Maya Silva",
        },
      },
      {
        name: "Dr. Marcus Chen",
        role: "Recovery & Mobility",
        bio: "A physical therapist who ensures you train hard without breaking down. Marcus keeps you in the game.",
        image: {
          src: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800&auto=format&fit=crop",
          alt: "Dr. Marcus Chen",
        },
      },
    ],
  },
  memberships: {
    eyebrow: "Join the Forge",
    headline: "CHOOSE YOUR PLAN",
    plans: [
      {
        name: "Drop-in",
        price: "$25",
        period: "/ class",
        features: ["Access to any standard class", "Locker room & showers", "Towels included"],
        cta: "Buy Pass",
        popular: false,
      },
      {
        name: "Unlimited",
        price: "$149",
        period: "/ month",
        features: ["Unlimited classes", "Open gym access", "1 InBody scan per month", "Guest pass (1/mo)"],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "The Forge Elite",
        price: "$299",
        period: "/ month",
        features: ["Unlimited classes", "Unlimited open gym", "2 Personal training sessions", "Weekly recovery sessions", "Priority class booking"],
        cta: "Join Elite",
        popular: false,
      },
    ],
  },
  socialProof: {
    eyebrow: "The Results",
    headline: "PROOF IN THE IRON",
    stats: [
      { value: "500+", label: "Active Members" },
      { value: "10,000+", label: "Pounds Lifted" },
      { value: "5", label: "Years Strong" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
        alt: "Members working out",
      },
      {
        src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
        alt: "Kettlebell training",
      },
      {
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
        alt: "Weightlifting chalk",
      },
      {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
        alt: "Group training",
      },
    ],
  },
  footer: {
    map: {
      src: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop",
      alt: "Map to gym location",
    },
    social: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "TikTok", href: "#" },
    ],
  },
};
