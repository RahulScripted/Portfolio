import { PieChart, Pie, Cell, LabelList, Tooltip, ResponsiveContainer } from "recharts";

// Lighthouse score bands (Google thresholds) tuned to the paper/stamp palette.
export function bandColor(score) {
  if (score == null) return "#D4C9BC";
  if (score >= 90) return "#4E7B52"; // green
  if (score >= 50) return "#C4922A"; // amber
  return "#A6382C"; // stamp red
}

function TooltipContent({ active, payload }) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="rounded-md border border-rule bg-paper px-2.5 py-1.5 shadow-lg">
      <div className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft">{p.label}</div>
      <div className="font-display text-sm font-bold text-ink tabular-nums">{p.score ?? "—"} / 100</div>
    </div>
  );
}

/**
 * Pie chart of the four Lighthouse categories, each slice sized by its score.
 * @param {Array<{id,label,score}>} data
 */
export default function LighthousePie({ data = [] }) {
  const slices = data.map((d) => ({ ...d, value: d.score ?? 0, fill: bandColor(d.score) }));

  return (
    <div className="mx-auto aspect-square w-full max-w-[260px] [&_.recharts-text]:fill-paper">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<TooltipContent />} />
          <Pie
            data={slices}
            dataKey="value"
            nameKey="label"
            innerRadius={30}
            cornerRadius={8}
            paddingAngle={4}
            isAnimationActive
          >
            {slices.map((s) => (
              <Cell key={s.id} fill={s.fill} stroke="none" />
            ))}
            <LabelList
              dataKey="score"
              stroke="none"
              fontSize={12}
              fontWeight={600}
              fill="currentColor"
              formatter={(v) => (v == null ? "—" : String(v))}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
