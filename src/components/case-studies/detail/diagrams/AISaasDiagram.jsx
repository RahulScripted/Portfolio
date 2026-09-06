// Case Study 2: AI-Powered SaaS Platform — Webex-style diagram
// Flow: React Frontend → JWT Auth + RBAC → Express Backend
//       → fans out to MongoDB / AI APIs / Razorpay
// Restyled to match the icon-card + colored curved arrow language of the
// Webex xAPI reference graphic. Background is fully transparent (no base
// fill rect) so it drops onto any page background cleanly.

const COLORS = {
  arrow: "#8A8577",
  textMuted: "#6B6459",
  text: "#16140F",
  cardBorder: "#E7E2D8",
  cardFill: "#FFFFFF",
  dashed: "#B9B2A2",

  frontend: "#2F9E85", // teal — React frontend
  auth: "#B0553F",     // deep clay — JWT auth
  rbac: "#6C5CD1",     // violet — RBAC
  backend: "#3F8F6E",  // sage — Express backend
  service: "#C97B4A",  // terracotta — downstream services
};

const mono = { fontFamily: "Space Mono, monospace" };

/* ---------- reusable pieces ---------- */

const IconCard = ({ x, y, w, h, color, icon, label, sublabel, iconSize = 40 }) => {
  const cx = x + w / 2;
  const iconX = cx - iconSize / 2;
  const iconY = y + (h > 70 ? 14 : 8);
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx="14"
        fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.4"
        style={{ filter: "drop-shadow(0 3px 8px rgba(22,20,15,0.10))" }}
      />
      <rect x={iconX} y={iconY} width={iconSize} height={iconSize} rx="10" fill={color} />
      {icon(iconX, iconY, iconSize)}
      <text x={cx} y={iconY + iconSize + 17} textAnchor="middle" fill={COLORS.text}
        style={{ ...mono, fontSize: "10.5px", fontWeight: 700 }}>
        {label}
      </text>
      {sublabel && (
        <text x={cx} y={iconY + iconSize + 30} textAnchor="middle" fill={COLORS.textMuted}
          style={{ ...mono, fontSize: "8px", opacity: 0.85 }}>
          {sublabel}
        </text>
      )}
    </g>
  );
};

const CurvedArrow = ({ d, color, label, markerId, labelPos }) => (
  <g>
    <path d={d} stroke={color} strokeWidth="2" fill="none" markerEnd={`url(#${markerId})`} />
    {label && (
      <g transform={`translate(${labelPos[0]}, ${labelPos[1]})`}>
        <rect x={-label.length * 3.4 - 7} y="-10" width={label.length * 6.8 + 14} height="20" rx="10" fill={color} />
        <text x="0" y="4" textAnchor="middle" fill="#fff" style={{ ...mono, fontSize: "8.5px", fontWeight: 700 }}>
          {label}
        </text>
      </g>
    )}
  </g>
);

/* ---------- icon glyphs ---------- */

const iconWindow = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <rect x="-11" y="-8" width="22" height="16" rx="2" />
    <path d="M-11,-3 L11,-3" />
    <circle cx="-8" cy="-5.5" r="0.7" fill="#fff" stroke="none" />
  </g>
);

const iconLock = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <rect x="-7" y="-1" width="14" height="11" rx="2.5" />
    <path d="M-4,-1 L-4,-5 C-4,-8.3 4,-8.3 4,-5 L4,-1" />
    <circle cx="0" cy="4" r="1.3" fill="#fff" stroke="none" />
  </g>
);

const iconShield = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round" strokeLinecap="round">
    <path d="M0,-10 L9,-6 L9,2 C9,7 5,10 0,11.5 C-5,10 -9,7 -9,2 L-9,-6 Z" />
    <path d="M-3.5,0.5 L-1,3 L4,-3" />
  </g>
);

