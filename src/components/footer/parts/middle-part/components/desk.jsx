import { contact } from "@types/contact";

export default function Desk() {
  return (
    <div>
      <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">The Desk</h4>
      <p className="mb-2.5 font-text text-[15px] text-paper">{contact.location}</p>
      <p className="mb-2.5 font-text text-[15px] text-paper">{contact.timezone} | Remote-first | Onsite | PAN India</p>
      <a href={`mailto:${contact.email}`} className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors break-all">
        {contact.email}
      </a>
    </div>
  );
}
