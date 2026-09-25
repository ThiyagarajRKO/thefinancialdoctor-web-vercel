import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Icon, type IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { CoordinationDiagram } from "@/components/Visuals";
import { services } from "@/lib/content";
import { buildMetadata, webPageSchema } from "@/lib/seo";

const description =
  "Mortgage advice, insurance planning and investment planning from one independent advisor. See how each service works and how they fit together into one coordinated financial plan.";

export const metadata = buildMetadata({ title: "Financial Advice Services", description, path: "/services" });

const icons: Record<string, IconName> = { mortgages: "home", insurance: "shield", investing: "growth" };

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/services",
          name: "Financial Advice Services",
          description,
          type: "CollectionPage",
          crumbs: [{ name: "Services", path: "/services" }],
        })}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
          <h1>Borrow well, protect what matters, <em>grow with intent.</em></h1>
          <p className="lede" data-speakable>
            Three services that most people buy separately. Planned together, each one makes the others cheaper,
            safer and easier to live with.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container svc-cards">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card" data-reveal>
              <span className="svc-icon"><Icon name={icons[s.slug]} size={22} /></span>
              <h2>{s.name}</h2>
              <p>{s.summary}</p>
              <span className="link-arrow">Learn more <Icon name="arrow" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head split">
            <h2 className="section-title">Why one advisor <em>for all three?</em></h2>
            <div className="prose">
              <p>
                Your mortgage size sets how much life cover you need. Your insurance premiums set how much you can
                invest. Your investment plan sets how fast you can clear the mortgage. Change one and the others
                should move with it.
              </p>
              <p>
                When a single advisor holds the whole picture, those trade offs are made on purpose, in writing,
                rather than by accident across three separate sales conversations.
              </p>
            </div>
          </div>
          <CoordinationDiagram />
        </div>
      </section>

      <CtaBand title="Not sure where to start?" body="Most people are not. Book a free consultation and we will work out which of the three deserves your attention first." />
    </>
  );
}
