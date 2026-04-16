import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const GND_OFF = 50;
const BAT_W = 56, BAT_H = 48;
const ICON_SIZE = 32;
const BAT_COLORS = ['#54556b', '#202020', '#fff'];

const GOOD_SKILLS = [
  { src: assets.react,        name: 'React' },
  { src: assets.javascript,   name: 'JavaScript' },
  { src: assets.css,          name: 'CSS' },
  { src: assets.html,         name: 'HTML' },
  { src: assets.TypeScript,   name: 'TypeScript' },
  { src: assets.tailwind,     name: 'Tailwind' },
  { src: assets.NextJs,       name: 'Next.js' },
  { src: assets.git,          name: 'Git' },
  { src: assets.figma,        name: 'Figma' },
  { src: assets.mysql,        name: 'MySQL' },
  { src: assets.gsapIcon,     name: 'GSAP' },
  { src: assets.framermotion, name: 'Framer' },
  { src: assets.vercel,       name: 'Vercel' },
  { src: assets.postman,      name: 'Postman' },
  { src: assets.cpp,          name: 'C++' },
  { src: assets.sql,          name: 'SQL' },
  { src: assets.antdesign,    name: 'Ant Design' },
  { src: assets.materialui,   name: 'Material UI' },
  { src: assets.github,       name: 'GitHub' },
  { src: assets.jest,          name: 'Jest' },
];

const TRAP_SKILLS = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',  name: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',      name: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', name: 'Go' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',  name: 'Kotlin' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',    name: 'Swift' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',      name: 'Ruby' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',        name: 'PHP' },
];

// ─── Pixel bat frames ─────────────────────────────────────────────────────────
function buildBatFrame(wingUp) {
  const px = [], b = 1, a = 0, c = 2;
  for (let x = 20; x <= 35; x++) for (let y = 33; y <= 42; y++) px.push([x,y,b]);
  for (let x = 22; x <= 33; x++) for (let y = 27; y <= 33; y++) px.push([x,y,b]);
  px.push([24,30,c],[25,30,c],[29,30,c],[30,30,c]);
  px.push([22,25,a],[23,26,a],[32,25,a],[31,26,a]);
  px.push([24,43,a],[25,44,a],[30,43,a],[31,44,a]);
  if (wingUp) {
    for (let x=4;x<=20;x++) for (let y=18;y<=30;y++) { if(y<18+(x-4)*0.6) continue; px.push([x,y,b]); }
    for (let x=35;x<=51;x++) for (let y=18;y<=30;y++) { if(y<18+(51-x)*0.6) continue; px.push([x,y,b]); }
    px.push([3,22,a],[4,21,a],[5,20,a],[50,22,a],[51,21,a],[52,20,a]);
  } else {
    for (let x=8;x<=20;x++) for (let y=33;y<=44;y++) px.push([x,y,b]);
    for (let x=35;x<=47;x++) for (let y=33;y<=44;y++) px.push([x,y,b]);
    px.push([6,42,a],[7,43,a],[8,44,a],[47,42,a],[48,43,a],[49,44,a]);
  }
  return px;
}
const BAT_FRAMES = [buildBatFrame(true), buildBatFrame(false)];
function drawBat(ctx, x, y, fi, tint) {
  BAT_FRAMES[fi%2].forEach(([px,py,ci]) => {
    ctx.fillStyle = tint || BAT_COLORS[ci];
    ctx.fillRect(x+px, y+py, 1.5, 1.5);
  });
}

// ─── Hand-drawn SVG-path shapes (no emoji) ────────────────────────────────────

