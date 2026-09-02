export const caseStudies = [
  {
    id: "template-management",
    number: "01",
    category: "Production System",
    title: "Template Management System",
    shortTitle: "Template Manager",

    question:
      "How do we make a configuration-heavy workflow simple without hiding the complexity users actually need?",

    description:
      "A production-grade internal platform for creating, configuring, managing, and maintaining reusable business templates.",

    role: "Frontend Engineer",

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "REST APIs",
    ],

    timeline: "Production",

    sections: {
      question: {
        title: "The Question",
        description:
          "How can we make a complex configuration workflow easier to understand while keeping it flexible enough for changing business requirements?",
      },

      investigate: {
        title: "Investigate",
        description:
          "I first broke down the workflow to understand where users were making unnecessary decisions, repeating information, or depending on unclear relationships between configuration options.",

        findings: [
          {
            title: "Too many decisions",
            description:
              "Users were exposed to multiple configuration choices at once, with no clear sense of which ones actually mattered for their template.",
          },
          {
            title: "Repeated information",
            description:
              "Related information could appear across different parts of the workflow, forcing users to keep re-entering or re-confirming the same values.",
          },
          {
            title: "Unclear dependencies",
            description:
              "Some configuration options depended on previous selections, but nothing in the UI signaled that relationship until an error surfaced later.",
          },
          {
            title: "Error-prone workflows",
            description:
              "Complex configurations increased the possibility of incorrect setups, and mistakes were often only caught after the template was already in use.",
          },
        ],
      },

      decide: {
        title: "Decide",
        description:
          "I evaluated different approaches instead of immediately implementing the first UI idea.",

        options: [
          {
            title: "More Screens",
            status: "rejected",
            reason:
              "Splitting the workflow across more screens would reduce information density on any single view, but it multiplies navigation and context switching. Users configuring interdependent fields would need to hold state in their head across screens, and going back to fix an earlier choice means re-walking the whole sequence. For a workflow used repeatedly by the same internal team, that overhead adds up fast.",
          },
          {
            title: "One Giant Form",
            status: "rejected",
            reason:
              "Keeping everything on one form preserves context, but it doesn't scale with the number of configuration options this system needed. A single monolithic form becomes hard to reason about for new engineers, harder to test in isolation, and harder to validate section by section — a bug in one part of the form risks breaking validation everywhere else. It also makes it difficult to reuse individual pieces of the configuration flow elsewhere.",
          },
          {
            title: "Progressive Configuration",
            status: "selected",
            reason:
              "Revealing configuration options progressively, based on what the user has already chosen, keeps the immediate decision space small without hiding the underlying complexity — it's still there, just sequenced. This also mapped cleanly onto a component architecture: each stage of configuration could be its own reusable, independently testable unit, and dependencies between fields became explicit in the flow instead of implicit in validation logic.",
          },
        ],
      },

      build: {
        title: "Build",
        description:
          "I translated the chosen approach into reusable components, predictable state management, API-driven data flows, validation, and production-ready error handling.",

        architecture: [
          "Component-driven UI architecture",
          "Reusable form and configuration components",
          "Centralized state where shared state was required",
          "Server-state management with TanStack Query",
          "REST API integration",
          "Validation and error handling",
          "Responsive interface design",
        ],

        engineeringDecisions: [
          {
            question: "How should the UI remain reusable?",
            answer:
              "I separated business-specific behavior from reusable presentation and configuration components.",
          },
          {
            question: "Where should state live?",
            answer:
              "Transient UI state stays local while shared application state is managed centrally.",
          },
          {
            question: "How should server data be handled?",
            answer:
              "Server state is separated from UI state to simplify caching, loading, refetching, and error handling.",
          },
          {
            question: "What happens when something fails?",
            answer:
              "Loading, empty, validation, API-error, and recovery states are treated as part of the feature rather than edge cases.",
          },
        ],
      },

      result: {
        title: "Result",
        description:
          "The resulting system provides a more structured configuration experience while giving the engineering team reusable patterns for extending future workflows.",

        outcomes: [
          "More consistent configuration workflows",
          "Reusable component patterns",
          "Clearer separation between UI and server state",
          "Better handling of validation and failure states",
          "Architecture that can accommodate future business requirements",
        ],

        metrics: [
          {
            value: "Production",
            label: "Environment",
          },
          {
            value: "Reusable",
            label: "Component System",
          },
          {
            value: "API-driven",
            label: "Architecture",
          },
        ],
      },

      learn: {
        title: "Looking Back",
        description:
          "If I were rebuilding the system today, I would invest even earlier in defining configuration schemas and component boundaries before expanding the feature surface.",
      },
    },

    tags: [
      "Frontend Architecture",
      "Complex Forms",
      "State Management",
      "API Integration",
      "Reusable Components",
    ],
  },

  {
    id: "ai-powered-saas",
    number: "02",
    category: "AI SaaS",
    title: "AI-Powered SaaS Platform",
    shortTitle: "AI SaaS",

    question:
      "How can an AI-powered product feel useful and simple while still giving users enough control over the underlying workflow?",

    description:
      "An AI-powered SaaS platform built with a focus on authentication, role-based access, payments, responsive UX, and AI-assisted functionality.",

    role: "Project Leader & Full-Stack Developer",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "RBAC",
      "Razorpay",
      "AI APIs",
    ],

    timeline: "Academic / Production-ready",

    sections: {
      question: {
        title: "The Question",
        description:
          "How do we introduce AI into a real product without making the experience feel like a thin wrapper around an AI API?",
      },

      investigate: {
        title: "Investigate",
        description:
          "I focused on understanding the complete product flow rather than treating AI as an isolated feature.",

        findings: [
          {
            title: "AI needs context",
            description:
              "Useful AI output depends heavily on the information and workflow surrounding it, not just the model call itself.",
          },
          {
            title: "Users need control",
            description:
              "Users should understand what the system is doing and retain control over important actions, especially anything the AI initiates.",
          },
          {
            title: "Authentication is foundational",
            description:
              "AI features, payments, and application data all require reliable user identity and permissions before anything else can be trusted.",
          },
          {
            title: "Business logic belongs outside the UI",
            description:
              "Sensitive operations should be handled by the backend rather than trusted to the client, especially once money and AI usage limits are involved.",
          },
        ],
      },

      decide: {
        title: "Decide",
        description:
          "The product was designed as a complete SaaS workflow instead of building the AI feature independently.",

        options: [
          {
            title: "AI-only Prototype",
            status: "rejected",
            reason:
              "A prototype that only wires up an AI API would demonstrate the model's output but nothing about whether the feature survives real usage: no auth means no per-user context or usage limits, no persistence means no history or continuity, and no payment layer means the product's actual business model is never tested. It answers 'can this call an AI API' rather than 'is this a usable product.'",
          },
          {
            title: "AI + Client-side Logic",
            status: "rejected",
            reason:
              "Keeping AI prompts, role checks, or payment logic in the client is faster to build but fundamentally unsafe: anything running in the browser can be inspected and tampered with, from API keys to the values sent to Razorpay. It also means there's no single source of truth for who is allowed to do what, which becomes a real liability once real user accounts and real payments are involved.",
          },
          {
            title: "Full-stack SaaS",
            status: "selected",
            reason:
              "Building out authentication, authorization, AI integration, payments, and persistence together meant every layer had to work with the others from day one, instead of being bolted on later. The backend became the single source of truth for identity, permissions, and payment state, which let the AI feature be evaluated in the same conditions it would actually ship in — not a simplified demo environment.",
          },
        ],
      },

      build: {
        title: "Build",
        description:
          "I owned major parts of the frontend and backend architecture while also coordinating implementation as the project leader.",

        architecture: [
          "React-based responsive frontend",
          "Node.js and Express backend",
          "JWT authentication",
          "Role-based access control",
          "MongoDB persistence",
          "AI API integration",
          "Razorpay payment integration",
          "Protected API routes",
          "Responsive and animated UI",
        ],

        engineeringDecisions: [
          {
            question: "Where should AI logic live?",
            answer:
              "AI requests and sensitive business logic are handled through the backend rather than directly exposing implementation details in the client.",
          },
          {
            question: "How should access be controlled?",
            answer:
              "Authentication establishes identity while RBAC determines what different users are allowed to access.",
          },
          {
            question: "How should payments interact with the product?",
            answer:
              "Payment-related operations are handled through backend-controlled flows rather than trusting client-side state.",
          },
          {
            question: "How should the product feel?",
            answer:
              "The UI uses responsive layouts, animation, and clear states to make the AI workflow feel like part of a product rather than an external tool.",
          },
        ],
      },

      result: {
        title: "Result",
        description:
          "The project became a complete SaaS product rather than a standalone AI experiment, combining AI functionality with authentication, authorization, payments, persistence, and a polished frontend.",

        outcomes: [
          "Complete end-to-end SaaS workflow",
          "Secure authentication and authorization",
          "AI functionality integrated into the product experience",
          "Payment workflow with Razorpay",
          "Responsive and animated frontend",
          "Backend-controlled business logic",
        ],

        metrics: [
          {
            value: "Full-stack",
            label: "Product",
          },
          {
            value: "JWT + RBAC",
            label: "Security",
          },
          {
            value: "Razorpay",
            label: "Payments",
          },
        ],
      },

      learn: {
        title: "Looking Back",
        description:
          "The biggest lesson was that integrating AI is only one part of building an AI product. The surrounding architecture, permissions, payments, error handling, and user experience determine whether the feature actually becomes useful.",
      },
    },

    tags: [
      "AI Integration",
      "Full Stack",
      "Authentication",
      "RBAC",
      "Payments",
      "Product Architecture",
    ],
  },

  {
    id: "fintech-customer-platform",
    number: "03",
    category: "Fintech",
    title: "Fintech Customer Platform",
    shortTitle: "Customer App",

    question:
      "How do we make a complex financial journey feel clear and reliable when users are moving through multiple business-critical states?",

    description:
      "A production fintech application supporting customer onboarding, loan workflows, offers, and finance-configurable experiences.",

    role: "Frontend Engineer",

    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "JWT",
      "React Navigation",
      "Lottie",
    ],

    timeline: "Production",

    sections: {
      question: {
        title: "The Question",
        description:
          "How can we build financial workflows that remain easy to understand for customers while handling complex business rules and changing backend-driven configurations?",
      },

      investigate: {
        title: "Investigate",
        description:
          "I approached the problem from both the user journey and the underlying application state.",

        findings: [
          {
            title: "Multiple workflow states",
            description:
              "Users can move through different onboarding, verification, offer, and loan states, often non-linearly.",
          },
          {
            title: "Backend-driven behaviour",
            description:
              "Several experiences depend on configurable financial and business rules that can change without a client release.",
          },
          {
            title: "State consistency matters",
            description:
              "Incorrect client state can create confusing experiences in financial workflows, where trust is harder to earn back than in most apps.",
          },
          {
            title: "Failure states are critical",
            description:
              "Network failures and API errors need clear recovery paths because users cannot simply guess what happened to their application or funds.",
          },
        ],
      },

      decide: {
        title: "Decide",
        description:
          "The solution required a clear separation between presentation, application state, and backend-driven business data.",

        options: [
          {
            title: "Screen-level state everywhere",
            status: "rejected",
            reason:
              "Keeping state local to each screen is simple at first, but it duplicates the same business data (loan status, verification progress, offer details) across multiple places. In a workflow where users move back and forth between onboarding steps, that duplication easily drifts out of sync, and a screen can end up showing stale or contradictory information about the user's actual state.",
          },
          {
            title: "Everything globally managed",
            status: "rejected",
            reason:
              "Pushing all state into a global store, including transient UI concerns like input focus, animation flags, or a single screen's scroll position, creates unnecessary coupling. Unrelated screens end up re-rendering off state changes that don't concern them, and it becomes harder to reason about what's actually shared business state versus what's just local presentation detail.",
          },
          {
            title: "Layered State Architecture",
            status: "selected",
            reason:
              "Separating local UI state, shared application state, and server-derived data into distinct layers matched the real shape of the problem: presentation concerns stay local and fast to change, business-critical workflow state (like onboarding or loan status) lives in Redux where it can be trusted across screens, and server data is handled separately so caching, retries, and staleness are dealt with deliberately rather than accidentally.",
          },
        ],
      },

      build: {
        title: "Build",
        description:
          "I worked on production frontend features across the customer journey, focusing on reusable components, predictable state, API integration, and reliable user feedback.",

        architecture: [
          "React Native application architecture",
          "TypeScript for safer application contracts",
          "Redux Toolkit for shared application state",
          "REST API integration",
          "JWT-based authenticated flows",
          "Reusable UI components",
          "React Navigation",
          "Animation and feedback states",
          "Loading and error-state handling",
        ],

        engineeringDecisions: [
          {
            question: "How should complex workflows be represented?",
            answer:
              "Application state is structured around meaningful business states instead of individual screens.",
          },
          {
            question: "How should reusable UI be created?",
            answer:
              "Common patterns are extracted into reusable components while business-specific behaviour remains at the feature level.",
          },
          {
            question: "How should API failures be handled?",
            answer:
              "Loading, failure, retry, and empty states are explicitly represented instead of leaving users with ambiguous UI.",
          },
          {
            question: "How should the app handle changing business requirements?",
            answer:
              "Where possible, behaviour is driven by backend configuration and reusable frontend patterns rather than hardcoding every variation.",
          },
        ],
      },

      result: {
        title: "Result",
        description:
          "The work contributed to production fintech workflows used by thousands of customers, with an architecture designed to support changing financial and business requirements.",

        outcomes: [
          "Production fintech experience",
          "Reusable mobile UI patterns",
          "Structured application state",
          "Backend-integrated financial workflows",
          "Clear loading and error states",
          "Support for configurable business experiences",
        ],

        metrics: [
          {
            value: "10K+",
            label: "Active Users",
          },
          {
            value: "Production",
            label: "Application",
          },
          {
            value: "Configurable",
            label: "Workflows",
          },
        ],
      },

      learn: {
        title: "Looking Back",
        description:
          "Working on financial workflows reinforced the importance of modelling states and failure scenarios early. In these products, a polished happy path is not enough — the system needs to remain understandable when something goes wrong.",
      },
    },

    tags: [
      "Fintech",
      "React Native",
      "TypeScript",
      "State Management",
      "API Integration",
      "Production",
    ],
  },
  {
    id: "fintech-modernization",
    number: "04",
    category: "Fintech",
    title: "Fintech Modernization",
    shortTitle: "Modernization",
 
    question:
      "How do we modernize a legacy transaction platform without breaking the business-critical features that already power it?",
 
    description:
      "A legacy transaction platform rebuilt on a modern Next.js architecture — preserving business capabilities while improving performance, reliability, and observability.",
 
    role: "Frontend Engineer",
 
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "REST APIs",
      "Suspense",
    ],
 
    timeline: "Production",
 
    sections: {
      question: {
        title: "The Question",
        description:
          "Beyond a framework upgrade, we needed to fix poor architecture, inconsistent error handling, weak notifications, and limited transaction visibility — while making daily activity easier to monitor.",
      },
 
      investigate: {
        title: "Investigate",
        description:
          "I looked at the existing app from three angles: architecture, user experience, and operational reliability.",
 
        findings: [
          {
            title: "Legacy architecture",
            description:
              "Tightly coupled components made new features hard to build, and the interface had grown feature-by-feature without a consistent design system.",
          },
          {
            title: "Poor error handling",
            description:
              "Failures weren't consistently surfaced — different workflows handled errors differently.",
          },
          {
            title: "Limited transaction visibility",
            description:
              "No strong operational view made it hard to spot trends or failures, and some screens over-fetched data as transaction volume grew.",
          },
          {
            title: "Operational complexity",
            description:
              "Payment workflows needed explicit states — pending, successful, failed, and excess or unexpected.",
          },
        ],
      },
 
      decide: {
        title: "Decide",
        description:
          "This wasn't treated as a simple framework upgrade — I weighed how much to preserve, redesign, or restructure.",
 
        options: [
          {
            title: "Incremental React Upgrade",
            status: "rejected",
            reason:
              "Lower migration risk, but the underlying architectural problems would remain.",
          },
          {
            title: "Complete Rewrite",
            status: "rejected",
            reason:
              "Cleanest architecture, but discarding existing business rules and edge cases risks business-critical behaviour.",
          },
          {
            title: "Controlled Modernization",
            status: "selected",
            reason:
              "Moved to Next.js while preserving transaction workflows, standardizing state and API handling, and building a real transaction dashboard — making the platform more reliable and observable, not just newer.",
          },
        ],
      },
 
      build: {
        title: "Build",
        description:
          "The application was restructured around clear boundaries: presentation, application state, server state, and API communication.",
 
        architecture: [
          "Modern Next.js architecture",
          "Reusable UI and feature modules",
          "Separated UI and server-state layers",
          "TanStack Query for server state",
          "Redux Toolkit for application state",
          "REST API and transaction services",
          "Suspense-based progressive loading",
          "Data-driven transaction dashboard",
          "Consistent error and notification patterns",
        ],
 
        engineeringDecisions: [
          {
            question: "How should the legacy application be modernized?",
            answer:
              "Functionality migrated incrementally, keeping business workflows intact while replacing problematic patterns.",
          },
          {
            question: "How should transaction data be handled?",
            answer:
              "Server state and UI state were separated so data could be fetched, cached, and invalidated independently.",
          },
          {
            question: "How should users understand daily activity?",
            answer:
              "A dashboard with charts, filters, and trends replaced a long transaction list.",
          },
          {
            question: "How should payment states be represented?",
            answer:
              "Explicit states — Pending, Processing, Successful, Failed, Excess/Unexpected — instead of treating success as the only outcome.",
          },
          {
            question: "How should failures be communicated?",
            answer:
              "Loading, empty, validation, error, and recovery states became intentional parts of the interface.",
          },
          {
            question: "How should the app feel during navigation and loading?",
            answer:
              "Suspense-based loading improved perceived performance and avoided fully blocked screens.",
          },
        ],
      },
 
      result: {
        title: "Result",
        description:
          "The migration preserved existing financial capabilities while building a more observable, maintainable transaction platform.",
 
        outcomes: [
          "Modernized frontend architecture on Next.js",
          "Improved rendering and data-fetching performance",
          "Centralized daily transaction visibility",
          "Data-driven dashboard with charts and filtering",
          "Explicit pending, successful, failed, and excess payment states",
          "Consistent error handling and recovery patterns",
          "Improved, consistent notification experience",
          "More maintainable, extensible feature boundaries",
        ],
 
        metrics: [
          { value: "React 15 → Next.js", label: "Architecture" },
          { value: "Observable", label: "Workflows" },
          { value: "Production", label: "Application" },
        ],
      },
 
      learn: {
        title: "Looking Back",
        description:
          "Modernizing a financial app means knowing what's business-critical, not just moving code between framework versions. Next time I'd lock in the target architecture, state model, and observability strategy even earlier.",
      },
    },
 
    tags: [
      "Fintech",
      "Next.js",
      "Migration",
      "Performance",
      "Observability",
      "State Management",
      "Production",
    ],
  },
];