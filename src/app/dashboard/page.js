"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBook, FaPlus, FaUsers, FaClipboardList, FaBell, FaChartLine, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [username, setUsername] = useState(null);
  const [userRole, setUserRole] = useState(null);
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

  const sections = [
    {
      title: "Enrolled Courses",
      description: "Access the courses you're enrolled in.",
      icon: <FaBook className="text-5xl text-blue-600 mb-4 mx-auto" />,
      action: () => router.push("/enrolled-courses"),
    },
    {
      title: "Add New Course",
      description: "Add or register for a new course.",
      icon: <FaPlus className="text-5xl text-green-600 mb-4 mx-auto" />,
      action: () => router.push("/add-course"),
    },
    {
      title: "Manage Users",
      description: "Manage students and instructors.",
      icon: <FaUsers className="text-5xl text-purple-600 mb-4 mx-auto" />,
      action: () => router.push("/manage-users"),
    },
    {
      title: "Progress Tracker",
      description: "Track your learning progress.",
      icon: <FaChartLine className="text-5xl text-yellow-600 mb-4 mx-auto" />,
      action: () => router.push("/progress-tracker"),
    },
    {
      title: "Announcements",
      description: "View latest updates and notices.",
      icon: <FaBell className="text-5xl text-red-600 mb-4 mx-auto" />,
      action: () => router.push("/announcements"),
    },
    {
      title: "Assignments",
      description: "Access and submit assignments.",
      icon: <FaClipboardList className="text-5xl text-teal-600 mb-4 mx-auto" />,
      action: () => router.push("/assignments"),
    },
  ];

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">VLE Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
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
          <p className="text-lg text-gray-700 mt-4">Explore your resources and tools below:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={section.action}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center"
            >
              {section.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{section.title}</h3>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
