import Link from "next/link";
import { site } from "@/lib/site";

/** Mark: a plus sign (care) in a rounded square, with a corner block (the plan). Colors come from CSS so it adapts to dark and light surfaces. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="logo-mark">
      <rect width="32" height="32" rx="8" className="lm-bg" />
      <rect x="13" y="7" width="6" height="18" rx="1.5" className="lm-fg" />
      <rect x="7" y="13" width="18" height="6" rx="1.5" className="lm-fg" />
      <rect x="21" y="21" width="4" height="4" rx="1" className="lm-dot" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name}, home`}>
      <LogoMark />
      <span className="logo-word">
        The Financial <em>Doctor</em>
      </span>
    </Link>
  );
}
