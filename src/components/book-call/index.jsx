import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { contact } from "@types/contact";
import PageHeader from "./components/PageHeader";
import BookingForm from "./components/BookingForm";
import ConfirmationPanel from "./components/ConfirmationPanel";

const ACCESS_KEY = "2bfd616f-a72b-43ee-aa32-ff8f1b5f2f2f";

export default function BookCall() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", time: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "err"
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onTimeSelect = (t) => setForm((p) => ({ ...p, time: t }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.time) return;
    setStatus("sending");

    const fd = new FormData();
    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", `Book a Call — ${form.name} @ ${form.time}`);
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("message", `Preferred time: ${form.time}\n\nWhat's the story:\n${form.topic || "—"}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        setSubmitted(true);
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <div className="bg-paper min-h-screen text-ink">
      <PageHeader />

      <main className="max-w-[1380px] mx-auto px-5 pt-6 pb-16">
        <div className="my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-ink/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">File your request</span>
          <div className="flex-1 h-px bg-ink/20" />
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <ConfirmationPanel name={form.name} time={form.time} email={form.email} />
          ) : (
            <BookingForm
              form={form}
              onChange={onChange}
              onTimeSelect={onTimeSelect}
              onSubmit={onSubmit}
              status={status}
            />
          )}
        </AnimatePresence>

        {status === "err" && (
          <p className="mt-4 font-gothic text-[11px] uppercase tracking-[0.1em] text-stamp">
            Something went wrong — email me directly at{" "}
            <a href={`mailto:${contact.email}`} className="normal-case underline underline-offset-2">
              {contact.email}
            </a>
          </p>
        )}

        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border-t border-ink/20 pt-6">
          Prefer email?{" "}
          <a href={`mailto:${contact.email}`} className="normal-case text-stamp hover:text-ink transition-colors underline underline-offset-2">
            {contact.email}
          </a>
        </p>
      </main>
    </div>
  );
}
