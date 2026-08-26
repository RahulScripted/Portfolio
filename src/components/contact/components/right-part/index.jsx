import { Link } from "react-router-dom";
import { contact } from "@types/contact";
import InkUnderline from "./components/InkUnderline";

const items = [
  {
    label: "Direct line",
    content: (href) => (
      <a href={`mailto:${href}`} className="font-display text-[18px] sm:text-[21px] leading-[1.2] hover:text-stamp transition-colors break-all">
        {href}
      </a>
    ),
    value: contact.email,
    sub: "Roles, collaborations and interesting engineering problems.",
  },
  {
    label: "The Desk",
    content: (val) => <span className="font-display text-[18px] sm:text-[21px] leading-[1.2]">{val}</span>,
    value: contact.location,
    sub: `${contact.timezone} — working with teams worldwide.`,
  },
  {
    label: "Availability",
    content: (val) => <span className="font-display text-[18px] sm:text-[21px] leading-[1.2]">{val}</span>,
    value: contact.availability,
    sub: "Currently at Mintifi and open to select opportunities.",
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

      <div className="mt-auto pt-[22px]">
        <Link
          to="/book-call"
          className="flex items-center justify-center gap-2 border-2 border-stamp bg-stamp text-paper font-gothic font-bold uppercase tracking-[0.1em] text-[13px] px-5 py-3 hover:bg-transparent hover:text-stamp transition-colors"
        >
          Start a Conversation
        </Link>
      </div>
    </div>
  );
}
