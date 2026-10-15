export default function PyramidLoader({ label = "Loading", className = "" }) {
  return (
    <div className={"flex w-full flex-col items-center justify-center text-center " + className} role="status" aria-live="polite">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
      {label && (
        <span className="mt-4 font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft">
          {label}
        </span>
      )}
    </div>
  );
}
