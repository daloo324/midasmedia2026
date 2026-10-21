import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${greconian.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
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
