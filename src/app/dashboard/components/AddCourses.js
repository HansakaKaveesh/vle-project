"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const courseOptions = [
  {
    id: 1,
    name: "Edexcel ICT IGCSE",
    description: "Comprehensive course covering Edexcel ICT IGCSE syllabus",
    duration: "12 Months",
    instructor: "Ms. Madhara Wedhage",
    level: "Intermediate"
  },
  {
    id: 2,
    name: "Cambridge ICT IGCSE",
    description: "Complete Cambridge ICT curriculum with practical projects",
    duration: "10 Months",
    instructor: "Prof. Michael Chen",
    level: "Foundation"
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
      
      // Reset feedback after 3 seconds
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Enroll in New Course</h2>
        <p className="text-gray-600">Choose from our carefully curated ICT courses</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Course
          </label>
          <div className="space-y-4">
            {courseOptions.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedCourse.id === course.id
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'border border-gray-200 hover:border-blue-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                    <div className="flex gap-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {course.instructor}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {feedback.message && (
          <div
            className={`p-4 rounded-lg flex items-center space-x-3 ${
              feedback.type === 'error'
                ? 'bg-red-50 text-red-800'
                : 'bg-green-50 text-green-800'
            }`}
          >
            {feedback.type === 'error' ? (
              <AlertCircle className="w-5 h-5" />
            ) : (
              <CheckCircle2 className="w-5 h-5" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        <button
          onClick={handleAddCourse}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Enrolling...</span>
            </div>
          ) : (
            'Enroll Now'
          )}
        </button>
      </div>
    </div>
  );
};

export default AddCourse;