import SectionHeader from "@components/shared/SectionHeader";
import TemplateCards from "./cards";

export default function CaseStudies() {
  return (
    <section id="work" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <SectionHeader
          eyebrow="Case Studies"
          title="The Thinking Behind the Build"
          aside="Behind the decisions that shape the product"
        />
        <TemplateCards />
      </div>
    </section>
  );
}
