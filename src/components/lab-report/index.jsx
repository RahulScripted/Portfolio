import DesktopBoard from "./components/desktop";
import MobileBoard from "./components/mobile";
import SectionHeader from "@components/shared/SectionHeader";

export default function LabReport() {
  return (
    <section id="stack" className="scroll-mt-[50px] py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">

        <SectionHeader
          eyebrow="Evidence Board / 001"
          title="The Engineering Stack"
          aside="Tools used to design, build, debug and ship production software."
        />

        {/* Intro line */}
        <p className="mb-6 font-mono text-[13px] text-ink-soft max-w-[480px]">
          My primary focus is frontend and product engineering, supported by the tools I use for application architecture, API integration, testing, performance and deployment.
        </p>

        {/* Desktop board */}
        <div className="hidden sm:block">
          <DesktopBoard />
        </div>

        {/* Mobile board */}
        <div className="block sm:hidden pt-6">
          <MobileBoard />
        </div>

        <p className="mt-3 font-gothic text-[11px] font-medium tracking-[0.04em] text-ink-soft sm:text-right">
          Findings are illustrative — these are the tools I reach for day to day, not a ranking of everything I know.
        </p>
      </div>
    </section>
  );
}
