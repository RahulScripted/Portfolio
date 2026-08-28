import { motion } from "framer-motion";
import { settle, settleLarge } from "@animations";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuBox, LuLayers, LuShield, LuCreditCard, LuRocket, LuSettings, LuGlobe } from "react-icons/lu";

const getMetricIcon = (label, index) => {
  const iconClass = "w-5 h-5 text-stamp";
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("user")) return <HiOutlineUserGroup className={iconClass} />;
  if (lowerLabel.includes("workflow") || lowerLabel.includes("environment")) return <TbActivityHeartbeat className={iconClass} />;
  if (lowerLabel.includes("component") || lowerLabel.includes("architecture")) return <LuBox className={iconClass} />;
  if (lowerLabel.includes("product") || lowerLabel.includes("application")) return <LuLayers className={iconClass} />;
  if (lowerLabel.includes("security")) return <LuShield className={iconClass} />;
  if (lowerLabel.includes("payment")) return <LuCreditCard className={iconClass} />;
  const fallbacks = [<LuRocket className={iconClass} />, <LuSettings className={iconClass} />, <LuGlobe className={iconClass} />];
  return fallbacks[index % fallbacks.length];
};

export default function HeroSection({ study }) {
  return (
    <header className="pt-10 pb-10 sm:pt-14 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left side — title area */}
          <div className="flex-1">
            <motion.span {...settle(0)} className="section-eyebrow">
              Case Studies
            </motion.span>
            <motion.h1
              {...settleLarge(0.05)}
              className="mt-3 font-display font-semibold text-ink leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              How I solve{" "}
              <span className="italic text-stamp">real</span> problems.
            </motion.h1>
            <motion.p {...settle(0.1)} className="mt-4 font-text text-sm sm:text-base text-ink-soft leading-relaxed max-w-md">
              A look into my thought process, decisions and engineering approach behind building products that create real impact.
            </motion.p>
          </div>

          {/* Right side — project summary card */}
          <motion.div
            {...settle(0.15)}
            className="w-full lg:max-w-[420px] bg-paper-warm border border-rule rounded-lg p-5 sm:p-6"
          >
            <span className="font-mono text-2xs text-ink-soft uppercase tracking-wider">
              {study.number} — {study.category}
            </span>

            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-tight mt-2">
              {study.title}
            </h2>
            <p className="font-text text-xs sm:text-sm text-ink-soft mt-2 leading-relaxed">
              {study.description}
            </p>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 pt-4 border-t border-rule">
              {study.sections.result.metrics.map((metric, idx) => (
                <div key={metric.label} className="flex items-center gap-2">
                  {getMetricIcon(metric.label, idx)}
                  <div>
                    <p className="text-sm font-display font-bold text-ink">
                      {metric.value}
                    </p>
                    <p className="text-2xs font-text text-ink-soft">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div {...settle(0.2)} className="mt-10 section-rule" />
      </div>
    </header>
  );
}
