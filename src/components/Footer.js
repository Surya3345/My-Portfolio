import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourprofile",
      name: "LinkedIn"
    },
    {
      icon: FaGithub,
      url: "https://github.com/Surya3345/My-Portfolio",
      name: "GitHub"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      name: "Twitter"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Name
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Java Full Stack Developer passionate about creating innovative 
                web solutions with modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                      title={social.name}
                    >
                      <IconComponent className="text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 your.email@example.com</p>
                <p>📱 +91 12345 67890</p>
                <p>📍 Your City, India</p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Your Name. Made with 
                <FaHeart className="text-red-500 mx-1" /> 
                using React & Tailwind CSS
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-105"
              title="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
