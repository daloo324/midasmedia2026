"use client";

import { useEffect, useState } from "react";
import { industries, partColor, questions, scoreBand } from "@/lib/brand-health-check";
import { contact } from "@/lib/contact";

// Styled to match the original "Midas Brand Health Check" design exactly.
// Colours come from the palette in app/brand-health-check/page.tsx (light + dark versions).

type Step = "intro" | "quiz" | "result";

const RING = 326.7; // circumference of the score ring

const focus = "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--bhc-gold)]";
const btn = `inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-[26px] py-4 text-[15px] font-bold uppercase leading-none tracking-[0.12em] transition active:translate-y-px ${focus}`;
const btnPrimary = `${btn} bg-[var(--bhc-navy)] text-white hover:bg-[var(--bhc-navy-2)]`;
const btnGold = `${btn} bg-[var(--bhc-gold)] text-[var(--bhc-on-accent)]`;
const btnGhost = `inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-2 py-3 text-[15px] font-bold uppercase leading-none tracking-[0.08em] text-[var(--bhc-muted)] transition active:translate-y-px ${focus}`;
const display = "font-display font-normal";

function copyText(text: string, onDone: () => void) {
  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      onDone();
    } catch {}
    ta.remove();
  };
  try {
    navigator.clipboard.writeText(text).then(onDone, fallback);
  } catch {
    fallback();
  }
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
    <div className="rounded-[14px] border border-[var(--bhc-line)] bg-[var(--bhc-surface)] p-[clamp(20px,4vw,36px)] shadow-[0_12px_40px_rgba(8,23,32,0.12)]">
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
    <div className="grid items-center gap-7 sm:grid-cols-[1.2fr_1fr]">
      <div>
        <h2 className={`${display} mb-2.5 text-2xl leading-[1.1] text-balance`}>
          2 minutes. No sign-up. Your score right away.
        </h2>
        <ul className="mb-6 mt-4 grid gap-2">
          {[
            "See how you compare on consistency, content mix and planning",
            "Get 3 fixes you can start this week",
            "Optional: claim 3 free sample posts designed for your business",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-2 w-2 flex-none rotate-45 bg-[var(--bhc-gold)]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mb-[18px] grid gap-1.5">
          <label htmlFor="industry" className="text-sm font-semibold">
            What kind of business do you run?
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className={`w-full rounded-[10px] border border-[var(--bhc-line)] bg-[var(--bhc-bg)] px-3.5 py-3 text-[var(--bhc-fg)] ${focus}`}
          >
            {industries.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={onStart} className={btnPrimary}>
          Start my check <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="relative rounded-xl bg-[var(--bhc-navy)] p-5 text-white" aria-label="Example result">
        <span className="absolute right-3 top-3 rounded-full bg-white/[0.12] px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
          Example
        </span>
        <div className="text-xs text-[#c9d4d8]">Brand Health score</div>
        <div className="text-[64px] font-extrabold leading-none text-[var(--bhc-gold)]">
          47<small className="text-xl text-[#9fb0b7]">/100</small>
        </div>
        {sample.map(([label, pct], i) => (
          <div key={label}>
            <div className={`text-xs text-[#c9d4d8] ${i === 0 ? "mt-3" : ""}`}>{label}</div>
            <div className="mb-2.5 mt-1 h-1.5 overflow-hidden rounded-[3px] bg-white/[0.12]">
              <i className="block h-full bg-[var(--bhc-gold)]" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
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
      <div className="mb-[22px] flex items-center gap-3 text-[13px] tabular-nums text-[var(--bhc-muted)]">
        <span>
          {qi + 1} of {questions.length}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-[var(--bhc-line)]">
          <i
            className="block h-full bg-[var(--bhc-gold)] transition-[width] duration-300"
            style={{ width: `${((qi + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bhc-gold)]">{q.area}</div>
      <div className={`${display} mb-5 mt-1.5 text-[clamp(22px,4vw,28px)] leading-[1.15] text-balance`}>{q.q}</div>
      <div className="grid gap-2.5" role="group">
        {q.options.map(([label], i) => {
          const on = selected === i;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => onChoose(i)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-[1.5px] px-4 py-[15px] text-left text-base font-medium leading-[1.35] text-[var(--bhc-fg)] transition-colors hover:border-[var(--bhc-gold)] ${focus} ${
                on ? "border-[var(--bhc-gold)] bg-[var(--bhc-gold-soft)]" : "border-[var(--bhc-line)] bg-[var(--bhc-bg)]"
              }`}
            >
              <span
                className={`grid h-[26px] w-[26px] flex-none place-items-center rounded-full border-[1.5px] text-xs font-bold ${
                  on
                    ? "border-[var(--bhc-gold)] bg-[var(--bhc-gold)] text-[var(--bhc-on-accent)]"
                    : "border-[var(--bhc-line)] text-[var(--bhc-muted)]"
                }`}
              >
                {"ABCD"[i]}
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-[18px] flex justify-between">
        <button type="button" onClick={onBack} className={btnGhost}>
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
      <div className="grid items-center justify-items-start gap-6 sm:grid-cols-[auto_1fr] sm:justify-items-stretch">
        <div className="relative h-[150px] w-[150px]">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--bhc-line)" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--bhc-gold)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={RING}
              strokeDashoffset={ring}
              style={{ transition: "stroke-dashoffset .9s ease" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <b className="text-[46px] font-extrabold leading-none tabular-nums">{score}</b>
              <small className="block text-xs text-[var(--bhc-muted)]">out of 100</small>
            </div>
          </div>
        </div>
        <div>
          <span
            className="inline-block rounded-full px-2.5 py-[5px] text-xs font-bold uppercase tracking-[0.12em] text-white"
            style={{ background: band.color }}
          >
            {band.label}
          </span>
          <h2 className={`${display} mb-1.5 mt-2.5 text-[26px] leading-[1.1] text-balance`}>{band.headline}</h2>
          <p className="text-[var(--bhc-muted)]">{band.summary}</p>
        </div>
      </div>

      <SectionTitle>Your breakdown</SectionTitle>
      <div className="grid gap-3">
        {parts.map((p) => (
          <div key={p.Q.area} className="grid grid-cols-[1fr_54px] items-center gap-3 text-sm sm:grid-cols-[150px_1fr_54px]">
            <span>{p.Q.area}</span>
            <div className="col-span-full row-start-2 h-2 overflow-hidden rounded bg-[var(--bhc-line)] sm:col-span-1 sm:row-start-auto">
              <i className="block h-full rounded" style={{ width: `${Math.max(p.pct * 100, 3)}%`, background: partColor(p.pct) }} />
            </div>
            <span className="text-right text-[13px] tabular-nums text-[var(--bhc-muted)]">
              {p.pts}/{p.Q.w}
            </span>
          </div>
        ))}
      </div>

      <SectionTitle>Your 3 biggest fixes</SectionTitle>
      <ul className="grid gap-3">
        {weakest.map((p) => (
          <li key={p.Q.area} className="grid gap-1 rounded-xl border border-[var(--bhc-line)] px-4 py-3.5">
            <b className="text-[15px]">{p.Q.fix[0]}</b>
            <span className="text-sm text-[var(--bhc-muted)]">{p.Q.fix[1]}</span>
            <em className="text-xs font-bold not-italic uppercase tracking-[0.1em] text-[var(--bhc-gold)]">
              Brand Launch includes: {p.Q.feature}
            </em>
          </li>
        ))}
      </ul>

      <Offer score={score} industry={industry} weakest={weakest.map((p) => p.Q.area)} />

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          className={btnGhost}
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
        <button type="button" className={btnGhost} onClick={onRestart}>
          Retake the check
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-[30px] flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--bhc-muted)] after:h-px after:flex-1 after:bg-[var(--bhc-line)]">
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
    <div className="mb-[18px] grid gap-1.5">
      <label htmlFor={key} className="text-sm font-semibold text-white">
        {label}
      </label>
      <input
        id={key}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className={`w-full rounded-[10px] border border-white/20 bg-white/[0.08] px-3.5 py-3 text-white placeholder:text-[#8ea3ab] ${focus}`}
        {...props}
      />
    </div>
  );

  return (
    <div className="mt-7 rounded-[14px] bg-[var(--bhc-navy)] p-[clamp(20px,4vw,30px)] text-white">
      <h2 className={`${display} mb-2 text-[clamp(22px,4vw,30px)] uppercase leading-[1.05]`}>
        Get 3 free sample posts <span className="text-[var(--bhc-gold)]">for your business</span>
      </h2>
      <p className="mb-[18px] max-w-[58ch] text-[#d6dfe3]">
        We&apos;ll design 3 posts in your brand, based on this score, and send them to you on WhatsApp within 48 hours.
        No obligation.
      </p>

      {message === null ? (
        <form onSubmit={submit} noValidate>
          <div className="grid gap-x-3 sm:grid-cols-2">
            {field("name", "Your name", { autoComplete: "given-name", placeholder: "e.g. Kagiso" })}
            {field("biz", "Business name", { autoComplete: "organization", placeholder: "e.g. Glow Studio" })}
          </div>
          <div className="grid gap-x-3 sm:grid-cols-2">
            {field("wa", "Your WhatsApp number", { inputMode: "tel", autoComplete: "tel", placeholder: "7X XXX XXX" })}
            {field("page", "Facebook or Instagram page (optional)", { placeholder: "@yourbusiness" })}
          </div>
          <div className="mb-2.5 mt-1 min-h-[1em] text-[13px] text-[#ffb4a6]" role="alert">
            {error}
          </div>
          <button type="submit" className={btnGold}>
            Send me my free posts <span aria-hidden="true">›</span>
          </button>
        </form>
      ) : (
        <div className="mt-3.5 rounded-xl border border-white/15 bg-white/[0.06] p-4">
          <b>Last step: send this message to Midas on WhatsApp.</b>
          <pre className="mb-3 mt-2 whitespace-pre-wrap font-sans text-[13px] leading-normal text-[#d6dfe3]">{message}</pre>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={`${contact.whatsappLink}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener"
              className={btnGold}
            >
              Open WhatsApp
            </a>
            <button
              type="button"
              className={`${btn} bg-white/10 text-white`}
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
            <span className="select-all font-bold text-[var(--bhc-gold)]">{contact.phone}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
