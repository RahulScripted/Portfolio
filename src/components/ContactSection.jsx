import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../data";

const settle = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const inputCls =
  "w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-stamp transition-colors";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append("access_key", "2bfd616f-a72b-43ee-aa32-ff8f1b5f2f2f");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="contact" className="border-t-4 border-ink py-[76px] px-5 sm:px-[30px]">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="section-eyebrow">Submit a Dispatch</span>
              <h2 className="mt-1.5 section-h2">Letters &amp; Commissions</h2>
            </div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft whitespace-nowrap">
              The desk is open for select work
            </span>
          </div>
          <div className="section-rule" />
        </div>

        {/* Two-col bordered box */}
        <motion.div
          {...settle(0.1)}
          className="grid grid-cols-1 border-2 border-ink min-[600px]:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Form */}
          <div className="border-b-2 border-ink p-6 min-[600px]:border-b-0 min-[600px]:border-r-2 min-[600px]:p-9">
            <h3 className="mb-1.5 font-display text-[32px] font-normal">Put it in writing</h3>
            <p className="mb-6 font-text text-[15px] leading-[1.55] text-ink-soft">
              A project in mind, a role to fill, or just a good question — send it through.
            </p>

            <form onSubmit={onSubmit} aria-label="Contact form">
              {/* Honeypot */}
              <input className="hidden" tabIndex={-1} autoComplete="off" name="company" />

              <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
                <div className="mb-4">
                  <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-name">
                    Your name
                  </label>
                  <input id="c-name" name="name" type="text" required placeholder="Jane Doe" value={form.name} onChange={onChange} className={inputCls} />
                </div>
                <div className="mb-4">
                  <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-email">
                    Email
                  </label>
                  <input id="c-email" name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} className={inputCls} />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-subject">
                  Subject
                </label>
                <input id="c-subject" name="subject" type="text" placeholder="A new product, a rebuild, a contract..." value={form.subject} onChange={onChange} className={inputCls} />
              </div>

              <div className="mb-4">
                <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="c-message">
                  The story
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me what you're building."
                  value={form.message}
                  onChange={onChange}
                  className={`${inputCls} min-h-[120px] resize-y leading-[1.5]`}
                />
              </div>

              <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                <span className="font-gothic text-[11px] uppercase tracking-[0.06em] text-ink-soft">
                  Usually replies within 24 hours
                </span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[14px] px-7 py-[14px] bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send the letter"}
                </button>
              </div>

              {status === "ok" && (
                <p className="mt-3 font-gothic text-[11px] uppercase tracking-[0.1em] text-stamp">
                  ✓ Received. I'll be in touch.
                </p>
              )}
              {status === "err" && (
                <p className="mt-3 font-gothic text-[11px] uppercase tracking-[0.1em] text-stamp">
                  Something went wrong. Email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Side panel */}
          <div className="flex flex-col bg-paper-warm p-6 min-[600px]:p-8">
            {[
              {
                label: "Direct line",
                content: (
                  <a href={`mailto:${contact.email}`} className="font-display text-[21px] leading-[1.2] hover:text-stamp transition-colors break-all">
                    {contact.email}
                  </a>
                ),
                sub: "For commissions, contracts, and the occasional good argument about CSS.",
              },
              {
                label: "The Desk",
                content: <span className="font-display text-[21px] leading-[1.2]">{contact.location}</span>,
                sub: `${contact.timezone} — working with teams worldwide, remote-first.`,
              },
              {
                label: "Availability",
                content: <span className="font-display text-[21px] leading-[1.2]">{contact.availability}</span>,
                sub: "Currently at Mintifi full-time. Open to select opportunities.",
              },
            ].map((item) => (
              <div key={item.label} className="border-b border-ink/20 py-4 last:border-b-0 first:pt-0">
                <p className="mb-[5px] font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                  {item.label}
                </p>
                {item.content}
                <p className="mt-1 font-text text-[14px] text-ink-soft">{item.sub}</p>
              </div>
            ))}

            {/* Social icon buttons */}
            <div className="mt-auto flex gap-2.5 pt-[22px]">
              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
