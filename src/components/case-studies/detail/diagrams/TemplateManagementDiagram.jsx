// Case Study 1: Template Management System
// Flow: UI Components ↔ Redux Toolkit ↔ TanStack Query ↔ REST APIs
// Sub-cluster: Form Builder → Field Renderer → Validation → Preview

export const DesktopDiagram = () => (
  <svg viewBox="0 0 500 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Template Management architecture diagram">
    <defs>
      <marker id="arr-tm" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="#6B6459" />
      </marker>
    </defs>

    {/* Main vertical flow */}
    <rect x="175" y="16" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="40" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>UI Components</text>

    <line x1="235" y1="54" x2="235" y2="86" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="275" y1="88" x2="275" y2="56" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    <rect x="175" y="88" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="112" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>Redux Toolkit</text>

    <line x1="235" y1="126" x2="235" y2="158" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="275" y1="160" x2="275" y2="128" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    <rect x="175" y="160" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="184" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>TanStack Query</text>

    <line x1="235" y1="198" x2="235" y2="230" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />
    <line x1="275" y1="232" x2="275" y2="200" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-tm)" />

    <rect x="175" y="232" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="256" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>REST APIs</text>

    {/* Sub-cluster */}
    <rect x="40" y="290" width="430" height="68" rx="5" stroke="#D4C9BC" strokeWidth="1.2" strokeDasharray="5 3" fill="none" />
    <text x="255" y="306" textAnchor="middle" fill="#6B6459" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace", letterSpacing: "0.1em" }}>REUSABLE COMPONENT SYSTEM</text>

    <rect x="52" y="318" width="88" height="26" rx="4" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="96" y="335" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Form Builder</text>

    <line x1="140" y1="331" x2="160" y2="331" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="162" y="318" width="98" height="26" rx="4" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="211" y="335" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Field Renderer</text>

    <line x1="260" y1="331" x2="280" y2="331" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="282" y="318" width="80" height="26" rx="4" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="322" y="335" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Validation</text>

    <line x1="362" y1="331" x2="382" y2="331" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-tm)" />

    <rect x="384" y="318" width="72" height="26" rx="4" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="420" y="335" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Preview</text>

    {/* Arrow from sub-cluster to UI */}
    <path d="M 96 318 L 96 300 Q 96 296 92 296 L 56 296 Q 52 296 52 292 L 52 40 Q 52 36 56 36 L 175 36" stroke="#6B6459" strokeWidth="1.5" fill="none" markerEnd="url(#arr-tm)" strokeDasharray="4 2" />
    <text x="60" y="168" fill="#6B6459" style={{ fontSize: "8px", fontFamily: "Space Mono, monospace" }} transform="rotate(-90, 60, 168)">feeds into</text>
  </svg>
);

export const MobileDiagram = () => (
  <svg viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Template Management architecture diagram">
    <defs>
      <marker id="am-tm" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill="#6B6459" />
      </marker>
    </defs>
    <rect x="55" y="8" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="27" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>UI Components</text>
    <line x1="130" y1="38" x2="130" y2="54" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <rect x="55" y="56" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="75" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>Redux Toolkit</text>
    <line x1="130" y1="86" x2="130" y2="102" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <rect x="55" y="104" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="123" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>TanStack Query</text>
    <line x1="130" y1="134" x2="130" y2="150" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-tm)" />
    <rect x="55" y="152" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="171" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>REST APIs</text>
    <rect x="20" y="200" width="220" height="110" rx="4" stroke="#D4C9BC" strokeWidth="1" strokeDasharray="4 3" fill="none" />
    <text x="130" y="218" textAnchor="middle" fill="#6B6459" style={{ fontSize: "8px", fontFamily: "Space Mono, monospace", letterSpacing: "0.08em" }}>REUSABLE COMPONENT SYSTEM</text>
    <rect x="40" y="228" width="180" height="22" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="130" y="243" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Form Builder → Field Renderer</text>
    <line x1="130" y1="250" x2="130" y2="262" stroke="#6B6459" strokeWidth="1" markerEnd="url(#am-tm)" />
    <rect x="40" y="264" width="180" height="22" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="130" y="279" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Validation → Preview</text>
  </svg>
);
