import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { GreekKey } from "@/components/GreekKey";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're called Midas, what we believe about brands, and how we work with the businesses we design for.",
};

const beliefs = [
  {
    title: "Consistency beats brilliance",
    body: "One great post won't build a brand. Fifty good ones that all look like you will. We design for the long run.",
  },
  {
    title: "Every pixel earns its place",
    body: "If something's on the page, it's there for a reason. We cut what doesn't help your customer understand you faster.",
  },
  {
    title: "Straight answers",
    body: "If an idea won't work, we'll say so. If your logo is holding you back, we'll tell you kindly, and show you a better option.",
  },
  {
    title: "Your brand, not ours",
    body: "We have a strong style for our own brand. Yours should look like you. We listen first and design second.",
  },
];

const clients = [
  {
    title: "Just starting out",
    body: "You need a name, a logo and a look that makes you seem established from day one.",
  },
  {
    title: "Growing and busy",
    body: "You know you should post more, but there's no time. You need a team that keeps your feeds sharp without chasing.",
  },
  {
    title: "Ready for a refresh",
    body: "You've been around a while and your brand has drifted. Different fonts, different colours, different moods. Time to line it up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        edge="bg-cream"
        figure="king"
        title={
          <>
            Named after a king. <span className="text-gold">Built for brands.</span>
          </>
        }
        intro="Midas Media Solutions is a digital design studio. We make the content, identities and websites that help businesses look as good as they are."
      />

      {/* ───────── THE NAME ───────── */}
      <section className="bg-cream py-24 text-navy sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <figure className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/statue-poster.webp"
                alt="Marble statue of a king wearing a gold crown and reflective sunglasses"
                width={1400}
                height={1400}
                className="w-full"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
              Why Midas? <span className="text-gold-deep">Everything he touched turned to gold.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy">
              <p>
                In the old story, King Midas had a gift: whatever he touched became gold.
                We took the name because that&apos;s the job. Every post, poster and page your
                brand touches should make it look more valuable.
              </p>
              <p>
                Our own look says the rest. A marble king from the ancient world, wearing a
                gold crown and a pair of mirrored sports shades. Old-world authority, new-world
                attitude. Classic enough to trust, bold enough to notice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── BIG STATEMENT ───────── */}
      <section className="relative overflow-hidden bg-gold py-24 text-navy sm:py-32">
        <GreekKey className="absolute inset-0 text-navy opacity-[0.06]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <Image
              src="/images/king-mark.png"
              alt=""
              width={510}
              height={852}
              className="mx-auto h-24 w-auto"
            />
            <p className="mt-10 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08]">
              Consistent content. Stronger brands.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-navy">
              That line is our whole philosophy. Brands don&apos;t get strong from one big moment.
              They get strong from showing up, looking the same, week after week, until people
              recognise you before they read your name.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────── BELIEFS ───────── */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
              Four rules we <span className="text-gold">design by.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <article className={`h-full rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 ${i % 3 === 0 ? "bg-navy-deep" : "bg-navy-soft"}`}>
                  <h3 className="font-display text-2xl text-gold sm:text-3xl">{b.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-cream">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHO WE WORK WITH ───────── */}
      <section className="bg-cream py-24 text-navy sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
                Businesses that are done looking ordinary.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-navy lg:justify-self-end">
              Big or small, new or established. What our clients share is wanting to be taken
              seriously.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {clients.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className={`h-full rounded-[2rem] p-8 sm:p-10 ${["bg-[#efe6d3]", "bg-gold", "bg-navy text-cream"][i]}`}>
                <h3 className="font-display text-2xl sm:text-3xl">{c.title}</h3>
                <p className="mt-4 text-lg leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
