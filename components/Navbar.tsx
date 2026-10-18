"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact } from "@/lib/contact";
import { navLinks } from "@/lib/content";

// Pages that show their own logo header instead of the menu (e.g. the Brand Health Check)
const hiddenOn = ["/brand-health-check"];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (hiddenOn.includes(pathname)) return null;

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Midas Media Solutions home">
          <Image
            src="/images/king-mark.png"
            alt=""
            width={510}
            height={852}
            className="h-12 w-auto"
            priority
          />
          <span className="flex flex-col">
            <Image
              src="/images/wordmark-white.png"
              alt="Midas"
              width={724}
              height={178}
              className="h-6 w-auto"
              priority
            />
            <span className="mt-1 text-[0.6rem] font-medium tracking-[0.18em] text-cream/80">
              MEDIA SOLUTIONS
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 pb-1 transition-colors hover:text-gold ${
                    active ? "border-gold text-gold" : "border-transparent text-cream/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-gold shadow-lg transition-colors hover:bg-cream hover:text-navy sm:inline-block"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-navy shadow-lg md:hidden"
          >
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Phone menu */}
      <div
        className={`fixed inset-0 bg-navy px-5 pt-28 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {[{ label: "Home", href: "/" }, ...navLinks].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-gold/20 py-4 font-display text-3xl ${
                  pathname === link.href ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy"
        >
          WhatsApp us
        </a>
      </div>
    </header>
  );
}
