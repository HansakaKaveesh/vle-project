// ThemeToggle.js
import React from "react";

export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-white">🌞</span>
      <label htmlFor="theme-toggle" className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner"></div>
          <div
            className={`dot absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition ${
              darkMode ? "transform translate-x-full bg-yellow-400" : ""
            }`}
          ></div>
        </div>
      </label>
      <span className="text-white">🌙</span>
    </div>
  );
}
