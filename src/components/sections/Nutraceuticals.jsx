import herVitaImage from '../../../Images/CureVyn-HerVita.jpeg';
import ovaCareImage from '../../../Images/CureVyn-OvaCare.jpeg';
import './nutraceuticals.css';

const nutraceuticals = [
  {
    name: 'OvaCare',
    category: 'Women’s Wellness',
    accent: 'rose',
    summary:
      'A focused nutraceutical presentation designed to support women’s health with a more considered wellness positioning.',
    image: ovaCareImage,
    alt: 'OvaCare nutraceutical packaging',
    points: [
      'Women-focused wellness support',
      'Daily nutritional positioning',
      'Premium market presentation',
    ],
    body:
      'OvaCare is positioned for women-centric wellness portfolios where presentation, category clarity, and daily support communication matter in the market.',
  },
  {
    name: 'HerVita',
    category: 'Daily Vitality',
    accent: 'teal',
    summary:
      'A balanced nutraceutical offering developed for everyday vitality, nutritional support, and modern preventive wellness portfolios.',
    image: herVitaImage,
    alt: 'HerVita nutraceutical packaging',
    points: [
      'Daily vitality support',
      'Preventive wellness fit',
      'Strong retail presentation',
    ],
    body:
      'HerVita is designed to sit comfortably within modern preventive wellness ranges, giving the portfolio a more accessible vitality-led nutraceutical presence.',
  },
];

function Nutraceuticals() {
  return (
    <section className="nutraceuticals" id="nutraceuticals">
      <div className="nutraceuticals__inner">
        <div className="nutraceuticals__heading">
          <p className="nutraceuticals__eyebrow">Wellness Portfolio</p>
          <h2 className="nutraceuticals__title">Our Nutraceuticals</h2>
          <p className="nutraceuticals__lead">
            CureVyn&apos;s nutraceutical range is positioned to meet evolving
            wellness demand with stronger product presentation, practical market
            relevance, and consumer-friendly healthcare support.
          </p>
        </div>

        <div className="nutraceuticals__stack">
          {nutraceuticals.map((item, index) => (
            <article
              key={item.name}
              className={`nutraceuticals__feature nutraceuticals__feature--${item.accent} ${
                index % 2 === 1 ? 'nutraceuticals__feature--reverse' : ''
              }`}
            >
              <div className="nutraceuticals__visual">
                <div className="nutraceuticals__visual-shell">
                  <p className="nutraceuticals__visual-label">{item.category}</p>
                </div>
                <div className="nutraceuticals__media">
                  <img
                    className="nutraceuticals__image"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>

              <div className="nutraceuticals__content">
                <p className="nutraceuticals__category">{item.category}</p>
                <h3 className="nutraceuticals__name">{item.name}</h3>
                <p className="nutraceuticals__summary">{item.summary}</p>
                <p className="nutraceuticals__body">{item.body}</p>

                <div className="nutraceuticals__points" aria-label={`${item.name} highlights`}>
                  {item.points.map((point) => (
                    <div key={point} className="nutraceuticals__point">
                      <span className="nutraceuticals__point-dot" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Nutraceuticals;
