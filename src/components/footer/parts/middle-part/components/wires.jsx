import { contact } from "@types/contact";

export default function WireServices() {
  return (
    <div>
      <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">Wire Services</h4>
      <a href={contact.github} target="_blank" rel="noopener noreferrer" className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors">GitHub</a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors">LinkedIn</a>
    </div>
  );
}
