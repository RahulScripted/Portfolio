import { useMemo } from "react";
import { motion } from "framer-motion";
import { philosophyEntries } from "@types/philosophy";
import ICONS from "@assets/icons";

const CARD_W = 320;
const CARD_H = 200;
const GAP_Y = 70; // vertical gap between rows
const GAP_X = 120; // horizontal gap between columns

/**
 * Layout: cards alternate left/right in a zigzag.
 * Even index = left column, odd index = right column.
 * The diagram is centered by computing total width and offsetting.
 */
function getPositions(count) {
  const totalW = CARD_W * 2 + GAP_X;
  const offsetX = 0; // we'll center via CSS
  return Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? offsetX : offsetX + CARD_W + GAP_X,
    y: i * (CARD_H + GAP_Y),
  }));
}

/** Build a connected elbow path from bottom-center of card A to left/right-center of card B */
function buildPath(a, b, isGoingRight) {
  // Start from bottom center of card A
  const startX = a.x + CARD_W / 2;
  const startY = a.y + CARD_H;

  // End at left or right center of card B
  const endX = isGoingRight ? b.x : b.x + CARD_W;
  const endY = b.y + CARD_H / 2;

  // Midpoint Y — go down halfway then turn
  const midY = endY;

  return `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY}`;
}

const PhilosophyCard = ({ entry, pos, delay }) => {
  const IconComponent = ICONS[entry.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute group rounded-sm border border-ink/12 bg-paper shadow-[0_8px_24px_-12px_rgba(32,27,21,0.2)] px-6 pt-6 pb-5 transition-all duration-300 hover:shadow-[0_14px_36px_-10px_rgba(32,27,21,0.28)] hover:border-ink/20"
      style={{ left: pos.x, top: pos.y, width: CARD_W, minHeight: CARD_H }}
    >
      {/* Icon badge */}
      <div className="absolute -top-[18px] -left-[18px] w-[42px] h-[42px] rounded-xl bg-paper border-2 border-ink/10 shadow-[0_4px_12px_-6px_rgba(32,27,21,0.3)] flex items-center justify-center text-stamp transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
        <IconComponent size={20} />
      </div>

      <span className="font-gothic block text-[10px] font-bold uppercase tracking-[0.18em] text-stamp mb-2">
        {entry.id}
      </span>
      <h3 className="font-display font-medium text-[18px] leading-[1.2] tracking-[-0.01em] text-ink mb-2">
        {entry.title}
      </h3>
      <p className="font-text text-[12.5px] leading-[1.6] text-ink-soft mb-2.5">
        {entry.body}
      </p>
      {entry.principle && (
        <p className="font-gothic text-[10px] italic leading-[1.5] text-stamp/70 border-t border-ink/8 pt-2">
          {entry.principle}
        </p>
      )}

      {/* Hover accent */}
      <span
        aria-hidden="true"
        className="absolute left-0 bottom-0 h-[2px] w-0 bg-stamp/80 rounded-b-2xl transition-[width] duration-[400ms] ease-out group-hover:w-full"
      />
    </motion.div>
  );
};

const DesktopPhilosophy = () => {
  const positions = useMemo(
    () => getPositions(philosophyEntries.length),
    [philosophyEntries.length]
  );

  const totalW = CARD_W * 2 + GAP_X;
  const diagramHeight = (philosophyEntries.length - 1) * (CARD_H + GAP_Y) + CARD_H + 60;

  const paths = useMemo(
    () =>
      positions.slice(0, -1).map((pos, i) => {
        const next = positions[i + 1];
        const isGoingRight = next.x > pos.x;
        return buildPath(pos, next, isGoingRight);
      }),
    [positions]
  );

  return (
    <div className="flex justify-center">
      <div className="relative" style={{ width: totalW, height: diagramHeight }}>
        <style>{`
          @keyframes philosophy-flow {
            from { stroke-dashoffset: 900; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox={`0 0 ${totalW} ${diagramHeight}`}
          preserveAspectRatio="xMidYMin meet"
          aria-hidden="true"
        >
          {paths.map((d, i) => (
            <g key={i}>
              {/* Pipe background */}
              <path
                d={d}
                fill="none"
                stroke="var(--pipe, #D8CDB2)"
                strokeWidth={12}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Animated energy pulse */}
              <path
                d={d}
                fill="none"
                stroke="var(--stamp, #8C3A2C)"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(140,58,44,0.45))",
                  strokeDasharray: "40 900",
                  animation: "philosophy-flow 3s linear infinite",
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            </g>
          ))}
        </svg>

        {philosophyEntries.map((entry, i) => (
          <PhilosophyCard
            key={entry.id}
            entry={entry}
            pos={positions[i]}
            delay={i * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopPhilosophy;
