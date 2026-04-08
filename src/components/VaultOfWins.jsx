import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { assets } from '../assets/assets';

const statsData = [
  {
    label: 'LeetCode',
    rating: '1712',
    detail: '388 problems solved',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/30',
    hoverBorder: 'hover:border-yellow-400/60',
    glow: 'hover:shadow-[0_0_20px_-5px_rgba(250,204,21,0.2)]',
    tooltip: '388 problems crushed • Peaked 1712 • Helped ship 3 loan modules at Mintifi in record time',
    icon: assets.leetcode_icon,
    url: 'https://leetcode.com/u/RahulScripted/',
  },
  {
    label: 'CodeChef',
    rating: '3★',
    detail: '1689 peak rating',
    color: 'text-orange-400',
    borderColor: 'border-orange-400/30',
    hoverBorder: 'hover:border-orange-400/60',
    glow: 'hover:shadow-[0_0_20px_-5px_rgba(251,146,60,0.2)]',
    tooltip: '3-star coder • 1000+ problems solved • 100-day streak badge earned',
    icon: assets.codechef_icon,
    url: 'https://www.codechef.com/users/explosion_king',
  },
  {
    label: 'GeeksForGeeks',
    rating: '#1',
    detail: 'Institute Rank • 329 problems',
    color: 'text-green-400',
    borderColor: 'border-green-400/30',
    hoverBorder: 'hover:border-green-400/60',
    glow: 'hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.2)]',
    tooltip: 'Top 1% Institute Rank → Earned GFG hoodie solving daily POTD for 6 months straight',
    icon: assets.gfg_icon,
    url: 'https://www.geeksforgeeks.org/profile/goswamirap9x6',
  },
  {
    label: 'Open Source',
    rating: '6+',
    detail: 'Badges (GSSOC + Hacktoberfest)',
    color: 'text-purple-400',
    borderColor: 'border-purple-400/30',
    hoverBorder: 'hover:border-purple-400/60',
    glow: 'hover:shadow-[0_0_20px_-5px_rgba(192,132,252,0.2)]',
    tooltip: 'GSSOC Contributor with 6 badges + Hacktoberfest all 4 levels cleared',
    icon: assets.holopin_icon,
    url: 'https://www.holopin.io/@goswami2001#',
  },
];

const badgesData = [
  { img: assets.Leetcode1, title: '50 Days Badge' },
  { img: assets.Leetcode4, title: 'Top 150' },
  { img: assets.CodeChef1, title: '100 Days Streak' },
  { img: assets.CodeChef2, title: '1000+ Problems' },
  { img: assets.Hacktoberfest4, title: 'Level 4' },
  { img: assets.Postman, title: 'API Expert' },
  { img: assets.GirlScript5, title: 'TrailBlazer' },
  { img: assets.GirlScript3, title: 'Champion' },
];

const swagsData = [
  {
    img: assets.GFG,
    title: 'GeeksForGeeks Swag',
    backPoints: [
      'Institute Rank #1 across the college',
      'Daily POTD streak for 6 months straight',
      '329+ problems solved on GFG',
    ],
  },
  {
    img: assets.Arcade,
    title: 'Google Cloud Swag',
    backPoints: [
      'Hands-on with Vertex AI & BigQuery',
      'Skills already applied at Mintifi',
      'Google Cloud Arcade certified',
    ],
  },
];


