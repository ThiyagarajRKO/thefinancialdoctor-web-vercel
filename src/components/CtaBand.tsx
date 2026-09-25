import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

export function CtaBand({
  title = "Thirty minutes. One clear picture of where you stand.",
  body = "Book a free, no obligation consultation. We will look at your mortgage, protection and savings together, and you will leave knowing the one or two moves that matter most.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-on-dark">
            Book a free consultation <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:${site.contact.phoneHref}`} className="cta-phone">
            <Icon name="phone" size={16} /> Or call {site.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
