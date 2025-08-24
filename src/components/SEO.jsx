import { useEffect } from 'react';

const SEO = ({ 
  title = "Shirshak Mondal - Full Stack Developer & Software Engineer | Portfolio",
  description = "Shirshak Mondal is a skilled Full Stack Developer and Software Engineer specializing in React, Node.js, Python, and modern web technologies. View my projects, skills, and experience.",
  keywords = "Shirshak Mondal, Full Stack Developer, Software Engineer, React Developer, Node.js, Python, JavaScript, Web Developer, Portfolio",
  canonical = "https://portfolioi-shirshak.vercel.app/",
  ogImage = "https://portfolioi-shirshak.vercel.app/og-image.jpg"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonical, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, 'property');
    updateMetaTag('twitter:description', description, 'property');
    updateMetaTag('twitter:image', ogImage, 'property');
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
