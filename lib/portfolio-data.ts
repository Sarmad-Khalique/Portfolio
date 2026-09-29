export const personalInfo = {
  fullName: "Muhammad Sarmad Khalique",
  shortName: "Sarmad Khalique",
  handle: "sarmad.khalique",
  professionalTitle: "Backend & Applied AI Engineer",
  headline:
    "Backend and Applied AI Engineer leading production delivery across healthcare, payments, energy, workplace operations, and voice AI.",
  location: "Pakistan",
  phone: "+92 311 730 0418",
  phoneHref: "tel:+923117300418",
  linkedinUrl:
    "https://www.linkedin.com/in/muhammad-sarmad-khalique-9b26a7197/",
  githubUrl: "https://github.com/Sarmad-Khalique",
  email: "sarmadkhalique001@gmail.com",
  calendlyUrl: "https://calendly.com/sarmadkhalique001/new-meeting",
  shortBio:
    "Backend and Applied AI Engineer with 4+ years delivering Python products from discovery to production across healthcare, payments, energy, workplace operations, and voice AI.",
  yearsExperience: "4+",
  status: "Available for the right remote opportunity",
} as const;

export const about = {
  title: "An engineer who stays for the hard parts.",
  intro:
    "I work best where backend depth, applied AI, and product responsibility overlap. I can turn a loosely defined requirement into an architecture, write the critical path, build the tests and delivery pipeline, and stay close when production gets noisy.",
  principles: [
    {
      number: "01",
      title: "Own the path, not just the ticket",
      copy: "Discovery, architecture, implementation, review, release, and incident response are one continuous engineering problem.",
    },
    {
      number: "02",
      title: "Make AI useful under pressure",
      copy: "The model is one component. Guardrails, context, latency, human approval, observability, and graceful failure make it a product.",
    },
    {
      number: "03",
      title: "Design for the second client",
      copy: "Clear boundaries, repeatable delivery, and documentation turn a one-off build into a system teams can confidently extend.",
    },
  ],
} as const;

export type Experience = {
  hash: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    hash: "current",
    company: "Torch Solutions",
    role: "Senior Software Engineer",
    duration: "JUL 2024 — PRESENT",
    location: "Remote",
    summary:
      "Lead concurrent client delivery within a five-engineer team while remaining hands-on across architecture, code, testing, CI/CD, and incidents.",
    highlights: [
      "Took a clinical documentation platform from requirements to production, integrating chart-grounded AI workflows, Athenahealth, and Twilio.",
      "Led a multi-venue Stripe Connect investigation, corrected account capabilities and payment routing, reconciled historical transactions, and shipped regression-tested fixes.",
      "Delivered an organisation-scoped AI form platform and complete handover on schedule.",
      "Modernised an AI sales-agent platform to async services and an async database layer, cutting API response time by 60%.",
    ],
    technologies: ["FastAPI", "Django", "OpenAI", "Stripe", "AWS", "PostgreSQL"],
  },
  {
    hash: "voice",
    company: "Gymwise.ai",
    role: "Software Engineer · Part-time Contract",
    duration: "MAY 2025 — PRESENT",
    location: "Riyadh · Remote",
    summary:
      "First engineering hire for an AI-powered fitness platform, owning backend architecture, delivery, and Voice AI integrations end-to-end.",
    highlights: [
      "Built a personalised member-support voice agent with OpenAI Realtime API and ElevenLabs, grounding each conversation in the member profile.",
    ],
    technologies: ["Python", "OpenAI Realtime", "ElevenLabs", "Voice AI"],
  },
  {
    hash: "scale",
    company: "CodeFulcrum",
    role: "Software Engineer · Full Stack",
    duration: "DEC 2022 — SEP 2024",
    location: "Lahore, Pakistan",
    summary:
      "Embedded in a client engineering team supporting a US residential energy platform serving 200K+ active users.",
    highlights: [
      "Delivered full-stack changes and production maintenance across Django and Flask services, Celery workflows, React, and operational systems.",
      "Repaired a roughly 400-test frontend suite during a React 16-to-18 migration in about two days, restoring CI and unblocking the release.",
    ],
    technologies: ["Django", "Flask", "Celery", "React", "GraphQL", "CloudWatch"],
  },
  {
    hash: "speed",
    company: "East West Soft",
    role: "Software Engineer",
    duration: "MAY 2022 — AUG 2022",
    location: "Remote",
    summary:
      "Improved a customer-facing product by moving the frontend to Next.js and tightening image delivery.",
    highlights: [
      "Reduced page-load time from approximately three seconds to under one second — a 67% improvement.",
    ],
    technologies: ["Next.js", "React", "Performance"],
  },
];

