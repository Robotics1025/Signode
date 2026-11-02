import "./company.css";

import { companyContact } from "./company-details";

export function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero navy">
        <div className="container">
          <p className="eyebrow">Contact us</p>
          <h1>Let’s discuss your next project.</h1>
          <p className="contact-intro">
            Talk to our team about your engineering needs, site requirements and
            the practical support your project needs.
          </p>
          <div className="contact-hero-actions">
            <a
              className="button button-light"
              href={`mailto:${companyContact.email}`}
            >
              Email our team
            </a>
            <a
              className="contact-whatsapp-link"
              href={companyContact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Start a WhatsApp conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="container contact-details"
        aria-labelledby="contact-details-heading"
      >
        <div className="contact-section-intro">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-details-heading">A direct connection to our team.</h2>
          <p>Reach us by email, phone or WhatsApp.</p>
        </div>
        <div className="contact-channels">
          <div className="contact-channel contact-email">
            <h3>Email</h3>
            <a href={`mailto:${companyContact.email}`}>
              {companyContact.email}
            </a>
          </div>
          <div className="contact-channel">
            <h3>Mobile</h3>
            <ul>
              {companyContact.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href}>{phone.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-channel">
            <h3>WhatsApp</h3>
            <a
              href={companyContact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {companyContact.whatsapp}
            </a>
            <p>Message our team about your project.</p>
          </div>
        </div>
      </section>

      <section
        id="offices"
        className="contact-offices pale"
        aria-labelledby="contact-offices-heading"
      >
        <div className="container">
          <div className="contact-offices-intro">
            <p className="eyebrow">Find us</p>
            <h2 id="contact-offices-heading">Our offices in Uganda.</h2>
          </div>
          <div className="contact-office-grid">
            <article className="contact-office">
              <p className="contact-office-label">Head office</p>
              <h3>Jinja</h3>
              <address>
                Transafrica Assurance Building
                <br />
                3rd Floor, Room 116
                <br />
                Jinja, Uganda
              </address>
              <p className="contact-postal">P.O. Box 900272, Jinja, Uganda</p>
            </article>
            <article className="contact-office">
              <p className="contact-office-label">Kampala office</p>
              <h3>Kampala</h3>
              <address>
                Opposite Kireka Shopping Mall
                <br />
                2nd Floor, Jinja Road
                <br />
                Kampala, Uganda
              </address>
            </article>
          </div>
        </div>
      </section>

      <section className="container contact-project-note">
        <p className="eyebrow">Work with Signode</p>
        <div>
          <h2>Tell us what you’re planning.</h2>
          <p>
            Share your project location, scope and the support you need. We can
            discuss fabrication, installation, infrastructure and technical
            support with you.
          </p>
        </div>
        <a className="button" href={`mailto:${companyContact.email}`}>
          Discuss your project
        </a>
      </section>
    </div>
  );
}
