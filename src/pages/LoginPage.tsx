import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await login(email, password)
    setLoading(false)
    if (result.ok) {
      navigate('/dashboard', { replace: true })
    } else {
      setError(result.error ?? 'Login failed.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-brand">
          <span className="login-brand__mark" aria-hidden="true" />
          <span className="login-brand__name">Momentum</span>
        </div>
        <h1 className="login-title">Employee Portal</h1>
        <p className="login-subtitle">Sign in to your account to continue</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email" className="field__label">Work email</label>
            <input
              id="email"
              type="email"
              className="field__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@momentum.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password" className="field__label">Password</label>
            <input
              id="password"
              type="password"
              className="field__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          {error ? <p className="login-error" role="alert">{error}</p> : null}
          <button
            type="submit"
            className="btn btn--primary btn--block"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="login-hint">
          <p className="login-hint__title">Demo accounts</p>
          <ul>
            <li><code>alex.chen@momentum.com</code> — Admin</li>
            <li><code>jordan.smith@momentum.com</code> — Dispatcher</li>
            <li><code>taylor.wong@momentum.com</code> — Driver</li>
          </ul>
          <p>Password: <code>momentum1</code></p>
        </div>
      </div>
    </div>
  )
}
