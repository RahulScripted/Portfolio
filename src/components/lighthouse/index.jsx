import { lazy, Suspense, useEffect, useRef, useState } from "react";
import SectionHeader from "@components/shared/SectionHeader";
import { lighthouseScores, lighthouseMeasuredOn, lighthouseMeta, bandColor } from "@types/lighthouse";

const LighthousePie = lazy(() => import("./LighthousePie"));

export default function Lighthouse() {
  const scores = lighthouseScores;
  const ref = useRef(null);
  const [showPie, setShowPie] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowPie(true);
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
          aside={`${lighthouseMeta.tool} — ${lighthouseMeta.strategy}`}
        />

        <p className="mb-8 font-mono text-[13px] text-ink-soft max-w-[480px]">
          Performance, accessibility, best practices and SEO scores for the deployed site, measured with Google PageSpeed Insights.
        </p>

        <div className="relative bg-paper-warm p-6 sm:p-8">
          <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />

          <div ref={ref} className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8">
            {/* Pie — reserves a square so there's no layout shift while it loads */}
            <div className="mx-auto aspect-square w-full max-w-[260px]">
              {showPie && (
                <Suspense fallback={null}>
                  <LighthousePie data={scores} />
                </Suspense>
              )}
            </div>

            {/* Legend — category name, colour band and score */}
            <ul className="flex flex-col gap-3">
              {scores.map((s) => (
                <li key={s.id} className="flex items-center justify-between border-b border-rule pb-2.5">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: bandColor(s.score) }} />
                    <span className="font-gothic text-[10px] uppercase tracking-[0.12em] text-ink-soft">{s.label}</span>
                  </span>
                  <span className="font-display text-lg font-bold tabular-nums" style={{ color: bandColor(s.score) }}>
                    {s.score ?? "—"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: "#A6382C" }} /> 0–49 Poor
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: "#C4922A" }} /> 50–89 Needs work
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: "#4E7B52" }} /> 90–100 Good
              </span>
            </div>
            <span className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft">
              Measured {lighthouseMeasuredOn}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
