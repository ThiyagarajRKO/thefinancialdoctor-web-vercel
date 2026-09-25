import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Stats } from "@/components/Stats";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const description = `Meet ${site.advisor.name}, founder of ${site.name}. Independent advice on mortgages, insurance and investing, built on written plans, plain language and full fee transparency.`;

export const metadata = buildMetadata({ title: `About ${site.advisor.name}`, description, path: "/about" });

const principles = [
  { title: "Diagnose before prescribing", body: "No recommendation is made until I understand your income, obligations, cover and goals. Products come last, not first." },
  { title: "One plan, not three products", body: "Borrowing, protection and investing are decided together, so each choice strengthens the others instead of working against them." },
  { title: "Everything in writing", body: "Recommendations, the reasoning behind them and how I am paid are documented before you commit. No surprises, ever." },
  { title: "Advice I would give my own family", body: "If the best option is to keep what you already have, or to do nothing for now, that is exactly what I will tell you." },
];

export default function AboutPage() {
  const initials = site.advisor.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/about",
          name: `About ${site.advisor.name}`,
          description,
          type: "AboutPage",
          crumbs: [{ name: "About", path: "/about" }],
        })}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
          <h1>Good advice starts with <em>the whole picture.</em></h1>
          <p className="lede" data-speakable>
            {site.name} is an independent practice founded by {site.advisor.name}. We help families and business
            owners make mortgage, insurance and investment decisions as one coordinated plan, explained plainly and
            documented in writing.
          </p>
        </div>
      </section>

      <section className="section">
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
          <div className="prose">
            <h2 className="section-title">Why this practice exists</h2>
            {/* TODO: personalise this story with your own background, years and turning points. */}
            <p>
              Early in my career I saw the same pattern again and again. Capable, well paid people with a mortgage
              from one institution, insurance from another and investments from a third. Each product was reasonable
              on its own. Nobody had checked whether they worked together.
            </p>
            <p>
              The result was predictable: too much cover in one place, a dangerous gap in another, and borrowing
              costs that quietly limited how much could be saved. None of it was anyone&rsquo;s fault. It was simply
              nobody&rsquo;s job to look at the whole picture.
            </p>
            <p>
              {site.name} was founded in {site.foundingYear} to make that somebody&rsquo;s job. Today the practice
              advises households and business owners across {site.contact.areaServed.join(" and ")}, many of whom have
              been clients for over a decade.
            </p>
            <h3>Licences and designations</h3>
            <ul>
              {site.advisor.credentials.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <div className="section-head">
            <p className="kicker">How I work</p>
            <h2 id="principles-title" className="section-title">Four principles, <em>no exceptions.</em></h2>
          </div>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.title} data-reveal>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="The best way to judge an advisor is to meet one." />
    </>
  );
}
