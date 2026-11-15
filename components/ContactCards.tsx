import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/contact";

// The three ways to reach us (Contact page): solid colour fields, no outlines.
export function ContactCards() {
  const cards = [
    {
      href: contact.whatsappLink,
      external: true,
      label: "Call / WhatsApp",
      big: contact.phone,
      note: "Message us now",
      cls: "bg-gold text-navy hover:bg-gold-light",
      bigCls: "text-3xl font-bold",
    },
    {
      href: `mailto:${contact.email}`,
      external: false,
      label: "Email",
      big: contact.email,
      note: "Send a brief, a question or a rough idea",
      cls: "bg-navy-soft text-cream hover:bg-[#123d52]",
      bigCls: "text-xl font-bold min-[400px]:text-2xl lg:text-xl xl:text-2xl",
    },
    {
      href: contact.phoneLink,
      external: false,
      label: "Prefer to talk?",
      big: "Give us a ring",
      note: "Speak to the team directly",
      cls: "bg-navy-deep text-cream hover:bg-[#03223a]",
      bigCls: "font-display text-3xl",
    },
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {cards.map((c, i) => (
        <Reveal key={c.label} delay={i * 100}>
          <a
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group flex h-full min-h-[15rem] flex-col justify-between rounded-[1.5rem] p-8 transition-[transform,background-color] duration-300 hover:-translate-y-1 ${c.cls}`}
          >
            <span className="text-base font-semibold">{c.label}</span>
            <span className={`mt-10 ${c.bigCls}`}>{c.big}</span>
            <span className="mt-2 text-[15px] font-semibold">
              {c.note} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
