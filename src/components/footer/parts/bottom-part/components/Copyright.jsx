import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, LockIcon } from "@animations";
import { contact } from "@types/contact";
import Loader from "@components/loader";

const iconBtn = "flex h-10 w-10 items-center justify-center border border-paper/40 bg-paper text-ink transition-colors hover:bg-paper/80";

export default function Copyright() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      {showLoader && (
        <Loader onComplete={() => { setShowLoader(false); window.scrollTo({ top: 0 }); }} />
      )}

      <div className="mt-8 flex flex-col items-center gap-4 border-t border-paper/25 pt-5 font-gothic text-[11px] font-medium uppercase tracking-[0.1em] text-paper/60 min-[600px]:flex-row min-[600px]:justify-between">
        <span>© 2026 Rahul Goswami | All rights reserved | Mumbai, India</span>

        <div className="flex gap-2.5">
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={iconBtn}
          >
            <GithubIcon size={18} />
          </motion.a>

          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={iconBtn}
          >
            <LinkedinIcon size={18} />
          </motion.a>

          <motion.button
            type="button"
            aria-label="Replay intro"
            onClick={() => { sessionStorage.removeItem("intro_seen"); setShowLoader(true); }}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className={`${iconBtn} cursor-pointer`}
          >
            <LockIcon size={18} />
          </motion.button>
        </div>
      </div>
    </>
  );
}
