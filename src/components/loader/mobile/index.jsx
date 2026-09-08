import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

// Dynamically calculates grid configuration based on window width
const getGridConfig = () => {
  // Mobile: only 2 cards, stacked in a single column
  return {
    numCards: 2,
    cols: 1,
    xBase: 40,
    yBase: 60,
    xStep: 210,
    yStep: 230,
  };
};

// Generates the animation path so the search icon moves between the 2 cards
const generateSearchPath = (config) => {
  const { numCards, xBase, yBase, yStep } = config;

  // One position per card (single column, stacked)
  const positions = [];
  for (let i = 0; i < numCards; i++) {
    positions.push({ x: xBase, y: yBase + i * yStep });
  }

  // Go from card 1 -> card 2 -> back to card 1 for a smooth loop
  const path = [...positions, positions[0]];

  return {
    x: path.map((pos) => pos.x),
    y: path.map((pos) => pos.y),
    scale: Array(path.length).fill(1.2),
    transition: {
      duration: path.length * 1.2,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
      times: path.map((_, i) => i / (path.length - 1)),
    },
  };
};

function AnimatedLoadingSkeleton() {
  const controls = useAnimation();

  useEffect(() => {
    const config = getGridConfig();
    controls.start(generateSearchPath(config));
  }, [controls]);

  // No layout-affecting entrance animation — avoids cumulative layout shift.
  const frameVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 18px rgba(166, 56, 44, 0.18)",
        "0 0 32px rgba(166, 56, 44, 0.38)",
        "0 0 18px rgba(166, 56, 44, 0.18)",
      ],
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const config = getGridConfig();

  return (
    <motion.div
      className="w-full max-w-sm mx-auto p-6 bg-paper"
      variants={frameVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Masthead rule to match editorial theme */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-ink/20" />
      </div>

      <div className="relative overflow-hidden bg-paper p-8">
        {/* Search icon with animation */}
        <motion.div
          className="absolute z-10 pointer-events-none"
          animate={controls}
          style={{ left: 24, top: 24 }}
        >
          <motion.div
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(166, 56, 44, 0.14)" }}
            variants={glowVariants}
            animate="animate"
          >
            <svg
              className="w-6 h-6 text-stamp"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Grid of animated cards */}
        <div className="grid grid-cols-1 gap-4">
          {[...Array(config.numCards)].map((_, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.02 }}
              className="bg-paper border border-ink/10 p-4"
            >
              <motion.div
                className="h-32 mb-3"
                animate={{ background: ["#F5F0E8", "#E8E0D0", "#F5F0E8"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="h-3 w-3/4 mb-2"
                animate={{ background: ["#F5F0E8", "#E8E0D0", "#F5F0E8"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="h-3 w-1/2"
                animate={{ background: ["#F5F0E8", "#E8E0D0", "#F5F0E8"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function MobileLoader({ onComplete }) {
  const [done, setDone] = useState(() => {
    const seen = !!sessionStorage.getItem("intro_seen");
    if (!seen && typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return seen;
  });
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef(null);

  const exit = useCallback(() => {
    setFadeOut(true);
    sessionStorage.setItem("intro_seen", "1");
    setTimeout(() => {
      setDone(true);
      window.scrollTo({ top: 0 });
      onComplete?.();
    }, 500);
  }, [onComplete]);

  useEffect(() => {
    if (done) return;
    timeoutRef.current = setTimeout(exit, 3000); // show skeleton for 3s
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [done, exit]);

  useEffect(() => {
    if (!done) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      className={`mobile-loader ${fadeOut ? "mobile-loader--fade" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "#FBFAF5",
      }}
    >
      <AnimatedLoadingSkeleton />
    </div>
  );
}
