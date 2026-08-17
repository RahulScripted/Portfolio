import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

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
      <h3 className="mt-2 font-display text-[28px] font-normal leading-[1.06] tracking-[-0.01em] min-h-[calc(2*28px*1.06)]">
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
        <span className="font-mono text-xs text-ink-soft">{project.year}</span>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-editorial group inline-flex items-center gap-1.5 after:absolute after:inset-0 after:content-['']"
        >
          Open case File{" "}
          <span className="transition-transform duration-150 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}
