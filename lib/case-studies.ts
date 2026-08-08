export type CaseStudyTableRow = {
  label: string;
  detail: string;
  outcome?: string;
};

export type CaseStudyPillar = {
  title: string;
  intent: string;
  points: string[];
  buyerValue: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  engagement: string;
  via?: string;
  cover?: string;
  oneLiner: string;
  summary: string[];
  pillarsIntro: string;
  role: CaseStudyTableRow[];
  discovery: {
    inputs: string[];
    structure: string[];
    principles: string[];
  };
  problem: {
    lede: string;
    needs: { need: string; why: string }[];
    goal: string;
  };
  constraints: string[];
  pillars: CaseStudyPillar[];
  shipped: { surface: string; outcome: string }[];
  architecture: {
    diagram: string[];
    patterns: string[];
  };
  hardProblems: string[];
  delivery: {
    environments: string[];
    goLive: string[];
    handoff: string;
  };
  outcomes: string[];
  stack: { layer: string; technologies: string }[];
  fit: { best: string; not: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-clinical-documentation-platform",
    title: "AI Clinical Documentation Platform",
    eyebrow: "Case study · Full-stack product engineering · Healthcare SaaS",
    engagement:
      "End-to-end product build: discovery → architecture → design → implementation → delivery → go-live",
    via: "Torch Solutions",
    cover: "/surescribe.png",
    oneLiner:
      "Built a multi-tenant AI clinical documentation SaaS end-to-end, from raw requirements through architecture, UX, implementation, and go-live, covering EHR sync, HIPAA-oriented controls, async AI charting, document RAG, and a provider chatbot for patient-specific clinical discussion.",
    summary: [
      "I took raw clinical and operational requirements from a healthcare buyer and owned the full path to a production multi-tenant AI clinical documentation platform: discovery workshops and scope, system architecture, role-aware UX, full-stack implementation, async AI/RAG/EHR pipelines, staging/production delivery, and go-live support.",
      "The platform helps clinics reduce documentation burden while keeping clinicians in control. Positioning for buyers: this is not a demo chatbot or a single “generate note” button. It is production-shaped clinical software with tenancy, reviewability, integrations, and operational tooling.",
    ],
    pillarsIntro:
      "A clinic-scoped clinical platform organized around five capability pillars.",
    role: [
      {
        label: "Discovery",
        detail:
          "Translated raw clinical/ops requirements into personas, flows, constraints, and a phased delivery plan",
        outcome: "Shared scope, risks, and MVP vs later slices",
      },
      {
        label: "Architecture",
        detail:
          "Multi-tenant domain, API boundaries, async workers, RAG/search, realtime progress, EHR + telephony layers",
        outcome: "Diagrammed system that scales beyond a prototype",
      },
      {
        label: "Design",
        detail:
          "Role-aware UX for nurses vs providers; encounter, documents, copilot, admin",
        outcome: "Usable clinical surfaces, not generic dashboards",
      },
      {
        label: "Implementation",
        detail:
          "Vue SPA, Django API, chart automation, RAG + chatbot, EHR sync, calling/inbox, clinical modules, admin",
        outcome: "Working product with integrations and AI pipelines",
      },
      {
        label: "Delivery & go-live",
        detail:
          "Env/config, workers, migrate/deploy path, staging validation, production handoff",
        outcome: "Runnable environments and operational readiness",
      },
    ],
    discovery: {
      inputs: [
        "Nurses capture intake; doctors finish the chart later.",
        "We need notes from visit audio, but doctors must edit everything.",
        "Pull meds/vitals/allergies from the EHR; don’t make staff re-type.",
        "Providers should ask questions about this patient’s PDFs and labs.",
        "Multiple clinics, different roles, and we care about PHI handling.",
        "Inbound calls need a hold queue, never auto-attach a patient from caller ID.",
      ],
      structure: [
        "Persona & role map: nurse, provider, practice admin, platform superuser",
        "Journey map: schedule → encounter → intake/chart → documents → chatbot → calls → activity",
        "Constraint register: tenancy, PHI exposure, long-running jobs, vendor sprawl, auditability",
        "Capability pillars: EHR, security practices, automation/AI, RAG, provider chatbot",
        "Delivery slices: vertical slices that stay demoable before full EHR surface area",
      ],
      principles: [
        "AI is a pipeline with progress and revisions, not a single opaque generation call",
        "Clinicians stay in the loop: edit, re-run, mark stale, review",
        "Retrieval and chat are patient-scoped, never a generic open sandbox",
        "EHR vendors stay behind an internal abstraction so the product core doesn’t lock to one adapter",
        "Security is designed in (tenancy, least exposure, audit trails), not bolted on at the end",
      ],
    },
    problem: {
      lede: "Clinicians lose time to documentation and context-switching. Typical “AI note” demos fail in real clinics because production use needs more than a generate button.",
      needs: [
        {
          need: "EHR connectivity",
          why: "Manual re-entry kills adoption",
        },
        {
          need: "HIPAA-oriented handling",
          why: "PHI in logs/events/feeds creates unacceptable risk",
        },
        {
          need: "Reviewable automation",
          why: "Opaque one-shot generation isn’t clinically acceptable",
        },
        {
          need: "Document intelligence",
          why: "Prior records/labs stay trapped in PDFs",
        },
        {
          need: "Patient-scoped copilots",
          why: "Generic LLM answers aren’t usable for charting decisions",
        },
        {
          need: "Operations",
          why: "Schedule, inbound calls, multi-clinic tenancy, admin config",
        },
      ],
      goal: "Ship assistive AI documentation that behaves like production clinical software.",
    },
    constraints: [
      "Strict clinic tenancy and role separation (nurse vs provider vs admin)",
      "Long-running AI jobs that must not block the clinical UI",
      "Sensitive content: minimize logging; avoid raw transcripts in activity feeds",
      "Multiple vendors: object storage, STT, LLMs, OCR, telephony, EHR APIs",
      "Retrieval quality and grounding for patient-scoped chatbot answers",
      "Evolving surface area without collapsing into an unmaintainable monolith",
      "Delivery pressure without sacrificing auditability or safe defaults",
    ],
    pillars: [
      {
        title: "EHR / EMR integration",
        intent:
          "Let clinics sync clinical data without hard-coding a single EHR vendor into every screen and service.",
        points: [
          "Provider-agnostic EHR service layer with concrete adapters behind a stable internal API",
          "Clinical modules: medications, vitals, allergies, problems, appointments, documents",
          "Clinic-level enablement of modules so practices turn capabilities on intentionally",
          "Webhook / subscription handling where the EHR supports event-driven updates",
          "Admin-configurable chart/category mappings for field alignment across systems",
          "Optional bootstrap of nurse intake from EHR source data to reduce duplicate entry",
          "Sync as async jobs so EHR latency/rate limits don’t freeze the encounter UI",
        ],
        buyerValue:
          "Practices can grow from manual intake to EHR-assisted intake/modules without a rewrite, and engineering can add adapters without fracturing the domain model.",
      },
      {
        title: "HIPAA-oriented compliance & security practices",
        intent:
          "Healthcare-grade / HIPAA-oriented engineering and product controls. This is not a claim of formal HIPAA certification, HITRUST, SOC 2, or a completed BAA unless those are contractually accurate for a given engagement.",
        points: [
          "Clinic-scoped domain model; queries/writes bound to the user’s clinic",
          "JWT auth, role-based provider/nurse flows, SAML SSO support, superuser admin isolation",
          "Activity/event payloads designed to avoid raw transcripts and full document text",
          "Presigned object-storage uploads; server validates storage keys",
          "HTTPS-ready public URLs, env-based secrets, no secrets in source control",
          "Chart revisions, processing attempts, structured run history for clinical review trails",
          "Explicit patient assignment on inbound calls (no auto-bind from caller ID)",
          "Chart categories and actions scoped to nurse vs provider responsibilities",
        ],
        buyerValue:
          "Treat PHI as a first-class constraint in data model, event design, logging, and UI, not a policy document after ship.",
      },
      {
        title: "Automation & AI usage",
        intent:
          "Use AI where it reduces documentation burden, while keeping humans in control of clinical content.",
        points: [
          "STT on encounter / nurse audio via async workers, with transcript review before reliance",
          "Category/segment chart pipelines with prompts, model configs, live progress, edits, and revisions",
          "Nurse intake section proposals from capture + optional EHR bootstrap with review gates",
          "Parse lab PDFs/observations into structured panels/timelines",
          "Document ingest: OCR/extraction → chunking → embeddings with multi-doc progress",
          "QA hooks with rule-oriented validation and flags for human follow-up",
          "Status-driven runs: completing an encounter can trigger bulk chart processing",
          "Manual edits mark dependants stale instead of silently regenerating",
        ],
        buyerValue:
          "Automation is inspectable: progress, attempts, revisions, and stale dependencies, so clinics can trust the workflow enough to use it day-to-day.",
      },
      {
        title: "RAG pipeline (document intelligence)",
        intent:
          "Make prior records and scanned documents usable in clinical conversation without dumping entire PDFs into a prompt.",
        points: [
          "End-to-end path: upload/EHR sync → OCR → chunk → embed → retrieve → ground answers",
          "Patient/clinic scoping on retrieval so vectors from other patients never leak",
          "OCR path for scanned clinical PDFs, not text-only happy paths",
          "Chunk strategies that respect tables/sections where possible",
          "Embeddings stored alongside relational clinical data (PostgreSQL + pgvector)",
          "Record workspace: queue, library, document reviewer, labs timeline, copilot sessions",
        ],
        buyerValue:
          "Providers spend less time hunting through PDFs and more time making decisions with grounded, patient-specific context.",
      },
      {
        title: "Provider chatbot for patient-specific discussion",
        intent:
          "Give providers a patient context tool, not a generic public chatbot.",
        points: [
          "Conversations bound to a specific patient and clinic tenancy",
          "Answers grounded via RAG from that patient’s documents and related clinical sources",
          "Chat sessions with source-aware responses and document-centric review workflows",
          "UX colocated with the record workspace so discussion and document review stay together",
          "Retrieval before generation to reduce hallucinated clinical claims",
          "Role-appropriate access: provider tool, not patient-facing consumer chat",
        ],
        buyerValue:
          "The assistant supports clinical discussion about this patient, which is the difference between a novelty LLM widget and a usable documentation companion.",
      },
    ],
    shipped: [
      {
        surface: "Schedule & roster",
        outcome:
          "Day-of encounter list and people directory; role-split for doctors and nurses",
      },
      {
        surface: "Encounter workspace",
        outcome: "Structured nurse intake + provider chart editing",
      },
      {
        surface: "Chart engine",
        outcome:
          "Configurable categories/segments, variable prompts, automated runs, live progress",
      },
      {
        surface: "Clinical modules",
        outcome:
          "Vitals, meds, allergies, problems, intake summary, encounter info, clinical notes",
      },
      {
        surface: "Record workspace",
        outcome: "Document queue, library, labs, reviewer",
      },
      {
        surface: "RAG + provider chatbot",
        outcome:
          "Patient-specific discussion grounded in retrieved clinical documents",
      },
      {
        surface: "EHR integration",
        outcome:
          "Sync workflows, mappings, webhooks/subscriptions, intake bootstrap",
      },
      {
        surface: "Calling",
        outcome:
          "Browser outbound; inbound hold → answer → assign via inbox",
      },
      {
        surface: "Activity center",
        outcome: "Clinic-wide operational events over SSE",
      },
      {
        surface: "Practice admin",
        outcome: "Practices, users, chart templates, modules, prompt tooling",
      },
    ],
    architecture: {
      diagram: [
        "Provider SPA (Vue) ── REST / SSE / WS ──► API platform (Django)",
        "Celery + Redis for AI, ingest, chart, and sync jobs",
        "PostgreSQL (+ pgvector) · Object storage (presigned)",
        "STT / LLM / OCR · Telephony · EHR adapters",
      ],
      patterns: [
        "Schemas / repositories / services / clients so AI and EHR orchestration stay maintainable",
        "Async boundaries for STT, chart runs, OCR, embeddings, and EHR sync",
        "Realtime progress channels for long jobs (clinical trust requires visibility)",
        "Config-driven prompts, modules, and mappings for practice onboarding",
      ],
    },
    hardProblems: [
      "Chart generation as a dependency graph: role scope, revisions, stale dependants; clinician control over automation",
      "EHR without vendor lock-in in the core: internal workflows + adapters; admin-configurable mappings",
      "RAG that is patient-safe: retrieval constrained to the patient/clinic context used by the chatbot",
      "Structured nurse intake: section workflow with optional EHR bootstrap and review gates",
      "Safe inbound calling: explicit patient assignment; no caller-ID auto-identity",
      "HIPAA-oriented engineering under delivery pressure: tenancy, least-exposure events, secret hygiene, audit-friendly run history",
      "Layered services: keep AI/EHR orchestration testable and extensible as scope grew",
    ],
    delivery: {
      environments: [
        "Environment-driven config for local → staging → production",
        "ASGI API + background workers + Redis for cache/queues/realtime",
        "PostgreSQL with vector support for document intelligence",
        "Deployable frontend build and backend migrate/restart path",
      ],
      goLive: [
        "Secrets and env templates documented for operators",
        "Worker processes required for AI/EHR/ingest paths clearly identified",
        "Admin tooling for practice onboarding (modules, templates, mappings), not scripts alone",
        "Staging validation of critical journeys: encounter automation, document ingest, patient-scoped chat, EHR sync happy path",
        "Safe defaults for calling assignment and event payload exposure",
      ],
      handoff:
        "Delivered as an operable product surface: configuration in admin, observable async jobs, and role-aware UX, so clinical ops can run day-of workflows without engineering in the loop for every visit.",
    },
    outcomes: [
      "One patient context across schedule → encounter → documents → chatbot → calls",
      "Inspectable AI documentation: runs, attempts, revisions, stale dependencies",
      "Providers can discuss a patient’s records via grounded RAG chat instead of manual PDF search",
      "EHR data participates in intake and clinical modules through a stable integration layer",
      "Practices configurable through admin tooling with realtime clinic-day signals",
    ],
    stack: [
      {
        layer: "Frontend",
        technologies: "Vue 3, Vite, Pinia, Vue Router, Ant Design Vue, Sass",
      },
      {
        layer: "Backend",
        technologies: "Django, Django REST Framework, Celery, Redis, Channels",
      },
      {
        layer: "Data",
        technologies: "PostgreSQL, pgvector (embeddings / RAG)",
      },
      {
        layer: "Cloud",
        technologies:
          "AWS S3, cloud telephony (browser calling), serverless callbacks",
      },
      {
        layer: "AI / media",
        technologies: "LLMs, speech-to-text, OCR / document extraction, embeddings",
      },
      {
        layer: "Integrations",
        technologies: "EHR/EMR HTTP adapters, webhooks/subscriptions",
      },
      {
        layer: "Auth",
        technologies: "JWT, SAML SSO",
      },
    ],
    fit: {
      best: "Healthcare / regulated SaaS, AI + integrations, multi-tenant products",
      not: "“Just add ChatGPT to our form” with no tenancy, review, or data controls",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
