import Image from "next/image";

// The top of every inner page (About, Services, Work, Contact), in the homepage's language:
// the dark marble hall, one cut-out on the right, the heading set between them, and a
// slanted edge into the next section's colour.

const figures = {
  king: { src: "/home/bust-marble.webp", w: 1100, h: 1524, alt: "A marble bust of a crowned king in mirrored sunglasses" },
  goldKing: { src: "/home/bust-gold.webp", w: 1100, h: 1524, alt: "The crowned king, turned to gold" },
  leaves: { src: "/home/leaves.webp", w: 1400, h: 1073, alt: "Two gold monstera leaves" },
  crest: { src: "/images/crest-badge.webp", w: 600, h: 610, alt: "The Midas crest" },
} as const;

export type HeaderFigure = keyof typeof figures;

export function PageHeader({
  title,
  intro,
  figure = "king",
  edge = "bg-gold",
  children,
}: {
  title: React.ReactNode;
  intro: string;
  /** Which cut-out stands in the hall on the right */
  figure?: HeaderFigure;
  /** Colour of the slanted edge at the bottom; match it to the next section */
  edge?: string;
  children?: React.ReactNode;
}) {
  const f = figures[figure];
  const isBust = figure === "king" || figure === "goldKing";

  return (
    <section className="relative isolate overflow-hidden bg-navy pb-28 pt-36 sm:pt-44 lg:min-h-[86svh] lg:pb-36">
      {/* The hall */}
      <Image
        src="/home/hall.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,35,51,0.95)_0%,rgba(0,35,51,0.82)_45%,rgba(0,35,51,0.2)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(0,35,51,0.95)_0%,rgba(0,35,51,0.88)_60%,rgba(0,35,51,0.55)_100%)]"
      />

      {/* The figure, standing on the floor of the section */}
      <div
        aria-hidden={figure === "leaves" ? true : undefined}
        className={`rise pointer-events-none absolute -z-10 ${
          isBust
            ? "bottom-0 right-[4vw] hidden h-[78%] lg:block"
            : figure === "leaves"
              ? "-bottom-[6%] -right-[6vw] w-[46vw] max-w-[720px] max-lg:w-[70vw] max-lg:opacity-60"
              : "right-[8vw] top-1/2 hidden w-[26vw] max-w-[420px] -translate-y-1/2 lg:block"
        }`}
        style={{ animationDelay: "200ms" }}
      >
        <Image
          src={f.src}
          alt={figure === "leaves" ? "" : f.alt}
          width={f.w}
          height={f.h}
          priority
          sizes="(min-width: 1024px) 40vw, 70vw"
          className={isBust ? "h-full w-auto" : figure === "leaves" ? "w-full -rotate-12" : "w-full rounded-full"}
        />
      </div>

      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 z-10 h-24 ${edge} [clip-path:polygon(0_100%,100%_0,100%_100%)]`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <h1 className="rise max-w-[15ch] font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] text-cream">
          {title}
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-cream"
          style={{ animationDelay: "160ms" }}
        >
          {intro}
        </p>
        {children}
      </div>
    </section>
  );
}
