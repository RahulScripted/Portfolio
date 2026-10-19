// Lighthouse / PageSpeed Insights categories for the portfolio.
// Scores are fetched live from /api/lighthouse (Google PageSpeed Insights);
// `score: null` here is just the pre-fetch placeholder.
export const lighthouseScores = [
  { id: "performance",    label: "Performance",    score: null },
  { id: "accessibility",  label: "Accessibility",  score: null },
  { id: "best-practices", label: "Best Practices", score: null },
  { id: "seo",            label: "SEO",            score: null },
];

// Live report (PageSpeed Insights) for the deployed site.
export const lighthouseReportUrl =
  "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Frahul-goswami-1002.vercel.app";

// Which tool / strategy the scores were captured with.
export const lighthouseMeta = {
  tool: "Google PageSpeed Insights",
  strategy: "Mobile",
};
