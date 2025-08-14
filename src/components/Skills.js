import React from 'react';
import { 
  FaJava, 
  FaDatabase, 
  FaGitAlt,
  FaCode
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiPostman,
  SiVisualstudiocode
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages and Technologies",
      skills: [
        { name: "Java", icon: FaJava, color: "text-orange-600" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
        { name: "Spring Data JPA", icon: FaDatabase, color: "text-green-500" }
      ]
    },
    {
      title: "Backend API",
      skills: [
        { name: "RESTful API Development", icon: FaDatabase, color: "text-purple-600" },
        { name: "Postman (API Testing)", icon: SiPostman, color: "text-orange-500" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Hibernate", icon: FaDatabase, color: "text-brown-600" },
        { name: "JPA (Java Persistence API)", icon: FaDatabase, color: "text-blue-500" }
      ]
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "DSA", icon: FaCode, color: "text-gray-600" },
        { name: "OOPs", icon: FaCode, color: "text-purple-600" },
        { name: "DBMS", icon: FaDatabase, color: "text-blue-600" },
        { name: "OS", icon: FaCode, color: "text-green-600" },
        { name: "CN", icon: FaCode, color: "text-teal-600" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-red-600" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="card p-4 text-center hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="mb-3">
                        <IconComponent className={`text-2xl mx-auto ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h4 className="font-medium text-gray-800 text-xs">
                        {skill.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;
