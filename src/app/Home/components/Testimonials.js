"use client";
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaRegSmileBeam } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Sarah Johnson', 
      role: 'Computer Science Student',
      feedback: 'The personalized mentorship completely transformed my approach to programming. Landed my dream job at Google!',
      image: '/Men.jpg',
      rating: 5,
      company: '/Google__G__logo.png'
    },
    { 
      name: 'Michael Chen', 
      role: 'Data Science Bootcamp Grad',
      feedback: 'Hands-down the best educational investment I\'ve made. The curriculum is top-notch and the instructors are amazing.',
      image: '/Men.jpg',
      rating: 5,
      company: '/Amazon_logo.png'
    },
    { 
      name: 'Priya Kapoor', 
      role: 'UX Design Certificate',
      feedback: 'From complete beginner to job-ready in 6 months. The community support was incredible throughout my journey.',
      image: '/Women.jpg',
      rating: 5,
      company: '/Microsoft.png'
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners who transformed their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-3xl" />
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50">
                <div className="relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-30" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full border-4 border-white shadow-xl object-cover"
                      />
                      <FaRegSmileBeam className="absolute -bottom-2 right-0 text-white bg-purple-500 rounded-full p-1 text-2xl shadow-sm" />
                    </div>
                  </div>

                  <div className="mt-16 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>

                    <div className="relative mb-6">
                      <FaQuoteLeft className="absolute -left-6 -top-4 text-2xl text-blue-400 opacity-30" />
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        {testimonial.feedback}
                      </p>
                      <FaQuoteRight className="absolute -right-6 -bottom-4 text-2xl text-purple-400 opacity-30" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500 mb-4">{testimonial.role}</p>
                    
                    {testimonial.company && (
                      <div className="mt-4 flex justify-center items-center">
                        <span className="text-sm text-gray-500 mr-2">Placed at</span>
                        <Image
                          src={testimonial.company}
                          alt="Company logo"
                          width={80}
                          height={40}
                          className="h-6 w-auto"
                        />
                      </div>
                    )}
                  </div>
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