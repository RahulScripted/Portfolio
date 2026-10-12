import emptySvg from "@assets/svgs/empty.svg";

export default function EmptyState({
  message = "Nothing to show yet",
  hint,
  className = "",
}) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center text-center py-8 px-4 " + className
      }
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute inset-0 m-auto h-32 w-32 rounded-full bg-paper-deep/40 blur-2xl"
        />
        <img
          src={emptySvg}
          alt=""
          aria-hidden="true"
          className="relative w-40 h-40 sm:w-48 sm:h-48 object-contain opacity-90 grayscale select-none"
          draggable="false"
        />
      </div>

      <p className="-mt-10 font-display text-base sm:text-lg font-bold text-ink leading-tight">
        {message}
      </p>

      {hint && (
        <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-ink-soft max-w-[320px]">
          {hint}
        </p>
      )}
    </div>
  );
}
