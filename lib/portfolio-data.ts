export const personalInfo = {
  fullName: "Muhammad Sarmad Khalique",
  handle: "sarmad.khalique",
  professionalTitle: "Senior Backend & Full-Stack AI Engineer",
  headline:
    "Senior Backend & Full-Stack AI Engineer. 4+ years shipping production Python APIs, LLM/RAG pipelines, and full-stack AI products for international clients.",
  location: "Pakistan",
  phone: "+92 311 730 0418",
  phoneHref: "tel:+923117300418",
  linkedinUrl:
    "https://www.linkedin.com/in/muhammad-sarmad-khalique-9b26a7197/",
  githubUrl: "https://github.com/Sarmad-Khalique",
  email: "sarmadkhalique001@gmail.com",
  calendlyUrl: "https://calendly.com/sarmadkhalique001/new-meeting",
  shortBio:
    "Senior Backend & Full-Stack AI Engineer with 4+ years shipping Python APIs, LLM/RAG pipelines, and full-stack products for international clients — from HIPAA-grade healthcare AI to platforms serving 1.5M+ users.",
  yearsExperience: "4+",
  status: "OPEN TO REMOTE WORK",
} as const;

export const about = {
  title: "Engineering products end-to-end, from architecture to cloud.",
  paragraphs: [
    "I'm a Senior Backend and Full-Stack AI Engineer based in Pakistan, working remotely with teams across the US and Gulf region. I spend most of my time in **FastAPI, Django, and LLM integrations** — designing systems that need to stay fast and correct once real users show up, not just in a demo.",
    "Over the last four years I've owned delivery end-to-end: system architecture, backend development, cloud infrastructure, and the cross-functional back-and-forth that actually ships a product. I've contributed to **OhmConnect**, a platform serving 1.5M+ users, and delivered healthcare AI, construction-tech, and enterprise SaaS for international clients as a founding engineer.",
    "Lately most of my work sits at the intersection of backend systems and applied AI — **RAG pipelines, voice agents built on the OpenAI Realtime API, and production LLM integrations** — where the interesting problems are less about the model and more about the system around it.",
  ],
  currently: [
    { role: "Founding Engineer", co: "Torch Solutions" },
    { role: "Timezone overlap", co: "US hours" },
    { role: "Based in", co: "Pakistan" },
  ],
} as const;

export type Experience = {
  hash: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    hash: "a1f9c3e",
    company: "Torch Solutions",
    role: "Founding Engineer",
    duration: "JUL 2024 — PRESENT",
    location: "Remote",
    highlights: [
      "Architect and own end-to-end delivery of production AI products for international clients across healthcare, construction-tech, and enterprise SaaS.",
      "Built SureScribe.ai, a HIPAA-compliant healthcare AI platform using LLMs, RAG, and Athena EMR integrations for real-time clinical transcription.",
      "Architected an iOS LiDAR scanning app for INconnect GmbH using Apple ARKit for construction-site 3D point clouds and models.",
      "Directed the SpotOn AI Sales Agent delivery — migrated microservices to an async DB layer, cutting API response time 60% by removing event-loop blocking.",
      "Built HomeTeams.ai, a Voice AI nurse assistant, using the OpenAI Realtime API and Agora SDK.",
    ],
    technologies: [
      "FastAPI",
      "Django",
      "RAG",
      "OpenAI Realtime API",
      "AWS",
      "HIPAA",
    ],
  },
  {
    hash: "e44a1c9",
    company: "CodeFulcrum",
    role: "Software Engineer",
    duration: "DEC 2022 — SEP 2024",
    location: "Lahore",
    highlights: [
      "Contributed to OhmConnect, a high-scale energy management platform serving 1.5M+ users, improving performance, reliability, and uptime.",
      "Built backend services with Django and Flask; expanded frontend with React and GraphQL; optimized async workflows with Celery.",
      "Migrated the test suite from React 16 to 18, fixing breaking RTL changes that were blocking release, and restored full CI/CD pipeline health.",
      "Used AWS CloudWatch and Sentry for production monitoring and proactive incident resolution.",
    ],
    technologies: [
      "Django",
      "Flask",
      "React",
      "GraphQL",
      "Celery",
      "CloudWatch",
    ],
  },
  {
    hash: "918fbc2",
    company: "East West Soft",
    role: "Software Engineer",
    duration: "MAY 2022 — AUG 2022",
    location: "Remote",
    highlights: [
      "Improved page load time from ~3s to under 1s (67% faster) by migrating the frontend to Next.js with lazy-loaded, optimized images.",
      "Introduced real-time order tracking via WebSockets for live delivery updates.",
    ],
    technologies: ["Next.js", "WebSockets", "Django"],
  },
];

