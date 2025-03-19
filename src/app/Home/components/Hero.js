"use client";
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  const stats = [
    { number: '5K+', label: 'Students Enrolled' },
    { number: '98%', label: 'Pass Rate' },
    { number: '4.9/5', label: 'Student Rating' },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxProvider speed={-20} className="absolute inset-0 -z-10">
        <Image
          src="/images/home/Hero bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="scale-110"
        />
      </ParallaxProvider>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-blue-900 to-cyan-800 opacity-40" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-yellow-400 text-sm font-medium">
            <Star className="w-4 h-4" aria-hidden="true" />
            <span>Rated 4.9/5 by 2,500+ Students</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Master Modern ICT &<br />
            <span className="text-white">Computer Science</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Interactive courses with real-world projects, expert mentorship, and career-ready skills for the digital age.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <button 
              className="group relative inline-flex items-center justify-center px-8 py-4 space-x-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Start Learning Free"
            >
              <span>Start Learning Free</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-ping-slow opacity-0 group-hover:opacity-100" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 backdrop-blur-sm bg-white/5 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type : "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronRight className="w-8 h-8 text-yellow-400 transform rotate-90" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}