import Image from "next/image";
import Link from "next/link";
import { GreekKey } from "@/components/GreekKey";
import { ProcessAccordion } from "@/components/ProcessAccordion";
import { Reveal } from "@/components/Reveal";
import { TouchTool } from "@/components/TouchTool";
import { contact } from "@/lib/contact";
import { capabilities, workTiles, type WorkTile } from "@/lib/content";

// The homepage is a run of full-screen colour "chapters" that moves from navy into gold:
// hero → statement → try-it → what we make → work → how it works → start band → footer.

const statement = [
  { text: "Most brands don't look weak", colour: "text-cream" },
  { text: "because of one bad post.", colour: "text-gold" },
  { text: "They look weak", colour: "text-cream" },
  { text: "because nothing", colour: "text-gold" },
  { text: "lines up.", colour: "text-cream" },
];
// Each line of the statement steps further right, like a staircase
const stairs = ["lg:pl-0", "lg:pl-[6vw]", "lg:pl-[12vw]", "lg:pl-[18vw]", "lg:pl-[24vw]"];
const stairsPhone = ["pl-0", "pl-[5vw]", "pl-[10vw]", "pl-[15vw]", "pl-[20vw]"];

// Where each work tile sits in the staggered grid (desktop), with deliberate empty cells
const workPlacement = [
  { cls: "lg:col-span-2 lg:col-start-1 lg:row-start-1", ratio: "aspect-[3/2]" }, // row 1: wide
  { cls: "lg:col-start-4 lg:row-start-1", ratio: "aspect-[4/5]" }, //              row 1 (heading takes column 3)
  { cls: "lg:col-start-2 lg:row-start-2", ratio: "aspect-[4/5]" }, //              row 2
  { cls: "lg:col-start-3 lg:row-start-2", ratio: "aspect-[4/5]" }, //              row 2
  { cls: "lg:col-span-2 lg:col-start-3 lg:row-start-3", ratio: "aspect-[2000/754]" }, // row 3: wide (banner shape)
  { cls: "lg:col-start-1 lg:row-start-3", ratio: "aspect-[4/5]" }, //              row 3
];
const phonePlacement = [
  "col-span-2",
  "col-start-2",
  "col-start-1",
  "col-start-2",
  "col-span-2",
  "col-start-1",
];
const grounds = { navy: "bg-navy-soft", gold: "bg-gold", cream: "bg-cream" } as const;

