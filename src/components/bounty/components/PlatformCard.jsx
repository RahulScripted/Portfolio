import DonutChart from "../graphs/DonutChart";

const LEGEND = [
  { label: "Easy",   color: "#6B8F5E" },
  { label: "Med",    color: "#C4922A" },
  { label: "Hard",   color: "#8B0000" },
];

export default function PlatformCard({ icon, name, code, stats = [], easy, medium, hard, link }) {
  const hasDonut = easy !== undefined && medium !== undefined && hard !== undefined;

  return (
    <div className="border-2 border-ink bg-paper-warm p-4 flex flex-col h-full">
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
            {LEGEND.map(({ label, color }) => (
              <span key={label} className="flex items-center gap-1 font-gothic text-[9px] text-ink-soft">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2">
        {stats.map(({ label, value }) => (
          <div key={label} className="border border-rule p-2">
            <div className="font-gothic text-[8px] uppercase tracking-[0.1em] text-ink-soft">{label}</div>
            <div className="font-display text-lg font-bold text-ink leading-tight">{value ?? "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
