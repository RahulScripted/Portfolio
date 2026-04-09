import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const GROUND_OFFSET = 50;
const GRAVITY = 0.5;
const JUMP = -9;
const BAT_W = 56;
const BAT_H = 48;
const ICON_SIZE = 32;

const SKILL_ICONS = [
  { src: assets.react, name: 'React' },
  { src: assets.javascript, name: 'JavaScript' },
  { src: assets.css, name: 'CSS' },
  { src: assets.html, name: 'HTML' },
  { src: assets.TypeScript, name: 'TypeScript' },
  { src: assets.tailwind, name: 'Tailwind' },
  { src: assets.NextJs, name: 'Next.js' },
  { src: assets.git, name: 'Git' },
  { src: assets.figma, name: 'Figma' },
  { src: assets.mysql, name: 'MySQL' },
  { src: assets.gsapIcon, name: 'GSAP' },
  { src: assets.framermotion, name: 'Framer' },
  { src: assets.vercel, name: 'Vercel' },
  { src: assets.postman, name: 'Postman' },
  { src: assets.cpp, name: 'C++' },
];

// Bat pixel art frames (simplified from the SCSS box-shadow data)
// Each frame is an array of [x, y, color] where color: 0=outline(#54556b), 1=body(#202020), 2=eyes(#fff)
const BAT_COLORS = ['#54556b', '#202020', '#fff'];

function buildBatFrame1() {
  // Wings spread - simplified bat silhouette
  const pixels = [];
  const b = 1, a = 0, c = 2;
  // Body center
  for (let x = 20; x <= 35; x++) for (let y = 33; y <= 42; y++) pixels.push([x, y, b]);
  // Head
  for (let x = 22; x <= 33; x++) for (let y = 28; y <= 33; y++) pixels.push([x, y, b]);
  // Eyes
  pixels.push([24, 31, c], [25, 31, c], [29, 31, c], [30, 31, c]);
  // Ears
  pixels.push([22, 26, a], [23, 27, a], [32, 26, a], [31, 27, a]);
  // Left wing
  for (let x = 5; x <= 20; x++) for (let y = 20; y <= 28; y++) {
    if (y < 20 + (x - 5) * 0.5) continue;
    if (y > 28 - (20 - x) * 0.3) continue;
    pixels.push([x, y, b]);
  }
  for (let x = 8; x <= 20; x++) for (let y = 28; y <= 33; y++) pixels.push([x, y, b]);
  // Right wing
  for (let x = 35; x <= 50; x++) for (let y = 20; y <= 28; y++) {
    if (y < 20 + (50 - x) * 0.5) continue;
    if (y > 28 - (x - 35) * 0.3) continue;
    pixels.push([x, y, b]);
  }
  for (let x = 35; x <= 47; x++) for (let y = 28; y <= 33; y++) pixels.push([x, y, b]);
  // Wing tips outline
  for (let x = 3; x <= 7; x++) pixels.push([x, 22, a], [x, 23, a]);
  for (let x = 48; x <= 52; x++) pixels.push([x, 22, a], [x, 23, a]);
  // Feet
  pixels.push([24, 43, a], [25, 43, a], [30, 43, a], [31, 43, a]);
  return pixels;
}

function buildBatFrame2() {
  const pixels = [];
  const b = 1, a = 0, c = 2;
  // Body
  for (let x = 20; x <= 35; x++) for (let y = 33; y <= 42; y++) pixels.push([x, y, b]);
  // Head
  for (let x = 22; x <= 33; x++) for (let y = 28; y <= 33; y++) pixels.push([x, y, b]);
  // Eyes
  pixels.push([24, 31, c], [25, 31, c], [29, 31, c], [30, 31, c]);
  // Ears
  pixels.push([22, 26, a], [23, 27, a], [32, 26, a], [31, 27, a]);
  // Wings folded down
  for (let x = 10; x <= 20; x++) for (let y = 33; y <= 42; y++) pixels.push([x, y, b]);
  for (let x = 35; x <= 45; x++) for (let y = 33; y <= 42; y++) pixels.push([x, y, b]);
  // Wing tips
  for (let x = 7; x <= 10; x++) pixels.push([x, 40, a], [x, 41, a]);
  for (let x = 45; x <= 48; x++) pixels.push([x, 40, a], [x, 41, a]);
  // Feet
  pixels.push([24, 43, a], [25, 43, a], [30, 43, a], [31, 43, a]);
  return pixels;
}

const BAT_FRAMES = [buildBatFrame1(), buildBatFrame2()];

function drawBat(ctx, x, y, frame, scale = 0.9) {
  const pixels = BAT_FRAMES[frame % 2];
  const ps = scale;
  pixels.forEach(([px, py, ci]) => {
    ctx.fillStyle = BAT_COLORS[ci];
    ctx.fillRect(x + px * ps, y + py * ps, ps + 0.5, ps + 0.5);
  });
}

