import DesktopPhilosophy from "./desktop";
import MobilePhilosophy from "./mobile";
import SectionHeader from "@components/shared/SectionHeader";

const Philosophy = () => {
  return (
    <section id="education" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <SectionHeader
          eyebrow="Engineering Principles"
          title="Philosophy"
          aside="How I think before I build"
        />
        <div className="hidden md:block">
          <DesktopPhilosophy />
        </div>
        <div className="block md:hidden">
            <MobilePhilosophy />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
