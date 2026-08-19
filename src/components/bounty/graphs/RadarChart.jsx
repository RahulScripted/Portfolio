import { motion } from "framer-motion";
import {
  RadarChart as ReRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
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
    <div style={{
      background: "#FBFAF5",
      border: `1px solid ${rank.color}`,
      padding: "5px 10px",
      fontFamily: "Space Mono, monospace",
      fontSize: 10,
      whiteSpace: "nowrap",
    }}>
      <span style={{ color: "#6B6459" }}>{subject}</span>
      <span
        style={{ color: rank.color, fontWeight: 700, marginLeft: 8 }}
      >
        {rank.label}
      </span>
      <span style={{ color: "#B8AFA6", marginLeft: 4 }}>({value})</span>
    </div>
  );
};

export default function RadarChart({ data, overallLabel }) {
  const computed = getOverallRank(data);
  const overall = overallLabel
    ? (RANKS.find((r) => r.label === overallLabel) ?? computed)
    : computed;

  return (
    <motion.div
      className="relative flex-1 flex flex-col"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Overall badge — absolute top-left */}
      <div
        className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center px-3 py-1.5"
      >
        <span className="font-gothic text:xl md:text-4xl font-black leading-none" style={{ color: overall.color }}>
          {overall.label}
        </span>
        <span className="font-gothic text-[7px] uppercase tracking-[0.1em] text-ink-soft mt-0.5">Overall</span>
      </div>

      {/* Chart fills all space */}
      <ResponsiveContainer width="100%" height={400}>
        <ReRadarChart data={data} cx="50%" cy="50%" outerRadius={130}>
          <PolarGrid stroke="#D4C9BC" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontFamily: "Space Mono, monospace", fontSize: 9, fill: "#6B6459" }}
          />
          <Radar
            name="Skill"
            dataKey="value"
            stroke="#8B0000"
            fill="#8B0000"
            fillOpacity={0.15}
            strokeWidth={1.5}
            dot={{ r: 3, fill: "#8B0000", strokeWidth: 0 }}
            activeDot={{ r: 5, fill: "#8B0000", strokeWidth: 0 }}
          />
          <Tooltip
            content={<RadarTooltip />}
            cursor={false}
          />
        </ReRadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
