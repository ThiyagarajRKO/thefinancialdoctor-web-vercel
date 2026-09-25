import { stats, statsAsOf } from "@/lib/site";

export function Stats() {
  return (
    <section className="stats" aria-label="The practice at a glance">
      <div className="container">
        <dl className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat" data-reveal>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="stats-note">Figures as of {statsAsOf}.</p>
      </div>
    </section>
  );
}
