import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { GreekKey } from "@/components/GreekKey";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { services, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Content design, brand identity, websites, and campaigns & print from Midas Media Solutions.",
};

const ways = [
  {
    name: "Monthly content partner",
    tag: "Ongoing",
    body: "We become your design team. Every month we plan, design and deliver your content, so your brand shows up on time and looks the same every time.",
    points: [
      "A content plan agreed at the start of each month",
      "Regular delivery of designed posts and stories",
      "One point of contact who knows your brand",
      "Room for last-minute promos when they come up",
    ],
  },
  {
    name: "One-off project",
    tag: "Fixed scope",
    body: "A new logo, a website, a launch campaign. We agree on what's being made and when, then deliver it start to finish.",
    points: [
      "A clear list of what you'll get",
      "Agreed timeline from kick-off to handover",
      "Rounds of feedback built into the process",
      "All final files handed over to you",
    ],
  },
];

const faqs = [
  {
    q: "What do you need from me to get started?",
    a: "A conversation about your business, who your customers are and where you want to be. If you have a logo, photos or examples of designs you like, bring those too. If you don't, that's what we're here for.",
  },
  {
    q: "Can you work with my existing logo?",
    a: "Yes. If your logo still works, we'll build everything around it. If it's holding you back, we'll tell you honestly and show you what a refresh could look like.",
  },
  {
    q: "Do I have to sign up for monthly content?",
    a: "No. Plenty of work is a one-off: a logo, a website, a single campaign. Monthly content is there for businesses that want to show up consistently without doing it themselves.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need, so we quote each project after a quick chat. Send us a WhatsApp or a brief and we'll come back with a clear price.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        edge="bg-cream"
        figure="leaves"
        title={
          <>
            Four ways we make your brand <span className="text-gold">look like gold.</span>
          </>
        }
        intro="Content, identity, websites and campaigns. Use one, or let us handle all of it, so every piece looks like it came from the same place."
      >
        <ul className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="block rounded-full bg-navy-soft px-5 py-2.5 text-[15px] font-semibold text-cream transition-colors hover:bg-gold hover:text-navy"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      {/* ───────── EACH SERVICE ───────── */}
      <div className="bg-cream text-navy">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-8 py-20 sm:py-28 ${i % 2 === 1 ? "bg-[#efe6d3]" : ""}`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div
                  className={`relative overflow-hidden rounded-[2rem] ${
                    service.slug === "brand-identity" ? "bg-navy p-12 sm:p-16" : "bg-navy"
                  }`}
                >
                  {service.slug === "brand-identity" && (
                    <GreekKey className="absolute inset-0 text-navy-soft opacity-50" />
                  )}
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={service.imageSize[0]}
                    height={service.imageSize[1]}
                    className={`relative w-full ${
                      service.slug === "brand-identity" ? "mx-auto max-w-xs" : ""
                    }`}
                  />
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy">{service.long}</p>

                <h3 className="mt-10 text-lg font-bold">What you get</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="rounded-2xl bg-navy px-5 py-4 text-[15px] font-medium leading-snug text-cream">
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-lg leading-relaxed text-navy">
                  <span className="font-bold">Good for: </span>
                  {service.goodFor}
                </p>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* ───────── WAYS TO WORK ───────── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <GreekKey className="absolute -left-24 top-0 h-full w-[380px] text-navy-soft opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
              Two ways to <span className="text-gold">work with us.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {ways.map((way, i) => (
              <Reveal key={way.name} delay={i * 120}>
                <article
                  className={`h-full rounded-[2rem] p-8 sm:p-10 ${
                    i === 0 ? "bg-gold text-navy" : "bg-navy-deep text-cream"
                  }`}
                >
                  <h3 className="font-display text-3xl sm:text-4xl">{way.name}</h3>
                  <p className={`mt-2 text-base font-bold ${i === 0 ? "text-navy" : "text-gold"}`}>{way.tag}</p>
                  <p className="mt-4 text-lg leading-relaxed">{way.body}</p>
                  <ul className="mt-8 space-y-3">
                    {way.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] font-medium">
                        <span aria-hidden="true" className={i === 0 ? "text-navy" : "text-gold"}>
                          ✓
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="bg-cream py-24 text-navy sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl">
              How it works. <span className="text-gold-deep">Then we keep going.</span>
            </h2>
          </Reveal>
          {/* The four steps run from navy into gold, left to right */}
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`rounded-[2rem] ${["bg-navy-deep text-cream", "bg-navy-soft text-cream", "bg-gold-deep text-cream", "bg-gold text-navy"][i]}`}
              >
                <Reveal delay={i * 100} className="flex h-full min-h-[16rem] flex-col justify-end p-8">
                  <h3 className="font-display text-2xl xl:text-3xl">{step.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-[#efe6d3] py-24 text-navy sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">Good to know.</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-navy">
              Something else on your mind?{" "}
              <Link href="/contact" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">
                Ask us directly.
              </Link>
            </p>
          </Reveal>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-[1.5rem] bg-cream px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-xl text-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
