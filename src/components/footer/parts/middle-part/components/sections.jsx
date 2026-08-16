import { footerSectionLinks } from "@types/shared";
import ScrollLink from "@components/ScrollLink";

export default function Sections() {
  return (
    <div>
      <h4 className="mb-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-paper/55">Sections</h4>
      {footerSectionLinks.map(({ href, label }) => (
        <ScrollLink key={href} to={href.replace("#", "")} className="mb-2.5 block w-fit font-text text-[15px] text-paper hover:text-paper/60 transition-colors">
          {label}
        </ScrollLink>
      ))}
    </div>
  );
}
