'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
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
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detects user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  // Rotating course titles
  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4 sm:px-8 lg:px-12 py-16">
      {/* Background Image */}
      {!reducedMotion && (
        <ParallaxProvider>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/home/480421.jpg"
              alt="Educational hero background"
              fill
              className="object-cover object-center scale-100 md:scale-110"
              priority
            />
          </div>
        </ParallaxProvider>
      )}
      {reducedMotion && (
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/480421.jpg"
            alt="Educational hero background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 opacity-50" />

      {/* Hero Content */}
      <div className="z-10 relative w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.9 }}
          className="space-y-6"
        >
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium backdrop-blur-md">
            <Star className="h-4 w-4" />
            Rated 4.9/5 by 2,500+ Students
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
              Master Modern ICT
            </span>
            <span className="block text-white">and Computer Science</span>
          </h1>

          {/* Rotating Course Title */}
          <div className="mt-6 h-[52px] relative flex items-center justify-center">
            {!reducedMotion ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={courses[currentCourseIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg text-yellow-300 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
                >
                  {courses[currentCourseIndex]}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg text-yellow-300 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                {courses[0]}
              </div>
            )}
          </div>

          {/* Call-To-Action Button */}
          <motion.div
            whileHover={reducedMotion ? {} : { scale: 1.06 }}
            whileTap={reducedMotion ? {} : { scale: 0.97 }}
          >
            <Link href="/start-learning-free" passHref>
              <button
                className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 rounded-full text-black font-semibold shadow-lg hover:shadow-xl group focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 text-sm sm:text-base"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-center max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={reducedMotion ? {} : { scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-5 bg-white/5 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="text-3xl font-bold text-yellow-400">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-6 w-full flex justify-center flex-wrap gap-4 sm:gap-5 z-20 px-4">
        {[
          { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-400' },
          { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
          { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
          { icon: Youtube, href: 'https://youtube.com', label: 'Youtube', color: 'hover:text-red-500' },
          { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-300' },
        ].map(({ icon: Icon, href, label, color }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-200 ${color}`}
          >
            <Icon className="h-6 w-6 text-white" />
          </a>
        ))}
      </div>
    </section>
  );
}