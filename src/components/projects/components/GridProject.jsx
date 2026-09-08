import { motion } from "framer-motion";
import { ChevronUpIcon, settleLarge as settle } from "@animations";
import ProjectImage from "./ProjectImage";

export default function GridProject({ project, delay }) {
  return (
    <motion.article
      {...settle(delay)}
      className="group relative flex flex-col border-t border-ink/20 py-[26px] pr-0 transition-colors hover:bg-paper-warm min-[600px]:border-r min-[600px]:border-ink/20 min-[600px]:pr-[26px] min-[600px]:[&:nth-child(2n)]:border-r-0 min-[600px]:[&:nth-child(2n)]:pr-0 md:pl-10"
    >
      <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
        {project.index}
      </span>
      <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
        {project.category}
      </span>
      <h3 className="mt-2 font-display font-normal leading-[1.06] tracking-[-0.01em]" style={{ fontSize: "clamp(20px, 2.8vw, 28px)", minHeight: "calc(2 * 1.06 * 1em)" }}>
        {project.title}
      </h3>
      <div className="mt-4">
        <ProjectImage
          img={project.img}
          alt={project.title}
          index={project.index}
          domain={project.domain}
          height="h-[176px]"
        />
      </div>
      <p className="mt-3.5 mb-auto font-text text-[15px] leading-[1.55] text-ink-soft justify-editorial">
        {project.summary}
      </p>
      <div className="mb-4 mt-[18px] flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-ink/20 pt-3.5">
        <span className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-soft">
          {project.year}
          {(Array.isArray(project.role) ? project.role : [project.role]).map((r) => (
            <span
              key={r}
              className="inline-flex items-center rounded-full border border-stamp/40 bg-stamp/10 px-2 py-0.5 font-gothic text-[10px] font-bold uppercase tracking-[0.1em] text-stamp"
            >
              {r}
            </span>
          ))}
        </span>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-editorial group inline-flex items-center gap-1.5 after:absolute after:inset-0 after:content-['']"
        >
          Open case File{" "}
          <ChevronUpIcon size={14} rotate={45} />
        </a>
      </div>
    </motion.article>
  );
}
