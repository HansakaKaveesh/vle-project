"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import AddCourses from "./components/AddCourses";
import MyCourses from "./components/MyCourses";
import { BookOpen, LogOut, Shield, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]" />
    
    <header className="bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-800 shadow-lg py-5 px-8 flex justify-between items-center relative z-10">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-white/10 backdrop-blur-sm rounded-xl p-2">
          <BookOpen className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">VLE Dashboard</h1>
      </div>
      <button 
        onClick={handleLogout}
        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white flex items-center gap-2 transition-all group"
      >
        <LogOut className="h-5 w-5 transform group-hover:-translate-x-0.5 transition-transform" />
        <span>Sign Out</span>
      </button>
    </header>
  
    <main className="flex-grow container mx-auto py-12 px-6 relative z-10">
      {/* Welcome Section */}
      <div
  className="relative text-center mb-12 bg-gradient-to-br from-blue-50 to-blue-100 py-16 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-blue-200/30 overflow-hidden bg-cover bg-center group"
  style={{
    backgroundImage: "url(https://www.keg.com/hubfs/iStock-1141014440.jpg)",
  }}
>
  {/* Enhanced Glass Overlay */}
  <div className="absolute inset-0 bg-blue-50/65 backdrop-blur-sm rounded-3xl transition-all duration-500 group-hover:bg-blue-50/70"></div>
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dot-noise.png')]" />
        
        {/* Digital Clock */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-3 group">
          <div className="font-mono text-blue-600 flex items-center gap-1">
            {new Date().toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            }).split(':').map((part, index) => (
              <span 
                key={index}
                className="inline-block min-w-[1.2em] text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                {part}
              </span>
            )).reduce((acc, curr, index) => {
              return index === 0 ? [curr] : [...acc, 
                <span 
                  key={`sep-${index}`} 
                  className="text-blue-400 animate-pulse text-xl"
                >
                  :
                </span>, 
                curr
              ]
            }, [])}
          </div>
          <div className="flex flex-col text-xs text-gray-500 border-l pl-3 border-gray-200">
            <span className="font-medium uppercase tracking-wide">
              {new Date().toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <span className="text-sm font-semibold">
              {new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
            </span>
          </div>
        </div>
  
        {/* User Profile Section */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative flex items-center justify-center">
              <FaUserCircle className="text-6xl text-blue-600/90 bg-white rounded-full p-2 shadow-2xl border-4 border-white transform transition-transform group-hover:scale-105" />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md border-2 border-white">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
  
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome Back, <span className="whitespace-nowrap">{username}!</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-5 w-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Shield className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {userRole} Member
              </span>
            </div>
          </div>
        </div>
  
        {/* Progress Ribbon */}
        <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20" />
      </div>
  
      {/* Courses Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
        >
          <AddCourses addCourse={addCourse} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
        >
          <MyCourses courses={courses} />
        </motion.div>
      </div>
    </main>
  
    {/* Global Notification Toast (example placement) */}
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      {/* Toast component would go here */}
    </div>
  </div>
  );
};

export default Dashboard;
