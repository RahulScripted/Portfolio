import StatCard from "./StatCard";
import leetcodeSvg  from "@assets/svgs/leetcode.svg";
import githubSvg    from "@assets/svgs/github.svg";
import codechefSvg  from "@assets/svgs/codechef-light.svg";

export default function OverviewGrid({ leetcode, github, codechef }) {
  const totalSolved = (leetcode?.total ?? 0) + (codechef?.solved ?? 0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
      <StatCard
        num="01"
        label="Problems Solved"
        value={totalSolved ? totalSolved.toLocaleString() : "—"}
        subIcon={leetcodeSvg}
        iconAlt="LeetCode"
        sub="LeetCode · CodeChef"
        accent
      />
      <StatCard
        num="02"
        label="GitHub Repos"
        value={github?.publicRepos ?? "—"}
        icon={githubSvg}
        iconAlt="GitHub"
        sub={`${github?.totalStars ?? 0} stars`}
      />
      <StatCard
        num="03"
        label="LeetCode Rating"
        value={leetcode?.rating || "—"}
        icon={leetcodeSvg}
        iconAlt="LeetCode"
        sub={leetcode?.globalRank ? `#${leetcode.globalRank.toLocaleString("en-IN")} global` : "—"}
      />
      <StatCard
        num="04"
        label="CodeChef Rating"
        value={codechef?.rating || "—"}
        icon={codechefSvg}
        iconAlt="CodeChef"
        stars={codechef?.stars ?? 0}
        sub={codechef?.stars ? `${codechef.stars}-star` : "—"}
      />
    </div>
  );
}
