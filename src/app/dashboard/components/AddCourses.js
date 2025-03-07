"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, BookOpen, Clock, User, Award, Zap } from "lucide-react";

const courseOptions = [
  {
    id: 1,
    name: "Edexcel ICT IGCSE",
    description: "Master digital literacy and ICT skills through comprehensive curriculum coverage",
    duration: "12 Months",
    instructor: "Ms. Madhara Wedhage",
    level: "Intermediate",
    available: true,
    progress: 10, // Percentage of available slots
    rating: 4.9
  },
  {
    id: 2,
    name: "Cambridge ICT IGCSE",
    description: "Hands-on learning with real-world applications and projects",
    duration: "10 Months",
    instructor: "-",
    level: "Foundation",
    available: false,
    progress: 0, // Course full
    rating: 4.8
  }
];

const AddCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(courseOptions[0]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, message: null });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(JSON.parse(user).username);
    }
  }, []);

  const handleAddCourse = async () => {
    setLoading(true);
    setFeedback({ type: null, message: null });

    try {
      if (!username) throw new Error("Please login to add courses");
      if (!selectedCourse.available) throw new Error("This course is not currently available");
      
      const existingCourses = JSON.parse(localStorage.getItem(`courses_${username}`)) || [];
      
      if (existingCourses.some(course => course.id === selectedCourse.id)) {
        throw new Error(`${selectedCourse.name} is already in your courses`);
      }

      const newCourses = [...existingCourses, selectedCourse];
      localStorage.setItem(`courses_${username}`, JSON.stringify(newCourses));
      
      setFeedback({
        type: 'success',
        message: `${selectedCourse.name} added successfully!`
      });
      
      setTimeout(() => setFeedback({ type: null, message: null }), 3000);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 }
  };

  return (
    <div className="bg-white rounded-2xl  p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Enroll in New Course
        </motion.h2>
        <p className="text-gray-600 text-lg">Transform your ICT skills with expert-led programs</p>
      </div>

      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {courseOptions.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => course.available && setSelectedCourse(course)}
              className={`relative p-6 rounded-xl transition-all ${
                course.available 
                  ? 'cursor-pointer hover:shadow-lg' 
                  : 'opacity-75 cursor-not-allowed'
              } ${
                selectedCourse.id === course.id
                  ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50'
                  : 'bg-gray-50'
              }`}
            >
              {/* Course Header */}
              <div className="flex justify-between items-start mb-4 mt-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-blue-600">
                    ★ {course.rating}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Available slots</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Course Details */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>{course.duration} Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Instructor: {course.instructor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>Level: {course.level}</span>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="absolute top-2 right-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.available
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {course.available ? 'Enrollment Open' : 'Enrollment Closed'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {feedback.message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-lg flex items-center space-x-3 ${
                feedback.type === 'error'
                  ? 'bg-red-50 text-red-800'
                  : 'bg-green-50 text-green-800'
              }`}
            >
              {feedback.type === 'error' ? (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="font-medium">{feedback.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddCourse}
          disabled={loading || !selectedCourse.available}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Enrolling...</span>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span className="text-lg">Enroll Now</span>
              </div>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default AddCourse;