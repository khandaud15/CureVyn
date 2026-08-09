import everydayCare from '../../../Images/CureVyn-Care-Everyday.png';
import wellnessCare from '../../../Images/CureVyn-Care-Wellness.png';
import qualityCare from '../../../Images/CureVyn-Care-Quality.png';
import './portfolio-of-care.css';

const careAreas = [
  {
    number: '01 / Everyday health',
    title: 'Care for the everyday moments that shape a life.',
    text: 'Health is not only about the exceptional. It is also about the confidence to show up for family, work, and the rituals that make each day feel like your own.',
    image: everydayCare,
    alt: 'Father walking with his daughter in a green neighborhood',
    link: 'Explore our products',
  },
  {
    number: '02 / Women’s wellness',
    title: 'Care designed with women’s wellbeing in mind.',
    text: 'Our wellness portfolio is shaped around modern lives—considered, relevant, and made to support the routines that help people feel their best.',
    image: wellnessCare,
    alt: 'Woman beginning her day in a serene home',
    link: 'Discover nutraceuticals',
  },
  {
    number: '03 / Quality & trust',
    title: 'Care begins long before a product reaches a person.',
    text: 'We bring focus to every formulation and every partnership—because quality, consistency, and responsible care belong at the heart of healthcare.',
    image: qualityCare,
    alt: 'Quality specialist reviewing a vial in a modern laboratory',
    link: 'About CureVyn',
  },
];

function PortfolioOfCare() {
  return (
    <section className="portfolio-care" aria-labelledby="portfolio-care-title">
      <div className="portfolio-care__inner">
        <div className="portfolio-care__heading">
          <div>
            <p className="portfolio-care__eyebrow">CureVyn care continuum</p>
            <h2 id="portfolio-care-title">Care belongs<br />in every story.</h2>
          </div>
          <p>
            We connect quality healthcare with the real lives it is made for—
            through thoughtful portfolios, trusted partnerships, and a clear
            focus on what matters.
          </p>
        </div>

        <div className="portfolio-care__stories">
          {careAreas.map((area, index) => (
            <article key={area.number} className={`portfolio-care__story ${index % 2 === 1 ? 'portfolio-care__story--reverse' : ''}`}>
              <div className="portfolio-care__media">
                <img src={area.image} alt={area.alt} loading="lazy" />
                <span className="portfolio-care__media-line" aria-hidden="true" />
              </div>
              <div className="portfolio-care__story-copy">
                <p className="portfolio-care__number">{area.number}</p>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <a href={index === 1 ? '/#nutraceuticals' : index === 2 ? '/#about' : '/#products'}>{area.link} <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioOfCare;
