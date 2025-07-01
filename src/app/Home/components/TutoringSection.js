'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TutoringSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const subjects = [
    { name: 'IGCSE ICT', slug: 'igcse-ict' },
    { name: 'IAL AS ICT', slug: 'ial-as-ict' },
    { name: 'IAL AS2 ICT', slug: 'ial-as2-ict' },
    { name: 'IGCSE Computer Science', slug: 'igcse-computer-science' },
  ];

  const tutors = [
    { name: 'Ms. Madhara', slug: 'ms-madhara' },
    { name: 'Ms. Johnson', slug: 'ms-johnson' },
    { name: 'Dr. Khan', slug: 'dr-khan' },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigateToSubject = (slug) => {
    router.push(`/subjects/${slug}`);
    setIsDropdownVisible(false);
    setSearchTerm('');
  };

  const navigateToTutor = (slug) => {
    router.push(`/tutors/${slug}`);
    setIsDropdownVisible(false);
    setSearchTerm('');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (filteredSubjects.length > 0) {
        navigateToSubject(filteredSubjects[0].slug);
      } else if (filteredTutors.length > 0) {
        navigateToTutor(filteredTutors[0].slug);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block bg-purple-100/50 px-6 py-2 rounded-full mb-4">
            <p className="text-sm sm:text-base text-purple-700 font-semibold uppercase tracking-wider">
              Live Online Sessions
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Unlock Learning with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Expert Tutors
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Personalized tutoring sessions for students and professionals to
            excel with confidence.
          </p>

          {/* Search Input */}
          <div className="relative mt-6" ref={dropdownRef}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search subjects or tutors..."
              className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl border-0 ring-2 ring-purple-200 focus:ring-4 focus:ring-purple-500 placeholder-gray-400 text-sm sm:text-base transition-all duration-300"
            />
            {searchTerm && isDropdownVisible && (
              <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-auto divide-y">
                {filteredSubjects.length > 0 && (
                  <div className="p-3">
                    <p className="text-sm font-bold text-purple-600 mb-2">
                      Subjects
                    </p>
                    {filteredSubjects.map((subject, index) => (
                      <div
                        key={`subject-${index}`}
                        className="px-4 py-3 hover:bg-purple-100 cursor-pointer text-gray-800 font-medium transition rounded-lg"
                        onClick={() => navigateToSubject(subject.slug)}
                      >
                        {subject.name}
                      </div>
                    ))}
                  </div>
                )}
                {filteredTutors.length > 0 && (
                  <div className="p-3">
                    <p className="text-sm font-bold text-blue-600 mb-2">
                      Tutors
                    </p>
                    {filteredTutors.map((tutor, index) => (
                      <div
                        key={`tutor-${index}`}
                        className="px-4 py-3 hover:bg-blue-100 cursor-pointer text-gray-800 font-medium transition rounded-lg"
                        onClick={() => navigateToTutor(tutor.slug)}
                      >
                        {tutor.name}
                      </div>
                    ))}
                  </div>
                )}
                {filteredSubjects.length === 0 && filteredTutors.length === 0 && (
                  <div className="px-4 py-4 text-center text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hashtags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {subjects.map((subject, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSearchTerm(subject.name);
                  setIsDropdownVisible(true);
                }}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md text-sm font-medium cursor-pointer hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
              >
                #{subject.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-tr from-purple-100 to-blue-100 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-1 hover:scale-[1.02] transition-all duration-500 group">
            <Image
              src="/Group-73.jpg"
              alt="Tutoring Session"
              width={600}
              height={600}
              className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500 animate-fade-in"
            />
            <div className="absolute bottom-6 left-6 bg-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold text-gray-700 text-sm">Live Session</span>
            </div>
          </div>

          {/* Background Circles */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-purple-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-16 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
    </section>
  );
};

export default TutoringSection;
