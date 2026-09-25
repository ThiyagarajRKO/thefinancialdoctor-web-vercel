import type { Metadata, Viewport } from "next";
import { Google_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Google Sans, self hosted by next/font: one variable latin file, preloaded, zero layout shift.
const sans = Google_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-sans",
});

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
    <html lang={site.locale.replace("_", "-")} className={sans.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={siteGraph()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
