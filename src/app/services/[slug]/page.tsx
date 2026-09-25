import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ServiceVisual } from "@/components/Visuals";
import { getService, services } from "@/lib/content";
import { buildMetadata, faqSchema, serviceSchema, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={webPageSchema({ path, name: s.metaTitle, description: s.metaDescription, crumbs })} />
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="page-hero-grid">
            <div>
              <p className="kicker">{s.name}</p>
              <h1>{s.headline}</h1>
              <div className="in-short" data-speakable>
                <h2>In short</h2>
                <p>{s.inShort}</p>
              </div>
            </div>
            <div className="hero-visual">
              <ServiceVisual slug={s.slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head split" style={{ marginBottom: 0, alignItems: "start" }}>
          <h2 className="section-title">{s.problem.title}</h2>
          <div>
            <p className="lede">{s.problem.body}</p>
            <div className="panel-stat">
              <strong>{s.panelStat.value}</strong>
              <span>{s.panelStat.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="offer-title">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What is covered</p>
            <h2 id="offer-title" className="section-title">How I can help</h2>
          </div>
          <ul className="offer-grid">
            {s.offerings.map((o) => (
              <li key={o.title} className="offer" data-reveal>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div>
            <p className="kicker">The approach</p>
            <h2 id="approach-title" className="section-title">What working together looks like</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              Every recommendation arrives in writing, with the numbers behind it and a clear statement of how
              I am paid. You decide at your own pace.
            </p>
            <p style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn btn-primary">
                Book a free consultation <Icon name="arrow" size={18} />
              </Link>
            </p>
          </div>
          <ol className="approach">
            {s.approach.map((a) => <li key={a}>{a}</li>)}
          </ol>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="svc-faq-title">
        <div className="container faq-grid">
          <div className="section-head">
            <p className="kicker">Common questions</p>
            <h2 id="svc-faq-title" className="section-title">{s.navLabel}, <em>answered.</em></h2>
          </div>
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title" className="section-title" style={{ marginBottom: 40 }}>Plans work best <em>together.</em></h2>
          <div className="related">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`}>
                <div>
                  <strong>{o.name}</strong>
                  <span>{o.summary}</span>
                </div>
                <Icon name="arrow" size={22} />
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: "0.875rem", color: "var(--muted)" }}>
            Last reviewed {new Date(site.lastReviewed).toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
            Examples are illustrative and not a guarantee of future results.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
