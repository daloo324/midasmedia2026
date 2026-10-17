import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/contact";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-4" aria-label="Midas Media Solutions home">
            <Image src="/images/king-mark.png" alt="" width={510} height={852} className="h-14 w-auto" />
            <div>
              <Image src="/images/wordmark-gold.png" alt="Midas" width={724} height={178} className="h-6 w-auto" />
              <p className="mt-1 text-[0.6rem] font-medium tracking-[0.18em] text-cream/70">
                MEDIA SOLUTIONS
              </p>
            </div>
          </Link>
          <p className="mt-6 text-xs font-semibold leading-snug tracking-wide">
            <span className="text-gold">CONSISTENT</span> CONTENT
            <br />
            STRONGER <span className="text-gold">BRANDS</span>
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Pages</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link href="/" className="hover:text-gold">Home</Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Get in touch</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a>
            </li>
            <li>
              <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp {contact.phone}
              </a>
            </li>
            <li>{contact.website}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} Midas Media Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
