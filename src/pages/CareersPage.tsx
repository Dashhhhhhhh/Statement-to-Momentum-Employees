import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

const openings = [
  {
    title: 'Senior Operations Manager — Regional Hub',
    location: 'Multiple regions',
    blurb:
      'Lead P&L and service performance for a high-volume sort hub. Partner with transportation planning and labor management teams.',
  },
  {
    title: 'Solutions Engineer — Integrations',
    location: 'Remote / hybrid',
    blurb:
      'Design API-led connectivity with Fortune 500 shipper systems. Translate business requirements into resilient technical specifications.',
  },
  {
    title: 'Safety & Compliance Specialist',
    location: 'Field-based',
    blurb:
      'Audit carrier and site programs, coach on regulatory changes, and steward incident learning loops across the network.',
  },
] as const

export function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Build a career where reliability is the product"
        subtitle="Join a team that treats delivery as a craft—and treats people as the advantage. We invest in training, transparent advancement, and technology that makes hard jobs a little easier."
      />

      <section className="section section--light">
        <div className="section__inner prose-columns">
          <div className="prose">
            <h2>Why Momentum</h2>
            <p>
              Whether you are on the road, in a control tower, or building software,
              your work shows up in a customer’s day. We reward ownership, teach
              root-cause problem solving, and celebrate teams that raise the bar on
              safety and service together.
            </p>
            <p>
              Diversity strengthens our network: varied perspectives help us
              anticipate customer needs, design fair routes, and build
              partnerships that last. We are committed to equitable hiring,
              development, and pay practices.
            </p>
          </div>
          <div className="prose">
            <h2>What we look for</h2>
            <p>
              Curiosity, integrity, and a bias for teamwork. We need people who take
              10x improvement seriously—not as a slogan, but as a habit of asking
              what would materially change outcomes—and who pair that ambition with
              respect for frontline realities.
            </p>
            <p>
              Competitive benefits, performance incentives, and leadership pathways
              are designed to retain the talent that makes Momentum dependable.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section__inner">
          <h2 className="section__title">Featured openings</h2>
          <p className="section__lead section__lead--tight">
            Representative roles currently in our talent pipeline. Specific
            listings and locations are shared with candidates during recruiting.
          </p>
          <ul className="job-list">
            {openings.map((job) => (
              <li key={job.title} className="job-card reveal">
                <div>
                  <h3 className="job-card__title">{job.title}</h3>
                  <p className="job-card__meta">{job.location}</p>
                  <p className="job-card__blurb">{job.blurb}</p>
                </div>
                <Link to="/contact" className="btn btn--secondary btn--sm">
                  Inquire
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__inner cta-inline cta-inline--light">
          <div>
            <h2 className="cta-inline__title">General applications</h2>
            <p className="cta-inline__text text--muted-on-navy">
              Do not see the right role? Reach out with your background—we are
              often building teams faster than job posts can keep up.
            </p>
          </div>
          <Link to="/contact" className="btn btn--secondary">
            Contact recruiting
          </Link>
        </div>
      </section>
    </main>
  )
}
