import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Manrope, Plus_Jakarta_Sans, Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Fonts are self hosted by next/font (no request to Google, no render blocking CSS).
 * Each family has one job. Only the headline font (12KB) is preloaded;
 * the rest load lazily. Fallback metrics are size adjusted, so swapping causes no layout shift.
 */

// Body text, navigation, buttons, FAQ. Not preloaded: text paints instantly in a size matched
// fallback and swaps in, so the headline font gets the bandwidth first.
const body = Inter({ subsets: ["latin"], weight: "variable", display: "swap", variable: "--font-body" });

// Headlines, CTA headline, logo. Single 600 weight keeps the preloaded file small.
const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "600", display: "swap", variable: "--font-display" });

// Section and card titles. Below the fold, so not preloaded.
const heading = Manrope({ subsets: ["latin"], weight: "variable", display: "swap", preload: false, variable: "--font-heading" });

// Key figures: stats and dashboard numbers.
const figures = Sora({ subsets: ["latin"], weight: "500", display: "swap", preload: false, variable: "--font-figures" });

// Small data labels: step timings, chart axes, tags.
const mono = Geist_Mono({ subsets: ["latin"], weight: "500", display: "swap", preload: false, variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.advisor.name, url: `${site.url}/about` }],
  creator: site.advisor.name,
  publisher: site.name,
  category: "finance",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // TODO: add your Search Console / Bing verification codes
  // verification: { google: "", other: { "msvalidate.01": "" } },
};

export const viewport: Viewport = {
  themeColor: "#062925",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale.replace("_", "-")} className={`${body.variable} ${display.variable} ${heading.variable} ${figures.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attributes here before React loads.
          It only ignores attribute differences on this element, not its children. */}
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={siteGraph()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
