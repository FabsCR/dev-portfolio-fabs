"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme and enable smooth scrolling
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Toggle between light and dark mode
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

  // Close the mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll to a specific section
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Navigation links
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Training" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-24">
        {/* Button to scroll to the top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
        >
          Fabian Portfolio
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Dark mode toggle */}
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none md:hidden"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6 text-gray-900 dark:text-white" />
          ) : (
            <FaBars className="h-6 w-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 transition-all duration-300 ease-in-out md:hidden">
          <div className="flex flex-col items-center gap-3">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection(link.href);
                }}
                className="w-full text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {link.label}
              </button>
            ))}

            {/* Dark mode toggle */}
            <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in mt-3">
              <input
                type="checkbox"
                name="toggle-mobile"
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
        </div>
      )}
    </header>
  );
}