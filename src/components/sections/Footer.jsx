import logo from '../../../Images/CureVyn-Logo2.jpeg';
import './footer.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Career', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

const productLinks = [
  { label: 'Third Party Product', href: '/#products' },
  { label: 'PCD Product', href: '/#products' },
  { label: 'Export Product', href: '/#products' },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18v-2h-2V9h-4V6h-4V3H7v6H3v12Zm6-16h2v2H9V5Zm-4 6h2v8H5v-8Zm4-2h2v10H9V9Zm4-1h2v11h-2V8Zm-7 4h1v2H6v-2Zm0 4h1v2H6v-2Zm4-4h1v2h-1v-2Zm0 4h1v2h-1v-2Zm4-2h1v2h-1v-2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.26.55 3.46.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.36.55 3.46a1 1 0 0 1-.25 1l-2.2 2.34Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V8H4Zm16 8V10.6l-7.46 4.85a1 1 0 0 1-1.08 0L4 10.6V16h16Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.87.24-1.46 1.48-1.46H16.4V5.1c-.26-.03-1.14-.1-2.17-.1-2.15 0-3.63 1.31-3.63 3.72V11H8.2v3h2.4v7h2.9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 7.27a1.71 1.71 0 1 0 0-3.42 1.71 1.71 0 0 0 0 3.42ZM20 20v-6.28c0-3.36-1.79-4.92-4.18-4.92-1.93 0-2.79 1.06-3.27 1.8V8.5H9.6c.04 1.39 0 11.5 0 11.5h2.95v-6.42c0-.34.02-.68.12-.92.27-.68.9-1.38 1.96-1.38 1.38 0 1.93 1.04 1.93 2.57V20H20Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2H22l-6.76 7.73L23 22h-6.08l-4.76-6.23L6.7 22H3.6l7.24-8.27L1 2h6.23l4.3 5.68L18.9 2Zm-1.07 18h1.69L6.3 3.9H4.48L17.83 20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.35 1.65a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__column footer__column--brand">
          <a className="footer__brand" href="/" aria-label="CureVyn home">
            <img className="footer__logo" src={logo} alt="CureVyn logo" />
          </a>
          <p className="footer__tagline">
            Trusted formulations, reliable healthcare support, and a stronger
            commitment to better everyday wellness.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Quick Links</h3>
          <div className="footer__links">
            {quickLinks.map((item) => (
              <a key={item.label} className="footer__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Our Products</h3>
          <div className="footer__links">
            {productLinks.map((item) => (
              <a key={item.label} className="footer__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Connect With Us</h3>
          <div className="footer__contact-list">
            <div className="footer__contact-row">
              <span className="footer__icon">
                <BuildingIcon />
              </span>
              <p className="footer__contact">
                1/1 Abubakarpur, Phase 3, Nyay Nagar, Dhoomanganj, Prayagraj,
                211011
              </p>
            </div>
            <a className="footer__contact-row footer__contact-link" href="tel:+919451517351">
              <span className="footer__icon">
                <PhoneIcon />
              </span>
              <span className="footer__contact-stack">
                <span className="footer__link-text">Mohd Shadab Khan</span>
                <span className="footer__subtext">+91 9451517351</span>
              </span>
            </a>
            <a className="footer__contact-row footer__contact-link" href="mailto:Info@Curevyn.com">
              <span className="footer__icon">
                <MailIcon />
              </span>
              <span className="footer__link-text">Info@Curevyn.com</span>
            </a>
          </div>
        </div>
      </div>

        <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__social-block">
            <div className="footer__social-heading">
              <span className="footer__social-text">Let&apos;s get social</span>
            </div>
            <div className="footer__socials" aria-label="Social media links">
              <a className="footer__social footer__social--facebook" href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className="footer__social footer__social--linkedin" href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="footer__social footer__social--twitter" href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a className="footer__social footer__social--instagram" href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <p className="footer__copyright">
            Copyright {year} CureVyn. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
