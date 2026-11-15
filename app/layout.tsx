import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteChrome } from "@/components/SiteChrome";

// Greconian: the Greek-style brand font, used for all headings
const greconian = localFont({
  src: "./fonts/Greconian.ttf",
  variable: "--font-display",
  display: "swap",
});

// Montserrat: body text, buttons and numbers. Stored in the project so the site
// doesn't depend on Google Fonts.
const montserrat = localFont({
  src: "./fonts/Montserrat-Variable.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midasmedia.co.bw"),
  title: {
    default: "Midas Media Solutions | Consistent Content, Stronger Brands",
    template: "%s | Midas Media Solutions",
  },
  description:
    "Midas Media Solutions is a digital design studio in Botswana creating social content, brand identities and websites that keep your business looking sharp.",
  openGraph: {
    title: "Midas Media Solutions",
    description: "Consistent content. Stronger brands.",
    images: ["/images/statue-poster.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greconian.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as script-ready, so sections only hide for their entrance when they can come back */}
        <Script id="js-ready" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
      </head>
      <body id="top" className="font-sans antialiased">
        <SiteChrome>
          <Navbar />
        </SiteChrome>
        <main className="overflow-x-clip">{children}</main>
        <SiteChrome>
          <Footer />
        </SiteChrome>
        <AgentationProvider />
      </body>
    </html>
  );
}
