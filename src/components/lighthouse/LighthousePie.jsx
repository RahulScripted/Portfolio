import { PieChart, Pie, Cell, LabelList, Tooltip, ResponsiveContainer } from "recharts";
import { categoryColor } from "@types/lighthouse";

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

// Category name rendered just outside each slice, like the radar chart's axis
// labels. Anchors left/right based on which side of the donut the slice is on.
function OuterLabel({ cx, cy, midAngle, outerRadius, payload }) {
  const RAD = Math.PI / 180;
  const r = outerRadius + 12;
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD);
  const anchor = x > cx ? "start" : "end";
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      dominantBaseline="central"
      className="fill-ink-soft"
      style={{ fontFamily: '"Oswald", sans-serif', fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase" }}
    >
      {payload.label}
    </text>
  );
}

/**
 * Donut of the four Lighthouse categories. Each slice gets its own colour so
 * the categories are distinguishable even when all scores are similar.
 * @param {Array<{id,label,score}>} data
 */
export default function LighthousePie({ data = [] }) {
  const slices = data.map((d) => ({ ...d, value: d.score ?? 0, fill: categoryColor(d.id) }));

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 12, right: 70, bottom: 12, left: 70 }}>
          <Tooltip content={<TooltipContent />} />
          <Pie
            data={slices}
            dataKey="value"
            nameKey="label"
            innerRadius="26%"
            outerRadius="72%"
            cornerRadius={8}
            paddingAngle={4}
            isAnimationActive
            label={OuterLabel}
            labelLine={false}
          >
            {slices.map((s) => (
              <Cell key={s.id} fill={s.fill} stroke="none" />
            ))}
            <LabelList
              dataKey="score"
              stroke="none"
              fontSize={12}
              fontWeight={600}
              className="fill-paper"
              formatter={(v) => (v == null ? "—" : String(v))}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
