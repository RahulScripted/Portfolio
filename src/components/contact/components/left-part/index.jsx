const inputCls = "w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-stamp transition-colors";

export default function ContactLeft({ form, onChange, onSubmit, status }) {
  return (
    <div className="border-b-2 border-ink p-6 min-[600px]:border-b-0 min-[600px]:border-r-2 min-[600px]:p-9">
      <h3 className="mb-1.5 font-display text-[32px] font-normal">Put it in writing</h3>
      <p className="mb-6 font-text text-[15px] leading-[1.55] text-ink-soft">A project in mind, a role to fill, or just a good question — send it through.</p>
      <form onSubmit={onSubmit} aria-label="Contact form">
        <input className="hidden" tabIndex={-1} autoComplete="off" name="company" />
        <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
          <div className="mb-4">
            <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" required placeholder="Jane Doe" value={form.name} onChange={onChange} className={inputCls} />
          </div>
          <div className="mb-4">
            <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} className={inputCls} />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-subject">Subject</label>
          <input id="c-subject" name="subject" type="text" placeholder="A new product, a rebuild, a contract..." value={form.subject} onChange={onChange} className={inputCls} />
        </div>
        <div className="mb-4">
          <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-message">The story</label>
          <textarea id="c-message" name="message" required rows={5} placeholder="Tell me what you're building." value={form.message} onChange={onChange} className={`${inputCls} min-h-[120px] resize-y leading-[1.5]`} />
        </div>
        <div className="relative mt-[22px] flex flex-wrap items-center justify-between gap-4">
          <span className="font-gothic text-[11px] uppercase tracking-[0.06em] text-ink-soft">Usually replies within 24 hours</span>
          <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[14px] px-7 py-[14px] bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors disabled:opacity-50">
            {status === "sending" ? "Sending…" : "Send the letter"}
          </button>
          {status === "ok"  && <p className="absolute -top-7 left-0 font-gothic text-[11px] uppercase tracking-[0.1em] text-green-600">✓ Successfully sent. I'll be in touch.</p>}
          {status === "err" && <p className="absolute -top-7 left-0 font-gothic text-[11px] uppercase tracking-[0.1em] text-stamp">Something went wrong. Email me directly.</p>}
        </div>
      </form>
    </div>
  );
}
