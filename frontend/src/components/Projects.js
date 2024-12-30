import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "3D Customized Avatar Generator",
    description: "This project leverages a Conditional Generative Adversarial Network (cGAN) to generate personalized 3D avatars from 15 body measurements, ensuring high accuracy and detail through advanced AI techniques like Chamfer Distance loss for precise point cloud generation. The system transforms point clouds into meshes for real-time visualization and customization, allowing users to personalize avatars with clothing and features in an interactive 3D interface. It combines AI-driven avatar generation with a robust full-stack web application for a seamless user experience",
    image: "demo avatar.png", // Add your image to the public folder
    technologies: ["CGAN", "Python", "HTML","CSS","JavaScript","Flask","Three.js"],
    githubLink: "https://github.com/MariamAzzouz/3D_Avatar_generation",
    liveLink: "https://drive.google.com/file/d/1EY8mPtBe7fOTJZcE7nMSHl-DYxHX60Ia/view?t=23"
  },
  {
    title: "Movie Recommendation System",
    description: "The Movie Recommender System is a hybrid recommendation platform combining collaborative filtering (based on user preferences) and content-based filtering (analyzing movie metadata using TF-IDF and cosine similarity) to deliver personalized movie suggestions. It integrates Flask for backend logic, SQLite for data storage, and React for a dynamic UI. With features like user authentication, movie search, ratings, and TMDB API integration for rich media content, the system ensures an engaging and tailored user experience.",
    image: "movie demo.png", // Add your image to the public folder
    technologies: ["Flask","React","SQLite","TF-IDF Vectorizer","TMDB API"],
    githubLink: "https://github.com/MariamAzzouz/Movies_recommendation_system",
    //liveLink: ""
  },
  {
    title: "Image deblurring System",
    description: "This project develops an image deblurring solution using a custom U-Net with residual blocks and perceptual loss, trained on the GoPro dataset. It employs advanced preprocessing, data augmentation, and a combined loss function for high-quality restoration.",
    image: "demo_deb.PNG", // Add your image to the public folder
    technologies: ["Python","TensorFlow","U-Net","Perceptual Loss","GoPro Dataset"],
    githubLink: "https://github.com/MariamAzzouz/image_debluring",
    //liveLink: ""
  },
  {
    title: "Text Summarization System",
    description: "This project is an automated text summarization system using the facebook/bart-large-cnn model, fine-tuned on the cnn_dailymail dataset. It generates concise summaries from text or PDFs, enabling efficient document review.",
    //image: "demo_deb.PNG", // Add your image to the public folder
    technologies: ["Python","Hugging Face","Bart-Large-CNN","CNN-DailyMail Dataset"],
    githubLink: "https://github.com/MariamAzzouz/-Text_Summarization",
    //liveLink: ""
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
    <section className="section-padding bg-white dark:bg-gray-700">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 dark:text-gray-200">
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
                <h3 className="text-xl font-bold mb-2 text-gray-100 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-sm"
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
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-300"
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