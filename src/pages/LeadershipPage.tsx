import { PageHero } from '../components/PageHero'

const leaders = [
  {
    role: 'Chief Executive Officer',
    bio:
      'Leads enterprise strategy, customer governance, and capital deployment. Former logistics COO with experience scaling national networks across retail and industrial verticals.',
  },
  {
    role: 'Chief Operating Officer',
    bio:
      'Accountable for end-to-end service delivery, network design, and carrier partnerships. Background in high-velocity fulfillment and transportation P&L management.',
  },
  {
    role: 'Chief Technology Officer',
    bio:
      'Drives platform roadmap, integrations, and cybersecurity. Focuses on pragmatic automation—tools that frontline teams will actually adopt.',
  },
  {
    role: 'Chief People Officer',
    bio:
      'Shapes talent strategy, leadership development, and culture programs aligned to safety and customer service. Champions inclusion and frontline career paths.',
  },
  {
    role: 'Chief Commercial Officer',
    bio:
      'Owns customer success, solution design, and long-term partnerships. Embedded in QBRs and joint innovation forums with strategic accounts.',
  },
] as const

export function LeadershipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="Experienced operators, accountable to outcomes"
        subtitle="Our executive team blends logistics depth with technology fluency. They set the tone for safety, integrity, and customer-first delivery—and they show up when issues require senior judgment."
        variant="light"
      />

      <section className="section section--light">
        <div className="section__inner">
          <ul className="leadership-grid">
            {leaders.map((l) => (
              <li key={l.role} className="leader-card reveal">
                <div className="leader-card__photo" aria-hidden="true">
                  <span className="leader-card__initial">{l.role.charAt(0)}</span>
                </div>
                <h2 className="leader-card__role">{l.role}</h2>
                <p className="leader-card__bio">{l.bio}</p>
              </li>
            ))}
          </ul>
          <p className="legal-note">
            Leadership biographies are representative of our executive structure;
            names and photographs may be updated to reflect current appointments.
          </p>
        </div>
      </section>
    </main>
  )
}
