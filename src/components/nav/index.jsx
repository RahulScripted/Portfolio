import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@types/shared";
import ScrollLink from "@components/scroll-link";
import { ChevronUpIcon, ArrowUpIcon } from "@animations";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <div className={`sticky top-0 z-40 bg-paper border-b-2 border-ink transition-shadow duration-200 ${scrolled ? "shadow-[0_2px_12px_rgba(22,20,15,0.08)]" : ""}`}>
      <div className="max-w-[1380px] mx-auto px-3 sm:px-5">
        <nav className="flex min-h-[50px] items-center justify-between gap-4 py-[9px]" aria-label="Main navigation">
          <ScrollLink to="top" className="font-display text-[22px] font-normal tracking-[-0.01em] text-ink whitespace-nowrap select-none hover:text-ink-soft transition-colors">
            Rahul Goswami
          </ScrollLink>

          <div className="hidden min-[860px]:flex items-center gap-[26px]">
            {navLinks.map((l) => (
              <ScrollLink key={l.href} to={l.href.replace("#", "")} className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink border-b-2 border-transparent pb-0.5 hover:border-ink transition-colors duration-150">
                {l.label}
              </ScrollLink>
            ))}
            <ScrollLink to="contact" className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-ink font-gothic text-[11.5px] font-bold uppercase tracking-[0.1em] px-[15px] py-2 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-150">
              Hire Me
            </ScrollLink>
          </div>

          <div className="flex items-center gap-3 min-[860px]:hidden">
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
                  <ScrollLink key={l.href} to={l.href.replace("#", "")} onClose={close} className="flex items-center justify-between px-0.5 py-[14px] font-display text-[28px] font-normal tracking-[-0.01em] text-ink hover:text-ink-soft transition-colors">
                    <span>{l.label}</span>
                    <ArrowUpIcon size={20} rotate={45} />
                  </ScrollLink>
                ))}
                <div className="mt-4">
                  <ScrollLink to="contact" onClose={close} className="flex w-full items-center justify-center gap-2 border-2 border-ink font-gothic text-[13px] font-bold uppercase tracking-[0.1em] px-[22px] py-3 bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors">
                    Hire Me
                    <ArrowUpIcon size={16} rotate={45} />
                  </ScrollLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
