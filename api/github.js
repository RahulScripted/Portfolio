export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "RahulScripted";
  const headers = {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
  };

  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, { headers }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last&_t=${Date.now()}`),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const contrib = await contribRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((s, r) => s + r.stargazers_count, 0)
      : 0;

    const languages = Array.isArray(repos)
      ? [...new Set(repos.map((r) => r.language).filter(Boolean))]
      : [];

    res.json({
      followers: user.followers ?? 0,
      publicRepos: user.public_repos ?? 0,
      totalStars,
      languages,
      contributions: contrib.total ?? {},
      weeks: contrib.contributions ?? [],
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
