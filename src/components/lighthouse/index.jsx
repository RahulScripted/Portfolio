import { useEffect, useState } from "react";
import SectionHeader from "@components/shared/SectionHeader";
import EmptyState from "@components/shared/EmptyState";
import PyramidLoader from "@components/shared/PyramidLoader";
import LighthousePie, { bandColor } from "./LighthousePie";
import { lighthouseScores, lighthouseReportUrl, lighthouseMeta } from "@types/lighthouse";

export default function Lighthouse() {
  const [scores, setScores] = useState(lighthouseScores);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    let active = true;
    fetch(`/api/lighthouse?strategy=${lighthouseMeta.strategy.toLowerCase()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!active) return;
        if (!data?.scores) {
          setStatus("error");
          return;
        }
        setScores((prev) => prev.map((s) => ({ ...s, score: data.scores[s.id] ?? s.score })));
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
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
          Live performance, accessibility, best practices and SEO scores for the deployed site, measured with Google PageSpeed Insights.
        </p>

        <div className="relative bg-paper-warm p-6 sm:p-8">
          <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />

          {status === "loading" ? (
            <PyramidLoader className="min-h-[340px]" />
          ) : status === "error" ? (
            <EmptyState
              message="Couldn't load Lighthouse report"
              hint="PageSpeed Insights isn't available right now. It'll show up here once the data loads."
            />
          ) : (
            <>
              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8">
                {/* Pie */}
                <LighthousePie data={scores} />

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
                <a
                  href={lighthouseReportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-gothic text-[9px] uppercase tracking-[0.1em] text-stamp border border-stamp px-2 py-0.5 hover:bg-stamp hover:text-paper transition-colors flex items-center gap-1"
                >
                  View Full Report
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
