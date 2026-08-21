export default function Masthead() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="bg-paper pt-5 pb-0 px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex items-center justify-between gap-4 pb-[9px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span className="flex-1">Mumbai, India</span>
          <span className="flex-1 text-center hidden sm:block">The Engineering Edition</span>
          <span className="flex-1 text-right">Est. 2022</span>
        </div>
        <div className="border-t-[3px] border-ink pt-2 pb-1 text-center">
          <h1
            className="font-display font-normal text-ink leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(44px, 9vw, 108px)" }}
          >
            Rahul Goswami
          </h1>
          <p className="mt-3 font-gothic text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.28em] sm:tracking-[0.42em] text-ink-soft">
            Software Engineer | React | TypeScript | React Native | Product Engineering
          </p>
        </div>
        <div className="mt-1 border-y-[3px] border-ink py-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {/* Desktop: single row with pipes */}
          <div className="hidden sm:flex items-center justify-center gap-x-[22px]">
            <span>{dateStr}</span>
            <span className="text-ink-soft/50" aria-hidden="true">|</span>
            <span>Vol. I</span>
            <span className="text-ink-soft/50" aria-hidden="true">|</span>
            <span>Production Systems &amp; Selected Work</span>
            <span className="text-ink-soft/50" aria-hidden="true">|</span>
            <span>Open to Opportunities</span>
          </div>
          {/* Mobile: 2x2 grid without pipes, no extra padding */}
          <div className="grid grid-cols-2 gap-y-0.5 text-left sm:hidden">
            <span>{dateStr}</span>
            <span className="text-right">Vol. I</span>
            <span>Production Systems &amp; Selected Work</span>
            <span className="text-right">Open to Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
