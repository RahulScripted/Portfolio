// Case Study 4: Fintech Modernization — Webex-style diagram
// Restyled to match the icon-card + colored curved arrow language of the
// Webex xAPI reference graphic. Background is fully transparent (no base
// fill rect) so it drops onto any page background cleanly.

const COLORS = {
  arrow: "#8A8577",
  textMuted: "#6B6459",
  text: "#16140F",
  cardBorder: "#E7E2D8",
  cardFill: "#FFFFFF",

  legacy: "#C97B4A",     // terracotta — legacy origin
  legacyBg: "#F3E6DE",
  modern: "#2F9E85",     // teal — modernized core
  ui: "#C23E7A",         // magenta — UI modules
  state: "#6C5CD1",      // violet — app state
  server: "#D98A2B",     // amber — server state
  data: "#3572B0",       // blue — API / transaction
  finance: "#4A7A5E",    // deep sage — financial data
  dashed: "#B9B2A2",
};

const mono = { fontFamily: "Space Mono, monospace" };

// A rounded "icon card": colored icon square on top, label + sublabel below,
// small status dot bottom-right — matching the Webex node treatment.
const IconCard = ({ x, y, w, h, color, icon, label, sublabel }) => {
  const cx = x + w / 2;
  const iconSize = 40;
  const iconX = cx - iconSize / 2;
  const iconY = y + 14;
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx="16"
        fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.4"
        style={{ filter: "drop-shadow(0 3px 8px rgba(22,20,15,0.10))" }}
      />
      <rect x={iconX} y={iconY} width={iconSize} height={iconSize} rx="11" fill={color} />
      {icon(iconX, iconY, iconSize)}
      <text x={cx} y={iconY + iconSize + 20} textAnchor="middle" fill={COLORS.text}
        style={{ ...mono, fontSize: "11.5px", fontWeight: 700 }}>
        {label}
      </text>
      {sublabel && (
        <text x={cx} y={iconY + iconSize + 34} textAnchor="middle" fill={COLORS.textMuted}
          style={{ ...mono, fontSize: "8.5px", opacity: 0.85 }}>
          {sublabel}
        </text>
      )}
    </g>
  );
};

// Curved connector with a pill-shaped label riding on the path, matching
// the Webex xCommand / xStatus / xEvent / xConfig arrows.
const CurvedArrow = ({ d, color, label, markerId, labelPos }) => (
  <g>
    <path d={d} stroke={color} strokeWidth="2.2" fill="none" markerEnd={`url(#${markerId})`} />
    {label && (
      <g transform={`translate(${labelPos[0]}, ${labelPos[1]})`}>
        <rect x={-label.length * 3.6 - 8} y="-11" width={label.length * 7.2 + 16} height="22" rx="11" fill={color} />
        <text x="0" y="4" textAnchor="middle" fill="#fff" style={{ ...mono, fontSize: "9.5px", fontWeight: 700 }}>
          {label}
        </text>
      </g>
    )}
  </g>
);

const DashedLine = ({ d }) => (
  <path d={d} stroke={COLORS.dashed} strokeWidth="1.4" strokeDasharray="4 4" fill="none" markerEnd="url(#arr-dashed)" />
);

/* ---------- simple icon glyphs (white strokes on the colored square) ---------- */

const iconLegacy = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-6,-6 L-11,0 L-6,6" />
    <path d="M6,-6 L11,0 L6,6" />
    <path d="M2,-8 L-2,8" />
  </g>
);

const iconLayers = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none" strokeLinejoin="round">
    <path d="M0,-9 L11,-2.5 L0,4 L-11,-2.5 Z" />
    <path d="M-11,3 L0,9.5 L11,3" />
  </g>
);

const iconGrid = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none">
    <rect x="-9" y="-9" width="7" height="7" rx="1.5" />
    <rect x="2" y="-9" width="7" height="7" rx="1.5" />
    <rect x="-9" y="2" width="7" height="7" rx="1.5" />
    <rect x="2" y="2" width="7" height="7" rx="1.5" />
  </g>
);

