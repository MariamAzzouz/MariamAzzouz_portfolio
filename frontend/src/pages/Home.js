import React from 'react';
import { motion } from 'framer-motion';

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
              <button
                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-full transition-colors duration-200"
                onClick={() => window.location.href = '/projects'}
              >
                View Projects
              </button>
              
              <button
                className="border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-semibold py-2 px-6 rounded-full transition-colors duration-200"
                onClick={async () => {
                  const button = document.activeElement;
                  button.disabled = true;
                  button.textContent = 'Downloading...';
                  
                  try {
                    const response = await fetch(`${apiUrl}/download_cv`, {
                      method: 'GET',
                    });

                    if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = "Mariem_AZZOUZ_CV.pdf";
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                  } catch (error) {
                    console.error("Download error:", error);
                    alert("Failed to download CV. Please try again later.");
                  } finally {
                    button.disabled = false;
                    button.textContent = 'Download CV';
                  }
                }}
              >
                Download CV
              </button>
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