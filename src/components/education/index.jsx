import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@animations";
import { educationEntries } from "@types/education";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">Academic Record</span>
              <h2 className="mt-1.5 section-h2">Education</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              Formal training on file
            </span>
          </div>
          <div className="section-rule" />
        </div>
        <div className="border-ink">
          {educationEntries.map((entry, i) => (
            <motion.div
              key={i}
              {...settle(i * 0.1)}
              className="grid grid-cols-1 items-baseline gap-1.5 border-b border-ink/20 px-1 py-[22px] min-[600px]:grid-cols-[170px_1fr_0.9fr] min-[600px]:gap-6"
            >
              <div>
                <span className="font-mono text-[13px] text-ink-soft block">
                  {entry.dateRange}
                </span>
                <span className="mt-1.5 inline-block font-gothic text-[10px] font-bold uppercase tracking-[0.12em] px-1.5 py-0.5 border border-ink/40 text-ink-soft">
                  Education
                </span>
              </div>
              <div className="font-display leading-[1.1]" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
                {entry.degree}
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block font-gothic text-xs font-bold uppercase tracking-[0.12em] text-ink-soft hover:text-stamp transition-colors"
                >
                  {entry.institution} <ExternalLinkIcon size={12} />
                </a>
                <span className="mt-0.5 block font-gothic text-[11px] font-medium text-ink-soft/70 uppercase tracking-[0.08em]">
                  {entry.location}
                </span>
              </div>
              <div>
                <p className="font-text text-[15px] leading-[1.55] text-ink-soft">
                  {entry.description}
                </p>
                {entry.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {entry.highlights.map((c, ci) => (
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
