// Utility function to handle smooth scrolling to sections
export const scrollToSection = (e, href) => {
  if (e) e.preventDefault();
  
  // Remove the hash if present
  const sectionId = href.startsWith('#') ? href : `#${href}`;
  
  // Check if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1';
  
  if (isDevelopment || isLocalhost) {
    // In development or localhost, use direct scroll
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // In production, handle GitHub Pages routing
    const path = window.location.pathname;
    if (path.endsWith('/')) {
      // If we're at the root, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a subpath, navigate to the root first, then scroll
      window.location.href = `/${sectionId}`;
      
      // Add an event listener to handle the scroll after the page loads
      window.addEventListener('load', () => {
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
};
