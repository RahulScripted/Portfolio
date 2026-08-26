/**
 * Reusable section header with editorial styling.
 * Used across all major portfolio sections.
 */
export default function SectionHeader({ eyebrow, title, aside }) {
  return (
    <div className="mb-[30px]">
      <div className="flex flex-wrap items-center justify-between gap-5 pb-2.5">
        <div>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="mt-1.5 section-h2">{title}</h2>
        </div>
        {aside && (
          <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap hidden sm:block">
            {aside}
          </span>
        )}
      </div>
      <div className="section-rule" />
    </div>
  );
}
