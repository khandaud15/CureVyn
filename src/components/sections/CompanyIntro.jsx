import companyDescriptionImage from '../../../Images/company_des.jpg';
import './company-intro.css';

function CompanyIntro() {
  return (
    <section className="company-intro" id="about">
      <div className="company-intro__title-band">
        <div className="company-intro__inner">
          <h2 className="company-intro__title">
            <span className="company-intro__brand">
              <span className="company-intro__brand-cure">Cure</span>
              <span className="company-intro__brand-vyn">Vyn</span>
            </span>{' '}
            Pharmaceutical Pvt. Ltd
          </h2>
        </div>
      </div>

      <div className="company-intro__inner">
        <div className="company-intro__content">
          <div className="company-intro__media">
            <img
              className="company-intro__image"
              src={companyDescriptionImage}
              alt="CureVyn company description"
            />
          </div>

          <div className="company-intro__copy">
            <p className="company-intro__text company-intro__text--desktop">
              CureVyn Pharmaceutical Pvt. Ltd is a quality-focused pharmaceutical
              brand delivering market-relevant healthcare products across India
              and selected global markets. We work with WHO-GMP certified
              manufacturing partners to develop and source high-standard
              formulations with consistency, regulatory compliance, and reliable
              scalability.
            </p>

            <p className="company-intro__text company-intro__text--desktop">
              Our strength lies in combining strategic product selection, trusted
              manufacturing partnerships, and strong brand vision to bring
              premium pharmaceutical and nutraceutical solutions to market.
              CureVyn serves as a dependable bridge between quality production
              and market execution, committed to long-term value through
              integrity, innovation, and trusted partnerships.
            </p>

            <p className="company-intro__text company-intro__text--mobile">
              CureVyn Pharmaceutical Pvt. Ltd is a quality-focused brand
              delivering market-relevant healthcare products through trusted
              WHO-GMP certified manufacturing partnerships.
            </p>

            <p className="company-intro__text company-intro__text--mobile">
              We combine strategic product selection, dependable partnerships,
              and strong brand vision to bring premium pharmaceutical and
              nutraceutical solutions to market with consistency and value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;
