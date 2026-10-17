"use client";

import { useState } from "react";
import { contact } from "@/lib/contact";
import { services } from "@/lib/content";

// A project brief form. There's no server behind it: on send, it opens WhatsApp
// or the visitor's email app with their answers already filled in.
export function BriefForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const toggle = (title: string) =>
    setNeeds((n) => (n.includes(title) ? n.filter((x) => x !== title) : [...n, title]));

  const buildText = () =>
    [
      `Hi Midas, my name is ${name.trim()}${business.trim() ? ` from ${business.trim()}` : ""}.`,
      needs.length ? `I'm interested in: ${needs.join(", ")}.` : "",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n\n");

  const send = (via: "whatsapp" | "email") => {
    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a short message so we know how to help.");
      return;
    }
    setError("");
    const text = buildText();
    const url =
      via === "whatsapp"
        ? `${contact.whatsappLink}?text=${encodeURIComponent(text)}`
        : `mailto:${contact.email}?subject=${encodeURIComponent(
            `Project enquiry${business.trim() ? ` from ${business.trim()}` : ""}`
          )}&body=${encodeURIComponent(text)}`;
    window.open(url, via === "whatsapp" ? "_blank" : "_self");
  };

  const field =
    "mt-2 w-full rounded-xl border border-navy/20 bg-white px-4 py-3.5 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send("whatsapp");
      }}
      className="rounded-[2rem] bg-cream p-7 text-navy sm:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Your name
          <input value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Name" autoComplete="name" />
        </label>
        <label className="block text-sm font-bold">
          Business <span className="font-medium text-navy/50">(optional)</span>
          <input value={business} onChange={(e) => setBusiness(e.target.value)} className={field} placeholder="Business name" autoComplete="organization" />
        </label>
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-bold">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => {
            const on = needs.includes(s.title);
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggle(s.title)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  on ? "border-navy bg-navy text-gold" : "border-navy/20 hover:border-navy"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="mt-7 block text-sm font-bold">
        Tell us about it
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={`${field} resize-y`}
          placeholder="What are you working on, and when do you need it?"
        />
      </label>

      {error && (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold uppercase tracking-wider text-gold transition-transform hover:-translate-y-0.5"
        >
          Send on WhatsApp
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <button
          type="button"
          onClick={() => send("email")}
          className="rounded-full border-2 border-navy px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-cream"
        >
          Send by email
        </button>
      </div>
      <p className="mt-4 text-xs text-navy/60">
        This opens WhatsApp or your email app with your message filled in. Nothing is sent until you press send there.
      </p>
    </form>
  );
}
