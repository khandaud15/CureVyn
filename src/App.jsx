import { useEffect, useState } from 'react';
import CookieBanner from './components/common/CookieBanner';
import BlogArticlePage from './components/pages/BlogArticlePage';
import BlogPage from './components/pages/BlogPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import { blogPosts } from './components/blogData';
import BlogPreview from './components/sections/BlogPreview';
import Header from './components/layout/Header';
import CompanyIntro from './components/sections/CompanyIntro';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Nutraceuticals from './components/sections/Nutraceuticals';
import Products from './components/sections/Products';

function App() {
  const [locationState, setLocationState] = useState(() => ({
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
  }));

  useEffect(() => {
    const syncLocation = () =>
      setLocationState({
        pathname: window.location.pathname,
        hash: window.location.hash,
      });

    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);
    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  const { pathname, hash } = locationState;
  const blogPrefix = '/blog/';
  const sectionHashes = new Set(['#home', '#about', '#products', '#blog']);
  const activeBlogPost = pathname.startsWith(blogPrefix)
    ? blogPosts.find((post) => `${blogPrefix}${post.slug}` === pathname)
    : null;
  const isPrivacyPage = pathname === '/privacy-policy';
  const isContactPage = pathname === '/contact-us';
  const isCareersPage = pathname === '/careers';
  const isBlogPage = pathname === '/blog';

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      pathname !== '/' ||
      !sectionHashes.has(hash)
    ) {
      return;
    }

    if (hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionId = hash.slice(1);

    window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [hash, pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  if (activeBlogPost) {
    return <BlogArticlePage post={activeBlogPost} />;
  }

  if (isBlogPage) {
    return (
      <div className="site-shell">
        <Header />
        <BlogPage />
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (isContactPage) {
    return (
      <div className="site-shell">
        <Header />
        <ContactPage />
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (isCareersPage) {
    return (
      <div className="site-shell">
        <Header />
        <CareersPage />
        <Footer />
        <CookieBanner />
      </div>
    );
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
      <Nutraceuticals />
      <BlogPreview />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
