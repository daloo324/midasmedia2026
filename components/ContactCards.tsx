import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/contact";

// The three contact cards: WhatsApp, email and phone.
export function ContactCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Reveal>
        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between rounded-[1.5rem] bg-gold p-7 text-navy transition-transform hover:-translate-y-1"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em]">Call / WhatsApp</span>
          <span className="mt-10 text-3xl font-bold">{contact.phone}</span>
          <span className="mt-2 text-sm font-semibold">
            Message us now{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </a>
      </Reveal>
      <Reveal delay={100}>
        <a
          href={`mailto:${contact.email}`}
          className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-gold/40 p-7 text-cream transition-colors hover:border-gold hover:bg-navy-soft"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Email</span>
          <span className="mt-10 text-xl font-bold min-[400px]:text-2xl lg:text-xl xl:text-2xl">
            {contact.email}
          </span>
          <span className="mt-2 text-sm font-semibold text-cream/70">
            Send a brief, a question or a rough idea
          </span>
        </a>
      </Reveal>
      <Reveal delay={200}>
        <a
          href={contact.phoneLink}
          className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-gold/40 p-7 text-cream transition-colors hover:border-gold hover:bg-navy-soft"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Prefer to talk?</span>
          <span className="mt-10 font-display text-3xl">Give us a ring</span>
          <span className="mt-2 text-sm font-semibold text-cream/70">Speak to the team directly</span>
        </a>
      </Reveal>
    </div>
  );
}
