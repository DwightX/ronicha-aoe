import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to email service (Formspree / Basin / SES) when ready
    console.log("[ContactForm] submitted (placeholder):", form);
    setSubmitted(true);
  };

  return (
    <div className="bg-cream border border-sand/60 p-8 md:p-12">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-clay mb-4">
              Received
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-earth leading-tight">
              Thank you, {form.name?.split(" ")[0] || "friend"}.
            </h3>
            <p className="mt-6 text-ink/75 leading-relaxed max-w-md mx-auto">
              Your note has landed. I read every message personally and will be
              in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <TextArea
              label="Your message"
              name="message"
              value={form.message}
              onChange={onChange}
              rows={7}
              required
              placeholder="A little about you and what you'd like to share…"
            />

            <button
              type="submit"
              className="mt-2 inline-flex justify-center items-center px-10 py-4 bg-earth text-cream tracking-[0.25em] text-xs uppercase hover:bg-clay transition-colors duration-300"
            >
              Send Message
            </button>
            <p className="text-xs text-ink/50 text-center">
              I read every message personally and respond as soon as I can.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-sand py-3 text-base text-ink placeholder:text-ink/40 focus:outline-none focus:border-earth transition-colors";

function Field({ label, name, ...rest }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.25em] uppercase text-clay mb-2">
        {label}
      </span>
      <input name={name} className={inputClass} {...rest} />
    </label>
  );
}

function TextArea({ label, name, ...rest }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.25em] uppercase text-clay mb-2">
        {label}
      </span>
      <textarea
        name={name}
        className={`${inputClass} resize-none`}
        {...rest}
      />
    </label>
  );
}
