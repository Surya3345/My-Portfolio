import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, education, and professional experience
          </p>
        </div>

        {/* Profile Image - Centered */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={`${process.env.PUBLIC_URL}/Passportsize_Photo.png`} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Error loading profile image:', e);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
              <FaGraduationCap className="text-lg text-white" />
            </div>
          </div>
        </div>

        {/* About Content - Full Width */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Computer Science graduate with a strong foundation in programming, data structures, and backend development. 
              Passionate about building scalable and efficient software solutions, with a keen interest in learning new 
              technologies and contributing to impactful projects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I have hands-on experience with Java, Spring Boot, Spring Data JPA, and modern web technologies. 
              My academic projects include developing REST APIs for user registration, product management, and 
              implementing role-based authentication systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a strong problem-solving mindset and self-motivated learner, I'm comfortable in both production 
              and support environments, with good communication and collaboration skills.
            </p>
          </div>
        </div>

        {/* Education Only */}
        <div className="card p-8">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-2xl text-primary-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
          </div>
          <p className="text-gray-600">
            <strong>Koneru Lakshmaiah University</strong><br />
            B.Tech in Computer Science and Engineering<br />
            <span className="text-sm text-gray-500">Sept 2021 - May 2025</span><br />
            <span className="text-sm text-gray-500">GPA: 8.90/10</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
