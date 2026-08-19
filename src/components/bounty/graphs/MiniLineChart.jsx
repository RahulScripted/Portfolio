import { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

function toWeeklyData(days) {
  const result = [];
  for (let i = 0; i < days.length; i += 7) {
    const chunk = days.slice(i, i + 7);
    const date = chunk[0]?.date ?? "";
    const label = date ? new Date(date).toLocaleDateString("en", { month: "short", day: "numeric" }) : `W${Math.floor(i / 7) + 1}`;
    result.push({ label, commits: chunk.reduce((s, d) => s + (d.count ?? 0), 0) });
  }
  return result;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#FBFAF5", border: "1px solid #D4C9BC", padding: "6px 10px", fontFamily: "Space Mono, monospace", fontSize: 10 }}>
      <div style={{ color: "#6B6459" }}>{label}</div>
      <div style={{ color: "#8B0000", fontWeight: 700 }}>{payload[0].value} commits</div>
    </div>
  );
};

export default function MiniLineChart({ days = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // mobile: ~16 weeks (4 months), desktop: ~26 weeks (6 months)
  const weeks = isMobile ? 16 : 26;
  const data = toWeeklyData(days.slice(-(weeks * 7)));

  return (
    <ResponsiveContainer width="100%" height={isMobile ? 160 : 200}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#D4C9BC" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontFamily: "Space Mono, monospace", fontSize: 8, fill: "#6B6459" }}
          tickLine={false}
          axisLine={{ stroke: "#D4C9BC" }}
          interval={Math.floor(data.length / 5)}
        />
        <YAxis
          tick={{ fontFamily: "Space Mono, monospace", fontSize: 8, fill: "#6B6459" }}
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
          width={28}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="commits"
          stroke="#8B0000"
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 3, fill: "#8B0000", strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
