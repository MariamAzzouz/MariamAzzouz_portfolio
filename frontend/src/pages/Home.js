import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function Home() {
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log("API URL:", apiUrl);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-lime-400/10 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-gray-400 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Mariam
              <span className="block text-lime-400 mt-2">
                AI & Data Scientist
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming complex data into actionable insights through 
              machine learning and artificial intelligence solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            > 
              
              <Link to="/projects">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => console.log('View Projects button clicked')}
                >
                  View Projects
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  console.log("Button clicked");
                  console.log("Attempting to download from:", `${apiUrl}/download_cv`);
                  try {
                    fetch(`${apiUrl}/download_cv`)
                      .then(response => {
                        console.log("Response:", response);
                        if (!response.ok) {
                          throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.blob();
                      })
                      .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = "Mariem_AZZOUZ_CV.pdf";
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                      })
                      .catch(error => {
                        console.error("Download error:", error);
                      });
                  } catch (error) {
                    console.error("Fetch error:", error);
                  }
                }}
              >
                Download CV
              </Button>

            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-lime-400/20">
              <img
                src="/your-image.jpg" // Add your image here
                alt="Mariam"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home; 