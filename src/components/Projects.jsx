import { motion } from "framer-motion";
import { projects } from "../data";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

// Paper frame image with hover effects — the core visual treatment
function ProjectImage({ img, alt, index, domain = "", height = "h-[272px]" }) {
  return (
    <div className="relative border border-ink/20 bg-paper-bright p-2 pb-0 shadow-[0_2px_16px_rgba(22,20,15,0.12)]">
      {/* Tape strip */}
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 z-[1] h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/80"
      />
      <div className={`relative overflow-hidden border border-ink/30 bg-paper ${height}`}>
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.04] mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* Red halftone dot overlay on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-50"
          style={{
            background: "radial-gradient(rgba(166,56,44,0.55) 0.7px, transparent 0.8px)",
            backgroundSize: "4px 4px",
          }}
        />
        {/* SHIPPED badge — appears on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2.5 top-2.5 rotate-[8deg] scale-150 border-[3px] border-stamp bg-paper-bright/90 px-2.5 py-1 font-gothic text-[11px] font-black uppercase tracking-[0.18em] text-stamp opacity-0 transition-all duration-200 ease-out group-hover:-rotate-[6deg] group-hover:scale-100 group-hover:opacity-100"
          style={{ filter: "url(#rough-stamp)" }}
        >
          Shipped
        </span>
      </div>
      {/* Below-image metadata */}
      <div className="flex items-center justify-between gap-3 px-1 py-1.5 font-mono text-[11px] tracking-[0.02em] text-ink-soft">
        <span className="relative shrink-0 font-bold uppercase text-ink">
          {`Project ${index}`}
          {/* SVG sketch underline */}
          <svg
            aria-hidden="true"
            viewBox="0 0 120 44"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-1.5 -left-2 -right-3 -top-1.5 h-[calc(100%+12px)] w-[calc(100%+20px)]"
          >
            <path
              d="M10 24 C 8 10, 44 4, 76 7 C 104 10, 116 18, 112 28 C 108 38, 70 42, 40 39 C 16 37, 8 30, 12 20"
              fill="none"
              stroke="#A6382C"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </span>
        <span className="truncate text-ink-soft">{domain}</span>
      </div>
    </div>
  );
}

// Featured card (Exhibit A — full-width horizontal)
function FeaturedProject({ project }) {
  return (
    <motion.article
      {...settle(0)}
      className="group relative flex flex-col items-stretch gap-8 border-b border-ink/20 py-7 transition-colors hover:bg-paper-warm min-[940px]:flex-row"
    >
      {/* Image */}
      <div className="w-full self-start min-[940px]:w-[46%] min-[940px]:flex-none">
        <ProjectImage img={project.img} alt={project.title} index={project.index} domain={project.domain} height="aspect-video min-[940px]:aspect-auto min-[940px]:h-[272px]" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
          {project.index}
        </span>
        <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
          {project.category} · {project.year}
        </span>
        <h3
          className="mt-2 font-display font-normal text-ink leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          {project.title}
        </h3>
        <p className="mt-3.5 mb-auto max-w-[60ch] font-text text-[17px] leading-[1.55] text-ink-soft justify-editorial">
          {project.summary}
        </p>
        <div className="mb-4 mt-[18px] flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-ink/20 pt-3.5">
          <span className="font-mono text-xs text-ink-soft">
            {project.year} · {project.role}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-editorial group inline-flex items-center gap-1.5 after:absolute after:inset-0 after:content-['']"
          >
            View live{" "}
            <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// Grid card (Projects 02, 03)
function GridProject({ project, delay }) {
  return (
    <motion.article
      {...settle(delay)}
      className="group relative flex flex-col border-t border-ink/20 py-[26px] pr-0 transition-colors hover:bg-paper-warm min-[600px]:border-r min-[600px]:border-ink/20 min-[600px]:pr-[26px] min-[600px]:[&:nth-child(2n)]:border-r-0 min-[600px]:[&:nth-child(2n)]:pr-0"
    >
      <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
        {project.index}
      </span>
      <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
        {project.category}
      </span>
      <h3 className="mt-2 font-display text-[28px] font-normal leading-[1.06] tracking-[-0.01em] min-h-[calc(2*28px*1.06)]">
        {project.title}
      </h3>
      <div className="mt-4">
        <ProjectImage img={project.img} alt={project.title} index={project.index} domain={project.domain} height="h-[176px]" />
      </div>
      <p className="mt-3.5 mb-auto font-text text-[15px] leading-[1.55] text-ink-soft justify-editorial">
        {project.summary}
      </p>
      <div className="mb-4 mt-[18px] flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-ink/20 pt-3.5">
        <span className="font-mono text-xs text-ink-soft">{project.year}</span>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-editorial group inline-flex items-center gap-1.5 after:absolute after:inset-0 after:content-['']"
        >
          View live{" "}
          <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="py-[76px] px-5 sm:px-[30px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Section header */}
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">The Evidence</span>
              <h2 className="mt-1.5 section-h2">Selected Work</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              Projects {projects.map(p => p.index).join(" · ")} · 2024 — Now
            </span>
          </div>
          <div className="section-rule" />
        </div>

        {/* Featured project */}
        <FeaturedProject project={featured} />

        {/* Grid projects */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2">
          {rest.map((p, i) => (
            <GridProject key={p.id} project={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
