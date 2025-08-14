import React from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadResume = () => {
    // For GitHub Pages, we need to use the full URL in production
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const baseUrl = isLocalhost 
      ? '' 
      : 'https://surya3345.github.io/My-Portfolio';
      
    const resumeUrl = `${baseUrl}/DODDIPATLA_SURYASAIRAM_FRESHER_RESUME.pdf`;
    
    // Try to open in a new tab first (works on most browsers)
    const newWindow = window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    
    // If the new window was blocked, try the download approach
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      try {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'DODDIPATLA_SURYASAIRAM_RESUME.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // This is needed for Firefox
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      } catch (error) {
        console.error('Error downloading resume:', error);
        // Last resort: direct window location change
        window.location.href = resumeUrl;
      }
    }
  };

  return (
    <section id="home" className="min-h-[70vh] bg-gradient-to-br from-primary-900 via-primary-700 to-teal-600 flex items-center">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-white">
          <div className="mb-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fade-in">
              DODDIPATLA SURYA SAIRAM
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 text-teal-100">
              Java Full-Stack Developer
            </h2>
            <p className="text-sm md:text-base max-w-xl mx-auto mb-4 text-gray-200 leading-relaxed">
              Computer Science graduate with a strong foundation in programming, data structures, and backend development. 
              Passionate about building scalable and efficient software solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a href="#projects" className="btn-primary">
              View My Projects
            </a>
            <button 
              onClick={handleDownloadResume}
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <FaDownload className="text-sm group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block text-white hover:text-teal-200 transition-colors duration-300">
              <FaArrowDown className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
