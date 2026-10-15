export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "RahulScripted";
  const headers = {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
  };

  const rawYear = Array.isArray(req.query?.year) ? req.query.year[0] : req.query?.year;
  const isYear = /^\d{4}$/.test(rawYear ?? "");
  const yParam = isYear ? rawYear : "last";

  try {
    const [userRes, reposRes, contribRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, { headers }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${yParam}`),
      // Events API gives us recent push events to fill the gap
      fetch(`https://api.github.com/users/${username}/events?per_page=100`, { headers }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const contrib = await contribRes.json();
    const events = await eventsRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((s, r) => s + r.stargazers_count, 0)
      : 0;

    const languages = Array.isArray(repos)
      ? [...new Set(repos.map((r) => r.language).filter(Boolean))]
      : [];

    // Get contribution days from the external API
    let days = contrib.contributions ?? [];

    if (!isYear && Array.isArray(events) && days.length > 0) {
      const lastDate = days[days.length - 1]?.date;
      if (lastDate) {
        const today = new Date().toISOString().split("T")[0];
        if (lastDate < today) {
          const recentCounts = {};
          for (const event of events) {
            if (event.type === "PushEvent" && event.created_at) {
              const eventDate = event.created_at.split("T")[0];
              if (eventDate > lastDate && eventDate <= today) {
                recentCounts[eventDate] = (recentCounts[eventDate] || 0) + (event.payload?.commits?.length || 1);
              }
            }
          }

          // Append missing days
          const cursor = new Date(lastDate + "T00:00:00Z");
          while (true) {
            cursor.setUTCDate(cursor.getUTCDate() + 1);
            const dateStr = cursor.toISOString().split("T")[0];
            if (dateStr > today) break;
            const count = recentCounts[dateStr] || 0;
            const level = count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 10 ? 3 : 4;
            days.push({ date: dateStr, count, level });
          }
        }
      }
    }

    const startYear = user.created_at ? new Date(user.created_at).getUTCFullYear() : null;
    const nowYear = new Date().getUTCFullYear();
    const years = startYear
      ? Array.from({ length: nowYear - startYear + 1 }, (_, i) => String(nowYear - i))
      : [...new Set((days ?? []).map((d) => d.date?.slice(0, 4)).filter(Boolean))].sort((a, b) => b - a);

    res.json({
      followers: user.followers ?? 0,
      publicRepos: user.public_repos ?? 0,
      totalStars,
      languages,
      contributions: contrib.total ?? {},
      weeks: days,
      year: isYear ? rawYear : "last",
      years,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
