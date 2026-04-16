import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

// --- LeetCode live fetch hook ---
const LC_USER = 'RahulScripted';
const STATS_URL = `https://leetcode-stats-api.herokuapp.com/${LC_USER}`;
const CONTEST_URL = `https://alfa-leetcode-api.onrender.com/${LC_USER}/contest`;

const LC_FALLBACK = {
  easy: 126, medium: 227, hard: 35, total: 388,
  rating: '1,709', rank: '298,779', contests: '6',
};

const useLeetCodeStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [statsRes, contestRes] = await Promise.all([
          fetch(STATS_URL).then(r => r.json()),
          fetch(CONTEST_URL).then(r => r.json()),
        ]);
        if (cancelled) return;
        if (statsRes.status === 'success') {
          setData({
            easy: statsRes.easySolved,
            medium: statsRes.mediumSolved,
            hard: statsRes.hardSolved,
            total: statsRes.totalSolved,
            rating: Math.round(contestRes.contestRating || 0).toLocaleString(),
            rank: (contestRes.contestGlobalRanking || 0).toLocaleString(),
            contests: String(contestRes.contestAttend || 0),
          });
        }
      } catch { /* use fallback */ }
      if (!cancelled) setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  return { lc: data || LC_FALLBACK, loading: loading && !data };
};

// --- Radar Chart ---
const radarStats = [
  { label: 'Development', value: 0.95 },
  { label: 'DSA', value: 0.9 },
  { label: 'Open Source', value: 0.7 },
  { label: 'Problem Solving', value: 0.82 },
  { label: 'Testing', value: 0.72 },
];

