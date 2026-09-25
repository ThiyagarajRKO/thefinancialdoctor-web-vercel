import Link from "next/link";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm header-cta">
          Book a consultation
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
