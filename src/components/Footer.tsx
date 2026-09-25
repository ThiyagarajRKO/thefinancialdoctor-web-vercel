import Link from "next/link";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{site.tagline} Independent advice for families and business owners.</p>
          </div>
          <nav aria-label="Services" className="footer-col">
            <h2>Services</h2>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </nav>
          <nav aria-label="Practice" className="footer-col">
            <h2>Practice</h2>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Book a consultation</Link>
            <Link href="/disclosures">Disclosures</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <address className="footer-col">
            <h2>Contact</h2>
            <a href={`tel:${c.phoneHref}`}><Icon name="phone" size={16} /> {c.phone}</a>
            <a href={`mailto:${c.email}`}><Icon name="mail" size={16} /> {c.email}</a>
            <span><Icon name="pin" size={16} /> {c.street}, {c.city}, {c.region} {c.postalCode}</span>
          </address>
        </div>
        <div className="footer-legal">
          <p>{site.regulatoryNote}</p>
          <p>
            Information on this website is general in nature and is not personal financial, tax or legal advice.
            Please speak with a licensed professional about your circumstances.
          </p>
          <p>&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
