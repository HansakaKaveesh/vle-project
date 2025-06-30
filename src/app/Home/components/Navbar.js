"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [ictOpen, setIctOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to toggle blur class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownWrapperClasses =
    "absolute z-50 top-full left-0 mt-0 bg-white text-blue-800 rounded-lg shadow-lg w-64 py-2 animate-fade-in";

  const dropdownItemClasses =
    "flex items-center justify-between px-4 py-2 hover:bg-blue-50 transition duration-200 text-sm font-medium cursor-pointer w-full text-left";

  return (
    <nav
      className={`fixed top-4 left-4 right-4 mx-auto rounded-xl z-50 text-white px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-blue-600/80 backdrop-blur-md" : "bg-blue-600/0"
      }`}
    >
      {/* Main container */}
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo on the left */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-200"
        >
          Synap<span className="text-yellow-300">Z</span>
        </Link>

        {/* Centered nav menu using absolute + transform */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden md:flex items-center space-x-6 font-medium text-md">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => {
                setCoursesOpen(false);
                setIctOpen(false);
              }}
            >
              <button
                className="hover:text-yellow-300 flex items-center transition"
                aria-haspopup="true"
                aria-expanded={coursesOpen}
              >
                Courses <FaChevronDown className="ml-1 text-sm" />
              </button>

              {coursesOpen && (
                <ul className={dropdownWrapperClasses}>
                  {/* ICT Dropdown */}
                  <li
                    className="relative group"
                    onMouseEnter={() => setIctOpen(true)}
                    onMouseLeave={() => setIctOpen(false)}
                  >
                    <button className={dropdownItemClasses}>
                      <span className="flex items-center">
                        <FaLaptopCode className="mr-2 text-purple-500" />
                        ICT
                      </span>
                      <FaChevronDown className="ml-2 transform group-hover:rotate-90 transition" />
                    </button>

                    {ictOpen && (
                      <ul className="absolute left-full top-0 ml-0 bg-white rounded-lg shadow-lg text-blue-800 py-2 w-64 animate-fade-in z-50">
                        <li>
                          <Link
                            href="/courses/igcse/ict"
                            className={dropdownItemClasses}
                          >
                            IGCSE ICT
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/courses/igcse/computer-science"
                            className={dropdownItemClasses}
                          >
                            IGCSE Computer Science
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/courses/ial/as-ict"
                            className={dropdownItemClasses}
                          >
                            IAL AS ICT
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/courses/ial/as2-ict"
                            className={dropdownItemClasses}
                          >
                            IAL AS2 ICT
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/tutors" className="hover:text-yellow-300 transition">
                Tutors
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth (Sign In, Register, Dashboard) on the right */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="/login"
            className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-md shadow hover:scale-105 transition-all text-sm font-semibold group"
          >
            <FaSignInAlt className="mr-2 text-base group-hover:translate-x-1 transition-transform" />
            Sign In
          </Link>

          <Link
            href="/register"
            className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md shadow hover:scale-105 transition-all text-sm font-semibold group"
          >
            <FaUserPlus className="mr-2 text-base group-hover:translate-x-1 transition-transform" />
            Register
          </Link>

          {/* Dashboard Icon with notification */}
          <div className="relative">
            <Link
              href="/dashboard"
              className="flex items-center justify-center w-9 h-9 bg-gray-800 text-white rounded-full ring-1 ring-transparent hover:ring-yellow-400 hover:bg-gray-700 transition-all"
              aria-label="User Dashboard"
            >
              <FaUserCircle className="text-lg" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full bg-red-500 text-white flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}