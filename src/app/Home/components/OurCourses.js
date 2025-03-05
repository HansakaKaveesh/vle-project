"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaBrain, FaChartLine, FaPaintBrush, FaCloud, FaFire } from "react-icons/fa";

export default function OurCourses() {
  const courses = [
    {
      title: "Web Development",
      description: "Master full-stack development with modern frameworks",
      icon: <FaLaptopCode className="text-3xl" />,
      duration: "8 Weeks",
      difficulty: "Intermediate",
      rating: 4.9,
      progress: 75,
      trending: true
    },
    {
      title: "Data Science",
      description: "Transform data into actionable insights",
      icon: <FaDatabase className="text-3xl" />,
      duration: "10 Weeks",
      difficulty: "Advanced",
      rating: 4.8,
      progress: 60,
      trending: true
    },
    {
      title: "Machine Learning",
      description: "Build intelligent systems from scratch",
      icon: <FaBrain className="text-3xl" />,
      duration: "12 Weeks",
      difficulty: "Expert",
      rating: 4.7,
      progress: 45
    },
    {
      title: "Digital Marketing",
      description: "Strategize and optimize online campaigns",
      icon: <FaChartLine className="text-3xl" />,
      duration: "6 Weeks",
      difficulty: "Beginner",
      rating: 4.5,
      progress: 90
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive digital experiences",
      icon: <FaPaintBrush className="text-3xl" />,
      duration: "8 Weeks",
      difficulty: "Intermediate",
      rating: 4.6,
      progress: 30
    },
    {
      title: "Cloud Computing",
      description: "Architect scalable cloud solutions",
      icon: <FaCloud className="text-3xl" />,
      duration: "10 Weeks",
      difficulty: "Advanced",
      rating: 4.7,
      progress: 50
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Explore Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your career with industry-relevant programs and hands-on learning experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                {course.trending && (
                  <div className="absolute top-4 right-4 flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                    <FaFire className="mr-2" /> Trending
                  </div>
                )}
                
                <div className="flex flex-col items-start">
                  <div className="mb-6 relative">
                    <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl -z-10"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="w-full space-y-4 mt-4">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{course.duration}</span>
                      <span>{course.difficulty}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({course.rating})</span>
                    </div>

                    <div className="relative pt-4">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </div>
    </section>
  );
}