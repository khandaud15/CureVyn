import { blogPosts } from '../blogData';
import './blog-page.css';

function BlogPage() {
  return (
    <main className="blog-page">
      <div className="blog-page__inner">
        <a className="blog-page__back" href="/">
          Back to Home
        </a>

        <section className="blog-page__hero">
          <p className="blog-page__eyebrow">CureVyn Blog</p>
          <h1 className="blog-page__title">Insights, Quality, and Healthcare Perspective</h1>
          <p className="blog-page__lead">
            Explore CureVyn articles focused on pharmaceutical quality,
            responsible healthcare communication, and market-facing industry insights.
          </p>
        </section>

        <section className="blog-page__grid" aria-label="Blog articles">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-page__card">
              <div className="blog-page__image-wrap">
                <img className="blog-page__image" src={post.image} alt={post.alt} />
              </div>

              <div className="blog-page__content">
                <div className="blog-page__meta">
                  <p className="blog-page__kicker">{post.subtitle}</p>
                  <p className="blog-page__date">{post.date}</p>
                </div>
                <h2 className="blog-page__headline">{post.title}</h2>
                <p className="blog-page__summary">
                  {post.summary} {post.paragraphs[0]}
                </p>
                <a className="blog-page__link" href={`/blog/${post.slug}`}>
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default BlogPage;
