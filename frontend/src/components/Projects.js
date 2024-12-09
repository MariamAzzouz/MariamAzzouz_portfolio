import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project",
    image: "/project1.jpg", // Add your image to the public folder
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://project1.com"
  },
  // Add more projects here
];

// Add this to the project card hover effect:
const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

function Projects() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-xl bg-gray-800 transform-gpu"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 