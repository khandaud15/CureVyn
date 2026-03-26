import './company-intro.css';

function CompanyIntro() {
  return (
    <section className="company-intro" id="about">
      <div className="company-intro__inner">
        <h2 className="company-intro__title">
          <span className="company-intro__brand">
            <span className="company-intro__brand-cure">Cure</span>
            <span className="company-intro__brand-vyn">Vyn</span>
          </span>{' '}
          Pharmaceutical Pvt. Ltd
        </h2>

        <div className="company-intro__content">
          <p className="company-intro__text company-intro__text--desktop">
            CureVyn Pharmaceutical Pvt. Ltd is a quality-focused pharmaceutical
            brand dedicated to delivering differentiated, market-relevant
            healthcare products across India and selected global markets. We
            work closely with WHO-GMP certified manufacturing partners to
            develop and source high-standard formulations, ensuring consistency,
            regulatory compliance, and reliable scalability without compromising
            on quality.
          </p>

          <p className="company-intro__text company-intro__text--desktop">
            Our strength lies in combining strategic product selection, trusted
            manufacturing partnerships, and strong brand vision to bring premium
            pharmaceutical and nutraceutical solutions to market. CureVyn acts
            as a dependable bridge between quality production and market
            execution, committed to building long-term value through integrity,
            innovation, and trusted partnerships.
          </p>

          <p className="company-intro__text company-intro__text--mobile">
            CureVyn Pharmaceutical Pvt. Ltd is a quality-focused pharmaceutical
            brand delivering market-relevant healthcare products across India
            and selected global markets through trusted WHO-GMP certified
            manufacturing partnerships.
          </p>

          <p className="company-intro__text company-intro__text--mobile">
            We combine strategic product selection, dependable production
            partnerships, and strong brand vision to bring premium
            pharmaceutical and nutraceutical solutions to market with
            consistency, compliance, and long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;
