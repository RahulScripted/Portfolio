import { contact } from "@types/contact";
import InkUnderline from "./components/InkUnderline";

const items = [
  {
    label: "Direct line",
    content: (href) => (
      <a href={`mailto:${href}`} className="font-display text-[21px] leading-[1.2] hover:text-stamp transition-colors break-all">
        {href}
      </a>
    ),
    value: contact.email,
    sub: "For commissions, contracts, and the occasional good argument about CSS.",
  },
  {
    label: "The Desk",
    content: (val) => <span className="font-display text-[21px] leading-[1.2]">{val}</span>,
    value: contact.location,
    sub: `${contact.timezone} — working with teams worldwide, remote-first.`,
  },
  {
    label: "Availability",
    content: (val) => <span className="font-display text-[21px] leading-[1.2]">{val}</span>,
    value: contact.availability,
    sub: "Currently at Mintifi full-time. Open to select opportunities.",
  },
];

export default function ContactRight() {
  return (
    <div className="flex flex-col bg-paper-warm p-6 min-[600px]:p-8">
      {items.map(({ label, content, value, sub }) => (
        <div key={label} className="group border-b border-ink/20 py-4 last:border-b-0 first:pt-0">
          <p className="mb-[5px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</p>
          <div className="relative w-fit">
            {content(value)}
            <InkUnderline className="absolute -bottom-2 left-0 h-[12px] w-full" />
          </div>
          <p className="mt-1 font-text text-[14px] text-ink-soft">{sub}</p>
        </div>
      ))}

      <div className="mt-auto flex gap-2.5 pt-[22px]">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256"><path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"/></svg>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256"><path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"/></svg>
        </a>
        <a href={`mailto:${contact.email}`} aria-label="Email" className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256"><path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"/></svg>
        </a>
      </div>
    </div>
  );
}
