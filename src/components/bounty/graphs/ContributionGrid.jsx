const LEVELS = ["#EDE8DC", "#C4A882", "#A6382C", "#8B0000", "#5C0000"];

// API returns flat day array — chunk into columns of 7 (Sun→Sat)
function chunkIntoWeeks(days) {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

export default function ContributionGrid({ days = [] }) {
  const weeks = chunkIntoWeeks(days.slice(-364));
  const CELL = 11;
  const GAP = 2;
  const COLS = weeks.length;
  const W = COLS * (CELL + GAP);
  const H = 7 * (CELL + GAP);

  if (!days.length) return (
    <div className="font-gothic text-[10px] text-ink-soft">No contribution data</div>
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block", width: "100%", minWidth: `${W}px`, height: "auto" }}
    >
      {weeks.map((week, ci) =>
        week.map((day, ri) => (
          <rect
            key={`${ci}-${ri}`}
            x={ci * (CELL + GAP)}
            y={ri * (CELL + GAP)}
            width={CELL}
            height={CELL}
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
