import { useState, useEffect, useCallback } from "react";

const BASE = import.meta.env.DEV ? "" : "";

async function safeFetch(url) {
  try {
    const r = await fetch(url);
    const text = await r.text();
    if (!r.ok) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default function useStatsData() {
  const [data, setData] = useState({
    leetcode: null,
    github: null,
    codechef: null,
    loading: true,
  });
  const currentYear = String(new Date().getFullYear());
  const [githubYear, setGithubYear] = useState(currentYear);
  const [githubLoading, setGithubLoading] = useState(false);

  useEffect(() => {
    Promise.all([
      safeFetch(`${BASE}/api/leetcode`),
      safeFetch(`${BASE}/api/github?year=${currentYear}`),
      safeFetch(`${BASE}/api/codechef`),
    ]).then(([leetcode, github, codechef]) => {
      setData({ leetcode, github, codechef, loading: false });
    });
  }, [currentYear]);

  const selectGithubYear = useCallback(
    (year) => {
      if (year === githubYear) return;
      setGithubYear(year);
      setGithubLoading(true);
      safeFetch(`${BASE}/api/github?year=${year}`).then((github) => {
        if (github) setData((prev) => ({ ...prev, github }));
        setGithubLoading(false);
      });
    },
    [githubYear]
  );

  return { ...data, githubYear, githubLoading, selectGithubYear, currentYear };
}