export type FeaturedProject = {
  name: string;
  badge: string;
  badgeVariant: "prod" | "client" | "research";
  description: string;
  metric: string;
  /** Real screenshot in /public; falls back to generated cover art. */
  cover?: string;
  /** Company the work was delivered through. */
  via?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "SureScribe.ai",
    badge: "CLIENT · HEALTHCARE",
    badgeVariant: "client",
    description:
      "HIPAA-compliant clinical scribe platform using LLMs and RAG, with Athena EMR integration for real-time transcription and automated medical documentation.",
    metric: "→ FastAPI · OpenAI · RAG · Athena EMR",
    cover: "/surescribe.png",
    via: "Torch Solutions",
  },
  {
    name: "HomeTeams.ai",
    badge: "CLIENT · VOICE AI",
    badgeVariant: "client",
    description:
      "Voice AI nurse assistant handling real-time patient conversation, built on the OpenAI Realtime API with Agora SDK for low-latency audio.",
    metric: "→ OpenAI Realtime API · Agora SDK",
    via: "Torch Solutions",
  },
  {
    name: "SpotOn AI Sales Agent",
    badge: "PERF · −60% LATENCY",
    badgeVariant: "prod",
    description:
      "Led migration of microservices from synchronous to async architecture with an async DB layer, eliminating event-loop blocking.",
    metric: "→ FastAPI · Async Python · PostgreSQL",
  },
  {
    name: "INconnect LiDAR Scanner",
    badge: "CLIENT · AR / iOS",
    badgeVariant: "client",
    description:
      "iOS app using Apple ARKit for construction-site capture, generating 3D point clouds and models from LiDAR scans.",
    metric: "→ Swift · ARKit · 3D Modeling",
    cover: "/inconnect-lidar.png",
    via: "Torch Solutions",
  },
  {
    name: "OhmConnect",
    badge: "PROD · 1.5M+ USERS",
    badgeVariant: "prod",
    description:
      "High-scale energy management platform. Contributed backend services, React/GraphQL frontend, and async processing at scale.",
    metric: "→ Django · Flask · GraphQL · Celery",
    via: "CodeFulcrum",
  },
];

export const stack = [
  {
    key: "languages",
    values: ["Python", "JavaScript (ES2022+)"],
  },
  {
    key: "backend",
    values: [
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "Microservices",
      "Celery",
      "WebSockets",
    ],
  },
  {
    key: "ai / genai",
    values: [
      "OpenAI API",
      "OpenAI Realtime API",
      "Agora Conversational SDK",
      "Voice AI",
      "LLM Integrations",
      "RAG",
      "AI Agents",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
  {
    key: "frontend",
    values: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Shadcn",
      "GraphQL",
    ],
  },
  {
    key: "cloud & devops",
    values: [
      "AWS (EC2, S3, CloudWatch)",
      "Azure",
      "Docker",
      "Kubernetes",
      "Nginx",
      "CI/CD",
    ],
  },
  {
    key: "databases",
    values: ["PostgreSQL", "MySQL", "Redis", "Supabase"],
  },
  {
    key: "practices",
    values: [
      "System Design",
      "TDD",
      "Agile/Scrum",
      "Code Review",
      "HIPAA Compliance",
      "Technical Leadership",
    ],
  },
] as const;

export const education = {
  degree: "B.S. Computer Science",
  institution: "University of the Punjab, Lahore",
  duration: "OCT 2019 — JUL 2023",
  grade: "3.58/4.0",
} as const;

export const heroStats = [
  { n: "4+", l: "YEARS SHIPPING" },
  { n: "1.5M+", l: "USERS SERVED" },
  { n: "60%", l: "LATENCY CUT" },
  { n: "HIPAA", l: "COMPLIANT BUILDS" },
] as const;

export const terminalLines = [
  { p: "$", t: "whoami", d: 0 },
  { p: ">", t: "Muhammad Sarmad Khalique", cls: "strong", d: 250 },
  { p: "$", t: "cat role.txt", d: 550 },
  {
    p: ">",
    t: "Senior Backend & AI Engineer — Full-Stack, GenAI",
    cls: "ok",
    d: 750,
  },
  { p: "$", t: "status --check --verbose", d: 1150 },
  { p: ">", t: "available_for_remote: true", d: 1400 },
  { p: ">", t: "timezone_overlap: US", d: 1550 },
  { p: ">", t: "location: Pakistan", d: 1700 },
  { p: ">", t: "years_experience: 4+", d: 1850 },
] as const;

export const portfolioSections = {
  hero: {
    heading:
      "Backend systems and AI products that hold up in production, not just in demos.",
    accentWord: "production",
    primaryCta: "Book a call →",
    secondaryCta: "View builds",
    tertiaryCta: "Email me",
  },
  experience: {
    eyebrow: "/experience — log --oneline",
    title: "Where I've shipped",
    lede: "Three roles, one thread: own the system, ship it, keep it running.",
  },
  projects: {
    eyebrow: "/builds — deployments",
    title: "Selected builds",
    lede: "A mix of client production systems and shipped work — healthcare AI, voice agents, and platforms at scale.",
  },
  stack: {
    eyebrow: "/stack — config.yaml",
    title: "Tools & systems",
    lede: "The stack I reach for to design, build, and run production systems.",
  },
  contact: {
    title: "$ connect --with=sarmad",
    lede: "Available for remote roles and freelance engagements, with US timezone overlap. Send a message or grab time on the calendar directly.",
  },
} as const;

export const seoKeywords = [
  "Senior Backend Engineer",
  "Full-Stack Engineer",
  "AI Engineer",
  "Python Developer",
  "FastAPI Developer",
  "Django Developer",
  "RAG Systems",
  "OpenAI Realtime API",
  "Voice AI",
  "Full Stack Engineer",
  "Founding Engineer",
] as const;

export const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
] as const;