const iconServer = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none">
    <rect x="-10" y="-9" width="20" height="8" rx="2" />
    <rect x="-10" y="1" width="20" height="8" rx="2" />
    <circle cx="-6" cy="-5" r="1" fill="#fff" stroke="none" />
    <circle cx="-6" cy="5" r="1" fill="#fff" stroke="none" />
  </g>
);

const iconDatabase = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none">
    <ellipse cx="0" cy="-6" rx="9" ry="3.3" />
    <path d="M-9,-6 L-9,6 C-9,7.8 -5,9.3 0,9.3 C5,9.3 9,7.8 9,6 L9,-6" />
    <path d="M-9,0 C-9,1.8 -5,3.3 0,3.3 C5,3.3 9,1.8 9,0" />
  </g>
);

const iconChip = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round">
    <rect x="-7" y="-7" width="14" height="14" rx="2" />
    <circle cx="0" cy="0" r="2.6" fill="#fff" stroke="none" />
    <path d="M-7,-3 L-10,-3 M-7,3 L-10,3 M7,-3 L10,-3 M7,3 L10,3 M-3,-7 L-3,-10 M3,-7 L3,-10 M-3,7 L-3,10 M3,7 L3,10" />
  </g>
);

const iconCard = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <rect x="-11" y="-7.5" width="22" height="15" rx="2.5" />
    <path d="M-11,-2.5 L11,-2.5" />
    <path d="M-7,3 L-3,3" />
  </g>
);

/* ---------- Desktop diagram ---------- */

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 620 640"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[560px] block"
    role="img"
    aria-label="AI SaaS architecture diagram, Webex-inspired style"
  >
    <title>AI SaaS architecture diagram</title>
    <desc>
      React frontend connects through a JWT and RBAC security layer to an
      Express backend, which fans out to MongoDB, AI APIs, and Razorpay
      inside a protected routes boundary.
    </desc>

    <defs>
      {[
        ["arr-frontend", COLORS.frontend],
        ["arr-auth", COLORS.auth],
        ["arr-rbac", COLORS.rbac],
        ["arr-backend", COLORS.backend],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L9,3.5 L0,7 Z" fill={color} />
        </marker>
      ))}
    </defs>

    {/* Protected routes boundary */}
    <rect x={30} y={140} width={560} height={470} rx="20" fill="none"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={48} y={164} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      PROTECTED API ROUTES
    </text>

    {/* React Frontend */}
    <IconCard x={195} y={16} w={180} h={88} color={COLORS.frontend}
      icon={iconWindow} label="React Frontend" />

    {/* fan-out: frontend -> JWT Auth / RBAC */}
    <CurvedArrow d="M255,104 C230,122 200,138 175,166" color={COLORS.auth}
      markerId="arr-auth" label="token" labelPos={[210, 138]} />
    <CurvedArrow d="M315,104 C340,122 375,138 400,166" color={COLORS.rbac}
      markerId="arr-rbac" label="role" labelPos={[368, 138]} />

    {/* Auth layer */}
    <IconCard x={90} y={168} w={170} h={92} color={COLORS.auth}
      icon={iconLock} label="JWT Auth" sublabel="Verifies token identity" />
    <IconCard x={315} y={168} w={170} h={92} color={COLORS.rbac}
      icon={iconShield} label="RBAC" sublabel="Role-based permissions" />

    {/* converge: auth -> Express Backend */}
    <CurvedArrow d="M175,260 C200,278 230,290 255,306" color={COLORS.auth}
      markerId="arr-auth" labelPos={[0, 0]} />
    <CurvedArrow d="M400,260 C375,278 345,290 320,306" color={COLORS.rbac}
      markerId="arr-rbac" labelPos={[0, 0]} />

    {/* Express Backend */}
    <IconCard x={195} y={308} w={180} h={90} color={COLORS.backend}
      icon={iconServer} label="Express Backend" sublabel="Routing, validation, logic" />

    {/* fan-out: backend -> MongoDB / AI APIs / Razorpay */}
    <CurvedArrow d="M245,398 C210,416 170,428 130,446" color={COLORS.service}
      markerId="arr-backend" label="store" labelPos={[168, 420]} />
    <CurvedArrow d="M285,398 C285,414 285,428 285,446" color={COLORS.service}
      markerId="arr-backend" label="infer" labelPos={[332, 424]} />
    <CurvedArrow d="M325,398 C365,416 415,428 460,446" color={COLORS.service}
      markerId="arr-backend" label="charge" labelPos={[398, 420]} />

    {/* Bottom services */}
    <IconCard x={40} y={448} w={180} h={92} color={COLORS.service}
      icon={iconDatabase} label="MongoDB" sublabel="Data storage" />
    <IconCard x={195} y={448} w={180} h={92} color={COLORS.service}
      icon={iconChip} label="AI APIs" sublabel="Model inference" />
    <IconCard x={370} y={448} w={180} h={92} color={COLORS.service}
      icon={iconCard} label="Razorpay" sublabel="Payment gateway" />
  </svg>
);

