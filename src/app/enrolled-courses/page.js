"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use this for navigation

const EnrolledCourses = ({ userId }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch enrolled courses from the PHP backend
    fetch(`http://localhost/vle-api/get_courses.php?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, [userId]);

  const handleRemoveCourse = (courseId) => {
    // Remove course via an API call
    fetch(`http://localhost/vle-api/remove_course.php?user_id=${userId}&course_id=${courseId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Remove the course from state if successful
          setCourses(courses.filter((course) => course.id !== courseId));
        } else {
          console.error("Failed to remove course.");
        }
      })
      .catch((error) => {
        console.error("Error removing course:", error);
      });
  };

  const handleViewSubject = (subjectId) => {
    // Redirect to the subject details page
    router.push(`/subject/${subjectId}`);
  };

  if (loading) {
    return <p className="text-center text-xl font-semibold text-gray-600">Loading enrolled courses...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 py-8 px-4">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 shadow-lg py-6 px-8 text-white flex justify-between items-center rounded-xl shadow-md mb-6">
        <h1 className="text-3xl font-bold text-shadow-lg">Enrolled Courses</h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-white text-green-600 font-medium py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105"
        >
          Back to Dashboard
        </button>
      </header>

      <main className="container mx-auto py-8">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  {/* Grid layout for courses */}
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <h2 className="text-xl font-semibold text-gray-800">{course.course_name}</h2>
                <p className="text-gray-600 mt-2">{course.sub_course_name}</p>
                <p className="text-gray-500">{course.subject_name}</p>
                <p className="text-sm text-gray-400 mt-4">
                  Enrolled on: {new Date(course.enrolled_date).toLocaleString()}
                </p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleRemoveCourse(course.id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                  >
                    Remove Course
                  </button>
                  <button
                    onClick={() => handleViewSubject(course.subject_id)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Subject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-700">No courses enrolled yet.</p>
        )}
      </main>
    </div>
  );
};

export default EnrolledCourses;

// Example usage: Replace `userId` with the current logged-in user ID
// <EnrolledCourses userId={1} />
