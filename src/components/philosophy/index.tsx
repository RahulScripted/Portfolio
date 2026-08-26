import React from "react";
import DesktopPhilosophy from "./desktop";
import MobilePhilosophy from "./mobile";

const Philosophy = () => {
  return (
    <section id="education" className="py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">Engineering Principles</span>
              <h2 className="mt-1.5 section-h2">Philosophy</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              How I think before I build
            </span>
          </div>
          <div className="section-rule" />
        </div>
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