/* ---------- Mobile diagram (single column) ---------- */

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 300 940"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[340px] block"
    role="img"
    aria-label="AI SaaS architecture diagram, mobile layout"
  >
    <title>AI SaaS architecture diagram, mobile layout</title>
    <desc>
      A single-column stack: React frontend, a combined JWT plus RBAC
      security step, Express backend, then three service cards for
      MongoDB, AI APIs, and Razorpay.
    </desc>

    <defs>
      {[
        ["m-arr-frontend", COLORS.frontend],
        ["m-arr-auth", COLORS.auth],
        ["m-arr-backend", COLORS.backend],
        ["m-arr-service", COLORS.service],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={color} />
        </marker>
      ))}
    </defs>

    <rect x={20} y={8} width={260} height={904} rx="18" fill="none"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={34} y={30} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8px", letterSpacing: "0.06em", fontWeight: 700 }}>
      PROTECTED ROUTES
    </text>

    <IconCard x={60} y={40} w={180} h={82} color={COLORS.frontend} icon={iconWindow} label="React Frontend" />
    <CurvedArrow d="M150,122 C150,134 150,138 150,152" color={COLORS.frontend} markerId="m-arr-frontend" labelPos={[0, 0]} />

    <IconCard x={45} y={154} w={210} h={94} color={COLORS.auth}
      icon={iconLock} label="JWT Auth + RBAC" sublabel="Verify token, check role" />
    <CurvedArrow d="M150,248 C150,260 150,264 150,278" color={COLORS.auth} markerId="m-arr-auth" labelPos={[0, 0]} />

    <IconCard x={55} y={280} w={190} h={86} color={COLORS.backend}
      icon={iconServer} label="Express Backend" sublabel="Routing and business logic" iconSize={34} />
    <CurvedArrow d="M150,366 C150,378 150,382 150,396" color={COLORS.backend} markerId="m-arr-backend" labelPos={[0, 0]} />

    <IconCard x={55} y={398} w={190} h={78} color={COLORS.service}
      icon={iconDatabase} label="MongoDB" sublabel="Data storage" iconSize={30} />
    <CurvedArrow d="M150,476 C150,486 150,490 150,500" color={COLORS.service} markerId="m-arr-service" labelPos={[0, 0]} />

    <IconCard x={55} y={502} w={190} h={78} color={COLORS.service}
      icon={iconChip} label="AI APIs" sublabel="Model inference" iconSize={30} />
    <CurvedArrow d="M150,580 C150,590 150,594 150,604" color={COLORS.service} markerId="m-arr-service" labelPos={[0, 0]} />

    <IconCard x={55} y={606} w={190} h={78} color={COLORS.service}
      icon={iconCard} label="Razorpay" sublabel="Payment gateway" iconSize={30} />
  </svg>
);

export default function AiSaasPlatformDiagram() {
  return (
    <div className="w-full bg-transparent p-6">
      <div className="hidden md:block">
        <DesktopDiagram />
      </div>
      <div className="md:hidden">
        <MobileDiagram />
      </div>
    </div>
  );
}