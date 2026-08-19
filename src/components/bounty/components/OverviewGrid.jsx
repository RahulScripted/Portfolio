import StatCard from "./StatCard";

export default function OverviewGrid({ leetcode, github, codechef }) {
  const totalSolved = (leetcode?.total ?? 0) + (codechef?.solved ?? 0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <StatCard label="Problems Solved" value={totalSolved ? totalSolved.toLocaleString() : "—"} sub="LeetCode, CodeChef" accent />
      <StatCard label="GitHub Repos" value={github?.publicRepos} sub={`${github?.totalStars ?? 0} stars`} />
      <StatCard label="LeetCode Rating" value={leetcode?.rating || "—"} sub={leetcode?.globalRank ? `#${leetcode.globalRank.toLocaleString("en-IN")} global` : "—"} />
      <StatCard label="CodeChef Rating" value={codechef?.rating || "—"} sub={`${"⭐".repeat(Math.min(codechef?.stars ?? 0, 7))} stars`} />
    </div>
  );
}
