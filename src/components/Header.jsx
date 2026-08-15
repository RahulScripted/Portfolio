import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "Dispatches from the frontend frontier",
  "All the code that's fit to ship",
  "Breaking: clean UI delivered on time",
  "Est. 2022 · Still in print",
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Ledger", href: "#ledger" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTaglineIdx((i) => (i + 1) % taglines.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper border-b border-rule transition-all duration-300 ${
        condensed ? "shadow-sm" : ""
      }`}
    >
      {/* Rotating tagline strip */}
      {!condensed && (
        <div className="bg-ink text-paper text-2xs font-mono text-center py-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={taglineIdx}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="block tracking-widest uppercase"
            >
              {taglines[taglineIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}

      {/* Main nav bar */}
      <div className={`max-w-6xl mx-auto px-5 flex items-center justify-between transition-all duration-300 ${condensed ? "py-2" : "py-3"}`}>
        {/* Logo / name */}
        <a href="#top" className="font-serif font-black text-ink tracking-tight leading-none">
          <span className={`block transition-all duration-300 ${condensed ? "text-base" : "text-lg"}`}>
            R. GOSWAMI
          </span>
          {!condensed && (
            <span className="block text-2xs font-mono text-inkMuted tracking-widest uppercase">
              The Personal Record
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-inkLight hover:text-stamp transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 border-2 border-stamp text-stamp hover:bg-stamp hover:text-paper transition-all duration-200 rotate-[-0.5deg] hover:rotate-0"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest text-inkLight"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-paper border-t border-rule"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest text-inkLight hover:text-stamp transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 border-2 border-stamp text-stamp text-center hover:bg-stamp hover:text-paper transition-all duration-200"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
