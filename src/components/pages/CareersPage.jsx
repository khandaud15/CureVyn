import careerVisual from '../../../Images/career.png';
import './careers-page.css';

function CareersPage() {
  return (
    <main className="careers-page">
      <div className="careers-page__inner">
        <a className="careers-page__back" href="/">
          Back to Home
        </a>

        <section className="careers-page__hero">
          <div className="careers-page__hero-media">
            <img
              className="careers-page__hero-image"
              src={careerVisual}
              alt="Careers at CureVyn"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default CareersPage;
