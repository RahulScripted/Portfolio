import { useEffect, useRef, useState, useCallback, memo } from "react";

function l(e, a, t) {
  if (e <= a[0]) return t[0];
  for (let n = 1; n < a.length; n++) {
    if (e <= a[n]) {
      const r = (e - a[n - 1]) / (a[n] - a[n - 1]);
      return t[n - 1] + (t[n] - t[n - 1]) * r;
    }
  }
  return t[t.length - 1];
}

function glassR(w, h) {
  const base = Math.min(w, h);
  if (base < 480) return Math.round(Math.min(72, Math.max(56, 0.13 * base)));
  return Math.round(Math.min(104, Math.max(82, 0.12 * base)));
}

const COLS = ["The Morning Brief", "Notes from the Desk", "Field Report", "Late Edition", "On the Record"];

const Scene = memo(function Scene() {
  return (
    <>
      {COLS.map((head, ci) => {
        // Create paragraph-like blocks with gaps between them
        const blocks = [];
        const seed = ci * 7 + 3;
        let lineIndex = 0;
        const numBlocks = 20 + (seed % 4); // plenty of blocks to fill full height
        for (let b = 0; b < numBlocks; b++) {
          const linesInBlock = 4 + ((seed + b * 5) % 7); // 4-10 lines per block
          const lines = [];
          for (let li = 0; li < linesInBlock; li++) {
            const r = (7 * lineIndex + 5 * ci) % 13;
            const widthClass = r === 0 ? "x" : r % 4 === 0 ? "s" : r % 3 === 0 ? "m" : "";
            lines.push(<div key={lineIndex} className={`fm-col-l ${widthClass}`} />);
            lineIndex++;
          }
          blocks.push(
            <div key={`block-${b}`} className="fm-block">
              {lines}
            </div>
          );
        }
        return (
          <div key={ci} className="fm-col">
            <div className="fm-col-h">{head}</div>
            <div className="fm-col-r" />
            {blocks}
          </div>
        );
      })}
      <div className="fm-masthead">
        <div className="fm-masthead-k">Wanted</div>
        <div className="fm-masthead-t">Rahul Goswami</div>
        <div className="fm-masthead-r" />
      </div>
    </>
  );
});

