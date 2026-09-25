import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Stats } from "@/components/Stats";
import Image from "next/image";
import { CoordinationDiagram, ServiceVisual } from "@/components/Visuals";
import { generalFaqs, lifeMoments, processSteps, services } from "@/lib/content";
import { buildMetadata, faqSchema, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  description: site.description,
  path: "/",
});

const homeFaqs = generalFaqs.slice(0, 5);

export default function HomePage() {
  const initials = site.advisor.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <>
      <JsonLd data={webPageSchema({ path: "/", name: site.name, description: site.description })} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hook */}
      <section className="hero hero-light">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">Independent financial advice</p>
            <h1>
              Mortgage, insurance and investing, <em>planned as one.</em>
            </h1>
            <p className="lede" data-speakable>
              Most families get financial products from three people who never compare notes. I look at the
              whole picture first, then recommend only what fits.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a free consultation <Icon name="arrow" size={18} />
              </Link>
              <Link href="#how-it-works" className="btn btn-ghost">How it works</Link>
            </div>
            <ul className="hero-assure">
              <li><Icon name="check" size={16} /> Free first consultation</li>
              <li><Icon name="check" size={16} /> Fees in writing</li>
              <li><Icon name="check" size={16} /> Video or in person</li>
            </ul>
          </div>
          <div className="hero-visual">
            {/* Screenshot of the DeviceShowcase component (src/components/Visuals.tsx), captured at 2x.
                One optimized image instead of ~200 live elements keeps first paint fast. */}
            <Image
              src="/dashboard-devices.png"
              alt="The Financial Doctor client dashboard on a laptop and phone, showing net worth, monthly savings, a retirement projection and portfolio allocation"
              width={2819}
              height={1900}
              sizes="(min-width: 1024px) 680px, 92vw"
              loading="eager"
              className="devices-shot"
            />
          </div>
        </div>
      </section>

      {/* Proof, early */}
      <Stats />

      {/* Problem */}
      <section className="section">
        <div className="container">
          <div className="section-head split">
            <h2 className="section-title">Three advisors. <em>Zero coordination.</em></h2>
            <p className="lede">
              Your bank arranges the mortgage. An agent sells the insurance. Someone else manages the savings.
              Nobody checks whether the pieces fit, so families end up overinsured in one place, exposed in another,
              and paying more than they need to on both.
            </p>
          </div>
          <div data-reveal>
            <CoordinationDiagram />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section section-alt" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What I advise on</p>
            <h2 id="services-title" className="section-title">Three disciplines, <em>one point of view.</em></h2>
          </div>
          {services.map((s, i) => (
            <article key={s.slug} className="band">
              <div className="band-copy">
                <span className="band-num">0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
                <ul className="ticks">
                  {s.offerings.slice(0, 3).map((o) => (
                    <li key={o.title}><Icon name="check" size={18} /> {o.title}</li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="link-arrow">
                  Explore {s.navLabel.toLowerCase()} <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div data-reveal>
                <ServiceVisual slug={s.slug} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-lg process" id="how-it-works" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head split">
            <div>
              <p className="kicker">How it works</p>
              <h2 id="process-title" className="section-title">Diagnose first. <em>Prescribe second.</em></h2>
            </div>
            <p className="lede">
              A good doctor does not hand you a prescription before the examination. Financial advice should work
              the same way, so every relationship follows the same four steps.
            </p>
          </div>
          <ol className="steps">
            {processSteps.map((s) => (
              <li key={s.n} className="step" data-reveal>
                <span className="step-n">{s.n}</span>
                <h3>{s.name}</h3>
                <p className="step-when">{s.when}</p>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section" aria-labelledby="moments-title">
        <div className="container">
          <div className="section-head split">
            <h2 id="moments-title" className="section-title">Advice for the moments <em>that move your money.</em></h2>
            <p className="lede">
              Most clients arrive at a turning point. The decisions made in the next few months shape the next
              twenty years, which is exactly when a coordinated plan pays for itself.
            </p>
          </div>
          <ul className="index-list">
            {lifeMoments.map((m, i) => (
              <li key={m.title} data-reveal>
                <span className="index-n">0{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust: the advisor */}
      <section className="section section-alt" aria-labelledby="letter-title">
        <div className="container letter">
          <div className="portrait" data-reveal>
            {site.advisor.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.advisor.photo} alt={`Portrait of ${site.advisor.name}`} width={800} height={1000} loading="lazy" decoding="async" />
            ) : (
              <span className="monogram" aria-hidden="true">{initials}</span>
            )}
            <p className="portrait-cap">
              <strong>{site.advisor.name}</strong>
              {site.advisor.jobTitle}
            </p>
          </div>
          <div>
            <p className="kicker" id="letter-title">A note from your advisor</p>
            <blockquote>
              &ldquo;I started this practice because I kept meeting smart people with good products and no plan.&rdquo;
            </blockquote>
            <div className="letter-body">
              <p>
                They had a mortgage from one place, a policy from another and savings scattered across accounts
                they had not looked at in years. Each product made sense on its own. Together, they were costing
                far more than they should.
              </p>
              <p>
                My work is to see the whole picture, explain it plainly and put it in writing. You will always know
                what I recommend, why I recommend it and how I am paid. Most of my clients stay for years, and most
                new ones arrive through their referrals.
              </p>
            </div>
            <p className="signoff">{site.advisor.name}</p>
            <ul className="creds" aria-label="Licences and designations">
              {site.advisor.credentials.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p style={{ marginTop: 28 }}>
              <Link href="/about" className="link-arrow">More about the practice <Icon name="arrow" size={16} /></Link>
            </p>
          </div>
        </div>
      </section>

      {/* Answers */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="section-head">
            <p className="kicker">Straight answers</p>
            <h2 id="faq-title" className="section-title">Questions people ask <em>before the first meeting.</em></h2>
            <Link href="/faq" className="link-arrow">See all questions <Icon name="arrow" size={16} /></Link>
          </div>
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      {/* Close */}
      <CtaBand />
    </>
  );
}
