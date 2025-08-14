import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCertificate, FaAward, FaStar } from 'react-icons/fa';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "2024",
      description: "Professional certification demonstrating expertise in enterprise application development using Red Hat technologies and industry best practices.",
      image: "https://via.placeholder.com/300x200/EE0000/FFFFFF?text=Red+Hat+Certified",
      credentialId: "RHCEAD-2024-001",
      skills: ["Enterprise Development", "Red Hat Technologies", "Application Architecture"]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained GPA of 8.90/10 throughout Computer Science program",
      icon: FaAward,
      color: "text-yellow-500"
    },
    {
      title: "Research Publication",
      description: "Published research on Cybersecurity Post-COVID threats and strategies",
      icon: FaStar,
      color: "text-primary-500"
    },
    {
      title: "Professional Certification",
      description: "Red Hat Certified Enterprise Application Developer",
      icon: FaCertificate,
      color: "text-teal-500"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and academic achievements that validate my skills and knowledge
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certificates.map((cert) => (
                  <div key={cert.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-primary-50 to-teal-50 p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                          />
                        </div>
                        <div>
                          <div className="flex items-center mb-4">
                            <FaCertificate className="text-2xl text-primary-600 mr-3" />
                            <span className="text-sm text-gray-600 font-medium">{cert.issuer}</span>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {cert.description}
                          </p>
                          <div className="mb-4">
                            <p className="text-sm text-gray-500 mb-2">
                              <strong>Date:</strong> {cert.date} | <strong>ID:</strong> {cert.credentialId}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Academic Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`text-4xl mx-auto ${achievement.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Publications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Research Publications
          </h3>
          <div className="card p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Cybersecurity Post-COVID: Threats and Strategies for Safeguarding the Digital Sphere -Guntur , AP
              </h4>
              <p className="text-sm text-gray-500 mb-3">June 2023 – Aug 2023</p>
              <p className="text-gray-600 mb-4">
                Worked as a team and explored cyberattacks after Covid19. Researched cyber threats, proposed mitigations, and published findings under Ms. Tejaswi Vinnakota's guidance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                  Cybersecurity Research
                </span>
                <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                  Digital Security
                </span>
                <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                  Post-COVID Analysis
                </span>
              </div>
              <div className="mt-4">
                <a 
                  href="/path-to-your-research-certificate.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Research Certificate
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Certificates;
