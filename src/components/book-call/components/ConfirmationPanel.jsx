import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ConfirmationPanel({ name, time, email }) {
  return (
    <motion.div
      key="confirm"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="border-2 border-ink bg-paper-warm p-8 sm:p-12 text-center"
    >
      {/* Stamp: rough filter on border span only, text stays clean */}
      <div className="relative inline-block mb-6 -rotate-[4deg]">
        <span
          aria-hidden="true"
          className="absolute inset-0 border-[4px] border-stamp"
          style={{ filter: "url(#rough-stamp)" }}
        />
        <span className="relative z-[1] font-gothic text-[26px] font-black uppercase tracking-[0.18em] text-stamp px-5 py-2 inline-block">
          Confirmed
        </span>
      </div>

      <h2 className="font-display text-[32px] sm:text-[40px] font-normal leading-[1.1] mb-3">
        Call Booked, {name.split(" ")[0]}.
      </h2>
      <p className="font-text text-[16px] text-ink-soft leading-[1.6] max-w-[46ch] mx-auto mb-6">
        Your slot at <strong className="text-ink">{time}</strong> has been logged in the ledger. Expect a confirmation at{" "}
        <strong className="text-ink">{email}</strong> shortly.
      </p>
      <div className="border-t border-ink/20 pt-5 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
        Case reference ·{" "}
        {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[13px] px-6 py-3 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors"
      >
        Return to the Record →
      </Link>
    </motion.div>
  );
}
