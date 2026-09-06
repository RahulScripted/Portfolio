// Case Study 1: Template Management System — Webex-style diagram
// Flow: UI Components ↔ Redux Toolkit ↔ TanStack Query ↔ REST APIs
// Sub-cluster: Form Builder → Field Renderer → Validation → Preview
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

  client: "#3F8F6E",   // sage — reusable component / UI layer
  state: "#6C5CD1",    // violet — Redux Toolkit
  query: "#2F7FB0",    // dusty blue — TanStack Query / caching
  api: "#C97B4A",      // terracotta — REST APIs / external comms
};

const mono = { fontFamily: "Space Mono, monospace" };

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

const iconRefresh = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.7" fill="none" strokeLinecap="round">
    <path d="M-8,-2 A8,8 0 1 1 -6.5,4" />
    <path d="M-9,-7 L-8,-2 L-3,-3" />
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

const iconDocument = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round">
    <rect x="-7" y="-9" width="14" height="18" rx="2" />
    <path d="M-4,-4 L4,-4 M-4,0 L4,0 M-4,4 L1,4" />
  </g>
);

const iconField = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round">
    <rect x="-10" y="-6" width="20" height="12" rx="3" />
    <path d="M-4,0 L4,0" />
    <path d="M3,-3 L3,3" opacity="0.9" />
  </g>
);

const iconCheck = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="0" cy="0" r="9.5" />
    <path d="M-4,0.5 L-1,4 L5,-4" />
  </g>
);

const iconEye = (x, y, s) => (
  <g transform={`translate(${x + s / 2}, ${y + s / 2})`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round">
    <path d="M-10,0 C-6,-7 6,-7 10,0 C6,7 -6,7 -10,0 Z" />
    <circle cx="0" cy="0" r="2.6" fill="#fff" stroke="none" />
  </g>
);

/* ---------- Desktop diagram ---------- */

export const DesktopDiagram = () => (
  <svg
    viewBox="0 0 620 660"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[560px] block"
    role="img"
    aria-label="Template management architecture diagram, Webex-inspired style"
  >
    <title>Template management architecture diagram</title>
    <desc>
      UI Components, Redux Toolkit, TanStack Query, and REST APIs exchange
      data bidirectionally in a vertical stack. A reusable component system
      of Form Builder, Field Renderer, Validation, and Preview feeds into
      UI Components below.
    </desc>

    <defs>
      {[
        ["arr-client", COLORS.client],
        ["arr-state", COLORS.state],
        ["arr-query", COLORS.query],
        ["arr-api", COLORS.api],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L9,3.5 L0,7 Z" fill={color} />
        </marker>
      ))}
      <marker id="arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    {/* UI Components */}
    <IconCard x={210} y={16} w={200} h={92} color={COLORS.client}
      icon={iconGrid} label="UI Components" sublabel="Presentation layer" />

    <CurvedArrow d="M275,108 C275,120 275,124 275,138" color={COLORS.client}
      markerId="arr-client" label="dispatch" labelPos={[228, 122]} />
    <CurvedArrow d="M345,138 C345,124 345,120 345,108" color={COLORS.state}
      markerId="arr-state" label="state" labelPos={[392, 122]} />

    {/* Redux Toolkit */}
    <IconCard x={210} y={140} w={200} h={92} color={COLORS.state}
      icon={iconDatabase} label="Redux Toolkit" sublabel="App state" />

    <CurvedArrow d="M275,232 C275,244 275,248 275,262" color={COLORS.state}
      markerId="arr-state" label="fetch" labelPos={[228, 246]} />
    <CurvedArrow d="M345,262 C345,248 345,244 345,232" color={COLORS.query}
      markerId="arr-query" label="cache" labelPos={[392, 246]} />

    {/* TanStack Query */}
    <IconCard x={210} y={264} w={200} h={92} color={COLORS.query}
      icon={iconRefresh} label="TanStack Query" sublabel="Server-state cache" />

    <CurvedArrow d="M275,356 C275,368 275,372 275,386" color={COLORS.query}
      markerId="arr-query" label="request" labelPos={[228, 370]} />
    <CurvedArrow d="M345,386 C345,372 345,368 345,356" color={COLORS.api}
      markerId="arr-api" label="response" labelPos={[398, 370]} />

    {/* REST APIs */}
    <IconCard x={210} y={388} w={200} h={92} color={COLORS.api}
      icon={iconServer} label="REST APIs" sublabel="External comms" />

    {/* dashed connector: REST APIs -> reusable component cluster */}
    <DashedLine d="M275,480 C275,494 240,500 200,506" />

    {/* Reusable component system cluster */}
    <rect x={20} y={508} width={580} height={128} rx="18" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={36} y={530} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      REUSABLE COMPONENT SYSTEM
    </text>

    <IconCard x={34} y={540} w={124} h={80} color={COLORS.client} iconSize={28}
      icon={iconDocument} label="Form Builder" />
    <IconCard x={176} y={540} w={124} h={80} color={COLORS.client} iconSize={28}
      icon={iconField} label="Field Renderer" />
    <IconCard x={318} y={540} w={124} h={80} color={COLORS.client} iconSize={28}
      icon={iconCheck} label="Validation" />
    <IconCard x={460} y={540} w={124} h={80} color={COLORS.client} iconSize={28}
      icon={iconEye} label="Preview" />

    <CurvedArrow d="M158,580 C164,580 170,580 176,580" color={COLORS.client} markerId="arr-client" labelPos={[0, 0]} />
    <CurvedArrow d="M300,580 C306,580 312,580 318,580" color={COLORS.client} markerId="arr-client" labelPos={[0, 0]} />
    <CurvedArrow d="M442,580 C448,580 454,580 460,580" color={COLORS.client} markerId="arr-client" labelPos={[0, 0]} />

    {/* dashed feedback loop: Form Builder -> back up into UI Components */}
    <path
      d="M50,540 L50,470 Q50,462 42,462 L20,462 Q12,462 12,454 L12,60 Q12,52 20,52 L208,52"
      stroke={COLORS.dashed}
      strokeWidth="1.3"
      fill="none"
      strokeDasharray="4 3"
      markerEnd="url(#arr-dashed)"
    />
  </svg>
);

