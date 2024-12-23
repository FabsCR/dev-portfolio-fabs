"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 border-t border-transparent mt-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex gap-5 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/FabsCR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/fabian-fdez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Designed and developed by{" "}
        <a
          href="https://github.com/FabsCR"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
        >
          @FabsCR
        </a>
      </span>
      <span className="text-xs text-gray-400 dark:text-gray-500 mt-2">
        © {new Date().getFullYear()} Fabián José Fernández Fernández. All rights reserved.
      </span>
    </footer>
  );
}