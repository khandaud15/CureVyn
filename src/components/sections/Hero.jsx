import researchHero from '../../../Images/CureVyn-Research-Hero.png';
import './hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Trusted Pharmaceutical Innovation</p>
          <h1 className="hero__title">
            Healthcare, held to a higher standard.
          </h1>
          <p className="hero__text">
            At{' '}
            <span className="hero__brand-wordmark">
              <span className="hero__brand-wordmark-cure">Cure</span>
              <span className="hero__brand-wordmark-vyn">Vyn</span>
            </span>{' '}
            we shape dependable pharmaceutical and nutraceutical solutions with
            a disciplined focus on quality, consistency, and care.
          </p>

          <div className="hero__actions">
            <a className="hero__primary" href="/#products">
              Explore Products
            </a>
            <a className="hero__secondary" href="/contact-us">
              Partner with us
            </a>
          </div>

          <div className="hero__assurances" aria-label="CureVyn commitments">
            <div className="hero__assurance">
              <span className="hero__assurance-mark" aria-hidden="true">✓</span>
              <span>Quality-led approach</span>
            </div>
            <div className="hero__assurance">
              <span className="hero__assurance-mark" aria-hidden="true">✓</span>
              <span>Patient-focused portfolio</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              src={researchHero}
              alt="Scientist examining a research vial in a modern laboratory"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero__science-note">
            <span className="hero__science-note-kicker">Our focus</span>
            <strong>Quality without compromise.</strong>
            <span>Better healthcare begins with every detail.</span>
          </div>
          <div className="hero__visual-note">
            <span className="hero__visual-note-line" />
            <span>Formulated for confidence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
