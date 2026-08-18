import { nodes } from "@types/stack/nodes";
import { threads } from "@types/stack/threads";
import { labels } from "@types/stack/labels";

const labelCls = {
  default: "bg-paper-deep border border-ink/20",
  red:     "bg-[#e5b1a8] border border-ink/20",
  yellow:  "bg-[#eee2a7] border border-ink/20",
};

export default function DesktopBoard() {
  return (
    <div className="relative min-h-[700px]">
      <span className="absolute left-5 top-4 font-mono text-[10px] tracking-[0.14em] text-ink/40 uppercase select-none">Case File // Rahul Goswami</span>
      <span className="absolute right-5 top-4 font-mono text-[10px] tracking-[0.14em] text-ink/40 uppercase select-none">Frontend / Full-Stack</span>

      {/* SVG threads */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
        {threads.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill="none"
            stroke="#A6382C"
            strokeWidth={t.dashed ? "2" : "2.3"}
            strokeLinecap="round"
            opacity={t.dashed ? "0.45" : "0.8"}
            strokeDasharray={t.dashed ? "7 8" : undefined}
            style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.22))" }}
          />
        ))}
      </svg>

      {/* Center subject card */}
      <div className="absolute left-1/2 top-1/2 z-[2] w-[205px] -translate-x-1/2 -translate-y-1/2 -rotate-[2deg] bg-ink text-paper px-[22px] py-[22px] text-center shadow-[8px_10px_0_rgba(0,0,0,0.18)]">
        <span className="absolute -top-[9px] left-[14px] w-[44px] h-[16px] bg-[#eadf8c] opacity-90 -rotate-[8deg]" />
        <span className="absolute -top-[9px] right-[14px] w-[44px] h-[16px] bg-[#eadf8c] opacity-90 rotate-[7deg]" />
        <div className="font-mono text-[9px] tracking-[0.15em] text-paper/60 uppercase">Subject Profile</div>
        <h2 className="font-display text-[32px] leading-none tracking-[-0.04em] my-3">RAHUL</h2>
        <p className="font-mono text-[10px] text-paper/60 uppercase tracking-[0.06em]">Software Engineer Full-Stack Builder</p>
      </div>

      {/* Tech nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-[160px] min-h-[125px] -translate-x-1/2 -translate-y-1/2 bg-paper-bright border border-rule shadow-[4px_7px_0_rgba(56,35,18,0.13),0_9px_16px_rgba(30,20,10,0.12)] px-[14px] pt-[23px] pb-[13px] text-center cursor-default transition-all duration-250 hover:z-[50] hover:!rotate-0 hover:-translate-y-[calc(50%+6px)] hover:scale-[1.04] group"
          style={{ left: node.pos.left, top: node.pos.top, rotate: node.r }}
        >
          <span className="absolute -top-[9px] left-[10px] w-[38px] h-[15px] bg-[#e9d77d] opacity-90 -rotate-[8deg]" />
          <span className="absolute -top-[9px] right-[10px] w-[38px] h-[15px] bg-[#e9d77d] opacity-90 rotate-[7deg]" />
          <img src={node.icon} alt={node.name} className="w-[38px] h-[38px] object-contain mx-auto mb-2 drop-shadow-[0_1px_0_#fff]" />
          <div className="font-display text-[19px] font-bold tracking-[-0.02em] leading-tight">{node.name}</div>
          <div className="mt-1 font-mono text-[10px] text-ink-soft uppercase">{node.code} · {node.badge}</div>
          <span className="absolute -right-3 -bottom-3 bg-stamp text-paper font-mono text-[9px] font-bold tracking-[0.08em] px-2 py-1 -rotate-[4deg] shadow-[2px_3px_0_#68201d]">{node.badge}</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[180px] bg-ink text-paper font-mono text-[10px] leading-[1.5] px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] text-left">
            {node.note}
          </div>
        </div>
      ))}

      {/* Labels */}
      {labels.map((l) => (
        <div
          key={l.text}
          className={`absolute px-[11px] py-[8px] font-mono text-[13px] font-bold -rotate-[5deg] shadow-[2px_4px_0_rgba(50,30,15,0.12)] ${labelCls[l.variant]}`}
          style={{ left: l.pos.left, top: l.pos.top }}
        >
          {l.text}
        </div>
      ))}

      {/* Case notes */}
      <div className="absolute left-[2%] top-[72%] w-[180px] bg-paper-warm border-l-4 border-stamp px-[14px] py-[18px] font-mono text-[11px] leading-[1.5] shadow-[0_12px_25px_rgba(37,29,20,0.13)] rotate-[-5deg]">
        <strong className="block font-display text-[18px] mb-[6px]">Finding #01</strong>
        React + TypeScript form the core of the frontend workflow.
      </div>
      <div className="absolute right-[2%] top-[4%] w-[180px] bg-paper-warm border-l-4 border-stamp px-[14px] py-[18px] font-mono text-[11px] leading-[1.5] shadow-[0_12px_25px_rgba(37,29,20,0.13)] rotate-[4deg]">
        <strong className="block font-display text-[18px] mb-[6px]">Finding #02</strong>
        The stack connects UI, data, APIs, motion and mobile.
      </div>
    </div>
  );
}
