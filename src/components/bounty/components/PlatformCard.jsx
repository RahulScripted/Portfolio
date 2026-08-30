import DonutChart from "../graphs/DonutChart";

export default function PlatformCard({ icon, name, code, stats = [], easy, medium, hard, link }) {
  const hasDonut = easy !== undefined && medium !== undefined && hard !== undefined;

  const LEGEND = [
    { label: "Easy",   color: "#6B8F5E", value: easy },
    { label: "Med",    color: "#C4922A", value: medium },
    { label: "Hard",   color: "#8B0000", value: hard },
  ];

  return (
    <div className="relative bg-paper-warm p-4 flex flex-col h-full">
      {/* Center tape */}
      <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={icon} alt={name} className="w-6 h-6 object-contain" />
          <div>
            <div className="font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft">{code}</div>
            <div className="font-display text-base font-bold text-ink leading-tight">{name}</div>
          </div>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            className="font-gothic text-[9px] uppercase tracking-[0.1em] text-stamp border border-stamp px-2 py-0.5 hover:bg-stamp hover:text-paper transition-colors flex items-center gap-1">
            Profile
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>

      {/* Donut — grows to fill */}
      {hasDonut && (
        <div className="flex-1 flex flex-col">
          <DonutChart easy={easy} medium={medium} hard={hard} />
          <div className="flex justify-center gap-4 mt-1 mb-3">
            {LEGEND.map(({ label, color, value }) => (
              <span key={label} className="flex items-center gap-1 font-gothic text-[9px] text-ink-soft">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
                {label} | {value}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
        {stats.map(({ label, value }) => (
          <div key={label} className="border border-rule p-1.5 sm:p-2">
            <div className="font-gothic text-[8px] uppercase tracking-[0.1em] text-ink-soft">{label}</div>
            <div className="font-display text-base sm:text-lg font-bold text-ink leading-tight break-all">{value ?? "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
