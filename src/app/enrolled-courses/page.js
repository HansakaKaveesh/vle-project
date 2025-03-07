"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, XCircle, ArrowRight, Loader2, AlertTriangle, CheckCircle } from "lucide-react";

const EnrolledCourses = ({ userId }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [removingCourse, setRemovingCourse] = useState(null);
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    fetch(`http://localhost/vle-api/get_courses.php?user_id=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [userId]);

  const handleRemoveCourse = (courseId) => {
    setRemovingCourse(courseId);
    fetch(`http://localhost/vle-api/remove_course.php?user_id=${userId}&course_id=${courseId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCourses(courses.filter((course) => course.id !== courseId));
        }
      })
      .catch(console.error)
      .finally(() => setRemovingCourse(null));
  };

  const handleViewSubject = (subjectId) => {
    router.push(`/subject/${subjectId}`);
  };

  const CourseSkeleton = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
      <div className="flex justify-between gap-4">
        <div className="h-10 bg-gray-200 rounded w-1/2"></div>
        <div className="h-10 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg py-6 px-8 text-white flex flex-col sm:flex-row justify-between items-center rounded-2xl mb-8"
      >
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center sm:justify-start">
            <BookOpen className="mr-3 h-8 w-8" />
            Enrolled Courses
          </h1>
          <p className="text-blue-100">{courses.length} active enrollments</p>
        </div>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-xl transition-all flex items-center group"
        >
          <ArrowRight className="mr-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          Back to Dashboard
        </button>
      </motion.header>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto py-8"
      >
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <CourseSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-xl">
            <AlertTriangle className="mx-auto h-12 w-12 text-red-600 mb-4" />
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.course_name}
                        </h2>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="mr-2 h-4 w-4 text-purple-600" />
                          {new Date(course.enrolled_date).toLocaleDateString()}
                        </div>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          {course.progress || 0}% Completed
                        </span>
                      </div>
                      <div className="relative w-12 h-12">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle
                            className="text-gray-200"
                            strokeWidth="8"
                            stroke="currentColor"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                          />
                          <circle
                            className="text-blue-600"
                            strokeWidth="8"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="40"
                            cx="50"
                            cy="50"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={
                              2 * Math.PI * 40 * (1 - (course.progress || 0) / 100)
                            }
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-blue-600">
                          {course.progress || 0}%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-gray-600 flex items-center">
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                          Subject
                        </span>
                        {course.subject_name}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">
                          Level
                        </span>
                        {course.sub_course_name}
                      </p>
                    </div>

                    <div className="flex justify-between gap-3">
                      <button
                        onClick={() => handleRemoveCourse(course.id)}
                        disabled={removingCourse === course.id}
                        className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg transition-all flex items-center justify-center disabled:opacity-50"
                      >
                        {removingCourse === course.id ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <>
                            <XCircle className="mr-2 h-5 w-5" />
                            Remove
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleViewSubject(course.subject_id)}
                        className="flex-1 bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-lg transition-all flex items-center justify-center"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-xl shadow-lg">
            <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No Enrolled Courses
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by enrolling in your first course!
            </p>
            <button
              onClick={() => router.push("/courses")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        )}
      </motion.main>
    </div>
  );
};

export default EnrolledCourses;