import { useState, useEffect } from "react";

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

  useEffect(() => {
    Promise.all([
      safeFetch(`${BASE}/api/leetcode`),
      safeFetch(`${BASE}/api/github`),
      safeFetch(`${BASE}/api/codechef`),
    ]).then(([leetcode, github, codechef]) => {
      setData({ leetcode, github, codechef, loading: false });
    });
  }, []);

  return data;
}
