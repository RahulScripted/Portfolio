// Case Study 2: AI-Powered SaaS Platform
// Flow: React Frontend → JWT Auth + RBAC → Express Backend → MongoDB / AI APIs / Razorpay

export const DesktopDiagram = () => (
  <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="AI SaaS architecture diagram">
    <defs>
      <marker id="arr-ai" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6" fill="#6B6459" />
      </marker>
    </defs>

    {/* Top: React Frontend */}
    <rect x="170" y="16" width="170" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="40" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>React Frontend</text>

    <line x1="255" y1="54" x2="255" y2="82" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ai)" />

    {/* Auth layer */}
    <rect x="105" y="84" width="130" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="170" y="105" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>JWT Auth</text>

    <rect x="275" y="84" width="130" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="340" y="105" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>RBAC</text>

    <line x1="235" y1="101" x2="275" y2="101" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#arr-ai)" />

    {/* Down to Express */}
    <line x1="255" y1="118" x2="255" y2="150" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ai)" />

    <rect x="155" y="152" width="200" height="38" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="175" textAnchor="middle" fill="#16140F" style={{ fontSize: "11px", fontFamily: "Space Mono, monospace" }}>Express Backend</text>

    {/* Three branches down */}
    <line x1="170" y1="190" x2="170" y2="230" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ai)" />
    <line x1="255" y1="190" x2="255" y2="230" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ai)" />
    <line x1="345" y1="190" x2="345" y2="230" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#arr-ai)" />

    {/* Bottom services */}
    <rect x="110" y="232" width="120" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="170" y="253" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>MongoDB</text>

    <rect x="195" y="232" width="120" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="255" y="253" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>AI APIs</text>

    <rect x="280" y="232" width="130" height="34" rx="5" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="345" y="253" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>Razorpay</text>

    {/* Protected routes label */}
    <rect x="130" y="288" width="250" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1" strokeDasharray="5 3" fill="none" />
    <text x="255" y="307" textAnchor="middle" fill="#6B6459" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace", letterSpacing: "0.08em" }}>PROTECTED API ROUTES</text>
  </svg>
);

export const MobileDiagram = () => (
  <svg viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-label="AI SaaS architecture diagram">
    <defs>
      <marker id="am-ai" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <path d="M0,0 L7,2.5 L0,5" fill="#6B6459" />
      </marker>
    </defs>
    <rect x="55" y="8" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="27" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>React Frontend</text>
    <line x1="130" y1="38" x2="130" y2="54" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ai)" />
    <rect x="55" y="56" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="75" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>JWT + RBAC</text>
    <line x1="130" y1="86" x2="130" y2="102" stroke="#6B6459" strokeWidth="1.5" markerEnd="url(#am-ai)" />
    <rect x="55" y="104" width="150" height="30" rx="4" stroke="#D4C9BC" strokeWidth="1.5" fill="#FBFAF5" />
    <text x="130" y="123" textAnchor="middle" fill="#16140F" style={{ fontSize: "10px", fontFamily: "Space Mono, monospace" }}>Express Backend</text>
    <line x1="75" y1="134" x2="75" y2="156" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#am-ai)" />
    <line x1="130" y1="134" x2="130" y2="156" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#am-ai)" />
    <line x1="185" y1="134" x2="185" y2="156" stroke="#6B6459" strokeWidth="1.2" markerEnd="url(#am-ai)" />
    <rect x="30" y="158" width="80" height="26" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="70" y="175" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>MongoDB</text>
    <rect x="90" y="158" width="80" height="26" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="130" y="175" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>AI APIs</text>
    <rect x="150" y="158" width="80" height="26" rx="3" stroke="#D4C9BC" strokeWidth="1" fill="#FBFAF5" />
    <text x="190" y="175" textAnchor="middle" fill="#16140F" style={{ fontSize: "9px", fontFamily: "Space Mono, monospace" }}>Razorpay</text>
  </svg>
);
