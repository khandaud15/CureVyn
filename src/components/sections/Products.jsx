import product52 from '../../../Images/CureVyn-52.jpeg';
import product650 from '../../../Images/CureVyn-650.jpeg';
import productIbuprophen from '../../../Images/CureVyn-Ibuprophen.jpeg';
import productDsr from '../../../Images/CureVyn-DSR.jpeg';
import './products.css';

const products = [
  {
    title: 'CureVyn-52',
    category: 'Liver Support',
    summary: 'Daily wellness support formulation',
    image: product52,
    alt: 'CureVyn-52 product packaging',
  },
  {
    title: 'CureVyn-650',
    category: 'Pain Relief',
    summary: 'High-strength tablet presentation',
    image: product650,
    alt: 'CureVyn-650 product packaging',
  },
  {
    title: 'CureVyn-Ibuprophen',
    category: 'Anti-Inflammatory',
    summary: 'Targeted relief and recovery care',
    image: productIbuprophen,
    alt: 'CureVyn-Ibuprophen product packaging',
  },
  {
    title: 'CureVyn-DSR',
    category: 'Gastro Care',
    summary: 'Advanced digestive support format',
    image: productDsr,
    alt: 'CureVyn-DSR product packaging',
  },
];

function Products() {
  return (
    <section className="products" id="products">
      <div className="products__inner">
        <h2 className="products__title">Our Products</h2>
        <div className="products__grid">
          {products.map((product) => (
            <article
              key={product.title}
              className={`products__card ${
                product.title === 'CureVyn-52' ||
                product.title === 'CureVyn-650' ||
                product.title === 'CureVyn-Ibuprophen' ||
                product.title === 'CureVyn-DSR'
                  ? 'products__card--featured-size'
                  : ''
              }`}
            >
              <div className="products__meta">
                <p className="products__category">{product.category}</p>
                <h3 className="products__name">{product.title}</h3>
                <p className="products__summary">{product.summary}</p>
              </div>

              <div className="products__image-wrap">
                <img
                  className="products__image"
                  src={product.image}
                  alt={product.alt}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
