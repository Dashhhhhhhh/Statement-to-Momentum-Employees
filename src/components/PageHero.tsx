type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle: string
  variant?: 'navy' | 'light'
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = 'navy',
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero--${variant}`}
      aria-labelledby="page-hero-title"
    >
      <div className="page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 id="page-hero-title" className="page-hero__title">
          {title}
        </h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
