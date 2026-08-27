const LEVELS = ["#EDE8DC", "#C4A882", "#A6382C", "#8B0000", "#5C0000"];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Chunk flat day array into columns of 7 (Sun→Sat)
function chunkIntoWeeks(days) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

// Compute month label positions based on the first day of each month in the weeks
function getMonthLabels(weeks, cellSize, gap) {
  const labels = [];
  let lastMonth = -1;

  for (let ci = 0; ci < weeks.length; ci++) {
    const firstDay = weeks[ci][0];
    if (!firstDay?.date) continue;
    const month = new Date(firstDay.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      const x = ci * (cellSize + gap);
      // Avoid overlapping labels – require minimum pixel gap
      const prev = labels[labels.length - 1];
      if (!prev || x - prev.x >= 30) {
        labels.push({ month: MONTHS[month], x });
      }
    }
  }
  return labels;
}

function Grid({ weeks, cellSize = 11, gap = 2 }) {
  const labelW = 32; // space for day labels on left
  const labelH = 16; // space for month labels on top
  const gridW = weeks.length * (cellSize + gap);
  const gridH = 7 * (cellSize + gap);
  const totalW = labelW + gridW;
  const totalH = labelH + gridH;

  const monthLabels = getMonthLabels(weeks, cellSize, gap);

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      style={{ display: "block", width: "100%", minWidth: `${Math.min(totalW, 600)}px`, height: "auto" }}
      role="img"
      aria-label="GitHub contribution grid"
    >
      {/* Month labels along the top */}
      {monthLabels.map(({ month, x }, i) => (
        <text
          key={i}
          x={labelW + x}
          y={11}
          className="fill-ink-soft"
          style={{ fontFamily: "Space Mono, monospace", fontSize: 9, fontWeight: 500 }}
        >
          {month}
        </text>
      ))}

      {/* Day labels on the left (Mon, Wed, Fri) */}
      {DAY_LABELS.map((label, ri) =>
        label ? (
          <text
            key={ri}
            x={0}
            y={labelH + ri * (cellSize + gap) + cellSize - 1}
            className="fill-ink-soft"
            style={{ fontFamily: "Space Mono, monospace", fontSize: 8.5 }}
          >
            {label}
          </text>
        ) : null
      )}

      {/* Contribution cells */}
      {weeks.map((week, ci) =>
        week.map((day, ri) => (
          <rect
            key={`${ci}-${ri}`}
            x={labelW + ci * (cellSize + gap)}
            y={labelH + ri * (cellSize + gap)}
            width={cellSize}
            height={cellSize}
            fill={LEVELS[day.level ?? 0]}
            rx={2}
          >
            <title>{day.date}: {day.count ?? 0} contributions</title>
          </rect>
        ))
      )}
    </svg>
  );
}

// Pad days so the first entry falls on Sunday (index 0 of its week column)
function alignToSunday(days) {
  if (!days.length) return days;
  const firstDate = new Date(days[0].date + "T00:00:00");
  const dayOfWeek = firstDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  if (dayOfWeek === 0) return days;
  // Prepend empty placeholder days so first real day lands in correct row
  const padding = Array.from({ length: dayOfWeek }, () => ({ date: "", count: 0, level: 0 }));
  return [...padding, ...days];
}

export default function ContributionGrid({ days = [] }) {
  if (!days.length) {
    return <div className="font-gothic text-[10px] text-ink-soft">No contribution data</div>;
  }

  const aligned = alignToSunday(days.slice(-364));
  const allWeeks = chunkIntoWeeks(aligned);
  // Mobile: last ~26 weeks (6 months from current date)
  const mobileWeeks = allWeeks.slice(-26);

  return (
    <>
      <div className="block sm:hidden overflow-x-auto">
        <Grid weeks={mobileWeeks} cellSize={10} gap={2} />
      </div>
      <div className="hidden sm:block">
        <Grid weeks={allWeeks} cellSize={11} gap={2} />
      </div>
    </>
  );
}
