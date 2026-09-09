import { motion } from "framer-motion";
import { ChevronUpIcon, settleLarge as settle } from "@animations";
import ProjectImage from "./ProjectImage";

export default function FeaturedProject({ project }) {
  return (
    <motion.article
      {...settle(0)}
      className="group relative flex flex-col items-stretch gap-8 border-b border-ink/20 py-7 transition-colors hover:bg-paper-warm min-[940px]:flex-row"
    >
      <div className="w-full self-start min-[940px]:w-[46%] min-[940px]:flex-none">
        <ProjectImage
          img={project.img}
          alt={project.title}
          index={project.index}
          domain={project.domain}
          height="aspect-video min-[940px]:aspect-auto min-[940px]:h-[272px]"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
          {project.index}
        </span>
        <span className="mt-3 font-gothic text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
          {project.category} | {project.year}
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
            <span className="hidden md:block">Open case File{" "}</span>
            <span className="md:hidden">Case File</span>
            <ChevronUpIcon size={14} rotate={45} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
