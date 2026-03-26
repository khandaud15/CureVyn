import { useState } from 'react';
import logo from '../../../Images/CureVyn-Logo2.jpeg';
import './header.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products +', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Blog', href: '#blog' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" id="home">
      <div className="header__main">
        <a className="header__brand" href="#home" aria-label="CureVyn home">
          <img className="header__logo" src={logo} alt="CureVyn logo" />
        </a>

        <button
          className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="header__nav-group">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="header__nav-link"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="header__actions">
            <a className="header__email" href="mailto:Info@curevyn.com">
              Info@curevyn.com
            </a>

            <a className="header__brochure" href="#brochure">
              Download Brochure
            </a>
          </div>

          <div className="header__mobile-actions">
            <a className="header__email" href="mailto:Info@curevyn.com">
              Info@curevyn.com
            </a>
            <a className="header__brochure" href="#brochure">
              Download Brochure
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
