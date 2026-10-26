// Category labels shared by both strategies.
const CATEGORIES = [
  { id: "performance", label: "Performance" },
  { id: "accessibility", label: "Accessibility" },
  { id: "best-practices", label: "Best Practices" },
  { id: "seo", label: "SEO" },
];

const withLabels = (scores) => CATEGORIES.map((c) => ({ ...c, score: scores[c.id] }));

// Two measured strategies — update the numbers after each PageSpeed run.
export const lighthouseReports = [
  {
    id: "desktop",
    label: "Desktop",
    scores: withLabels({ performance: 90, accessibility: 96, "best-practices": 100, seo: 100 }),
  },
  {
    id: "mobile",
    label: "Mobile",
    scores: withLabels({ performance: 80, accessibility: 96, "best-practices": 100, seo: 100 }),
  },
];

export const lighthouseMeasuredOn = "Oct 26, 2026";

export const lighthouseMeta = {
  tool: "Google PageSpeed Insights",
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
