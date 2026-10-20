export const lighthouseScores = [
  { id: "performance",    label: "Performance",    score: 99 },
  { id: "accessibility",  label: "Accessibility",  score: 97 },
  { id: "best-practices", label: "Best Practices", score: 96 },
  { id: "seo",            label: "SEO",            score: 100 },
];

export const lighthouseMeasuredOn = "Oct 21, 2026";

// Which tool / strategy the scores were captured with.
export const lighthouseMeta = {
  tool: "Google PageSpeed Insights",
  strategy: "Mobile",
};

// Lighthouse score bands (Google thresholds) tuned to the paper/stamp palette.
export function bandColor(score) {
  if (score == null) return "#D4C9BC";
  if (score >= 90) return "#4E7B52"; // green
  if (score >= 50) return "#C4922A"; // amber
  return "#A6382C"; // stamp red
}
