import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@animations";

export default function PageHeader() {
  return (
    <>
      <header className="border-b-4 border-ink px-5 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft hover:text-stamp transition-colors"
        >
          <ArrowLeftIcon size={14} /> Back to the Record
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft hidden sm:block">
          The Rahul Goswami Times | Scheduling Desk
        </span>
      </header>

      <div className="max-w-[1380px] mx-auto px-5 pt-12 pb-2">
        <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-stamp">
          Scheduling Desk | Dispatch No. 01
        </span>
        <h1
          className="mt-2 font-display font-normal leading-[1.04] tracking-[-0.02em]"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          Book an Intro Call
        </h1>
        <div className="mt-4 h-[3px] bg-ink w-full" />
        <p className="mt-5 max-w-[58ch] font-text text-[16px] leading-[1.6] text-ink-soft">
          A 30-minute conversation — no pitch decks, no strings. Tell me what
          you're building and let's see if there's a story worth writing together.
        </p>
      </div>
    </>
  );
}