/* ---------- Mobile diagram (single column) ---------- */

export const MobileDiagram = () => (
  <svg
    viewBox="0 0 300 980"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto mx-auto max-w-[340px] block"
    role="img"
    aria-label="Template management architecture diagram, mobile layout"
  >
    <title>Template management architecture diagram, mobile layout</title>
    <desc>
      A single-column stack of UI Components, Redux Toolkit, TanStack Query,
      and REST APIs, followed by a reusable component system grouping Form
      Builder, Field Renderer, Validation, and Preview.
    </desc>

    <defs>
      {[
        ["m-arr-client", COLORS.client],
        ["m-arr-state", COLORS.state],
        ["m-arr-query", COLORS.query],
        ["m-arr-api", COLORS.api],
      ].map(([id, color]) => (
        <marker key={id} id={id} markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={color} />
        </marker>
      ))}
      <marker id="m-arr-dashed" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
        <path d="M0,0 L8,3 L0,6 Z" fill={COLORS.dashed} />
      </marker>
    </defs>

    <IconCard x={50} y={16} w={200} h={88} color={COLORS.client}
      icon={iconGrid} label="UI Components" sublabel="Presentation layer" />
    <CurvedArrow d="M120,104 C120,116 120,120 120,134" color={COLORS.client} markerId="m-arr-client" labelPos={[0, 0]} />
    <CurvedArrow d="M180,134 C180,120 180,116 180,104" color={COLORS.state} markerId="m-arr-state" labelPos={[0, 0]} />

    <IconCard x={50} y={136} w={200} h={88} color={COLORS.state}
      icon={iconDatabase} label="Redux Toolkit" sublabel="App state" />
    <CurvedArrow d="M120,224 C120,236 120,240 120,254" color={COLORS.state} markerId="m-arr-state" labelPos={[0, 0]} />
    <CurvedArrow d="M180,254 C180,240 180,236 180,224" color={COLORS.query} markerId="m-arr-query" labelPos={[0, 0]} />

    <IconCard x={50} y={256} w={200} h={88} color={COLORS.query}
      icon={iconRefresh} label="TanStack Query" sublabel="Server-state cache" />
    <CurvedArrow d="M120,344 C120,356 120,360 120,374" color={COLORS.query} markerId="m-arr-query" labelPos={[0, 0]} />
    <CurvedArrow d="M180,374 C180,360 180,356 180,344" color={COLORS.api} markerId="m-arr-api" labelPos={[0, 0]} />

    <IconCard x={50} y={376} w={200} h={88} color={COLORS.api}
      icon={iconServer} label="REST APIs" sublabel="External comms" />

    <DashedLine d="M120,464 C120,478 120,482 120,496" markerId="m-arr-dashed" />

    <rect x={20} y={498} width={260} height={368} rx="18" fill="#FDFCF9"
      stroke={COLORS.dashed} strokeWidth="1.3" strokeDasharray="5 4" />
    <text x={34} y={520} fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}>
      REUSABLE COMPONENT SYSTEM
    </text>

    <IconCard x={34} y={530} w={232} h={78} color={COLORS.client} iconSize={26}
      icon={iconDocument} label="Form Builder" />
    <CurvedArrow d="M150,608 C150,614 150,618 150,622" color={COLORS.client} markerId="m-arr-client" labelPos={[0, 0]} />

    <IconCard x={34} y={624} w={232} h={78} color={COLORS.client} iconSize={26}
      icon={iconField} label="Field Renderer" />
    <CurvedArrow d="M150,702 C150,708 150,712 150,716" color={COLORS.client} markerId="m-arr-client" labelPos={[0, 0]} />

    <IconCard x={34} y={718} w={232} h={78} color={COLORS.client} iconSize={26}
      icon={iconCheck} label="Validation" />
    <CurvedArrow d="M150,796 C150,802 150,806 150,810" color={COLORS.client} markerId="m-arr-client" labelPos={[0, 0]} />

    <IconCard x={34} y={812} w={232} h={78} color={COLORS.client} iconSize={26}
      icon={iconEye} label="Preview" />
  </svg>
);

export default function TemplateManagementDiagram() {
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