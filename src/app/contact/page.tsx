import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Calendly } from "@/components/Calendly";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const description = `Book a free 30 minute financial consultation with ${site.advisor.name}. Choose a time online, call ${site.contact.phone} or email ${site.contact.email}.`;

export const metadata = buildMetadata({ title: "Book a Free Consultation", description, path: "/contact" });

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <JsonLd
        data={webPageSchema({ path: "/contact", name: "Book a Free Consultation", description, type: "ContactPage", crumbs: [{ name: "Contact", path: "/contact" }] })}
      />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
          <h1>Pick a time. <em>Bring your questions.</em></h1>
          <p className="lede" data-speakable>
            The first consultation is free, takes 30 minutes and carries no obligation. Choose a slot below, by
            video or in person, and you will get a short confirmation with everything you need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: 32 }}>Prefer to talk first?</h2>
            <ul className="contact-list">
              <li>
                <span className="ci"><Icon name="phone" size={18} /></span>
                <div><p>Phone</p><a href={`tel:${c.phoneHref}`}>{c.phone}</a></div>
              </li>
              <li>
                <span className="ci"><Icon name="mail" size={18} /></span>
                <div><p>Email</p><a href={`mailto:${c.email}`}>{c.email}</a></div>
              </li>
              <li>
                <span className="ci"><Icon name="pin" size={18} /></span>
                <div><p>Office</p><span>{c.street}<br />{c.city}, {c.region} {c.postalCode}</span></div>
              </li>
              <li>
                <span className="ci"><Icon name="clock" size={18} /></span>
                <div><p>Hours</p><span>{c.hours}</span></div>
              </li>
            </ul>
            <ol className="expect" aria-label="What happens next">
              <li><span>01</span> You choose a time and share a line about what is on your mind.</li>
              <li><span>02</span> We talk for 30 minutes about your goals and current setup.</li>
              <li><span>03</span> You leave with clear next steps, whether or not we work together.</li>
            </ol>
          </div>
          <Calendly />
        </div>
      </section>
    </>
  );
}
