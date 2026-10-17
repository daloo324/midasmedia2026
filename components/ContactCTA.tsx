import Image from "next/image";
import Link from "next/link";
import { ContactCards } from "@/components/ContactCards";
import { Reveal } from "@/components/Reveal";

// The "Ready to look like you mean it?" block that closes most pages.
export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <Image
        src="/images/king-mark.png"
        alt=""
        width={510}
        height={852}
        className="pointer-events-none absolute -right-16 bottom-0 w-[22rem] opacity-[0.07] sm:w-[30rem]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Your brand partner
          </p>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-cream">
            Ready to look like <span className="text-gold">you mean it?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/70">
            Tell us what you&apos;re working on. A quick WhatsApp is fine. We&apos;ll
            come back with ideas, not a sales pitch.{" "}
            <Link href="/contact" className="text-gold underline underline-offset-4 hover:text-gold-light">
              Or send us a brief.
            </Link>
          </p>
        </Reveal>
        <ContactCards />
      </div>
    </section>
  );
}
