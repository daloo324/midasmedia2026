import type { Metadata } from "next";
import Image from "next/image";
import { BriefForm } from "@/components/BriefForm";
import { ContactCards } from "@/components/ContactCards";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Midas Media Solutions. WhatsApp +267 75721332 or email info@midasmedia.co.bw.",
};

const next = [
  { title: "We reply", body: "We read your message and come back with questions or first thoughts." },
  { title: "We chat", body: "A short call or meeting to understand your business and what you need." },
  { title: "You get a plan", body: "A clear outline of what we'll make, when, and what it costs." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s make something <span className="text-gold">worth looking at.</span>
          </>
        }
        intro="A quick WhatsApp, an email or a full brief: whatever's easiest for you. Tell us what you're working on and we'll take it from there."
      />

      <section className="relative overflow-hidden bg-gold py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-navy">Send a brief</p>
            <h2 className="mb-8 font-display text-3xl leading-[1.08] text-navy sm:text-4xl">
              Tell us what you need.
            </h2>
            <BriefForm />
          </Reveal>

          <Reveal delay={120} className="text-navy lg:pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">What happens next</p>
            <ol className="mt-6 space-y-8">
              {next.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-navy/80">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Image
              src="/images/king-mark.png"
              alt=""
              width={510}
              height={852}
              className="mt-14 hidden h-40 w-auto opacity-90 lg:block"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Or reach us directly</p>
            <h2 className="font-display text-3xl leading-[1.08] text-cream sm:text-4xl">
              Pick whatever&apos;s easiest.
            </h2>
          </Reveal>
          <ContactCards />
        </div>
      </section>
    </>
  );
}
