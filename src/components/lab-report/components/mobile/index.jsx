import { useEffect, useRef, useState, useCallback } from "react";
import { nodes } from "@types/stack/nodes";
import { mobileZones, secondaryLinks } from "@types/stack/zones";

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
const rotations = [-2, 1.5, -1.5, 2, -1, 1.8, -1.6, -2, 1.4, -1.6, 2, 3];
const allCardIds = mobileZones.flatMap((z) => z.cards);

function center(el, boardRect) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2 - boardRect.left, y: r.top + r.height / 2 - boardRect.top };
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
    const boardRect = board.getBoundingClientRect();
    svg.setAttribute("width", boardRect.width);
    svg.setAttribute("height", boardRect.height);
    svg.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
    svg.innerHTML = "";
    const sCenter = center(suspect, boardRect);

    secondaryLinks.forEach(([a, b]) => {
      const elA = cardRefs.current[a], elB = cardRefs.current[b];
      if (!elA || !elB) return;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", curve(center(elA, boardRect), center(elB, boardRect), 18));
      path.setAttribute("stroke", "#3a4a5c");
      path.setAttribute("stroke-width", "1.4");
      path.setAttribute("stroke-dasharray", "5 5");
      path.setAttribute("fill", "none");
      path.setAttribute("opacity", "0.35");
      path.setAttribute("stroke-linecap", "round");
      path.dataset.pair = `${a}|${b}`;
      path.dataset.type = "secondary";
      svg.appendChild(path);
    });

    allCardIds.forEach((id, i) => {
      const el = cardRefs.current[id];
      if (!el) return;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", curve(center(el, boardRect), sCenter, 24 + (i % 3) * 8));
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
        <div className="flex justify-center mb-6 relative z-[3]">
          <div ref={suspectRef} className="w-[200px] bg-paper-bright border border-rule shadow-[3px_4px_10px_rgba(0,0,0,0.2)] px-[14px] pt-[14px] pb-[16px] -rotate-[1.2deg]">
            <div className="w-full h-[140px] bg-gradient-to-br from-ink-soft to-ink flex items-end justify-center mb-[10px] border border-ink/20 overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-[82px] opacity-90">
                <circle cx="50" cy="38" r="18" fill="#c9d3d8" />
                <path d="M15,100 Q50,58 85,100 Z" fill="#c9d3d8" />
              </svg>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-stamp uppercase mb-1">Subject / Case #2026-RG</div>
            <div className="font-display text-[16px] font-bold leading-tight">RAHUL GOSWAMI</div>
            <div className="font-mono text-[11px] mt-1 text-ink-soft">Frontend Developer — React & React Native</div>
          </div>
        </div>

        {/* Case note */}
        <div className="relative z-[3] max-w-[340px] mx-auto mb-6 bg-paper-warm border-l-4 border-stamp px-[12px] py-[10px] font-mono text-[12px] leading-[1.5] shadow-[2px_3px_6px_rgba(0,0,0,0.15)] rotate-[0.8deg]">
          <div className="font-mono text-[10px] tracking-[0.15em] text-stamp uppercase mb-1">Case Note</div>
          <div>{activeId ? nodeMap[activeId]?.note : "Tap any card to pull its file."}</div>
        </div>

        {/* Zones */}
        {mobileZones.map((zone) => (
          <div key={zone.id} className="relative z-[2] mb-6">
            <div className="font-mono text-[11px] tracking-[0.2em] text-ink bg-[#f4e07a] px-[9px] py-[3px] shadow-[2px_2px_4px_rgba(0,0,0,0.2)] -rotate-[2deg] w-fit mb-3 uppercase">
              {zone.label}
            </div>
            <div className="flex flex-wrap gap-[18px] justify-center">
              {zone.cards.map((id) => {
                const node = nodeMap[id];
                if (!node) return null;
                const rot = rotations[allCardIds.indexOf(id)] ?? 0;
                return (
                  <div
                    key={id}
                    ref={(el) => { cardRefs.current[id] = el; }}
                    onClick={() => handleClick(id)}
                    className={`relative w-[112px] bg-paper-bright border border-rule shadow-[2px_3px_8px_rgba(0,0,0,0.25)] px-2 pt-2 pb-[22px] cursor-pointer transition-all duration-150 z-[2] ${activeId === id ? "scale-[1.07] !rotate-0 shadow-[4px_8px_16px_rgba(0,0,0,0.35)] z-10" : ""}`}
                    style={{ rotate: `${rot}deg` }}
                  >
                    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-[13px] h-[13px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff6a5e,#c0272a_70%)] shadow-[0_2px_3px_rgba(0,0,0,0.5)] z-[5]" />
                    <div className="h-[40px] flex items-center justify-center bg-paper border border-ink/10 mb-[7px]">
                      <img src={node.icon} alt={node.name} className="h-[26px] w-[26px] object-contain" />
                    </div>
                    <div className="font-display text-[12px] font-bold leading-tight">{node.name}</div>
                    <div className="font-mono text-[9px] text-ink-soft mt-[1px] tracking-[0.1em]">{node.code}</div>
                    <div className="absolute bottom-[6px] right-[6px] font-mono text-[8px] border border-stamp text-stamp px-1 py-[1px] -rotate-[8deg] opacity-75 rounded-[3px]">
                      {node.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center font-mono text-[13px] text-ink-soft pb-6 px-4 italic">
        findings are illustrative — what I reach for, day to day, not a ranking.
      </p>
    </div>
  );
}
