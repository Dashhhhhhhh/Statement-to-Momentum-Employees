import { PageHero } from '../components/PageHero'

export function MissionVisionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mission & vision"
        title="Purpose that guides every route we run"
        subtitle="Our mission defines how we serve today; our vision describes the future we are building with our customers, carriers, and teams."
      />

      <section className="section section--light">
        <div className="section__inner twin-cards">
          <article className="statement-card reveal">
            <p className="statement-card__label">Mission</p>
            <h2 className="statement-card__title">Safe, reliable, forward-looking delivery</h2>
            <p className="statement-card__body">
              We exist to move goods with an uncompromising focus on safety and
              reliability—using technology and process innovation to raise the bar
              for what customers should expect from logistics. Every decision, from
              hiring to routing to partner selection, is measured against whether it
              makes delivery safer, more dependable, and better prepared for
              tomorrow’s supply chain.
            </p>
          </article>
          <article className="statement-card statement-card--accent reveal">
            <p className="statement-card__label">Vision</p>
            <h2 className="statement-card__title">
              People-first innovation in delivery and supply chain
            </h2>
            <p className="statement-card__body">
              We envision a world where technology amplifies frontline teams—not
              replaces their judgment—and where shippers, carriers, and communities
              benefit from transparent, resilient networks. Momentum will keep
              investing in tools and partnerships that put people at the center:
              drivers, warehouse associates, customer-care teams, and the end
              customers counting on a carton at the door.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__inner narrow-prose">
          <h2 className="section__title section__title--light">
            From statement to execution
          </h2>
          <p className="text--muted-on-navy">
            Mission and vision are not posters on a wall—they are embedded in our
            operating reviews, capital allocation, and talent programs. Leadership
            sets non-negotiables on safety and service; teams propose bold
            experiments; we fund what proves out. That loop is how Momentum stays
            forward-looking without losing the reliability our name implies.
          </p>
        </div>
      </section>
    </main>
  )
}
