"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  UsersIcon, 
  GlobeAltIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const AboutUs = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO", social: "@sarahj" },
    { name: "Michael Chen", role: "Lead Developer", social: "@michaelc" },
    { name: "Emma Wilson", role: "Content Director", social: "@emmaw" },
    { name: "David Kim", role: "UX Designer", social: "@davidk" },
  ];

  const stats = [
    { label: "Active Students", value: "50,000+", icon: UserGroupIcon },
    { label: "Courses Available", value: "200+", icon: BookOpenIcon },
    { label: "Expert Instructors", value: "150+", icon: AcademicCapIcon },
    { label: "Countries Reached", value: "120+", icon: GlobeAltIcon },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <SparklesIcon className="absolute -top-6 -right-6 h-16 w-16 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              About <span className="font-black">GenZedu</span>
            </h1>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing education for the digital generation through immersive learning experiences 
            and cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-28">
          {[
            { 
              icon: AcademicCapIcon, 
              title: "Our Mission", 
              content: "Empowering the next generation of learners with accessible, engaging, and transformative educational experiences that bridge the gap between ambition and achievement.",
              color: "from-blue-600 to-purple-600"
            },
            { 
              icon: GlobeAltIcon, 
              title: "Our Vision", 
              content: "Creating a global learning ecosystem where anyone, anywhere can access world-class education and unlock their full potential in an increasingly digital world.",
              color: "from-green-600 to-cyan-500"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`mb-6 p-4 w-fit rounded-2xl bg-gradient-to-r ${item.color}`}>
                <item.icon className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-10 mb-28 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]" />
          <div className="max-w-5xl mx-auto relative">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Transforming <span className="text-yellow-300">Education</span> Globally
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  className="text-center group"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-2xl bg-white bg-opacity-10 backdrop-blur-sm transition-all duration-300 group-hover:bg-opacity-20">
                      <stat.icon className="h-12 w-12 text-white opacity-90 group-hover:opacity-100" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Learner First", 
                icon: UsersIcon, 
                color: "bg-purple-100 text-purple-600",
                description: "Every decision starts with student success. We prioritize personalized learning journeys that adapt to individual needs and aspirations."
              },
              { 
                title: "Innovation Driven", 
                icon: SparklesIcon, 
                color: "bg-amber-100 text-amber-600",
                description: "Constantly pushing boundaries with AI-driven insights, interactive content, and immersive learning experiences."
              },
              { 
                title: "Excellence Obsessed", 
                icon: ChartBarIcon, 
                color: "bg-blue-100 text-blue-600",
                description: "Maintaining world-class standards in curriculum design, instruction quality, and learning outcomes."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`mb-6 w-fit p-4 rounded-xl ${value.color}`}>
                  <value.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Meet the <span className="text-blue-600">Visionaries</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <div className="h-48 w-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 overflow-hidden shadow-xl">
                    <img 
                      src={`https://source.unsplash.com/random/400x400/?person${idx}`}
                      alt={member.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium">
                    {member.social}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-8 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners already accelerating their careers with GenZedu
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;