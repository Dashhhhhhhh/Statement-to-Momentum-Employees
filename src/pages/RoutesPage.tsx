import { routes } from '../data/mock'

type RouteStatus = 'active' | 'complete' | 'unassigned'

function RouteBadge({ status }: { status: RouteStatus }) {
  const map: Record<RouteStatus, string> = {
    active: 'In progress',
    complete: 'Complete',
    unassigned: 'Unassigned',
  }
  return (
    <span
      className={`badge ${status === 'active' ? 'badge--in-transit' : status === 'complete' ? 'badge--delivered' : 'badge--pending'}`}
    >
      {map[status]}
    </span>
  )
}

export function RoutesPage() {
  const active = routes.filter((r) => r.status === 'active')
  const unassigned = routes.filter((r) => r.status === 'unassigned')
  const complete = routes.filter((r) => r.status === 'complete')

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Routes</h1>
          <p className="dash__date">
            {active.length} active · {unassigned.length} unassigned · {complete.length} complete
          </p>
        </div>
      </div>

      {unassigned.length > 0 ? (
        <div className="alert alert--info">
          <svg className="alert__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <strong>{unassigned.length} route{unassigned.length > 1 ? 's' : ''}</strong> need driver
            assignment before dispatch.
          </span>
        </div>
      ) : null}

      <div className="route-grid">
        {routes.map((r) => {
          const pct = r.stops > 0 ? Math.round((r.completed / r.stops) * 100) : 0
          return (
            <article key={r.id} className={`route-card${r.status === 'unassigned' ? ' route-card--warn' : ''}`}>
              <div className="route-card__head">
                <span className="route-card__id">{r.id}</span>
                <RouteBadge status={r.status} />
              </div>
              <h2 className="route-card__name">{r.name}</h2>
              <dl className="route-card__meta">
                <div>
                  <dt>Driver</dt>
                  <dd>
                    {r.driver === 'Unassigned' ? (
                      <span className="text-warn">Unassigned</span>
                    ) : (
                      r.driver
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Region</dt>
                  <dd>{r.region}</dd>
                </div>
                <div>
                  <dt>Vehicle</dt>
                  <dd>{r.vehicleId || '—'}</dd>
                </div>
                <div>
                  <dt>Window</dt>
                  <dd>{r.startTime} – {r.estimatedEnd}</dd>
                </div>
              </dl>
              <div className="route-card__progress">
                <div className="route-progress">
                  <div
                    className="route-progress__fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="route-progress__label">
                  {r.completed} / {r.stops} stops ({pct}%)
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
