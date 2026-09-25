/*
 * Source for the home hero screenshot (public/dashboard-devices.png).
 * Not rendered on the live site: the page shows the captured image, which is far cheaper to paint.
 * To update the screenshot: render <DeviceShowcase /> on a temporary page at 1400px wide,
 * capture it with headless Chrome at 2x on a transparent background, and replace the PNG.
 */
import { Icon, type IconName } from "./Icon";
import "./DeviceShowcase.css";

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
