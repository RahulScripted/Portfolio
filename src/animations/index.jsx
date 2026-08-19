import { motion } from "framer-motion";
import githubSvg   from "@assets/svgs/github.svg";
import linkedinSvg from "@assets/svgs/linkedin.svg";

const iconProps = (size) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const spring = { type: "spring", stiffness: 400, damping: 15 };

/**
 * Wrap the button/link with:
 *   <motion.button whileHover="hover" initial="rest" animate="rest">
 * The icon picks up the "hover" variant from the parent automatically.
 */

export function ChevronUpIcon({ size = 18, rotate = 0 }) {
  return (
    <motion.svg
      {...iconProps(size)}
      variants={{ rest: { y: 0, rotate }, hover: { y: -3, rotate } }}
      transition={spring}
    >
      <polyline points="18 15 12 9 6 15" />
    </motion.svg>
  );
}

export function DownloadIcon({ size = 18 }) {
  return (
    <motion.svg
      {...iconProps(size)}
      variants={{ rest: { y: 0 }, hover: { y: 3 } }}
      transition={spring}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </motion.svg>
  );
}

export function GithubIcon({ size = 18 }) {
  return (
    <motion.img
      src={githubSvg}
      alt="GitHub"
      width={size}
      height={size}
      variants={{ rest: { scale: 1 }, hover: { scale: 1.2 } }}
      transition={spring}
      style={{ display: "inline-block" }}
    />
  );
}

export function LinkedinIcon({ size = 18 }) {
  return (
    <motion.img
      src={linkedinSvg}
      alt="LinkedIn"
      width={size}
      height={size}
      variants={{ rest: { scale: 1 }, hover: { scale: 1.2 } }}
      transition={spring}
      style={{ display: "inline-block", filter: "invert(1)" }}
    />
  );
}

export function LockIcon({ size = 18 }) {
  return (
    <motion.svg
      {...iconProps(size)}
      variants={{ rest: { rotate: 0 }, hover: { rotate: 15 } }}
      transition={spring}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </motion.svg>
  );
}

export function ArrowLeftIcon({ size = 18 }) {
  return (
    <svg {...iconProps(size)}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export function ArrowUpIcon({ size = 18, rotate = 0 }) {
  return (
    <svg {...iconProps(size)} style={{ transform: `rotate(${rotate}deg)` }}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 18 }) {
  return (
    <svg {...iconProps(size)} className="inline-block ml-0.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
