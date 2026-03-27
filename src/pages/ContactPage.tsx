import { PageHero } from '../components/PageHero'

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s design the next chapter of your network"
        subtitle="Momentum partners with enterprise supply-chain, ecommerce, and operations leaders. Tell us about your lanes, service requirements, and growth agenda—we will respond with a structured follow-up."
        variant="light"
      />

      <section className="section section--light">
        <div className="section__inner contact-layout">
          <div className="contact-card reveal">
            <h2 className="contact-card__title">Corporate inquiries</h2>
            <p className="contact-card__text">
              For new business, strategic partnerships, and media requests.
            </p>
            <a className="contact-link" href="mailto:solutions@momentum.example">
              solutions@momentum.example
            </a>
            <a className="contact-link" href="tel:+18005550199">
              +1 (800) 555-0199
            </a>
          </div>
          <div className="contact-card reveal">
            <h2 className="contact-card__title">Headquarters</h2>
            <p className="contact-card__text">
              Momentum Logistics Corporation
              <br />
              1200 Commerce Tower
              <br />
              Suite 400
              <br />
              Chicago, IL 60601
              <br />
              United States
            </p>
            <p className="contact-card__note">
              Additional regional service centers support national programs; your
              account team will share local contacts after onboarding.
            </p>
          </div>
          <div className="contact-card contact-card--wide reveal">
            <h2 className="contact-card__title">Request follow-up</h2>
            <p className="contact-card__text">
              Use the email above with your company name, approximate annual
              shipment volume, primary lanes, and any compliance or security
              requirements. We typically respond within two business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
