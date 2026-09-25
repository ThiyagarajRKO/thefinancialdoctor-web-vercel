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

      {/* The booking card sits in the hero so the calendar is in the first screen. */}
      <section className="page-hero contact-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
          <div className="contact-hero-grid">
            <div>
              <h1>Pick a time. <em>Bring your questions.</em></h1>
              <p className="lede" data-speakable>
                The first consultation is free, takes 30 minutes and carries no obligation. Choose a slot, by video
                or in person, and you will get a confirmation with everything you need.
              </p>

              <ol className="expect" aria-label="What happens next">
                <li><span>01</span> Choose a time and share a line about what is on your mind.</li>
                <li><span>02</span> We talk for 30 minutes about your goals and current setup.</li>
                <li><span>03</span> You leave with clear next steps, whether or not we work together.</li>
              </ol>

              <ul className="contact-list" aria-label="Other ways to reach us">
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
                  <div><p>Office</p><span>{c.street}, {c.city}, {c.region} {c.postalCode}</span></div>
                </li>
                <li>
                  <span className="ci"><Icon name="clock" size={18} /></span>
                  <div><p>Hours</p><span>{c.hours}</span></div>
                </li>
              </ul>
            </div>

            <Calendly />
          </div>
        </div>
      </section>
    </>
  );
}
