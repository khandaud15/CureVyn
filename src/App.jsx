import { useEffect, useState } from 'react';
import CookieBanner from './components/common/CookieBanner';
import BlogArticlePage from './components/pages/BlogArticlePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import { blogPosts } from './components/blogData';
import BlogPreview from './components/sections/BlogPreview';
import Header from './components/layout/Header';
import CompanyIntro from './components/sections/CompanyIntro';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';

function App() {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : '',
  );

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const blogPrefix = '#/blog/';
  const activeBlogPost = hash.startsWith(blogPrefix)
    ? blogPosts.find((post) => `${blogPrefix}${post.slug}` === hash)
    : null;
  const isPrivacyPage = hash === '#/privacy-policy';

  if (activeBlogPost) {
    return <BlogArticlePage post={activeBlogPost} />;
  }

  if (isPrivacyPage) {
    return <PrivacyPolicyPage />;
  }

  return (
    <div className="site-shell">
      <Header />
      <Hero />
      <CompanyIntro />
      <Products />
      <BlogPreview />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
