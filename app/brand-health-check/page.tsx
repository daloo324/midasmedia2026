import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandHealthCheck } from "@/components/BrandHealthCheck";

export const metadata: Metadata = {
  title: "Brand Health Check",
  description:
    "Free 2-minute brand health check for Gaborone businesses. Score your Facebook and Instagram presence and get 3 free sample posts from Midas Media Solutions.",
};

// A copy of the original "Midas Brand Health Check" design, with the website logo.
// It has its own colours (below) and no site menu or footer.
const wrap = "mx-auto max-w-[760px] px-4";

// The original design's colours. The "dark:" versions are used when the visitor's device is in dark mode.
const palette = [
  "[--bhc-navy:#0f2a37] dark:[--bhc-navy:#081720]",
  "[--bhc-navy-2:#173a4a]",
  "[--bhc-gold:#c39a45] dark:[--bhc-gold:#d6b064]",
  "[--bhc-gold-soft:#f3e7cc] dark:[--bhc-gold-soft:#2b3424]",
  "[--bhc-bg:#f6f4ef] dark:[--bhc-bg:#0b1d26]",
  "[--bhc-surface:#ffffff] dark:[--bhc-surface:#12293a]",
  "[--bhc-fg:#0f2a37] dark:[--bhc-fg:#eef1f2]",
  "[--bhc-muted:#5a6b72] dark:[--bhc-muted:#9fb0b7]",
  "[--bhc-line:#e2ddd2] dark:[--bhc-line:#24404f]",
  "[--bhc-good:#2f7d4f] dark:[--bhc-good:#5fbf86]",
  "[--bhc-warn:#b7791f] dark:[--bhc-warn:#e0a84a]",
  "[--bhc-bad:#b34a3a] dark:[--bhc-bad:#e07a68]",
  "[--bhc-on-accent:#0f2a37]",
  "[color-scheme:light] dark:[color-scheme:dark]",
].join(" ");

export default function BrandHealthCheckPage() {
  return (
    <div className={`${palette} min-h-screen bg-[var(--bhc-bg)] text-base leading-[1.55] text-[var(--bhc-fg)]`}>
      <header className="bg-[var(--bhc-navy)] text-white">
        <div className={`${wrap} flex items-center justify-between gap-3 py-[18px]`}>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Midas Media Solutions home">
            <Image src="/images/king-mark.png" alt="" width={510} height={852} className="h-[50px] w-auto" priority />
            <span className="flex flex-col">
              <Image src="/images/wordmark-white.png" alt="Midas" width={724} height={178} className="h-6 w-auto" priority />
              <span className="mt-1 whitespace-nowrap text-[10px] font-semibold leading-none tracking-[0.28em] text-[var(--bhc-gold)]">
                MEDIA SOLUTIONS
              </span>
            </span>
          </Link>
          <div className="hidden text-right text-[11px] uppercase tracking-[0.24em] text-[var(--bhc-gold)] sm:block">
            Strategy · Content · Results
          </div>
        </div>
      </header>

      <section className="bg-[var(--bhc-navy)] text-white">
        <div className={`${wrap} pb-[72px] pt-7`}>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--bhc-gold)]">
            Free for Gaborone businesses
          </div>
          <h1 className="mb-3.5 mt-2.5 font-display text-[clamp(34px,7vw,56px)] font-normal uppercase leading-[0.98] text-balance">
            How strong is your brand <span className="text-[var(--bhc-gold)]">online?</span>
          </h1>
          <p className="max-w-[56ch] text-[#d6dfe3]">
            Answer 8 quick questions about your Facebook and Instagram. Get your Brand Health score out of 100 and the
            three changes that will make the biggest difference.
          </p>
        </div>
      </section>

      <div className={`${wrap} -mt-12 pb-12`}>
        <BrandHealthCheck />
      </div>

      <footer className="pb-8 pt-2 text-center text-[13px] text-[var(--bhc-muted)]">
        <b className="text-[11px] uppercase tracking-[0.2em] text-[var(--bhc-gold)]">Let&apos;s build your brand together</b>
        <br />
        Midas Media Solutions · Gaborone, Botswana
      </footer>
    </div>
  );
}
