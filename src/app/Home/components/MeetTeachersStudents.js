"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLinkedin, FaTwitter, FaAward } from 'react-icons/fa';

export default function MeetTeachersStudents() {
  const people = [
    { 
      name: 'Mr. Tanjana Chamikara', 
      role: 'Senior Mathematics Instructor',
      bio: '15+ years experience in advanced calculus and algebra',
      image: '/images/home/tanjana-sir-image-1.png',
      subjects: ['Calculus', 'Linear Algebra', 'Statistics'],
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'Ms. Madhara Wedhage', 
      role: 'Physics Specialist',
      bio: 'Quantum mechanics researcher & educator',
      image: '/images/home/madara-miss-image-600-2-1.png',
      subjects: ['Quantum Physics', 'Thermodynamics', 'Astrophysics'],
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'Ms. Udara Dilshani', 
      role: 'Chemistry Professor',
      bio: 'Industrial chemistry expert with 12+ publications',
      image: '/images/home/udara-miss-2.png',
      subjects: ['Organic Chemistry', 'Biochemistry', 'Analytical Chem'],
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'David Wilson', 
      role: 'Computer Science Mentor',
      bio: 'Full-stack developer & AI enthusiast',
      image: '/images/home/Women.jpg',
      subjects: ['Python', 'Machine Learning', 'Web Development'],
      social: { linkedin: '#', twitter: '#' }
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Meet Our Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to shaping future innovators and thinkers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {people.map((person, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-3xl" />
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={128}
                    height={128}
                    className="rounded-full bg-gradient-to-br from-purple-500 to-blue-500object-cover border-4 border-white shadow-xl group-hover:border-purple-100 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 right-0 bg-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center shadow-sm">
                    <FaAward className="mr-2" /> 12y+
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-500 mb-4">{person.role}</p>
                <p className="text-sm text-gray-600 mb-4">{person.bio}</p>

                <div className="mt-4 space-y-3">
                  <div className="text-sm font-medium text-gray-500">Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {person.subjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-center space-x-4">
                  <a href={person.social.linkedin} className="text-gray-400 hover:text-purple-600 transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href={person.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      </div>
    </section>
  );
}