const iconDatabase = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none">
    <ellipse cx="0" cy="-6" rx="9" ry="3.4" />
    <path d="M-9,-6 L-9,6 C-9,7.9 -5,9.4 0,9.4 C5,9.4 9,7.9 9,6 L9,-6" />
    <path d="M-9,0 C-9,1.9 -5,3.4 0,3.4 C5,3.4 9,1.9 9,0" />
  </g>
);

const iconRefresh = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round">
    <path d="M-8,-2 A8,8 0 1 1 -6.5,4" />
    <path d="M-9,-7 L-8,-2 L-3,-3" />
  </g>
);

const iconServer = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none">
    <rect x="-10" y="-9" width="20" height="8" rx="2" />
    <rect x="-10" y="1" width="20" height="8" rx="2" />
    <circle cx="-6" cy="-5" r="1.1" fill="#fff" stroke="none" />
    <circle cx="-6" cy="5" r="1.1" fill="#fff" stroke="none" />
  </g>
);

const iconFinance = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-10,7 L10,7" />
    <path d="M-8,7 L-8,-1 M-3,7 L-3,-1 M3,7 L3,-1 M8,7 L8,-1" />
    <path d="M-11,-3 L0,-9 L11,-3 Z" />
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
    viewBox="0 0 700 720"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[620px] block"
    role="img"
    aria-label="Fintech modernization architecture diagram, Webex-inspired style"
  >
    <title>Fintech modernization architecture diagram</title>
    <desc>
      A legacy React 15 application migrates into a Next.js core, which fans
      out into UI modules, app state, and server state, converging into API
      and transaction services that produce financial data, alongside a
      loading and error UX-states cluster.
    </desc>

    <defs>
      {[
        ["arr-legacy", COLORS.legacy],
        ["arr-ui", COLORS.ui],
        ["arr-state", COLORS.state],
        ["arr-server", COLORS.server],
        ["arr-data", COLORS.data],
        ["arr-finance", COLORS.finance],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L9,3.5 L0,7 Z" fill={color} />
        </marker>
      ))}
      <marker id="arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    {/* Legacy React 15 */}
    <IconCard x={260} y={10} w={180} h={85} color={COLORS.legacy}
      icon={iconLegacy} label="Legacy React 15" />

    {/* trunk arrow: legacy -> Next.js core */}
    <CurvedArrow d="M350,94 C350,112 350,120 350,140" color={COLORS.legacy}
      markerId="arr-legacy" label="migrate" labelPos={[478, 117]} />

    {/* Next.js Architecture (hub) */}
    <IconCard x={245} y={142} w={210} h={116} color={COLORS.modern}
      icon={iconLayers} label="Next.js Architecture" sublabel="Modernized foundation" />

    {/* fan-out arrows: hub -> UI Modules / App State / Server State */}
    <CurvedArrow d="M290,258 C260,278 190,290 128,314" color={COLORS.ui}
      markerId="arr-ui" label="components" labelPos={[188, 282]} />
    <CurvedArrow d="M350,258 C350,278 350,292 350,314" color={COLORS.state}
      markerId="arr-state" label="state" labelPos={[398, 288]} />
    <CurvedArrow d="M410,258 C440,278 510,290 572,314" color={COLORS.server}
      markerId="arr-server" label="queries" labelPos={[512, 282]} />

    {/* mid row */}
    <IconCard x={40} y={316} w={176} h={92} color={COLORS.ui}
      icon={iconGrid} label="UI Modules" sublabel="Reusable + feature" />
    <IconCard x={262} y={316} w={176} h={92} color={COLORS.state}
      icon={iconDatabase} label="App State" sublabel="Redux Toolkit" />
    <IconCard x={484} y={316} w={176} h={92} color={COLORS.server}
      icon={iconRefresh} label="Server State" sublabel="TanStack Query" />

    {/* converge arrows: mid row -> API & Transaction */}
    <CurvedArrow d="M128,408 C160,432 220,448 300,474" color={COLORS.ui}
      markerId="arr-ui" labelPos={[0, 0]} />
    <CurvedArrow d="M350,408 C350,432 350,448 350,474" color={COLORS.state}
      markerId="arr-state" labelPos={[0, 0]} />
    <CurvedArrow d="M572,408 C540,432 480,448 400,474" color={COLORS.server}
      markerId="arr-server" labelPos={[0, 0]} />

    {/* API & Transaction Services */}
    <IconCard x={250} y={476} w={200} h={92} color={COLORS.data}
      icon={iconServer} label="API & Transaction" sublabel="REST services" />

    {/* API -> Financial Data */}
    <CurvedArrow d="M350,568 C350,584 350,588 350,606" color={COLORS.data}
      markerId="arr-data" label="settles" labelPos={[398, 588]} />

    {/* Financial Data */}
    <IconCard x={270} y={608} w={160} h={92} color={COLORS.finance}
      icon={iconFinance} label="Financial Data" />

    {/* dashed connector: API -> UX States cluster */}
    <DashedLine d="M450,510 C470,510 468,510 486,510" />

    {/* UX States dashed cluster */}
    <rect x={488} y={430} width={184} height={148} rx="16" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={502} y={452} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x={500} y={462} width={160} height={46} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(514, 476)">{iconLoader(0, -8, 16)}</g>
    <text x={588} y={489} textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Suspense / Loading
    </text>

    <rect x={500} y={516} width={160} height={46} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(514, 530)">{iconAlert(0, -8, 16)}</g>
    <text x={588} y={543} textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Error / Recovery
    </text>
  </svg>
);

