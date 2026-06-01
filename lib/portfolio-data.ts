export const personalInfo = {
  fullName: "Muhammad Sarmad Khalique",
  professionalTitle: "Full Stack & AI Engineer",
  headline:
    "I build scalable SaaS products and AI-powered systems using Python, FastAPI, Django, React, and modern cloud infrastructure.",
  location: "Pakistan",
  linkedinUrl:
    "https://www.linkedin.com/in/muhammad-sarmad-khalique-9b26a7197",
  email: "sarmadkhalique001@gmail.com",
  calendlyUrl: "https://calendly.com/sarmadkhalique001/new-meeting",
  shortBio:
    "Full Stack Engineer with experience building SaaS platforms, AI-powered applications, healthcare solutions, enterprise systems, and scalable backend architectures. Experienced in leading product development from architecture to deployment while collaborating directly with international clients.",
  yearsExperience: "4+",
} as const;

export const branding = {
  tagline: "Building scalable SaaS products and AI-powered systems.",
  valueProposition: [
    "End-to-end product development",
    "AI and LLM integrations",
    "Scalable backend architecture",
    "SaaS platform development",
    "Cloud-native deployments",
    "Startup and MVP execution",
  ],
} as const;

export const about = {
  summary: `I specialize in building scalable SaaS applications and AI-powered systems using Python, Django, FastAPI, React, and Next.js.

As a Founding Engineer, I have led development of production-grade web applications, AI solutions, and backend architectures while working directly with global clients.

My expertise spans backend systems, AI integrations, cloud infrastructure, and full product development from concept to deployment.`,
  interests: [
    "Artificial Intelligence",
    "SaaS Products",
    "LLM Applications",
    "Automation Workflows",
    "Cloud Architecture",
    "Product Engineering",
  ],
} as const;

export const openTo = [
  "Remote Opportunities",
  "Global Teams",
  "Freelance Projects",
  "Contract Work",
  "Startup Collaborations",
] as const;

export const expertise = {
  backend: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "Flask",
    "GraphQL",
    "REST APIs",
    "Microservices",
  ],
  frontend: [
    "React",
    "Next.js",
    "Redux",
    "Apollo GraphQL",
    "Tailwind CSS",
  ],
  aiMl: [
    "OpenAI APIs",
    "LLM Applications",
    "RAG Systems",
    "Vector Databases",
    "AI Agents",
    "Embeddings",
    "Prompt Engineering",
    "Machine Learning",
  ],
  cloudDevops: ["AWS", "Docker", "CloudWatch", "CI/CD", "Deployment Automation"],
  databases: ["PostgreSQL", "MySQL", "Vector Databases"],
  architecture: [
    "SaaS Architecture",
    "Distributed Systems",
    "Event-Driven Systems",
    "Scalable APIs",
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  duration: string;
  employmentType?: string;
  location?: string;
  highlights: string[];
  achievements?: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Torch Solutions",
    role: "Founding Engineer / Software Engineer",
    duration: "Jul 2024 - Present",
    employmentType: "Full-Time",
    location: "Remote",
    highlights: [
      "Led end-to-end development of SaaS and AI products.",
      "Built Healthcare AI Scribe platform.",
      "Developed AI-powered patient data chatbots.",
      "Created AI form-generation platform.",
      "Built farm management and financial systems.",
      "Designed scalable FastAPI and Django architectures.",
      "Led development teams and technical decisions.",
      "Managed AWS and Docker infrastructure.",
    ],
    achievements: [
      "HIPAA-compliant healthcare AI platform",
      "EMR integrations (Athena)",
      "LLM and RAG implementation",
      "AI workflow automation",
    ],
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "OpenAI",
      "RAG",
      "AWS",
      "Docker",
      "Stripe",
      "Xero",
    ],
  },
  {
    company: "CodeFulcrum",
    role: "Software Engineer",
    duration: "Dec 2022 - Sep 2024",
    highlights: [
      "Worked on energy platform serving 1.5M+ users.",
      "Built backend systems with Django and Flask.",
      "Developed React and GraphQL applications.",
      "Improved Celery-based async processing.",
      "Production monitoring using AWS CloudWatch and Sentry.",
      "Implemented TDD practices.",
    ],
    technologies: [
      "Python",
      "Django",
      "Flask",
      "React",
      "Redux",
      "GraphQL",
      "Celery",
      "AWS",
    ],
  },
  {
    company: "East West Soft",
    role: "Software Engineer",
    duration: "May 2022 - Aug 2022",
    highlights: [
      "Built food delivery platform with live tracking.",
      "Implemented WebSocket-based real-time features.",
      "Migrated frontend architecture to Next.js.",
      "Improved SEO and performance metrics.",
      "Developed cross-platform applications.",
    ],
    technologies: ["React", "Next.js", "Django", "WebSockets", "CapacitorJS"],
  },
];