const SkillRunner = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [score, setScore] = useState(0);
  const [collected, setCollected] = useState([]);
  const [best, setBest] = useState(0);

  useEffect(() => {
    setBest(parseInt(localStorage.getItem('skillRunnerHighScore') || '0', 10));
    // Preload
    const imgs = {};
    SKILL_ICONS.forEach(s => { const i = new Image(); i.src = s.src; imgs[s.name] = i; });

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let W = container.offsetWidth;
    const H = 280;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      W = container.offsetWidth;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');

    const GROUND_Y = H - GROUND_OFFSET;
    const bat = { x: 70, y: GROUND_Y - BAT_H - 20, vy: 0, flying: true };
    let items = [], particles = [], floats = [];
    let clouds = Array.from({ length: 8 }, (_, i) => ({ x: i * 150, y: 10 + Math.random() * 40, w: 40 + Math.random() * 60, sp: 0.1 + Math.random() * 0.15 }));
    let buildings = Array.from({ length: 14 }, (_, i) => ({ x: i * 90, w: 20 + Math.random() * 40, h: 30 + Math.random() * 80, sp: 0.2 + Math.random() * 0.25 }));
    let frame = 0, sc = 0, spd = 3;
    let bestLocal = parseInt(localStorage.getItem('skillRunnerHighScore') || '0', 10);
    let collectedLocal = [];

    const hit = (ax, ay, aw, ah, bx, by, bw, bh) => ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;

    const burst = (x, y, color, n = 8) => {
      for (let i = 0; i < n; i++) {
        const ang = (Math.PI * 2 / n) * i;
        particles.push({ x, y, vx: Math.cos(ang) * (2 + Math.random() * 2), vy: Math.sin(ang) * (2 + Math.random() * 2), life: 25, color, sz: 1.5 + Math.random() * 2 });
      }
    };

    let animId;
    const loop = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // Sky
      const sky = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
      sky.addColorStop(0, '#05080f');
      sky.addColorStop(0.6, '#0a1020');
      sky.addColorStop(1, '#0f1729');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // Stars
      for (let i = 0; i < 60; i++) {
        const sx = (i * 131.7 + frame * 0.04) % W;
        const sy = (i * 59.3) % (GROUND_Y - 20);
        ctx.globalAlpha = 0.12 + Math.sin(frame * 0.012 + i * 1.7) * 0.1;
        ctx.fillStyle = '#fff';
        ctx.fillRect(sx, sy, 1 + (i % 3 === 0 ? 1 : 0), 1);
      }
      ctx.globalAlpha = 1;

      // Moon
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.beginPath();
      ctx.arc(W - 100, 50, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.beginPath();
      ctx.arc(W - 100, 50, 22, 0, Math.PI * 2);
      ctx.fill();

      // Clouds
      clouds.forEach(c => {
        c.x -= c.sp;
        if (c.x + c.w < 0) { c.x = W + 20; c.y = 8 + Math.random() * 45; }
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        ctx.beginPath();
        ctx.ellipse(c.x + c.w / 2, c.y, c.w / 2, 8, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Buildings
      buildings.forEach(b => {
        b.x -= b.sp;
        if (b.x + b.w < 0) { b.x = W + Math.random() * 80; b.h = 30 + Math.random() * 80; }
        const bg = ctx.createLinearGradient(b.x, GROUND_Y - b.h, b.x, GROUND_Y);
        bg.addColorStop(0, 'rgba(100,130,255,0.025)');
        bg.addColorStop(1, 'rgba(100,130,255,0.005)');
        ctx.fillStyle = bg;
        ctx.fillRect(b.x, GROUND_Y - b.h, b.w, b.h);
        ctx.fillStyle = 'rgba(255,220,100,0.06)';
        for (let wy = GROUND_Y - b.h + 5; wy < GROUND_Y - 3; wy += 9) {
          for (let wx = b.x + 3; wx < b.x + b.w - 3; wx += 7) {
            if (Math.sin(wx * 5 + wy * 3 + frame * 0.006) > 0.5) ctx.fillRect(wx, wy, 3, 3);
          }
        }
      });

      // Ground
      const gg = ctx.createLinearGradient(0, GROUND_Y, 0, H);
      gg.addColorStop(0, '#0f1729');
      gg.addColorStop(1, '#000');
      ctx.fillStyle = gg;
      ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);

      // Ground glow
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(129,140,248,0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(W, GROUND_Y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Ground dashes
      ctx.strokeStyle = 'rgba(129,140,248,0.06)';
      ctx.lineWidth = 1;
      for (let gx = -(frame * spd) % 20; gx < W; gx += 20) {
        ctx.beginPath();
        ctx.moveTo(gx, GROUND_Y + 8);
        ctx.lineTo(gx + 10, GROUND_Y + 8);
        ctx.stroke();
      }

      // Spawn items
      if (frame % 55 === 0) {
        const skill = SKILL_ICONS[Math.floor(Math.random() * SKILL_ICONS.length)];
        const yPos = GROUND_Y - ICON_SIZE - 20 - Math.random() * 90;
        items.push({ x: W + 10, y: yPos, ...skill, bob: Math.random() * Math.PI * 2 });
      }

      // AI: bat flies toward nearest item
      const nearest = items.reduce((best, item) => {
        if (item.x < bat.x || item.x > bat.x + 250) return best;
        if (!best || item.x < best.x) return item;
        return best;
      }, null);

      if (nearest) {
        const targetY = nearest.y + Math.sin(frame * 0.035 + nearest.bob) * 6 - BAT_H / 2;
        const dy = targetY - bat.y;
        bat.vy += dy * 0.02;
      } else {
        // Hover
        const hoverY = GROUND_Y - BAT_H - 40 + Math.sin(frame * 0.02) * 15;
        bat.vy += (hoverY - bat.y) * 0.01;
      }
      bat.vy *= 0.92;
      bat.y += bat.vy;
      // Clamp
      if (bat.y < 10) { bat.y = 10; bat.vy = 0; }
      if (bat.y > GROUND_Y - BAT_H) { bat.y = GROUND_Y - BAT_H; bat.vy = 0; }

      // Bat glow
      ctx.shadowColor = '#818cf8';
      ctx.shadowBlur = 18;
      ctx.fillStyle = 'rgba(129,140,248,0.04)';
      ctx.beginPath();
      ctx.arc(bat.x + BAT_W / 2, bat.y + BAT_H / 2, BAT_W * 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw bat
      const batFrame = Math.floor(frame / 8) % 2;
      drawBat(ctx, bat.x, bat.y - 10, batFrame, 1);

      // Items
      items = items.filter(item => {
        item.x -= spd;
        if (item.x < -ICON_SIZE) return false;
        const fy = item.y + Math.sin(frame * 0.035 + item.bob) * 6;

        // Glow ring
        ctx.strokeStyle = 'rgba(129,140,248,0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(item.x + ICON_SIZE / 2, fy + ICON_SIZE / 2, ICON_SIZE * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        // Icon
        const img = imgs[item.name];
        if (img?.complete) {
          ctx.shadowColor = '#818cf8';
          ctx.shadowBlur = 6;
          ctx.drawImage(img, item.x, fy, ICON_SIZE, ICON_SIZE);
          ctx.shadowBlur = 0;
        }

        if (hit(bat.x + 10, bat.y, BAT_W - 20, BAT_H, item.x, fy, ICON_SIZE, ICON_SIZE)) {
          sc++;
          collectedLocal = [...new Set([...collectedLocal, item.name])];
          burst(item.x + ICON_SIZE / 2, fy + ICON_SIZE / 2, '#818cf8', 10);
          floats.push({ x: item.x, y: fy, text: `+${item.name}`, color: '#a5b4fc', life: 35 });
          if (sc > bestLocal) { bestLocal = sc; localStorage.setItem('skillRunnerHighScore', bestLocal.toString()); }
          setScore(sc);
          setCollected([...collectedLocal]);
          setBest(bestLocal);
          return false;
        }
        return true;
      });

      // Particles
      particles = particles.filter(p => {
        p.x += p.vx; p.y += p.vy; p.vx *= 0.94; p.vy *= 0.94; p.life--;
        ctx.globalAlpha = p.life / 25;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        return p.life > 0;
      });

      // Float texts
      floats = floats.filter(f => {
        f.y -= 0.6; f.life--;
        ctx.globalAlpha = f.life / 35;
        ctx.fillStyle = f.color;
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(f.text, f.x + ICON_SIZE / 2, f.y);
        ctx.globalAlpha = 1;
        return f.life > 0;
      });

      // HUD
      ctx.textAlign = 'left';
      roundRect(ctx, 12, 10, 100, 26, 8);
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(129,140,248,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#a5b4fc';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(`🪙 ${sc}`, 22, 28);

      ctx.textAlign = 'right';
      roundRect(ctx, W - 112, 10, 100, 26, 8);
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(251,191,36,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 12px monospace';
      ctx.fillText(`🏆 ${bestLocal}`, W - 22, 28);

      spd = 3 + sc * 0.04;
      frame++;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const uniqueSkills = [...new Set(collected)];

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400/60 mb-1">Auto-Playing</h3>
          <h2 className="text-xl md:text-2xl font-bold font-mono">
            <span className="text-indigo-400">Skill</span>
            <span className="text-zinc-600"> Collector</span>
          </h2>
        </div>
        {score > 0 && <p className="text-indigo-300 font-mono text-sm">🪙 {score}</p>}
      </div>

      <div ref={containerRef} className="relative w-full rounded-2xl overflow-hidden border border-white/[0.05] shadow-[0_0_60px_-15px_rgba(129,140,248,0.08)]">
        <canvas ref={canvasRef} className="block w-full" style={{ height: 280 }} />
      </div>

      {uniqueSkills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-wider self-center mr-1">Collected:</span>
          {uniqueSkills.map(s => (
            <motion.span key={s} initial={{ scale: 0 }} animate={{ scale: 1 }} className="px-2 py-0.5 bg-indigo-400/[0.07] border border-indigo-400/15 rounded-md text-indigo-300/80 text-[10px] font-mono">
              {s}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export default SkillRunner;
