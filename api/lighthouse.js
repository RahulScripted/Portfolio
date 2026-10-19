// Fetches real Lighthouse scores from Google PageSpeed Insights for the live
// site and returns the four category scores (0-100).
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=86400");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Site to audit + strategy (mobile|desktop). Override via query for testing.
  const url = req.query?.url || process.env.SITE_URL || "https://rahul-goswami-1002.vercel.app";
  const strategy = req.query?.strategy === "desktop" ? "desktop" : "mobile";

  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", strategy);
  for (const c of ["performance", "accessibility", "best-practices", "seo"]) {
    api.searchParams.append("category", c);
  }
  if (process.env.PAGESPEED_API_KEY) api.searchParams.set("key", process.env.PAGESPEED_API_KEY);

  try {
    const r = await fetch(api.toString());
    const data = await r.json();
    if (!r.ok) {
      return res.status(502).json({ error: data?.error?.message || "PageSpeed request failed" });
    }

    const cats = data.lighthouseResult?.categories ?? {};
    const pct = (c) => (cats[c] ? Math.round(cats[c].score * 100) : null);

    res.json({
      url,
      strategy,
      scores: {
        performance: pct("performance"),
        accessibility: pct("accessibility"),
        "best-practices": pct("best-practices"),
        seo: pct("seo"),
      },
      fetchedAt: new Date().toISOString(),
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
