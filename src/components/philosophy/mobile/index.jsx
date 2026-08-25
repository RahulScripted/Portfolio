import { motion } from "framer-motion";
import { philosophyEntries } from "@types/philosophy";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const dotSettle = () => ({
  initial: { backgroundColor: "var(--paper)", scale: 1 },
  whileInView: { backgroundColor: "var(--stamp)", scale: 1.15 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" },
});

const ICONS = {
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  blueprint: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  flag: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
};

const PhilosophyRow = ({ entry, delay, isLast }) => (
  <div className="flex items-stretch">
    {/* Stitched rail: dot fills in + thread connects to the next entry */}
    <div className="flex flex-col items-center w-[34px] shrink-0 pt-[26px]">
      <motion.span
        {...dotSettle()}
        className="w-[7px] h-[7px] rounded-full"
      />
      {!isLast && <span className="w-px flex-1 bg-ink/15 my-1" />}
    </div>

    <motion.div
      {...settle(delay)}
      className="flex-1 pt-5 pb-6 pl-1 pr-4"
    >
      {/* Head — id pinned left, icon centered */}
      <div className="relative flex items-center justify-center mb-2.5">
        <span className="absolute left-0 font-gothic text-[10px] font-bold uppercase tracking-[0.18em] text-stamp">
          {entry.id}
        </span>
        <div className="absolute right-0 text-ink/30">{ICONS[entry.icon]}</div>
      </div>

      <h3
        className="font-display text-ink leading-[1.1] tracking-[-0.01em] mb-2"
        style={{ fontSize: "clamp(17px, 5vw, 22px)" }}
      >
        {entry.title}
      </h3>
      <p className="font-text text-[13px] leading-[1.6] text-ink-soft">
        {entry.body}
      </p>
    </motion.div>
  </div>
);

const MobilePhilosophy = () => {
  return (
    <div>
      {philosophyEntries.map((entry, i) => (
        <PhilosophyRow
          key={entry.id}
          entry={entry}
          delay={i * 0.07}
          isLast={i === philosophyEntries.length - 1}
        />
      ))}
    </div>
  );
};

export default MobilePhilosophy;