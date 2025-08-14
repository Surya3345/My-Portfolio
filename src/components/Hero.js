import React from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/DODDIPATLA_SURYASAIRAM_FRESHER_RESUME.pdf';
    link.download = 'DODDIPATLA_SURYASAIRAM_FRESHER_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[70vh] bg-gradient-to-br from-primary-900 via-primary-700 to-teal-600 flex items-center">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-white">
          <div className="mb-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fade-in">
              DODDUPATI A SURYA SAIRAM
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-3 text-teal-100">
              Computer Science Graduate & Backend Developer
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
