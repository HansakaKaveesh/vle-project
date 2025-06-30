'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const courses = [
    'IGCSE ICT',
    'IAL AS ICT',
    'IAL AS2 ICT',
    'IGCSE Computer Science',
  ];
  const stats = [
    { number: '5K+', label: 'Students Enrolled' },
    { number: '98%', label: 'Pass Rate' },
    { number: '4.9/5', label: 'Student Rating' },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Background with Parallax */}
      <ParallaxProvider>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/480421.jpg"
            alt="Educational hero background"
            fill
            className="object-cover object-center scale-110"
            priority
          />
        </div>
      </ParallaxProvider>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 opacity-50" />

      {/* Hero Content */}
      <div className="z-10 relative px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium backdrop-blur-md animate-fade-in">
            <Star className="h-4 w-4" />
            Rated 4.9/5 by 2,500+ Students
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
              Master Modern ICT
            </span>
            <span className="block text-white">and Computer Science</span>
          </h1>

          {/* 🔁 Rotating Course Text with Animated Background */}
          <div className="mt-6 h-[52px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={courses[currentCourseIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg text-yellow-300 text-lg sm:text-xl md:text-2xl font-semibold"
              >
                {courses[currentCourseIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
            <Link href="/start-learning-free" passHref>
              <button
                className="relative inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 rounded-full text-black font-semibold shadow-lg hover:shadow-xl group focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
                aria-label="Start Learning for Free"
              >
                <span>Start Learning Free</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-full border-2 border-yellow-400/30 group-hover:opacity-100 opacity-0 animate-ping-slow pointer-events-none" />
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-5 bg-white/5 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 🌐 Social Media Icons */}
      <div className="absolute bottom-6 w-full flex justify-center gap-5 z-20">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-6 w-6 text-white hover:text-blue-400 transition duration-200" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="h-6 w-6 text-white hover:text-sky-400 transition duration-200" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-6 w-6 text-white hover:text-pink-400 transition duration-200" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-6 w-6 text-white hover:text-red-500 transition duration-200" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-6 w-6 text-white hover:text-blue-300 transition duration-200" />
        </a>
      </div>

    </section>
  );
}