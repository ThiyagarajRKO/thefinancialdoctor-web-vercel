import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { generalFaqs, services } from "@/lib/content";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";

const description =
  "Straight answers to common questions about financial advice, mortgages, life and disability insurance, investing, retirement planning and how advisors are paid.";

export const metadata = buildMetadata({ title: "Financial Advice FAQ", description, path: "/faq" });

const groups = [
  { id: "general", title: "Working together", faqs: generalFaqs },
  ...services.map((s) => ({ id: s.slug, title: s.navLabel, faqs: s.faqs })),
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({ path: "/faq", name: "Financial Advice FAQ", description, crumbs: [{ name: "FAQ", path: "/faq" }] })}
      />
      <JsonLd data={faqSchema(groups.flatMap((g) => g.faqs))} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
          <h1>Straight answers to <em>fair questions.</em></h1>
          <p className="lede" data-speakable>
            The questions clients ask most, answered directly. If yours is not here, ask it in a free consultation.
          </p>
          <nav aria-label="FAQ topics" className="hero-assure" style={{ marginTop: 32 }}>
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="link-arrow">{g.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={g.id} id={g.id} className={`section${i % 2 ? " section-alt" : ""}`} aria-labelledby={`${g.id}-title`}>
          <div className="container faq-grid">
            <div className="section-head">
              <h2 id={`${g.id}-title`} className="section-title">{g.title}</h2>
            </div>
            <FaqList faqs={g.faqs} />
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
