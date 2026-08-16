import { useState } from "react";
import { GithubIcon, LinkedinIcon, LockIcon } from "@animateicons/react/lucide";
import { contact } from "@types/contact";
import Loader from "@components/loader";

const year = new Date().getFullYear();

const iconBtn = "flex h-10 w-10 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink";

export default function Copyright() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      {showLoader && (
        <Loader onComplete={() => { setShowLoader(false); window.scrollTo({ top: 0 }); }} />
      )}

      <div className="mt-8 flex flex-col items-center gap-4 border-t border-paper/25 pt-5 font-gothic text-[11px] font-medium uppercase tracking-[0.1em] text-paper/60 min-[600px]:flex-row min-[600px]:justify-between">
        <span>© {year} Rahul Goswami | All rights reserved | Mumbai, India</span>

        <div className="flex gap-2.5">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${iconBtn} group`}>
            <GithubIcon size={18} />
          </a>

          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${iconBtn} group`}>
            <LinkedinIcon size={18} />
          </a>

          <button
            type="button"
            aria-label="Replay intro"
            onClick={() => { sessionStorage.removeItem("intro_seen"); setShowLoader(true); }}
            className={`${iconBtn} group cursor-pointer bg-transparent`}
          >
            <LockIcon size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
