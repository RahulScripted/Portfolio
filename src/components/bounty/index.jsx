import { useRef } from "react";
import useStatsData from "./hooks/useStatsData";
import SectionHeader from "@components/shared/SectionHeader";
import OverviewGrid from "./components/OverviewGrid";
import PlatformCard from "./components/PlatformCard";
import TechMastery from "./components/TechMastery";
import ContributionSkyline, { buildGrid, computeStats, dayMs } from "./graphs/ContributionSkyline";
import RadarChart from "./graphs/RadarChart";
import EmptyState from "@components/shared/EmptyState";
import FluidDropdown from "@components/shared/FluidDropdown";
import PyramidLoader from "@components/shared/PyramidLoader";
import { RADAR_DATA, RADAR_OVERALL, LANG_ICONS } from "@types/bounty";

import leetcodeSvg  from "@assets/svgs/leetcode.svg";
import githubSvg    from "@assets/svgs/github.svg";
import codechefSvg  from "@assets/svgs/codechef-light.svg";

function Skeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 animate-pulse" aria-label="Loading stats">
      {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-rule" />)}
    </div>
  );
}

export default function Bounty() {
  const { leetcode, github, codechef, loading, githubYear, githubLoading, selectGithubYear, currentYear } = useStatsData();
  const days = github?.weeks ?? [];

  const yearOptions = github?.years ?? [];
  const selectedYear = githubYear;

  const currentStreakRef = useRef(null);
  if (selectedYear === currentYear && days.length > 0) {
    const endMs = dayMs(new Date().toISOString().slice(0, 10));
    const grid = buildGrid(days, endMs);
    currentStreakRef.current = computeStats(grid.cells).current;
  }
  const currentStreak = currentStreakRef.current;

  return (
    <section id="bounty" className="scroll-mt-[50px] py-14 sm:py-[76px] px-3 sm:px-5" aria-label="Coding stats dashboard">
      <div className="max-w-[1380px] mx-auto" aria-live="polite" aria-atomic="false">

        {/* Header */}
        <SectionHeader
          eyebrow="Bounty Board"
          title="The Bounty Board"
          aside="Live stats — refreshed every hour"
        />

        <p className="mb-8 font-mono text-[13px] text-ink-soft max-w-[480px]">
          A live dashboard of coding activity across LeetCode, GitHub and CodeChef.
        </p>

        {/* Overview */}
        {loading ? <Skeleton /> : (
          <OverviewGrid leetcode={leetcode} github={github} codechef={codechef} />
        )}

        {/* 3-column: Radar | CodeChef | LeetCode — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 items-stretch">

          {/* Skill Radar */}
          <div className="relative bg-paper-warm p-4 flex flex-col">
            <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />
            <div className="font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft mb-2">Skill Radar</div>
            <RadarChart data={RADAR_DATA} overallLabel={RADAR_OVERALL} />
          </div>

          {/* CodeChef */}
          <PlatformCard
            icon={codechefSvg} name="CodeChef" code="CC-001"
            empty={!loading && !codechef}
            link="https://www.codechef.com/users/explosion_king"
            easy={codechef?.solved ? Math.round(codechef.solved * 0.45) : undefined}
            medium={codechef?.solved ? Math.round(codechef.solved * 0.38) : undefined}
            hard={codechef?.solved ? Math.round(codechef.solved * 0.17) : undefined}
            stats={[
              { label: "Rating",   value: codechef?.rating?.toLocaleString("en-IN") },
              { label: "Stars",    value: codechef?.stars ? "⭐".repeat(Math.min(codechef.stars, 7)) : "—" },
              { label: "Contests", value: codechef?.contests },
              { label: "Solved",   value: codechef?.solved },
            ]}
          />

          {/* LeetCode */}
          <PlatformCard
            icon={leetcodeSvg} name="LeetCode" code="LC-002"
            empty={!loading && !leetcode}
            link="https://leetcode.com/RahulScripted"
            easy={leetcode?.easy} medium={leetcode?.medium} hard={leetcode?.hard}
            stats={[
              { label: "Rating",   value: leetcode?.rating?.toLocaleString("en-IN") },
              { label: "Contests", value: leetcode?.contests },
              { label: "Rank",     value: leetcode?.globalRank ? `#${leetcode.globalRank.toLocaleString("en-IN")}` : "—" },
              { label: "Total",    value: leetcode?.total },
            ]}
          />
        </div>

        {/* GitHub row — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">

          {/* Contribution grid */}
          <div className="relative lg:col-span-2 bg-paper-warm p-2.5 sm:p-4">
            <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <img src={githubSvg} alt="GitHub" className="w-5 h-5" />
                <span className="font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft">
                  GitHub Contributions
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {yearOptions.length > 0 && (
                  <FluidDropdown
                    ariaLabel="Select contribution year"
                    className="w-[88px]"
                    value={selectedYear}
                    disabled={githubLoading}
                    onChange={selectGithubYear}
                    options={yearOptions.map((y) => ({ value: y, label: y }))}
                  />
                )}
                <a
                  href="https://github.com/RahulScripted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-gothic text-[9px] uppercase tracking-[0.1em] text-stamp border border-stamp px-2 py-0.5 hover:bg-stamp hover:text-paper transition-colors flex items-center gap-1"
                >
                  Profile
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-4">
              {loading || githubLoading ? (
                <PyramidLoader className="min-h-[340px]" />
              ) : days.length > 0 ? (
                <ContributionSkyline
                  data={days}
                  endDate={selectedYear === currentYear ? new Date().toISOString().slice(0, 10) : `${selectedYear}-12-31`}
                  defaultView="3d"
                  showToggle
                  showStats
                  showLegend
                  currentStreak={currentStreak}
                  title={
                    <>
                      <span className="font-semibold tabular-nums">
                        {(
                          github?.contributions?.[selectedYear] ??
                          github?.contributions?.lastYear ??
                          0
                        ).toLocaleString()}
                      </span>{" "}
                      contributions in {selectedYear || "the last year"}
                    </>
                  }
                />
              ) : (
                <EmptyState
                  message="Couldn't load contributions"
                  hint="GitHub activity isn't available right now. It'll show up here once the data loads."
                />
              )}
            </div>
          </div>

          {/* GitHub stats + TechMastery */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-paper-warm p-4">
              <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80" />
              <div className="font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft mb-3">GitHub Stats</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Repos",     value: github?.publicRepos },
                  { label: "Stars",     value: github?.totalStars },
                  { label: "Followers", value: github?.followers },
                ].map(({ label, value }) => (
                  <div key={label} className="p-2">
                    <div className="font-gothic text-[8px] uppercase tracking-[0.1em] text-ink-soft">{label}</div>
                    <div className="font-display text-xl font-bold text-ink">{value ?? "—"}</div>
                  </div>
                ))}
                <div className="p-2">
                  <div className="font-gothic text-[8px] uppercase tracking-[0.1em] text-ink-soft mb-1.5">Top Languages</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {LANG_ICONS.map(({ src, alt }) => (
                      <img key={alt} src={src} alt={alt} title={alt} className="w-5 h-5 object-contain" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <TechMastery />
          </div>
        </div>
      </div>
    </section>
  );
}
