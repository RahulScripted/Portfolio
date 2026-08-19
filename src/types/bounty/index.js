import jsSvg  from "@assets/svgs/javascript.svg";
import tsSvg  from "@assets/svgs/typescript.svg";
import cppSvg from "@assets/svgs/cplusplus.svg";
import cssSvg from "@assets/svgs/css3.svg";

/** Skill radar data — values map to rank thresholds */
export const RADAR_DATA = [
  { subject: "Frontend", value: 92 }, // SS+
  { subject: "Backend",  value: 72 }, // S
  { subject: "DSA",      value: 84 }, // SS
  { subject: "Mobile",   value: 60 }, // A
  { subject: "DevOps",   value: 58 }, // A
  { subject: "UI/UX",    value: 74 }, // S
];

/** Overall rank is SS (weighted: Frontend SS+ + DSA SS anchor the average up) */
export const RADAR_OVERALL = "SS";

/** Top language icons shown in GitHub stats tile */
export const LANG_ICONS = [
  { src: jsSvg,  alt: "JavaScript" },
  { src: tsSvg,  alt: "TypeScript" },
  { src: cppSvg, alt: "C++" },
  { src: cssSvg, alt: "CSS" },
];

/**
 * Rank thresholds — shared between RadarChart and any future rank display
 * @type {{ label: string, min: number, color: string }[]}
 */
export const RANKS = [
  { label: "SSS", min: 95, color: "#8B0000" },
  { label: "SS+", min: 88, color: "#A6382C" },
  { label: "SS",  min: 80, color: "#C4922A" },
  { label: "S",   min: 70, color: "#6B8F5E" },
  { label: "A",   min: 55, color: "#1968d5" },
  { label: "B",   min: 0,  color: "#6B6459" },
];
