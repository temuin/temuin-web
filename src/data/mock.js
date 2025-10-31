// Mock data for TEMUIN website

export const portfolioProjects = [
  {
    id: 1,
    title: "Enterprise E-Commerce Platform",
    category: "Web Development",
    description: "Full-scale e-commerce solution with advanced inventory management and analytics dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3",
    client: "RetailCorp Indonesia"
  },
  {
    id: 2,
    title: "FinTech Mobile Application",
    category: "App Development",
    description: "Secure banking app with real-time transactions and AI-powered insights",
    tech: ["React Native", "Firebase", "TensorFlow"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4",
    client: "Digital Bank Asia"
  },
  {
    id: 3,
    title: "Healthcare Dashboard System",
    category: "UI/UX Design",
    description: "Intuitive patient management system with real-time monitoring and scheduling",
    tech: ["Figma", "React", "Material-UI"],
    year: 2023,
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
    client: "MediCare Solutions"
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
