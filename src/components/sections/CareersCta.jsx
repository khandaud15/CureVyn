import careerVisual from '../../../Images/career.png';
import './careers-cta.css';

function CareersCta() {
  return (
    <section className="careers-cta" id="careers-cta">
      <div className="careers-cta__inner">
        <div className="careers-cta__content">
          <p className="careers-cta__eyebrow">Careers At CureVyn</p>
          <h2 className="careers-cta__title">Build A Career In High-Trust Healthcare</h2>
          <p className="careers-cta__text">
            Explore career opportunities at CureVyn for professionals who can
            communicate well, build trusted healthcare relationships, and grow
            with a disciplined field-focused team.
          </p>
          <a className="careers-cta__link" href="/careers">
            View Open Positions
          </a>
        </div>

        <a className="careers-cta__visual" href="/careers" aria-label="Open careers page">
          <img
            className="careers-cta__image"
            src={careerVisual}
            alt="Careers at CureVyn"
          />
        </a>
      </div>
    </section>
  );
}

export default CareersCta;
