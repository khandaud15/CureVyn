import { useEffect, useRef, useState } from 'react';
import { blogPosts } from '../blogData';
import './blog-preview.css';

function BlogPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartYRef = useRef(0);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % blogPosts.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const moveToNext = () => {
    setActiveIndex((current) => (current + 1) % blogPosts.length);
  };

  const moveToPrevious = () => {
    setActiveIndex((current) => (current - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleWheel = (event) => {
    if (wheelLockRef.current || Math.abs(event.deltaY) < 20) {
      return;
    }

    wheelLockRef.current = true;

    if (event.deltaY > 0) {
      moveToNext();
    } else {
      moveToPrevious();
    }

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 700);
  };

  const handleTouchStart = (event) => {
    touchStartYRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    const deltaY = touchStartYRef.current - event.changedTouches[0].clientY;

    if (Math.abs(deltaY) < 30) {
      return;
    }

    if (deltaY > 0) {
      moveToNext();
    } else {
      moveToPrevious();
    }
  };

  const activePost = blogPosts[activeIndex];

  return (
    <section className="blog-preview" id="blog">
      <div className="blog-preview__inner">
        <h2 className="blog-preview__title">Our Blog</h2>

        <article
          className="blog-preview__card"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="blog-preview__stage" key={activePost.slug}>
            <div className="blog-preview__image-wrap">
              <img
                className="blog-preview__image"
                src={activePost.image}
                alt={activePost.alt}
              />
            </div>

            <div className="blog-preview__content">
              <p className="blog-preview__meta">{activePost.date}</p>
              <h3 className="blog-preview__headline">{activePost.title}</h3>
              <p className="blog-preview__subheadline">{activePost.subtitle}</p>
              <p className="blog-preview__summary">{activePost.summary}</p>
              <a className="blog-preview__link" href={`/blog/${activePost.slug}`}>
                Read More <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>

          <div className="blog-preview__rail" aria-hidden="true">
            {blogPosts.map((post, index) => (
              <span
                key={post.slug}
                className={`blog-preview__rail-segment ${
                  index === activeIndex ? 'blog-preview__rail-segment--active' : ''
                }`}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogPreview;
