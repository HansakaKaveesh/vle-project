"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TutoringSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative z-10"
        >
          <div className="inline-block bg-purple-100/50 px-6 py-2 rounded-full mb-6">
            <p className="text-sm text-purple-700 font-semibold uppercase tracking-wider">
              Live Online Sessions
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Transform Your Learning with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              1-to-1 Tutoring
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Personalized sessions designed to unlock your full potential. Experience tailored learning with expert educators in real-time.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600">400+</div>
              <div className="text-gray-600 mt-1">Subjects Available</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mt-8">
            <input
              type="text"
              placeholder="Search subjects or tutors..."
              className="w-full px-6 py-4 rounded-xl border-0 ring-2 ring-purple-200 focus:ring-4 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400"
            />
            <button className="absolute right-2 top-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Mathematics", "Computer Science", "Physics", "Languages", "Music", "Test Prep"].map((subject, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md text-sm font-medium cursor-pointer hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
              >
                #{subject}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-tr from-purple-100 to-blue-100 rounded-[4rem] overflow-hidden shadow-2xl transform hover:rotate-1 hover:scale-[1.02] transition-all duration-500 group">
            <Image
              src="/Group-73.jpg"
              alt="Tutoring Session"
              width={600}
              height={600}
              className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700">Live Session</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
    </section>
  );
};

export default TutoringSection;