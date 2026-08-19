export default function StatCard({ label, value, sub, accent = false }) {
  return (
    <div className="border border-rule bg-paper-warm p-3 flex flex-col gap-0.5">
      <span className="font-gothic text-[9px] uppercase tracking-[0.12em] text-ink-soft">{label}</span>
      <span className={`font-display text-2xl font-bold leading-none ${accent ? "text-stamp" : "text-ink"}`}>
        {value ?? "—"}
      </span>
      {sub && <span className="font-gothic text-[9px] text-ink-soft mt-0.5">{sub}</span>}
    </div>
  );
}
