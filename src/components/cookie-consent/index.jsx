import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cookie_consent";

/**
 * Minimal, theme-matched cookie consent banner.
 * Remembers the choice in localStorage so it only shows once.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Small delay so it doesn't fight the intro loader
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* localStorage unavailable — skip banner */
    }
  }, []);

  const decide = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-3 bottom-3 z-[9998] mx-auto max-w-[560px] border-2 border-ink bg-paper p-4 shadow-2xl sm:inset-x-auto sm:right-4 sm:left-auto sm:bottom-4"
        >
          <p className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-stamp">
            Cookie Notice
          </p>
          <p className="mt-2 font-text text-[14px] leading-[1.55] text-ink-soft">
            This site uses minimal cookies to remember your preferences and
            understand basic traffic. See the{" "}
            <Link
              to="/privacy"
              className="text-stamp underline underline-offset-2 hover:text-ink transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="border-2 border-ink/30 px-4 py-2 font-gothic text-[11px] font-bold uppercase tracking-[0.1em] text-ink hover:border-ink transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="border-2 border-ink bg-ink px-4 py-2 font-gothic text-[11px] font-bold uppercase tracking-[0.1em] text-paper hover:bg-transparent hover:text-ink transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
