import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

function Stats() {
  const stats = [
    { label: 'ML Projects', value: '15+' },
    { label: 'Data Analysis', value: '25+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-lime-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats; 