import { useMemo } from "react";
import { motion } from "framer-motion";
import { philosophyEntries } from "@types/philosophy";
import ICONS from "@assets/icons";

const CARD_MIN_H = 200;
const ROW_GAP = 50;
const SPINE_X = 20;
const CARD_OFFSET = 48; // left offset for cards (spine width + spacing)

const PhilosophyCard = ({ entry, pos, delay }) => {
  const IconComponent = ICONS[entry.icon];
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute left-0 right-0 group rounded-2xl border border-ink/10 bg-paper shadow-[0_6px_16px_-8px_rgba(32,27,21,0.18)] px-5 pt-5 pb-4"
      style={{ top: pos.y, minHeight: CARD_MIN_H }}
    >
      {/* Icon badge */}
      <div className="absolute -top-3 -left-3 w-9 h-9 rounded-[10px] bg-paper border-2 border-ink/10 shadow-[0_3px_8px_-4px_rgba(32,27,21,0.25)] flex items-center justify-center text-stamp">
        <IconComponent size={16} />
      </div>

      <span className="font-gothic block text-[9px] font-bold uppercase tracking-[0.18em] text-stamp mb-1.5">
        {entry.id}
      </span>
      <h3
        className="font-display text-ink leading-[1.15] tracking-[-0.01em] mb-2"
        style={{ fontSize: "clamp(16px, 4.5vw, 19px)" }}
      >
        {entry.title}
      </h3>
      <p className="font-text text-[12.5px] leading-[1.6] text-ink-soft mb-2">
        {entry.body}
      </p>
      {entry.principle && (
        <p className="font-gothic text-[9.5px] italic leading-[1.5] text-stamp/70 border-t border-ink/8 pt-2">
          {entry.principle}
        </p>
      )}
    </motion.div>
  );
};

function getPositions(count) {
  return Array.from({ length: count }, (_, i) => ({
    y: i * (CARD_MIN_H + ROW_GAP),
  }));
}

const MobilePhilosophy = () => {
  const positions = useMemo(
    () => getPositions(philosophyEntries.length),
    [philosophyEntries.length]
  );
  const diagramHeight =
    (philosophyEntries.length - 1) * (CARD_MIN_H + ROW_GAP) + CARD_MIN_H;

  return (
    <div className="relative" style={{ paddingLeft: CARD_OFFSET, minHeight: diagramHeight }}>
      <style>{`
        @keyframes philosophy-flow-m {
          from { stroke-dashoffset: 900; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Vertical spine */}
      <svg
        className="absolute top-0 left-0 h-full overflow-visible pointer-events-none"
        width={CARD_OFFSET}
        style={{ height: diagramHeight }}
        aria-hidden="true"
      >
        {positions.slice(0, -1).map((pos, i) => {
          const startY = pos.y + CARD_MIN_H / 2;
          const endY = positions[i + 1].y + CARD_MIN_H / 2;
          const d = `M ${SPINE_X} ${startY} L ${SPINE_X} ${endY}`;
          return (
            <g key={i}>
              {/* Pipe */}
              <path
                d={d}
                fill="none"
                stroke="var(--pipe, #D8CDB2)"
                strokeWidth={8}
                strokeLinecap="round"
              />
              {/* Animated pulse */}
              <path
                d={d}
                fill="none"
                stroke="var(--stamp, #8C3A2C)"
                strokeWidth={3}
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 3px rgba(140,58,44,0.45))",
                  strokeDasharray: "30 900",
                  animation: "philosophy-flow-m 3s linear infinite",
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            </g>
          );
        })}

        {/* Dots at each card's midpoint on the spine */}
        {positions.map((pos, i) => (
          <circle
            key={i}
            cx={SPINE_X}
            cy={pos.y + CARD_MIN_H / 2}
            r={6}
            fill="var(--paper, #FBFAF5)"
            stroke="var(--stamp, #8C3A2C)"
            strokeWidth={2.5}
          />
        ))}
      </svg>

      {/* Cards */}
      <div className="relative" style={{ height: diagramHeight }}>
        {philosophyEntries.map((entry, i) => (
          <PhilosophyCard
            key={entry.id}
            entry={entry}
            pos={positions[i]}
            delay={i * 0.08}
          />
        ))}
      </div>
    </div>
  );
};

export default MobilePhilosophy;