function WorkTileView({ tile, ratio }: { tile: WorkTile; ratio: string }) {
  const media = tile.image ? (
    <div className={`relative h-full w-full overflow-hidden ${grounds[tile.ground ?? "navy"]}`}>
      <Image
        src={tile.image}
        alt={tile.alt ?? ""}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`transition-transform duration-700 group-hover:scale-[1.04] ${
          tile.fit === "contain" ? "object-contain p-[12%]" : "object-cover"
        }`}
      />
    </div>
  ) : (
    // Placeholder until real client work is added in lib/content.ts
    <div className="flex h-full w-full items-center justify-center bg-navy-soft p-6 text-center">
      <p className="font-display text-lg leading-tight text-gold">Client work arriving soon</p>
    </div>
  );

  return (
    <>
      <div className={`${ratio} overflow-hidden rounded-[1.5rem]`}>{media}</div>
      <p className="mt-3 flex flex-col justify-between gap-1 text-[15px] text-cream sm:flex-row">
        <span className="font-semibold">{tile.title}</span>
        <span>{[tile.category, tile.year].filter(Boolean).join(", ")}</span>
      </p>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* ───────── HERO: navy and gold split, from the brand cover ───────── */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy pt-32">
        <GreekKey className="absolute -left-10 top-1/2 -z-10 hidden h-[520px] w-[520px] -translate-y-1/2 text-navy-soft opacity-60 lg:block" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gold [clip-path:polygon(0_68%,100%_48%,100%_100%,0_100%)] lg:[clip-path:polygon(74%_0,100%_0,100%_100%,50%_100%)]"
        />

        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <h1 className="font-display text-[clamp(2.1rem,8.6vw,4.5rem)] leading-[1.02] text-cream lg:text-[clamp(2.5rem,5vw,4.5rem)]">
              <span className="mask-line"><span className="whitespace-nowrap">The Midas touch,</span></span>
              <span className="mask-line"><span className="whitespace-nowrap" style={{ animationDelay: "110ms" }}>for your brand.</span></span>
            </h1>
            <p className="rise mt-8 max-w-md text-lg leading-relaxed text-cream" style={{ animationDelay: "500ms" }}>
              A design studio in Gaborone making the social content, brand identities
              and websites that keep businesses looking sharp, week after week.
            </p>
            <div className="rise mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "500ms" }}>
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-gold px-7 text-base font-semibold text-navy transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-cream"
              >
                Start a project
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#work"
                className="py-3 text-base font-semibold text-cream underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
              >
                See the work
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
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="relative w-full rounded-[1.5rem]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-[1.5rem] bg-navy px-6 py-5 sm:block">
              <p className="font-display text-lg leading-tight text-gold">Consistent content.</p>
              <p className="font-display text-lg leading-tight text-cream">Stronger brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── STATEMENT: the problem, as a staircase ───────── */}
      <section aria-labelledby="why-heading" className="relative bg-navy-deep py-28 lg:py-40">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h2 id="why-heading" className="mb-10 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] text-cream">
              Why brands look weak
            </h2>
            <Reveal>
              <p className="font-display text-[clamp(1.25rem,6vw,1.5rem)] leading-[1.2] md:text-[2rem] lg:text-[2.25rem]">
                {statement.map((line, i) => (
                  <span key={line.text} className={`block ${line.colour} ${stairsPhone[i]} ${stairs[i]}`}>
                    {line.text}
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-16 max-w-md text-lg leading-relaxed text-cream">
                We fix that: one look, carried across every post, page and print, every week.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-3 lg:grid-cols-1">
            <Reveal delay={200} className="aspect-[3/2] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/gold-leaves.webp"
                alt="Gold monstera leaves, the Midas motif"
                width={1300}
                height={560}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="drift h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={290} className="aspect-[3/2] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/statue-poster.webp"
                alt="The crowned marble king from the Midas campaign, in mirrored sunglasses"
                width={1400}
                height={1400}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="h-full w-full object-cover object-[30%_48%]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── TRY IT: the Midas touch on your own name ───────── */}
      <section id="touch" className="bg-gold py-28 lg:py-40">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <TouchTool />
        </div>
      </section>

      {/* ───────── WHAT WE MAKE: capabilities at poster scale ───────── */}
      <section id="services" className="flex min-h-[90svh] items-center bg-cream py-[18vh] text-navy">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-soft">What we make</h2>
          <ul className="cap-list mt-[0.35em]">
            {capabilities.map((cap, i) => (
              <li key={cap.name} className="cap-row">
                <Reveal delay={i * 70}>
                  <Link
                    href={cap.href}
                    className="grid gap-2 pb-7 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:pb-[0.3em]"
                  >
                    <span className="cap-name font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none transition-colors lg:col-span-7">
                      {cap.name}
                    </span>
                    <span className="pl-5 text-lg leading-snug lg:col-span-4 lg:col-start-8 lg:pl-0">{cap.body}</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── WORK: staggered tiles, real client work to come ───────── */}
      <section id="work" className="bg-navy py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-14">
          <Reveal className="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:self-center">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-cream">
              Our
              <br />
              work
            </h2>
            <Link
              href="/work"
              className="mt-6 inline-block text-lg font-semibold text-gold underline decoration-2 underline-offset-8 hover:text-cream"
            >
              The Midas case study →
            </Link>
          </Reveal>

          {workTiles.map((tile, i) => {
            const place = workPlacement[i];
            const inner = <WorkTileView tile={tile} ratio={place.ratio} />;
            return (
              <Reveal key={`${tile.title}-${i}`} delay={(i % 2) * 90} className={`group self-start ${phonePlacement[i]} ${place.cls}`}>
                {tile.href ? (
                  <Link href={tile.href} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-gold">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ───────── HOW IT WORKS: panels running from navy into gold ───────── */}
      <section id="process" className="flex min-h-[90svh] items-center bg-cream py-28 text-navy">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] lg:col-span-5">Gold, every week</h2>
            <p className="max-w-xl text-lg leading-relaxed lg:col-span-5 lg:col-start-7">
              Consistency is the whole job. This is how a month with us runs, from
              the first sit-down to the weekly rhythm that makes a brand strong.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-16">
            <ProcessAccordion />
          </Reveal>
        </div>
      </section>

      {/* ───────── START: the whole band is the button ───────── */}
      <section aria-labelledby="start-heading" className="bg-cream">
        <a
          href={`${contact.whatsappLink}?text=${encodeURIComponent("Hi Midas, I'd like to start a project.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex min-h-[46svh] flex-col justify-between bg-gold px-5 pb-6 pt-8 text-navy [clip-path:polygon(0_6vw,6vw_0,100%_0,100%_100%,0_100%)] hover:bg-navy hover:text-gold focus:outline-none focus-visible:bg-navy focus-visible:text-gold sm:px-8 lg:min-h-[60svh]"
        >
          <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-6 pl-[4vw]">
            <p className="max-w-md text-[17px] leading-snug lg:text-lg">
              Start a project on WhatsApp. Tell us what you&apos;re working on and we&apos;ll
              come back with ideas, not a sales pitch.
            </p>
            <svg aria-hidden="true" viewBox="0 0 48 48" className="h-8 w-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 lg:h-12 lg:w-12">
              <path d="M12 36 L36 12 M16 12 H36 V32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
            </svg>
          </div>
          <h2 id="start-heading" className="mx-auto w-full max-w-7xl font-display text-[clamp(5rem,26vw,22rem)] leading-[0.8]">
            Start
          </h2>
        </a>
      </section>
    </>
  );
}
