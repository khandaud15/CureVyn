import './privacy-policy-page.css';

function PrivacyPolicyPage() {
  return (
    <main className="privacy-policy-page">
      <div className="privacy-policy-page__inner">
        <a className="privacy-policy-page__back" href="#home">
          Back to Home
        </a>

        <div className="privacy-policy-page__content">
          <h1 className="privacy-policy-page__title">Privacy Policy</h1>
          <p className="privacy-policy-page__lead">
            CureVyn Pharmaceuticals values your privacy and is committed to
            protecting the information you share while using our website.
          </p>

          <section className="privacy-policy-page__section">
            <h2>Information We Collect</h2>
            <p>
              We may collect basic information you provide through contact
              forms, email inquiries, or other interactions with the website.
              We may also collect technical website usage information through
              cookies and similar technologies where applicable.
            </p>
          </section>

          <section className="privacy-policy-page__section">
            <h2>How We Use Information</h2>
            <p>
              Information is used to respond to inquiries, improve website
              performance, maintain security, and provide a better user
              experience. We do not use personal information in a manner
              inconsistent with responsible business practices.
            </p>
          </section>

          <section className="privacy-policy-page__section">
            <h2>Cookies</h2>
            <p>
              Our website may use essential cookies and, where applicable,
              optional cookies for analytics or marketing. You can manage your
              cookie preferences through the cookie settings provided on the
              site.
            </p>
          </section>

          <section className="privacy-policy-page__section">
            <h2>Data Protection</h2>
            <p>
              We take reasonable measures to safeguard website information and
              support secure handling of data. However, no internet-based
              system can be guaranteed as completely risk-free.
            </p>
          </section>

          <section className="privacy-policy-page__section">
            <h2>Contact</h2>
            <p>
              For privacy-related questions, please contact us at
              {' '}
              <a href="mailto:Info@curevyn.com">Info@curevyn.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
