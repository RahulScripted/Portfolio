import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@animations";
import postcard from "@assets/webps/404.png";

/**
 * Editorial 404 — matched to "The Rahul Goswami Times" theme.
 * Rendered as a catch-all route when a URL doesn't exist.
 */
export default function NotFound({
  postcardImage = postcard,
  postcardAlt = "Statue of Unity, Gujarat — India Postcard",
  curvedTextTop = "The Rahul Goswami Times",
  curvedTextBottom = "Dispatch from India",
  heading = "(404) Looks like the page you're looking for got lost somewhere.",
  subtext = "But hey — even in India, the unexpected detours lead somewhere worth the trip.",
  backButtonLabel = "Back to the Record",
  backButtonHref = "/",
}) {
  return (
    <div className="bg-paper min-h-screen text-ink flex items-center justify-center px-4 py-16">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative mb-16">
          {/* Spinning curved text ring */}
          <svg
            className="absolute -top-16 -left-12 w-[150px] h-[150px] pointer-events-none z-20"
            viewBox="0 0 150 150"
            style={{ animation: "spin-slow 22s linear infinite" }}
          >
            <defs>
              <path
                id="curvePath404"
                d="M 75,75 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
                fill="transparent"
              />
            </defs>
            <text
              className="fill-ink"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <textPath href="#curvePath404" startOffset="0%">
                {curvedTextTop} • {curvedTextBottom} •
              </textPath>
            </text>
          </svg>

          <div className="relative z-10">
            {/* Postcard */}
            <div className="relative p-3 bg-paper-bright shadow-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-300 border border-ink/10">
              <div className="relative overflow-hidden bg-paper-bright">
                <img
                  src={postcardImage}
                  alt={postcardAlt}
                  className="w-[320px] h-[220px] sm:w-[360px] object-cover"
                />
              </div>
              {/* Stamp corner */}
              <div className="absolute top-1 right-1 font-gothic text-[9px] font-bold uppercase tracking-[0.12em] text-stamp border border-stamp px-1.5 py-0.5 rotate-[8deg] bg-paper-bright/90">
                404
              </div>
            </div>

            {/* Postal cancellation marks */}
            <svg
              className="absolute -right-16 top-1/2 -translate-y-1/2 w-28 h-20 hidden sm:block"
              viewBox="0 0 100 60"
            >
              {[15, 25, 35].map((y) => (
                <path
                  key={y}
                  d={`M 10 ${y} Q 20 ${y - 5} 30 ${y} Q 40 ${y + 5} 50 ${y} Q 60 ${y - 5} 70 ${y} Q 80 ${y + 5} 90 ${y}`}
                  stroke="#6B6459"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.55"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Copy */}
        <div className="text-center max-w-2xl">
          <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-stamp">
            Page Not Found | Return to Press
          </span>
          <h1
            className="mt-3 font-display font-normal leading-[1.05] tracking-[-0.015em] text-balance"
            style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
          >
            {heading}
          </h1>
          <p className="mt-5 font-text text-[16px] md:text-[18px] leading-[1.6] text-ink-soft">
            {subtext}
          </p>

          <Link
            to={backButtonHref}
            className="mt-9 inline-flex items-center gap-2 border-2 border-ink px-6 py-3 font-gothic text-[12px] font-bold uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            <ArrowLeftIcon size={16} />
            {backButtonLabel}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
