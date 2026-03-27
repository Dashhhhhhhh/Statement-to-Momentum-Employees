import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import {
  deliveries,
  routes,
  weeklyStats,
  type DeliveryStatus,
} from '../data/mock'

const statusCount = (s: DeliveryStatus) =>
  deliveries.filter((d) => d.status === s).length

const MAX_BAR = Math.max(...weeklyStats.map((w) => w.delivered))

function StatusBadge({ status }: { status: DeliveryStatus }) {
  return (
    <span className={`badge badge--${status}`}>
      {status === 'in-transit' ? 'In transit' : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export function DashboardPage() {
  const { user } = useAuth()
  const activeRoutes = routes.filter((r) => r.status === 'active').length
  const exceptionCount = statusCount('exception')
  const recentDeliveries = deliveries.slice(0, 5)

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Good morning, {user?.name.split(' ')[0]}</h1>
          <p className="dash__date">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {exceptionCount > 0 ? (
        <div className="alert alert--warning">
          <svg className="alert__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <strong>{exceptionCount} delivery exception{exceptionCount > 1 ? 's' : ''}</strong> require
            attention today.{' '}
            <Link to="/deliveries">View deliveries →</Link>
          </span>
        </div>
      ) : null}

      <div className="kpi-row">
        <article className="kpi-card">
          <span className="kpi-card__label">Delivered today</span>
          <span className="kpi-card__value">{statusCount('delivered')}</span>
          <span className="kpi-card__sub">of {deliveries.length} total shipments</span>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">In transit</span>
          <span className="kpi-card__value">{statusCount('in-transit')}</span>
          <span className="kpi-card__sub">across {activeRoutes} active routes</span>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">Pending</span>
          <span className="kpi-card__value">{statusCount('pending')}</span>
          <span className="kpi-card__sub">not yet dispatched</span>
        </article>
        <article className={`kpi-card${exceptionCount > 0 ? ' kpi-card--alert' : ''}`}>
          <span className="kpi-card__label">Exceptions</span>
          <span className="kpi-card__value">{exceptionCount}</span>
          <span className="kpi-card__sub">need resolution</span>
        </article>
      </div>

      <div className="dash__grid">
        <section className="card card--full">
          <div className="card__head">
            <h2 className="card__title">Weekly delivery volume</h2>
          </div>
          <div className="bar-chart" role="img" aria-label="Weekly delivery volume chart">
            {weeklyStats.map((w) => (
              <div key={w.day} className="bar-chart__col">
                <span className="bar-chart__count">{w.delivered}</span>
                <div
                  className="bar-chart__bar"
                  style={{ height: `${Math.round((w.delivered / MAX_BAR) * 100)}%` }}
                />
                {w.exceptions > 0 ? (
                  <div
                    className="bar-chart__exc"
                    style={{ height: `${Math.round((w.exceptions / MAX_BAR) * 100)}%` }}
                    title={`${w.exceptions} exceptions`}
                  />
                ) : null}
                <span className="bar-chart__label">{w.day}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="card__head">
            <h2 className="card__title">Recent deliveries</h2>
            <Link to="/deliveries" className="card__link">View all</Link>
          </div>
          <ul className="mini-list">
            {recentDeliveries.map((d) => (
              <li key={d.id} className="mini-list__row">
                <div>
                  <p className="mini-list__primary">{d.recipient}</p>
                  <p className="mini-list__secondary">{d.trackingNumber} · {d.city}, {d.state}</p>
                </div>
                <StatusBadge status={d.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <div className="card__head">
            <h2 className="card__title">Active routes</h2>
            <Link to="/routes" className="card__link">View all</Link>
          </div>
          <ul className="mini-list">
            {routes
              .filter((r) => r.status !== 'complete')
              .slice(0, 5)
              .map((r) => (
                <li key={r.id} className="mini-list__row">
                  <div>
                    <p className="mini-list__primary">{r.name}</p>
                    <p className="mini-list__secondary">
                      {r.driver === 'Unassigned' ? (
                        <span className="text-warn">Unassigned</span>
                      ) : (
                        r.driver
                      )}{' '}
                      · {r.stops} stops
                    </p>
                  </div>
                  <div className="progress-pill">
                    <div
                      className="progress-pill__fill"
                      style={{ width: `${Math.round((r.completed / r.stops) * 100)}%` }}
                    />
                    <span className="progress-pill__label">
                      {r.completed}/{r.stops}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
