'use client';

import React from 'react';
import { HiCheckCircle } from 'react-icons/hi2';
import { FaFireAlt } from 'react-icons/fa';

export default function IGCSEComputerSciencePage() {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* === Hero Section === */}
      <section
        className="relative text-center mb-16 bg-cover bg-center py-32 px-6 shadow-lg"
        style={{ backgroundImage: "url('/images/courses/IGCSE Computer Science.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg animate-fade-in">
            IGCSE Computer Science
          </h1>
          <p className="text-lg lg:text-xl text-white mt-4 drop-shadow-md animate-fade-in">
            International General Certificate of Secondary Education – Computer Science
          </p>
        </div>
      </section>

      {/* === Course Overview === */}
      <section className="max-w-5xl mx-auto mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Course Overview</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          This course introduces learners to the fundamental principles of computing and problem solving using algorithms and programming. Students gain hands-on experience designing and testing solutions that reflect real-world contexts, while understanding how computer systems work and how they are developed.
        </p>
      </section>

      {/* === Topics Covered === */}
      <section className="max-w-5xl mx-auto mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Topics Covered</h2>
        <ul className="text-gray-700 leading-relaxed space-y-2 text-lg">
          {[
            'Data Representation',
            'Computer Hardware and Software',
            'Networks and the Internet',
            'Algorithms and Flowcharts',
            'Programming Concepts (Python)',
            'Databases and Data Storage',
            'Cybersecurity and Ethics',
            'Software Development Life Cycle',
          ].map((topic, index) => (
            <li key={index} className="flex items-center gap-2">
              <HiCheckCircle className="text-yellow-500" size={20} /> {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* === Pricing Plans === */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Flexible Pricing Plans
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
          {/* === Basic Plan === */}
          <div className="bg-white/80 border border-gray-200 backdrop-blur-lg shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
            <p className="text-5xl font-extrabold text-yellow-500 mb-6">$29</p>
            <ul className="text-gray-700 mb-8 space-y-3 text-left mx-auto max-w-xs">
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Access to lesson materials</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Quizzes & Assignments</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Email support</li>
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition duration-300">
              Choose Basic
            </button>
          </div>

          {/* === Plus Plan (Featured) === */}
          <div className="relative bg-yellow-100 border-2 border-yellow-500 shadow-2xl rounded-2xl p-10 text-center transform scale-105 z-10">
            <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center">
              <span className="inline-flex items-center gap-1 bg-yellow-500 text-white text-xs font-semibold py-1 px-4 rounded-full shadow-sm">
                <FaFireAlt size={14} /> Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Plus</h3>
            <p className="text-5xl font-extrabold text-yellow-500 mb-6">$59</p>
            <ul className="text-gray-800 font-medium space-y-3 text-left mx-auto max-w-xs mb-8">
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Everything in Basic</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Past Paper Practice</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Monthly Live Webinars</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Priority Email Support</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-10 rounded-full transition duration-300">
              Choose Plus
            </button>
          </div>

          {/* === Premium Plan === */}
          <div className="bg-white/80 border border-gray-200 backdrop-blur-lg shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
            <p className="text-5xl font-extrabold text-yellow-500 mb-6">$99</p>
            <ul className="text-gray-700 mb-8 space-y-3 text-left mx-auto max-w-xs">
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Everything in Plus</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> 1-on-1 Tutoring Sessions</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Personalized Study Plans</li>
              <li className="flex items-center gap-2"><HiCheckCircle className="text-yellow-500" /> Certificate of Completion</li>
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition duration-300">
              Choose Premium
            </button>
          </div>
        </div>
      </section>

      {/* === Tutor Section === */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 mb-24">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Meet Your Tutor
        </h2>

        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Tutor Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-300">
              <img
                src="/images/home/madara-miss-image-600-2-1.png"
                alt="Ms. Madara Wedhage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tutor Info */}
          <div className="w-full md:w-2/3 px-6 py-8 md:py-10 md:px-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-2">Ms. Madara Wedhage</h3>
            <p className="text-gray-700 font-medium text-lg mb-3">
              Senior Computer Science Educator • Over 10 Years Teaching Worldwide
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-6 max-w-2xl">
              With a track record of producing top-performing students year after year, Ms. Madara is a dedicated educator skilled in Python, algorithm design, and computer systems theory. Her sessions combine challenging academic content with engaging teaching styles to ensure exam excellence.
            </p>

            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <HiCheckCircle className="text-yellow-500 mt-1 text-lg" />
                <span>Cambridge Certified in Computer Science</span>
              </li>
              <li className="flex items-start gap-3">
                <HiCheckCircle className="text-yellow-500 mt-1 text-lg" />
                <span>Python and Algorithm Expert</span>
              </li>
              <li className="flex items-start gap-3">
                <HiCheckCircle className="text-yellow-500 mt-1 text-lg" />
                <span>Dedicated to logical thinking, code literacy & student confidence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Call to Action === */}
      <section className="text-center mt-24 mb-20 px-6">
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full mb-4 text-sm tracking-wide">
          <FaFireAlt className="text-yellow-500" />
          Join Over 10,000 Students
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-4">
          Start Your Coding Journey Today
        </h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Master algorithms, develop practical problem-solving skills, and ace your exams with our in-depth Computer Science course.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-10 text-lg rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out">
          Enroll Now
        </button>
      </section>
    </main>
  );
}