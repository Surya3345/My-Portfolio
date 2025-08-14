import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Backend API System",
      description: "Developed REST APIs for user registration, product listing, cart management, and order processing. Implemented role-based authentication and authorization using Spring Security with JWT. Used Spring Data JPA for database operations and followed layered architecture for clean code separation.",
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce+API",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "JWT", "Spring Security"],
      techIcons: [FaCode, SiSpringboot, FaDatabase, SiMysql],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      duration: "2023-2024"
    },
    {
      id: 2,
      title: "Blogging REST API with Spring Boot",
      description: "Developed RESTful APIs for user registration, post creation, category management, and commenting features using Spring Boot. Implemented JWT-based authentication and role-based access control using Spring Security. Integrated MySQL with Spring Data JPA and validated inputs using Hibernate Validator for clean data handling.",
      image: "https://via.placeholder.com/400x250/14B8A6/FFFFFF?text=Blog+API",
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Spring Security", "Hibernate Validator"],
      techIcons: [FaCode, SiSpringboot, SiMysql, FaDatabase],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      duration: "2023-2024"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backend API development projects showcasing expertise in Java, Spring Boot, and REST API design
          </p>
        </div>

        {/* Main Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tech Icons */}
                  <div className="flex items-center gap-3 mb-4">
                    {project.techIcons.map((Icon, index) => (
                      <Icon key={index} className="text-xl text-gray-600" />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 btn-secondary text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
