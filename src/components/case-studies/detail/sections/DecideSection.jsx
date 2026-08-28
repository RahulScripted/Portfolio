import { motion } from "framer-motion";
import { settle } from "@animations";
import { LuX, LuCheck } from "react-icons/lu";

// Split a reason string into multiple points for display
const splitReason = (reason) => {
  // Split on sentences, "and" conjunctions, or commas with dependent clauses
  const parts = reason
    .split(/(?:\.\s+)|(?:\s+and\s+)|(?:,\s+(?=\w+ing\s))|(?:,\s+(?=which\s))|(?:,\s+(?=making\s))/)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter((s) => s.length > 3);

  // If we only got one part, try splitting on commas
  if (parts.length === 1) {
    const commaSplit = reason
      .split(/,\s+/)
      .map((s) => s.trim().replace(/\.$/, ""))
      .filter((s) => s.length > 5);
    if (commaSplit.length > 1) return commaSplit;
  }

  return parts;
};

export default function DecideSection({ data }) {
  return (
    <div className="pt-2">
      <motion.h3 {...settle(0.1)} className="font-display text-lg sm:text-xl font-semibold text-ink mb-1">
        Evaluated multiple approaches
      </motion.h3>
      <motion.p {...settle(0.12)} className="font-text text-xs text-ink-soft mb-5">
        {data.description}
      </motion.p>

      <motion.div
        {...settle(0.15)}
        className="bg-paper-warm border border-rule rounded-lg p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.options.map((option, idx) => {
            const isSelected = option.status === "selected";
            const points = splitReason(option.reason);
            return (
              <motion.div
                key={option.title}
                {...settle(0.15 + idx * 0.1)}
                className={`relative rounded-lg border p-4 transition-all ${
                  isSelected
                    ? "border-stamp bg-paper shadow-md ring-1 ring-stamp/20"
                    : "border-rule bg-paper"
                }`}
              >
                {/* Selected badge */}
                {isSelected && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-stamp text-paper text-[9px] font-mono font-bold uppercase tracking-wider rounded">
                    Selected
                  </span>
                )}

                <p className="font-mono text-2xs text-ink-soft uppercase tracking-wider mb-1">
                  Option {String.fromCharCode(65 + idx)}
                </p>
                <h4 className="font-display text-sm font-semibold text-ink">
                  {option.title}
                </h4>

                <div className="mt-3 space-y-2">
                  {points.map((point, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      {isSelected ? (
                        <LuCheck className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                      ) : (
                        <LuX className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className="font-text text-2xs text-ink-soft leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