const RadarChart = () => {
  const padding = 50, chartSize = 220, size = chartSize + padding * 2;
  const cx = size / 2, cy = size / 2, levels = 5;
  const angleStep = (2 * Math.PI) / radarStats.length, maxR = chartSize / 2;
  const getPoint = (i, r) => ({ x: cx + r * Math.cos(angleStep * i - Math.PI / 2), y: cy + r * Math.sin(angleStep * i - Math.PI / 2) });
  const gridLines = Array.from({ length: levels }, (_, l) => radarStats.map((_, i) => getPoint(i, (maxR / levels) * (l + 1))).map(p => `${p.x},${p.y}`).join(' '));
  const dataPoints = radarStats.map((s, i) => getPoint(i, maxR * s.value));
  const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');
  const labelPoints = radarStats.map((s, i) => ({ ...getPoint(i, maxR + 32), label: s.label, value: Math.round(s.value * 100) }));

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      <defs>
        <radialGradient id="rGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(16,185,129,0.15)" /><stop offset="100%" stopColor="transparent" /></radialGradient>
        <linearGradient id="rFill" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(16,185,129,0.35)" /><stop offset="100%" stopColor="rgba(16,185,129,0.08)" /></linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={maxR} fill="url(#rGlow)" />
      {gridLines.map((pts, i) => <polygon key={i} points={pts} fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="0.8" />)}
      {radarStats.map((_, i) => { const p = getPoint(i, maxR); return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(16,185,129,0.06)" strokeWidth="0.8" />; })}
      <motion.polygon points={dataPolygon} fill="url(#rFill)" stroke="#10b981" strokeWidth="2" initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: 'backOut' }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {dataPoints.map((p, i) => (
        <g key={i}>
          <motion.circle cx={p.x} cy={p.y} r="5" fill="rgba(16,185,129,0.25)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + i * 0.08 }} />
          <motion.circle cx={p.x} cy={p.y} r="2.5" fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + i * 0.08, type: 'spring', stiffness: 300 }} />
        </g>
      ))}
      {labelPoints.map((p, i) => (
        <g key={i}>
          <motion.text x={p.x} y={p.y - 7} textAnchor="middle" dominantBaseline="middle" className="fill-zinc-400 font-mono" style={{ fontSize: '10px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 + i * 0.05 }}>{p.label}</motion.text>
          <motion.text x={p.x} y={p.y + 7} textAnchor="middle" dominantBaseline="middle" className="fill-emerald-400 font-mono font-bold" style={{ fontSize: '10px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + i * 0.05 }}>{p.value}%</motion.text>
        </g>
      ))}
    </svg>
  );
};

// --- Donut Chart ---
const DonutChart = ({ segments, total, label, size = 120, strokeWidth = 12 }) => {
  const numTotal = typeof total === 'number' ? total : segments.reduce((a, s) => a + s.value, 0);
  const radius = (size - strokeWidth) / 2, circumference = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#1a1a1a" strokeWidth={strokeWidth} />
        {segments.map((seg, i) => {
          const dash = (seg.value / numTotal) * circumference, cur = offset; offset += dash;
          return <motion.circle key={i} cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={seg.color} strokeWidth={strokeWidth} strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-cur} strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }} />;
        })}
        <text x={size / 2} y={size / 2 - 6} textAnchor="middle" className="fill-white text-lg font-bold font-mono">{total}</text>
        <text x={size / 2} y={size / 2 + 10} textAnchor="middle" className="fill-zinc-500 text-[9px] font-mono">{label}</text>
      </svg>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 w-full text-center">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: seg.color }} />
            <span className="text-[9px] text-zinc-500 font-mono">{seg.label}: {seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Build LeetCode platform from live/fallback data ---
const buildLeetCodePlatform = (lc) => ({
  id: 'leetcode', name: 'LeetCode', icon: assets.leetcode_icon,
  url: 'https://leetcode.com/u/RahulScripted/', color: '#FFC107',
  border: 'border-yellow-400/25', hoverBorder: 'hover:border-yellow-400/50',
  chart: {
    segments: [
      { label: 'Easy', value: lc.easy, color: '#4ADE80' },
      { label: 'Medium', value: lc.medium, color: '#FBBF24' },
      { label: 'Hard', value: lc.hard, color: '#F87171' },
    ],
    total: lc.total, label: 'Solved',
  },
  stats: [
    { label: 'Contest Rating', value: lc.rating },
    { label: 'Global Rank', value: lc.rank },
    { label: 'Contests', value: lc.contests },
    { label: 'Badges', value: '7' },
  ],
  badges: [
    { img: assets.Leetcode1, title: '50 Days Badge' }, { img: assets.Leetcode2, title: 'Oct Challenge' },
    { img: assets.Leetcode3, title: 'Nov Challenge' }, { img: assets.Leetcode4, title: 'Top 150' },
    { img: assets.Leetcode5, title: 'LeetCode 75' }, { img: assets.Leetcode6, title: 'Top 100 Liked' },
    { img: assets.Leetcode7, title: 'SQL 50' },
  ],
});

// --- Static platforms (no stable free APIs for CodeChef/GFG) ---
const staticPlatforms = [
  {
    id: 'codechef', name: 'CodeChef', icon: assets.codechef_icon, iconBg: true,
    url: 'https://www.codechef.com/users/explosion_king', color: '#FB923C',
    border: 'border-orange-400/25', hoverBorder: 'hover:border-orange-400/50',
    chart: { segments: [{ label: 'Solved', value: 1000, color: '#FB923C' }], total: '1000+', label: 'Problems' },
    stats: [{ label: 'Stars', value: '3★' }, { label: 'Peak Rating', value: '1689' }, { label: 'Contests', value: '18' }, { label: 'Problems', value: '2273' }],
    badges: [{ img: assets.CodeChef1, title: '100 Days Streak' }, { img: assets.CodeChef2, title: '1000+ Problems' }],
  },
  {
    id: 'gfg', name: 'GeeksForGeeks', icon: assets.gfg_icon, iconBg: true,
    url: 'https://www.geeksforgeeks.org/profile/goswamirap9x6', color: '#4ADE80',
    border: 'border-green-400/25', hoverBorder: 'hover:border-green-400/50',
    chart: { segments: [{ label: 'Solved', value: 329, color: '#4ADE80' }], total: '329+', label: 'Problems' },
    stats: [{ label: 'Coding Score', value: '1140' }, { label: 'Institute Rank', value: '#1' }, { label: 'Problems', value: '329+' }, { label: 'POTDs Solved', value: '237' }],
    badges: [],
  },
  {
    id: 'opensource', name: 'Open Source', icon: assets.holopin_icon,
    url: 'https://www.holopin.io/@goswami2001#', color: '#C084FC',
    border: 'border-purple-400/25', hoverBorder: 'hover:border-purple-400/50',
    chart: { segments: [{ label: 'GSSOC', value: 5, color: '#C084FC' }, { label: 'Hacktoberfest', value: 5, color: '#A855F7' }, { label: 'Postman', value: 1, color: '#7C3AED' }], total: 11, label: 'Badges' },
    stats: [{ label: 'GSSOC', value: '5 Badges' }, { label: 'Hacktoberfest', value: 'Level 4' }, { label: 'Postman', value: 'Expert' }],
    details: [
      'Contributed to 4+ open-source repos via GSSOC-Extd 2024',
      'Cleared all 4 levels in Hacktoberfest 2024',
      'Postman API Fundamentals Student Expert certified',
    ],
    badges: [
      { img: assets.GirlScript1, title: 'Explorer' }, { img: assets.GirlScript2, title: 'Adventurer' },
      { img: assets.GirlScript3, title: 'Champion' }, { img: assets.GirlScript4, title: 'Summit Seeker' },
      { img: assets.GirlScript5, title: 'TrailBlazer' }, { img: assets.Hacktoberfest0, title: 'Registered' },
      { img: assets.Hacktoberfest1, title: 'Level 1' }, { img: assets.Hacktoberfest2, title: 'Level 2' },
      { img: assets.Hacktoberfest3, title: 'Level 3' }, { img: assets.Hacktoberfest4, title: 'Level 4' },
      { img: assets.Postman, title: 'API Expert' },
    ],
  },
];

// --- Platform Card ---
const PlatformCard = ({ platform, idx, isMobile, loading }) => {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const showOverlay = isMobile ? tapped : hovered;

  return (
    <motion.div
      className={`relative bg-[#0a0a0a] ${platform.border} border rounded-2xl overflow-hidden transition-colors duration-300 ${platform.hoverBorder}`}
      style={{ minHeight: 'var(--card-h)' }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 + idx * 0.08, type: 'spring', stiffness: 80 }}
      onClick={() => { if (isMobile) setTapped(p => !p); }}
      onMouseEnter={() => { if (!isMobile) setHovered(true); }}
      onMouseLeave={() => { if (!isMobile) setHovered(false); }}
    >
      {/* Always visible content */}
      <div className={`p-5 flex flex-col items-center gap-3${loading ? ' animate-pulse' : ''}`}>
        <div className="flex items-center gap-3 w-full">
          <a href={platform.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            className={`w-10 h-10 rounded-full border overflow-hidden shrink-0 hover:scale-110 transition-transform ${platform.iconBg ? 'bg-white/10 p-1' : ''}`}
            style={{ borderColor: platform.color + '40' }}>
            <img src={platform.icon} alt={platform.name} className={`w-full h-full ${platform.iconBg ? 'object-contain' : 'object-cover'}`} />
          </a>
          <h3 className="text-sm font-bold font-mono" style={{ color: platform.color }}>{platform.name}</h3>
          {loading && <span className="text-[8px] text-zinc-600 font-mono ml-auto">fetching...</span>}
        </div>
        <DonutChart segments={platform.chart.segments} total={platform.chart.total} label={platform.chart.label} />

        {platform.details && (
          <ul className="w-full space-y-1.5 mt-1">
            {platform.details.map((d, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[10px] text-purple-300/80 font-mono leading-snug">
                <img src={assets.complete} alt="" className="w-2.5 h-2.5 mt-0.5 opacity-50 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="grid grid-cols-2 gap-2 w-full mt-1">
          {platform.stats.map((stat, sIdx) => (
            <div key={sIdx} className="bg-black/60 border border-white/5 rounded-lg p-2.5 text-center">
              <p className="text-zinc-600 text-[8px] font-mono uppercase tracking-wider">{stat.label}</p>
              <p className="text-base font-bold font-mono mt-0.5" style={{ color: platform.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay — slides up on hover */}
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-start p-5 gap-3 overflow-y-auto"
        initial={false}
        animate={{ y: showOverlay ? 0 : '100%' }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {platform.badges.length > 0 && (
          <>
            <p className="text-zinc-500 text-[9px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <img src={assets.Achievement} alt="" className="w-3 h-3 opacity-50" />
              Badges ({platform.badges.length})
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-2 w-full place-items-center">
              {platform.badges.map((badge, bIdx) => (
                <div key={bIdx} className="flex flex-col items-center gap-1 group cursor-pointer">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 overflow-hidden group-hover:scale-110 group-hover:shadow-[0_0_12px_-3px] transition-all"
                    style={{ borderColor: platform.color + '30' }}>
                    <img src={badge.img} alt={badge.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[8px] text-zinc-500 text-center max-w-[60px] leading-tight group-hover:text-zinc-300 transition-colors">{badge.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <a
          href={platform.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
          className="block text-center text-[10px] font-mono uppercase tracking-wider py-2 px-6 rounded-lg border transition-all hover:bg-white/5"
          style={{ color: platform.color, borderColor: platform.color + '25' }}
        >
          View Profile →
        </a>
      </motion.div>
    </motion.div>
  );
};

// --- Main ---
const CodingArena = () => {
  const isMobile = useIsMobile();
  const { lc, loading } = useLeetCodeStats();
  const platforms = [buildLeetCodePlatform(lc), ...staticPlatforms];

  return (
    <div className="min-h-screen bg-black px-4 py-10 md:px-10 lg:px-20">
      {/* Header */}
      <motion.div className="text-center mb-12" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-6xl font-bold font-mono">
          <span className="text-emerald-400">CODING</span>
          <span className="text-zinc-600 mx-3">ARENA</span>
        </h1>
        <motion.div className="w-20 h-0.5 bg-emerald-400/40 mx-auto mt-2 rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.6 }} />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ '--card-h': '400px' }}>
        {/* Overall Skills */}
        <motion.div
          className="bg-[#0a0a0a] border border-emerald-400/15 rounded-2xl p-5 self-start flex flex-col items-center justify-center"
          style={{ minHeight: 'var(--card-h)' }}
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 80 }}
        >
          <h3 className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-2 text-center flex items-center justify-center gap-2">
            Overall Skills
          </h3>
          <RadarChart />
        </motion.div>

        {platforms.map((platform, idx) => (
          <PlatformCard key={platform.id} platform={platform} idx={idx} isMobile={isMobile} loading={platform.id === 'leetcode' && loading} />
        ))}
      </div>
    </div>
  );
};

export default CodingArena;
