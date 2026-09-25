import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const description = `Licensing, compensation and conflict of interest disclosures for ${site.name}.`;

export const metadata = buildMetadata({ title: "Disclosures", description, path: "/disclosures" });

// TODO: Replace every bracketed item with wording approved by your compliance officer or regulator.
export default function DisclosuresPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/disclosures", name: "Disclosures", description, crumbs: [{ name: "Disclosures", path: "/disclosures" }] })} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Disclosures", path: "/disclosures" }]} />
          <h1>Disclosures</h1>
          <p className="lede">How the practice is licensed, how it is paid and how conflicts of interest are managed.</p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p className="legal-note">Template text. Final wording must be reviewed against the rules of your licensing bodies.</p>
          <h2>Licensing</h2>
          <p>Mortgage services: [licensing body, licence number, brokerage name].</p>
          <p>Insurance services: [licensing body, licence number, agency name].</p>
          <p>Investment services: [dealer or registered firm name, registration number, regulator].</p>
          <h2>How we are paid</h2>
          <ul>
            <li>Mortgages: usually a finder&rsquo;s fee paid by the lender on funding. Any fee payable by the client is disclosed in writing before work begins.</li>
            <li>Insurance: commission paid by the insurer, which may include ongoing service commission.</li>
            <li>Investments: [planning fee, asset based fee or embedded compensation], always disclosed in dollars before you invest.</li>
          </ul>
          <h2>Conflicts of interest</h2>
          <p>
            Where compensation differs between providers or products, we disclose this and document why a
            recommendation is in your best interest. We do not accept incentives that depend on selling a
            particular product.
          </p>
          <h2>Figures and examples</h2>
          <p>
            Statistics shown on this site are as stated and dated where they appear. Charts and example plans are
            illustrative, use hypothetical numbers and do not guarantee future results.
          </p>
          <h2>Complaints</h2>
          <p>Contact us at {site.contact.email}. If unresolved, you may contact [ombudsman or regulator details].</p>
        </div>
      </section>
    </>
  );
}
