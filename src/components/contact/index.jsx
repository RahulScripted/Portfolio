import { useState } from "react";
import { motion } from "framer-motion";
import ContactLeft from "./components/left-part";
import ContactRight from "./components/right-part";

function validateForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    // Clear error for field being edited
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append("access_key", "2bfd616f-a72b-43ee-aa32-ff8f1b5f2f2f");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) { setStatus("ok"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("err");
    } catch { setStatus("err"); }
  };

  return (
      <section id="contact" className="border-t-4 border-ink py-14 sm:py-[76px] px-3 sm:px-5">
      <div className="max-w-[1380px] mx-auto">
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-center justify-between gap-5 pb-2.5">
            <div><span className="section-eyebrow">Submit a Dispatch</span><h2 className="mt-1.5 section-h2">Let's Build Something Worth Shipping</h2></div>
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft hidden sm:block">Open to opportunities where engineering, product thinking and ownership matter.</span>
          </div>
          <div className="section-rule" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 border-2 border-ink min-[600px]:grid-cols-[1.15fr_0.85fr]"
        >
          <ContactLeft form={form} onChange={onChange} onSubmit={onSubmit} status={status} errors={errors} />
          <ContactRight />
        </motion.div>
      </div>
    </section>
  );
}
