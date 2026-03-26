import { blogPosts } from '../blogData';
import './blog-article-page.css';

function BlogArticlePage({ post }) {
  const activePost = post ?? blogPosts[0];

  return (
    <main className="blog-article-page">
      <div className="blog-article-page__inner">
        <a className="blog-article-page__back" href="#home">
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
