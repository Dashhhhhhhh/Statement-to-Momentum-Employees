import { PageHero } from '../components/PageHero'

const values = [
  {
    title: 'People',
    body:
      'We hire for judgment, train for mastery, and recognize the teams that keep promises to customers. Respect, inclusion, and accountability define how we work together.',
  },
  {
    title: 'Technology',
    body:
      'Modern platforms should reduce noise, not create it. We adopt tools that improve visibility, automation, and decision speed—always in service of safer, cleaner operations.',
  },
  {
    title: 'Partners',
    body:
      'Carriers, suppliers, and clients succeed when incentives align. We invest in joint planning, fair commercial terms, and transparent scorecards.',
  },
  {
    title: 'Safety',
    body:
      'Nothing we ship is worth compromising well-being. Physical safety, data security, and operational integrity are table stakes—audited, coached, and continuously improved.',
  },
  {
    title: 'Sustainability',
    body:
      'Efficient networks are greener networks. We measure emissions, optimize utilization, and partner on alternative fuels and equipment when they make economic and environmental sense.',
  },
  {
    title: '10x improvement',
    body:
      'Incrementalism is not enough for the challenges ahead. We challenge teams to identify levers—process, product, or partnership—that could transform outcomes, then prove the case with pilots.',
  },
] as const

export function ValuesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Values"
        title="Principles that shape how we deliver"
        subtitle="Our values translate corporate intent into daily choices—from the dispatch desk to the boardroom. They reinforce customer-first delivery, safety, reliability, technology, sustainability, and partnerships."
        variant="light"
      />

      <section className="section section--muted">
        <div className="section__inner">
          <ol className="values-grid">
            {values.map((v, i) => (
              <li key={v.title} className="value-tile reveal">
                <span className="value-tile__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="value-tile__title">{v.title}</h2>
                <p className="value-tile__body">{v.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
