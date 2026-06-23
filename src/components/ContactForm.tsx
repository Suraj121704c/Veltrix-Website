"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-body/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(22,29,46,0.35)] sm:p-8">
      <h2 className="font-display text-2xl font-bold text-ink">
        Do you have any question?
      </h2>
      <p className="mt-2 text-sm leading-6 text-body">
        Fill out the contact form below, and one of our service specialists will
        get back to you within 24 hours.
      </p>

      {sent ? (
        <div className="mt-6 rounded-lg bg-primary-soft px-4 py-6 text-center text-sm font-medium text-primary-dark">
          Thanks! Your message has been sent — we&apos;ll be in touch within 24
          hours.
        </div>
      ) : (
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className={inputClass}
          />
          <input
            type="text"
            name="service"
            placeholder="Service Required"
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
