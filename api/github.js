export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "RahulScripted";
  const headers = {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
  };

  try {
    const [userRes, reposRes, contribRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, { headers }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
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

    // Fill in any missing recent days using GitHub Events API
    // The contributions API often lags 1-3 days behind
    if (Array.isArray(events) && days.length > 0) {
      const lastDate = days[days.length - 1]?.date;
      if (lastDate) {
        const today = new Date().toISOString().split("T")[0];
        if (lastDate < today) {
          // Count push events per day for dates after lastDate
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

    res.json({
      followers: user.followers ?? 0,
      publicRepos: user.public_repos ?? 0,
      totalStars,
      languages,
      contributions: contrib.total ?? {},
      weeks: days,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
