import { GreekKey } from "@/components/GreekKey";

// The navy banner at the top of every inner page (About, Services, Work, Contact).
export function PageHeader({
  eyebrow,
  title,
  intro,
  edge = "bg-gold",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  /** Colour of the slanted edge at the bottom; match it to the next section */
  edge?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-20 pt-40 sm:pb-24 sm:pt-48">
      <GreekKey className="absolute -right-24 top-0 -z-10 h-full w-[420px] text-navy-soft opacity-60" />
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 -z-10 h-24 ${edge} [clip-path:polygon(0_100%,100%_0,100%_100%)]`}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="rise mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-10 bg-gold" />
          {eyebrow}
        </p>
        <h1
          className="rise max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.04] text-cream"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-cream/75"
          style={{ animationDelay: "240ms" }}
        >
          {intro}
        </p>
        {children}
      </div>
    </section>
  );
}
