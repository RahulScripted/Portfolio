import { motion } from "framer-motion";
import { settle } from "@animations";

const QuoteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-stamp/40">
    <path
      d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
      fill="currentColor"
    />
    <path
      d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
      fill="currentColor"
    />
  </svg>
);

export default function QuestionSection({ data, question }) {
  return (
    <div className="pt-2">
      <motion.div {...settle(0.15)} className="bg-paper-warm border border-rule rounded-lg p-5 sm:p-7">
        <QuoteIcon />
        <p className="mt-3 font-display text-base sm:text-lg lg:text-xl text-ink leading-relaxed max-w-2xl">
          {question || data.description}
        </p>
      </motion.div>
    </div>
  );
}
