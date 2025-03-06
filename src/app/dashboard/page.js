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
  const [time, setTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

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
      <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 py-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
  {/* Digital Clock */}
  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
    <span className="text-2xl font-mono text-blue-600">
      {new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).split(':').map((part, index) => (
        <span key={index} className="inline-block min-w-[1.2em]">
          {part}
        </span>
      )).reduce((acc, curr, index) => {
        return index === 0 ? [curr] : [...acc, <span key={`sep-${index}`} className="animate-pulse">:</span>, curr]
      }, [])}
    </span>
    <div className="flex flex-col text-xs text-gray-500">
      <span>{new Date().toLocaleDateString('en-US', { weekday: 'short' })}</span>
      <span>{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}</span>
    </div>
  </div>

  {/* Rest of the welcome section */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
  <div className="relative z-10 flex items-center justify-center flex-col md:flex-row gap-6 px-4">
    <div className="relative">
      <FaUserCircle className="text-5xl text-blue-600/90 bg-white rounded-full p-2 shadow-lg border-4 border-white" />
      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md border-2 border-white">
        <svg 
          className="w-6 h-6 text-blue-600"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
    </div>

    <div className="space-y-2">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Welcome Back, {username}!
      </h2>
      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
        <svg 
          className="w-5 h-5 text-blue-600"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          {userRole} Member
        </span>
      </div>
    </div>
  </div>

  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
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
