"use client";
import { motion } from "framer-motion";
import { FaCalculator, FaFlask, FaLandmark, FaCode, FaPalette, FaShoppingCart, FaRocket } from 'react-icons/fa';

export default function OurModules() {
  const modules = [
    {
      name: 'Mathematics',
      description: 'Master advanced concepts from algebra to calculus',
      icon: <FaCalculator className="text-2xl" />,
      lessons: 42,
      level: 'Advanced',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Laboratory Science',
      description: 'Hands-on experiments in chemistry & physics',
      icon: <FaFlask className="text-2xl" />,
      lessons: 35,
      level: 'Intermediate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Code Mastery',
      description: 'Full-stack development & algorithms',
      icon: <FaCode className="text-2xl" />,
      lessons: 58,
      level: 'Expert',
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Digital Arts',
      description: 'Modern design principles & creative expression',
      icon: <FaPalette className="text-2xl" />,
      lessons: 28,
      level: 'Beginner',
      color: 'from-purple-500 to-fuchsia-600'
    },
    {
      name: 'Business Studies',
      description: 'Entrepreneurship & economic strategies',
      icon: <FaShoppingCart className="text-2xl" />,
      lessons: 39,
      level: 'Intermediate',
      color: 'from-teal-500 to-cyan-600'
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Academic Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning paths designed for modern education and professional success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {modules.map((module, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-xl" />
              
              <div className="relative h-full bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50">
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br rounded-2xl opacity-20 blur-lg" />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg`}>
                    {module.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.name}</h3>
                <p className="text-gray-600 mb-5">{module.description}</p>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Lessons</span>
                    <span className="font-semibold">{module.lessons}+</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Difficulty</span>
                    <span className="font-semibold text-blue-600">{module.level}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group-hover:text-blue-600">
                    Explore Module
                    <FaRocket className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      </div>
    </section>
  );
}