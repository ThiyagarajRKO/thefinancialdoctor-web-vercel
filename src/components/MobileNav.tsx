"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav } from "@/lib/site";

export function MobileNav() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details className="mobile-nav" ref={ref}>
      <summary aria-label="Menu">
        <span className="burger" aria-hidden="true" />
      </summary>
      <nav className="mobile-panel" aria-label="Mobile">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary">
          Book a free consultation
        </Link>
      </nav>
    </details>
  );
}
