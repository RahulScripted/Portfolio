import { motion } from "framer-motion";
import { settle } from "@animations";
import {
  LuShield,
  LuGlobe,
  LuLayers,
  LuSettings,
  LuRocket,
  LuBox,
} from "react-icons/lu";

const stepIcons = {
  "01": LuShield,
  "02": LuGlobe,
  "03": LuLayers,
  "04": LuSettings,
  "05": LuRocket,
  "06": LuBox,
};

const stepTitles = {
  "01": "Question",
  "02": "Investigate",
  "03": "Decide",
  "04": "Build",
  "05": "Result",
  "06": "Learn",
};

export default function TimelineConnector({ number, isLast }) {
  const Icon = stepIcons[number];

  return (
    <div className="flex flex-col items-center w-16 sm:w-20 shrink-0">
      {/* Icon circle */}
      <motion.div
        {...settle(0.1)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-stamp bg-paper z-10"
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-stamp" />
      </motion.div>

      {/* Number & title */}
      <motion.div {...settle(0.15)} className="mt-2 text-center">
        <span className="font-mono text-stamp text-xs font-bold">{number}</span>
        <p className="font-display text-xs sm:text-sm font-semibold text-ink leading-tight mt-0.5">
          {stepTitles[number]}
        </p>
      </motion.div>

      {/* Vertical line */}
      {!isLast && (
        <div className="flex-1 w-px bg-rule mt-3 min-h-[60px]" />
      )}
    </div>
  );
}
