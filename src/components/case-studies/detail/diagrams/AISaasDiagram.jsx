import { createContext, useContext, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const COLORS = {
  arrow: "#8A8577",
  textMuted: "#6B6459",
  text: "#16140F",
  cardBorder: "#E7E2D8",
  cardFill: "#FFFFFF",
  dashed: "#B9B2A2",

  frontend: "#2F9E85",
  auth: "#B0553F",
  rbac: "#6C5CD1",
  backend: "#3F8F6E",
  service: "#C97B4A",
};

const mono = { fontFamily: "Space Mono, monospace" };

const AnimCtx = createContext({ play: true, reduce: false });
const T = {
  frontend: 0,
  arrowsOut: 0.35,
  auth: 0.55,
  arrowsIn: 0.95,
  backend: 1.15,
  fanOut: 1.55,
  services: 1.8,
};

const boxStyle = { transformBox: "fill-box", transformOrigin: "center" };

/** Fades + settles a group into place. */
const Reveal = ({ delay = 0, children }) => {
  const { play, reduce } = useContext(AnimCtx);
  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, scale: 0.9, y: 10 }}
      animate={play ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ delay, type: "spring", stiffness: 220, damping: 24 }}
      style={boxStyle}
    >
      {children}
    </motion.g>
  );
};

/* ---------- reusable pieces ---------- */

const IconCard = ({
  x,
  y,
  w,
  h,
  color,
  icon,
  label,
  sublabel,
  iconSize = 40,
  delay = 0,
}) => {
  const cx = x + w / 2;
  const iconX = cx - iconSize / 2;
  const iconY = y + (h > 70 ? 14 : 8);
  return (
    <Reveal delay={delay}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={COLORS.cardFill}
        stroke={COLORS.cardBorder}
        strokeWidth="1.4"
        style={{ filter: "drop-shadow(0 3px 8px rgba(22,20,15,0.10))" }}
      />
      <rect x={iconX} y={iconY} width={iconSize} height={iconSize} rx="10" fill={color} />
      {icon(iconX, iconY, iconSize)}
      <text
        x={cx}
        y={iconY + iconSize + 17}
        textAnchor="middle"
        fill={COLORS.text}
        style={{ ...mono, fontSize: "10.5px", fontWeight: 700 }}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={cx}
          y={iconY + iconSize + 30}
          textAnchor="middle"
          fill={COLORS.textMuted}
          style={{ ...mono, fontSize: "8px", opacity: 0.85 }}
        >
          {sublabel}
        </text>
      )}
    </Reveal>
  );
};

/** Soft ring that breathes around the hub card (like the center logo in the reference). */
const HubPulse = ({ x, y, w, h, color, delay }) => {
  const { play, reduce } = useContext(AnimCtx);
  if (reduce || !play) return null;
  return (
    <motion.rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="14"
      fill="none"
      stroke={color}
      strokeWidth="2"
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0, 0.35] }}
      transition={{ duration: 3, repeat: Infinity, delay: delay + 0.4 }}
      style={boxStyle}
    />
  );
};

/**
 * Curved arrow with a travelling pulse.
 * `len` ≈ the path length in px; it only controls how far/fast the pulse travels.
 */
