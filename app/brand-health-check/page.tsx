import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandHealthCheck } from "@/components/BrandHealthCheck";
import { GreekKey } from "@/components/GreekKey";

export const metadata: Metadata = {
  title: "Brand Health Check",
  description:
    "Free 2-minute brand health check for Gaborone businesses. Score your Facebook and Instagram presence and get 3 free sample posts from Midas Media Solutions.",
};

export default function BrandHealthCheckPage() {
  return (
    <div className="bg-cream">
      <section className="relative isolate overflow-hidden bg-navy">
        <GreekKey className="absolute -right-24 top-0 -z-10 h-full w-[420px] text-navy-soft opacity-60" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center justify-between gap-3 py-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Midas Media Solutions home">
              <Image src="/images/king-mark.png" alt="" width={510} height={852} className="h-12 w-auto" priority />
              <span className="flex flex-col">
                <Image src="/images/wordmark-white.png" alt="Midas" width={724} height={178} className="h-6 w-auto" priority />
                <span className="mt-1 whitespace-nowrap text-[0.6rem] font-medium tracking-[0.18em] text-cream/80">
                  MEDIA SOLUTIONS
                </span>
              </span>
            </Link>
            <span className="hidden text-right text-[0.7rem] uppercase tracking-[0.24em] text-gold sm:block">
              Strategy · Content · Results
            </span>
          </div>

          {/* Intro */}
          <div className="rise pb-[4.5rem] pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Free for Gaborone businesses</p>
            <h1 className="mb-3.5 mt-2.5 font-display text-[clamp(2.1rem,7vw,3.5rem)] uppercase leading-[0.98] text-cream">
              How strong is your brand <span className="text-gold">online?</span>
            </h1>
            <p className="max-w-[56ch] text-[#d6dfe3]">
              Answer 8 quick questions about your Facebook and Instagram. Get your Brand Health score out of 100 and
              the three changes that will make the biggest difference.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-12 max-w-3xl px-4 pb-12 sm:px-6">
        <BrandHealthCheck />
      </div>

      <p className="pb-10 text-center text-sm text-[#5a6b72]">
        <b className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">Let&apos;s build your brand together</b>
        <br />
        Midas Media Solutions · Gaborone, Botswana
      </p>
    </div>
  );
}
