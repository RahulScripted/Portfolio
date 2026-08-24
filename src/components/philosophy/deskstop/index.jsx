import { motion } from "framer-motion";
import { philosophyEntries } from "@types/philosophy";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const ICONS = {
  search: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  blueprint: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  user: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  flag: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
};

const PhilosophyCard = ({ entry, delay, featured = false }) => (
  <motion.div
    {...settle(delay)}
    className={`group relative flex flex-col border border-ink/20 bg-paper overflow-hidden cursor-default
      transition-colors duration-300 hover:bg-ink hover:border-ink
      ${featured ? "col-span-2 row-span-2" : ""}`}
  >
    {/* Top bar with index */}
    <div className="flex items-center justify-between border-b border-ink/15 group-hover:border-paper/15 px-5 py-3 transition-colors duration-300">
      <span className="font-gothic text-[9px] font-bold uppercase tracking-[0.2em] text-stamp group-hover:text-paper/50 transition-colors duration-300">
        {entry.id}
      </span>
      <div className="text-ink/25 group-hover:text-paper/30 transition-colors duration-300">
        {ICONS[entry.icon]}
      </div>
    </div>

    {/* Content */}
    <div className={`flex flex-col flex-1 ${featured ? "p-8 xl:p-10" : "p-5 xl:p-6"}`}>
      {/* Big number watermark */}
      <div
        aria-hidden="true"
        className="font-display font-normal text-ink/[0.04] group-hover:text-paper/[0.06] leading-none select-none mb-auto transition-colors duration-300"
        style={{ fontSize: featured ? "clamp(80px, 10vw, 140px)" : "clamp(60px, 7vw, 96px)" }}
      >
        {entry.id}
      </div>

      <div className={featured ? "mt-6" : "mt-4"}>
        <h3
          className="font-display text-ink group-hover:text-paper leading-[1.05] tracking-[-0.015em] transition-colors duration-300"
          style={{ fontSize: featured ? "clamp(22px, 2.8vw, 34px)" : "clamp(15px, 1.5vw, 20px)" }}
        >
          {entry.title}
        </h3>
        <div className={`border-t border-ink/20 group-hover:border-paper/20 transition-colors duration-300 ${featured ? "my-4" : "my-3"}`} />
        <p
          className={`font-text leading-[1.6] text-ink-soft group-hover:text-paper/70 transition-colors duration-300 ${featured ? "text-[15px] max-w-[48ch]" : "text-[13px]"}`}
        >
          {entry.body}
        </p>
      </div>
    </div>
  </motion.div>
);

const DeskstopPhilosophy = () => {
  const [first, ...rest] = philosophyEntries;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-px bg-ink/10 border border-ink/10">
      <PhilosophyCard entry={first} delay={0} featured />
      {rest.map((entry, i) => (
        <PhilosophyCard key={entry.id} entry={entry} delay={(i + 1) * 0.08} />
      ))}
    </div>
  );
};

export default DeskstopPhilosophy;