const CurvedArrow = ({
  d,
  color,
  label,
  markerId,
  labelPos = [0, 0],
  delay = 0,
  len = 100,
}) => {
  const { play, reduce } = useContext(AnimCtx);
  const dash = Math.min(12, Math.max(6, len / 6));
  return (
    <g>
      {/* static line + arrowhead */}
      <motion.path
        d={d}
        stroke={color}
        strokeWidth="2"
        fill="none"
        markerEnd={`url(#${markerId})`}
        initial={reduce ? false : { opacity: 0 }}
        animate={play ? { opacity: 1 } : undefined}
        transition={{ delay, duration: 0.4 }}
      />

      {/* travelling pulse */}
      {!reduce && play && (
        <motion.path
          d={d}
          stroke={color}
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${dash} 800`}
          initial={{ strokeDashoffset: dash }}
          animate={{ strokeDashoffset: [dash, -(len + dash)] }}
          transition={{
            duration: Math.max(0.8, len / 70),
            repeat: Infinity,
            repeatDelay: 1.1,
            ease: "linear",
            delay: delay + 0.5,
          }}
          style={{ filter: `drop-shadow(0 0 3px ${color})` }}
        />
      )}

      {/* label pill pops in after its arrow */}
      {label && (
        <g transform={`translate(${labelPos[0]}, ${labelPos[1]})`}>
          <Reveal delay={delay + 0.25}>
            <rect
              x={-label.length * 3.4 - 7}
              y="-10"
              width={label.length * 6.8 + 14}
              height="20"
              rx="10"
              fill={color}
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#fff"
              style={{ ...mono, fontSize: "8.5px", fontWeight: 700 }}
            >
              {label}
            </text>
          </Reveal>
        </g>
      )}
    </g>
  );
};

/** Dashed "protected" boundary: draws itself in, then stays still. */
const Boundary = ({ x, y, w, h, rx, delay }) => {
  const { play, reduce } = useContext(AnimCtx);
  return (
    <motion.rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill="none"
      stroke={COLORS.dashed}
      strokeWidth="1.3"
      strokeDasharray="5 4"
      initial={reduce ? false : { opacity: 0 }}
      animate={play ? { opacity: 1 } : undefined}
      transition={{ delay, duration: 0.6 }}
    />
  );
};

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

/* ---------- shared svg shell (starts the animation when scrolled into view) ---------- */

const AnimatedSvg = ({ children, ...props }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = !!useReducedMotion();
  return (
    <AnimCtx.Provider value={{ play: inView, reduce }}>
      <svg ref={ref} {...props}>
        {children}
      </svg>
    </AnimCtx.Provider>
  );
};

/* ---------- Desktop diagram ---------- */

export const DesktopDiagram = () => (
  <AnimatedSvg
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
    <Boundary x={30} y={140} w={560} h={470} rx={20} delay={T.arrowsOut} />
    <text
      x={48}
      y={164}
      fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8.5px", letterSpacing: "0.06em", fontWeight: 700 }}
    >
      PROTECTED API ROUTES
    </text>

    {/* React Frontend */}
    <IconCard x={195} y={16} w={180} h={88} color={COLORS.frontend} icon={iconWindow}
      label="React Frontend" delay={T.frontend} />

    {/* frontend -> JWT Auth / RBAC */}
    <CurvedArrow d="M255,104 C230,122 200,138 175,166" color={COLORS.auth}
      markerId="arr-auth" label="token" labelPos={[210, 138]} delay={T.arrowsOut} len={80} />
    <CurvedArrow d="M315,104 C340,122 375,138 400,166" color={COLORS.rbac}
      markerId="arr-rbac" label="role" labelPos={[368, 138]} delay={T.arrowsOut} len={80} />

    {/* Auth layer */}
    <IconCard x={90} y={168} w={170} h={92} color={COLORS.auth} icon={iconLock}
      label="JWT Auth" sublabel="Verifies token identity" delay={T.auth} />
    <IconCard x={315} y={168} w={170} h={92} color={COLORS.rbac} icon={iconShield}
      label="RBAC" sublabel="Role-based permissions" delay={T.auth + 0.1} />

    {/* auth -> Express Backend */}
    <CurvedArrow d="M175,260 C200,278 230,290 255,306" color={COLORS.auth}
      markerId="arr-auth" delay={T.arrowsIn} len={70} />
    <CurvedArrow d="M400,260 C375,278 345,290 320,306" color={COLORS.rbac}
      markerId="arr-rbac" delay={T.arrowsIn} len={70} />

    {/* Express Backend (hub) */}
    <HubPulse x={195} y={308} w={180} h={90} color={COLORS.backend} delay={T.backend} />
    <IconCard x={195} y={308} w={180} h={90} color={COLORS.backend} icon={iconServer}
      label="Express Backend" sublabel="Routing, validation, logic" delay={T.backend} />

    {/* backend -> MongoDB / AI APIs / Razorpay */}
    <CurvedArrow d="M245,398 C210,416 170,428 130,446" color={COLORS.service}
      markerId="arr-backend" label="store" labelPos={[168, 420]} delay={T.fanOut} len={125} />
    <CurvedArrow d="M285,398 C285,414 285,428 285,446" color={COLORS.service}
      markerId="arr-backend" label="infer" labelPos={[332, 424]} delay={T.fanOut + 0.1} len={48} />
    <CurvedArrow d="M325,398 C365,416 415,428 460,446" color={COLORS.service}
      markerId="arr-backend" label="charge" labelPos={[398, 420]} delay={T.fanOut + 0.2} len={150} />

    {/* Bottom services */}
    <IconCard x={40} y={448} w={180} h={92} color={COLORS.service} icon={iconDatabase}
      label="MongoDB" sublabel="Data storage" delay={T.services} />
    <IconCard x={195} y={448} w={180} h={92} color={COLORS.service} icon={iconChip}
      label="AI APIs" sublabel="Model inference" delay={T.services + 0.1} />
    <IconCard x={370} y={448} w={180} h={92} color={COLORS.service} icon={iconCard}
      label="Razorpay" sublabel="Payment gateway" delay={T.services + 0.2} />
  </AnimatedSvg>
);

/* ---------- Mobile diagram (single column) ---------- */

export const MobileDiagram = () => (
  <AnimatedSvg
    viewBox="0 0 300 700"
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

    <Boundary x={20} y={8} w={260} h={690} rx={18} delay={0.3} />
    <text
      x={34}
      y={30}
      fill={COLORS.textMuted}
      style={{ ...mono, fontSize: "8px", letterSpacing: "0.06em", fontWeight: 700 }}
    >
      PROTECTED ROUTES
    </text>

    <IconCard x={60} y={40} w={180} h={82} color={COLORS.frontend} icon={iconWindow}
      label="React Frontend" delay={0} />
    <CurvedArrow d="M150,122 C150,134 150,138 150,152" color={COLORS.frontend}
      markerId="m-arr-frontend" delay={0.35} len={30} />

    <IconCard x={45} y={154} w={210} h={94} color={COLORS.auth} icon={iconLock}
      label="JWT Auth + RBAC" sublabel="Verify token, check role" delay={0.55} />
    <CurvedArrow d="M150,248 C150,260 150,264 150,278" color={COLORS.auth}
      markerId="m-arr-auth" delay={0.9} len={30} />

    <HubPulse x={55} y={280} w={190} h={86} color={COLORS.backend} delay={1.1} />
    <IconCard x={55} y={280} w={190} h={86} color={COLORS.backend} icon={iconServer}
      label="Express Backend" sublabel="Routing and business logic" iconSize={34} delay={1.1} />
    <CurvedArrow d="M150,366 C150,378 150,382 150,396" color={COLORS.backend}
      markerId="m-arr-backend" delay={1.45} len={30} />

    <IconCard x={55} y={398} w={190} h={78} color={COLORS.service} icon={iconDatabase}
      label="MongoDB" sublabel="Data storage" iconSize={30} delay={1.65} />
    <CurvedArrow d="M150,476 C150,486 150,490 150,500" color={COLORS.service}
      markerId="m-arr-service" delay={1.95} len={28} />

    <IconCard x={55} y={502} w={190} h={78} color={COLORS.service} icon={iconChip}
      label="AI APIs" sublabel="Model inference" iconSize={30} delay={2.1} />
    <CurvedArrow d="M150,580 C150,590 150,594 150,604" color={COLORS.service}
      markerId="m-arr-service" delay={2.4} len={28} />

    <IconCard x={55} y={606} w={190} h={78} color={COLORS.service} icon={iconCard}
      label="Razorpay" sublabel="Payment gateway" iconSize={30} delay={2.55} />
  </AnimatedSvg>
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
