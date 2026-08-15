import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data";

export default function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div
      className={`sticky top-0 z-40 bg-paper border-b-2 border-ink transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_12px_rgba(22,20,15,0.08)]" : ""
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-[30px]">
        <nav
          className="flex min-h-[50px] items-center justify-between gap-4 py-[9px]"
          aria-label="Main navigation"
        >
          {/* Name / home link */}
          <a
            href="#top"
            className="font-display text-[22px] font-normal tracking-[-0.01em] text-ink whitespace-nowrap select-none hover:text-ink-soft transition-colors"
          >
            Rahul Goswami
          </a>

          {/* Desktop links */}
          <div className="hidden min-[860px]:flex items-center gap-[26px]">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink border-b-2 border-transparent pb-0.5 hover:border-ink transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-ink font-gothic text-[11.5px] font-bold uppercase tracking-[0.1em] px-[15px] py-2 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-150"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile: hire + hamburger */}
          <div className="flex items-center gap-3 min-[860px]:hidden">
            <a
              href="#contact"
              className="hidden min-[460px]:inline-flex items-center whitespace-nowrap border-2 border-ink font-gothic text-[11px] font-bold uppercase tracking-[0.1em] px-[13px] py-1.5 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors"
            >
              Hire Me
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-[42px] w-[42px] flex-none flex-col items-center justify-center gap-[5px] border-2 border-ink"
            >
              <span className={`h-0.5 w-5 bg-ink transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-opacity duration-150 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-ink transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t-2 border-ink min-[860px]:hidden"
            >
              <div className="pb-4 pt-1.5">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="flex items-center justify-between border-b border-ink/20 px-0.5 py-[14px] font-display text-[28px] font-normal tracking-[-0.01em] text-ink hover:text-ink-soft transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-ink-soft text-lg">↗</span>
                  </a>
                ))}
                <div className="mt-4">
                  <a
                    href="#contact"
                    onClick={close}
                    className="inline-flex border-2 border-ink font-gothic text-[13px] font-bold uppercase tracking-[0.1em] px-[22px] py-3 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors"
                  >
                    Hire Me →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