export default function DesktopLoader({ onComplete }) {
  const [done, setDone] = useState(() => {
    const seen = !!sessionStorage.getItem("intro_seen");
    if (!seen && typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return seen;
  });
  const [phase, setPhase] = useState("hunt");
  const [lens, setLens] = useState({ x: 0, y: 0, r: -10 });
  const [progress, setProgress] = useState(0.48);
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const rafRef = useRef(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(0);
  const lockStartTime = useRef(0);
  const revealStartTime = useRef(0);
  const phaseRef = useRef("hunt");

  const exit = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    sessionStorage.setItem("intro_seen", "1");
    setTimeout(() => { setDone(true); window.scrollTo({ top: 0 }); onComplete?.(); }, 460);
  }, [onComplete]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") exit(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [exit]);

  useEffect(() => {
    if (phase !== "hunt") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const W = window.innerWidth || 1200, H = window.innerHeight || 800, N = glassR(W, H);
    smoothPos.current = { x: -(0.3 * W), y: -(0.2 * H) };
    targetPos.current = { ...smoothPos.current };
    lastMoveTime.current = performance.now();

    const onPointer = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      targetPos.current = { x: clientX - W / 2, y: clientY - H / 2 };
      lastMoveTime.current = performance.now();
    };
    window.addEventListener("pointermove", onPointer);
    window.addEventListener("touchmove", onPointer, { passive: true });

    const touchAutoSpeed = isTouch ? 0.025 : 0.02;

    const tick = (now) => {
      const tgt = targetPos.current, smt = smoothPos.current;
      if (now - lastMoveTime.current > (isTouch ? 1200 : 3000)) {
        tgt.x += (0 - tgt.x) * touchAutoSpeed;
        tgt.y += (0 - tgt.y) * touchAutoSpeed;
      }
      smt.x += (tgt.x - smt.x) * 0.12; smt.y += (tgt.y - smt.y) * 0.12;
      setLens({ x: smt.x, y: smt.y, r: -10 });
      if (Math.hypot(smt.x, smt.y) < N * 0.6 && now - revealStartTime.current > 800) {
        if (lockStartTime.current) { if (now - lockStartTime.current > 250) { phaseRef.current = "locked"; setPhase("locked"); return; } }
        else lockStartTime.current = now;
      } else lockStartTime.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    };
    revealStartTime.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onPointer);
    };
  }, [phase, isTouch]);

  useEffect(() => {
    if (phase !== "locked") return;
    const startPos = { ...smoothPos.current };
    let startTime = 0, exitScheduled = false;
    const tick = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const snapT = 1 - Math.pow(1 - Math.min(1, elapsed / 320), 3);
      setLens({ x: startPos.x * (1 - snapT), y: startPos.y * (1 - snapT), r: -10 + 12 * snapT });
      const progT = Math.min(1, Math.max(0, (elapsed - 320) / 3400));
      if (progT > 0) setProgress(0.48 + 0.52 * progT);
      if (progT >= 1) { if (!exitScheduled) { exitScheduled = true; setTimeout(exit, 320); } return; }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, exit]);

  useEffect(() => {
    if (!done) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  const W = typeof window !== "undefined" ? window.innerWidth || 1200 : 1200;
  const H = typeof window !== "undefined" ? window.innerHeight || 800 : 800;
  const N = glassR(W, H);
  const cx = W / 2 + lens.x, cy = H / 2 + lens.y;
  const magX = -0.9 * cx, magY = -0.9 * cy;

  let dispX = lens.x, dispY = lens.y, dispR = lens.r;
  if (progress > 0.5 && progress < 0.59) {
    const e = (progress - 0.5) / 0.09, a = 1 - e;
    dispX += 8 * Math.sin(e * Math.PI * 11) * a;
    dispY += 5 * Math.cos(e * Math.PI * 9) * a;
    dispR += 5 * Math.sin(e * Math.PI * 13) * a;
  }

  const lensOpacity  = l(progress, [0.68, 0.74], [1, 0]);
  const dimOpacity   = l(progress, [0.48, 0.56], [0, 0.3]);
  const flashOpacity = l(progress, [0.66, 0.74], [0, 1]);
  const stampOpacity = l(progress, [0.76, 0.785], [0, 1]);
  const stampScale   = l(progress, [0.76, 0.798, 0.83, 0.86], [2, 0.8, 1.1, 1]);
  const stampY       = l(progress, [0.76, 0.798], [-54, 0]);
  const stampRot     = l(progress, [0.76, 0.86], [-14, -10]);
  const exitT        = Math.min(1, Math.max(0, (progress - 0.94) / 0.06));
  const exitEase     = exitT < 0.5 ? 4 * exitT ** 3 : 1 - (-2 * exitT + 2) ** 3 / 2;
  const zoomScale    = l(progress, [0.94, 0.98, 1], [1, 1.035, 1.02]);
  const blurAmt      = l(progress, [0.93, 0.96, 0.99, 1], [0, 10, 3, 0]);
  const blurStr      = blurAmt > 0.1 ? `blur(${blurAmt}px)` : "none";
  const clipPath     = `circle(${N}px at ${cx}px ${cy}px)`;

  return (
    <div className="fm-intro">
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backdropFilter: blurStr, WebkitBackdropFilter: blurStr }} />
      <div className="fm-zoom" style={{ transform: `scale(${zoomScale})`, opacity: 1 - exitEase, filter: `blur(${5 * exitEase}px)`, transformOrigin: "50% 50%", transition: "opacity .2s ease, filter .2s ease" }}>
        <div className="fm-scene fm-scene--base"><Scene /></div>
        <div className="fm-vignette" />
        <div className="fm-scene--mag-clip" style={{ clipPath, WebkitClipPath: clipPath }}>
          <div className="fm-scene fm-scene--mag" style={{ transform: `translate(${magX}px, ${magY}px) scale(1.9)`, transformOrigin: "0px 0px" }}>
            <Scene />
          </div>
        </div>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: "240vw", height: "240vh", marginLeft: "-120vw", marginTop: "-120vh", pointerEvents: "none", zIndex: 4, transform: `translate(${dispX}px, ${dispY}px)`, background: `radial-gradient(circle at 50% 50%, transparent ${N - 4}px, rgba(22,20,15,.26) ${N + 200}px, rgba(22,20,15,.42) 58%)` }} />
        <div className="fm-dim" style={{ opacity: dimOpacity }} />
        <div className="fm-lens" style={{ width: N * 2, height: N * 2, marginLeft: -N, marginTop: -N, transform: `translate(${dispX}px, ${dispY}px) rotate(${dispR}deg)`, opacity: lensOpacity }}>
          <div className="fm-lens-handle" />
          <div className="fm-lens-glass" />
          <div className="fm-lens-rim" />
        </div>
        <div className="fm-grain" />
        <div style={{ position: "absolute", inset: 0, zIndex: 8, background: "#FBFAF5", opacity: flashOpacity, pointerEvents: "none" }} />
        <div className="fm-stampwrap">
          <div className="fm-stamp" style={{ opacity: stampOpacity, transform: `translateY(${stampY}px) scale(${stampScale}) rotate(${stampRot}deg)`, transition: "opacity .1s ease-out" }}>
            <span className="fm-stamp-border" />
            <span className="fm-stamp-text">Identified</span>
          </div>
        </div>
      </div>
      <div className="fm-hint" style={{ opacity: phase === "hunt" ? 1 : 0 }}>
        {isTouch ? "Drag the glass — find the subject" : "Take the glass — find the subject"}
      </div>
      <button className="fm-skip" type="button" onClick={exit}>Skip intro</button>
    </div>
  );
}
