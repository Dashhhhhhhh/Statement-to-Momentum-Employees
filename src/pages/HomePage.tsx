import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main>
      <section className="hero-home" aria-labelledby="home-hero-title">
        <div className="hero-home__bg" aria-hidden="true" />
        <div className="hero-home__inner">
          <p className="hero-home__eyebrow anim-fade-up">Logistics & delivery</p>
          <h1 id="home-hero-title" className="hero-home__title anim-fade-up anim-delay-1">
            Delivery engineered for{' '}
            <span className="hero-home__accent">trust</span>, built for scale
          </h1>
          <p className="hero-home__lede anim-fade-up anim-delay-2">
            Momentum moves what matters—on time, safely, and transparently. We
            combine disciplined operations, forward-looking technology, and
            partnerships that put your customers first, so every shipment reflects
            the reliability your brand promises.
          </p>
          <div className="hero-home__actions anim-fade-up anim-delay-3">
            <Link to="/services" className="btn btn--primary btn--lg">
              Explore services
            </Link>
            <Link to="/contact" className="btn btn--outline-light btn--lg">
              Talk with our team
            </Link>
          </div>
          <dl className="hero-home__metrics anim-fade-up anim-delay-4">
            <div className="metric">
              <dt className="metric__label">Reliability</dt>
              <dd className="metric__value">
                On-time performance backed by control-tower visibility
              </dd>
            </div>
            <div className="metric">
              <dt className="metric__label">Safety</dt>
              <dd className="metric__value">
                Certified processes, trained teams, continuous improvement
              </dd>
            </div>
            <div className="metric">
              <dt className="metric__label">Sustainability</dt>
              <dd className="metric__value">
                Route optimization and lower-emission options where feasible
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--light">
        <div className="section__inner">
          <div className="section__header">
            <h2 className="section__title">Why enterprises choose Momentum</h2>
            <p className="section__lead">
              We operate at the intersection of service quality and supply-chain
              resilience—so your customers experience consistency, not excuses.
            </p>
          </div>
          <ul className="feature-grid">
            <li className="feature-card reveal">
              <span className="feature-card__icon" aria-hidden="true" />
              <h3 className="feature-card__title">Customer-first delivery</h3>
              <p className="feature-card__text">
                Proactive communication, exception management, and a service ethos
                centered on the end recipient—because every delivery is a brand
                moment.
              </p>
            </li>
            <li className="feature-card reveal">
              <span className="feature-card__icon feature-card__icon--shield" aria-hidden="true" />
              <h3 className="feature-card__title">Safety & compliance</h3>
              <p className="feature-card__text">
                Rigorous standards for handling, training, and documentation.
                Programs designed to reduce risk on the road and in the warehouse.
              </p>
            </li>
            <li className="feature-card reveal">
              <span className="feature-card__icon feature-card__icon--chart" aria-hidden="true" />
              <h3 className="feature-card__title">Reliability at scale</h3>
              <p className="feature-card__text">
                Capacity planning, contingency routing, and data-driven decisions
                that keep commitments intact when volumes spike.
              </p>
            </li>
            <li className="feature-card reveal">
              <span className="feature-card__icon feature-card__icon--partner" aria-hidden="true" />
              <h3 className="feature-card__title">Partnerships that compound</h3>
              <p className="feature-card__text">
                Aligned incentives with shippers, carriers, and technology
                providers—joint governance and shared targets, not transactional
                handoffs.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__inner split-banner">
          <div className="split-banner__copy">
            <h2 className="split-banner__title">10x thinking in logistics</h2>
            <p className="split-banner__text">
              We challenge “good enough” network design. Our teams look for an
              order-of-magnitude leap in visibility, cycle time, or emissions
              intensity—then sequence the investments that make it real. Bold goals
              with disciplined execution: that is how Momentum advances your
              supply chain.
            </p>
            <Link to="/values" className="btn btn--secondary">
              Read our values
            </Link>
          </div>
          <div className="split-banner__panel" aria-hidden="true">
            <ul className="trust-list">
              <li>Forward-looking technology platforms</li>
              <li>Sustainability embedded in routing &amp; mode choice</li>
              <li>Governance cadences with executive sponsors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="section__inner cta-inline">
          <div>
            <h2 className="cta-inline__title">Ready for a partner, not a vendor?</h2>
            <p className="cta-inline__text">
              Share your lanes, service levels, and growth plan—we will co-design
              a program that fits your operations and your customers’
              expectations.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  )
}
