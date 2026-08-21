import { projects } from "@types/projects";
import FeaturedProject from "./components/FeaturedProject";
import GridProject from "./components/GridProject";

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-5 pb-2.5">
            <div><span className="section-eyebrow">The Evidence</span><h2 className="mt-1.5 section-h2">Selected Work</h2></div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft hidden sm:block">Products built to solve problems — not just fill portfolios.</span>
          </div>
          <div className="section-rule" />
        </div>
        <FeaturedProject project={featured} />
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2">
          {rest.map((p, i) => <GridProject key={p.id} project={p} delay={i * 0.06} />)}
        </div>
      </div>
    </section>
  );
}