const VaultOfWins = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const hasConfettiFired = useRef(false);
  const [flippedSwag, setFlippedSwag] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.7, rotateY: -15, opacity: 0 },
        { scale: 1, rotateY: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );
      if (!hasConfettiFired.current) {
        setTimeout(() => {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#10b981', '#000000', '#F46C38', '#C5FF41'] });
        }, 400);
        hasConfettiFired.current = true;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-1 md:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

        <div
          ref={modalRef}
          className="relative w-full max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
            boxShadow: '0 0 80px -20px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(16,185,129,0.1)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

          <div className="p-6 lg:p-10">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:scale-110 hover:bg-white/10 transition-all cursor-pointer z-10 text-sm"
            >
              ✕
            </button>

            {/* Header */}
            <motion.div
              className="text-center mb-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-emerald-400">VAULT</span>
                <span className="text-zinc-600 mx-2">OF</span>
                <span className="text-emerald-400">WINS</span>
              </h2>
              <motion.div
                className="w-16 h-0.5 bg-emerald-400/40 mx-auto mt-3 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* 3-Column Grid */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

              {/* Left — Live Stats */}
              <div className="w-full lg:w-[30%] flex flex-col gap-3">
                <h3 className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Stats
                </h3>
                {statsData.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className={`relative bg-[#111111] border ${stat.borderColor} rounded-xl p-4 ${stat.hoverBorder} ${stat.glow} transition-all duration-300 cursor-pointer`}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 100 }}
                    onMouseEnter={() => setActiveTooltip(`stat-${idx}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a href={stat.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0 hover:border-emerald-400/50 transition-all">
                          <img src={stat.icon} alt={stat.label} className="w-full h-full object-cover" />
                        </a>
                        <div>
                          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">{stat.label}</p>
                          <p className={`text-3xl font-bold ${stat.color} mt-0.5 leading-tight`}>{stat.rating}</p>
                        </div>
                      </div>
                      <p className="text-zinc-600 text-[11px] text-right max-w-[110px] leading-snug">{stat.detail}</p>
                    </div>
                    <AnimatePresence>
                      {activeTooltip === `stat-${idx}` && (
                        <motion.div
                          className="absolute -bottom-1 left-3 right-3 translate-y-full bg-[#1a1a1a] border border-emerald-400/15 rounded-lg p-2.5 z-20 shadow-lg"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                        >
                          <p className="text-[11px] text-emerald-300/80 font-mono leading-relaxed">{stat.tooltip}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Enter Arena Button */}
                <motion.button
                  className="mt-2 w-full py-2.5 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono uppercase tracking-wider hover:bg-emerald-400/20 hover:border-emerald-400/40 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => { onClose(); navigate('/arena'); }}
                >
                  ⚔️ Enter Coding Arena
                </motion.button>
              </div>

              {/* Center — Swag Gallery */}
              <div className="w-full lg:w-[30%] flex flex-col items-center gap-3">
                <h3 className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">
                  Physical Proof
                </h3>
                {swagsData.map((swag, idx) => (
                  <motion.div
                    key={idx}
                    className="relative w-full cursor-pointer"
                    style={{ perspective: 1000 }}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.15, type: 'spring', stiffness: 80 }}
                    onMouseEnter={() => setFlippedSwag(idx)}
                    onMouseLeave={() => setFlippedSwag(null)}
                  >
                    <motion.div
                      className="relative w-full h-[186px]"
                      animate={{ rotateY: flippedSwag === idx ? 180 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div
                        className="bg-[#111111] rounded-2xl p-4 flex flex-col items-center hover:border-emerald-400/20 transition-colors h-full"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-emerald-400/25 shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]">
                          <img src={swag.img} alt={swag.title} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-white text-sm font-medium mt-3">{swag.title}</p>
                        <p className="text-zinc-600 text-[9px] mt-0.5 font-mono">Hover to flip</p>
                      </div>
                      <div
                        className="absolute inset-0 bg-[#111111] border border-emerald-400/25 rounded-2xl p-4 flex flex-col justify-center"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <h4 className="text-emerald-400 text-[9px] font-mono uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                          <img src={assets.star} alt="" className="w-3 h-3 opacity-60" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {swag.backPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1.5 text-[10px] text-emerald-300/80 font-mono leading-snug">
                              <img src={assets.complete} alt="" className="w-2.5 h-2.5 mt-0.5 opacity-50 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Right — Badges */}
              <div className="w-full lg:w-[40%] flex flex-col items-center gap-3">
                <h3 className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">
                  Top Badges
                </h3>

                <div className="grid grid-cols-4 gap-2.5 w-full mt-1">
                  {badgesData.map((badge, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center gap-1 cursor-pointer group"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.06, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.12 }}
                    >
                      <div className="w-11 h-11 md:w-13 md:h-13 rounded-full border-2 border-emerald-400/20 overflow-hidden group-hover:border-emerald-400/50 transition-all group-hover:shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]">
                        <img src={badge.img} alt={badge.title} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[7px] text-zinc-600 text-center leading-tight group-hover:text-zinc-400 transition-colors">{badge.title}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VaultOfWins;
