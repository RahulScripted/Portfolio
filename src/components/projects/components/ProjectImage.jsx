export default function ProjectImage({
  img,
  alt,
  index,
  domain = "",
  height = "h-[272px]",
}) {
  return (
    <div className="relative border border-ink/20 bg-paper-bright p-2 pb-0 shadow-[0_2px_16px_rgba(22,20,15,0.12)]">
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 z-[1] h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80"
      />
      <div
        className={`relative overflow-hidden border border-ink/30 bg-paper ${height}`}
      >
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.04] mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-50"
          style={{
            background:
              "radial-gradient(rgba(166,56,44,0.55) 0.7px, transparent 0.8px)",
            backgroundSize: "4px 4px",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none uppercase absolute right-2.5 top-2.5 rotate-[8deg] scale-150 border-[3px] border-stamp bg-paper-bright/90 px-2.5 py-1 font-gothic text-[11px] font-black uppercase tracking-[0.18em] text-stamp opacity-0 transition-all duration-200 ease-out group-hover:-rotate-[6deg] group-hover:scale-100 group-hover:opacity-100"
          style={{ filter: "url(#rough-stamp)" }}
        >
          Confirmed
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-1 py-1.5 font-mono text-[11px] tracking-[0.02em] text-ink-soft">
        <span className="relative shrink-0 font-bold uppercase text-ink">
          {`${index}`}
          <svg
            aria-hidden="true"
            viewBox="0 0 120 44"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-1.5 -left-2 -right-3 -top-1.5 h-[calc(100%+12px)] w-[calc(100%+20px)]"
          >
            <path
              d="M10 24 C 8 10, 44 4, 76 7 C 104 10, 116 18, 112 28 C 108 38, 70 42, 40 39 C 16 37, 8 30, 12 20"
              fill="none"
              stroke="#A6382C"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </span>
        <span className="truncate text-ink-soft">{domain}</span>
      </div>
    </div>
  );
}
