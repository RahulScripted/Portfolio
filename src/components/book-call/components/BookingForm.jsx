import { motion } from "framer-motion";

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const inputCls =
  "w-full border-2 border-ink bg-paper-bright px-4 py-3.5 font-text text-[16px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-stamp transition-colors";

export default function BookingForm({ form, onChange, onTimeSelect, onSubmit, status }) {
  return (
    <motion.form
      key="form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-7 sm:grid-cols-2"
    >
      <div>
        <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="bc-name">
          Your name
        </label>
        <input id="bc-name" name="name" type="text" required placeholder="Jane Doe" value={form.name} onChange={onChange} className={inputCls} />
      </div>

      <div>
        <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="bc-email">
          Email
        </label>
        <input id="bc-email" name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} className={inputCls} />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft" htmlFor="bc-topic">
          What's the story?
        </label>
        <input id="bc-topic" name="topic" type="text" placeholder="A new product, a rebuild, a contract..." value={form.topic} onChange={onChange} className={inputCls} />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-[7px] block font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
          Preferred time slot <span className="text-stamp">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIMES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onTimeSelect(t)}
              className={`border-2 py-3.5 font-gothic text-[12px] font-bold uppercase tracking-[0.08em] transition-colors ${
                form.time === t ? "border-stamp bg-stamp text-paper" : "border-ink/30 text-ink hover:border-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {!form.time && (
          <p className="mt-1.5 font-mono text-[10px] text-ink-soft uppercase tracking-[0.1em]">
            Select a slot to proceed
          </p>
        )}
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-ink/20 pt-7">
        <span className="font-gothic text-[11px] uppercase tracking-[0.06em] text-ink-soft">
          IST (UTC +5:30) | 30 min | Google Meet
        </span>
        <button
          type="submit"
          disabled={!form.time || status === "sending"}
          className="inline-flex items-center gap-2 border-2 border-ink font-gothic font-bold uppercase tracking-[0.1em] text-[14px] px-7 py-[14px] bg-ink text-paper hover:bg-transparent hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Filing…" : "File the Request"}
        </button>
      </div>
    </motion.form>
  );
}
