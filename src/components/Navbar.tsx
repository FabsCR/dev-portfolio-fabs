"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t, ready } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Client-side rendering
    setIsClient(true);

    // Apply stored theme preference on load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  // Prevent SSR mismatch errors
  if (!isClient || !ready) return null;

  return (
    <header className="py-4 px-8 shadow-md bg-white dark:bg-gray-900">
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-black dark:text-white">
          {t("navbar.title")}
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="#about" className="hover:underline">
            {t("navbar.about")}
          </Link>
          <Link href="#projects" className="hover:underline">
            {t("navbar.projects")}
          </Link>
          <Link href="#contact" className="hover:underline">
            {t("navbar.contact")}
          </Link>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {isDarkMode ? <FaSun className="h-6 w-6 text-yellow-500" /> : <FaMoon className="h-6 w-6 text-gray-900 dark:text-gray-300" />}
          </button>
          <button onClick={toggleLanguage} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <FaGlobe className="h-6 w-6 text-gray-900 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6 text-gray-900 dark:text-white" /> : <FaBars className="h-6 w-6 text-gray-900 dark:text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:underline">
            {t("navbar.about")}
          </Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:underline">
            {t("navbar.projects")}
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:underline">
            {t("navbar.contact")}
          </Link>
          <button onClick={toggleTheme} className="p-2 mt-4 rounded-full bg-gray-200 dark:bg-gray-700">
            {isDarkMode ? <FaSun className="h-6 w-6 text-yellow-500" /> : <FaMoon className="h-6 w-6 text-gray-900 dark:text-gray-300" />}
          </button>
          <button onClick={toggleLanguage} className="p-2 mt-4 rounded-full bg-gray-200 dark:bg-gray-700">
            <FaGlobe className="h-6 w-6 text-gray-900 dark:text-gray-300" />
          </button>
        </div>
      )}
    </header>
  );
}