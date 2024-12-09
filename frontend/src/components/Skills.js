import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Machine Learning": [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 90 },
    { name: "Scikit-learn", level: 85 },
    { name: "Neural Networks", level: 88 },
  ],
  "Data Science": [
    { name: "Python", level: 95 },
    { name: "Pandas", level: 92 },
    { name: "NumPy", level: 90 },
    { name: "Data Visualization", level: 88 },
  ],
  "Development": [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Flask", level: 85 },
    { name: "SQL", level: 88 },
  ]
};

function Skills() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in machine learning and data science, with a strong foundation in modern development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-lime-400 to-emerald-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 