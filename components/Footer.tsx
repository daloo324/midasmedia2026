import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/contact";
import { navLinks } from "@/lib/content";

// The footer: the WhatsApp number is the headline, so getting in touch is the last big thing on every page.
export function Footer() {
  return (
    <footer className="flex min-h-[60svh] flex-col bg-navy-deep text-cream">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-10 sm:px-8">
        {/* Top row: small wordmark, notes, back to top */}
        <div className="flex flex-col gap-6 text-[15px] leading-relaxed lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            <Link href="/" aria-label="Midas Media Solutions home" className="shrink-0">
              <Image src="/images/wordmark-gold.png" alt="Midas" width={724} height={178} className="h-7 w-auto" />
            </Link>
            <p className="max-w-[30ch]">Midas Media Solutions, a design studio in Gaborone, Botswana.</p>
            <p>
              <a href={`mailto:${contact.email}`} className="underline decoration-gold underline-offset-4 hover:text-gold">
                {contact.email}
              </a>
            </p>
          </div>
          <a href="#top" className="font-semibold hover:text-gold">
            Back to top ↑
          </a>
        </div>

        {/* The contact line */}
        <div className="mt-auto pt-24">
          <h2 className="mb-4 text-lg">Message us on WhatsApp</h2>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block whitespace-nowrap text-[clamp(2.25rem,10.4vw,8.25rem)] font-bold leading-none tracking-[-0.03em] text-gold transition-colors hover:text-cream focus:outline-none focus-visible:text-cream lg:text-[8.6vw]"
          >
            {contact.phone}
          </a>
        </div>

        {/* Meta row */}
        <div className="mt-12 flex flex-col gap-3 pb-8 text-[15px] lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-2 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>Consistent content, stronger brands.</p>
          <p>Gaborone, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
