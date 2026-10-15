import * as React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

// Close the menu when clicking/tapping outside of it.
function useClickAway(ref, handler) {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const ROW_H = 34; // px per option row

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } },
};

/**
 * Fluid animated dropdown, themed to the portfolio's paper/ink palette.
 *
 * @param {Array<{value:string,label:string}>} options
 * @param {string} value           currently selected value
 * @param {(v:string)=>void} onChange
 * @param {boolean} [disabled]
 * @param {string} [ariaLabel]
 */
export default function FluidDropdown({
  options = [],
  value,
  onChange,
  disabled = false,
  ariaLabel = "Select",
  className = "",
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const ref = React.useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  const selected = options.find((o) => o.value === value) ?? options[0];
  const activeValue = hovered ?? value;
  const activeIndex = Math.max(0, options.findIndex((o) => o.value === activeValue));

  const onKeyDown = (e) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className={"relative " + className} onKeyDown={onKeyDown}>
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={ariaLabel}
          className={
            "inline-flex h-8 w-full items-center justify-between gap-2 rounded-md border bg-paper px-2.5 " +
            "font-gothic text-[9px] uppercase tracking-[0.1em] transition-colors " +
            "focus:outline-none focus:border-stamp disabled:opacity-50 disabled:cursor-wait " +
            (isOpen
              ? "border-ink/40 text-ink"
              : "border-rule text-ink-soft hover:text-ink hover:border-ink/40")
          }
        >
          <span className="tabular-nums">{selected?.label}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, y: 0, height: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
                transition: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
              }}
              className="absolute left-0 right-0 top-full z-50 mt-1.5 min-w-[88px] overflow-hidden"
            >
              <motion.div
                className="w-full rounded-md border border-rule bg-paper p-1 shadow-lg"
                initial={{ borderRadius: 6 }}
                animate={{ borderRadius: 10, transition: { duration: 0.2 } }}
                style={{ transformOrigin: "top" }}
              >
                <motion.ul
                  role="listbox"
                  className="relative py-0.5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Sliding highlight */}
                  <motion.div
                    layoutId="fluid-dropdown-highlight"
                    className="absolute inset-x-1 rounded-[5px] bg-paper-deep/70"
                    animate={{ y: activeIndex * ROW_H, height: ROW_H }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                  {options.map((opt) => {
                    const isActive = selected?.value === opt.value || hovered === opt.value;
                    return (
                      <motion.li key={opt.value} variants={itemVariants} role="option" aria-selected={selected?.value === opt.value}>
                        <motion.button
                          type="button"
                          onClick={() => {
                            onChange?.(opt.value);
                            setIsOpen(false);
                          }}
                          onHoverStart={() => setHovered(opt.value)}
                          onHoverEnd={() => setHovered(null)}
                          whileTap={{ scale: 0.98 }}
                          style={{ height: ROW_H }}
                          className={
                            "relative flex w-full items-center rounded-[5px] px-3 " +
                            "font-gothic text-[10px] uppercase tracking-[0.1em] tabular-nums transition-colors duration-150 focus:outline-none " +
                            (isActive ? "text-ink" : "text-ink-soft")
                          }
                        >
                          {opt.label}
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
