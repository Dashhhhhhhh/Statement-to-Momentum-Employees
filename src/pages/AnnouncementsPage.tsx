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
          <span className="announcement-card__tag">Update</span>
          <span className="announcement-card__date">March 28, 2026 · From Leadership</span>
        </div>
        <h2 className="announcement-card__title">
          Update to All Momentum Employees
        </h2>
        <div className="announcement-card__body">
          <p>
            Dear Momentum Team,
          </p>
          <p>
            We know this has been an incredibly difficult and emotional time for
            many across Momentum. Many employees are frustrated, concerned, and
            looking for answers, both about the situation itself and about how it
            has been handled. Our immediate priority is to ensure that everyone
            remains safe and that concerns are addressed respectfully, seriously,
            and constructively.
          </p>
          <p>
            Momentum is actively partnering with Globex to better understand what
            occurred and determine the cause of the issue. Based on the information
            available at this time, there is no indication this was an act of
            terrorism; current evidence indicates it was the result of a glitch
            within our system. We are committed to following the facts, conducting
            a thorough review, and taking the appropriate steps based on what we
            learn.
          </p>
          <p>
            We also want every employee to know that support is available. Any
            employee who feels unsafe or unable to work at this time should speak
            with Human Resources or their manager about available leave options and
            support resources. Counseling and other employee assistance resources
            are also being made available as we continue reviewing the situation.
          </p>
          <p>
            We encourage employees to continue raising concerns through the
            appropriate internal channels so those concerns can be heard and
            addressed directly. Resolving this issue will require facts, care, and
            cooperation, and our focus remains on protecting our people, maintaining
            safe operations, and supporting the public we serve.
          </p>
          <p>
            We will continue to share updates as more information is confirmed.
          </p>
        </div>
        <div className="announcement-card__footer">
          <span className="announcement-card__signed">— Momentum Leadership Team</span>
        </div>
      </article>

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
