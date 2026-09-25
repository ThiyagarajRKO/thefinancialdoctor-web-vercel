import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="kicker">404</p>
        <h1>This page has moved <em>or never existed.</em></h1>
        <p className="lede">The rest of the site is exactly where you left it.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">Back to home <Icon name="arrow" size={18} /></Link>
          <Link href="/contact" className="btn btn-ghost">Book a consultation</Link>
        </div>
      </div>
    </section>
  );
}
