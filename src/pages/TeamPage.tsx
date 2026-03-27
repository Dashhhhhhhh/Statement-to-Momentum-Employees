import { useState } from 'react'
import { teamMembers } from '../data/mock'

type Status = 'active' | 'on-leave' | 'inactive' | 'incomplete'

function StatusDot({ status }: { status: Status }) {
  return <span className={`status-dot status-dot--${status}`} aria-label={status} />
}

function formatJoined(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function TeamPage() {
  const [search, setSearch] = useState('')

  const filtered = teamMembers.filter((m) => {
    const q = search.toLowerCase()
    return (
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.region.toLowerCase().includes(q)
    )
  })

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Team</h1>
          <p className="dash__date">{teamMembers.length} employees</p>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="search"
          className="filter-bar__search"
          placeholder="Search name, role…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card card--no-head">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="table-empty">No employees match.</td>
                </tr>
              ) : (
                filtered.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <div className="td--person">
                        <span className="member-avatar">{m.avatar}</span>
                        <div>
                          <p className="td--strong">{m.name}</p>
                          <p className="td--sub">{m.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>{m.role}</td>
                    <td>
                      <span className="status-cell">
                        <StatusDot status={m.status} />
                        {m.status === 'on-leave'
                          ? 'On leave'
                          : m.status === 'incomplete'
                          ? 'Incomplete'
                          : m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                      </span>
                    </td>
                    <td>{formatJoined(m.joined)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
