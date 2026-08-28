// Case Study 3: Fintech Customer Platform
// Flow: React Native → fans out to Navigation/TypeScript/Reusable UI → converges into Redux → REST → JWT
// Side cluster: UX States (Loading, Error/Retry)

export const DesktopDiagram = () => (
  <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Fintech platform architecture diagram">
    <defs>
      <marker id="arr-ft" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="#6B6459" />
      </marker>
    </defs>

    {/* Top: React Native */}
    <rect x="160" y="16" width="180" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="250" y="40" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>React Native App</text>

    {/* Branching */}
    <line x1="200" y1="54" x2="140" y2="86" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
    <line x1="300" y1="54" x2="365" y2="86" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
    <line x1="250" y1="54" x2="250" y2="86" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />

    {/* Second row */}
    <rect x="70" y="88" width="140" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="140" y="109" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>React Navigation</text>

    <rect x="180" y="88" width="140" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="250" y="109" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>TypeScript</text>

    <rect x="300" y="88" width="140" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="370" y="109" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>Reusable UI</text>

    {/* Converge to Redux */}
    <line x1="140" y1="122" x2="250" y2="156" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-ft)" />
    <line x1="250" y1="122" x2="250" y2="156" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
    <line x1="370" y1="122" x2="250" y2="156" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-ft)" />

    {/* Redux Toolkit */}
    <rect x="170" y="158" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="250" y="181" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>Redux Toolkit</text>

    <line x1="250" y1="196" x2="250" y2="228" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />

    {/* REST APIs */}
    <rect x="170" y="230" width="160" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="250" y="253" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>REST APIs</text>

    <line x1="250" y1="268" x2="250" y2="298" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ft)" />

    {/* JWT Auth */}
    <rect x="170" y="300" width="160" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="250" y="321" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>JWT Auth Flows</text>

    {/* Side cluster: UX States */}
    <rect x="380" y="158" width="110" height="84" rx="4" stroke="#D4C9BC" strokeWidth="1" strokeDasharray="5 3" fill="none" />
    <text x="435" y="175" textAnchor="middle" fill="#6B6459" style={{ fontSize: "8px", fontFamily: "Space Mono, monospace", letterSpacing: "0.06em" }}>UX STATES</text>

    <rect x="392" y="184" width="86" height="20" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="435" y="198" textAnchor="middle" fill="#16140F" style={{ fontSize: "8px", fontFamily: "Space Mono, monospace" }}>Loading</text>

    <rect x="392" y="210" width="86" height="20" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="435" y="224" textAnchor="middle" fill="#16140F" style={{ fontSize: "8px", fontFamily: "Space Mono, monospace" }}>Error/Retry</text>

    {/* Arrow from Redux to UX states */}
    <line x1="330" y1="177" x2="380" y2="177" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-ft)" strokeDasharray="4 2" />
  </svg>
);

export const MobileDiagram = () => (
  <svg viewBox="0 0 260 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="Fintech platform architecture diagram">
    <defs>
      <marker id="am-ft" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill="#6B6459" />
      </marker>
    </defs>
    <rect x="55" y="8" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="27" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>React Native App</text>
    <line x1="130" y1="38" x2="130" y2="54" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ft)" />
    <rect x="55" y="56" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="75" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>React Navigation</text>
    <line x1="130" y1="86" x2="130" y2="102" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ft)" />
    <rect x="55" y="104" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="123" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>Redux Toolkit</text>
    <line x1="130" y1="134" x2="130" y2="150" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ft)" />
    <rect x="55" y="152" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="171" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>REST APIs</text>
    <line x1="130" y1="182" x2="130" y2="198" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ft)" />
    <rect x="55" y="200" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="219" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>JWT Auth Flows</text>
  </svg>
);
