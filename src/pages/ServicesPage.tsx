import { PageHero } from '../components/PageHero'

const services = [
  {
    name: 'National & regional distribution',
    summary:
      'Scheduled linehaul and middle-mile programs with predictable cut times, cross-dock efficiency, and exception protocols tailored to your SLAs.',
  },
  {
    name: 'Last-mile & white-glove delivery',
    summary:
      'Residential and commercial final delivery with appointment scheduling, in-home or curbside options, and premium handling for high-value goods.',
  },
  {
    name: 'Dedicated fleet & managed transportation',
    summary:
      'Dedicated capacity, driver management, and ongoing optimization—so you get consistency without owning every asset on the balance sheet.',
  },
  {
    name: 'Technology integration & control tower',
    summary:
      'API-first connectivity, visibility dashboards, and proactive alerts. One throat to choke when it comes to data quality and milestone tracking.',
  },
  {
    name: 'Returns & reverse logistics',
    summary:
      'Streamlined flows for recalls, warranty exchanges, and e-commerce returns—protecting customer experience while recovering inventory value.',
  },
  {
    name: 'Sustainability advisory',
    summary:
      'Network modeling, carrier scorecards, and pilot programs to lower emissions intensity while maintaining cost and service targets.',
  },
] as const

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Programs engineered for reliability and room to grow"
        subtitle="Momentum offers a full spectrum of logistics and delivery capabilities—integrated under one operating model so you can scale without fragmenting accountability."
      />

      <section className="section section--light">
        <div className="section__inner service-accord">
          {services.map((s) => (
            <article key={s.name} className="service-block reveal">
              <h2 className="service-block__title">{s.name}</h2>
              <p className="service-block__summary">{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__inner narrow-prose">
          <h2 className="section__title">Implementation approach</h2>
          <p className="prose-p">
            Engagements follow a phased path: discovery and baseline, solution
            design with risk registers, controlled launch with hyper-care staffing,
            then steady-state operations with quarterly business reviews. Your
            steering committee sees the same KPIs we do—on-time delivery, cost per
            unit, incident rate, and customer satisfaction—so priorities stay
            aligned.
          </p>
        </div>
      </section>
    </main>
  )
}
