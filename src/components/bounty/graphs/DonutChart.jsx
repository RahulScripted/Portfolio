import { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = { Easy: "#6B8F5E", Medium: "#C4922A", Hard: "#8B0000" };
const INNER = 56;
const OUTER = 78;

export default function DonutChart({ easy = 0, medium = 0, hard = 0, activeSegment: controlledActive, onActiveChange }) {
  const [internalActive, setInternalActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const isControlled = controlledActive !== undefined;
  const activeSegment = isControlled ? controlledActive : internalActive;

  const setActive = (seg) => {
    if (isControlled) onActiveChange?.(seg);
    else setInternalActive(seg);
  };

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const data = [
    { name: "Easy", value: easy },
    { name: "Medium", value: medium },
    { name: "Hard", value: hard },
  ].filter((d) => d.value > 0);

  const total = easy + medium + hard;

  const toggleSegment = (entry) => {
    if (activeSegment && activeSegment.name === entry.name) {
      setActive(null);
    } else {
      setActive({ name: entry.name, value: entry.value });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: 200, outline: "none" }}>
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
            style={{ outline: "none", cursor: "pointer" }}
            onMouseEnter={(entry) => !isMobile && setActive({ name: entry.name, value: entry.value })}
            onMouseLeave={() => !isMobile && setActive(null)}
            onClick={(entry) => toggleSegment(entry)}
            tabIndex={-1}
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={COLORS[entry.name]}
                style={{ outline: "none" }}
                tabIndex={-1}
                opacity={activeSegment && activeSegment.name !== entry.name ? 0.4 : 1}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Centre label — shows active segment, otherwise total */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {activeSegment ? (
          <>
            <span className="font-display text-2xl font-bold leading-none" style={{ color: COLORS[activeSegment.name] }}>
              {activeSegment.value}
            </span>
            <span className="font-gothic text-[9px] uppercase tracking-[0.1em] mt-0.5" style={{ color: COLORS[activeSegment.name] }}>
              {activeSegment.name}
            </span>
          </>
        ) : (
          <>
            <span className="font-display text-2xl font-bold text-ink leading-none">{total}</span>
            <span className="font-gothic text-[9px] uppercase tracking-[0.1em] text-ink-soft mt-0.5">solved</span>
          </>
        )}
      </div>
    </div>
  );
}
