// Case Study 3: Fintech Customer Platform (enhanced)
// Flow: React Native → fans out to Navigation/TypeScript/Reusable UI → converges into Redux → REST → JWT
// Side cluster: UX States (Loading, Error/Retry)

const COLORS = {
  border: "#D4C9BC",
  borderStrong: "#B8AA98",
  arrow: "#6B6459",
  text: "#16140F",
  textMuted: "#6B6459",
  base: "#FBFAF5",
  client: "#E5EEE8",     // muted sage tint — client-side modules
  clientText: "#3F5C4F",
  state: "#E8E6F3",       // muted lavender tint — state management
  stateText: "#4A4180",
  api: "#F3E6DE",         // muted terracotta tint — external comms
  apiText: "#8A5233",
  auth: "#F3EAE6",        // muted mauve tint — auth/session
  authText: "#7A4F45",
};

const label = { fontFamily: "Space Mono, monospace" };

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 620 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="Fintech platform architecture diagram"
  >
    <title>Fintech platform architecture diagram</title>
    <desc>
      React Native app branches into Navigation, TypeScript, and Reusable UI,
      converges into Redux Toolkit, then flows through REST APIs into JWT
      auth flows, with a side cluster for loading and error UX states.
    </desc>

    <defs>
      <marker id="arr-ft" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill={COLORS.arrow} />
      </marker>
    </defs>

    {/* React Native App */}
    <rect x="230" y="16" width="180" height="46" rx="6" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="320" y="44" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "12px" }}>
      React Native App
    </text>

    {/* Branching to three modules */}
    <path d="M320 62 L320 76 L155 76 L155 90" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-ft)" />
    <path d="M320 62 L320 90" stroke={COLORS.arrow} strokeWidth="1.5" fill="none" markerEnd="url(#arr-ft)" />
    <path d="M320 62 L320 76 L485 76 L485 90" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-ft)" />

    {/* Second row: modules */}
    <rect x="70" y="92" width="150" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.client} />
    <text x="145" y="112" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      Navigation
    </text>
    <text x="145" y="130" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Screen routing
    </text>

    <rect x="250" y="92" width="140" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.client} />
    <text x="320" y="112" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      TypeScript
    </text>
    <text x="320" y="130" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Type safety
    </text>

    <rect x="420" y="92" width="150" height="50" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.client} />
    <text x="495" y="112" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      Reusable UI
    </text>
    <text x="495" y="130" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "9px" }}>
      Shared UI kit
    </text>

    {/* Converge to Redux */}
    <path d="M145 142 L145 158 L320 158 L320 172" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-ft)" />
    <path d="M320 142 L320 172" stroke={COLORS.arrow} strokeWidth="1.5" fill="none" markerEnd="url(#arr-ft)" />
    <path d="M495 142 L495 158 L320 158 L320 172" stroke={COLORS.arrow} strokeWidth="1.2" fill="none" markerEnd="url(#arr-ft)" />

    {/* Redux Toolkit */}
    <rect x="230" y="174" width="180" height="48" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.state} />
    <text x="320" y="194" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      Redux Toolkit
    </text>
    <text x="320" y="212" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "9px" }}>
      Global state
    </text>

    <line x1="320" y1="222" x2="320" y2="246" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-ft)" />

    {/* REST APIs */}
    <rect x="230" y="248" width="180" height="46" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.api} />
    <text x="320" y="266" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "12px", fontWeight: 700 }}>
      REST APIs
    </text>
    <text x="320" y="284" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "9px" }}>
      Backend communication
    </text>

    <line x1="320" y1="294" x2="320" y2="318" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#arr-ft)" />

    {/* JWT Auth Flows */}
    <rect x="230" y="320" width="180" height="42" rx="6" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.auth} />
    <text x="320" y="338" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      JWT Auth Flows
    </text>
    <text x="320" y="354" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "9px" }}>
      Session and login
    </text>

    {/* Side cluster: UX States */}
    <rect x="440" y="174" width="150" height="110" rx="8" stroke={COLORS.border} strokeWidth="1" strokeDasharray="5 3" fill="none" />
    <text x="452" y="192" fill={COLORS.textMuted} style={{ ...label, fontSize: "8px", letterSpacing: "0.06em" }}>
      UX STATES
    </text>

    <rect x="452" y="198" width="126" height="26" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="515" y="215" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Loading
    </text>

    <rect x="452" y="232" width="126" height="26" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="515" y="249" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Error / Retry
    </text>

    {/* Dashed connector from Redux to UX states */}
    <line x1="410" y1="198" x2="438" y2="198" stroke={COLORS.arrow} strokeWidth="1.2" markerEnd="url(#arr-ft)" strokeDasharray="4 2" />
  </svg>
);

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 260 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    role="img"
    aria-label="Fintech platform architecture diagram"
  >
    <title>Fintech platform architecture diagram, mobile layout</title>
    <desc>
      A single-column stack: React Native app, then a combined client-modules
      step, then Redux Toolkit, REST APIs, JWT auth flows, and finally the
      loading and error UX states.
    </desc>

    <defs>
      <marker id="am-ft" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill={COLORS.arrow} />
      </marker>
    </defs>

    <rect x="55" y="8" width="150" height="30" rx="4" stroke={COLORS.border} strokeWidth="1.5" fill={COLORS.base} />
    <text x="130" y="27" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "10px" }}>
      React Native App
    </text>
    <line x1="130" y1="38" x2="130" y2="54" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-ft)" />

    <rect x="45" y="56" width="170" height="42" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.client} />
    <text x="130" y="74" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      Navigation, TS, UI kit
    </text>
    <text x="130" y="90" textAnchor="middle" fill={COLORS.clientText} style={{ ...label, fontSize: "8px" }}>
      Client-side modules
    </text>
    <line x1="130" y1="98" x2="130" y2="114" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-ft)" />

    <rect x="55" y="116" width="150" height="36" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.state} />
    <text x="130" y="134" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      Redux Toolkit
    </text>
    <text x="130" y="148" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "7px" }}>
      Global state
    </text>
    <line x1="130" y1="152" x2="130" y2="168" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-ft)" />

    <rect x="55" y="170" width="150" height="36" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.api} />
    <text x="130" y="188" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      REST APIs
    </text>
    <text x="130" y="202" textAnchor="middle" fill={COLORS.apiText} style={{ ...label, fontSize: "7px" }}>
      Backend communication
    </text>
    <line x1="130" y1="206" x2="130" y2="222" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-ft)" />

    <rect x="55" y="224" width="150" height="36" rx="4" stroke={COLORS.borderStrong} strokeWidth="1.5" fill={COLORS.auth} />
    <text x="130" y="242" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "10px", fontWeight: 700 }}>
      JWT Auth Flows
    </text>
    <text x="130" y="256" textAnchor="middle" fill={COLORS.authText} style={{ ...label, fontSize: "7px" }}>
      Session and login
    </text>
    <line x1="130" y1="260" x2="130" y2="276" stroke={COLORS.arrow} strokeWidth="1.5" markerEnd="url(#am-ft)" />

    <rect x="40" y="278" width="180" height="94" rx="8" stroke={COLORS.border} strokeWidth="1" strokeDasharray="4 3" fill="none" />
    <text x="52" y="294" fill={COLORS.textMuted} style={{ ...label, fontSize: "7px", letterSpacing: "0.05em" }}>
      UX STATES
    </text>

    <rect x="52" y="300" width="156" height="26" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="130" y="317" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Loading
    </text>

    <rect x="52" y="332" width="156" height="26" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="130" y="349" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Error / Retry
    </text>
  </svg>
);