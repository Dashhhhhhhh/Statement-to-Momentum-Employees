import './App.css'

const nav = [
  { href: '#product', label: 'Product' },
  { href: '#technology', label: 'Technology' },
  { href: '#safety', label: 'Safety' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="header__inner">
          <a className="logo" href="#top">
            <span className="logo__mark" aria-hidden="true" />
            Momentum
          </a>
          <nav className="nav" aria-label="Primary">
            {nav.map(({ href, label }) => (
              <a key={href} href={href} className="nav__link">
                {label}
              </a>
            ))}
          </nav>
          <a className="btn btn--ghost header__cta" href="#contact">
            Talk to us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow">Semi-autonomous trucking</p>
            <h1 id="hero-title" className="hero__title">
              Freight that moves{' '}
              <span className="hero__title-accent">with certainty</span>
            </h1>
            <p className="hero__lede">
              Momentum pairs advanced driver assistance with remote operations
              and fleet-grade software—so long-haul moves stay predictable,
              compliant, and under human authority at every mile.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                Plan a pilot
              </a>
              <a className="btn btn--outline" href="#technology">
                See the stack
              </a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt className="sr-only">Operational focus</dt>
                <dd>
                  <span className="hero__stat-val">24/7</span>
                  <span className="hero__stat-label">
                    monitoring-ready architecture
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Design principle</dt>
                <dd>
                  <span className="hero__stat-val">Human-first</span>
                  <span className="hero__stat-label">
                    driver authority &amp; escalation
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Integration</dt>
                <dd>
                  <span className="hero__stat-val">Fleet-native</span>
                  <span className="hero__stat-label">
                    TMS, telematics &amp; yard systems
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="road-scene">
              <div className="road-scene__lane" />
              <div className="road-scene__truck">
                <svg viewBox="0 0 120 64" className="road-scene__svg">
                  <defs>
                    <linearGradient
                      id="cab"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="4"
                    y="22"
                    width="112"
                    height="28"
                    rx="4"
                    fill="url(#cab)"
                  />
                  <rect
                    x="58"
                    y="12"
                    width="36"
                    height="22"
                    rx="3"
                    fill="#475569"
                  />
                  <rect x="72" y="16" width="10" height="6" rx="1" fill="#38bdf8" opacity="0.7" />
                  <circle cx="22" cy="52" r="5" fill="#0f172a" />
                  <circle cx="98" cy="52" r="5" fill="#0f172a" />
                  <path
                    d="M10 36h18v8H10z"
                    fill="#38bdf8"
                    opacity="0.25"
                    className="road-scene__sensor"
                  />
                </svg>
              </div>
              <div className="road-scene__horizon" />
            </div>
          </div>
        </section>

        <section id="product" className="section section--muted">
          <div className="section__inner">
            <h2 className="section__title">Built for linehaul reality</h2>
            <p className="section__intro">
              Long-haul is a chain of decisions—lane choice, following distance,
              weather, hours, handoffs. Momentum automates what is safe and
              boringly repeatable, and surfaces what needs a human.
            </p>
            <ul className="cards">
              <li className="card">
                <div className="card__icon card__icon--route" aria-hidden="true" />
                <h3 className="card__title">Supervised autonomy</h3>
                <p className="card__text">
                  Sensor fusion and motion planning tuned for articulated
                  vehicles, highway merges, and construction zones—not just
                  ideal conditions.
                </p>
              </li>
              <li className="card">
                <div className="card__icon card__icon--ops" aria-hidden="true" />
                <h3 className="card__title">Remote assistance</h3>
                <p className="card__text">
                  Operators can resolve edge cases without leaving the command
                  center, with clear handoff protocols back to the cab.
                </p>
              </li>
              <li className="card">
                <div className="card__icon card__icon--fleet" aria-hidden="true" />
                <h3 className="card__title">Fleet operations</h3>
                <p className="card__text">
                  One view of vehicle health, route risk, compliance logs, and
                  incident replay—designed for dispatch and safety teams.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="technology" className="section section--dark">
          <div className="section__inner">
            <h2 className="section__title">Technology you can deploy</h2>
            <p className="section__intro">
              We integrate with existing powertrains and safety systems. Roll
              out by lane, by corridor, or by customer—then measure utilization
              and safety outcomes with the same rigor you use today.
            </p>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-item__label">Perception</span>
                <p className="tech-item__body">
                  Long-range vision, radar alignment, and redundancy paths for
                  critical object detection.
                </p>
              </div>
              <div className="tech-item">
                <span className="tech-item__label">Planning &amp; control</span>
                <p className="tech-item__body">
                  Behavior prediction and conservative envelope planning with
                  explicit uncertainty handling.
                </p>
              </div>
              <div className="tech-item">
                <span className="tech-item__label">Connectivity</span>
                <p className="tech-item__body">
                  Low-latency links for remote guidance with graceful degradation
                  when coverage dips.
                </p>
              </div>
              <div className="tech-item">
                <span className="tech-item__label">Verification</span>
                <p className="tech-item__body">
                  Simulation suites, scenario libraries, and structured on-road
                  validation gates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="safety" className="section section--muted">
          <div className="section__inner section__inner--split">
            <div>
              <h2 className="section__title">Safety is the product</h2>
              <p className="section__intro section__intro--left">
                Semi-autonomy means drivers stay central: alertness monitoring,
                takeover drills, and transparent logging for post-trip review.
                Our roadmap follows evolving regulatory frameworks—we help your
                safety team stay ahead of audits and insurers’ questions.
              </p>
            </div>
            <ul className="checklist">
              <li>Driver-in-the-loop by design</li>
              <li>Geofenced operational design domains</li>
              <li>Encrypted event data for investigations</li>
              <li>Partnerships with OEM and retrofit programs</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="cta-band">
          <div className="cta-band__inner">
            <h2 className="cta-band__title">Move your network forward</h2>
            <p className="cta-band__text">
              Share your lanes and volume targets—we’ll map a deployment path
              that respects your drivers, maintenance shops, and customers.
            </p>
            <a
              className="btn btn--primary btn--large"
              href="mailto:hello@momentumtrucking.example"
            >
              Email fleet partnerships
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__brand">Momentum</span>
          <span className="footer__note">
            © {new Date().getFullYear()} Momentum. Semi-autonomous trucking
            systems.
          </span>
        </div>
      </footer>
    </div>
  )
}
