"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddCourse = ({ userId }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const courses = [
    {
      name: "Cambridge",
      subCourses: [
        { name: "IAL", subjects: ["ICT", "CS"] },
        { name: "IGCSE", subjects: ["ICT", "CS"] },
        { name: "GCSE", subjects: ["ICT", "CS"] },
      ],
    },
    {
      name: "Edexcel",
      subCourses: [
        { name: "IAL", subjects: ["ICT", "CS"] },
        { name: "IGCSE", subjects: ["ICT", "CS"] },
        { name: "GCSE", subjects: ["ICT", "CS"] },
      ],
    },
  ];

  const handleSelection = (course, subCourse, subject) => {
    const alreadySelected = selectedCourses.find(
      (item) =>
        item.course === course &&
        item.subCourse === subCourse &&
        item.subject === subject
    );

    if (alreadySelected) {
      setSelectedCourses((prev) =>
        prev.filter(
          (item) =>
            !(
              item.course === course &&
              item.subCourse === subCourse &&
              item.subject === subject
            )
        )
      );
    } else {
      setSelectedCourses((prev) => [...prev, { course, subCourse, subject }]);
    }
  };

  const handleSave = async () => {
    try {
      const promises = selectedCourses.map((course) =>
        fetch("http://localhost/vle-api/save_course.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            user_id: userId,
            course_name: course.course,
            sub_course_name: course.subCourse,
            subject_name: course.subject,
          }),
        })
      );

      await Promise.all(promises);
      setSuccessMessage("Courses added successfully!");
      setSelectedCourses([]);

      setTimeout(() => router.push("/enrolled-courses"), 1500);
    } catch (error) {
      console.error("Error saving courses:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 py-8 px-4">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg py-4 px-8 text-white flex justify-between items-center rounded-xl shadow-md mb-6">
        <h1 className="text-3xl font-bold">Add New Course</h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition ease-in-out duration-300"
        >
          Back to Dashboard
        </button>
      </header>

      <main className="container mx-auto py-8">
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) =>
            course.subCourses.map((subCourse) =>
              subCourse.subjects.map((subject) => {
                const isSelected = selectedCourses.find(
                  (item) =>
                    item.course === course.name &&
                    item.subCourse === subCourse.name &&
                    item.subject === subject
                );

                return (
                  <div
                    key={`${course.name}-${subCourse.name}-${subject}`}
                    onClick={() =>
                      handleSelection(course.name, subCourse.name, subject)
                    }
                    className={`cursor-pointer p-6 rounded-lg shadow-lg transition-transform transform ${
                      isSelected
                        ? "bg-blue-500 text-white scale-105"
                        : "bg-white text-gray-800 hover:bg-blue-100 hover:scale-105"
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{`${course.name} - ${subCourse.name}`}</h3>
                    <p className="text-gray-600">{subject}</p>
                  </div>
                );
              })
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleSave}
            disabled={selectedCourses.length === 0}
            className={`w-full sm:w-auto bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition ease-in-out duration-300 ${
              selectedCourses.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Save Selected Courses
          </button>

          <button
            onClick={() => router.push("/study-materials")}
            className="w-full sm:w-auto bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition ease-in-out duration-300"
          >
            View Study Materials
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
