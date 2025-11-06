// Mock data for TEMUIN website
// Updated: Vault9 project with live deployment link

export const portfolioProjects = [
  {
    id: 1,
    title: "Vault9",
    category: "Web Development",
    description: "Elegant perfumery e-commerce platform with premium design and seamless user experience",
    tech: ["React", "Vite", "TailwindCSS", "Node.js"],
    year: 2024,
    image: "https://image2url.com/images/1761995696516-95d78e02-2736-4f71-868e-342b9bdb2d23.png",
    client: "Vault9 Perfumery",
    link: "https://vault9.base44.app",
    status: "deployed"
  },
  {
    id: 2,
    title: "V Golf and Cafe Website",
    category: "Web Development",
    description: "V Golf and Cafe is a web of V Golf and Cafe business that offers a unique blend of golfing experience and cafe delights, providing customers with a relaxing environment to enjoy both activities.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    year: 2025,
    image: "https://image2url.com/images/1761999727339-86392721-1267-4324-bb6a-67fcaa2622ce.jpg",
    client: "V Golf and Cafe",
    link: "https://vgolfcafe.temuin.live/",
    status: "deployed"
  },
  {
    id: 3,
    title: "Futsalin Mobile App",
    category: "Mobile App Development",
    description: "Futsalin is a mobile app designed for futsal players, teams, and field owners. It helps you find futsal courts, organize matches, manage teams, and connect with other players nearby — all in one platform.",
    tech: ["Flutter", "Supabase", "Google OAuth"],
    year: 2025,
    image: "https://image2url.com/images/1761995601108-450f8662-711b-40f5-8b9f-51f0ff9eed7b.jpg",
    client: "Futsalin",
    link: null,
    status: "in-development"
  }
];

export const services = [
  {
    id: 1,
    icon: "Globe",
    title: "Web Development",
    description: "Custom websites, CMS integration, and performance optimization tailored to your business needs."
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "App Development",
    description: "Scalable Android/iOS applications built with modern technology and best practices."
  },
  {
    id: 3,
    icon: "Palette",
    title: "UI/UX Design",
    description: "Clean, intuitive, and emotionally resonant designs that elevate user experience."
  },
  {
    id: 4,
    icon: "GitMerge",
    title: "System Integration",
    description: "Seamless API and backend systems integration to connect all your digital tools."
  }
];

export const pricingData = {
  web: [
    {
      tier: "Starter Website",
      description: "Up to 5 pages, responsive design, contact form, basic SEO",
      priceIDR: { min: 5000000, max: 8000000 },
      priceUSD: { min: 310, max: 500 },
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO optimization",
        "Mobile-friendly",
        "1 month support"
      ],
      popular: false
    },
    {
      tier: "Professional Website",
      description: "Custom CMS, SEO optimization, performance tuning",
      priceIDR: { min: 10000000, max: 20000000 },
      priceUSD: { min: 625, max: 1250 },
      features: [
        "Custom CMS integration",
        "Advanced SEO optimization",
        "Performance tuning",
        "Analytics integration",
        "Blog system",
        "3 months support"
      ],
      popular: true
    },
    {
      tier: "Enterprise Website",
      description: "Full e-commerce or dashboard with backend system",
      priceIDR: { min: 25000000, max: 50000000 },
      priceUSD: { min: 1560, max: 3125 },
      features: [
        "E-commerce or dashboard",
        "Custom backend system",
        "Payment integration",
        "Admin panel",
        "API development",
        "6 months support"
      ],
      popular: false
    }
  ],
  app: [
    {
      tier: "Basic App",
      description: "Simple Android/iOS app with core features",
      priceIDR: { min: 15000000, max: 25000000 },
      priceUSD: { min: 940, max: 1560 },
      features: [
        "Single platform (iOS or Android)",
        "Core features only",
        "Basic UI/UX design",
        "App store submission",
        "2 months support"
      ],
      popular: false
    },
    {
      tier: "Advanced App",
      description: "API integration, user login, admin dashboard",
      priceIDR: { min: 30000000, max: 60000000 },
      priceUSD: { min: 1875, max: 3750 },
      features: [
        "Cross-platform (iOS & Android)",
        "API integration",
        "User authentication",
        "Push notifications",
        "Admin dashboard",
        "4 months support"
      ],
      popular: true
    },
    {
      tier: "Enterprise App",
      description: "Cloud-based scalable app with backend system",
      priceIDR: { min: 75000000, max: null },
      priceUSD: { min: 4700, max: null },
      features: [
        "Scalable cloud infrastructure",
        "Custom backend system",
        "Real-time features",
        "Advanced analytics",
        "Multi-tenant support",
        "12 months support"
      ],
      popular: false
    }
  ]
};
