import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function RevealObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.reveal--visible)')
    if (!nodes.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
    )

    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [pathname])

  return null
}
