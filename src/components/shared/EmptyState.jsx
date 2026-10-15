import emptyImg from "@assets/webps/empty.webp";

export default function EmptyState({
  message = "Nothing to show yet",
  hint,
  action,
  compact = false,
  className = "",
}) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-center " +
        (compact ? "py-4 px-2" : "py-8 px-4") +
        " " +
        className
      }
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className={
            "absolute inset-0 m-auto rounded-full bg-paper-deep/40 blur-2xl " +
            (compact ? "h-28 w-28" : "h-32 w-32")
          }
        />
        <img
          src={emptyImg}
          alt=""
          aria-hidden="true"
          className={
            "relative object-contain opacity-90 grayscale select-none " +
            (compact ? "w-40 h-40" : "w-40 h-40 sm:w-48 sm:h-48")
          }
          draggable="false"
        />
      </div>

      <p
        className={
          "font-display font-bold text-ink leading-tight " +
          (compact ? "text-sm" : "text-base sm:text-lg")
        }
      >
        {message}
      </p>

      {hint && (
        <p
          className={
            "mt-1.5 font-mono leading-relaxed text-ink-soft max-w-[300px] " +
            (compact ? "text-[10px]" : "text-[11px]")
          }
        >
          {hint}
        </p>
      )}

      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
