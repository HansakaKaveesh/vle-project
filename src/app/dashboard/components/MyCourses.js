"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUsername(userData.username);
      const storedCourses = JSON.parse(localStorage.getItem(`courses_${userData.username}`)) || [];
      setCourses(storedCourses);
    }
  }, []);

  const confirmDelete = (courseId) => {
    setCourseToDelete(courseId);
  };

  const cancelDelete = () => {
    setCourseToDelete(null);
  };

  const removeCourse = () => {
    const updatedCourses = courses.filter(course => course.id !== courseToDelete);
    setCourses(updatedCourses);
    localStorage.setItem(`courses_${username}`, JSON.stringify(updatedCourses));
    setCourseToDelete(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">My Learning Journey</h2>
          <Link 
            href="/courses" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Courses
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg 
                className="mx-auto h-24 w-24 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No courses enrolled yet</h3>
              <p className="mt-2 text-gray-500">Start your learning journey by exploring our courses.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      <Link 
                        href={`/course/${course.id}`} 
                        className="hover:text-blue-600 transition-colors"
                      >
                        {course.name}
                      </Link>
                    </h3>
                    {course.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {course.description}
                      </p>
                    )}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg 
                        className="w-5 h-5 mr-2" 
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
                      <span>{course.duration || 'Self-paced'}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {course.instructor || 'Unknown Instructor'}
                    </span>
                    <button
                      onClick={() => confirmDelete(course.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Confirmation Modal */}
        {courseToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Confirm Removal
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to remove this course from your list?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={removeCourse}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove Course
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;