/** Danger bolt — sharp lightning bolt drawn with canvas paths */
function drawDangerBolt(ctx, cx, cy, size, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  // lightning bolt shape
  ctx.moveTo(cx + size*0.15, cy - size*0.5);
  ctx.lineTo(cx - size*0.1,  cy - size*0.05);
  ctx.lineTo(cx + size*0.08, cy - size*0.05);
  ctx.lineTo(cx - size*0.15, cy + size*0.5);
  ctx.lineTo(cx + size*0.1,  cy + size*0.05);
  ctx.lineTo(cx - size*0.08, cy + size*0.05);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Skull shape drawn with canvas arcs + paths */
function drawSkull(ctx, cx, cy, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  // cranium
  ctx.beginPath();
  ctx.arc(cx, cy - size*0.05, size*0.42, Math.PI, 0);
  ctx.lineTo(cx + size*0.42, cy + size*0.28);
  ctx.lineTo(cx - size*0.42, cy + size*0.28);
  ctx.closePath();
  ctx.fill();
  // jaw teeth
  ctx.fillStyle = '#0a1020';
  const tw = size*0.12, th = size*0.14;
  for (let i = -1; i <= 1; i++) {
    ctx.fillRect(cx + i*size*0.16 - tw/2, cy + size*0.14, tw, th);
  }
  // eyes
  ctx.fillStyle = '#0a1020';
  ctx.beginPath(); ctx.arc(cx - size*0.15, cy - size*0.08, size*0.1, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx + size*0.15, cy - size*0.08, size*0.1, 0, Math.PI*2); ctx.fill();
  ctx.restore();
}

/** Pixel coin — 9×9 flat gold grid, no glow */
function drawPixelCoin(ctx, cx, cy, r) {
  const grid = [
    [0,0,1,1,1,1,1,0,0],
    [0,1,1,0,0,0,1,1,0],
    [1,1,0,0,1,0,0,1,1],
    [1,0,0,1,1,1,0,0,1],
    [1,0,1,1,1,1,1,0,1],
    [1,0,0,1,1,1,0,0,1],
    [1,1,0,0,1,0,0,1,1],
    [0,1,1,0,0,0,1,1,0],
    [0,0,1,1,1,1,1,0,0],
  ];
  const ps = (r * 2) / 9;
  grid.forEach((row, ry) => row.forEach((on, rx) => {
    if (!on) return;
    ctx.fillStyle = ry <= 1 ? '#ffe566' : ry >= 7 ? '#c8960a' : '#f5c518';
    ctx.fillRect(cx - r + rx * ps, cy - r + ry * ps, ps, ps);
  }));
}

/** Pixel trophy cup — 11×11 grid, no border box */
function drawPixelCup(ctx, cx, cy, size) {
  const grid = [
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0],
  ];
  const ps = size / 11;
  grid.forEach((row, ry) => row.forEach((on, rx) => {
    if (!on) return;
    ctx.fillStyle = ry <= 1 ? '#ffe566' : ry >= 9 ? '#c8960a' : '#f5c518';
    ctx.fillRect(cx - size / 2 + rx * ps, cy - size / 2 + ry * ps, ps, ps);
  }));
}

/** X-mark (danger cross) */
function drawXMark(ctx, cx, cy, size, color, lw) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lw || 2.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - size, cy - size); ctx.lineTo(cx + size, cy + size);
  ctx.moveTo(cx + size, cy - size); ctx.lineTo(cx - size, cy + size);
  ctx.stroke();
  ctx.restore();
}

/** Missile body — sleek pointed shape, no emoji */
function drawMissileShape(ctx, cx, cy, angle, size, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  // body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(size*0.55, 0);           // nose tip
  ctx.lineTo(size*0.1,  -size*0.18);
  ctx.lineTo(-size*0.45, -size*0.14);
  ctx.lineTo(-size*0.55, 0);
  ctx.lineTo(-size*0.45,  size*0.14);
  ctx.lineTo(size*0.1,   size*0.18);
  ctx.closePath();
  ctx.fill();
  // fins
  ctx.fillStyle = '#ff6600';
  ctx.beginPath();
  ctx.moveTo(-size*0.3, -size*0.14);
  ctx.lineTo(-size*0.55, -size*0.38);
  ctx.lineTo(-size*0.5,  -size*0.14);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-size*0.3,  size*0.14);
  ctx.lineTo(-size*0.55,  size*0.38);
  ctx.lineTo(-size*0.5,   size*0.14);
  ctx.closePath();
  ctx.fill();
  // window
  ctx.fillStyle = '#ffeeaa';
  ctx.beginPath(); ctx.arc(size*0.1, 0, size*0.1, 0, Math.PI*2); ctx.fill();
  ctx.restore();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}
