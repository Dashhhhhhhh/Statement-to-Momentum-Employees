import { useMemo, useState } from 'react'
import { deliveries, type DeliveryStatus } from '../data/mock'

const STATUS_OPTIONS: { value: DeliveryStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'in-transit', label: 'In transit' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'exception', label: 'Exception' },
]

function StatusBadge({ status }: { status: DeliveryStatus }) {
  const labels: Record<DeliveryStatus, string> = {
    pending: 'Pending',
    'in-transit': 'In transit',
    delivered: 'Delivered',
    exception: 'Exception',
  }
  return <span className={`badge badge--${status}`}>{labels[status]}</span>
}

export function DeliveriesPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<DeliveryStatus | 'all'>('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return deliveries.filter((d) => {
      const matchStatus = statusFilter === 'all' || d.status === statusFilter
      const matchSearch =
        !q ||
        d.recipient.toLowerCase().includes(q) ||
        d.trackingNumber.toLowerCase().includes(q) ||
        d.city.toLowerCase().includes(q) ||
        d.driver.toLowerCase().includes(q)
      return matchStatus && matchSearch
    })
  }, [search, statusFilter])

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Deliveries</h1>
          <p className="dash__date">{deliveries.length} total shipments in this view</p>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="search"
          className="filter-bar__search"
          placeholder="Search tracking, recipient, city, driver…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-bar__tabs" role="group" aria-label="Filter by status">
          {STATUS_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              className={`filter-tab${statusFilter === o.value ? ' filter-tab--active' : ''}`}
              onClick={() => setStatusFilter(o.value)}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card card--no-head">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tracking</th>
                <th>Recipient</th>
                <th>Location</th>
                <th>Driver</th>
                <th>Route</th>
                <th>Scheduled</th>
                <th>Status</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="table-empty">No deliveries match your filters.</td>
                </tr>
              ) : (
                filtered.map((d) => (
                  <tr key={d.id} className={d.status === 'exception' ? 'row--alert' : ''}>
                    <td className="td--mono">{d.trackingNumber}</td>
                    <td>
                      <span className="td--strong">{d.recipient}</span>
                      {d.notes ? (
                        <span className="td--note" title={d.notes}>⚑</span>
                      ) : null}
                    </td>
                    <td>{d.city}, {d.state}</td>
                    <td>{d.driver === 'Unassigned' ? <span className="text-warn">Unassigned</span> : d.driver}</td>
                    <td className="td--mono">{d.route || '—'}</td>
                    <td>{d.scheduledDate}</td>
                    <td><StatusBadge status={d.status} /></td>
                    <td>{d.weight}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="table-footer">Showing {filtered.length} of {deliveries.length} shipments</p>
      </div>
    </div>
  )
}
