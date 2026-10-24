import { lazy, Suspense, useEffect, useRef, useState } from "react";
import SectionHeader from "@components/shared/SectionHeader";
import { lighthouseReports, lighthouseMeasuredOn, lighthouseMeta, bandColor, categoryColor } from "@types/lighthouse";

const LighthousePie = lazy(() => import("./LighthousePie"));

function ReportCard({ report, show }) {
  return (
    <div className="relative bg-paper-warm p-6 sm:p-8">
      <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />

      <div className="mb-5 flex items-center gap-2">
        <span className="font-gothic text-[10px] uppercase tracking-[0.18em] text-stamp">{report.label}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      {/* Pie — reserves a square so there's no layout shift while it loads */}
      <div className="mx-auto aspect-square w-full max-w-[300px]">
        {show && (
          <Suspense fallback={null}>
            <LighthousePie data={report.scores} />
          </Suspense>
        )}
      </div>

      {/* Legend — category name, colour swatch and score */}
      <ul className="mt-6 flex flex-col gap-3">
        {report.scores.map((s) => (
          <li key={s.id} className="flex items-center justify-between border-b border-rule pb-2.5">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: categoryColor(s.id) }} />
              <span className="font-gothic text-[10px] uppercase tracking-[0.12em] text-ink-soft">{s.label}</span>
            </span>
            <span className="font-display text-lg font-bold tabular-nums" style={{ color: bandColor(s.score) }}>
              {s.score ?? "—"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Lighthouse() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="lighthouse" className="scroll-mt-[50px] py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <SectionHeader
          eyebrow="Field Diagnostics"
          title="Lighthouse Report"
          aside={lighthouseMeta.tool}
        />

        <p className="mb-8 font-mono text-[13px] text-ink-soft max-w-[480px]">
          Performance, accessibility, best practices and SEO scores for the deployed site — measured on both desktop and mobile with Google PageSpeed Insights.
        </p>

        <div ref={ref} className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {lighthouseReports.map((report) => (
            <ReportCard key={report.id} report={report} show={show} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
          <span className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft">
            Scores out of 100
          </span>
          <span className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft">
            Measured {lighthouseMeasuredOn}
          </span>
        </div>
      </div>
    </section>
  );
}
