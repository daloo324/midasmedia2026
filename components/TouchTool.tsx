"use client";

import { useId, useState } from "react";
import { contact } from "@/lib/contact";
import { GreekKey } from "@/components/GreekKey";

// The "Everything we touch turns gold" try-it piece on the homepage.
// Visitors type their business name and switch between a plain, home-made
// post and the same post with the Midas treatment.
export function TouchTool() {
  const inputId = useId();
  const [name, setName] = useState("");
  const [gold, setGold] = useState(true);
  const shown = name.trim() || "Your business";

  // Long names get a smaller size so they always fit the post
  const len = shown.length;
  const nameSize = len <= 10 ? "text-[2.6em]" : len <= 16 ? "text-[2em]" : "text-[1.5em]";

  const message = `Hi Midas, I'd like the Midas touch for ${shown}.`;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
      <h2 className="font-display text-[clamp(1.85rem,7.6vw,4.5rem)] leading-[0.98] text-navy lg:col-span-12 lg:text-[clamp(2.5rem,5vw,4.5rem)]">
        <span className="block whitespace-nowrap">Everything we touch</span>
        <span className="block whitespace-nowrap">turns gold.</span>
      </h2>
      <div className="lg:col-span-6 lg:pt-4">
        <p className="max-w-md text-lg leading-relaxed text-navy">
          Type your business name and see what changes when the same post gets
          the Midas treatment.
        </p>

        <label htmlFor={inputId} className="mt-10 block text-base font-semibold text-navy">
          Your business name
        </label>
        <div className="mt-3 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            id={inputId}
            type="text"
            value={name}
            maxLength={28}
            autoComplete="organization"
            placeholder="e.g. Kgosi Coffee"
            onChange={(e) => setName(e.target.value)}
            className="min-h-12 flex-1 rounded-full bg-cream px-5 text-base text-navy placeholder:text-ink-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-navy"
          />
          <button
            type="button"
            onClick={() => setGold((g) => !g)}
            aria-pressed={gold}
            className="min-h-12 rounded-full bg-navy px-6 text-base font-semibold text-gold transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-cream"
          >
            {gold ? "Show it plain" : "Turn it gold"}
          </button>
        </div>

        <a
          href={`${contact.whatsappLink}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-lg font-semibold text-navy underline decoration-2 underline-offset-8 transition-colors hover:text-cream"
        >
          Want the real thing? Send us your name on WhatsApp
        </a>
      </div>

      {/* The post preview */}
      <div className="lg:col-span-5 lg:col-start-8">
        <figure
          aria-live="polite"
          aria-label={`${shown}, shown as a ${gold ? "Midas" : "plain"} social post`}
          className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[1.5rem] text-[clamp(1rem,3.4vw,1.5rem)]"
        >
          {/* Plain version */}
          <div
            aria-hidden={gold}
            className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#f4f4f4] p-8 text-center transition-[opacity,visibility] duration-500 ${
              gold ? "invisible opacity-0" : "visible opacity-100"
            }`}
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <p className={`${nameSize} font-bold leading-tight text-[#d11a1a] break-words`}>{shown}</p>
            <p className="text-[1em] text-[#222]">!! NOW OPEN !! Call us today</p>
            <p className="text-[0.8em] text-[#555]">Best prices in town</p>
          </div>

          {/* Gold version */}
          <div
            aria-hidden={!gold}
            className={`absolute inset-0 bg-navy transition-[opacity,transform,visibility] duration-700 ease-out ${
              gold ? "visible scale-100 opacity-100" : "invisible scale-[1.04] opacity-0"
            }`}
          >
            <GreekKey className="absolute inset-0 text-navy-soft" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cream [clip-path:polygon(84%_0,100%_0,100%_100%,68%_100%)]"
            />
            <div className="relative flex h-full flex-col justify-between p-[8%]">
              <div />
              <div className="max-w-[62%]">
                <p className={`${nameSize} font-display leading-[0.95] text-gold break-words`}>
                  {shown}
                </p>
                <p className="mt-4 text-[0.75em] font-semibold leading-snug text-cream">
                  Now open. Come and see us this week.
                </p>
              </div>
            </div>
          </div>
        </figure>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] text-navy">
          {gold ? "With the Midas touch." : "The usual home-made post."}
        </p>
      </div>
    </div>
  );
}
