import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/surya-sairam-doddipatla-303984225/",
      name: "LinkedIn"
    },
    {
      icon: FaGithub,
      url: "https://github.com/Surya3345",
      name: "GitHub"
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      name: "Twitter"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Surya Sai Ram. All rights reserved.
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm hover:text-primary-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
