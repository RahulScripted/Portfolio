// Static masthead — scrolls away. Separate from sticky nav.
export default function Masthead() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="bg-paper pt-5 pb-0 px-5 sm:px-[30px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Top metadata row */}
        <div className="flex items-center justify-between gap-4 pb-[9px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span className="flex-1">Mumbai, India</span>
          <span className="flex-1 text-center hidden sm:block">Engineering Field Notes</span>
          <span className="flex-1 text-right">Est. 2022</span>
        </div>

        {/* Name — huge display */}
        <div className="border-t-[3px] border-ink pt-2 pb-1 text-center">
          <h1
            className="font-display font-normal text-ink leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(44px, 9vw, 108px)" }}
          >
            Rahul Goswami
          </h1>
          <p className="mt-3 font-gothic text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.28em] sm:tracking-[0.42em] text-ink-soft">
            Frontend Engineer · React · TypeScript · Tailwind CSS
          </p>
        </div>

        {/* Dateline strip */}
        <div className="mt-1 flex flex-wrap items-center justify-center gap-x-[22px] gap-y-1 border-y-[3px] border-ink py-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span>{dateStr}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-ink-soft hidden sm:block" aria-hidden="true" />
          <span>Vol. III</span>
          <span className="w-[3px] h-[3px] rounded-full bg-ink-soft hidden sm:block" aria-hidden="true" />
          <span>Selected Work &amp; Notes</span>
          <span className="w-[3px] h-[3px] rounded-full bg-ink-soft hidden sm:block" aria-hidden="true" />
          <span>Open to Roles</span>
        </div>
      </div>
    </div>
  );
}
