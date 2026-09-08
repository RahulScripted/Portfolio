/**
 * InfiniteRibbon — a scrolling marquee "police tape" band.
 * Adapted to JSX. Keeps the original yellow-on-black tape look and leans
 * into the detective / crime-scene theme (clues, cases, evidence).
 * Respects prefers-reduced-motion.
 */

const ribbonAnimationStyles = `
@keyframes rg-infinite-ribbon {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes rg-infinite-ribbon-reverse {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
@media (prefers-reduced-motion: reduce) {
  .rg-infinite-ribbon-track {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

// Diagonal hazard stripes used as the separator between phrases
const hazardStripes =
  "repeating-linear-gradient(45deg, #16140f 0, #16140f 8px, transparent 8px, transparent 16px)";

export default function InfiniteRibbon({
  repeat = 5,
  duration = 24,
  reverse = false,
  rotation = 0,
  children,
  className = "",
}) {
  const repeatCount = Math.max(1, Math.floor(repeat));
  const animationName = reverse
    ? "rg-infinite-ribbon-reverse"
    : "rg-infinite-ribbon";

  return (
    <div
      className={`w-full max-w-full overflow-hidden border-y-[3px] border-ink bg-yellow-400 py-1.5 text-ink ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="sr-only">{children}</span>
      <div
        aria-hidden="true"
        className="rg-infinite-ribbon-track flex w-max items-center whitespace-nowrap"
        style={{
          "--ribbon-duration": `${Math.max(0.1, duration)}s`,
          animation: `${animationName} var(--ribbon-duration) linear infinite`,
        }}
      >
        {Array.from({ length: repeatCount * 2 }, (_, index) => (
          <span key={index} className="flex items-center select-none">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.22em]">
              {children}
            </span>
            {/* Hazard-stripe separator — reads like police tape */}
            <span
              aria-hidden="true"
              className="mx-6 inline-block h-[14px] w-16 shrink-0"
              style={{ backgroundImage: hazardStripes }}
            />
          </span>
        ))}
      </div>
      <style>{ribbonAnimationStyles}</style>
    </div>
  );
}
