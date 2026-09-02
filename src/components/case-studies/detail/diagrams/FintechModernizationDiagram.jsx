// Case Study 4: Fintech Modernization
// Flow: Legacy React 15 → Next.js Architecture → fans into UI Modules / App State / Server State
//       → API & Transaction Services → Financial Data
// Side cluster: UX States (Suspense / Loading, Error / Recovery)

const COLORS = {
  border: "#D4C9BC",
  borderStrong: "#B8AA98",
  arrow: "#6B6459",
  text: "#16140F",
  textMuted: "#6B6459",
  base: "#FBFAF5",
  legacy: "#F3E6DE", // muted terracotta tint — legacy origin
  legacyText: "#8A5233",
  legacyBorder: "#D9A87E",
  modern: "#E5EEE8", // muted sage tint — modern app layer
  modernText: "#3F5C4F",
  modernBorder: "#9DBCA8",
  state: "#E8E6F3", // muted lavender tint — state management
  stateText: "#4A4180",
  stateBorder: "#ADA4D6",
  data: "#F3EAE6", // muted mauve tint — data / services
  dataText: "#7A4F45",
  dataBorder: "#CBA79B",
};

const label = { fontFamily: "Space Mono, monospace" };

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 640 416"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[560px] block"
    role="img"
    aria-label="Fintech modernization architecture diagram"
  >
    <title>Fintech modernization architecture diagram</title>
    <desc>
      A legacy React 15 application is modernized into a Next.js architecture,
      which fans out into reusable UI and feature modules, an application state
      layer, and a server-state layer, converging into API and transaction
      services and finally financial data, with a side cluster for loading and
      error UX states.
    </desc>

    <defs>
      <marker id="arr-ftm" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
        <path d="M0,0 L9,3.5 L0,7 Z" fill={COLORS.arrow} />
      </marker>

      {/* Soft drop shadow for cards */}
      <filter id="ftm-shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#16140F" floodOpacity="0.08" />
      </filter>

      {/* Node gradients */}
      <linearGradient id="ftm-legacy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8EFE8" />
        <stop offset="100%" stopColor={COLORS.legacy} />
      </linearGradient>
      <linearGradient id="ftm-modern" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF5F0" />
        <stop offset="100%" stopColor={COLORS.modern} />
      </linearGradient>
      <linearGradient id="ftm-state" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0EEF8" />
        <stop offset="100%" stopColor={COLORS.state} />
      </linearGradient>
      <linearGradient id="ftm-data" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8F1ED" />
        <stop offset="100%" stopColor={COLORS.data} />
      </linearGradient>
    </defs>

    {/* ── Legacy React 15 ───────────────────────────────── */}
    <g filter="url(#ftm-shadow)">
      <rect x="230" y="18" width="180" height="50" rx="10" stroke={COLORS.legacyBorder} strokeWidth="1.5" fill="url(#ftm-legacy)" />
    </g>
    <text x="320" y="41" textAnchor="middle" fill={COLORS.legacyText} style={{ ...label, fontSize: "12.5px", fontWeight: 700 }}>
      Legacy React 15
    </text>
    <text x="320" y="57" textAnchor="middle" fill={COLORS.legacyText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      Existing application
    </text>

    <line x1="320" y1="68" x2="320" y2="90" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#arr-ftm)" />
    <text x="332" y="83" fill={COLORS.textMuted} style={{ ...label, fontSize: "8px" }}>
      migrate
    </text>

    {/* ── Next.js Architecture ──────────────────────────── */}
    <g filter="url(#ftm-shadow)">
      <rect x="222" y="92" width="196" height="52" rx="10" stroke={COLORS.modernBorder} strokeWidth="1.8" fill="url(#ftm-modern)" />
    </g>
    <text x="320" y="115" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "12.5px", fontWeight: 700 }}>
      Next.js Architecture
    </text>
    <text x="320" y="131" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      Modernized foundation
    </text>

    {/* Branch to three layers */}
    <path d="M320 144 L320 162 L150 162 L150 178" stroke={COLORS.arrow} strokeWidth="1.3" fill="none" markerEnd="url(#arr-ftm)" />
    <path d="M320 144 L320 178" stroke={COLORS.arrow} strokeWidth="1.6" fill="none" markerEnd="url(#arr-ftm)" />
    <path d="M320 144 L320 162 L490 162 L490 178" stroke={COLORS.arrow} strokeWidth="1.3" fill="none" markerEnd="url(#arr-ftm)" />

    {/* ── Layer row ─────────────────────────────────────── */}
    <g filter="url(#ftm-shadow)">
      <rect x="66" y="180" width="168" height="56" rx="10" stroke={COLORS.modernBorder} strokeWidth="1.5" fill="url(#ftm-modern)" />
    </g>
    <text x="150" y="202" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      UI Modules
    </text>
    <text x="150" y="220" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      Reusable + feature
    </text>

    <g filter="url(#ftm-shadow)">
      <rect x="252" y="180" width="136" height="56" rx="10" stroke={COLORS.stateBorder} strokeWidth="1.5" fill="url(#ftm-state)" />
    </g>
    <text x="320" y="202" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      App State
    </text>
    <text x="320" y="220" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      Redux Toolkit
    </text>

    <g filter="url(#ftm-shadow)">
      <rect x="406" y="180" width="168" height="56" rx="10" stroke={COLORS.stateBorder} strokeWidth="1.5" fill="url(#ftm-state)" />
    </g>
    <text x="490" y="202" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "11px", fontWeight: 700 }}>
      Server State
    </text>
    <text x="490" y="220" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      TanStack Query
    </text>

    {/* Converge to API services */}
    <path d="M150 236 L150 256 L320 256 L320 272" stroke={COLORS.arrow} strokeWidth="1.3" fill="none" markerEnd="url(#arr-ftm)" />
    <path d="M320 236 L320 272" stroke={COLORS.arrow} strokeWidth="1.6" fill="none" markerEnd="url(#arr-ftm)" />
    <path d="M490 236 L490 256 L320 256 L320 272" stroke={COLORS.arrow} strokeWidth="1.3" fill="none" markerEnd="url(#arr-ftm)" />

    {/* ── API & Transaction Services ────────────────────── */}
    <g filter="url(#ftm-shadow)">
      <rect x="222" y="274" width="196" height="54" rx="10" stroke={COLORS.dataBorder} strokeWidth="1.6" fill="url(#ftm-data)" />
    </g>
    <text x="320" y="296" textAnchor="middle" fill={COLORS.dataText} style={{ ...label, fontSize: "11.5px", fontWeight: 700 }}>
      API &amp; Transaction
    </text>
    <text x="320" y="314" textAnchor="middle" fill={COLORS.dataText} style={{ ...label, fontSize: "9px", opacity: 0.85 }}>
      REST services
    </text>

    <line x1="320" y1="328" x2="320" y2="352" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#arr-ftm)" />

    {/* ── Financial Data ────────────────────────────────── */}
    <g filter="url(#ftm-shadow)">
      <rect x="238" y="354" width="164" height="48" rx="10" stroke={COLORS.borderStrong} strokeWidth="1.6" fill={COLORS.base} />
    </g>
    <text x="320" y="382" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "12.5px", fontWeight: 700 }}>
      Financial Data
    </text>

    {/* ── Side cluster: UX States ───────────────────────── */}
    <rect x="452" y="274" width="150" height="116" rx="12" stroke={COLORS.border} strokeWidth="1.2" strokeDasharray="5 4" fill="#FDFCF8" />
    <text x="466" y="294" fill={COLORS.textMuted} style={{ ...label, fontSize: "8px", letterSpacing: "0.08em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x="464" y="302" width="126" height="30" rx="6" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="527" y="321" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Suspense / Loading
    </text>

    <rect x="464" y="338" width="126" height="30" rx="6" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="527" y="357" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Error / Recovery
    </text>

    {/* Dashed connector from API services to UX states */}
    <line x1="418" y1="300" x2="450" y2="300" stroke={COLORS.arrow} strokeWidth="1.3" markerEnd="url(#arr-ftm)" strokeDasharray="4 3" />
  </svg>
);

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 260 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[300px] block"
    role="img"
    aria-label="Fintech modernization architecture diagram"
  >
    <title>Fintech modernization architecture diagram, mobile layout</title>
    <desc>
      A single-column stack: legacy React 15 application, Next.js architecture,
      a combined UI and state layer, API and transaction services, financial
      data, and finally the loading and error UX states.
    </desc>

    <defs>
      <marker id="am-ftm" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.arrow} />
      </marker>
      <filter id="ftm-shadow-m" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#16140F" floodOpacity="0.08" />
      </filter>
      <linearGradient id="ftm-legacy-m" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8EFE8" />
        <stop offset="100%" stopColor={COLORS.legacy} />
      </linearGradient>
      <linearGradient id="ftm-modern-m" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EEF5F0" />
        <stop offset="100%" stopColor={COLORS.modern} />
      </linearGradient>
      <linearGradient id="ftm-state-m" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F0EEF8" />
        <stop offset="100%" stopColor={COLORS.state} />
      </linearGradient>
      <linearGradient id="ftm-data-m" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8F1ED" />
        <stop offset="100%" stopColor={COLORS.data} />
      </linearGradient>
    </defs>

    <g filter="url(#ftm-shadow-m)">
      <rect x="45" y="8" width="170" height="40" rx="9" stroke={COLORS.legacyBorder} strokeWidth="1.5" fill="url(#ftm-legacy-m)" />
    </g>
    <text x="130" y="27" textAnchor="middle" fill={COLORS.legacyText} style={{ ...label, fontSize: "10.5px", fontWeight: 700 }}>
      Legacy React 15
    </text>
    <text x="130" y="42" textAnchor="middle" fill={COLORS.legacyText} style={{ ...label, fontSize: "7.5px", opacity: 0.85 }}>
      Existing application
    </text>
    <line x1="130" y1="48" x2="130" y2="64" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#am-ftm)" />

    <g filter="url(#ftm-shadow-m)">
      <rect x="45" y="66" width="170" height="40" rx="9" stroke={COLORS.modernBorder} strokeWidth="1.6" fill="url(#ftm-modern-m)" />
    </g>
    <text x="130" y="85" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "10.5px", fontWeight: 700 }}>
      Next.js Architecture
    </text>
    <text x="130" y="100" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "7.5px", opacity: 0.85 }}>
      Modernized foundation
    </text>
    <line x1="130" y1="106" x2="130" y2="122" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#am-ftm)" />

    <g filter="url(#ftm-shadow-m)">
      <rect x="45" y="124" width="170" height="46" rx="9" stroke={COLORS.stateBorder} strokeWidth="1.5" fill="url(#ftm-state-m)" />
    </g>
    <text x="130" y="143" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "10.5px", fontWeight: 700 }}>
      UI + State Layer
    </text>
    <text x="130" y="159" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "8px", opacity: 0.85 }}>
      Redux + TanStack Query
    </text>
    <line x1="130" y1="170" x2="130" y2="186" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#am-ftm)" />

    <g filter="url(#ftm-shadow-m)">
      <rect x="45" y="188" width="170" height="46" rx="9" stroke={COLORS.dataBorder} strokeWidth="1.6" fill="url(#ftm-data-m)" />
    </g>
    <text x="130" y="207" textAnchor="middle" fill={COLORS.dataText} style={{ ...label, fontSize: "10.5px", fontWeight: 700 }}>
      API &amp; Transaction
    </text>
    <text x="130" y="223" textAnchor="middle" fill={COLORS.dataText} style={{ ...label, fontSize: "7.5px", opacity: 0.85 }}>
      REST services
    </text>
    <line x1="130" y1="234" x2="130" y2="250" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#am-ftm)" />

    <g filter="url(#ftm-shadow-m)">
      <rect x="55" y="252" width="150" height="38" rx="9" stroke={COLORS.borderStrong} strokeWidth="1.6" fill={COLORS.base} />
    </g>
    <text x="130" y="275" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "10.5px", fontWeight: 700 }}>
      Financial Data
    </text>
    <line x1="130" y1="290" x2="130" y2="306" stroke={COLORS.arrow} strokeWidth="1.6" markerEnd="url(#am-ftm)" />

    <rect x="40" y="308" width="180" height="102" rx="12" stroke={COLORS.border} strokeWidth="1.2" strokeDasharray="4 3" fill="#FDFCF8" />
    <text x="52" y="325" fill={COLORS.textMuted} style={{ ...label, fontSize: "7.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x="52" y="332" width="156" height="30" rx="6" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="130" y="351" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Suspense / Loading
    </text>

    <rect x="52" y="368" width="156" height="30" rx="6" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="M130 392 L130 400" stroke={COLORS.arrow} strokeWidth="1" fill="none" markerEnd="url(#am-ftm-muted)" />
    <path d="M180 392 L196 402" stroke={COLORS.arrow} strokeWidth="1" fill="none" markerEnd="url(#am-ftm-muted)" />

    <rect x="42" y="404" width="56" height="24" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.modern} />
    <text x="70" y="420" textAnchor="middle" fill={COLORS.modernText} style={{ ...label, fontSize: "7px", fontWeight: 700 }}>
      Successful
    </text>

    <rect x="102" y="404" width="56" height="24" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.warn} />
    <text x="130" y="420" textAnchor="middle" fill={COLORS.warnText} style={{ ...label, fontSize: "7px", fontWeight: 700 }}>
      Failed
    </text>

    <rect x="162" y="404" width="56" height="24" rx="4" stroke={COLORS.borderStrong} strokeWidth="1" fill={COLORS.state} />
    <text x="190" y="420" textAnchor="middle" fill={COLORS.stateText} style={{ ...label, fontSize: "7px", fontWeight: 700 }}>
      Excess
    </text>

    <line x1="42" y1="440" x2="218" y2="440" stroke={COLORS.border} strokeWidth="1" />

    <text x="42" y="456" fill={COLORS.textMuted} style={{ ...label, fontSize: "7px" }}>
      Interaction
    </text>
    <rect x="42" y="460" width="176" height="28" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="130" y="478" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Suspense / Loading
    </text>

    <rect x="42" y="494" width="176" height="28" rx="4" stroke={COLORS.border} strokeWidth="1" fill={COLORS.base} />
    <text x="130" y="512" textAnchor="middle" fill={COLORS.text} style={{ ...label, fontSize: "9px" }}>
      Error / Recovery
    </text>
  </svg>
);