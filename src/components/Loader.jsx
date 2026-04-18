import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import lottie from 'lottie-web';

const LOTTIE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader_chrisgannon.json';
const SKILLS = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'JS'];
const CODE_LINES = [
  'const dev = {',
  '  name: "Rahul Goswami",',
  '  role: "Frontend Engineer",',
  '  stack: ["React", "Next.js", "TS"],',
  '  passion: "Building experiences",',
  '};',
];

const Loader = ({ onComplete }) => {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const r = {
    canvas: useRef(null),
    lottieBox: useRef(null),
    counter: useRef(null),
    progressTrack: useRef(null),
    progressBar: useRef(null),
    codeBlock: useRef(null),
    skillRing: useRef(null),
    nameFirst: useRef(null),
    nameLast: useRef(null),
    role: useRef(null),
    tagline: useRef(null),
    brandLine: useRef(null),
    curtainTop: useRef(null),
    curtainBottom: useRef(null),
    flash: useRef(null),
    corners: [useRef(null), useRef(null), useRef(null), useRef(null)],
    scanline: useRef(null),
  };

  const initParticles = useCallback((cvs) => {
    const ctx = cvs.getContext('2d');
    const pts = [];
    let raf;
    const resize = () => { cvs.width = window.innerWidth; cvs.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const count = window.innerWidth < 640 ? 25 : 60;
    for (let i = 0; i < count; i++) {
      pts.push({
        x: Math.random() * cvs.width, y: Math.random() * cvs.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.3,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > cvs.width) p.vx *= -1;
        if (p.y < 0 || p.y > cvs.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(244,108,56,0.3)';
        ctx.fill();
      });
      const ld = window.innerWidth < 640 ? 70 : 120;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < ld) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(244,108,56,${0.07 * (1 - d / ld)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const cleanupParticles = initParticles(r.canvas.current);

    const anim = lottie.loadAnimation({
      container: r.lottieBox.current,
      renderer: 'svg', loop: true, autoplay: true, path: LOTTIE_URL,
    });
    anim.setSpeed(3.24);

    const codeEl = r.codeBlock.current;
    const typeCode = (tl, startTime) => {
      let acc = '';
      CODE_LINES.forEach((line, li) => {
        line.split('').forEach((char, ci) => {
          tl.call(() => {
            if (!codeEl) return;
            acc += char;
            codeEl.textContent = acc + '█';
          }, null, startTime + li * 0.22 + ci * 0.022);
        });
        tl.call(() => { if (codeEl) acc += '\n'; }, null, startTime + li * 0.22 + line.length * 0.022);
      });
      tl.call(() => { if (codeEl) codeEl.textContent = acc; }, null, startTime + CODE_LINES.length * 0.22 + 0.2);
    };

    const split = (el, text) => {
      el.innerHTML = text.split('').map(c =>
        c === ' ' ? '<span style="display:inline-block;width:0.2em">&nbsp;</span>'
          : `<span style="display:inline-block;opacity:0;transform:translateY(100%)">${c}</span>`
      ).join('');
      return el.querySelectorAll('span');
    };

    const firstLetters = split(r.nameFirst.current, 'RAHUL');
    const lastLetters = split(r.nameLast.current, 'GOSWAMI');
    const skillEls = r.skillRing.current.querySelectorAll('.skill-pill');
    const cornerEls = r.corners.map(c => c.current);

    const isMobile = window.innerWidth < 640;
    const counter = { val: 0 };
    const m = gsap.timeline();

    // PHASE 1
    m
      .fromTo(cornerEls, { opacity: 0, scale: 0 }, {
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(2)'
      }, 0)
      .fromTo(r.scanline.current,
        { top: '0%', opacity: 0.6 },
        { top: '100%', opacity: 0, duration: 1.5, ease: 'power2.inOut' }, 0.3)

    // PHASE 2
      .fromTo(r.lottieBox.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.6)' }, 0.8)
      .fromTo(r.counter.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 1)
      .fromTo(r.progressTrack.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power3.out' }, 1.1)
      .to(counter, {
        val: 100, duration: 4, ease: 'power1.inOut',
        onUpdate: () => {
          if (!r.counter.current) return;
          r.counter.current.textContent = String(Math.round(counter.val)).padStart(3, '0');
        }
      }, 1)
      .to(r.progressBar.current, { width: '100%', duration: 4, ease: 'power1.inOut' }, 1);

    // Code + skills only on desktop
    if (!isMobile) {
      m.fromTo(r.codeBlock.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }, 0.8)
        .fromTo(skillEls,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' }, 1.5);
      typeCode(m, 1.0);
    }

    // PHASE 3
    m
      .to(r.lottieBox.current, { scale: 0.3, opacity: 0, y: -40, duration: 0.5, ease: 'power3.in' }, 5.2)
      .to(r.counter.current, { opacity: 0, y: -20, scale: 0.8, duration: 0.4, ease: 'power3.in' }, 5.3)
      .to(r.progressTrack.current, { opacity: 0, scaleX: 0, duration: 0.4 }, 5.3);

    if (!isMobile) {
      m.to(r.codeBlock.current, { opacity: 0, x: -40, duration: 0.4, ease: 'power3.in' }, 5.2)
        .to(skillEls, { opacity: 0, scale: 0, duration: 0.3, stagger: 0.04, ease: 'power3.in' }, 5.2);
    }

    m
      .fromTo(r.brandLine.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power4.inOut' }, 5.6)
      .to(firstLetters, {
        opacity: 1, y: '0%', duration: 0.06,
        stagger: { each: 0.05, from: 'start' }, ease: 'power4.out',
        onStart: () => gsap.set(firstLetters, { y: '-120%' })
      }, 5.9)
      .to(lastLetters, {
        opacity: 1, y: '0%', duration: 0.06,
        stagger: { each: 0.05, from: 'end' }, ease: 'power4.out',
        onStart: () => gsap.set(lastLetters, { y: '120%' })
      }, 6.2)
      .fromTo(r.role.current,
        { opacity: 0, letterSpacing: isMobile ? '0.4em' : '1.5em' },
        { opacity: 1, letterSpacing: isMobile ? '0.12em' : '0.5em', duration: 0.8, ease: 'power3.out' }, 6.5)
      .fromTo(r.tagline.current,
        { opacity: 0, y: 15 },
        { opacity: 0.5, y: 0, duration: 0.6, ease: 'power3.out' }, 6.8)
      .fromTo(r.scanline.current,
        { top: '100%', opacity: 0.4 },
        { top: '0%', opacity: 0, duration: 1, ease: 'power2.inOut' }, 6.0)
      .to({}, { duration: 1.5 })

    // PHASE 4
      .to(firstLetters, { y: '-150%', opacity: 0, rotation: -15, duration: 0.4, stagger: 0.03, ease: 'power4.in' })
      .to(lastLetters, { y: '150%', opacity: 0, rotation: 15, duration: 0.4, stagger: 0.03, ease: 'power4.in' }, '-=0.35')
      .to([r.role.current, r.tagline.current], { opacity: 0, duration: 0.3 }, '-=0.3')
      .to(r.brandLine.current, { scaleX: 0, duration: 0.4, ease: 'power4.in' }, '-=0.3')
      .to(cornerEls, { opacity: 0, scale: 0, duration: 0.3, stagger: 0.05 }, '-=0.3')
      .to(r.flash.current, { opacity: 0.8, duration: 0.1 })
      .to(r.flash.current, { opacity: 0, duration: 0.4 })
      .to(r.curtainTop.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.2')
      .to(r.curtainBottom.current, { yPercent: 100, duration: 0.8, ease: 'power4.inOut' }, '-=0.8')
      .call(() => {
        cleanupParticles();
        anim?.destroy();
        setVisible(false);
        onComplete?.();
      });

    return () => { m.kill(); cleanupParticles(); anim?.destroy(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] select-none"
      style={{ background: '#000', overflow: 'hidden', width: '100vw', height: '100dvh' }}>

      <canvas ref={r.canvas} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />

      <div ref={r.curtainTop} className="absolute top-0 left-0 w-full h-1/2 z-[2]" style={{ background: '#000' }} />
      <div ref={r.curtainBottom} className="absolute bottom-0 left-0 w-full h-1/2 z-[2]" style={{ background: '#000' }} />

      <div ref={r.scanline} className="absolute left-0 w-full h-[2px] z-[5] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #F46C38, transparent)', top: '0%' }} />

      <div ref={r.flash} className="absolute inset-0 z-[6] pointer-events-none bg-white opacity-0" />

      {/* Corners — using safe 12px inset */}
      {[
        { ref: r.corners[0], cls: 'top-3 left-3 border-l-2 border-t-2' },
        { ref: r.corners[1], cls: 'top-3 right-3 border-r-2 border-t-2' },
        { ref: r.corners[2], cls: 'bottom-3 left-3 border-l-2 border-b-2' },
        { ref: r.corners[3], cls: 'bottom-3 right-3 border-r-2 border-b-2' },
      ].map(({ ref, cls }, i) => (
        <div key={i} ref={ref}
          className={`absolute w-4 h-4 sm:w-8 sm:h-8 z-[4] ${cls}`}
          style={{ borderColor: '#F46C38' }} />
      ))}

      {/* All content absolutely positioned from center */}
      <div className="absolute inset-0 z-[3]">

        {/* Code block — desktop only */}
        <pre ref={r.codeBlock}
          className="hidden sm:block absolute top-[14%] left-[8%] text-[11px] md:text-xs leading-relaxed opacity-0"
          style={{
            color: '#F46C38',
            fontFamily: "'Space Grotesk', 'Courier New', monospace",
            textShadow: '0 0 20px rgba(244,108,56,0.3)',
          }} />

        {/* Skill pills — desktop only */}
        <div ref={r.skillRing}
          className="hidden sm:flex absolute top-[14%] right-[8%] flex-wrap gap-2 max-w-[180px] justify-end">
          {SKILLS.map(s => (
            <span key={s}
              className="skill-pill text-[9px] px-2 py-1 rounded-full border font-medium tracking-wider whitespace-nowrap"
              style={{
                borderColor: 'rgba(244,108,56,0.3)', color: '#F46C38',
                background: 'rgba(244,108,56,0.05)', fontFamily: "'Space Grotesk', sans-serif",
              }}>
              {s}
            </span>
          ))}
        </div>

        {/* Center — counter + lottie + progress */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div ref={r.counter}
            className="text-5xl sm:text-8xl md:text-[7rem] font-extralight leading-none mb-1 sm:mb-3 tabular-nums opacity-0"
            style={{
              color: '#F46C38', fontFamily: "'Space Grotesk', sans-serif",
              textShadow: '0 0 40px rgba(244,108,56,0.2)',
            }}>
            000
          </div>
          <div ref={r.lottieBox}
            className="w-[70px] h-[70px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] mb-2 sm:mb-4" />
          <div ref={r.progressTrack}
            className="w-20 sm:w-44 md:w-56 h-[1px] relative overflow-hidden opacity-0"
            style={{ backgroundColor: 'rgba(244,108,56,0.12)', transformOrigin: 'center' }}>
            <div ref={r.progressBar} className="absolute left-0 top-0 h-full w-0"
              style={{ background: 'linear-gradient(90deg, transparent, #F46C38)' }} />
          </div>
        </div>

        {/* Name reveal — also dead center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none w-full px-4">
          <div ref={r.brandLine} className="w-8 sm:w-16 h-[2px] mb-3 sm:mb-5"
            style={{ background: '#F46C38', transformOrigin: 'center', transform: 'scaleX(0)' }} />
          <h1 ref={r.nameFirst}
            className="text-[2rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight overflow-hidden whitespace-nowrap"
            style={{ color: '#fff', fontFamily: "'Syne', sans-serif" }} />
          <h1 ref={r.nameLast}
            className="text-[2rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight overflow-hidden whitespace-nowrap"
            style={{ color: '#F46C38', fontFamily: "'Syne', sans-serif" }} />
          <p ref={r.role}
            className="text-[7px] sm:text-[10px] md:text-xs font-medium mt-2 sm:mt-4 uppercase opacity-0 whitespace-nowrap"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Space Grotesk', sans-serif" }}>
            Frontend Developer
          </p>
          <p ref={r.tagline}
            className="text-[6px] sm:text-[9px] mt-1 sm:mt-2 opacity-0 text-center whitespace-nowrap"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Space Grotesk', sans-serif" }}>
            BUILDING EXPERIENCES THAT MATTER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
