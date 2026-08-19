export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const username = "RahulScripted";

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        profile { ranking }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      userContestRanking(username: $username) {
        rating
        globalRanking
        totalParticipants
        attendedContestsCount
      }
    }
  `;

  try {
    const r = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username } }),
    });
    const { data } = await r.json();
    const stats = data.matchedUser.submitStats.acSubmissionNum;
    const getCount = (d) => stats.find((s) => s.difficulty === d)?.count ?? 0;

    res.json({
      rating: Math.round(data.userContestRanking?.rating ?? 0),
      globalRank: data.userContestRanking?.globalRanking ?? 0,
      contests: data.userContestRanking?.attendedContestsCount ?? 0,
      profileRank: data.matchedUser.profile.ranking,
      easy: getCount("Easy"),
      medium: getCount("Medium"),
      hard: getCount("Hard"),
      total: getCount("All"),
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
