// 3D bouncing ball loader.
// Adapted from Uiverse.io by Mahmoud-walid (CSS-only animation).
const styles = `
@keyframes bbl-rotate {
  0%   { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
  50%  { transform: rotateY(360deg) rotateX(360deg) rotateZ(0deg); }
  100% { transform: rotateY(720deg) rotateX(720deg) rotateZ(360deg); }
}
@keyframes bbl-bounce {
  0%   { transform: translateY(-70px) scale(1, 1); }
  15%  { transform: translateY(-56px) scale(1, 1); }
  45%  { transform: translateY(70px) scale(1, 1); }
  50%  { transform: translateY(73.5px) scale(1, 0.92); }
  55%  { transform: translateY(70px) scale(1, 0.95); }
  85%  { transform: translateY(-56px) scale(1, 1); }
  95%  { transform: translateY(-70px) scale(1, 1); }
  100% { transform: translateY(-70px) scale(1, 1); }
}
@keyframes bbl-shadow {
  0%   { filter: blur(3px); opacity: 0.6; transform: translateY(73px) scale(0.5, 0.5); }
  45%  { filter: blur(1px); opacity: 0.9; transform: translateY(73px) scale(1, 1); }
  55%  { filter: blur(1px); opacity: 0.9; transform: translateY(73px) scale(1, 1); }
  100% { filter: blur(3px); opacity: 0.6; transform: translateY(73px) scale(0.5, 0.5); }
}
.bbl-wrap {
  display: grid;
  place-items: center;
  height: 180px;
}
.bbl-ball {
  animation: bbl-bounce 1.2s infinite cubic-bezier(0.42, 0, 0.58, 1);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: relative;
  transform: translateY(-70px);
  transform-style: preserve-3d;
  z-index: 1;
}
.bbl-ball::before {
  background: radial-gradient(circle at 36px 20px, #C0392B, #5C0000);
  border: 2px solid #16140F;
  border-radius: 50%;
  content: "";
  height: calc(100% + 6px);
  left: -6px;
  position: absolute;
  top: -3px;
  transform: translateZ(1vmin);
  width: calc(100% + 6px);
}
.bbl-inner {
  animation: bbl-rotate 25s infinite linear;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
}
.bbl-line::before, .bbl-line::after {
  border: 2px solid #16140F;
  border-radius: 50%;
  content: "";
  height: 99%;
  width: 99%;
  position: absolute;
}
.bbl-line::before { transform: rotate3d(0, 0, 0, 0); }
.bbl-line::after  { transform: rotate3d(1, 0, 0, 90deg); }
.bbl-line--two::before { transform: rotate3d(0, 0, 0, 2deg); }
.bbl-line--two::after  { transform: rotate3d(1, 0, 0, 88deg); }
.bbl-oval::before, .bbl-oval::after {
  border-top: 4px solid #16140F;
  border-radius: 50%;
  content: "";
  height: 99%;
  width: 99%;
  position: absolute;
}
.bbl-oval::before { transform: rotate3d(1, 0, 0, 45deg) translate3d(0, 0, 6px); }
.bbl-oval::after  { transform: rotate3d(1, 0, 0, -45deg) translate3d(0, 0, -6px); }
.bbl-oval--two::before { transform: rotate3d(1, 0, 0, 135deg) translate3d(0, 0, -6px); }
.bbl-oval--two::after  { transform: rotate3d(1, 0, 0, -135deg) translate3d(0, 0, 6px); }
.bbl-shadow {
  animation: bbl-shadow 1.2s infinite cubic-bezier(0.42, 0, 0.58, 1);
  background: #16140F;
  filter: blur(2px);
  border-radius: 50%;
  height: 6px;
  width: 54px;
  transform: translateY(73px);
}
@media (prefers-reduced-motion: reduce) {
  .bbl-ball, .bbl-inner, .bbl-shadow { animation: none; }
}
`;

export default function BouncingBallLoader({ label = "Loading", className = "" }) {
  return (
    <div className={"flex flex-col items-center justify-center " + className} role="status" aria-live="polite">
      <style>{styles}</style>
      <div className="bbl-wrap">
        <div className="bbl-ball">
          <div className="bbl-inner">
            <div className="bbl-line" />
            <div className="bbl-line bbl-line--two" />
            <div className="bbl-oval" />
            <div className="bbl-oval bbl-oval--two" />
          </div>
        </div>
        <div className="bbl-shadow" />
      </div>
      {label && (
        <span className="mt-6 font-gothic text-[9px] uppercase tracking-[0.14em] text-ink-soft">
          {label}
        </span>
      )}
    </div>
  );
}
