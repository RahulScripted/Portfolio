import { motion } from "framer-motion";
import { careerEntries } from "@types/carrers";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const typeLabel = {
  "Full-time": "bg-ink text-paper",
  "Open Source": "border border-ink/40 text-ink-soft",
  Education: "border border-ink/40 text-ink-soft",
};

export default function Career() {
  return (
    <section id="career" className="py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">Known Whereabouts</span>
              <h2 className="mt-1.5 section-h2">The Career Ledger</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              Movements on record since 2022
            </span>
          </div>
          <div className="section-rule" />
        </div>
        <div className="border-t-2 border-ink">
          {careerEntries.map((entry, i) => (
            <motion.div
              key={i}
              {...settle(i * 0.1)}
              className="grid grid-cols-1 items-baseline gap-1.5 border-b border-ink/20 px-1 py-[22px] min-[600px]:grid-cols-[170px_1fr_0.9fr] min-[600px]:gap-6"
            >
              <div>
                <span className="font-mono text-[13px] text-ink-soft block">
                  {entry.dateRange}
                </span>
                <span
                  className={`mt-1.5 inline-block font-gothic text-[10px] font-bold uppercase tracking-[0.12em] px-1.5 py-0.5 ${typeLabel[entry.type]}`}
                >
                  {entry.type}
                </span>
              </div>
              <div
                className="font-display leading-[1.1]"
                style={{ fontSize: "24px" }}
              >
                {entry.role}
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block font-gothic text-xs font-bold uppercase tracking-[0.12em] text-ink-soft hover:text-stamp transition-colors"
                >
                  {entry.company} ↗
                </a>
                <span className="mt-0.5 block font-gothic text-[11px] font-medium text-ink-soft/70 uppercase tracking-[0.08em]">
                  {entry.location}
                </span>
              </div>
              <div>
                <p className="font-text text-[15px] leading-[1.55] text-ink-soft">
                  {entry.description}
                </p>
                {entry.contributions.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {entry.contributions.map((c, ci) => (
                      <li
                        key={ci}
                        className="font-mono text-[11px] text-ink-soft flex items-start gap-2"
                      >
                        <span className="text-stamp mt-0.5 shrink-0">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
