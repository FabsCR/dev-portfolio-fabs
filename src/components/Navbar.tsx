"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        <span className="text-2xl font-semibold text-black dark:text-white">
          Fabian Fernandez Portfolio
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
          
          {/* Toggle Switch */}
          <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out checked:right-0"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-blue-600 cursor-pointer transition-colors duration-300 ease-in-out"
            ></label>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in mt-4">
            <input
              type="checkbox"
              name="toggle"
              id="toggle-mobile"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out checked:right-0"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <label
              htmlFor="toggle-mobile"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-blue-600 cursor-pointer transition-colors duration-300 ease-in-out"
            ></label>
          </div>
        </div>
      )}
    </header>
  );
}