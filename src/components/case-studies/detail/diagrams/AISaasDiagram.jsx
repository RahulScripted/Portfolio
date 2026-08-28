// Case Study 2: AI-Powered SaaS Platform (enhanced)
// Flow: React Frontend → JWT Auth + RBAC → Express Backend → MongoDB / AI APIs / Razorpay

const COLORS = {
  border: "#D4C9BC",
  borderStrong: "#B8AA98",
  arrow: "#6B6459",
  text: "#16140F",
  textMuted: "#6B6459",
  base: "#FBFAF5",
  auth: "#F3EAE6",     // muted mauve tint
  authText: "#7A4F45",
  backend: "#EAEEE3",  // muted sage tint
  backendText: "#4F5C3F",
  service: "#F3E6DE",  // muted terracotta tint
  serviceText: "#8A5233",
};

const label = { fontFamily: "Space Mono, monospace" };

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 560 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="AI SaaS architecture diagram"
  >
    <title>AI SaaS architecture diagram</title>
    <desc>
      React frontend connects through a JWT and RBAC security layer to an
      Express backend, which fans out to MongoDB, AI APIs, and Razorpay
      inside a protected routes boundary.
    </desc>

    <defs>
      <marker id="arr-d" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill={COLORS.arrow} />
      </marker>
    </defs>

    {/* Protected routes boundary */}
    <rect
      x="60" y="120" width="440" height="256" rx="14"
      stroke={COLORS.border} strokeWidth="1" strokeDasharray="5 4" fill="none"
    />
    <text x="78" y="140" fill={COLORS.textMuted} style={{ ...label, fontSize: "9px", letterSpacing: "0.08em" }}>
      PROTECTED API ROUTES
    </text>

    {/* React Frontend */}
    <rect x="195" y="16" width="170" height="46" rx="6" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="280" y="44" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "12px" }}>
      React Frontend
    </text>
    <line x1="280" y1="62" x2="280" y2="150" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-d)" />

    {/* Auth layer */}
    <rect x="105" y="152" width="160" height="56" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.auth} />
    <text x="185" y="174" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      JWT Auth
    </text>
    <text x="185" y="192" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "9px" }}>
      Verifies token identity
    </text>

    <rect x="295" y="152" width="160" height="56" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.auth} />
    <text x="375" y="174" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      RBAC
    </text>
    <text x="375" y="192" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "9px" }}>
      Role-based permissions
    </text>

    <line x1="280" y1="208" x2="280" y2="234" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-d)" />

    {/* Express Backend */}
    <rect x="180" y="236" width="200" height="48" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.backend} />
    <text x="280" y="256" textAnchor="middle" fill={COLORS.backendText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      Express Backend
    </text>
    <text x="280" y="274" textAnchor="middle" fill={COLORS.backendText} style={{ ...label, fontSize: "9px" }}>
      Routing, validation, business logic
    </text>

    {/* Branches to services */}
    <path d="M280 284 L280 300 L145 300 L145 320" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-d)" />
    <path d="M280 284 L280 320" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-d)" />
    <path d="M280 284 L280 300 L415 300 L415 320" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-d)" />

    {/* Bottom services */}
    <rect x="80" y="322" width="130" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.service} />
    <text x="145" y="343" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      MongoDB
    </text>
    <text x="145" y="360" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "9px" }}>
      Data storage
    </text>

    <rect x="215" y="322" width="130" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.service} />
    <text x="280" y="343" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      AI APIs
    </text>
    <text x="280" y="360" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "9px" }}>
      Model inference
    </text>

    <rect x="350" y="322" width="130" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.service} />
    <text x="415" y="343" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      Razorpay
    </text>
    <text x="415" y="360" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "9px" }}>
      Payment gateway
    </text>
  </svg>
);

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 260 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="AI SaaS architecture diagram"
  >
    <title>AI SaaS architecture diagram, mobile layout</title>
    <desc>
      A single-column stack: React frontend, then a combined JWT plus RBAC
      security step, then Express backend, then three service boxes for
      MongoDB, AI APIs, and Razorpay.
    </desc>

    <defs>
      <marker id="arr-m" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill={COLORS.arrow} />
      </marker>
    </defs>

    <rect x="15" y="8" width="230" height="360" rx="10" stroke={COLORS.border} strokeWidth="1" strokeDasharray="4 3" fill="none" />
    <text x="26" y="24" fill={COLORS.textMuted} style={{ ...label, fontSize: "7px", letterSpacing: "0.06em" }}>
      PROTECTED ROUTES
    </text>

    <rect x="55" y="30" width="150" height="30" rx="4" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="130" y="49" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "10px" }}>
      React Frontend
    </text>
    <line x1="130" y1="60" x2="130" y2="76" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-m)" />

    <rect x="45" y="78" width="170" height="42" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.auth} />
    <text x="130" y="96" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      JWT Auth + RBAC
    </text>
    <text x="130" y="112" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "8px" }}>
      Verify token, check role
    </text>
    <line x1="130" y1="120" x2="130" y2="136" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-m)" />

    <rect x="55" y="138" width="150" height="36" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.backend} />
    <text x="130" y="156" textAnchor="middle" fill={COLORS.backendText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      Express Backend
    </text>
    <text x="130" y="170" textAnchor="middle" fill={COLORS.backendText} style={{ ...label, fontSize: "7px" }}>
      Routing and business logic
    </text>
    <line x1="130" y1="174" x2="130" y2="190" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-m)" />

    <rect x="55" y="192" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.service} />
    <text x="130" y="212" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      MongoDB
    </text>
    <line x1="130" y1="226" x2="130" y2="240" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-m)" />

    <rect x="55" y="242" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.service} />
    <text x="130" y="262" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      AI APIs
    </text>
    <line x1="130" y1="276" x2="130" y2="290" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-m)" />

    <rect x="55" y="292" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.service} />
    <text x="130" y="312" textAnchor="middle" fill={COLORS.serviceText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      Razorpay
    </text>
  </svg>
);