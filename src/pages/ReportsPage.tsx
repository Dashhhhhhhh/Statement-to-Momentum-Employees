import { deliveries, routes, teamMembers, weeklyStats } from '../data/mock'

const totalDelivered = weeklyStats.reduce((s, w) => s + w.delivered, 0)
const totalExceptions = weeklyStats.reduce((s, w) => s + w.exceptions, 0)
const onTimeRate = (((totalDelivered - totalExceptions) / totalDelivered) * 100).toFixed(1)

const driverStats = teamMembers
  .filter((m) => m.deliveries > 0)
  .sort((a, b) => b.deliveries - a.deliveries)

const MAX_DELIVERIES = Math.max(...driverStats.map((d) => d.deliveries))

export function ReportsPage() {
  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Reports</h1>
          <p className="dash__date">Rolling 7-day performance summary</p>
        </div>
      </div>

      <div className="kpi-row">
        <article className="kpi-card">
          <span className="kpi-card__label">Deliveries this week</span>
          <span className="kpi-card__value">{totalDelivered.toLocaleString()}</span>
          <span className="kpi-card__sub">across all routes</span>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">On-time rate</span>
          <span className="kpi-card__value">{onTimeRate}%</span>
          <span className="kpi-card__sub">exceptions excluded</span>
        </article>
        <article className={`kpi-card${totalExceptions > 0 ? ' kpi-card--alert' : ''}`}>
          <span className="kpi-card__label">Exceptions</span>
          <span className="kpi-card__value">{totalExceptions}</span>
          <span className="kpi-card__sub">this week</span>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">Routes completed</span>
          <span className="kpi-card__value">{routes.filter((r) => r.status === 'complete').length}</span>
          <span className="kpi-card__sub">of {routes.length} total</span>
        </article>
      </div>

      <div className="dash__grid">
        <section className="card card--full">
          <div className="card__head">
            <h2 className="card__title">Driver delivery volume (all-time)</h2>
          </div>
          <ul className="driver-bar-list">
            {driverStats.map((d) => (
              <li key={d.id} className="driver-bar-row">
                <span className="driver-bar-row__avatar">{d.avatar}</span>
                <span className="driver-bar-row__name">{d.name}</span>
                <div className="driver-bar-row__bar-wrap">
                  <div
                    className="driver-bar-row__bar"
                    style={{ width: `${Math.round((d.deliveries / MAX_DELIVERIES) * 100)}%` }}
                  />
                </div>
                <span className="driver-bar-row__count">{d.deliveries.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <div className="card__head">
            <h2 className="card__title">Delivery status breakdown</h2>
          </div>
          <ul className="stat-breakdown">
            {(['delivered', 'in-transit', 'pending', 'exception'] as const).map((s) => {
              const count = deliveries.filter((d) => d.status === s).length
              const pct = Math.round((count / deliveries.length) * 100)
              const labels: Record<string, string> = {
                delivered: 'Delivered',
                'in-transit': 'In transit',
                pending: 'Pending',
                exception: 'Exception',
              }
              return (
                <li key={s} className="stat-row">
                  <span className={`badge badge--${s}`}>{labels[s]}</span>
                  <div className="stat-row__bar-wrap">
                    <div
                      className={`stat-row__bar stat-row__bar--${s}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="stat-row__pct">{pct}%</span>
                  <span className="stat-row__count">{count}</span>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="card">
          <div className="card__head">
            <h2 className="card__title">Region summary</h2>
          </div>
          <div className="table-wrap">
            <table className="data-table data-table--compact">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Drivers</th>
                  <th>Active routes</th>
                </tr>
              </thead>
              <tbody>
                {['Central', 'Ohio Valley', 'Great Lakes', 'Midwest', 'West', 'East'].map((region) => {
                  const drivers = teamMembers.filter(
                    (m) => m.region === region && m.role === 'Driver',
                  ).length
                  const activeR = routes.filter(
                    (r) => r.region === region && r.status === 'active',
                  ).length
                  return (
                    <tr key={region}>
                      <td>{region}</td>
                      <td>{drivers}</td>
                      <td>{activeR}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
