import type { Faq } from "@/lib/content";
import { Icon } from "./Icon";

/** Native details/summary: zero JavaScript, and answers stay in the HTML for search and AI crawlers. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details key={f.q} className="faq">
          <summary>
            <h3>{f.q}</h3>
            <Icon name="plus" className="faq-icon" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
