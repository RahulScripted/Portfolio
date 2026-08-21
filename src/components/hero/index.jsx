import { motion } from "framer-motion";
import { profile, cv } from "@types/hero";
import { contact } from "@types/contact";
import { ChevronUpIcon, DownloadIcon } from "@animations";
import ScrollLink from "@components/scroll-link";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const statCards = [
  { value: "50K+", label: "Customers Served" },
  { value: "30%", label: "Faster Dashboard" },
  { value: "10+", label: "Reusable Components" },
  { value: "Open", label: "To Opportunities" },
];

export default function Hero() {
  return (
    <section id="top" className="pb-4 pt-[30px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[18px] flex items-center justify-between gap-4 border-b border-ink/20 pb-[9px] font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
          <span>Front Page</span>
          <span>Filed under: Open Investigations</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 min-[940px]:grid-cols-[1.55fr_1fr]">
          {/* LEFT */}
          <div>
            <motion.span
              {...settle(0)}
              className="block font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink"
            >
              <span className="section-eyebrow">Case No. 001 — Engineering Record</span>
            </motion.span>
            <motion.h2
              {...settle(0.06)}
              className="mt-1 font-display font-normal text-ink leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(38px, 6.6vw, 84px)" }}
            >
              I build software that ships, scales, and solves{" "}
              <em className="italic">real problems.</em>
            </motion.h2>
            <motion.p
              {...settle(0.14)}
              className="mt-5 max-w-[70ch] border-l-4 border-ink pl-[18px] font-text text-[clamp(17px,2vw,22px)] italic leading-[1.45] text-ink-soft"
            >
              Software Engineer at Mintifi building production fintech products used by 50K+ active customers — 
              with a focus on frontend architecture, performance, secure workflows and product-driven engineering.
            </motion.p>
            <motion.p
              {...settle(0.2)}
              className="mt-5 font-gothic text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft"
            >
              By <strong className="text-ink">The Engineering Desk</strong> |
              Reporting from Mumbai
            </motion.p>
            <motion.div
              {...settle(0.26)}
              className="mt-[28px] flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="w-full sm:w-auto"
              >
                <ScrollLink
                  to="work"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[14px] px-7 py-[14px] bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors duration-150 sm:inline-flex sm:w-auto"
                >
                  Explore the Work
                  <ChevronUpIcon rotate={45} size={18} />
                </ScrollLink>
              </motion.div>
              <div className="flex flex-row gap-3 w-full sm:w-auto sm:contents">
                <ScrollLink
                  to="contact"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[12px] sm:text-[14px] px-4 sm:px-7 py-[14px] bg-transparent text-ink hover:bg-ink hover:text-paper transition-colors duration-150 sm:inline-flex sm:flex-none sm:w-auto"
                >
                  Get in touch
                </ScrollLink>
                <motion.a
                  href={cv}
                  download="Rahul_Goswami_cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap border-2 border-ink/40 font-gothic font-bold uppercase tracking-[0.1em] text-[12px] sm:text-[14px] px-4 sm:px-7 py-[14px] text-ink-soft hover:border-ink hover:text-ink transition-colors duration-150 sm:inline-flex sm:flex-none sm:w-auto"
                >
                  <DownloadIcon size={18} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              {...settle(0.32)}
              className="mt-[30px] grid grid-cols-2 border-y-2 border-ink min-[600px]:grid-cols-4"
            >
              {statCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`px-[18px] py-4 ${i < statCards.length - 1 ? "border-r border-ink/20" : ""} ${i < 2 ? "border-b border-ink/20 min-[600px]:border-b-0" : ""}`}
                >
                  <div
                    className="font-display font-normal text-ink leading-none whitespace-nowrap"
                    style={{ fontSize: "clamp(20px, 2.3vw, 30px)" }}
                  >
                    {card.value}
                  </div>
                  <div className="mt-[7px] font-gothic text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {card.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="border-t-2 border-ink pt-[22px] min-[940px]:border-l min-[940px]:border-t-0 min-[940px]:border-ink/20 min-[940px]:pl-[34px] min-[940px]:pt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="relative aspect-square w-full overflow-hidden border-2 border-ink bg-paper"
            >
              <img
                src={profile}
                alt="Rahul Goswami — Software Engineer, Mumbai"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              />
            </motion.div>
            <motion.p
              {...settle(0.24)}
              className="mt-2 font-gothic text-[11px] font-medium leading-[1.4] tracking-[0.04em] text-ink-soft"
            >
              <strong className="font-bold uppercase tracking-[0.1em] text-ink">
                Pictured:
              </strong>{" "}
              an engineer somewhere between debugging a production issue and opening another browser tab.
            </motion.p>
            <motion.div
              {...settle(0.3)}
              className="mt-[18px] font-text text-[16px] leading-[1.6] justify-editorial"
            >
              <p className="mb-3 dropcap">
                I enjoy the complete engineering process — understanding a problem, designing the solution, building the interface, integrating the APIs, testing the edge cases and shipping it to production.
              </p>
              <p>
                At Mintifi, I build fintech products across customer onboarding, loan management, authentication, insurance and contract workflows. Outside work, I build independent products that turn ideas into working software.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
