import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function devApiMiddleware() {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use('/api/leetcode', async (_req, res) => {
        try {
          const r = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: `query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                  profile { ranking }
                  submitStats { acSubmissionNum { difficulty count } }
                }
                userContestRanking(username: $username) {
                  rating globalRanking attendedContestsCount
                }
              }`,
              variables: { username: 'RahulScripted' },
            }),
          });
          const { data } = await r.json();
          const stats = data.matchedUser.submitStats.acSubmissionNum;
          const get = (d) => stats.find((s) => s.difficulty === d)?.count ?? 0;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            rating: Math.round(data.userContestRanking?.rating ?? 0),
            globalRank: data.userContestRanking?.globalRanking ?? 0,
            contests: data.userContestRanking?.attendedContestsCount ?? 0,
            profileRank: data.matchedUser.profile.ranking,
            easy: get('Easy'), medium: get('Medium'), hard: get('Hard'), total: get('All'),
          }));
        } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: e.message })); }
      });

      server.middlewares.use('/api/github', async (_req, res) => {
        try {
          const headers = { Accept: 'application/vnd.github+json' };
          const [userRes, reposRes, contribRes] = await Promise.all([
            fetch('https://api.github.com/users/RahulScripted', { headers }),
            fetch('https://api.github.com/users/RahulScripted/repos?per_page=100&type=owner', { headers }),
            fetch('https://github-contributions-api.jogruber.de/v4/RahulScripted?y=last'),
          ]);
          const user = await userRes.json();
          const repos = await reposRes.json();
          const contrib = await contribRes.json();
          const totalStars = Array.isArray(repos) ? repos.reduce((s, r) => s + r.stargazers_count, 0) : 0;
          const languages = Array.isArray(repos) ? [...new Set(repos.map((r) => r.language).filter(Boolean))] : [];
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            followers: user.followers ?? 0,
            publicRepos: user.public_repos ?? 0,
            totalStars, languages,
            contributions: contrib.total ?? {},
            weeks: contrib.contributions ?? [],
          }));
        } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: e.message })); }
      });

      server.middlewares.use('/api/codechef', async (_req, res) => {
        try {
          const r = await fetch('https://www.codechef.com/users/explosion_king', {
            headers: { 'User-Agent': 'Mozilla/5.0' },
          });
          const html = await r.text();
          const { load } = await import('cheerio');
          const $ = load(html);
          const rating = parseInt($('.rating-number').first().text().trim()) || 0;
          const stars = $('.rating-star span').length || 0;
          const globalRankText = $('.rating-ranks ul li:first-child strong').first().text().trim();
          const globalRank = parseInt(globalRankText) || globalRankText || 'Inactive';
          let solved = 0;
          $('h3').each((_, el) => {
            const m = $(el).text().match(/Total Problems Solved:\s*(\d+)/);
            if (m) solved = parseInt(m[1]);
          });
          const contests = $('.rating-data-section.problems-solved .content').length || 0;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ rating, stars, globalRank, solved, contests }));
        } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: e.message })); }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devApiMiddleware()],
  server: {
    hmr: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@animations': path.resolve(__dirname, 'src/animations'),
    },
  },
  optimizeDeps: {
    include: ['lottie-web'],
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message?.includes('eval')) return;
        warn(warning);
      },
    },
  },
})
