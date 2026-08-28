import { motion } from "framer-motion";
import { settle } from "@animations";

export default function LearnSection({ data }) {
  // Extract key learnings from the description
  const sentences = data.description
    .split(/\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter((s) => s.length > 5);

  const learnings = [
    { number: "01", title: "Key Insight", text: sentences[0] || data.description },
    { number: "02", title: "Growth Area", text: sentences[1] || "" },
    { number: "03", title: "Takeaway", text: sentences[2] || "" },
  ].filter((r) => r.text.length > 3);

  return (
    <div className="pt-2">
      <motion.h3 {...settle(0.1)} className="font-display text-lg sm:text-xl font-semibold text-ink mb-1">
        What I learned
      </motion.h3>
      <motion.p {...settle(0.12)} className="font-text text-xs text-ink-soft mb-5">
        Reflections and key takeaways from this project.
      </motion.p>

      <motion.div
        {...settle(0.15)}
        className="bg-paper-warm border border-rule rounded-lg p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learnings.map((learning, idx) => (
            <motion.div
              key={idx}
              {...settle(0.2 + idx * 0.1)}
              className="bg-paper border border-rule rounded-lg p-4"
            >
              <span className="font-mono text-stamp text-xs font-bold">
                {learning.number}
              </span>
              <h4 className="font-display text-sm font-semibold text-ink mt-1.5">
                {learning.title}
              </h4>
              <p className="font-text text-2xs text-ink-soft leading-relaxed mt-2">
                {learning.text}.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
