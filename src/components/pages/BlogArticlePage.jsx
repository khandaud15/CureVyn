import { useEffect } from 'react';
import { blogPosts } from '../blogData';
import './blog-article-page.css';

function BlogArticlePage({ post }) {
  const activePost = post ?? blogPosts[0];
  const isExcludedFromSearch =
    activePost.slug === 'building-trust-in-modern-healthcare';

  useEffect(() => {
    if (!isExcludedFromSearch) {
      return undefined;
    }

    const selector = 'meta[name="robots"]';
    const existingMeta = document.head.querySelector(selector);
    const previousContent = existingMeta?.getAttribute('content');
    const robotsMeta = existingMeta || document.createElement('meta');

    if (!existingMeta) {
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute('content', 'noindex, follow');

    return () => {
      if (!existingMeta) {
        robotsMeta.remove();
        return;
      }

      if (previousContent === null) {
        robotsMeta.removeAttribute('content');
      } else {
        robotsMeta.setAttribute('content', previousContent);
      }
    };
  }, [isExcludedFromSearch]);

  return (
    <main className="blog-article-page">
      <div className="blog-article-page__inner">
        <a className="blog-article-page__back" href="/">
          Back to Home
        </a>

        <article className="blog-article-page__article">
          <div className="blog-article-page__hero">
            <img
              className="blog-article-page__image"
              src={activePost.image}
              alt={activePost.alt}
            />
          </div>

          <div className="blog-article-page__content">
            <h1 className="blog-article-page__title">
              {activePost.title}
            </h1>
            <h2 className="blog-article-page__subtitle">
              {activePost.subtitle}
            </h2>

            <div className="blog-article-page__body">
              {activePost.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BlogArticlePage;
