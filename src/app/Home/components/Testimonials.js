'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaRegSmileBeam } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonials() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      feedback:
        'The personalized mentorship completely transformed my approach to programming. Landed my dream job at Google!',
      image: '/Men.jpg',
      rating: 5,
      company: '/Google__G__logo.png',
      companyName: 'Google',
    },
    {
      name: 'Michael Chen',
      role: 'Data Science Bootcamp Grad',
      feedback:
        "Hands-down the best educational investment I've made. The curriculum is top-notch and the instructors are amazing.",
      image: '/Men.jpg',
      rating: 5,
      company: '/Amazon_logo.png',
      companyName: 'Amazon',
    },
    {
      name: 'Priya Kapoor',
      role: 'UX Design Certificate',
      feedback:
        'From complete beginner to job-ready in 6 months. The community support was incredible throughout my journey.',
      image: '/Women.jpg',
      rating: 5,
      company: '/Microsoft.png',
      companyName: 'Microsoft',
    },
  ];

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 50 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who transformed their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              {/* Card Glow */}
              {!reduceMotion && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-3xl" />
              )}

              {/* Testimonial Card */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50">
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-30" />
                      <Image
                        src={testimonial.image}
                        alt={`Photo of ${testimonial.name}`}
                        width={64}
                        height={64}
                        className="rounded-full border-4 border-white shadow-xl object-cover"
                      />
                      <FaRegSmileBeam className="absolute -bottom-2 right-0 text-white bg-purple-500 rounded-full p-1 text-2xl shadow-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-16 text-center">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-4" aria-label={`${testimonial.rating} star rating`}>
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className={`w-5 h-5 ${
                            starIndex < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6 text-gray-700 text-base sm:text-lg italic leading-relaxed">
                      <FaQuoteLeft className="absolute -left-6 -top-4 text-2xl text-blue-400 opacity-30" />
                      <blockquote>
                        <p>{testimonial.feedback}</p>
                      </blockquote>
                      <FaQuoteRight className="absolute -right-6 -bottom-4 text-2xl text-purple-400 opacity-30" />
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-3">{testimonial.role}</p>

                    {/* Company */}
                    {testimonial.company && (
                      <div className="mt-2 flex justify-center items-center">
                        <span className="text-xs text-gray-500 mr-2">Placed at</span>
                        <Image
                          src={testimonial.company}
                          alt={`${testimonial.companyName} logo`}
                          width={80}
                          height={40}
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      </div>
    </section>
  );
}