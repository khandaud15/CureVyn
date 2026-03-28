import { useEffect, useState } from 'react';
import heroPrimary from '../../../Images/CureVyn-Hero-1.png';
import heroSecondary from '../../../Images/CureVyn-Hero-2.png';
import './hero.css';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Trusted Pharmaceutical Innovation</p>
          <h1 className="hero__title">
            Advancing healthier lives with dependable{' '}
            <span className="hero__brand-wordmark">
              <span className="hero__brand-wordmark-cure">Cure</span>
              <span className="hero__brand-wordmark-vyn">Vyn</span>
            </span>{' '}
            formulations.
          </h1>
          <p className="hero__text">
            <span className="hero__brand-wordmark">
              <span className="hero__brand-wordmark-cure">Cure</span>
              <span className="hero__brand-wordmark-vyn">Vyn</span>
            </span>{' '}
            delivers patient-focused pharmaceutical products with a strong
            emphasis on quality, consistency, and modern healthcare support.
          </p>

          <div className="hero__actions">
            <a className="hero__primary" href="/#products">
              Explore Products
            </a>
            <a className="hero__secondary" href="/contact-us">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div
            className={`hero__card hero__card--primary ${
              activeSlide === 0 ? 'hero__card--mobile-active' : ''
            }`}
          >
            <img src={heroPrimary} alt="CureVyn healthcare presentation" />
          </div>
          <div
            className={`hero__card hero__card--secondary ${
              activeSlide === 1 ? 'hero__card--mobile-active' : ''
            }`}
          >
            <img src={heroSecondary} alt="CureVyn pharmaceutical product visual" />
          </div>
          <div className="hero__mobile-dots" aria-hidden="true">
            <span
              className={`hero__mobile-dot ${
                activeSlide === 0 ? 'hero__mobile-dot--active' : ''
              }`}
            />
            <span
              className={`hero__mobile-dot ${
                activeSlide === 1 ? 'hero__mobile-dot--active' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
