import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/contact";

// The close of every inner page, matching the homepage's last scene: a gold field and the
// crest as a seal you press to start on WhatsApp.
export function ContactCTA({ showBriefLink = true }: { showBriefLink?: boolean }) {
  const start = `${contact.whatsappLink}?text=${encodeURIComponent("Hi Midas, I'd like to start a project.")}`;
  return (
    <section id="contact" className="bg-gold py-24 text-navy sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className="max-w-[12ch] font-display text-[clamp(2.5rem,5.6vw,5rem)] leading-[1.02]">
            Ready to look like you mean it?
          </h2>
          <p className="mt-6 max-w-[34ch] text-lg font-medium leading-relaxed">
            Tell us what you&apos;re working on. A quick WhatsApp is fine. We&apos;ll come back with
            ideas, not a sales pitch.
          </p>
          <div className="mt-8 grid gap-2 text-lg font-bold">
            <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-fit underline-offset-4 hover:underline">
              Call / WhatsApp {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="w-fit underline-offset-4 hover:underline">
              {contact.email}
            </a>
            {showBriefLink && (
              <Link href="/contact" className="w-fit underline underline-offset-4">
                Or send us a brief
              </Link>
            )}
          </div>
        </Reveal>
        <Reveal delay={120} className="justify-self-start lg:justify-self-center">
          <a
            href={start}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid justify-items-center gap-5 max-lg:grid-flow-col max-lg:items-center"
          >
            <span className="grid aspect-square w-28 place-items-center rounded-full bg-navy transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-[1.03] group-active:scale-95 lg:w-[clamp(12rem,22vw,18rem)]">
              <Image src="/images/crest-badge.webp" alt="" width={600} height={610} className="w-[78%] rounded-full" />
            </span>
            <span className="text-base font-bold uppercase tracking-[0.04em]">Start on WhatsApp →</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
