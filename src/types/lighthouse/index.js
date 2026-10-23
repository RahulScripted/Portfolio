export const lighthouseScores = [
  { id: "performance",    label: "Performance",    score: 91 },
  { id: "accessibility",  label: "Accessibility",  score: 96 },
  { id: "best-practices", label: "Best Practices", score: 100 },
  { id: "seo",            label: "SEO",            score: 100 },
];

export const lighthouseMeasuredOn = "Oct 22, 2026";

// Which tool / strategy the scores were captured with.
export const lighthouseMeta = {
  tool: "Google PageSpeed Insights",
  strategy: "Mobile",
};

// Lighthouse score bands (Google thresholds) tuned to the paper/stamp palette.
// Used for the per-category score text so the number still signals the band.
export function bandColor(score) {
  if (score == null) return "#8A8277";
  if (score >= 90) return "#3C6141"; // dark green (AA contrast on paper)
  if (score >= 50) return "#8A6416"; // dark amber
  return "#9A3327"; // stamp red
}

// Distinct colour per category so the four donut slices read clearly, drawn
// from the site's muted editorial palette.
export const CATEGORY_COLORS = {
  performance: "#4E7B52",    // green
  accessibility: "#C4922A",  // amber/ochre
  "best-practices": "#4A6FA5", // slate blue
  seo: "#A6382C",            // stamp red
};

export function categoryColor(id) {
  return CATEGORY_COLORS[id] ?? "#6B6459";
}
