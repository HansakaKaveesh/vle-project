"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import AddCourses from "./components/AddCourses";
import MyCourses from "./components/MyCourses";

const Dashboard = () => {
  const [username, setUsername] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      try {
        const userData = JSON.parse(user);
        setUsername(userData.username);
        setUserRole(userData.role);

        // Load courses specific to this user
        const storedCourses = JSON.parse(localStorage.getItem(`courses_${userData.username}`)) || [];
        setCourses(storedCourses);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        router.push("/login");
      }
    }
  }, [router]);

  const handleLogout = () => {
    alert("You have been logged out successfully.");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const addCourse = (newCourse) => {
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem(`courses_${username}`, JSON.stringify(updatedCourses));
  };

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 shadow-md py-5 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white">VLE Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded text-white">Sign Out</button>
      </header>

      <main className="flex-grow container mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaUserCircle className="text-6xl text-gray-700 mr-4" />
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-2">Welcome, {username}!</h2>
              <p className="text-lg text-white bg-blue-600 rounded-full px-4 inline-block">{userRole}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AddCourses addCourse={addCourse} />
          <MyCourses courses={courses} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
