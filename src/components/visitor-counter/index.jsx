import { useState, useEffect } from "react";

// Registers one visit per browser session, then displays the tally.
export default function VisitorCounter() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        // Count a visit only once per session to avoid inflating on refresh
        const alreadyCounted = sessionStorage.getItem("visit_counted");
        const method = alreadyCounted ? "GET" : "POST";

        const res = await fetch("/api/views", { method });
        if (!res.ok) throw new Error("bad response");
        const data = await res.json();

        if (!cancelled) {
          setStats(data);
          sessionStorage.setItem("visit_counted", "1");
        }
      } catch {
        // API unreachable (e.g. local dev) — keep the UI visible with placeholders
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const fmt = (n) => (n ?? 0).toLocaleString("en-US");

  return (
    <div className="flex items-center gap-4 font-gothic text-[11px] font-medium uppercase tracking-[0.1em] text-paper/60">
      <span>
        Readers:{" "}
        <strong className="text-paper/90 tabular-nums">
          {stats ? fmt(stats.total) : "—"}
        </strong>
      </span>
      <span className="text-paper/25" aria-hidden="true">
        |
      </span>
      <span>
        Unique:{" "}
        <strong className="text-paper/90 tabular-nums">
          {stats ? fmt(stats.unique) : "—"}
        </strong>
      </span>
    </div>
  );
}
