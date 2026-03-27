import { PageHero } from '../components/PageHero'

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Momentum"
        title="A logistics company built around the last mile—and everything behind it"
        subtitle="From first pickup to final proof of delivery, we coordinate people, assets, and data so your network stays cohesive. Momentum serves retailers, manufacturers, and third-party logistics providers who need a partner that matches their ambition."
      />

      <section className="section section--light">
        <div className="section__inner prose-columns">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              Momentum is a national logistics and delivery organization focused
              on high-service freight, dedicated fleet programs, and technology-enabled
              fulfillment. We operate with the discipline of an enterprise and the
              curiosity of a growth company—testing new models, measuring outcomes,
              and scaling what works.
            </p>
            <p>
              Our teams combine deep operational expertise with modern planning
              tools. That means fewer surprises for your customers: clear
              milestones, accountable owners, and transparent reporting when the
              unexpected occurs.
            </p>
          </div>
          <div className="prose">
            <h2>How we work</h2>
            <p>
              Every engagement begins with listening—your service definitions,
              constraints, and strategic priorities. We map network flows, identify
              single points of failure, and build playbooks for peak season,
              promotions, and supply shocks.
            </p>
            <p>
              Sustainability is not an add-on: we prioritize route density, modal
              efficiency, and carrier selection criteria that reflect your ESG
              commitments. When technology can remove friction—from digital proof
              of delivery to API integrations—we invest there first.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__inner">
          <h2 className="section__title section__title--centered">
            What “high trust” means here
          </h2>
          <ul className="pillars">
            <li className="pillar reveal">
              <strong>Clarity</strong>
              <span>One operating picture across partners and sites</span>
            </li>
            <li className="pillar reveal">
              <strong>Consistency</strong>
              <span>Standard work that scales without diluting quality</span>
            </li>
            <li className="pillar reveal">
              <strong>Candor</strong>
              <span>Early escalation and joint problem-solving</span>
            </li>
            <li className="pillar reveal">
              <strong>Improvement</strong>
              <span>Structured retrospectives and 10x opportunities in backlog</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