export type FeaturedProject = {
  name: string;
  badge: string;
  description: string;
  impact: string;
  skills: string[];
  cover?: string;
  slug?: string;
  visual: "clinical" | "payments" | "forms" | "voice" | "async" | "scale";
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Clinical Documentation Copilot",
    badge: "HEALTHCARE AI",
    description:
      "A clinician-in-the-loop platform that records patient conversations, validates transcripts against charts, drafts SOAP notes, diagnoses, and lab orders, then writes approved output to the EHR.",
    impact: "Requirements → production",
    skills: ["Django", "OpenAI", "Athenahealth", "Twilio", "AWS", "Automated testing"],
    cover: "/clinical/schedule.png",
    slug: "ai-clinical-documentation-platform",
    visual: "clinical",
  },
  {
    name: "Voice-led Hospitality Commerce",
    badge: "VOICE + PAYMENTS",
    description:
      "Backend services for conversational ordering, NLP menu matching, live tabs, multi-venue reporting, and Stripe Connect payment routing across connected accounts.",
    impact: "Payment routing recovered",
    skills: ["Python", "Apple Speech", "NLP", "Stripe Connect", "CSV reporting"],
    visual: "payments",
  },
  {
    name: "AI Workflow & Form Platform",
    badge: "WORKPLACE OPERATIONS",
    description:
      "Organisation-scoped form generation with natural-language authoring, drag-and-drop editing, permissions, mobile submissions, review comments, analytics, and a complete client handover.",
    impact: "Delivered on schedule",
    skills: ["Django", "Next.js", "Expo", "OpenAI", "PostgreSQL"],
    cover: "/forms/dashboard.png",
    slug: "ai-form-builder-platform",
    visual: "forms",
  },
  {
    name: "Care Operations Voice Assistant",
    badge: "REALTIME VOICE AI",
    description:
      "A caregiver task application with a conversational voice assistant designed around real-time, profile-aware care workflows.",
    impact: "Voice-first care operations",
    skills: ["Django", "Expo", "Agora", "OpenAI Realtime", "React Native"],
    cover: "/hometeams.png",
    visual: "voice",
  },
  {
    name: "AI Sales Agent Modernisation",
    badge: "PERFORMANCE",
    description:
      "A production migration from synchronous request handling to async services and an async database layer for an AI sales-agent platform.",
    impact: "60% faster API responses",
    skills: ["FastAPI", "Async Python", "PostgreSQL", "LLM pipelines"],
    visual: "async",
  },
  {
    name: "Residential Energy Platform",
    badge: "PLATFORM ENGINEERING",
    description:
      "Full-stack product delivery and production support across backend services, scheduled workflows, React surfaces, testing, CI, and incident response.",
    impact: "200K+ active users",
    skills: ["Django", "Flask", "Celery", "React", "GraphQL", "AWS"],
    visual: "scale",
  },
];

export const stack = [
  {
    key: "Backend systems",
    detail: "The core",
    values: ["Python", "FastAPI", "Django", "Flask", "REST", "Celery", "WebSockets", "GraphQL"],
  },
  {
    key: "Applied AI",
    detail: "Useful intelligence",
    values: ["OpenAI API", "Realtime API", "LLM pipelines", "RAG", "AI agents", "Voice AI"],
  },
  {
    key: "Data & delivery",
    detail: "Production foundations",
    values: ["PostgreSQL", "MySQL", "Redis", "AWS", "Docker", "Nginx", "CI/CD"],
  },
  {
    key: "Product surfaces",
    detail: "When the work crosses the stack",
    values: ["TypeScript", "JavaScript", "React", "Next.js", "Expo React Native"],
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of the Punjab, Lahore",
  duration: "OCT 2019 — JUL 2023",
  grade: "3.58 / 4.00",
} as const;

export const heroStats = [
  { n: "4+", l: "Years shipping", note: "Discovery to production" },
  { n: "200K+", l: "Active users on one platform", note: "High-scale energy" },
  { n: "−60%", l: "API response time", note: "Async modernisation" },
  { n: "3", l: "Concurrent engagements", note: "Led hands-on" },
] as const;

export const seoKeywords = [
  "Backend Engineer",
  "Applied AI Engineer",
  "Python Engineer",
  "FastAPI Developer",
  "Django Developer",
  "OpenAI Realtime API",
  "Voice AI Engineer",
  "Technical Lead",
] as const;

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Approach", href: "/#about" },
  { label: "Stack", href: "/#stack" },
] as const;
