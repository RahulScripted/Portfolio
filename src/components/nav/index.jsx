import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@types/shared";
import ScrollLink from "@components/scroll-link";
import CurvedMenu from "./CurvedMenu";
import MenuToggle from "./MenuToggle";

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
    requestAnimationFrame(() => window.scrollTo(0, 0));
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
              Let's Talk
            </ScrollLink>
          </div>

          <div className="flex items-center gap-3 min-[860px]:hidden">
            <div
              aria-expanded={menuOpen}
              className={`z-50 flex h-[42px] w-[42px] flex-none items-center justify-center border-2 border-ink bg-paper text-ink ${
                menuOpen ? "fixed right-3 top-[9px] sm:right-5" : "relative"
              }`}
            >
              <MenuToggle
                open={menuOpen}
                onOpenChange={setMenuOpen}
                strokeWidth={2.5}
                className="size-6"
              />
            </div>
          </div>
        </nav>

      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 z-30 bg-ink/40 min-[860px]:hidden"
          />
        )}
        {menuOpen && <CurvedMenu key="curved-menu" onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
