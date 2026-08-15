import { contact } from "../data";

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="border-t-[6px] border-ink bg-ink pb-[30px] pt-14 text-paper px-5 sm:px-[30px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Big name */}
        <div
          className="border-b border-paper/25 pb-[22px] text-center font-display font-normal text-paper leading-[0.9] tracking-[-0.01em]"
          style={{ fontSize: "clamp(42px, 7vw, 82px)" }}
        >
          Rahul Goswami
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 gap-8 pt-[30px] min-[600px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Bio */}
          <div>
            <p className="max-w-[34ch] font-text text-[15px] leading-[1.6] text-paper/75">
              A frontend engineer in Mumbai, India. Building fintech products at Mintifi and shipping personal projects that solve real problems. This broadsheet is set in Playfair Display and Space Mono.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">
              Sections
            </h4>
            {[
              ["#top",     "Front Page"],
              ["#work",    "Selected Work"],
              ["#stack",   "The Stack"],
              ["#career",  "Career Ledger"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* The Desk */}
          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">
              The Desk
            </h4>
            <p className="mb-2.5 font-text text-[15px] text-paper">{contact.location}</p>
            <p className="mb-2.5 font-text text-[15px] text-paper">{contact.timezone} · Remote-first</p>
            <a
              href={`mailto:${contact.email}`}
              className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* Wire Services */}
          <div>
            <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">
              Wire Services
            </h4>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Closing mark — original, not "Case Closed" */}
        <div className="mt-12 flex justify-center">
          <span
            className="inline-block -rotate-3 border-4 border-stamp-bright px-6 py-2 font-gothic text-[14px] font-black uppercase tracking-[0.28em] text-stamp-bright"
            style={{ filter: "url(#rough-stamp)" }}
            aria-label="End of record"
          >
            Filed · {year}
          </span>
        </div>

        {/* Copyright row */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-paper/25 pt-5 font-gothic text-[11px] font-medium uppercase tracking-[0.1em] text-paper/60 min-[600px]:flex-row min-[600px]:justify-between">
          <span>© {year} Rahul Goswami · All rights reserved · Mumbai, India</span>
          <div className="flex gap-2.5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"/>
              </svg>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
