import type { Metadata } from "next";
import Image from "next/image";
import { BriefForm } from "@/components/BriefForm";
import { ContactCards } from "@/components/ContactCards";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Midas Media Solutions. WhatsApp +267 76 513 917 or email info@midasmedia.co.bw.",
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
        figure="crest"
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
            <h2 className="mb-8 font-display text-3xl leading-[1.08] text-navy sm:text-4xl">
              Send a brief. Tell us what you need.
            </h2>
            <BriefForm />
          </Reveal>

          <Reveal delay={120} className="text-navy lg:pt-24">
            <h2 className="font-display text-2xl">What happens next</h2>
            <ol className="mt-6 grid gap-3">
              {next.map((step) => (
                <li key={step.title} className="rounded-[1.5rem] bg-navy p-6 text-cream">
                  <h3 className="font-display text-xl text-gold">{step.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed">{step.body}</p>
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
            <h2 className="font-display text-3xl leading-[1.08] text-cream sm:text-4xl">
              Or reach us directly. <span className="text-gold">Pick whatever&apos;s easiest.</span>
            </h2>
          </Reveal>
          <ContactCards />
        </div>
      </section>
    </>
  );
}
