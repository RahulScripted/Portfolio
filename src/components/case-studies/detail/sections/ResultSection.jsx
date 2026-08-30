import { motion } from "framer-motion";
import { settle } from "@animations";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuBox, LuLayers, LuShield, LuCreditCard, LuRocket, LuSettings, LuGlobe } from "react-icons/lu";

const getMetricIcon = (label, index) => {
  const iconClass = "w-6 h-6";
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

const metricColors = [
  "bg-stamp/10 text-stamp border-stamp/20",
  "bg-green-600/10 text-green-700 border-green-600/20",
  "bg-blue-600/10 text-blue-700 border-blue-600/20",
  "bg-amber-500/10 text-amber-700 border-amber-500/20",
  "bg-purple-500/10 text-purple-700 border-purple-500/20",
];

export default function ResultSection({ data }) {
  return (
    <div className="pt-2">
      {/* Metrics grid - light background, not black */}
      <motion.div
        {...settle(0.1)}
        className="bg-paper-warm border border-rule rounded-lg p-5 sm:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {data.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              {...settle(0.15 + idx * 0.08)}
              className={`flex flex-col items-center text-center p-4 rounded-lg border ${metricColors[idx % metricColors.length]}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-paper flex items-center justify-center mb-2.5 border border-current/10">
                {getMetricIcon(metric.label, idx)}
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-ink">
                {metric.value}
              </p>
              <p className="font-text text-2xs text-ink-soft mt-0.5">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outcomes */}
        {data.outcomes && (
          <div className="mt-6 pt-5 border-t border-rule">
            <p className="font-mono text-2xs text-ink-soft uppercase tracking-wider mb-3">
              Key Outcomes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  {...settle(0.3 + idx * 0.05)}
                  className="flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="font-text text-xs text-ink-soft">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
