import { projects } from "@types/projects";
import FeaturedProject from "./components/FeaturedProject";
import GridProject from "./components/GridProject";
import SectionHeader from "@components/shared/SectionHeader";

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <SectionHeader
          eyebrow="The Evidence"
          title="Selected Work"
          aside="Products built to solve problems — not just fill portfolios."
        />
        <FeaturedProject project={featured} />
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2">
          {rest.map((p, i) => <GridProject key={p.id} project={p} delay={i * 0.06} />)}
        </div>
      </div>
    </section>
  );
}
