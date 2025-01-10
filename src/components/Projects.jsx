import React from 'react'
import ecommerceImage from "../asset/images/E-commerce-Website.jpg"
import votingImage from "../asset/images/evoting.jpg"
import portfolio from "../asset/images/MAIN@1x.png"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A frontend e-commerce web solution with seamless API integration for product management, user authentication, and order processing.",
    image: ecommerceImage, 
    technologies: ["React", "Tailwind CSS"],
    // codeLink: "#", 
    // demoLink: "#", 
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects, skills, and achievements using modern frontend technologies.",
    image: portfolio, 
    technologies: ["HTML", "CSS", "JavaScript"],
    // codeLink: "#",
    // demoLink: "#",
  },
  {
    id: 3,
    title: "E-voting System",
    description: "A secure and scalable E-voting system built using C#, WinForms, and SQL Server for real-time vote management and result analysis.",
    image: votingImage, 
    technologies: ["C#", "WinForms", "SQL Server"],
    // codeLink: "#", 
    // demoLink: "#", 
  }
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="text-custom hover:text-custom-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="text-custom hover:text-custom-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  )
}
