import * as cheerio from "cheerio";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "explosion_king";

  try {
    const r = await fetch(`https://www.codechef.com/users/${username}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const html = await r.text();
    const $ = cheerio.load(html);

    const rating = parseInt($(".rating-number").first().text().trim()) || 0;
    const stars = $(".rating-star span").length || 0;

    const globalRankText = $(".rating-ranks ul li:first-child strong").first().text().trim();
    const globalRank = parseInt(globalRankText) || globalRankText || "Inactive";

    let solved = 0;
    $("h3").each((_, el) => {
      const txt = $(el).text();
      const m = txt.match(/Total Problems Solved:\s*(\d+)/);
      if (m) solved = parseInt(m[1]);
    });

    const contests = $(".rating-data-section.problems-solved .content").length || 0;

    res.json({ rating, stars, globalRank, solved, contests, username });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
