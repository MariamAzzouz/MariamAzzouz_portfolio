import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const projects = {
  project1: {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    longDescription: `
      This project is a complete e-commerce solution featuring user authentication,
      product management, shopping cart functionality, and payment integration.
      The platform is built with scalability in mind and follows best practices
      for security and performance.
    `,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    images: [
      "/project1-main.jpg",
      "/project1-dashboard.jpg",
      "/project1-cart.jpg"
    ],
    videoDemo: "https://youtube.com/your-demo-video",
    githubLink: "https://github.com/yourusername/project1",
    liveDemo: "https://your-live-demo.com"
  },
  // Add more projects here
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project Not Found
          </h2>
          <Link 
            to="/projects"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/projects"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group"
        >
          <svg 
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Project Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl opacity-90">
              {project.description}
            </p>
          </div>

          {/* Project Images Carousel */}
          <div className="relative p-8">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-2/3"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About the Project
              </h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo Video */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Demo Video
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src={project.videoDemo}
                    title={`${project.title} Demo Video`}
                    className="w-full h-[300px] rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  View on GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail; 