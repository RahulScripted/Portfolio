import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { navLinks } from "@types/shared";
import ScrollLink from "@components/scroll-link";

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

function NavItem({ label, to, index, onClose }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-ink/25 py-4 uppercase"
    >
      <ScrollLink to={to} onClose={onClose} className="block w-full">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          className="relative flex items-start"
        >
          <span className="mr-2 font-display text-2xl font-thin text-ink-soft">
            {index}.
          </span>
          <motion.span
            variants={{ initial: { x: 0 }, whileHover: { x: -12 } }}
            transition={{ type: "spring", staggerChildren: 0.06, delayChildren: 0.2 }}
            className="relative z-10 block font-display text-3xl font-normal tracking-[-0.01em] text-ink"
          >
            {label.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={{ initial: { x: 0 }, whileHover: { x: 12 } }}
                transition={{ type: "spring" }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        </div>
      </ScrollLink>
    </motion.div>
  );
}

function Curve() {
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
    exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] h-full w-[100px] stroke-none"
      style={{ fill: "#FBFAF5" }}
    >
      <motion.path variants={curve} />
    </svg>
  );
}

export default function CurvedMenu({ onClose }) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-40 h-[100dvh] w-screen max-w-sm bg-paper text-ink min-[860px]:hidden"
    >
      <div className="flex h-full flex-col justify-between pt-20">
        <div className="flex flex-col px-9">
          <div className="mb-2 border-b border-ink/25 pb-2 font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            Navigation
          </div>
          <nav>
            {navLinks.map((l, i) => (
              <NavItem
                key={l.href}
                label={l.label}
                to={l.href.replace("#", "")}
                index={i + 1}
                onClose={onClose}
              />
            ))}
          </nav>
        </div>

        <div className="px-9 pb-8">
          <ScrollLink
            to="contact"
            onClose={onClose}
            className="flex w-full items-center justify-center gap-2 border-2 border-ink bg-ink px-6 py-3 font-gothic text-[13px] font-bold uppercase tracking-[0.1em] text-paper hover:bg-transparent hover:text-ink transition-colors"
          >
            Let's Talk
          </ScrollLink>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
