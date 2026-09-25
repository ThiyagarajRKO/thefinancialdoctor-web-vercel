import { Icon } from "./Icon";

/** Problem section: the usual fragmented setup versus one coordinated plan. */
export function CoordinationDiagram() {
  const typical = [
    { who: "Bank", what: "Mortgage sized to what the bank will lend, not what fits your plan" },
    { who: "Insurance agent", what: "Cover sold on its own, often duplicating what work already provides" },
    { who: "Investment firm", what: "Portfolio chosen without seeing your debts or your cover" },
  ];
  const coordinated = [
    { who: "Mortgage", what: "Structured around cash flow, protection and savings goals" },
    { who: "Insurance", what: "Sized to your real debts and dependants, with no overlap" },
    { who: "Investing", what: "Funded from what the plan frees up, in the right accounts" },
  ];
  return (
    <div className="coord">
      <div className="coord-panel">
        <p className="coord-label">The usual way</p>
        <p className="coord-title">Three providers, no shared view</p>
        <ul>
          {typical.map((t) => (
            <li key={t.who}>
              <span className="coord-mark coord-bad"><Icon name="close" size={16} /></span>
              <div><strong>{t.who}</strong><span>{t.what}</span></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="coord-panel coord-good">
        <p className="coord-label">The coordinated way</p>
        <p className="coord-title">One advisor, one written plan</p>
        <ul>
          {coordinated.map((t) => (
            <li key={t.who}>
              <span className="coord-mark"><Icon name="check" size={16} /></span>
              <div><strong>{t.who}</strong><span>{t.what}</span></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Mortgages: the lowest rate is not always the lowest cost. Illustrative numbers. */
export function MortgageVisual() {
  const rows = [
    { name: "Lender A", rate: "4.79%", cost: 63900, tag: "Lowest rate" },
    { name: "Lender B", rate: "4.94%", cost: 61200, tag: "Lowest total cost", best: true },
    { name: "Lender C", rate: "5.09%", cost: 64800 },
    { name: "Lender D", rate: "5.24%", cost: 66500 },
  ];
  const max = 66500;
  return (
    <figure className="viz-card" aria-label="Illustrative lender comparison showing total cost over a five year term">
      <div className="viz-head">
        <p>Five year total cost</p>
        <span>Illustrative</span>
      </div>
      <ul className="bars">
        {rows.map((r) => (
          <li key={r.name} className={r.best ? "is-best" : undefined}>
            <div className="bar-meta">
              <span>
                {r.name} <em>{r.rate}</em>
                {r.tag && <span className="bar-tag">{r.tag}</span>}
              </span>
              <span className="bar-val">${r.cost.toLocaleString("en-US")}</span>
            </div>
            <div className="bar-track">
              <span className="bar-fill" style={{ width: `${(r.cost / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <figcaption>A lower rate with a heavy prepayment penalty and rigid terms can cost more than a slightly higher, flexible one.</figcaption>
    </figure>
  );
}

/** Insurance: need versus existing cover, with the gap made visible. Illustrative numbers. */
export function InsuranceVisual() {
  return (
    <figure className="viz-card" aria-label="Illustrative coverage gap analysis">
      <div className="viz-head">
        <p>Coverage gap analysis</p>
        <span>Illustrative</span>
      </div>
      <div className="gap-total">
        <span>Family needs</span>
        <strong>$1,450,000</strong>
      </div>
      <div className="gap-bar" role="presentation">
        <span className="gap-seg gap-work" style={{ width: "10%" }} />
        <span className="gap-seg gap-own" style={{ width: "17%" }} />
        <span className="gap-seg gap-gap" style={{ width: "73%" }} />
      </div>
      <dl className="gap-legend">
        <div><dt><i className="sw gap-work" />Workplace cover</dt><dd>$150,000</dd></div>
        <div><dt><i className="sw gap-own" />Existing policy</dt><dd>$250,000</dd></div>
        <div><dt><i className="sw gap-gap" />Uncovered gap</dt><dd>$1,050,000</dd></div>
      </dl>
      <figcaption>Need is built from debts, years of income to replace and future goals such as education.</figcaption>
    </figure>
  );
}

/** Investing: projection range against a retirement target. Illustrative. */
export function InvestingVisual() {
  return (
    <figure className="viz-card" aria-label="Illustrative retirement projection">
      <div className="viz-head">
        <p>Retirement projection</p>
        <span>Illustrative</span>
      </div>
      <svg viewBox="0 0 320 180" className="proj" role="img" aria-labelledby="proj-t">
        <title id="proj-t">Projected savings from age 40 to 65 with a range of outcomes, reaching the retirement target around age 60</title>
        {[40, 80, 120].map((y) => <line key={y} x1="20" y1={y} x2="310" y2={y} className="grid" />)}
        <line x1="20" y1="160" x2="310" y2="160" className="axis" />
        <path d="M20 150 C 110 138, 200 90, 310 18 L 310 78 C 200 122, 110 146, 20 150 Z" className="range" />
        <path d="M20 150 C 110 142, 200 108, 310 46" className="expected" />
        <line x1="20" y1="64" x2="310" y2="64" className="target" />
        <text x="24" y="58" className="t-label">Target</text>
        <circle cx="258" cy="64" r="5" className="hit" />
        <text x="258" y="176" className="t-axis">60</text>
        <text x="20" y="176" className="t-axis t-start">Age 40</text>
        <text x="310" y="176" className="t-axis t-end">65</text>
      </svg>
      <figcaption>The shaded range shows weaker and stronger markets. The plan is built to reach the target in the middle case.</figcaption>
    </figure>
  );
}

export function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "mortgages") return <MortgageVisual />;
  if (slug === "insurance") return <InsuranceVisual />;
  return <InvestingVisual />;
}
