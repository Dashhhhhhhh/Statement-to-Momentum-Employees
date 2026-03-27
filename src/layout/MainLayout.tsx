import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { RevealObserver } from '../components/RevealObserver'
import { ScrollToTop } from '../components/ScrollToTop'

const navItems: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/values', label: 'Values' },
  { to: '/services', label: 'Services' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="site">
      <ScrollToTop />
      <RevealObserver />
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
            <span className="logo__mark" aria-hidden="true" />
            <span className="logo__word">Momentum</span>
          </Link>

          <nav
            id="site-nav"
            className={`nav ${mobileOpen ? 'nav--open' : ''}`}
            aria-label="Primary"
          >
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' nav__link--active' : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link
              to="/contact"
              className="btn btn--primary header__cta"
              onClick={() => setMobileOpen(false)}
            >
              Get in touch
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={mobileOpen}
              aria-controls="site-nav"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <span className="nav-toggle__bar" aria-hidden="true" />
              <span className="nav-toggle__bar" aria-hidden="true" />
              <span className="nav-toggle__bar" aria-hidden="true" />
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <button
            type="button"
            className="nav-scrim"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__brand-block">
            <Link to="/" className="logo logo--footer">
              <span className="logo__mark" aria-hidden="true" />
              <span className="logo__word">Momentum</span>
            </Link>
            <p className="footer__tagline">
              Customer-first delivery. Safety you can measure. Partnerships built to
              scale.
            </p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__heading">Company</span>
              <Link to="/about">About</Link>
              <Link to="/mission-vision">Mission & Vision</Link>
              <Link to="/values">Values</Link>
              <Link to="/leadership">Leadership</Link>
            </div>
            <div className="footer__col">
              <span className="footer__heading">Solutions</span>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Momentum Logistics Corporation. All rights
            reserved.
          </span>
          <span className="footer__legal">
            <Link to="/contact">Privacy & legal requests</Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