export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  keyFeatures?: string[];
  features?: string[];
  integrations?: string[];
  scale?: { users: number };
  technologies?: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Healthcare AI Scribe Platform",
    category: "AI / Healthcare",
    description:
      "Real-time healthcare transcription platform using LLMs, RAG pipelines, and EMR integrations for automated medical documentation.",
    keyFeatures: [
      "Real-time transcription",
      "EMR integration",
      "HIPAA compliance",
      "AI-generated medical records",
    ],
    technologies: ["OpenAI", "FastAPI", "RAG", "Vector Databases"],
  },
  {
    name: "AI Patient Data Assistant",
    category: "AI / Healthcare",
    description:
      "AI chatbot capable of querying patient reports, charts, labs, and healthcare records using retrieval-based architectures.",
    technologies: ["OpenAI Embeddings", "RAG", "FastAPI", "Vector Search"],
  },
  {
    name: "AI Form Builder",
    category: "Generative AI",
    description:
      "AI-powered platform that converts natural language prompts into configurable dynamic forms.",
    features: [
      "Natural language generation",
      "Drag-and-drop editor",
      "Dynamic constraints",
      "AI-assisted modifications",
    ],
  },
  {
    name: "Farm Management Platform",
    category: "SaaS",
    description:
      "End-to-end agricultural management platform including payroll, compliance tracking, and financial integrations.",
    integrations: ["Stripe", "Xero"],
  },
  {
    name: "Energy Platform",
    category: "Enterprise SaaS",
    description:
      "Large-scale energy management platform built with Django, React, and GraphQL during tenure at CodeFulcrum.",
  },
  {
    name: "COVID & Pneumonia Diagnosis Using CNNs",
    category: "Machine Learning",
    description:
      "Research project focused on medical image analysis using transfer learning and convolutional neural networks.",
    technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "University of the Punjab",
  duration: "2019 - 2023",
  grade: "3.58 / 4.0",
} as const;

export const certifications = [
  { name: "Claude Code in Action", issuer: "Anthropic", year: 2026 },
  { name: "Intro to Machine Learning", issuer: "Kaggle", year: 2025 },
] as const;

export const skills = {
  programmingLanguages: ["Python", "JavaScript"],
  backend: ["Django", "FastAPI", "Flask", "DRF", "GraphQL", "Celery"],
  frontend: ["React", "Next.js", "Redux"],
  ai: ["OpenAI", "RAG", "LLMs", "AI Agents", "Embeddings", "Prompt Engineering"],
  cloud: ["AWS", "Docker", "CloudWatch"],
  databases: ["PostgreSQL", "MySQL", "Vector Databases"],
} as const;

export const careerHighlights = [
  "Founding Engineer at Torch Solutions",
  "Built multiple production AI products",
  "Shipped production systems across healthcare, SaaS, and enterprise",
  "Led architecture and engineering decisions",
  "Developed healthcare AI systems",
  "Built enterprise-grade SaaS products",
  "Experience across startup and enterprise environments",
] as const;

export const portfolioSections = {
  hero: {
    heading: "Building AI-Powered SaaS Products That Scale",
    subheading:
      "Full Stack & AI Engineer specializing in scalable backend systems, AI integrations, and modern web applications.",
    primaryCta: "Book a Meeting",
    secondaryCta: "View Projects",
  },
  stats: {
    yearsExperience: "4+",
    productsBuilt: "10+",
    aiProducts: "6+",
    domains: ["Healthcare", "AI", "SaaS", "Enterprise"],
  },
} as const;

export const seoKeywords = [
  "Full Stack Engineer",
  "AI Engineer",
  "Python Developer",
  "FastAPI Developer",
  "Django Developer",
  "React Developer",
  "SaaS Engineer",
  "OpenAI Integration",
  "RAG Systems",
  "Backend Engineer",
  "Software Architect",
  "Founding Engineer",
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
