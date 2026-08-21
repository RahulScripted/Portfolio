import { useState, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = { Easy: "#6B8F5E", Medium: "#C4922A", Hard: "#8B0000" };
const INNER = 56;
const OUTER = 78;

export default function DonutChart({ easy = 0, medium = 0, hard = 0 }) {
  const [tooltip, setTooltip] = useState(null);
  const containerRef = useRef(null);

  const data = [
    { name: "Easy",   value: easy },
    { name: "Medium", value: medium },
    { name: "Hard",   value: hard },
  ].filter((d) => d.value > 0);

  const total = easy + medium + hard;

  const isOnArc = (clientX, clientY) => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.sqrt((clientX - cx) ** 2 + (clientY - cy) ** 2);
    // scale px to chart units (outerRadius=78 maps to half the rendered width)
    const scale = rect.width / 2 / OUTER;
    const d = dist / scale;
    return d >= INNER && d <= OUTER;
  };

  const handleMouseEnter = (entry, _index, e) => {
    if (!isOnArc(e.clientX, e.clientY)) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({ name: entry.name, value: entry.value, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    if (!isOnArc(e.clientX, e.clientY)) { setTooltip(null); return; }
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip((t) => t ? { ...t, x: e.clientX - rect.left, y: e.clientY - rect.top } : null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: 200, outline: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTooltip(null)}
    >
      <ResponsiveContainer width="100%" height="100%" style={{ outline: "none" }}>
        <PieChart style={{ outline: "none" }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={INNER}
            outerRadius={OUTER}
            paddingAngle={3}
            dataKey="value"
            strokeWidth={0}
            style={{ outline: "none", cursor: "default" }}
            onMouseEnter={handleMouseEnter}
            tabIndex={-1}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name]} style={{ outline: "none" }} tabIndex={-1} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Centre label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-display text-2xl font-bold text-ink leading-none">{total}</span>
        <span className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft mt-0.5">solved</span>
      </div>

      {tooltip && (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 16,
            transform: tooltip.x > (containerRef.current?.offsetWidth ?? 200) - 90 ? "translateX(-110%)" : "none",
          }}
        >
          <div style={{
            background: "#FBFAF5",
            border: "1px solid #D4C9BC",
            padding: "4px 8px",
            fontFamily: "Space Mono, monospace",
            fontSize: 10,
            whiteSpace: "nowrap",
          }}>
            <span style={{ color: COLORS[tooltip.name], fontWeight: 700 }}>{tooltip.name}</span>
            <span style={{ color: "#16140F", marginLeft: 6 }}>{tooltip.value}</span>
          </div>
        </div>
      )}
    </div>
  );
}
