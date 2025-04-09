"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaHistory,
  FaPalette,
  FaSignInAlt,
  FaUserPlus,
  FaUserCircle
} from "react-icons/fa";

export default function Navbar() {
  const [modulesOpen, setModulesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [ictOpen, setIctOpen] = useState(false);
  const [ialOpen, setIalOpen] = useState(false);
  const [igcseOpen, setIgcseOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="sticky z-20 top-0 bg-blue-600  text-white shadow-lg px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-4xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-300">
          GenZedu
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
              About Us
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setModulesOpen(true)}
            onMouseLeave={() => setModulesOpen(false)}
          >
            <button className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
              Modules
            </button>
            {modulesOpen && (
              <ul className="absolute top-8 left-0 bg-white text-blue-700 rounded-lg shadow-xl py-2 w-56">
                {[{ href: "/modules/maths", icon: <FaBook className="mr-3 text-yellow-500" />, label: "Mathematics" },
                  { href: "/modules/science", icon: <FaFlask className="mr-3 text-green-500" />, label: "Science" },
                  { href: "/modules/history", icon: <FaHistory className="mr-3 text-red-500" />, label: "History" },
                  { href: "/modules/programming", icon: <FaLaptopCode className="mr-3 text-purple-500" />, label: "Programming" },
                  { href: "/modules/art", icon: <FaPalette className="mr-3 text-pink-500" />, label: "Art" }].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="flex items-center px-4 py-3 hover:bg-blue-100 transition-all duration-200">
                      {item.icon} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
              Courses
            </button>
            {coursesOpen && (
              <ul className="absolute top-8 left-0 bg-white text-blue-700 rounded-lg shadow-xl py-2 w-56">
                <li 
                  className="relative"
                  onMouseEnter={() => setIctOpen(true)}
                  onMouseLeave={() => setIctOpen(false)}
                >
                  <button className="flex items-center px-4 py-3 hover:bg-blue-100 w-full text-left">
                    <FaLaptopCode className="mr-3 text-purple-500" /> ICT
                  </button>
                  {ictOpen && (
                    <ul className="absolute left-full top-0 bg-white text-blue-700 rounded-lg shadow-xl py-2 w-56">
                      <li 
                        className="relative"
                        onMouseEnter={() => setIalOpen(true)}
                        onMouseLeave={() => setIalOpen(false)}
                      >
                        <button className="flex items-center px-4 py-3 hover:bg-blue-100 w-full text-left">
                          IAL
                        </button>
                        {ialOpen && (
                          <ul className="absolute left-full top-0 bg-white text-blue-700 rounded-lg shadow-xl py-2 w-56">
                            <li>
                              <Link href="/courses/ial/edexcel" className="flex items-center px-4 py-3 hover:bg-blue-100">
                                Edexcel
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/ial/cambridge" className="flex items-center px-4 py-3 hover:bg-blue-100">
                                Cambridge
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li 
                        className="relative"
                        onMouseEnter={() => setIgcseOpen(true)}
                        onMouseLeave={() => setIgcseOpen(false)}
                      >
                        <button className="flex items-center px-4 py-3 hover:bg-blue-100 w-full text-left">
                          IGCSE
                        </button>
                        {igcseOpen && (
                          <ul className="absolute left-full top-0 bg-white text-blue-700 rounded-lg shadow-xl py-2 w-56">
                            <li>
                              <Link href="/courses/igcse/ol" className="flex items-center px-4 py-3 hover:bg-blue-100">
                                OL
                              </Link>
                            </li>
                            <li>
                              <Link href="/courses/igcse/ol" className="flex items-center px-4 py-3 hover:bg-blue-100">
                                AL
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/courses/web-development" className="flex items-center px-4 py-3 hover:bg-blue-100 transition-all duration-200">
                    <FaLaptopCode className="mr-3 text-purple-500" /> Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses/data-science" className="flex items-center px-4 py-3 hover:bg-blue-100 transition-all duration-200">
                    <FaLaptopCode className="mr-3 text-blue-500" /> Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/courses/machine-learning" className="flex items-center px-4 py-3 hover:bg-blue-100 transition-all duration-200">
                    <FaLaptopCode className="mr-3 text-orange-500" /> Machine Learning
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
  <Link
    href="/login"
    className="flex items-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200 font-semibold group text-sm"
  >
    <FaSignInAlt className="mr-2 text-base transition-transform group-hover:translate-x-0.5" />
    Sign In
  </Link>

  <Link
    href="/register"
    className="flex items-center bg-gradient-to-b from-blue-400 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-200 font-semibold group text-sm"
  >
    <FaUserPlus className="mr-2 text-base transition-transform group-hover:translate-x-0.5" />
    Register
  </Link>

  <div className="relative">
    <Link
      href="/dashboard"
      className="flex items-center justify-center w-9 h-9 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:scale-[1.03] transition-all duration-200 relative ring-1 ring-transparent hover:ring-yellow-400 focus:outline-none"
      aria-label="User Dashboard"
    >
      <FaUserCircle className="text-xl" />
      <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
        3
      </span>
    </Link>
  </div>
</div>
      </div>
    </nav>
  );
}
