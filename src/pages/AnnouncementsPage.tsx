export function AnnouncementsPage() {
  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__title">Announcements</h1>
          <p className="dash__date">Official communications from Momentum leadership</p>
        </div>
      </div>

      <article className="announcement-card announcement-card--urgent">
        <div className="announcement-card__head">
          <span className="announcement-card__tag">Fleet Safety Notice</span>
          <span className="announcement-card__date">March 27, 2026 · From Leadership</span>
        </div>
        <h2 className="announcement-card__title">
          Statement on Recent Fleet Incidents
        </h2>
        <div className="announcement-card__body">
          <p>
            We are aware of the recent incidents involving our fleet and the concerns
            being shared, including by our drivers. Our thoughts are with everyone
            affected.
          </p>
          <p>
            Safety is our top priority. We have suspended all autonomous driving
            operations and moved all vehicles to full manual control while we conduct
            a thorough investigation in coordination with authorities.
          </p>
          <p>
            We understand that some employees may feel uneasy or unsafe at this
            time, and any employee with immediate safety concerns may speak with
            their manager or Human Resources about taking leave. We also encourage
            employees to bring their concerns forward directly, as we believe the
            most productive path is to work through this issue together with
            professionalism, open communication, and a shared commitment to one
            another and the future of Momentum.
          </p>
        </div>
        <div className="announcement-card__footer">
          <span className="announcement-card__signed">— Momentum Leadership Team</span>
        </div>
      </article>
    </div>
  )
}
