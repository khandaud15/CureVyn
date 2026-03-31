import { useState } from 'react';
import contactVisual from '../../../Images/Contact.png';
import './contact-page.css';

const INITIAL_FORM = {
  name: '',
  organization: '',
  phone: '',
  email: '',
  country: '',
  subject: '',
  message: '',
  consent: false,
};

function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.organization,
          phone: formData.phone,
          email: formData.email,
          country: formData.country,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setIsSubmitted(false);
      setSubmitError('Unable to send your query right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-page__inner">
        <a className="contact-page__back" href="/">
          Back to Home
        </a>

        <section className="contact-page__hero">
          <div className="contact-page__hero-media">
            <img
              className="contact-page__hero-image"
              src={contactVisual}
              alt="Contact CureVyn"
            />
          </div>
          <h1 className="contact-page__title">Get In Touch</h1>
          <p className="contact-page__lead">
            Reach out for product inquiries, distribution discussions, general
            business communication, or support requests. Our team will connect
            with you as quickly as possible.
          </p>
        </section>

        <section className="contact-page__email-showcase">
          <p className="contact-page__showcase-title">Write to us</p>
          <div className="contact-page__email-grid">
            <article className="contact-page__email-card">
              <h2 className="contact-page__email-heading">Enquiries</h2>
              <a className="contact-page__email-link" href="mailto:info@curevyn.com">
                info@curevyn.com
              </a>
            </article>

            <article className="contact-page__email-card">
              <h2 className="contact-page__email-heading">Sales Enquiry</h2>
              <a className="contact-page__email-link" href="mailto:sales@curevyn.com">
                sales@curevyn.com
              </a>
            </article>

            <article className="contact-page__email-card">
              <h2 className="contact-page__email-heading">Careers</h2>
              <a className="contact-page__email-link" href="mailto:careers@curevyn.com">
                careers@curevyn.com
              </a>
            </article>
          </div>
        </section>

        <section className="contact-page__layout">
          <div className="contact-page__panel">
            <h2 className="contact-page__panel-title">Send a Query</h2>
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__field-grid">
                <label className="contact-page__field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="contact-page__field">
                  <span>Organization</span>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contact-page__field-grid">
                <label className="contact-page__field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="contact-page__field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contact-page__field-grid">
                <label className="contact-page__field">
                  <span>Country</span>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select country *
                    </option>
                    <option value="india">India</option>
                    <option value="united-states">United States</option>
                    <option value="united-kingdom">United Kingdom</option>
                    <option value="united-arab-emirates">United Arab Emirates</option>
                    <option value="saudi-arabia">Saudi Arabia</option>
                    <option value="qatar">Qatar</option>
                    <option value="oman">Oman</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="nepal">Nepal</option>
                    <option value="sri-lanka">Sri Lanka</option>
                    <option value="myanmar">Myanmar</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="philippines">Philippines</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="singapore">Singapore</option>
                    <option value="south-africa">South Africa</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="kenya">Kenya</option>
                    <option value="ghana">Ghana</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="uganda">Uganda</option>
                    <option value="brazil">Brazil</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="contact-page__field">
                  <span>Subject</span>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select subject *
                    </option>
                    <option value="general-enquiry">General Enquiry</option>
                    <option value="product-enquiry">Product Enquiry</option>
                    <option value="pcd-distributorship">PCD / Distributorship</option>
                    <option value="third-party-manufacturing">Third Party Manufacturing</option>
                    <option value="export-business">Export Business</option>
                    <option value="partnership-collaboration">Partnership / Collaboration</option>
                    <option value="career-opportunities">Career Opportunities</option>
                    <option value="customer-support">Customer Support</option>
                  </select>
                </label>
              </div>

              <label className="contact-page__field">
                <span>Message</span>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your query here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="contact-page__consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I agree and accept the <a href="/privacy-policy">Privacy Policy</a> and the{' '}
                  Terms of use of this website *
                </span>
              </label>

              <button className="contact-page__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Query'}
              </button>

              {isSubmitted ? (
                <p className="contact-page__success">
                  Your query has been sent successfully. Our team will connect with you shortly.
                </p>
              ) : null}

              {submitError ? (
                <p className="contact-page__error">{submitError}</p>
              ) : null}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
