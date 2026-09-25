import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const description = `How ${site.name} collects, uses and protects your personal information.`;

export const metadata = buildMetadata({ title: "Privacy Policy", description, path: "/privacy" });

// TODO: Have this reviewed for the privacy law that applies in your jurisdiction.
export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/privacy", name: "Privacy Policy", description, crumbs: [{ name: "Privacy", path: "/privacy" }] })} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
          <h1>Privacy policy</h1>
          <p className="lede">Your financial information is sensitive. Here is exactly how it is handled.</p>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p className="legal-note">Template text. Last updated {site.lastReviewed}.</p>
          <h2>What we collect</h2>
          <p>
            Information you choose to share when booking or working with us: name, contact details and the financial
            information needed to give advice. This website does not use advertising trackers.
          </p>
          <h2>Scheduling</h2>
          <p>
            Consultations are booked through Calendly. Details you enter there are processed under Calendly&rsquo;s
            privacy policy and shared with us only to arrange your meeting.
          </p>
          <h2>How we use it</h2>
          <ul>
            <li>To provide advice and arrange the products you ask us to arrange.</li>
            <li>To meet legal, regulatory and record keeping obligations.</li>
            <li>To contact you about your plan and scheduled reviews.</li>
          </ul>
          <h2>Sharing</h2>
          <p>
            We share information with lenders, insurers and investment providers only with your consent and only as
            needed to carry out your instructions. We never sell personal information.
          </p>
          <h2>Your rights</h2>
          <p>You may ask to access, correct or delete your information at any time by emailing {site.contact.email}.</p>
        </div>
      </section>
    </>
  );
}
