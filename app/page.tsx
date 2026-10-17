import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ContactCTA";
import { GreekKey } from "@/components/GreekKey";
import { Reveal } from "@/components/Reveal";
import { services, steps } from "@/lib/content";

const tickerItems = [
  "Social content",
  "Brand identity",
  "Web design",
  "Campaigns",
  "Print & signage",
  "Motion graphics",
];

export default function Home() {
  return (
    <>

      {/* ───────── HERO ───────── */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy pt-32">
        <GreekKey
          className="absolute -left-10 top-1/2 -z-10 hidden h-[520px] w-[520px] -translate-y-1/2 text-navy-soft opacity-60 lg:block"
        />
        {/* Gold diagonal, borrowed from the brand cover banner */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gold [clip-path:polygon(0_68%,100%_48%,100%_100%,0_100%)] lg:[clip-path:polygon(72%_0,100%_0,100%_100%,46%_100%)] xl:[clip-path:polygon(64%_0,100%_0,100%_100%,32%_100%)]"
        />

        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="rise mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Digital design studio · Botswana
            </p>
            <h1
              className="rise font-display text-[clamp(2.6rem,6vw,5.25rem)] leading-[1.02] text-cream"
              style={{ animationDelay: "120ms" }}
            >
              The Midas
              <br />
              touch, <span className="text-gold">for</span>
              <br />
              your brand.
            </h1>
            <p
              className="rise mt-8 max-w-md text-lg leading-relaxed text-cream/75"
              style={{ animationDelay: "260ms" }}
            >
              We design the social content, brand identities and websites that
              keep businesses looking sharp, week after week.
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "380ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/work"
                className="px-2 py-4 text-sm font-semibold uppercase tracking-wider text-cream underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: "320ms" }}>
            <Image
              src="/images/devices-gold.webp"
              alt="Midas branding shown on a laptop, tablet and phone, with gold monstera leaves"
              width={1300}
              height={1271}
              priority
              className="relative w-full rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,24,42,0.7)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-navy px-6 py-5 shadow-xl sm:block">
              <p className="font-display text-xl leading-tight text-gold">Consistent content.</p>
              <p className="font-display text-xl leading-tight text-cream">Stronger brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── TICKER ───────── */}
      <div className="border-y border-navy/20 bg-gold py-5 text-navy">
        <div className="ticker flex w-max gap-12 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-2xl">
              {item}
              <span aria-hidden="true" className="text-xl">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ───────── SERVICES ───────── */}
      <section id="services" className="bg-cream py-24 text-navy sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What we do
            </p>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
              Everything your brand puts out, made to match.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-navy/70">
              Most brands don&apos;t look weak because of one bad post. They look weak
              because nothing lines up. We fix that.
            </p>
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-gold transition-transform hover:-translate-y-0.5"
            >
              All services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>

          <div className="divide-y divide-navy/15 border-y border-navy/15">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * 80}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid gap-4 py-10 sm:grid-cols-[5rem_1fr]"
                >
                  <span className="text-3xl font-bold text-gold transition-transform group-hover:-translate-y-1">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl transition-colors group-hover:text-gold sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-navy/70">{service.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-navy/20 px-3 py-1 text-xs font-medium text-navy/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WORK ───────── */}
      <section id="work" className="relative bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Selected work
              </p>
              <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
                Old-world authority. <span className="text-gold">New-world attitude.</span>
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-cream/70">
              Our own brand rollout: a crowned marble king in mirrored shades,
              a Greek key border, and one system carried from social to screen.{" "}
              <Link href="/work" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-light">
                Read the case study →
              </Link>
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <figure className="group h-full overflow-hidden rounded-[2rem] bg-navy-deep">
                <Image
                  src="/images/statue-poster.webp"
                  alt="Campaign poster: marble statue of a king wearing a gold crown and reflective sunglasses, with the line Consistent Content, Stronger Brands"
                  width={1400}
                  height={1400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </figure>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={100}>
              <figure className="group overflow-hidden rounded-[2rem] bg-gold">
                <Image
                  src="/images/devices-cover.webp"
                  alt="Midas brand shown across laptop, tablet and phone screens"
                  width={1400}
                  height={713}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-navy">
                  <span>Multi-device brand rollout</span>
                  <span className="font-display text-lg">Web · Digital</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={180}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gold/30 bg-navy-deep p-8">
                <GreekKey className="absolute inset-0 text-navy-soft opacity-40" />
                <div className="relative flex items-start justify-between gap-6">
                  <Image
                    src="/images/crest-badge.webp"
                    alt="The Midas crest: a bearded king with a crown inside a Greek key circle"
                    width={600}
                    height={610}
                    className="w-32 sm:w-40"
                  />
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                    Identity
                  </span>
                </div>
                <p className="relative mt-8 font-display text-3xl leading-tight text-cream">
                  Crest, wordmark & <span className="text-gold">brand system</span>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-5">
            <figure className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/cover.webp"
                alt="Midas cover banner reading Your Brand Partner, split diagonally in navy and gold"
                width={2000}
                height={754}
                className="w-full"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section id="process" className="relative overflow-hidden bg-gold py-24 text-navy sm:py-32">
        <GreekKey className="absolute -right-20 -top-20 h-80 w-80 text-navy opacity-[0.08]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">How it works</p>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl">
              Gold isn&apos;t made in a day. It&apos;s made every week.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-navy/20 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-gold">
                <Reveal delay={i * 100} className="h-full p-8">
                  <span className="text-6xl font-extrabold leading-none text-navy/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl xl:text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy/80">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
