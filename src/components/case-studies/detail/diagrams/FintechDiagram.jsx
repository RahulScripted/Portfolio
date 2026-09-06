// Case Study 3: Fintech Customer Platform — Webex-style diagram
// Flow: React Native → fans out to Navigation / TypeScript / Reusable UI
//       → converges into Redux Toolkit → REST APIs → JWT Auth Flows
// Side cluster: UX States (Loading, Error/Retry)
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

  app: "#2F9E85",      // teal — React Native app core
  client: "#3F8F6E",   // sage — client-side modules
  state: "#6C5CD1",    // violet — Redux Toolkit
  api: "#C97B4A",      // terracotta — REST APIs
  auth: "#B0553F",      // deep clay — JWT auth / session
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

const DashedLine = ({ d, markerId = "arr-dashed" }) => (
  <path d={d} stroke={COLORS.dashed} strokeWidth="1.4" strokeDasharray="4 4" fill="none" markerEnd={`url(#${markerId})`} />
);

/* ---------- icon glyphs ---------- */

const iconPhone = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round">
    <rect x="-7" y="-11" width="14" height="22" rx="3" />
    <path d="M-2.5,7.5 L2.5,7.5" />
  </g>
);

const iconCompass = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <circle cx="0" cy="0" r="10" />
    <path d="M3.5,-3.5 L1,1 L-3.5,3.5 L-1,-1 Z" />
  </g>
);

const iconCode = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-6,-6 L-11,0 L-6,6" />
    <path d="M6,-6 L11,0 L6,6" />
    <path d="M2,-8 L-2,8" />
  </g>
);

const iconGrid = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none">
    <rect x="-9" y="-9" width="7" height="7" rx="1.4" />
    <rect x="2" y="-9" width="7" height="7" rx="1.4" />
    <rect x="-9" y="2" width="7" height="7" rx="1.4" />
    <rect x="2" y="2" width="7" height="7" rx="1.4" />
  </g>
);

const iconDatabase = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none">
    <ellipse cx="0" cy="-6" rx="9" ry="3.3" />
    <path d="M-9,-6 L-9,6 C-9,7.8 -5,9.3 0,9.3 C5,9.3 9,7.8 9,6 L9,-6" />
    <path d="M-9,0 C-9,1.8 -5,3.3 0,3.3 C5,3.3 9,1.8 9,0" />
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

const iconLock = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <rect x="-7" y="-1" width="14" height="11" rx="2.5" />
    <path d="M-4,-1 L-4,-5 C-4,-8.3 4,-8.3 4,-5 L4,-1" />
    <circle cx="0" cy="4" r="1.3" fill="#fff" stroke="none" />
  </g>
);

const iconLoader = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeDasharray="2.6 4.2">
    <circle cx="0" cy="0" r="9" />
  </g>
);

const iconAlert = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0,-9 L10,8 L-10,8 Z" />
    <path d="M0,-3 L0,2" />
    <circle cx="0" cy="5.2" r="0.9" fill="#fff" stroke="none" />
  </g>
);

