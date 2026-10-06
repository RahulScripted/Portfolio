export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=1800");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "RahulScripted";
  const headers = {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
  };

  const contribQuery = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  // Map GitHub's enum levels to the 0-4 scale the grid expects
  const LEVEL_MAP = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  };

  try {
    const [userRes, reposRes, graphRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`, { headers }),
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ query: contribQuery, variables: { login: username } }),
      }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const graph = await graphRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((s, r) => s + r.stargazers_count, 0)
      : 0;

    const languages = Array.isArray(repos)
      ? [...new Set(repos.map((r) => r.language).filter(Boolean))]
      : [];

    const calendar =
      graph?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
    const days = calendar.flatMap((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount ?? 0,
        level: LEVEL_MAP[d.contributionLevel] ?? 0,
      }))
    );

    const totalContributions = days.reduce((s, d) => s + d.count, 0);

    res.json({
      followers: user.followers ?? 0,
      publicRepos: user.public_repos ?? 0,
      totalStars,
      languages,
      contributions: { lastYear: totalContributions },
      weeks: days,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
