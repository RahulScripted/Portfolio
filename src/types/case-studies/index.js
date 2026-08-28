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
              "Users were exposed to multiple configuration choices at once.",
          },
          {
            title: "Repeated information",
            description:
              "Related information could appear across different parts of the workflow.",
          },
          {
            title: "Unclear dependencies",
            description:
              "Some configuration options depended on previous selections.",
          },
          {
            title: "Error-prone workflows",
            description:
              "Complex configurations increased the possibility of incorrect setups.",
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
              "Would reduce information density but introduce additional navigation and context switching.",
          },
          {
            title: "One Giant Form",
            status: "rejected",
            reason:
              "Would keep everything together but make the workflow difficult to understand and maintain.",
          },
          {
            title: "Progressive Configuration",
            status: "selected",
            reason:
              "Provides information progressively while keeping the architecture flexible and reusable.",
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
              "Useful AI output depends heavily on the information and workflow surrounding it.",
          },
          {
            title: "Users need control",
            description:
              "Users should understand what the system is doing and retain control over important actions.",
          },
          {
            title: "Authentication is foundational",
            description:
              "AI features, payments, and application data all require reliable user identity and permissions.",
          },
          {
            title: "Business logic belongs outside the UI",
            description:
              "Sensitive operations should be handled by the backend rather than trusted to the client.",
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
              "Would demonstrate the AI capability but not the product engineering required around it.",
          },
          {
            title: "AI + Client-side Logic",
            status: "rejected",
            reason:
              "Would expose sensitive business logic and make authorization harder to enforce.",
          },
          {
            title: "Full-stack SaaS",
            status: "selected",
            reason:
              "Provides authentication, authorization, AI functionality, payments, persistence, and a complete user workflow.",
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
              "Users can move through different onboarding, verification, offer, and loan states.",
          },
          {
            title: "Backend-driven behaviour",
            description:
              "Several experiences depend on configurable financial and business rules.",
          },
          {
            title: "State consistency matters",
            description:
              "Incorrect client state can create confusing experiences in financial workflows.",
          },
          {
            title: "Failure states are critical",
            description:
              "Network failures and API errors need clear recovery paths because users cannot simply guess what happened.",
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
              "Makes complex workflows harder to coordinate and increases duplicated state.",
          },
          {
            title: "Everything globally managed",
            status: "rejected",
            reason:
              "Creates unnecessary coupling and makes local UI behaviour harder to reason about.",
          },
          {
            title: "Layered State Architecture",
            status: "selected",
            reason:
              "Keeps local UI state, shared application state, and server data conceptually separated.",
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
          "Working on financial workflows reinforced the importance of modelling states and failure scenarios early. In these products, a polished happy path is not enough—the system needs to remain understandable when something goes wrong.",
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
];