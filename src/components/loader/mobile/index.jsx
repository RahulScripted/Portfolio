import { useEffect, useState, useRef, useCallback } from "react";

export default function MobileLoader({ onComplete }) {
  const [done, setDone] = useState(() => {
    const seen = !!sessionStorage.getItem("intro_seen");
    if (!seen && typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return seen;
  });
  const [count, setCount] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const intervalRef = useRef(null);

  const exit = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFadeOut(true);
    sessionStorage.setItem("intro_seen", "1");
    setTimeout(() => {
      setDone(true);
      window.scrollTo({ top: 0 });
      onComplete?.();
    }, 500);
  }, [onComplete]);

  useEffect(() => {
    if (done) return;
    const duration = 3000; // 3 seconds total
    const steps = 100;
    const stepTime = duration / steps;

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(exit, 400);
          return 100;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [done, exit]);

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

  return (
    <div className={`mobile-loader ${fadeOut ? "mobile-loader--fade" : ""}`}>
      <div id="ghost">
        <div id="red">
          <div id="pupil"></div>
          <div id="pupil1"></div>
          <div id="eye"></div>
          <div id="eye1"></div>
          <div id="top0"></div>
          <div id="top1"></div>
          <div id="top2"></div>
          <div id="top3"></div>
          <div id="top4"></div>
          <div id="st0"></div>
          <div id="st1"></div>
          <div id="st2"></div>
          <div id="st3"></div>
          <div id="st4"></div>
          <div id="st5"></div>
          <div id="an1"></div>
          <div id="an2"></div>
          <div id="an3"></div>
          <div id="an4"></div>
          <div id="an5"></div>
          <div id="an6"></div>
          <div id="an7"></div>
          <div id="an8"></div>
          <div id="an9"></div>
          <div id="an10"></div>
          <div id="an11"></div>
          <div id="an12"></div>
          <div id="an13"></div>
          <div id="an14"></div>
          <div id="an15"></div>
          <div id="an16"></div>
          <div id="an17"></div>
          <div id="an18"></div>
        </div>
        <div id="shadow"></div>
      </div>

      <div className="mobile-loader__countdown">
        <div className="mobile-loader__line" />
        <span className="mobile-loader__number">{count}</span>
      </div>
    </div>
  );
}