/* ---------- Desktop diagram ---------- */

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 660 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[600px] block"
    role="img"
    aria-label="Fintech platform architecture diagram, Webex-inspired style"
  >
    <title>Fintech platform architecture diagram</title>
    <desc>
      React Native app branches into Navigation, TypeScript, and Reusable UI,
      converges into Redux Toolkit, then flows through REST APIs into JWT
      auth flows, with a side cluster for loading and error UX states.
    </desc>

    <defs>
      {[
        ["arr-app", COLORS.app],
        ["arr-nav", "#3F8F6E"],
        ["arr-ts", "#3F8F6E"],
        ["arr-ui", "#3F8F6E"],
        ["arr-state", COLORS.state],
        ["arr-api", COLORS.api],
        ["arr-auth", COLORS.auth],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L9,3.5 L0,7 Z" fill={color} />
        </marker>
      ))}
      <marker id="arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    {/* React Native App */}
    <IconCard x={240} y={16} w={180} h={92} color={COLORS.app}
      icon={iconPhone} label="React Native App" />

    {/* fan-out arrows: app -> Navigation / TypeScript / Reusable UI */}
    <CurvedArrow d="M280,110 C250,128 200,138 155,158" color="#3F8F6E"
      markerId="arr-nav" label="routes" labelPos={[210, 132]} />
    <CurvedArrow d="M330,110 C330,128 330,140 330,158" color="#3F8F6E"
      markerId="arr-ts" label="types" labelPos={[378, 134]} />
    <CurvedArrow d="M380,110 C410,128 460,138 505,158" color="#3F8F6E"
      markerId="arr-ui" label="props" labelPos={[440, 132]} />

    {/* second row: modules */}
    <IconCard x={70} y={160} w={170} h={92} color={COLORS.client}
      icon={iconCompass} label="Navigation" sublabel="Screen routing" />
    <IconCard x={245} y={160} w={170} h={92} color={COLORS.client}
      icon={iconCode} label="TypeScript" sublabel="Type safety" />
    <IconCard x={420} y={160} w={170} h={92} color={COLORS.client}
      icon={iconGrid} label="Reusable UI" sublabel="Shared UI kit" />

    {/* converge arrows: modules -> Redux */}
    <CurvedArrow d="M155,252 C185,272 240,286 300,306" color={COLORS.client}
      markerId="arr-nav" labelPos={[0, 0]} />
    <CurvedArrow d="M330,252 C330,272 330,286 330,306" color={COLORS.client}
      markerId="arr-ts" labelPos={[0, 0]} />
    <CurvedArrow d="M505,252 C475,272 420,286 360,306" color={COLORS.client}
      markerId="arr-ui" labelPos={[0, 0]} />

    {/* Redux Toolkit */}
    <IconCard x={240} y={308} w={180} h={90} color={COLORS.state}
      icon={iconDatabase} label="Redux Toolkit" sublabel="Global state" />

    <CurvedArrow d="M330,398 C330,410 330,414 330,428" color={COLORS.state}
      markerId="arr-state" label="sync" labelPos={[378, 412]} />

    {/* REST APIs */}
    <IconCard x={240} y={430} w={180} h={90} color={COLORS.api}
      icon={iconServer} label="REST APIs" sublabel="Backend communication" />

    <CurvedArrow d="M330,520 C330,532 330,536 330,550" color={COLORS.api}
      markerId="arr-api" label="token" labelPos={[378, 534]} />

    {/* JWT Auth Flows */}
    <IconCard x={240} y={552} w={180} h={64} color={COLORS.auth}
      icon={iconLock} label="JWT Auth Flows" iconSize={32} />

    {/* dashed connector: Redux -> UX States cluster */}
    <DashedLine d="M420,352 C445,352 448,352 470,352" />

    {/* UX States dashed cluster */}
    <rect x={472} y={272} width={168} height={148} rx="16" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={486} y={294} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x={484} y={304} width={144} height={46} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(496, 318)">{iconLoader(0, -8, 16)}</g>
    <text x={558} y="331" textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Loading
    </text>

    <rect x={484} y={358} width={144} height={46} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(496, 372)">{iconAlert(0, -8, 16)}</g>
    <text x={558} y="385" textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Error / Retry
    </text>
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
    aria-label="Fintech platform architecture diagram, mobile layout"
  >
    <title>Fintech platform architecture diagram, mobile layout</title>
    <desc>
      A single-column stack: React Native app, a combined client-modules
      step, Redux Toolkit, REST APIs, JWT auth flows, and finally the
      loading and error UX states.
    </desc>

    <defs>
      {[
        ["m-arr-app", COLORS.app],
        ["m-arr-client", COLORS.client],
        ["m-arr-state", COLORS.state],
        ["m-arr-api", COLORS.api],
        ["m-arr-auth", COLORS.auth],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={color} />
        </marker>
      ))}
      <marker id="m-arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    <IconCard x={60} y={16} w={180} h={86} color={COLORS.app} icon={iconPhone} label="React Native App" />
    <CurvedArrow d="M150,102 C150,114 150,118 150,132" color={COLORS.app} markerId="m-arr-app" labelPos={[0, 0]} />

    <IconCard x={45} y={134} w={210} h={92} color={COLORS.client}
      icon={iconGrid} label="Navigation, TS, UI kit" sublabel="Client-side modules" />
    <CurvedArrow d="M150,226 C150,238 150,242 150,256" color={COLORS.client} markerId="m-arr-client" labelPos={[0, 0]} />

    <IconCard x={55} y={258} w={190} h={80} color={COLORS.state}
      icon={iconDatabase} label="Redux Toolkit" sublabel="Global state" iconSize={32} />
    <CurvedArrow d="M150,338 C150,350 150,354 150,368" color={COLORS.state} markerId="m-arr-state" labelPos={[0, 0]} />

    <IconCard x={55} y={370} w={190} h={80} color={COLORS.api}
      icon={iconServer} label="REST APIs" sublabel="Backend communication" iconSize={32} />
    <CurvedArrow d="M150,450 C150,462 150,466 150,480" color={COLORS.api} markerId="m-arr-api" labelPos={[0, 0]} />

    <IconCard x={55} y={482} w={190} h={64} color={COLORS.auth}
      icon={iconLock} label="JWT Auth Flows" iconSize={28} />

    <DashedLine d="M150,546 C150,560 150,564 150,578" markerId="m-arr-dashed" />

    <rect x={30} y={580} width={240} height={168} rx="16" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={44} y={602} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x={42} y={612} width={216} height={54} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(56, 630)">{iconLoader(0, -8, 16)}</g>
    <text x={168} y="644" textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Loading
    </text>

    <rect x={42} y={674} width={216} height={54} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(56, 692)">{iconAlert(0, -8, 16)}</g>
    <text x={168} y="706" textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Error / Retry
    </text>
  </svg>
);

export default function FintechCustomerPlatformDiagram() {
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