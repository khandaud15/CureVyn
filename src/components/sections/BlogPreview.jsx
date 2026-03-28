import { useEffect, useState } from 'react';
import { blogPosts } from '../blogData';
import './blog-preview.css';

function BlogPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % blogPosts.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activePost = blogPosts[activeIndex];

  return (
    <section className="blog-preview" id="blog">
      <div className="blog-preview__inner">
        <h2 className="blog-preview__title">Our Blog</h2>

        <article className="blog-preview__card">
          <div className="blog-preview__image-wrap">
            <img
              className="blog-preview__image"
              src={activePost.image}
              alt={activePost.alt}
            />
          </div>

          <div className="blog-preview__content">
            <h3 className="blog-preview__headline">{activePost.title}</h3>
            <p className="blog-preview__summary">
              {activePost.subtitle}. {activePost.summary}
            </p>
            <a
              className="blog-preview__link"
              href={`/blog/${activePost.slug}`}
            >
              Read Article
            </a>
            <div className="blog-preview__dots" aria-hidden="true">
              {blogPosts.map((post, index) => (
                <span
                  key={post.slug}
                  className={`blog-preview__dot ${
                    index === activeIndex ? 'blog-preview__dot--active' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogPreview;
