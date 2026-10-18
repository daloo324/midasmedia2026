"use client";

import { useEffect, useState } from "react";
import { industries, partColor, questions, scoreBand } from "@/lib/brand-health-check";
import { contact } from "@/lib/contact";

type Step = "intro" | "quiz" | "result";

const RING = 326.7; // circumference of the score ring

const btn =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[0.95rem] font-bold uppercase tracking-[0.12em] transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-px";
const ghostBtn =
  "rounded-full px-2 py-3 text-[0.95rem] font-bold uppercase tracking-[0.08em] text-[#5a6b72] transition-colors hover:text-navy focus-visible:outline-3 focus-visible:outline-gold";
const input =
  "w-full rounded-[10px] border px-3.5 py-3 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold";

function copyText(text: string, onDone: () => void) {
  navigator.clipboard?.writeText(text).then(onDone, () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      onDone();
    } catch {}
    ta.remove();
  });
}

export function BrandHealthCheck() {
  const [step, setStep] = useState<Step>("intro");
  const [industry, setIndustry] = useState(industries[0]);
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));

  function choose(i: number) {
    const next = [...answers];
    next[qi] = i;
    setAnswers(next);
    setTimeout(() => {
      if (qi < questions.length - 1) setQi(qi + 1);
      else {
        setStep("result");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 220);
  }

  function restart() {
    setAnswers(questions.map(() => null));
    setQi(0);
    setStep("intro");
  }

  return (
    <div className="rounded-[14px] border border-[#e2ddd2] bg-white p-5 text-navy shadow-[0_12px_40px_rgba(0,24,42,0.12)] sm:p-9">
      {step === "intro" && (
        <Intro
          industry={industry}
          setIndustry={setIndustry}
          onStart={() => {
            setQi(0);
            setStep("quiz");
          }}
        />
      )}
      {step === "quiz" && (
        <Quiz
          qi={qi}
          selected={answers[qi]}
          onChoose={choose}
          onBack={() => (qi > 0 ? setQi(qi - 1) : setStep("intro"))}
        />
      )}
      {step === "result" && <Result answers={answers as number[]} industry={industry} onRestart={restart} />}
    </div>
  );
}

function Intro({
  industry,
  setIndustry,
  onStart,
}: {
  industry: string;
  setIndustry: (v: string) => void;
  onStart: () => void;
}) {
  const sample = [
    ["Posting rhythm", 50],
    ["Consistent look", 35],
    ["Video & reels", 20],
    ["Planning", 60],
  ] as const;

  return (
    <div className="grid items-center gap-7 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h2 className="mb-2.5 font-display text-2xl leading-[1.1]">2 minutes. No sign-up. Your score right away.</h2>
        <ul className="mb-6 mt-4 grid gap-2">
          {[
            "See how you compare on consistency, content mix and planning",
            "Get 3 fixes you can start this week",
            "Optional: claim 3 free sample posts designed for your business",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mb-5 grid gap-1.5">
          <label htmlFor="industry" className="text-sm font-semibold">
            What kind of business do you run?
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className={`${input} border-[#e2ddd2] bg-cream text-navy`}
          >
            {industries.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={onStart} className={`${btn} bg-navy text-cream hover:bg-navy-soft`}>
          Start my check <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="relative rounded-xl bg-navy p-5 text-cream" aria-label="Example result">
        <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-[0.625rem] uppercase tracking-[0.2em]">
          Example
        </span>
        <p className="text-xs text-[#c9d4d8]">Brand Health score</p>
        <p className="text-6xl font-extrabold leading-none text-gold">
          47<small className="text-xl text-muted">/100</small>
        </p>
        <div className="mt-3">
          {sample.map(([label, pct]) => (
            <div key={label}>
              <p className="text-xs text-[#c9d4d8]">{label}</p>
              <div className="mb-2.5 mt-1 h-1.5 overflow-hidden rounded-sm bg-white/10">
                <i className="block h-full bg-gold" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Quiz({
  qi,
  selected,
  onChoose,
  onBack,
}: {
  qi: number;
  selected: number | null;
  onChoose: (i: number) => void;
  onBack: () => void;
}) {
  const q = questions[qi];
  return (
    <div>
      <div className="mb-5 flex items-center gap-3 text-sm tabular-nums text-[#5a6b72]">
        <span>
          {qi + 1} of {questions.length}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-sm bg-[#e2ddd2]">
          <i className="block h-full bg-gold transition-[width] duration-300" style={{ width: `${((qi + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{q.area}</p>
      <h2 className="mb-5 mt-1.5 font-display text-[clamp(1.375rem,4vw,1.75rem)] leading-[1.15]">{q.q}</h2>
      <div className="grid gap-2.5" role="group">
        {q.options.map(([label], i) => {
          const on = selected === i;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => onChoose(i)}
              className={`flex items-center gap-3 rounded-xl border-[1.5px] px-4 py-4 text-left font-medium leading-snug transition-colors hover:border-gold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                on ? "border-gold bg-[#f3e7cc]" : "border-[#e2ddd2] bg-cream"
              }`}
            >
              <span
                className={`grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border-[1.5px] text-xs font-bold ${
                  on ? "border-gold bg-gold text-navy" : "border-[#e2ddd2] text-[#5a6b72]"
                }`}
              >
                {"ABCD"[i]}
              </span>
              {label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">
        <button type="button" onClick={onBack} className={ghostBtn}>
          ‹ Back
        </button>
      </div>
    </div>
  );
}

function Result({ answers, industry, onRestart }: { answers: number[]; industry: string; onRestart: () => void }) {
  const parts = questions.map((Q, i) => {
    const pct = Q.options[answers[i]][1];
    return { Q, pct, pts: Math.round(pct * Q.w) };
  });
  const score = parts.reduce((sum, p) => sum + p.pts, 0);
  const band = scoreBand(score);
  const weakest = [...parts].sort((a, b) => a.pct - b.pct || b.Q.w - a.Q.w).slice(0, 3);

  // Animate the ring filling up
  const [ring, setRing] = useState(RING);
  useEffect(() => {
    const id = requestAnimationFrame(() => setRing(RING * (1 - score / 100)));
    return () => cancelAnimationFrame(id);
  }, [score]);

  const [shared, setShared] = useState(false);

  return (
    <div>
      <div className="grid items-center justify-items-start gap-6 sm:grid-cols-[auto_1fr]">
        <div className="relative h-[150px] w-[150px]">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e2ddd2" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={RING}
              strokeDashoffset={ring}
              style={{ transition: "stroke-dashoffset .9s ease" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <b className="block text-[2.9rem] font-extrabold leading-none tabular-nums">{score}</b>
              <small className="text-xs text-[#5a6b72]">out of 100</small>
            </div>
          </div>
        </div>
        <div>
          <span
            className="inline-block rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white"
            style={{ background: band.color }}
          >
            {band.label}
          </span>
          <h2 className="mb-1.5 mt-2.5 font-display text-[1.625rem] leading-[1.1]">{band.headline}</h2>
          <p className="text-[#5a6b72]">{band.summary}</p>
        </div>
      </div>

      <SectionTitle>Your breakdown</SectionTitle>
      <div className="grid gap-3">
        {parts.map((p) => (
          <div key={p.Q.area} className="grid grid-cols-[1fr_54px] items-center gap-x-3 gap-y-1.5 text-sm sm:grid-cols-[150px_1fr_54px]">
            <span>{p.Q.area}</span>
            <div className="col-span-2 row-start-2 h-2 overflow-hidden rounded bg-[#e2ddd2] sm:col-span-1 sm:row-start-auto">
              <i className="block h-full rounded" style={{ width: `${Math.max(p.pct * 100, 3)}%`, background: partColor(p.pct) }} />
            </div>
            <span className="text-right text-[0.8rem] tabular-nums text-[#5a6b72]">
              {p.pts}/{p.Q.w}
            </span>
          </div>
        ))}
      </div>

      <SectionTitle>Your 3 biggest fixes</SectionTitle>
      <ul className="grid gap-3">
        {weakest.map((p) => (
          <li key={p.Q.area} className="grid gap-1 rounded-xl border border-[#e2ddd2] px-4 py-3.5">
            <b className="text-[0.95rem]">{p.Q.fix[0]}</b>
            <span className="text-sm text-[#5a6b72]">{p.Q.fix[1]}</span>
            <em className="text-xs font-bold not-italic uppercase tracking-[0.1em] text-gold">
              Brand Launch includes: {p.Q.feature}
            </em>
          </li>
        ))}
      </ul>

      <Offer score={score} industry={industry} weakest={weakest.map((p) => p.Q.area)} />

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          className={ghostBtn}
          onClick={() =>
            copyText(
              `I scored ${score}/100 on the Midas Brand Health Check. How strong is your brand online? ${location.href.split("#")[0]}`,
              () => {
                setShared(true);
                setTimeout(() => setShared(false), 1600);
              },
            )
          }
        >
          {shared ? "Copied" : "Copy my score to share"}
        </button>
        <button type="button" className={ghostBtn} onClick={onRestart}>
          Retake the check
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5a6b72] after:h-px after:flex-1 after:bg-[#e2ddd2]">
      {children}
    </h3>
  );
}

function Offer({ score, industry, weakest }: { score: number; industry: string; weakest: string[] }) {
  const [form, setForm] = useState({ name: "", biz: "", wa: "", page: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const biz = form.biz.trim();
    const wa = form.wa.replace(/[^\d+]/g, "");
    const page = form.page.trim();
    if (!name || !biz) return setError("Add your name and business name so we know who the posts are for.");
    if (wa.replace(/\D/g, "").length < 7) return setError("Add a WhatsApp number we can send your posts to, like 71 234 567.");
    setError("");
    setMessage(
      `Hi Midas, I'd like my 3 free sample posts.\n\nName: ${name}\nBusiness: ${biz} (${industry})\nWhatsApp: ${wa}${
        page ? `\nPage: ${page}` : ""
      }\nBrand Health score: ${score}/100\nWeakest areas: ${weakest.join(", ")}`,
    );
  }

  const field = (key: keyof typeof form, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="grid gap-1.5">
      <label htmlFor={key} className="text-sm font-semibold text-cream">
        {label}
      </label>
      <input
        id={key}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className={`${input} border-white/20 bg-white/[0.08] text-cream placeholder:text-[#8ea3ab]`}
        {...props}
      />
    </div>
  );

  return (
    <div className="mt-7 rounded-[14px] bg-navy p-5 text-cream sm:p-7">
      <h2 className="mb-2 font-display text-[clamp(1.375rem,4vw,1.875rem)] uppercase leading-[1.05]">
        Get 3 free sample posts <span className="text-gold">for your business</span>
      </h2>
      <p className="mb-5 max-w-[58ch] text-[#d6dfe3]">
        We&apos;ll design 3 posts in your brand, based on this score, and send them to you on WhatsApp within 48 hours.
        No obligation.
      </p>

      {message === null ? (
        <form onSubmit={submit} noValidate>
          <div className="grid gap-x-3 gap-y-4 sm:grid-cols-2">
            {field("name", "Your name", { autoComplete: "given-name", placeholder: "e.g. Kagiso" })}
            {field("biz", "Business name", { autoComplete: "organization", placeholder: "e.g. Glow Studio" })}
            {field("wa", "Your WhatsApp number", { inputMode: "tel", autoComplete: "tel", placeholder: "7X XXX XXX" })}
            {field("page", "Facebook or Instagram page (optional)", { placeholder: "@yourbusiness" })}
          </div>
          <p className="mb-2.5 mt-3 min-h-[1em] text-sm text-[#ffb4a6]" role="alert">
            {error}
          </p>
          <button type="submit" className={`${btn} bg-gold text-navy hover:bg-gold-light`}>
            Send me my free posts <span aria-hidden="true">›</span>
          </button>
        </form>
      ) : (
        <div className="rounded-xl border border-white/15 bg-white/[0.06] p-4">
          <b>Last step: send this message to Midas on WhatsApp.</b>
          <pre className="mb-3 mt-2 whitespace-pre-wrap font-sans text-sm leading-normal text-[#d6dfe3]">{message}</pre>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`${contact.whatsappLink}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-gold text-navy hover:bg-gold-light`}
            >
              Open WhatsApp
            </a>
            <button
              type="button"
              className={`${btn} bg-white/10 text-cream hover:bg-white/20`}
              onClick={() =>
                copyText(message, () => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1600);
                })
              }
            >
              {copied ? "Copied" : "Copy message"}
            </button>
          </div>
          <p className="mt-3 text-xs text-[#8ea3ab]">
            If WhatsApp doesn&apos;t open, copy the message and send it to{" "}
            <span className="select-all font-bold text-gold">{contact.phone}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