function hit(ax,ay,aw,ah,bx,by,bw,bh){ return ax<bx+bw&&ax+aw>bx&&ay<by+bh&&ay+ah>by; }
function burst(parts, x, y, color, n=10) {
  for (let i=0;i<n;i++) {
    const ang=(Math.PI*2/n)*i+Math.random()*0.4;
    parts.push({ x,y, vx:Math.cos(ang)*(2+Math.random()*3), vy:Math.sin(ang)*(2+Math.random()*3),
      life:30, maxLife:30, color, sz:1.5+Math.random()*2.5 });
  }
}
function explode(parts, x, y) {
  ['#ff4444','#ff8800','#ffcc00','#ffffff'].forEach(color => {
    for (let i=0;i<8;i++) {
      const ang=Math.random()*Math.PI*2, spd=2+Math.random()*6;
      parts.push({ x,y, vx:Math.cos(ang)*spd, vy:Math.sin(ang)*spd-2,
        life:40+Math.random()*20, maxLife:60, color, sz:2+Math.random()*4 });
    }
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
const PIXEL_FONT = "'Press Start 2P', monospace";

const SkillRunner = () => {
  const canvasRef    = useRef(null);
  const containerRef = useRef(null);
  const [score,     setScore]     = useState(0);
  const [collected, setCollected] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const savedBest = parseInt(localStorage.getItem('skillRunnerBest')||'0', 10);
    setBestScore(savedBest);

    const imgs = {};
    [...GOOD_SKILLS, ...TRAP_SKILLS].forEach(s => {
      const img = new Image(); img.crossOrigin = 'anonymous'; img.src = s.src; imgs[s.name] = img;
    });

    const canvas = canvasRef.current;
    const cont   = containerRef.current;
    if (!canvas || !cont) return;

    let W = cont.offsetWidth;
    const H = 300, dpr = window.devicePixelRatio || 1;
    const resize = () => {
      W = cont.offsetWidth;
      canvas.width = W*dpr; canvas.height = H*dpr;
      canvas.style.width = W+'px'; canvas.style.height = H+'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');
    const GY  = H - GND_OFF;

    // ── game state ──
    let bat = { x:80, y:GY-BAT_H-20, vy:0, invincible:0, dead:false };
    let items=[], missiles=[], parts=[], floats=[];
    let frame=0, sc=0, spd=3;
    let bestLocal=savedBest, collectedLocal=[];
    let diffSpike=0, spikeTimer=0;
    let screenShake=0;
    let phase='playing'; // 'playing'|'dying'|'win'
    let phaseTimer=0, deathMsg='';
    const TOTAL_SKILLS = GOOD_SKILLS.length;

    // ── bat random-walk noise (Perlin-like) for organic movement ──
    // Each bat has a wanderAngle that drifts randomly
    let wanderAngle = 0;
    let wanderTimer = 0;
    let wanderTarget = GY - BAT_H - 60; // current wander Y target
    // Randomise how often the bat "changes its mind"
    let decisionTimer = 0;
    let decisionInterval = 40 + Math.floor(Math.random()*60);
    // Whether bat is currently in "lazy mode" (ignores nearby items sometimes)
    let lazyMode = false;
    let lazyTimer = 0;

    const clouds   = Array.from({length:8},(_,i)=>({ x:i*150, y:10+Math.random()*40, w:40+Math.random()*60, sp:0.1+Math.random()*0.15 }));
    const buildings= Array.from({length:14},(_,i)=>({ x:i*90, w:20+Math.random()*40, h:30+Math.random()*80, sp:0.2+Math.random()*0.25 }));

    // ── spawn missile ──
    function spawnMissile() {
      const startY = 15 + Math.random()*(GY*0.8);
      // always spawn from right edge, aim toward bat
      const targetY = bat.y + BAT_H/2;
      const dy = targetY - startY;
      const dx = (bat.x + BAT_W/2) - (W + 10);
      const dist = Math.sqrt(dx*dx + dy*dy);
      const baseSpd = 2.5 + Math.min(sc * 0.12, 3) + diffSpike*0.3;
      const speed = baseSpd + Math.random()*1.2;
      missiles.push({
        x: W+10, y: startY,
        vx: -(speed),                          // always moves left
        vy: (dy/dist) * speed * 0.6,           // angled toward bat Y
        homing: sc >= 6 && Math.random() > 0.55,
        trail: [], life: 280,
        pulse: Math.random()*Math.PI*2,
        wobble: (Math.random()-0.5)*0.02,      // smaller wobble
      });
    }

    // ── bat AI — randomised, organic, imperfect ──
    function updateBatAI() {
      const DANGER = 95 + diffSpike*12;
      const EVADE  = 60 + diffSpike*8;

      // find closest missile
      let closestDist=Infinity, closestThreat=null;
      missiles.forEach(m => {
        const dx=m.x-(bat.x+BAT_W/2), dy=m.y-(bat.y+BAT_H/2);
        const d=Math.sqrt(dx*dx+dy*dy);
        if (d<closestDist) { closestDist=d; closestThreat={x:m.x,y:m.y,d}; }
      });

      // ── EVASION (highest priority) ──
      if (closestThreat && closestThreat.d < DANGER) {
        const dy = (bat.y+BAT_H/2) - closestThreat.y;
        const dir = dy >= 0 ? 1 : -1;
        // miss chance increases with difficulty — bat sometimes fails to dodge
        const missChance = 0.06 + diffSpike*0.03;
        if (Math.random() > missChance) {
          bat.vy += dir * (0.85 + diffSpike*0.2);
        }
        if (closestThreat.d < EVADE) {
          // panic jitter — random direction burst
          bat.vy += (Math.random()-0.5) * 3.5;
        }
        // reset wander so it doesn't fight evasion
        wanderTimer = 0;
        return;
      }

      // ── LAZY MODE — bat ignores items and just drifts ──
      lazyTimer--;
      if (lazyTimer <= 0) {
        lazyMode = !lazyMode;
        lazyTimer = lazyMode
          ? 60 + Math.floor(Math.random()*80)   // lazy for 1-2s
          : 80 + Math.floor(Math.random()*120);  // active for 1.5-3s
      }

      // ── DECISION TIMER — bat picks a new target Y randomly ──
      decisionTimer--;
      if (decisionTimer <= 0) {
        decisionInterval = 35 + Math.floor(Math.random()*70);
        decisionTimer = decisionInterval;
        // random wander target anywhere in the play area
        wanderTarget = 20 + Math.random() * (GY - BAT_H - 40);
      }

      // ── ITEM CHASING (only when not lazy, and with randomness) ──
      if (!lazyMode) {
        const nearest = items.reduce((best, item) => {
          if (item.isTrap) return best; // never chase traps
          if (item.x < bat.x - 20 || item.x > bat.x + 320) return best;
          return (!best || item.x < best.x) ? item : best;
        }, null);

        if (nearest && Math.random() > 0.08) {
          // only partially track — add noise so it doesn't perfectly follow
          const noise = (Math.random()-0.5) * 30;
          const ty = nearest.y + Math.sin(frame*0.035+nearest.bob)*6 - BAT_H/2 + noise;
          bat.vy += (ty - bat.y) * (0.018 + Math.random()*0.012);
          return;
        }
      }

      // ── WANDER — drift toward random wander target ──
      wanderTimer++;
      // add slow sine drift on top
      const drift = Math.sin(frame*0.015 + wanderAngle) * 18;
      const target = wanderTarget + drift;
      bat.vy += (target - bat.y) * 0.01;
      // occasionally nudge wander angle
      if (wanderTimer % 30 === 0) wanderAngle += (Math.random()-0.5)*1.2;
    }

    // ── kill bat ──
    const DEATH_MSGS = [
      'Direct Hit!', 'Bat Fried!', 'Zapped Out!',
      'Obliterated!', 'Blown Away!', 'Rekt!', 'Critical Hit!'
    ];
    const TRAP_MSGS = [
      n => `"${n}"? Never heard of it!`,
      n => `Touched "${n}" and died!`,
      n => `"${n}" is not in the skill tree!`,
      n => `"${n}" was a trap all along!`,
    ];

    function killBat(isTrap=false, trapName='') {
      if (bat.invincible>0 || bat.dead) return;
      bat.dead = true;
      screenShake = 22;
      explode(parts, bat.x+BAT_W/2, bat.y+BAT_H/2);
      if (isTrap) {
        // wrong skill = instant game over, full reset
        deathMsg = TRAP_MSGS[Math.floor(Math.random()*TRAP_MSGS.length)](trapName);
      } else {
        deathMsg = DEATH_MSGS[Math.floor(Math.random()*DEATH_MSGS.length)];
      }
      phase = 'dying';
      phaseTimer = 90;
    }

    function fullReset() {
      bat={ x:80, y:GY-BAT_H-20, vy:0, invincible:80, dead:false };
      items=[]; missiles=[]; parts=[]; floats=[];
      sc=0; spd=3; diffSpike=0; spikeTimer=0; collectedLocal=[];
      wanderTarget=GY-BAT_H-60; decisionTimer=40; lazyMode=false; lazyTimer=80;
      setScore(0); setCollected([]);
      phase='playing'; phaseTimer=0;
    }

    // ── main loop ──
    let animId;
    const loop = () => {
      const shX = screenShake>0 ? (Math.random()-0.5)*screenShake*0.6 : 0;
      const shY = screenShake>0 ? (Math.random()-0.5)*screenShake*0.4 : 0;
      if (screenShake>0) screenShake -= 1.5;

      ctx.setTransform(dpr,0,0,dpr,shX,shY);
      ctx.clearRect(-10,-10,W+20,H+20);

      // sky
      const sky = ctx.createLinearGradient(0,0,0,GY);
      sky.addColorStop(0,'#05080f'); sky.addColorStop(0.6,'#0a1020'); sky.addColorStop(1,'#0f1729');
      ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);

      // stars
      for (let i=0;i<60;i++) {
        const sx=(i*131.7+frame*0.04)%W, sy=(i*59.3)%(GY-20);
        ctx.globalAlpha=0.12+Math.sin(frame*0.012+i*1.7)*0.1;
        ctx.fillStyle='#fff'; ctx.fillRect(sx,sy,1+(i%3===0?1:0),1);
      }
      ctx.globalAlpha=1;

      // moon (canvas arcs, no emoji)
      ctx.fillStyle='rgba(255,255,255,0.04)';
      ctx.beginPath(); ctx.arc(W-100,50,30,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.06)';
      ctx.beginPath(); ctx.arc(W-100,50,22,0,Math.PI*2); ctx.fill();
      // crescent shadow
      ctx.fillStyle='rgba(5,8,15,0.55)';
      ctx.beginPath(); ctx.arc(W-92,50,22,0,Math.PI*2); ctx.fill();

      // clouds
      clouds.forEach(c => {
        c.x -= c.sp; if(c.x+c.w<0){c.x=W+20;c.y=8+Math.random()*45;}
        ctx.fillStyle='rgba(255,255,255,0.02)';
        ctx.beginPath(); ctx.ellipse(c.x+c.w/2,c.y,c.w/2,8,0,0,Math.PI*2); ctx.fill();
      });

      // buildings
      buildings.forEach(b => {
        b.x -= b.sp; if(b.x+b.w<0){b.x=W+Math.random()*80;b.h=30+Math.random()*80;}
        const bg=ctx.createLinearGradient(b.x,GY-b.h,b.x,GY);
        bg.addColorStop(0,'rgba(100,130,255,0.025)'); bg.addColorStop(1,'rgba(100,130,255,0.005)');
        ctx.fillStyle=bg; ctx.fillRect(b.x,GY-b.h,b.w,b.h);
        ctx.fillStyle='rgba(255,220,100,0.06)';
        for (let wy=GY-b.h+5;wy<GY-3;wy+=9)
          for (let wx=b.x+3;wx<b.x+b.w-3;wx+=7)
            if (Math.sin(wx*5+wy*3+frame*0.006)>0.5) ctx.fillRect(wx,wy,3,3);
      });

      // ground
      const gg=ctx.createLinearGradient(0,GY,0,H);
      gg.addColorStop(0,'#0f1729'); gg.addColorStop(1,'#000');
      ctx.fillStyle=gg; ctx.fillRect(0,GY,W,H-GY);
      ctx.shadowColor='#818cf8'; ctx.shadowBlur=10;
      ctx.strokeStyle='rgba(129,140,248,0.25)'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(0,GY); ctx.lineTo(W,GY); ctx.stroke();
      ctx.shadowBlur=0;
      ctx.strokeStyle='rgba(129,140,248,0.06)'; ctx.lineWidth=1;
      for (let gx=-(frame*spd)%20;gx<W;gx+=20) {
        ctx.beginPath(); ctx.moveTo(gx,GY+8); ctx.lineTo(gx+10,GY+8); ctx.stroke();
      }

      // difficulty ramp — score-driven, not time-driven
      // diffSpike goes 0→6 as sc goes 0→30 (every 5 points = +1 spike)
      spikeTimer++;
      const targetSpike = Math.min(6, Math.floor(sc / 5));
      if (targetSpike > diffSpike && spikeTimer > 120) { diffSpike = targetSpike; spikeTimer = 0; }
      spd = 2.2 + sc*0.06 + diffSpike*0.3;

      // ── spawn ──
      if (phase==='playing') {
        // items: start every 80 frames, tighten to 32 by score 20+
        const itemRate = Math.max(32, 80 - sc*2 - diffSpike*3);
        if (frame%itemRate===0) {
          // trap chance: 0% at start, rises to 25% by score 10
          const trapChance = Math.min(0.25, sc * 0.025);
          const isTrap = Math.random() < trapChance;
          const pool   = isTrap ? TRAP_SKILLS : GOOD_SKILLS;
          const skill  = pool[Math.floor(Math.random()*pool.length)];
          const yMin = 20, yMax = GY - ICON_SIZE - 15;
          items.push({ x:W+10, y:yMin+Math.random()*(yMax-yMin), ...skill, bob:Math.random()*Math.PI*2, isTrap });
        }
        // missiles: none until score 3, then start slow
        if (sc >= 3) {
          const mRate = Math.max(90, 260 - sc*8 - diffSpike*15);
          if (frame%Math.floor(mRate)===0) spawnMissile();
        }
        // random crash: only after score 8, very rare at first
        if (sc >= 8 && !bat.dead && Math.random() < 0.00015 + diffSpike*0.00006) killBat(false);
      }

      // ── missiles ──
      missiles = missiles.filter(m => {
        m.life--;
        if (m.life<=0) return false;

        if (m.homing && phase==='playing') {
          const tx=bat.x+BAT_W/2, ty=bat.y+BAT_H/2;
          const dx=tx-m.x, dy=ty-m.y, dist=Math.sqrt(dx*dx+dy*dy);
          if (dist>0) { m.vx+=(dx/dist)*0.14; m.vy+=(dy/dist)*0.14; }
          const s2=Math.sqrt(m.vx*m.vx+m.vy*m.vy), ms=5.5+diffSpike*0.5;
          if (s2>ms) { m.vx=(m.vx/s2)*ms; m.vy=(m.vy/s2)*ms; }
          // never let homing flip direction — always travels left
          if (m.vx > -0.5) m.vx = -0.5;
        } else {
          // non-homing: slight vertical wobble only
          m.vy += Math.sin(frame*0.08 + m.pulse) * m.wobble;
        }
        m.x+=m.vx; m.y+=m.vy;
        if (m.x<-50||m.y<-50||m.y>H+50) return false;

        // fire trail (canvas circles, no emoji)
        m.trail.push({x:m.x,y:m.y});
        if (m.trail.length>12) m.trail.shift();
        m.trail.forEach((t,i) => {
          const a=(i/m.trail.length)*0.5;
          ctx.globalAlpha=a;
          // gradient from orange to red
          const r=255, g=Math.floor(180*(i/m.trail.length));
          ctx.fillStyle=`rgb(${r},${g},0)`;
          ctx.beginPath(); ctx.arc(t.x,t.y,2.5+i*0.2,0,Math.PI*2); ctx.fill();
        });
        ctx.globalAlpha=1;

        // draw missile — hand-drawn shape, no emoji
        const angle = Math.atan2(m.vy, m.vx);
        m.pulse += 0.09;
        const sz = ICON_SIZE * 0.85;

        // outer danger ring (pulsing)
        ctx.strokeStyle=`rgba(255,60,0,${0.45+Math.sin(m.pulse)*0.3})`;
        ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.arc(m.x,m.y,sz*0.62,0,Math.PI*2); ctx.stroke();

        // missile body shape
        drawMissileShape(ctx, m.x, m.y, angle, sz*0.5, '#cc2200');

        // danger bolt on top
        drawDangerBolt(ctx, m.x, m.y, sz*0.35, '#ffdd00', 0.9);

        // collision
        if (phase==='playing' && !bat.dead && bat.invincible<=0) {
          if (hit(bat.x+8,bat.y+8,BAT_W-16,BAT_H-16,m.x-sz/2,m.y-sz/2,sz,sz)) {
            burst(parts,m.x,m.y,'#ff4400',10);
            killBat(false);
            return false;
          }
        }
        return true;
      });

      // ── bat AI ──
      if (phase==='playing' && !bat.dead) {
        if (bat.invincible>0) bat.invincible--;
        updateBatAI();
        bat.vy *= 0.88;
        bat.y  += bat.vy;
        if (bat.y<8)          { bat.y=8;          bat.vy= Math.abs(bat.vy)*0.4; }
        if (bat.y>GY-BAT_H)   { bat.y=GY-BAT_H;  bat.vy=-Math.abs(bat.vy)*0.4; }
      }

      // ── draw bat ──
      if (!bat.dead) {
        const fi = Math.floor(frame/7)%2;
        const tint = (bat.invincible>0 && Math.floor(frame/4)%2===0) ? '#aaaaff' : null;
        ctx.shadowColor='#818cf8'; ctx.shadowBlur=16;
        ctx.fillStyle='rgba(129,140,248,0.04)';
        ctx.beginPath(); ctx.arc(bat.x+BAT_W/2,bat.y+BAT_H/2,BAT_W*0.75,0,Math.PI*2); ctx.fill();
        ctx.shadowBlur=0;
        drawBat(ctx, bat.x, bat.y-8, fi, tint);
      }

      // ── skill items ──
      items = items.filter(item => {
        item.x -= spd;
        if (item.x<-ICON_SIZE) return false;
        const fy = item.y + Math.sin(frame*0.035+item.bob)*6;

        if (item.isTrap) {
          // red pulsing ring
          const p=Math.sin(frame*0.08+item.bob)*0.5+0.5;
          ctx.strokeStyle=`rgba(255,50,50,${0.35+p*0.4})`; ctx.lineWidth=2;
          ctx.beginPath(); ctx.arc(item.x+ICON_SIZE/2,fy+ICON_SIZE/2,ICON_SIZE*0.72,0,Math.PI*2); ctx.stroke();
          // hand-drawn X mark instead of emoji
          drawXMark(ctx, item.x+ICON_SIZE/2, fy-6, 5, '#ff4444', 2);
          // TRAP text label
          ctx.font=`bold 5px ${PIXEL_FONT}`; ctx.textAlign='center'; ctx.textBaseline='top';
          ctx.fillStyle='#ff4444';
          ctx.fillText('TRAP', item.x+ICON_SIZE/2, fy+ICON_SIZE+2);
        } else {
          ctx.strokeStyle='rgba(129,140,248,0.18)'; ctx.lineWidth=1;
          ctx.beginPath(); ctx.arc(item.x+ICON_SIZE/2,fy+ICON_SIZE/2,ICON_SIZE*0.65,0,Math.PI*2); ctx.stroke();
        }

        const img = imgs[item.name];
        if (img?.complete && img.naturalWidth>0) {
          ctx.shadowColor=item.isTrap?'#ff4444':'#818cf8';
          ctx.shadowBlur=item.isTrap?10:6;
          if (item.isTrap) {
            ctx.save();
            ctx.drawImage(img,item.x,fy,ICON_SIZE,ICON_SIZE);
            ctx.globalCompositeOperation='multiply';
            ctx.fillStyle='rgba(255,80,80,0.45)';
            ctx.fillRect(item.x,fy,ICON_SIZE,ICON_SIZE);
            ctx.restore();
          } else {
            ctx.drawImage(img,item.x,fy,ICON_SIZE,ICON_SIZE);
          }
          ctx.shadowBlur=0;
        }

        // collision
        if (phase==='playing' && !bat.dead &&
            hit(bat.x+10,bat.y,BAT_W-20,BAT_H,item.x,fy,ICON_SIZE,ICON_SIZE)) {
          if (item.isTrap) {
            burst(parts,item.x+ICON_SIZE/2,fy+ICON_SIZE/2,'#ff2200',14);
            killBat(true, item.name);
          } else {
            sc++;
            collectedLocal=[...new Set([...collectedLocal,item.name])];
            burst(parts,item.x+ICON_SIZE/2,fy+ICON_SIZE/2,'#818cf8',10);
            floats.push({x:item.x,y:fy,text:`+${item.name}`,color:'#a5b4fc',life:35});
            if (sc>bestLocal) { bestLocal=sc; localStorage.setItem('skillRunnerBest',bestLocal.toString()); }
            setScore(sc); setCollected([...collectedLocal]); setBestScore(bestLocal);
            // WIN — all unique good skills collected
            if (collectedLocal.length >= TOTAL_SKILLS) {
              phase='win'; phaseTimer=0;
              missiles=[]; items=[];
            }
          }
          return false;
        }
        return true;
      });

      // ── particles ──
      parts = parts.filter(p => {
        p.x+=p.vx; p.y+=p.vy; p.vx*=0.93; p.vy*=0.93; p.vy+=0.08; p.life--;
        ctx.globalAlpha=p.life/p.maxLife; ctx.fillStyle=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.sz,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha=1;
        return p.life>0;
      });

      // ── float texts ──
      floats = floats.filter(f => {
        f.y-=0.6; f.life--;
        ctx.globalAlpha=f.life/35; ctx.fillStyle=f.color;
        ctx.font=`bold 7px ${PIXEL_FONT}`; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
        ctx.fillText(f.text, f.x+ICON_SIZE/2, f.y);
        ctx.globalAlpha=1;
        return f.life>0;
      });

      // ── phase state machine ──
      phaseTimer--;

      if (phase==='dying') {
        // death / game-over overlay (same for both — always full reset)
        ctx.textAlign='center'; ctx.textBaseline='middle';
        roundRect(ctx,W/2-155,H/2-34,310,68,14);
        ctx.fillStyle='rgba(0,0,0,0.82)'; ctx.fill();
        ctx.strokeStyle='rgba(255,80,80,0.7)'; ctx.lineWidth=2; ctx.stroke();
        drawSkull(ctx, W/2-128, H/2, 22, 'rgba(255,80,80,0.55)');
        drawSkull(ctx, W/2+128, H/2, 22, 'rgba(255,80,80,0.55)');
        ctx.fillStyle='#ff6b6b'; ctx.font=`bold 9px ${PIXEL_FONT}`;
        ctx.fillText(deathMsg, W/2, H/2-8);
        ctx.fillStyle='rgba(255,100,100,0.55)'; ctx.font=`bold 7px ${PIXEL_FONT}`;
        ctx.fillText('GAME OVER — Restarting from scratch', W/2, H/2+14);
        if (phaseTimer<=0) fullReset();
      }

      // ── WIN screen ──
      if (phase==='win') {
        phaseTimer++;
        // confetti every 20 frames
        if (phaseTimer % 20 === 0) {
          const cc = ['#f5c518','#818cf8','#44ff88','#ff4466','#00cfff','#ff8800'];
          for (let i=0;i<16;i++) burst(parts, Math.random()*W, Math.random()*(H*0.5), cc[i%cc.length], 5);
        }
        ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,W,H);
        ctx.textAlign='center'; ctx.textBaseline='middle';
        roundRect(ctx, W/2-170, H/2-58, 340, 116, 18);
        ctx.fillStyle='rgba(5,8,20,0.94)'; ctx.fill();
        ctx.strokeStyle='rgba(245,197,24,0.75)'; ctx.lineWidth=2; ctx.stroke();
        // big cup centred
        drawPixelCup(ctx, W/2, H/2-26, 38);
        ctx.fillStyle='#f5c518'; ctx.font=`bold 16px ${PIXEL_FONT}`;
        ctx.fillText('YOU WIN!', W/2, H/2+12);
        ctx.fillStyle='#a5b4fc'; ctx.font=`bold 7px ${PIXEL_FONT}`;
        ctx.fillText(`All ${TOTAL_SKILLS} skills collected  •  Score: ${sc}`, W/2, H/2+32);
        const pa = 0.4 + Math.sin(phaseTimer*0.07)*0.4;
        ctx.globalAlpha=pa; ctx.fillStyle='#666'; ctx.font=`bold 6px ${PIXEL_FONT}`;
        ctx.fillText('Restarting soon...', W/2, H/2+50);
        ctx.globalAlpha=1;
        if (phaseTimer > 260) fullReset();
      }

      // ── HUD ──
      ctx.textAlign='left'; ctx.textBaseline='alphabetic';

      // score — coin + number, no box
      drawPixelCoin(ctx, 20, 23, 8);
      ctx.fillStyle='#a5b4fc'; ctx.font=`bold 9px ${PIXEL_FONT}`;
      ctx.fillText(`${sc}`, 33, 28);

      // cup — right side, current score
      drawPixelCup(ctx, W-52, 23, 18);
      ctx.fillStyle='#f5c518'; ctx.font=`bold 9px ${PIXEL_FONT}`;
      ctx.fillText(`${sc}`, W-40, 28);

      frame++;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => { window.removeEventListener('resize',resize); cancelAnimationFrame(animId); };
  }, []);

  const uniqueSkills = [...new Set(collected)];

  return (
    <motion.div className="w-full"
      initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
      viewport={{once:true}} transition={{duration:0.8}}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold" style={{fontFamily:"'Press Start 2P', monospace"}}>
            <span className="text-indigo-400">Skill</span>
            <span className="text-zinc-600"> Runner</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-zinc-500 text-[10px]" style={{fontFamily:"'Press Start 2P', monospace"}}>Score: {score}</span>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full rounded-2xl overflow-hidden border border-white/[0.05] shadow-[0_0_60px_-15px_rgba(129,140,248,0.08)]">
        <canvas ref={canvasRef} className="block w-full" style={{height:300}} />
      </div>

      {uniqueSkills.length>0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-zinc-600 text-[8px] uppercase tracking-wider self-center mr-1" style={{fontFamily:"'Press Start 2P', monospace"}}>Collected:</span>
          {uniqueSkills.map(s=>(
            <motion.span key={s} initial={{scale:0}} animate={{scale:1}}
              className="px-2 py-0.5 bg-indigo-400/[0.07] border border-indigo-400/15 rounded-md text-indigo-300/80 text-[8px]" style={{fontFamily:"'Press Start 2P', monospace"}}
            >{s}</motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillRunner;
