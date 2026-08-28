// Case Study 1: Template Management System (enhanced)
// Flow: UI Components ↔ Redux Toolkit ↔ TanStack Query ↔ REST APIs
// Sub-cluster: Form Builder → Field Renderer → Validation → Preview

const COLORS = {
  border: "#D4C9BC",
  borderStrong: "#B8AA98",
  arrow: "#6B6459",
  text: "#16140F",
  textMuted: "#6B6459",
  base: "#FBFAF5",
  state: "#E8E6F3",       // muted lavender tint — state management
  stateText: "#4A4180",
  query: "#E6EDF3",       // muted dusty-blue tint — data fetching / cache
  queryText: "#2F5773",
  api: "#F3E6DE",         // muted terracotta tint — external comms
  apiText: "#8A5233",
  client: "#E5EEE8",      // muted sage tint — reusable component system
  clientText: "#3F5C4F",
};

const label = { fontFamily: "Space Mono, monospace" };

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 500 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="Template management architecture diagram"
  >
    <title>Template management architecture diagram</title>
    <desc>
      UI Components, Redux Toolkit, TanStack Query, and REST APIs exchange
      data bidirectionally in a vertical stack. A reusable component system
      of Form Builder, Field Renderer, Validation, and Preview feeds into
      UI Components below.
    </desc>

    <defs>
      <marker id="arr-tm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill={COLORS.arrow} />
      </marker>
    </defs>

    {/* UI Components */}
    <rect x="160" y="16" width="180" height="44" rx="6" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="250" y="43" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "12px" }}>
      UI Components
    </text>

    {/* Bidirectional arrows */}
    <line x1="220" y1="60" x2="220" y2="94" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="280" y1="94" x2="280" y2="60" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    {/* Redux Toolkit */}
    <rect x="160" y="96" width="180" height="44" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.state} />
    <text x="250" y="123" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      Redux Toolkit
    </text>

    <line x1="220" y1="140" x2="220" y2="174" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="280" y1="174" x2="280" y2="140" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    {/* TanStack Query */}
    <rect x="160" y="176" width="180" height="44" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.query} />
    <text x="250" y="203" textAnchor="middle" fill={COLORS.queryText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      TanStack Query
    </text>

    <line x1="220" y1="220" x2="220" y2="254" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="280" y1="254" x2="280" y2="220" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    {/* REST APIs */}
    <rect x="160" y="256" width="180" height="44" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.api} />
    <text x="250" y="283" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      REST APIs
    </text>

    {/* Sub-cluster: reusable component system */}
    <rect x="20" y="320" width="460" height="64" rx="8" stroke={COLORS.border} strokeWidth="1" strokeDasharray="5 3" fill="none" />
    <text x="34" y="336" fill={COLORS.textMuted} style={{ ...label, fontSize: "8px", letterSpacing: "0.08em" }}>
      REUSABLE COMPONENT SYSTEM
    </text>

    <rect x="34" y="344" width="92" height="28" rx="5" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="80" y="362" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Form Builder
    </text>
    <line x1="126" y1="358" x2="146" y2="358" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="148" y="344" width="100" height="28" rx="5" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="198" y="362" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Field Renderer
    </text>
    <line x1="248" y1="358" x2="268" y2="358" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="270" y="344" width="84" height="28" rx="5" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="312" y="362" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Validation
    </text>
    <line x1="354" y1="358" x2="374" y2="358" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="376" y="344" width="80" height="28" rx="5" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="416" y="362" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Preview
    </text>

    {/* Dashed feed arrow from Form Builder back into UI Components */}
    <path
      d="M80 344 L80 306 Q80 300 74 300 L36 300 Q30 300 30 294 L30 44 Q30 38 36 38 L158 38"
      stroke={COLORS.arrow}
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="4 2"
      markerEnd="url(#arr-tm)"
    />
  </svg>
);

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 260 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="Template management architecture diagram"
  >
    <title>Template management architecture diagram, mobile layout</title>
    <desc>
      A single-column stack of UI Components, Redux Toolkit, TanStack
      Query, and REST APIs, followed by a reusable component system
      grouping Form Builder, Field Renderer, Validation, and Preview.
    </desc>

    <defs>
      <marker id="am-tm" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill={COLORS.arrow} />
      </marker>
    </defs>

    <rect x="55" y="8" width="150" height="34" rx="4" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="130" y="29" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "10px" }}>
      UI Components
    </text>
    <line x1="108" y1="42" x2="108" y2="58" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <line x1="152" y1="58" x2="152" y2="42" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />

    <rect x="55" y="60" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.state} />
    <text x="130" y="81" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      Redux Toolkit
    </text>
    <line x1="108" y1="94" x2="108" y2="110" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <line x1="152" y1="110" x2="152" y2="94" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />

    <rect x="55" y="112" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.query} />
    <text x="130" y="133" textAnchor="middle" fill={COLORS.queryText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      TanStack Query
    </text>
    <line x1="108" y1="146" x2="108" y2="162" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <line x1="152" y1="162" x2="152" y2="146" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-tm)" />

    <rect x="55" y="164" width="150" height="34" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.api} />
    <text x="130" y="185" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      REST APIs
    </text>

    <rect x="20" y="216" width="220" height="176" rx="6" stroke={COLORS.border} strokeWidth="1" strokeDasharray="4 3" fill="none" />
    <text x="130" y="232" textAnchor="middle" fill={COLORS.textMuted} style={{ ...label, fontSize: "8px", letterSpacing: "0.06em" }}>
      REUSABLE COMPONENT SYSTEM
    </text>

    <rect x="34" y="240" width="192" height="28" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="130" y="258" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Form Builder
    </text>
    <line x1="130" y1="268" x2="130" y2="280" stroke={COLORS.arrow} strokeWidth="1" markerEnd="url(#am-tm)" />

    <rect x="34" y="282" width="192" height="28" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="130" y="300" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Field Renderer
    </text>
    <line x1="130" y1="310" x2="130" y2="322" stroke={COLORS.arrow} strokeWidth="1" markerEnd="url(#am-tm)" />

    <rect x="34" y="324" width="192" height="28" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="130" y="342" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Validation
    </text>
    <line x1="130" y1="352" x2="130" y2="364" stroke={COLORS.arrow} strokeWidth="1" markerEnd="url(#am-tm)" />

    <rect x="34" y="366" width="192" height="28" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.client} />
    <text x="130" y="384" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Preview
    </text>
  </svg>
);