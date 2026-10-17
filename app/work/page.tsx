import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { GreekKey } from "@/components/GreekKey";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "How we built the Midas Media Solutions brand: crest, wordmark, campaign poster, banners and device rollout.",
};

const deliverables = [
  "Crest and king mark",
  "Custom Greek-style wordmark",
  "Navy and gold colour palette",
  "Greek key pattern system",
  "Campaign poster",
  "Cover banners",
  "Laptop, tablet and phone mockups",
  "Social media templates",
];

const palette = [
  { name: "Royal Navy", hex: "#002333", className: "bg-navy text-cream border border-gold/30" },
  { name: "Midas Gold", hex: "#C79C51", className: "bg-gold text-navy" },
  { name: "Marble Cream", hex: "#F7F2E8", className: "bg-cream text-navy" },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case study · Midas Media Solutions"
        title={
          <>
            Our own brand, <span className="text-gold">start to finish.</span>
          </>
        }
        intro="Before we design for anyone else, we put ourselves through the same process. Here's how the Midas brand came together, from the first sketch of the crest to the full rollout."
      >
        <dl className="rise mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-gold/20 pt-8 sm:grid-cols-3" style={{ animationDelay: "360ms" }}>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Client</dt>
            <dd className="mt-2 text-sm text-cream">Midas Media Solutions</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</dt>
            <dd className="mt-2 text-sm text-cream">Identity, content, web</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Line</dt>
            <dd className="mt-2 text-sm text-cream">Consistent content, stronger brands</dd>
          </div>
        </dl>
      </PageHeader>

      {/* ───────── HERO IMAGE ───────── */}
      <section className="bg-gold pb-24 pt-4 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <figure className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,35,51,0.6)]">
              <Image
                src="/images/cover.webp"
                alt="Midas cover banner reading Your Brand Partner, split diagonally in navy and gold"
                width={2000}
                height={754}
                className="w-full"
                priority
              />
            </figure>
          </Reveal>

          <div className="mt-20 grid gap-12 text-navy lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">The brief</p>
              <h2 className="font-display text-3xl leading-[1.08] sm:text-4xl">
                Look premium without looking stiff.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">
                A design studio&apos;s brand is its first portfolio piece. It had to feel
                valuable and trustworthy, worth paying for, while still having the energy
                and humour of a studio that makes scroll-stopping content.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">The idea</p>
              <h2 className="font-display text-3xl leading-[1.08] sm:text-4xl">
                A classical king with modern attitude.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">
                The Midas myth gave us the gold. Ancient Greece gave us the crest, the
                lettering and the Greek key border. Then we broke the seriousness on purpose:
                mirrored sports shades on a marble statue. That one detail is what people
                remember.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── IDENTITY ───────── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">01 · Identity</p>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
              The crest, the wordmark, <span className="text-gold">the colours.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[2rem] border border-gold/30 bg-navy-deep p-12">
                <GreekKey className="absolute inset-0 text-navy-soft opacity-50" />
                <Image
                  src="/images/crest-badge.webp"
                  alt="The Midas crest: a bearded king with a crown inside a Greek key circle"
                  width={600}
                  height={610}
                  className="relative w-full max-w-xs"
                />
              </div>
            </Reveal>
            <div className="grid gap-5 lg:col-span-7">
              <Reveal delay={100}>
                <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-cream p-10 sm:flex-row sm:p-14">
                  <Image src="/images/king-mark.png" alt="" width={510} height={852} className="h-28 w-auto" />
                  <div>
                    <Image
                      src="/images/wordmark-navy.png"
                      alt="Midas wordmark"
                      width={724}
                      height={178}
                      className="h-14 w-auto sm:h-16"
                    />
                    <p className="mt-2 text-sm font-medium tracking-[0.22em] text-navy">MEDIA SOLUTIONS</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="grid gap-3 sm:grid-cols-3">
                  {palette.map((c) => (
                    <div key={c.hex} className={`flex h-36 flex-col justify-end rounded-[1.5rem] p-5 ${c.className}`}>
                      <p className="font-display text-lg">{c.name}</p>
                      <p className="text-sm font-semibold opacity-75">{c.hex}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CAMPAIGN ───────── */}
      <section className="bg-cream py-24 text-navy sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <figure className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,35,51,0.5)]">
              <Image
                src="/images/statue-poster.webp"
                alt="Campaign poster: marble statue of a king wearing a gold crown and reflective sunglasses"
                width={1400}
                height={1400}
                className="w-full"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">02 · Campaign</p>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">The poster that stops the scroll.</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/75">
              The launch poster puts everything in one frame: the giant wordmark behind, the
              marble king in front, the crest as a sign-off and the brand line in plain sight.
              Built square for social, it works just as well printed.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Social", "Print", "Launch"].map((t) => (
                <li key={t} className="rounded-full border border-navy/20 px-3 py-1 text-xs font-medium">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────── ROLLOUT ───────── */}
      <section className="bg-gold py-24 text-navy sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">03 · Rollout</p>
              <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">One system, every screen.</h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-navy/80 lg:justify-self-end">
              Same colours, same lettering, same king, whether it&apos;s a laptop homepage,
              a tablet or a phone lock screen.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <figure className="overflow-hidden rounded-[2rem] bg-navy">
                <Image
                  src="/images/devices-gold.webp"
                  alt="Midas branding on a laptop, tablet and phone with gold monstera leaves"
                  width={1300}
                  height={1271}
                  className="w-full"
                />
              </figure>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-5">
              <figure className="overflow-hidden rounded-[2rem] bg-navy">
                <Image
                  src="/images/devices-cover.webp"
                  alt="Midas brand shown across laptop, tablet and phone screens"
                  width={1400}
                  height={713}
                  className="w-full"
                />
              </figure>
              <div className="flex-1 rounded-[2rem] bg-navy p-8 text-cream sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What we delivered</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm">
                      <span aria-hidden="true" className="text-gold">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
