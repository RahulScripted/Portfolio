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

const InkTextureDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <filter id="phil-ink-texture">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
    </filter>
  </svg>
);

const PhilosophyCard = ({ entry, delay, featured = false }) => (
  <motion.div
    {...settle(delay)}
    className={`group relative flex flex-col border border-ink/20 bg-paper overflow-hidden cursor-default
      transition-colors duration-300
      ${featured ? "col-span-2 row-span-2" : ""}`}
  >
    <span
      aria-hidden="true"
      className="absolute left-0 bottom-0 h-[2px] w-0 bg-stamp transition-[width] duration-[400ms] ease-out group-hover:w-full"
    />

    {/* Top bar — id pinned left, icon centered */}
    <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3">
      <span className="font-gothic text-[9px] font-bold uppercase tracking-[0.2em] text-stamp">
        {entry.id}
      </span>

      <div className="text-ink/25 transition-colors duration-300 group-hover:text-ink/45">
        {ICONS[entry.icon]}
      </div>
    </div>

    {/* Content */}
    <div className={`relative flex flex-col flex-1 ${featured ? "p-8 xl:p-10" : "p-5 xl:p-6"}`}>
      <div
        aria-hidden="true"
        className={`absolute flex items-center justify-center rounded-full border-[1.5px] border-stamp
          font-display font-semibold text-stamp opacity-0 rotate-[-14deg] scale-[0.85]
          transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.2,0.9,0.3,1.3)]
          group-hover:opacity-100 group-hover:rotate-[-6deg] group-hover:scale-100`}
        style={
          featured
            ? { width: 130, height: 130, fontSize: 44, top: 26, right: 32, filter: "url(#phil-ink-texture)" }
            : { width: 84, height: 84, fontSize: 30, top: 14, right: 16, filter: "url(#phil-ink-texture)" }
        }
      >
        <span className="absolute inset-2 rounded-full border border-stamp/55" />
        {entry.id}
      </div>

      <div className="mt-auto">
        <h3
          className="font-display text-ink leading-[1.05] tracking-[-0.015em] transition-colors duration-300"
          style={{ fontSize: featured ? "clamp(22px, 2.8vw, 34px)" : "clamp(15px, 1.5vw, 20px)" }}
        >
          {entry.title}
        </h3>
        <div className={`border-t border-ink/20 ${featured ? "my-4" : "my-3"}`} />
        <p
          className={`font-text leading-[1.6] text-ink-soft ${featured ? "text-[15px] max-w-[48ch]" : "text-[13px]"}`}
        >
          {entry.body}
        </p>
      </div>
    </div>
  </motion.div>
);

const DesktopPhilosophy = () => {
  const [first, ...rest] = philosophyEntries;

  return (
    <>
      <InkTextureDefs />
      <div className="grid grid-cols-4 grid-rows-2 gap-px bg-ink/10 border border-ink/10">
        <PhilosophyCard entry={first} delay={0} featured />
        {rest.map((entry, i) => (
          <PhilosophyCard key={entry.id} entry={entry} delay={(i + 1) * 0.08} />
        ))}
      </div>
    </>
  );
};

export default DesktopPhilosophy;