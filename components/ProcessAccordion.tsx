"use client";

import Image from "next/image";
import { useState } from "react";
import { steps } from "@/lib/content";

// "How it works" as a row of panels that run from navy into gold.
// Click (or tap) a stage to open it. On phones the row turns into stacked bars.
const panelColours = [
  "bg-navy-deep text-cream",
  "bg-navy-soft text-cream",
  "bg-gold-deep text-cream",
  "bg-gold text-navy",
];

export function ProcessAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden rounded-[1.5rem] lg:h-[520px] lg:flex-row">
      {steps.map((step, i) => {
        const isOpen = open === i;
        const panelId = `stage-${i}`;
        return (
          <div
            key={step.title}
            className={`relative ${panelColours[i]} transition-[flex-basis,flex-grow] duration-[450ms] ease-out lg:min-w-[5.5rem] ${
              isOpen ? "lg:flex-[1_1_58%]" : "lg:flex-[0_1_14%]"
            }`}
          >
            <h3 className="h-full">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(i)}
                className={`group flex w-full items-center px-6 text-left font-display focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-cream lg:h-full lg:items-start lg:p-8 ${
                  isOpen ? "min-h-16 py-5 text-[1.75rem] lg:text-[2.25rem]" : "min-h-16 text-lg lg:items-end lg:p-6"
                }`}
              >
                <span
                  className={`transition-transform group-hover:translate-x-1 ${
                    isOpen ? "" : "lg:[writing-mode:vertical-rl] lg:rotate-180 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-0"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!isOpen}
              className="px-6 pb-8 lg:absolute lg:bottom-0 lg:left-0 lg:max-w-[36ch] lg:p-8"
            >
              <p className="text-[17px] leading-relaxed lg:text-lg">{step.body}</p>
            </div>
            {isOpen && (
              <div className="pointer-events-none absolute inset-y-8 right-8 hidden w-[42%] overflow-hidden rounded-[1rem] lg:block">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="30vw"
                  className={`rise ${step.image.endsWith(".png") || step.image.includes("crest") ? "object-contain" : "object-cover"}`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
