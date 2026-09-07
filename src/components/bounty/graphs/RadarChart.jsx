import { motion } from "framer-motion";
import {
  RadarChart as ReRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { RANKS } from "@types/bounty";

function getOverallRank(data) {
  if (!data?.length) return RANKS[RANKS.length - 1];
  const avg = data.reduce((s, d) => s + d.value, 0) / data.length;
  return RANKS.find((r) => avg >= r.min) ?? RANKS[RANKS.length - 1];
}

function getRank(value) {
  return RANKS.find((r) => value >= r.min) ?? RANKS[RANKS.length - 1];
}

const RadarTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { subject, value } = payload[0].payload;
  const rank = getRank(value);
  return (
    <div
      style={{
        background: "#FBFAF5",
        border: `1px solid ${rank.color}`,
        borderRadius: 4,
        padding: "6px 10px",
        fontFamily: "Space Mono, monospace",
        fontSize: 10,
        whiteSpace: "nowrap",
        boxShadow: "0 4px 12px rgba(22,20,15,0.12)",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: rank.color,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span style={{ color: "#6B6459" }}>{subject}</span>
      <span style={{ color: rank.color, fontWeight: 700 }}>{rank.label}</span>
      <span style={{ color: "#B8AFA6" }}>({value})</span>
    </div>
  );
};

// Colors each vertex by its own rank tier instead of a single flat color,
// so a standout point on the web reads at a glance.
const RankDot = (props) => {
  const { cx, cy, payload, active } = props;
  if (cx == null || cy == null) return null;
  const rank = getRank(payload.value);
  return (
    <circle
      cx={cx}
      cy={cy}
      r={active ? 5.5 : 3.5}
      fill={rank.color}
      stroke="#FBFAF5"
      strokeWidth={1.5}
    />
  );
};

export default function RadarChart({ data, overallLabel, maxValue = 100 }) {
  const computed = getOverallRank(data);
  const overall = overallLabel
    ? (RANKS.find((r) => r.label === overallLabel) ?? computed)
    : computed;

  const gradientId = "radar-fill-gradient";
  const glowId = "radar-glow";

  return (
    <motion.div
      className="relative flex-1 flex flex-col"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Overall badge — absolute top-left, now on a soft pill so it reads
          clearly over the chart grid regardless of where the shape sits */}
      <motion.div
        className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center py-1.5 px-3"
        initial={{ opacity: 0, y: -4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <span className="font-gothic text-4xl font-black leading-none" style={{ color: overall.color }}>
          {overall.label}
        </span>
        <span className="font-gothic text-[7px] uppercase tracking-[0.1em] text-ink-soft mt-0.5">Overall</span>
      </motion.div>

      {/* Chart fills all space */}
      <ResponsiveContainer width="100%" height={400} style={{ outline: "none" }}>
        <ReRadarChart data={data} cx="50%" cy="50%" outerRadius={130} style={{ outline: "none" }} tabIndex={-1}>
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#8B0000" stopOpacity={0.32} />
              <stop offset="100%" stopColor="#8B0000" stopOpacity={0.04} />
            </radialGradient>
            <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8B0000" floodOpacity="0.35" />
            </filter>
          </defs>

          <PolarGrid stroke="#D4C9BC" gridType="polygon" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontFamily: "Space Mono, monospace", fontSize: 9, fill: "#6B6459" }}
          />
          {/* Explicit 0–maxValue domain: without this recharts scales the
              web relative to whatever the highest value in `data` happens
              to be, which can make an average performer's shape look
              maxed-out. Hidden so it doesn't clutter the grid. */}
          <PolarRadiusAxis domain={[0, maxValue]} tick={false} axisLine={false} tickCount={5} />

          <Radar
            name="Skill"
            dataKey="value"
            stroke="#8B0000"
            fill={`url(#${gradientId})`}
            fillOpacity={1}
            strokeWidth={1.75}
            dot={<RankDot />}
            activeDot={<RankDot active />}
            style={{ outline: "none", filter: `url(#${glowId})` }}
            isAnimationActive
            animationDuration={700}
            animationEasing="ease-out"
            tabIndex={-1}
          />
          <Tooltip content={<RadarTooltip />} cursor={false} />
        </ReRadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}