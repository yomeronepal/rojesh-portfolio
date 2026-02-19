// Site configuration
// Rojesh Prajapati Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Rojesh Prajapati | Software Developer & DevOps Engineer",
  description: "Highly skilled Software Developer and DevOps Engineer with 5+ years of experience in backend development, cloud infrastructure, and CI/CD pipelines. Expert in Python, Django, React.js, AWS, and DevOps practices.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Rojesh.",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  contactLabel: "Get in Touch",
  contactHref: "mailto:rojesh.praz@gmail.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Rojesh Prajapati",
  roles: ["Python Developer", "DevOps Engineer", "Backend Specialist", "Cloud Architect"],
  backgroundImage: "images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "Highly skilled and results-driven Software Developer and DevOps Engineer with 5+ years of experience in backend development, cloud infrastructure, and CI/CD pipelines. Strong expertise in Python, Django, React.js, AWS, and DevOps practices. Proven track record of building and maintaining scalable, secure applications and leading end-to-end software delivery processes. Based in Madhyapur Thimi, Bhaktapur, Nepal.",
  experienceValue: "5+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "15+", label: "Projects\nDelivered" },
    { value: "4", label: "Companies\nWorked" },
    { value: "20+", label: "Technologies\nMastered" },
  ],
  images: [
    { src: "images/about-1.jpg", alt: "Rojesh in the Himalayas" },
    { src: "images/avatar.jpg", alt: "Rojesh Avatar" },
    { src: "images/about-1.jpg", alt: "Mountain Adventure" },
    { src: "images/avatar.jpg", alt: "Professional Avatar" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Can Do For You",
  services: [
    {
      iconName: "Code",
      title: "Backend Development",
      description: "Building robust and scalable backend applications using Python, Django, Flask, and FastAPI. Expert in RESTful and GraphQL API development with comprehensive testing.",
      image: "images/service-1.jpg",
    },
    {
      iconName: "Cloud",
      title: "Cloud & DevOps",
      description: "Designing and implementing cloud infrastructure on AWS, GCP, and Azure. Setting up CI/CD pipelines with GitHub Actions, Docker containerization, and Kubernetes orchestration.",
      image: "images/service-2.jpg",
    },
    {
      iconName: "Database",
      title: "Database Design",
      description: "Creating optimized database schemas and queries for PostgreSQL and MySQL. Implementing caching strategies with Redis and message queues with Celery and Apache Kafka.",
      image: "images/service-3.jpg",
    },
    {
      iconName: "Plug",
      title: "API Integration",
      description: "Integrating third-party services including Stripe payments, Google Maps API, AWS IoT Core, CyberSource, CometChat, RevenueCat, and more for enhanced functionality.",
      image: "images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  url: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Featured Projects",
  description: "A selection of projects I've worked on throughout my career, spanning IoT applications, healthcare platforms, e-commerce solutions, and AI-powered systems.",
  projects: [
    {
      title: "Willow",
      category: "IoT Plant Monitoring",
      year: "2023",
      image: "images/project-willow.jpg",
      url: "https://plantwithwillow.com.au/",
      featured: true,
    },
    {
      title: "Hercules Pharmaceutical",
      category: "Healthcare Platform",
      year: "2022",
      image: "images/project-hercules.jpg",
      url: "https://www.herculesrx.com/",
    },
    {
      title: "BackToWork AI",
      category: "AI Job Platform",
      year: "2023",
      image: "images/project-backtowork.jpg",
      url: "https://backtowork.ai/",
    },
    {
      title: "SRVD",
      category: "Legal Document Serving",
      year: "2022",
      image: "images/project-srvd.jpg",
      url: "https://ursrvd.com/",
    },
    {
      title: "RevX Bot",
      category: "Crypto Trading Platform",
      year: "2023",
      image: "images/project-revx.jpg",
      url: "https://revxsys.com/",
    },
    {
      title: "Trackify",
      category: "Time Tracking System",
      year: "2021",
      image: "images/project-trackify.jpg",
      url: "https://trackify.outcodetest.com/",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Work Together",
    linkText: "Start a Conversation",
    linkHref: "mailto:rojesh.praz@gmail.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Rojesh delivered exceptional work on our IoT plant monitoring system. His expertise in Python, Django, and AWS IoT Core helped us build a scalable solution that our customers love.",
      author: "Project Manager",
      role: "Tech Lead",
      company: "Tekkon Technologies",
      image: "images/avatar.jpg",
      rating: 5,
    },
    {
      quote: "Working with Rojesh was a great experience. He implemented secure payment integration with Stripe and set up robust CI/CD pipelines that significantly improved our deployment process.",
      author: "Team Lead",
      role: "Engineering Manager",
      company: "Outcode Software",
      image: "images/avatar.jpg",
      rating: 5,
    },
    {
      quote: "Rojesh's backend development skills are top-notch. He built complex APIs and database models that powered our healthcare platform, ensuring security and performance at scale.",
      author: "Product Owner",
      role: "Product Manager",
      company: "Prixa Technologies",
      image: "images/avatar.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Python Developer", "DevOps Engineer", "Backend Specialist"],
  heading: "Ready to Build Something Amazing?",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something extraordinary together.",
  buttonText: "Get in Touch",
  buttonHref: "mailto:rojesh.praz@gmail.com",
  email: "rojesh.praz@gmail.com",
  backgroundImage: "images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Rojesh.",
  description: "Software Developer & DevOps Engineer based in Nepal. Building scalable, secure applications and leading end-to-end software delivery processes.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Backend Development", href: "#services" },
        { label: "Cloud & DevOps", href: "#services" },
        { label: "Database Design", href: "#services" },
        { label: "API Integration", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "rojesh.praz@gmail.com", href: "mailto:rojesh.praz@gmail.com" },
        { label: "+977 9849423800", href: "tel:+9779849423800" },
        { label: "Madhyapur Thimi, Bhaktapur, Nepal", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com/yomeronepal", label: "GitHub" },
    { iconName: "Linkedin", href: "#", label: "LinkedIn" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Mail", href: "mailto:rojesh.praz@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get the latest updates on my projects and tech insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Rojesh Prajapati. All rights reserved.",
  credit: "Designed & Built with passion in Nepal",
};
