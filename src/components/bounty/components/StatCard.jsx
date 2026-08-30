const CORNER = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M0 10V0H10" stroke="#16140F" strokeWidth="1.5" />
  </svg>
);

const CORNER_BR = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M0 10H10V0" stroke="#16140F" strokeWidth="1.5" />
  </svg>
);

const DOTGRID = () => (
  <svg width="30" height="14" viewBox="0 0 30 14" fill="none" aria-hidden="true">
    {[0,5,10,15,20,25].map(x =>
      [0,5,10].map(y => (
        <circle key={`${x}-${y}`} cx={x+2} cy={y+2} r="0.9" fill="#B8AFA6" />
      ))
    )}
  </svg>
);

export default function StatCard({ num, label, value, icon, iconAlt, sub, subIcon, subIcon2, icon2Alt, stars, accent = false }) {
  return (
    <div className="relative border border-rule bg-paper-warm flex flex-col p-3 sm:p-4 min-h-[130px] sm:min-h-[150px]">
      {/* Center tape */}
      <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-14 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />

      {/* Top corners + dot grid */}
      <div className="absolute top-0 left-0"><CORNER /></div>
      <div className="absolute top-0 right-0 flex items-start pt-1 pr-1"><DOTGRID /></div>

      {/* Number + label row */}
      <div className="flex items-start justify-between mb-1">
        <span className="font-gothic text-[9px] uppercase tracking-[0.14em] text-stamp font-bold leading-none">
          {num}
        </span>
      </div>
      <span className="font-gothic text-[8px] sm:text-[9px] uppercase tracking-[0.12em] text-ink-soft leading-snug mb-2">
        {label}
      </span>

      {/* Value */}
      <span
        className={`font-display font-normal leading-none tracking-[-0.01em] ${accent ? "text-stamp" : "text-ink"}`}
        style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
      >
        {value ?? "—"}
      </span>

      {/* Divider with dot */}
      <div className="relative my-2.5 sm:my-3 flex items-center">
        <div className="flex-1 border-t border-dashed border-rule" />
      </div>

      {/* Sub row */}
      <div className="flex items-center gap-2 flex-wrap">
        {subIcon && (
          <img src={subIcon} alt={iconAlt ?? ""} className="w-5 h-5 object-contain opacity-80" />
        )}
        {subIcon2 && (
          <img src={subIcon2} alt={icon2Alt ?? ""} className="w-5 h-5 object-contain opacity-80" />
        )}
        {icon && !subIcon && (
          <img src={icon} alt={iconAlt ?? ""} className="w-5 h-5 object-contain opacity-80" />
        )}
        {stars !== undefined && stars > 0 && (
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < stars ? "#C4922A" : "none"} stroke={i < stars ? "#C4922A" : "#B8AFA6"} strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        )}
        {sub && (
          <span className="font-gothic text-[8px] sm:text-[9px] text-ink-soft">{sub}</span>
        )}
      </div>

      {/* Bottom-right corner */}
      <div className="absolute bottom-0 right-0"><CORNER_BR /></div>
    </div>
  );
}
