import { motion } from "framer-motion";

const SKILLS = [
  { label: "React / Next.js",  pct: 92 },
  { label: "TypeScript",       pct: 85 },
  { label: "Node / Express",   pct: 78 },
  { label: "Tailwind CSS",     pct: 90 },
  { label: "MongoDB",          pct: 72 },
  { label: "React Native",     pct: 68 },
];

export default function TechMastery() {
  return (
    <div className="border-2 border-ink bg-paper-warm p-4">
      <div className="font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft mb-3">Tech Mastery Index</div>
      <div className="flex flex-col gap-3">
        {SKILLS.map(({ label, pct }) => (
          <div key={label}>
            <div className="flex justify-between mb-1">
              <span className="font-gothic text-[10px] text-ink">{label}</span>
              <span className="font-gothic text-[10px] text-ink-soft">{pct}%</span>
            </div>
            <div className="h-1.5 bg-rule w-full">
              <motion.div
                className="h-full bg-stamp"
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
