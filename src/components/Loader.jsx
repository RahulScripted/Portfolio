import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

const JOURNEY_MESSAGES = [
  '> Initializing portfolio...',
  '> Loading frontend skills...',
  '> Compiling React components...',
  '> Connecting to the matrix...',
  '> Building experiences that matter...',
  '> System ready.',
];

const TYPING_LINES = [
  'const dev = {',
  '  name: "Rahul Goswami",',
  '  role: "Frontend Engineer",',
  '  obsession: "Performance & UX",',
  '  passion: "Crafting UIs",',
  '  focus: "Building scalable fintech products",',
  '  status: "Initializing..."',
  '};',
];


const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[];';

const Loader = ({ onComplete }) => {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(true);

  const matrixCanvas = useRef(null);
  const counterRef = useRef(null);
  const progressTrackRef = useRef(null);
  const progressBarRef = useRef(null);
  const typingRef = useRef(null);
  const journeyRef = useRef(null);

  const nameFirstRef = useRef(null);
  const nameLastRef = useRef(null);
  const roleRef = useRef(null);
  const taglineRef = useRef(null);
  const brandLineRef = useRef(null);


  const scanlineRef = useRef(null);
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const curtainRodRef = useRef(null);
  const cornerRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Matrix rain
  const initMatrix = useCallback((cvs) => {
    const ctx = cvs.getContext('2d');
    let raf;
    const fontSize = 14;
    let columns, drops;

    const resize = () => {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
      columns = Math.floor(cvs.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, cvs.width, cvs.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character brighter
        ctx.fillStyle = `rgba(244, 108, 56, ${0.9 + Math.random() * 0.1})`;
        ctx.fillText(char, x, y);

        // Trail
        if (drops[i] > 1) {
          ctx.fillStyle = `rgba(244, 108, 56, ${0.15 + Math.random() * 0.1})`;
          ctx.fillText(MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)], x, y - fontSize);
        }

        drops[i]++;
        if (y > cvs.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const cleanupMatrix = initMatrix(matrixCanvas.current);

    const isMobile = window.innerWidth < 640;
    const root = rootRef.current;
    if (isMobile) root.style.perspective = '600px';

    // Typing animation helper
    const typingEl = typingRef.current;
    const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp;');

    const typeCode = (tl, start) => {
      const done = [];
      let cur = '';
      let off = 0;
      const d = 0.025;
      TYPING_LINES.forEach((line) => {
        line.split('').forEach((ch) => {
          tl.call(() => {
            if (!typingEl) return;
            cur += ch;
            typingEl.innerHTML = [...done, escapeHtml(cur) + '<span class="animate-pulse">█</span>'].join('<br>');
          }, null, start + off * d);
          off++;
        });
        tl.call(() => { done.push(escapeHtml(cur)); cur = ''; }, null, start + off * d);
        off++;
      });
      tl.call(() => { if (typingEl) typingEl.innerHTML = done.join('<br>'); }, null, start + off * d + 0.1);
    };

    // Journey messages helper
    const journeyEl = journeyRef.current;
    const typeJourney = (tl, start) => {
      JOURNEY_MESSAGES.forEach((msg, i) => {
        tl.call(() => {
          if (!journeyEl) return;
          const p = document.createElement('div');
          p.textContent = msg;
          p.style.cssText = 'opacity:0;transform:translateX(-10px);color:#FF7A2F;font-size:11px;font-family:monospace;margin-bottom:4px;font-weight:bold;text-shadow:0 0 12px rgba(255,122,47,0.5);';
          journeyEl.appendChild(p);
          gsap.to(p, { opacity: 1, x: 0, duration: 0.3 });
          journeyEl.scrollTop = journeyEl.scrollHeight;
        }, null, start + i * 0.6);
      });
    };

    // Split text helper
    const split = (el, text) => {
      el.innerHTML = text.split('').map(c =>
        c === ' ' ? '<span style="display:inline-block;width:0.2em">&nbsp;</span>'
          : `<span style="display:inline-block;opacity:0;transform:translateY(100%)">${c}</span>`
      ).join('');
      return el.querySelectorAll('span');
    };

    const firstLetters = split(nameFirstRef.current, 'RAHUL');
    const lastLetters = split(nameLastRef.current, 'GOSWAMI');

    const cornerEls = cornerRefs.map(c => c.current);

    const counter = { val: 0 };
    const tl = gsap.timeline();

    // === PHASE 1: Corners + scanline ===
    tl.fromTo(cornerEls, { opacity: 0, scale: 0 }, {
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(2)'
    }, 0)
      .fromTo(scanlineRef.current, { top: '0%', opacity: 0.6 }, {
        top: '100%', opacity: 0, duration: 1.5, ease: 'power2.inOut'
      }, 0.3);

    // === PHASE 2: Counter + progress + typing + journey + icons ===
    tl.fromTo(counterRef.current, { opacity: 0, scale: 0.5 }, {
      opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)'
    }, 0.8)
      .fromTo(progressTrackRef.current, { opacity: 0, scaleX: 0 }, {
        opacity: 1, scaleX: 1, duration: 0.5, ease: 'power3.out'
      }, 0.9)
      .to(counter, {
        val: 100, duration: 6, ease: 'power1.inOut',
        onUpdate: () => {
          const v = Math.round(counter.val);
          if (counterRef.current) counterRef.current.textContent = String(v).padStart(3, '0');
        }
      }, 1)
      .to(progressBarRef.current, { width: '100%', duration: 6, ease: 'power1.inOut' }, 1);

    // Typing + journey (desktop only)
    if (!isMobile) {
      tl.fromTo(typingRef.current, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.5, ease: 'power3.out'
      }, 0.8);
      typeCode(tl, 1.0);

      tl.fromTo(journeyRef.current, { opacity: 0, x: 20 }, {
        opacity: 1, x: 0, duration: 0.5, ease: 'power3.out'
      }, 0.8);
      typeJourney(tl, 1.2);
    }



    // === PHASE 3: Collapse loader elements ===
    tl.to(counterRef.current, { opacity: 0, y: -20, scale: 0.8, duration: 0.4, ease: 'power3.in' }, 7.2)
      .to(progressTrackRef.current, { opacity: 0, scaleX: 0, duration: 0.4 }, 7.2)


    if (!isMobile) {
      tl.to(typingRef.current, { opacity: 0, x: -40, duration: 0.4, ease: 'power3.in' }, 7.2)
        .to(journeyRef.current, { opacity: 0, x: 40, duration: 0.4, ease: 'power3.in' }, 7.2);
    }

    // === PHASE 4: Name reveal ===
    tl.fromTo(brandLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power4.inOut' }, 7.6)
      .to(firstLetters, {
        opacity: 1, y: '0%', duration: 0.06,
        stagger: { each: 0.05, from: 'start' }, ease: 'power4.out',
        onStart: () => gsap.set(firstLetters, { y: '-120%' })
      }, 7.9)
      .to(lastLetters, {
        opacity: 1, y: '0%', duration: 0.06,
        stagger: { each: 0.05, from: 'end' }, ease: 'power4.out',
        onStart: () => gsap.set(lastLetters, { y: '120%' })
      }, 8.2)
      .fromTo(roleRef.current,
        { opacity: 0, letterSpacing: isMobile ? '0.4em' : '1.5em' },
        { opacity: 1, letterSpacing: isMobile ? '0.12em' : '0.5em', duration: 0.8, ease: 'power3.out' }, 8.5)
      .fromTo(taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.5, y: 0, duration: 0.6, ease: 'power3.out' }, 8.8)
      .fromTo(scanlineRef.current,
        { top: '100%', opacity: 0.4 },
        { top: '0%', opacity: 0, duration: 1, ease: 'power2.inOut' }, 8.0)
      .to({}, { duration: 1.5 });

    // === PHASE 5: Collapse name + curtain reveal ===
    tl.to(firstLetters, { y: '-150%', opacity: 0, rotation: -15, duration: 0.4, stagger: 0.03, ease: 'power4.in' })
      .to(lastLetters, { y: '150%', opacity: 0, rotation: 15, duration: 0.4, stagger: 0.03, ease: 'power4.in' }, '-=0.35')
      .to([roleRef.current, taglineRef.current], { opacity: 0, duration: 0.3 }, '-=0.3')
      .to(brandLineRef.current, { scaleX: 0, duration: 0.4, ease: 'power4.in' }, '-=0.3')
      .to(cornerEls, { opacity: 0, scale: 0, duration: 0.3, stagger: 0.05 }, '-=0.3')
      // Curtain rod appears
      .fromTo(curtainRodRef.current, { opacity: 0, scaleX: 0 }, {
        opacity: 1, scaleX: 1, duration: 0.4, ease: 'power3.out'
      }, '-=0.2')
      // Window-style curtain swing open
      .to(curtainLeftRef.current, {
        rotateY: isMobile ? 0 : -85,
        skewY: isMobile ? 0 : 5,
        scaleX: isMobile ? 0 : 0.6,
        x: isMobile ? '-100%' : '-30%',
        opacity: 0,
        duration: isMobile ? 0.8 : 1.2,
        ease: 'power3.inOut',
      }, '-=0.1')
      .to(curtainRightRef.current, {
        rotateY: isMobile ? 0 : 85,
        skewY: isMobile ? 0 : -5,
        scaleX: isMobile ? 0 : 0.6,
        x: isMobile ? '100%' : '30%',
        opacity: 0,
        duration: isMobile ? 0.8 : 1.2,
        ease: 'power3.inOut',
      }, '<')
      .to(curtainRodRef.current, { opacity: 0, duration: 0.3 }, '-=0.4')
      .to(matrixCanvas.current, { opacity: 0, duration: 0.5 }, '-=0.8')
      .call(() => {
        cleanupMatrix();
        setVisible(false);
        onComplete?.();
      });

    return () => { tl.kill(); cleanupMatrix(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] select-none"
      style={{ background: '#000', overflow: 'hidden', width: '100vw', maxWidth: '100%', height: '100dvh', perspective: '1200px' }}>

      {/* Curtain rod — bottommost layer */}
      <div ref={curtainRodRef} className="absolute top-0 left-0 w-full h-[6px] z-[1] opacity-0"
        style={{
          background: 'linear-gradient(180deg, #8B5E3C 0%, #D4A574 40%, #8B5E3C 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          transformOrigin: 'center',
        }} />

      {/* Left curtain — behind matrix */}
      <div ref={curtainLeftRef} className="absolute top-0 left-0 w-1/2 h-full z-0"
        style={{
          transformOrigin: 'left center',
          background: `linear-gradient(135deg, #0a0a0a 0%, #111 30%, #0a0a0a 60%, #111 100%)`,
          borderRight: '2px solid rgba(244,108,56,0.15)',
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.5)',
        }}>
        {/* Curtain folds */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 40px, rgba(244,108,56,0.03) 40px, rgba(244,108,56,0.03) 42px, transparent 42px, transparent 80px)`,
        }} />
        {/* Curtain drape wave */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.01) 40px)`,
        }} />
      </div>

      {/* Right curtain — behind matrix */}
      <div ref={curtainRightRef} className="absolute top-0 right-0 w-1/2 h-full z-0"
        style={{
          transformOrigin: 'right center',
          background: `linear-gradient(225deg, #0a0a0a 0%, #111 30%, #0a0a0a 60%, #111 100%)`,
          borderLeft: '2px solid rgba(244,108,56,0.15)',
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.5)',
        }}>
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 40px, rgba(244,108,56,0.03) 40px, rgba(244,108,56,0.03) 42px, transparent 42px, transparent 80px)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.01) 40px)`,
        }} />
      </div>

      {/* Matrix rain canvas — behind content, in front of curtains */}
      <canvas ref={matrixCanvas} className="absolute inset-0 z-[1]" style={{ width: '100%', height: '100%', opacity: 0.7 }} />

      {/* Scanline */}
      <div ref={scanlineRef} className="absolute left-0 w-full h-[2px] z-[10] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #F46C38, transparent)', top: '0%' }} />

      {/* Corner brackets */}
      {[
        { ref: cornerRefs[0], cls: 'top-3 left-3 border-l-2 border-t-2' },
        { ref: cornerRefs[1], cls: 'top-3 right-3 border-r-2 border-t-2' },
        { ref: cornerRefs[2], cls: 'bottom-3 left-3 border-l-2 border-b-2' },
        { ref: cornerRefs[3], cls: 'bottom-3 right-3 border-r-2 border-b-2' },
      ].map(({ ref, cls }, i) => (
        <div key={i} ref={ref}
          className={`absolute w-4 h-4 sm:w-8 sm:h-8 z-[5] ${cls}`}
          style={{ borderColor: '#F46C38' }} />
      ))}

      {/* Main content layer — above matrix */}
      <div className="absolute inset-0 z-[3]">

        {/* Typing code block (desktop) */}
        <pre ref={typingRef}
          className="hidden sm:block absolute top-[12%] left-[6%] text-[11px] md:text-xs leading-relaxed opacity-0 font-bold"
          style={{
            color: '#FF7A2F',
            fontFamily: "'Courier New', monospace",
            textShadow: '0 0 12px rgba(255,122,47,0.5)',
            maxWidth: '300px',
          }} />

        {/* Journey messages (desktop) */}
        <div ref={journeyRef}
          className="hidden sm:block absolute top-[12%] right-[6%] opacity-0 overflow-hidden"
          style={{ maxHeight: '160px', maxWidth: '260px' }} />

        {/* Center — counter + progress */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div ref={counterRef}
            className="text-5xl sm:text-8xl md:text-[7rem] font-extralight leading-none mb-3 sm:mb-5 tabular-nums opacity-0"
            style={{
              color: '#F46C38', fontFamily: "'Space Grotesk', sans-serif",
              textShadow: '0 0 40px rgba(244,108,56,0.3)',
            }}>
            000
          </div>
          <div ref={progressTrackRef}
            className="w-24 sm:w-44 md:w-56 h-[3px] relative overflow-hidden opacity-0"
            style={{ backgroundColor: 'rgba(244,108,56,0.08)', transformOrigin: 'center', borderRadius: '2px' }}>
            <div ref={progressBarRef} className="absolute left-0 top-0 h-full w-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(244,108,56,0.05) 40%, rgba(244,108,56,0.3) 75%, #F46C38 100%)',
                borderRadius: '2px',
                clipPath: 'polygon(0 40%, 85% 0%, 100% 0%, 100% 100%, 85% 100%, 0 60%)',
              }} />
          </div>

        </div>

        {/* Name reveal overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none w-full px-4">
          <div ref={brandLineRef} className="w-8 sm:w-16 h-[2px] mb-3 sm:mb-5"
            style={{ background: '#F46C38', transformOrigin: 'center', transform: 'scaleX(0)' }} />
          <h1 ref={nameFirstRef}
            className="text-[2rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight overflow-hidden whitespace-nowrap"
            style={{ color: '#fff', fontFamily: "'Syne', sans-serif" }} />
          <h1 ref={nameLastRef}
            className="text-[2rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight overflow-hidden whitespace-nowrap"
            style={{ color: '#F46C38', fontFamily: "'Syne', sans-serif" }} />
          <p ref={roleRef}
            className="text-[7px] sm:text-[10px] md:text-xs font-medium mt-2 sm:mt-4 uppercase opacity-0 whitespace-nowrap"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Space Grotesk', sans-serif" }}>
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
