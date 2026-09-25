import { Icon, type IconName } from "./Icon";

/**
 * Hero visual: the client dashboard shown as product screenshots on a MacBook and an iPhone.
 * Built in HTML and CSS (no images), sized with container query units so it scales crisply.
 * Purely illustrative, so it is hidden from assistive technology.
 */
export function DeviceShowcase() {
  const nav: { label: string; icon: IconName }[] = [
    { label: "Overview", icon: "grid" },
    { label: "Mortgage", icon: "home" },
    { label: "Protection", icon: "shield" },
    { label: "Investing", icon: "growth" },
    { label: "Documents", icon: "file" },
  ];
  const kpis = [
    { label: "Net worth", value: "$486.2k", delta: "+8.2%", spark: "0,16 8,14 16,15 24,10 32,11 40,6 48,4" },
    { label: "Monthly saving", value: "$640", delta: "+$640", spark: "0,15 8,15 16,14 24,9 32,8 40,7 48,6" },
    { label: "Cover gap", value: "$0", delta: "Closed", spark: "0,4 8,5 16,6 24,10 32,13 40,15 48,16" },
  ];
  return (
    <div className="devices" role="img" aria-label="The Financial Doctor client dashboard on a laptop and phone, showing a sample household plan">
      <div className="mb" aria-hidden="true">
        <div className="mb-lid">
          <div className="mb-screen">
            <div className="app">
              <aside className="app-side">
                <p className="app-brand"><i />Financial Doctor</p>
                {nav.map((n, i) => (
                  <p key={n.label} className={i === 0 ? "app-nav is-on" : "app-nav"}>
                    <Icon name={n.icon} />{n.label}
                  </p>
                ))}
                <div className="app-advisor">
                  <span className="app-av">YN<i /></span>
                  <div><p>Your advisor</p><p className="app-muted">Online now</p></div>
                </div>
              </aside>

              <div className="app-main">
                <div className="app-bar">
                  <span className="app-search"><Icon name="search" />Search your plan</span>
                  <span className="app-icon-btn"><Icon name="bell" /><i /></span>
                  <span className="app-me">S</span>
                </div>

                <div className="app-top">
                  <div>
                    <p className="app-h">Good morning, Sam</p>
                    <p className="app-muted">Your plan is on track for retirement at 60</p>
                  </div>
                  <span className="app-seg"><b>1Y</b><b className="is-on">5Y</b><b>10Y</b></span>
                </div>

                <div className="app-kpis">
                  {kpis.map((k) => (
                    <div key={k.label} className="app-card app-kpi">
                      <div>
                        <p className="app-muted">{k.label}</p>
                        <p className="app-kv">{k.value}</p>
                        <span className="app-delta">{k.delta}</span>
                      </div>
                      <svg viewBox="0 0 48 20" className="app-spark"><polyline points={k.spark} /></svg>
                    </div>
                  ))}
                </div>

                <div className="app-row">
                  <div className="app-card app-chart">
                    <div className="app-card-head"><p>Net worth projection</p><span className="app-legend"><i />Plan <i className="alt" />Target</span></div>
                    <div className="app-plot">
                      <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="dsFill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="#0b5d56" stopOpacity="0.28" />
                            <stop offset="1" stopColor="#0b5d56" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[25, 50, 75].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} className="pl-grid" />)}
                        <path d="M0 92 C 60 88, 110 74, 160 60 S 250 22, 300 10 L 300 100 L 0 100 Z" fill="url(#dsFill)" />
                        <path d="M0 92 C 60 88, 110 74, 160 60 S 250 22, 300 10" className="pl-line" />
                        <line x1="0" x2="300" y1="30" y2="30" className="pl-target" />
                        <line x1="226" x2="226" y1="0" y2="100" className="pl-cursor" />
                      </svg>
                      <span className="app-dot" />
                      <span className="app-tip"><b>$1.24M</b>Age 60</span>
                    </div>
                    <div className="app-axis"><span>40</span><span>45</span><span>50</span><span>55</span><span>60</span><span>65</span></div>
                  </div>

                  <div className="app-card app-alloc">
                    <div className="app-card-head"><p>Allocation</p></div>
                    <div className="app-donut"><span><b>$486k</b>total</span></div>
                    <ul className="app-keys">
                      <li><i className="k1" />Equities<b>60%</b></li>
                      <li><i className="k2" />Bonds<b>25%</b></li>
                      <li><i className="k3" />Cash<b>15%</b></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-base" />
      </div>

      <div className="ip" aria-hidden="true">
        <div className="ip-screen">
          <div className="ip-status"><span>9:41</span><i className="ip-island" /><span className="ip-bat" /></div>
          <div className="ip-head">
            <div><p className="ip-muted">Good morning</p><p className="ip-h">Sam</p></div>
            <span className="ip-me">S</span>
          </div>
          <div className="ip-balance">
            <p className="ip-bl">Net worth</p>
            <p className="ip-bv">$486,200</p>
            <span className="ip-chip">+8.2% this year</span>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none"><polyline points="0,26 14,24 28,25 42,18 56,19 70,11 84,9 100,3" /></svg>
          </div>
          <div className="ip-actions">
            <span><Icon name="calendar" />Review</span>
            <span><Icon name="file" />Docs</span>
            <span><Icon name="chat" />Advisor</span>
          </div>
          <p className="ip-sec">This month</p>
          <div className="ip-row"><span className="ip-ic"><Icon name="home" /></span><span>Mortgage</span><b>-$640</b></div>
          <div className="ip-row"><span className="ip-ic"><Icon name="shield" /></span><span>Protection</span><b>Covered</b></div>
          <div className="ip-row"><span className="ip-ic"><Icon name="growth" /></span><span>Invested</span><b>+$1,200</b></div>
          <div className="ip-tabs"><Icon name="grid" className="is-on" /><Icon name="growth" /><Icon name="file" /><Icon name="chat" /></div>
        </div>
      </div>
    </div>
  );
}

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
