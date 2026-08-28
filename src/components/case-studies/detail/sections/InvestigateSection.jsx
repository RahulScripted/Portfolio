import { motion } from "framer-motion";
import { settle } from "@animations";
import { LuShield, LuSettings, LuLayers, LuRocket } from "react-icons/lu";

const findingIcons = [LuShield, LuSettings, LuLayers, LuRocket];

const ArrowConnector = () => (
  <div className="hidden lg:flex items-center justify-center px-1">
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
      <line x1="0" y1="8" x2="18" y2="8" stroke="#6B6459" strokeWidth="1.5" />
      <path d="M16,4 L22,8 L16,12" stroke="#6B6459" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function InvestigateSection({ data }) {
  return (
    <div className="pt-2">
      <motion.h3 {...settle(0.1)} className="font-display text-lg sm:text-xl font-semibold text-ink mb-1">
        What we found
      </motion.h3>
      <motion.p {...settle(0.12)} className="font-text text-xs text-ink-soft mb-5">
        {data.description}
      </motion.p>

      <motion.div
        {...settle(0.15)}
        className="bg-paper-warm border border-rule rounded-lg p-4 sm:p-6"
      >
        {/* Desktop: horizontal flow with arrows */}
        <div className="hidden lg:flex items-stretch">
          {data.findings.map((finding, idx) => {
            const Icon = findingIcons[idx % findingIcons.length];
            return (
              <div key={finding.title} className="contents">
                <motion.div
                  {...settle(0.15 + idx * 0.1)}
                  className="flex-1 bg-paper border border-rule rounded-lg p-4 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-stamp/10 border border-stamp/20 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-stamp" />
                  </div>
                  <p className="font-display text-sm font-semibold text-ink leading-tight">
                    {finding.title}
                  </p>
                  <p className="font-text !text-left text-2xs text-ink-soft leading-relaxed mt-2">
                    {finding.description}
                  </p>
                </motion.div>
                {idx < data.findings.length - 1 && <ArrowConnector />}
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: stacked with vertical connectors */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.findings.map((finding, idx) => {
            const Icon = findingIcons[idx % findingIcons.length];
            return (
              <motion.div
                key={finding.title}
                {...settle(0.15 + idx * 0.08)}
                className="bg-paper border border-rule rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-stamp/10 border border-stamp/20 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-stamp" />
                </div>
                <p className="font-display text-sm font-semibold text-ink leading-tight">
                  {finding.title}
                </p>
                <p className="font-text text-2xs text-ink-soft leading-relaxed mt-2">
                  {finding.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
