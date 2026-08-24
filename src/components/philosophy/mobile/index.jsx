import { motion } from "framer-motion";
import { philosophyEntries } from "@types/philosophy";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
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

const MobilePhilosophy = () => {
  return (
    <div>
      {philosophyEntries.map((entry, i) => (
        <motion.div
          key={entry.id}
          {...settle(i * 0.07)}
          className="group relative border-b border-ink/20 overflow-hidden"
        >
          {/* Animated fill line on left */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-stamp scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

          <div className="flex items-start gap-4 px-4 py-5 pl-5">
            {/* Index + icon column */}
            <div className="flex flex-col items-center gap-2.5 shrink-0 w-8 pt-0.5">
              <span className="font-gothic text-[9px] font-bold uppercase tracking-[0.18em] text-stamp">
                {entry.id}
              </span>
              <div className="text-ink/30 group-hover:text-ink transition-colors duration-300">
                {ICONS[entry.icon]}
              </div>
            </div>

            {/* Vertical rule */}
            <div className="self-stretch w-px bg-ink/15 shrink-0" />

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Big watermark number */}
              <div
                aria-hidden="true"
                className="font-display text-ink/[0.05] leading-none select-none -mb-1"
                style={{ fontSize: "clamp(42px, 12vw, 64px)" }}
              >
                {entry.id}
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
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MobilePhilosophy;