/* ---------- Mobile diagram (single column) ---------- */

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 300 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[340px] block"
    role="img"
    aria-label="Fintech modernization architecture diagram, mobile layout"
  >
    <title>Fintech modernization architecture diagram, mobile layout</title>
    <desc>
      Single-column stack: legacy React 15, Next.js core, a combined UI and
      state layer, API and transaction services, financial data, and the
      loading and error UX states.
    </desc>

    <defs>
      {[
        ["m-arr-legacy", COLORS.legacy],
        ["m-arr-modern", COLORS.modern],
        ["m-arr-data", COLORS.data],
        ["m-arr-finance", COLORS.finance],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={color} />
        </marker>
      ))}
      <marker id="m-arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    <IconCard x={60} y={16} w={180} h={78} color={COLORS.legacy}
      icon={iconLegacy} label="Legacy React 15" sublabel="Existing application" />
    <CurvedArrow d="M150,94 C150,108 150,112 150,132" color={COLORS.legacy} markerId="m-arr-legacy" labelPos={[0,0]} />

    <IconCard x={45} y={134} w={210} h={100} color={COLORS.modern}
      icon={iconLayers} label="Next.js Architecture" sublabel="Modernized foundation" />
    <CurvedArrow d="M150,234 C150,248 150,252 150,272" color={COLORS.modern} markerId="m-arr-modern" labelPos={[0,0]} />

    <IconCard x={45} y={274} w={210} h={100} color={COLORS.state}
      icon={iconDatabase} label="UI + State Layer" sublabel="Redux + TanStack Query" />
    <CurvedArrow d="M150,374 C150,388 150,392 150,412" color={COLORS.state} markerId="m-arr-modern" labelPos={[0,0]} />

    <IconCard x={45} y={414} w={210} h={92} color={COLORS.data}
      icon={iconServer} label="API & Transaction" sublabel="REST services" />
    <CurvedArrow d="M150,506 C150,520 150,524 150,544" color={COLORS.data} markerId="m-arr-data" labelPos={[0,0]} />

    <IconCard x={65} y={546} w={170} h={90} color={COLORS.finance}
      icon={iconFinance} label="Financial Data" />
    <DashedLine d="M150,636 C150,650 150,654 150,672" />

    <rect x={40} y={674} width={220} height={158} rx="16" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={54} y={696} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      UX STATES
    </text>

    <rect x={52} y={706} width={196} height={48} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(68, 720)">{iconLoader(0, -8, 16)}</g>
    <text x={160} y={734} textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Suspense / Loading
    </text>

    <rect x={52} y={762} width={196} height={48} rx="12" fill={COLORS.cardFill} stroke={COLORS.cardBorder} strokeWidth="1.2" />
    <g transform="translate(68, 776)">{iconAlert(0, -8, 16)}</g>
    <text x={160} y={790} textAnchor="middle" fill={COLORS.text} style={{ ...mono, fontSize: "9.5px" }}>
      Error / Recovery
    </text>
  </svg>
);

export default function FintechDiagram() {
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