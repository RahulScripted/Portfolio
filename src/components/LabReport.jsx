import { motion } from "framer-motion";
import { stackEntries } from "../data";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

const levelBadge = {
  primary:    "border-stamp text-stamp -rotate-[1.5deg]",
  comfortable:"border-ink/50 text-ink rotate-[1deg]",
  trace:      "border-ink/30 text-ink-soft -rotate-[1deg]",
};

const levelLabel = {
  primary:    "Primary",
  comfortable:"Comfortable",
  trace:      "Trace",
};

export default function LabReport() {
  return (
    <section id="stack" className="scroll-mt-[50px] py-14 sm:py-[76px] px-5 sm:px-[30px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">Forensics</span>
              <h2 className="mt-1.5 section-h2">The Lab Report</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              Substances detected · as of this edition
            </span>
          </div>
          <div className="section-rule" />
        </div>

        {/* Table */}
        <div className="border-2 border-ink">
          {/* Desktop header row */}
          <div className="hidden sm:grid grid-cols-[2.4fr_1fr_1fr_1.3fr] bg-ink font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-paper">
            <span className="border-r border-paper/20 px-4 py-[9px]">Substance</span>
            <span className="border-r border-paper/20 px-4 py-[9px]">Code</span>
            <span className="border-r border-paper/20 px-4 py-[9px]">Detected</span>
            <span className="px-4 py-[9px] text-right">Finding</span>
          </div>

          {stackEntries.map((row, i) => (
            <motion.div
              key={row.name}
              {...settle(i * 0.03)}
              className="grid gap-2 border-t border-ink/20 px-3.5 py-3.5 font-mono transition-colors first:border-t-0 hover:bg-paper-warm sm:grid-cols-[2.4fr_1fr_1fr_1.3fr] sm:items-center sm:gap-0 sm:px-0 sm:py-0"
            >
              {/* Name */}
              <span className="flex min-w-0 items-baseline justify-between gap-3 sm:block sm:border-r sm:border-ink/20 sm:px-4 sm:py-[11px]">
                <span
                  className="truncate font-display tracking-[-0.01em]"
                  style={{ fontSize: "19px" }}
                >
                  {row.name}
                </span>
                <span className="shrink-0 font-gothic text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft sm:hidden">
                  {row.code}
                </span>
              </span>
              {/* Code */}
              <span className="hidden sm:block border-r border-ink/20 px-4 py-[11px] text-[13px] text-ink-soft">
                {row.code}
              </span>
              {/* Status */}
              <span className="text-[12px] uppercase tracking-[0.08em] text-ink-soft sm:border-r sm:border-ink/20 sm:px-4 sm:py-[11px] sm:text-[13px] sm:normal-case sm:tracking-normal sm:text-ink">
                {row.status}
              </span>
              {/* Finding badge */}
              <span className="sm:px-4 sm:py-[9px] sm:text-right">
                <span
                  className={`inline-block border-2 px-2 py-0.5 font-gothic text-[10px] font-black uppercase tracking-[0.14em] ${levelBadge[row.level]}`}
                  style={{ filter: "url(#rough-stamp)" }}
                >
                  {levelLabel[row.level]}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-3 font-gothic text-[11px] font-medium tracking-[0.04em] text-ink-soft sm:text-right">
          Findings are illustrative — what I reach for day to day, not a ranking.
        </p>
      </div>
    </section>
  );
}
