import { useEffect, useState } from 'react';
import './cookie-banner.css';

const STORAGE_KEY = 'curevyn-cookie-consent-v4';
const PREFERENCES_KEY = 'curevyn-cookie-preferences-v3';
const FORCE_SHOW_BANNER = false;

const defaultPreferences = {
  necessary: true,
  functional: true,
  performance: true,
  analytics: true,
  advertisement: true,
  others: true,
};

function CookieBanner() {
  const [consent, setConsent] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    if (FORCE_SHOW_BANNER && consent === null) {
      return;
    }

    const storedConsent = window.localStorage.getItem(STORAGE_KEY);
    const storedPreferences = window.localStorage.getItem(PREFERENCES_KEY);
    if (storedConsent) {
      setConsent(storedConsent);
    }
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  const handleChoice = (value) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  const handleClose = () => {
    window.localStorage.setItem(STORAGE_KEY, 'dismissed');
    setConsent('dismissed');
  };

  const handlePreferenceChange = (key) => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const handleSavePreferences = () => {
    const nextPreferences = {
      ...preferences,
      necessary: true,
    };
    window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(nextPreferences));
    window.localStorage.setItem(STORAGE_KEY, 'customized');
    setPreferences(nextPreferences);
    setConsent('customized');
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    const nextPreferences = {
      necessary: true,
      functional: true,
      performance: true,
      analytics: true,
      advertisement: true,
      others: true,
    };
    window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(nextPreferences));
    handleChoice('accepted');
  };

  const handleRejectAll = () => {
    const nextPreferences = {
      necessary: true,
      functional: false,
      performance: false,
      analytics: false,
      advertisement: false,
      others: false,
    };
    window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(nextPreferences));
    handleChoice('rejected');
  };

  if (consent !== null) {
    return null;
  }

  return (
    <>
      <div
        className={`cookie-banner ${isSettingsOpen ? 'cookie-banner--hidden' : ''}`}
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
      >
        <button
          className="cookie-banner__close"
          type="button"
          aria-label="Close cookie banner"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="cookie-banner__content">
          <p className="cookie-banner__title">Cookie Preferences</p>
          <p className="cookie-banner__text">
            We use cookies on our website to give you the most relevant
            experience by remembering your preferences and repeat visits. By
            clicking "Accept", you consent to the use of ALL the cookies.
            However you may visit Cookie Settings to provide a controlled
            consent.
          </p>
          <div className="cookie-banner__links">
            <a className="cookie-banner__link" href="/privacy-policy">
              Read More
            </a>
            <button
              className="cookie-banner__link cookie-banner__link--button"
              type="button"
              onClick={() => setIsSettingsOpen(true)}
            >
              Cookie settings
            </button>
            <div className="cookie-banner__actions">
              <button
                className="cookie-banner__button cookie-banner__button--secondary"
                type="button"
                onClick={handleRejectAll}
              >
                REJECT
              </button>
              <button
                className="cookie-banner__button cookie-banner__button--primary"
                type="button"
                onClick={handleAcceptAll}
              >
                ACCEPT
              </button>
            </div>
          </div>
        </div>
      </div>

      {isSettingsOpen ? (
        <div className="cookie-banner__settings-overlay" role="presentation">
          <div
            className="cookie-banner__settings"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie settings"
          >
            <div className="cookie-banner__settings-head">
              <h2 className="cookie-banner__settings-title">Privacy Overview</h2>
              <button
                className="cookie-banner__settings-close"
                type="button"
                aria-label="Close cookie settings"
                onClick={() => setIsSettingsOpen(false)}
              >
                ×
              </button>
            </div>

            <p className="cookie-banner__settings-intro">
              This website uses cookies to improve your experience while you
              navigate through the website. Out of these, the cookies that are
              categorized as necessary are stored on your browser as they are
              essential for the working of basic functionalities of the website.
              We also use third-party cookies that help us analyze and improve
              our site when you allow analytics and advertisement cookies.
            </p>

            <button className="cookie-banner__show-more" type="button">
              Show more
            </button>

            <div className="cookie-banner__setting-list">
              <div className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Necessary</p>
                </div>
                <span
                  className="cookie-banner__toggle-slider cookie-banner__toggle-slider--on cookie-banner__toggle-slider--locked"
                  aria-label="Necessary cookies always enabled"
                />
              </div>

              <label className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Functional</p>
                </div>
                <span className="cookie-banner__toggle-wrap">
                  <input
                    className="cookie-banner__toggle-input"
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handlePreferenceChange('functional')}
                  />
                  <span
                    className={`cookie-banner__toggle-slider ${
                      preferences.functional ? 'cookie-banner__toggle-slider--on' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Performance</p>
                </div>
                <span className="cookie-banner__toggle-wrap">
                  <input
                    className="cookie-banner__toggle-input"
                    type="checkbox"
                    checked={preferences.performance}
                    onChange={() => handlePreferenceChange('performance')}
                  />
                  <span
                    className={`cookie-banner__toggle-slider ${
                      preferences.performance ? 'cookie-banner__toggle-slider--on' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Analytics</p>
                </div>
                <span className="cookie-banner__toggle-wrap">
                  <input
                    className="cookie-banner__toggle-input"
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                  />
                  <span
                    className={`cookie-banner__toggle-slider ${
                      preferences.analytics ? 'cookie-banner__toggle-slider--on' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Advertisement</p>
                </div>
                <span className="cookie-banner__toggle-wrap">
                  <input
                    className="cookie-banner__toggle-input"
                    type="checkbox"
                    checked={preferences.advertisement}
                    onChange={() => handlePreferenceChange('advertisement')}
                  />
                  <span
                    className={`cookie-banner__toggle-slider ${
                      preferences.advertisement ? 'cookie-banner__toggle-slider--on' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className="cookie-banner__setting">
                <div>
                  <p className="cookie-banner__setting-name">Others</p>
                </div>
                <span className="cookie-banner__toggle-wrap">
                  <input
                    className="cookie-banner__toggle-input"
                    type="checkbox"
                    checked={preferences.others}
                    onChange={() => handlePreferenceChange('others')}
                  />
                  <span
                    className={`cookie-banner__toggle-slider ${
                      preferences.others ? 'cookie-banner__toggle-slider--on' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </label>
            </div>

            <div className="cookie-banner__settings-actions">
              <button
                className="cookie-banner__button cookie-banner__button--primary"
                type="button"
                onClick={handleSavePreferences}
              >
                Save &amp; Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieBanner;
