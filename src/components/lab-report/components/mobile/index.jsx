import { useEffect, useRef, useState, useCallback } from "react";
import { nodes } from "@types/stack/nodes";
import { mobileZones } from "@types/stack/zones";
import { doodle, doodleFallback } from "@types/hero";

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
const rotations = [-2, 1.5, -1.5, 2, -1, 1.8, -1.6, -2, 1.4, -1.6, 2, 3];
const allCardIds = mobileZones.flatMap((z) => z.cards);

function pinCenter(el, boardEl) {
  // Walk up the offset tree relative to boardEl for scroll-safe coords
  let top = 0, left = 0;
  let node = el;
  while (node && node !== boardEl) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent;
  }
  return { x: left + el.offsetWidth / 2, y: top };
}

function curve(p1, p2, sag) {
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len, ny = dx / len;
  return `M ${p1.x} ${p1.y} Q ${(p1.x + p2.x) / 2 + nx * sag} ${(p1.y + p2.y) / 2 + ny * sag} ${p2.x} ${p2.y}`;
}

export default function MobileBoard() {
  const boardRef = useRef(null);
  const svgRef = useRef(null);
  const suspectRef = useRef(null);
  const cardRefs = useRef({});
  const firstDraw = useRef(true);
  const [activeId, setActiveId] = useState(null);

  const layout = useCallback(() => {
    const board = boardRef.current, svg = svgRef.current, suspect = suspectRef.current;
    if (!board || !svg || !suspect) return;
    const w = board.offsetWidth;
    const h = board.scrollHeight;
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = "";
    const sCenter = pinCenter(suspect, board);

    allCardIds.forEach((id, i) => {
      const el = cardRefs.current[id];
      if (!el) return;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", curve(pinCenter(el, board), sCenter, 24 + (i % 3) * 8));
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#A6382C");
      path.setAttribute("stroke-width", "2.4");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("opacity", "0.65");
      if (firstDraw.current) {
        path.setAttribute("stroke-dasharray", "1200");
        path.setAttribute("stroke-dashoffset", "1200");
        path.style.transition = `stroke-dashoffset 0.7s ease ${i * 0.06}s`;
        requestAnimationFrame(() => path.setAttribute("stroke-dashoffset", "0"));
      }
      path.id = `line-${id}`;
      svg.appendChild(path);
    });
    firstDraw.current = false;
  }, []);

  useEffect(() => {
    const t = setTimeout(layout, 80);
    window.addEventListener("resize", layout);
    return () => { clearTimeout(t); window.removeEventListener("resize", layout); };
  }, [layout]);

  const handleClick = (id) => {
    const svg = svgRef.current;
    if (!svg) return;
    const next = activeId === id ? null : id;
    setActiveId(next);
    svg.querySelectorAll("path").forEach((p) => {
      p.setAttribute("opacity", p.dataset.type === "secondary" ? "0.35" : "0.65");
      p.setAttribute("stroke-width", p.dataset.type === "secondary" ? "1.4" : "2.4");
      p.setAttribute("stroke", p.dataset.type === "secondary" ? "#3a4a5c" : "#A6382C");
    });
    if (!next) return;
    const line = svg.querySelector(`#line-${next}`);
    if (line) { line.setAttribute("opacity", "1"); line.setAttribute("stroke-width", "4"); line.setAttribute("stroke", "#e0322c"); }
    svg.querySelectorAll("path[data-type='secondary']").forEach((p) => {
      if (p.dataset.pair?.split("|").includes(next)) { p.setAttribute("opacity", "0.85"); p.setAttribute("stroke-width", "2"); }
    });
  };

  return (
    <div>
      <p className="text-center font-mono text-[13px] text-ink-soft pb-4 px-4">tap a piece of evidence to trace its string</p>

      <div ref={boardRef} className="relative max-w-[600px] mx-auto px-4 pb-8">
        <svg ref={svgRef} className="absolute top-0 left-0 pointer-events-none z-[1] overflow-visible" />

        {/* Suspect card */}
        <div className="flex justify-center mb-6 relative z-[2]">
          <div ref={suspectRef} className="w-[200px] bg-paper-bright border border-rule shadow-[3px_4px_10px_rgba(0,0,0,0.2)] px-[14px] pt-[14px] pb-[16px] -rotate-[1.2deg]">
            <div className="w-full h-[140px] mb-[10px] border border-ink/20 overflow-hidden">
              <picture>
                <source srcSet={doodle} type="image/webp" />
                <img src={doodleFallback} alt="Rahul Goswami — profile illustration" className="w-full h-full object-cover object-top" loading="lazy" />
              </picture>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-stamp uppercase mb-1">Subject Profile</div>
            <div className="font-display text-[16px] font-bold leading-tight">RAHUL</div>
            <div className="font-mono text-[11px] mt-1 text-ink-soft">Software Engineer</div>
          </div>
        </div>



        {/* Zones */}
        {mobileZones.map((zone, zoneIdx) => (
          <div key={zone.id} className="relative mb-6" style={{ zIndex: 10 + zoneIdx }}>
            <div className="font-mono text-[11px] tracking-[0.2em] text-ink bg-[#f4e07a] px-[9px] py-[3px] shadow-[2px_2px_4px_rgba(0,0,0,0.2)] -rotate-[2deg] w-fit mb-3 uppercase">
              {zone.label}
            </div>
            <div className="flex flex-wrap gap-[18px] justify-center">
              {zone.cards.map((id) => {
                const node = nodeMap[id];
                if (!node) return null;
                const rot = rotations[allCardIds.indexOf(id)] ?? 0;
                const isActive = activeId === id;
                return (
                  <div
                    key={id}
                    ref={(el) => { cardRefs.current[id] = el; }}
                    onClick={() => handleClick(id)}
                    className={`relative w-[112px] bg-paper-bright border border-rule shadow-[2px_3px_8px_rgba(0,0,0,0.25)] px-2 pt-2 pb-[22px] cursor-pointer transition-all duration-150 ${isActive ? "scale-[1.07] !rotate-0 shadow-[4px_8px_16px_rgba(0,0,0,0.35)]" : ""}`}
                    style={{ rotate: isActive ? "0deg" : `${rot}deg`, zIndex: isActive ? 999 : 2 }}
                  >
                    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-[13px] h-[13px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6a5e,#c0272a_70%)] shadow-[0_2px_3px_rgba(0,0,0,0.5)] z-[5]" />
                    <div className="h-[40px] flex items-center justify-center bg-paper border border-ink/10 mb-[7px]">
                      <img src={node.icon} alt={node.name} className="h-[26px] w-[26px] object-contain" />
                    </div>
                    <div className="font-display text-[12px] font-bold leading-tight">{node.name}</div>
                    <div className="font-mono text-[9px] text-ink-soft mt-[1px] tracking-[0.1em]">{node.code}</div>
                    <div className="absolute bottom-[6px] right-[6px] font-mono text-[8px] text-stamp px-1 py-[1px] -rotate-[8deg] opacity-75 rounded-[3px]">
                      {node.badge}
                    </div>
                    {/* Case note tooltip - appears above card on click */}
                    {isActive && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[180px] bg-paper-warm border-l-4 border-stamp px-[10px] py-[8px] font-mono text-[11px] leading-[1.4] shadow-[2px_3px_6px_rgba(0,0,0,0.2)]">
                        <div className="font-mono text-[9px] tracking-[0.12em] text-stamp uppercase mb-1">Case Note</div>
                        <div className="text-ink">{node.note}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
