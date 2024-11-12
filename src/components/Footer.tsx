"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaSpotify } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Footer() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering until client-side and translations are ready
  if (!isClient || !ready) return null;

  return (
    <footer className="flex flex-col items-center gap-4 py-6 border-t mt-8 bg-gray-100 dark:bg-gray-900">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {t("footer.text")}{" "}
        <a href="https://github.com/FabsCR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          @FabsCR
        </a>
      </span>
      <div className="flex gap-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/FabsCR" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/fabian-fdez" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/fabs.fdez/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400">
          <FaInstagram size={24} />
        </a>
        <a href="https://open.spotify.com/user/holacr07" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 dark:hover:text-green-400">
          <FaSpotify size={24} />
        </a>
      </div>
    </footer>
  );
}