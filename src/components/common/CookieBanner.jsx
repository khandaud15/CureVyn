import { useEffect, useState } from 'react';
import './cookie-banner.css';

const STORAGE_KEY = 'curevyn-cookie-consent';

function CookieBanner() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(STORAGE_KEY);
    if (storedConsent) {
      setConsent(storedConsent);
    }
  }, []);

  const handleChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  if (consent !== null) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <p className="cookie-banner__title">Cookie Preferences</p>
        <p className="cookie-banner__text">
          We use essential cookies to keep the site working and optional cookies to understand usage and improve the experience.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button
          className="cookie-banner__button cookie-banner__button--secondary"
          type="button"
          onClick={() => handleChoice('rejected')}
        >
          Reject
        </button>
        <button
          className="cookie-banner__button cookie-banner__button--primary"
          type="button"
          onClick={() => handleChoice('accepted')}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
