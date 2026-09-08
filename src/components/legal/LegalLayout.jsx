import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@animations";

/**
 * Shared editorial layout for legal pages (Privacy, Terms).
 * Matches "The Rahul Goswami Times" theme.
 */
export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="bg-paper min-h-screen text-ink">
      <header className="border-b-4 border-ink px-5 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft hover:text-stamp transition-colors"
        >
          <ArrowLeftIcon size={14} /> Back to the Record
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft hidden sm:block">
          The Rahul Goswami Times | Legal Desk
        </span>
      </header>

      <motion.main
        className="max-w-[760px] mx-auto px-5 pt-12 pb-20"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-stamp">
          {eyebrow}
        </span>
        <h1
          className="mt-2 font-display font-normal leading-[1.04] tracking-[-0.02em]"
          style={{ fontSize: "clamp(34px, 5.5vw, 60px)" }}
        >
          {title}
        </h1>
        <div className="mt-4 h-[3px] bg-ink w-full" />
        {updated && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            Last updated: {updated}
          </p>
        )}

        <div className="mt-8 space-y-8 font-text text-[16px] leading-[1.7] text-ink/90">
          {children}
        </div>
      </motion.main>
    </div>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2 className="mb-2 font-display font-normal text-ink leading-tight" style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>
        {heading}
      </h2>
      <div className="space-y-3 text-ink-soft">{children}</div>
    </section>
  );
}
