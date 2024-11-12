"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function Contact() {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering until client-side and translations are ready
  if (!isClient || !ready) return null;

  return (
    <section id="contact" className="my-16 text-center px-6 sm:px-0 py-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
        {t("contact.title")}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t("contact.description")}
      </p>
      <a
        href="mailto:fabián.jose.fdez.fdez@gmail.com"
        className="text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition duration-300"
      >
        {t("contact.button")}
      </a>
    </section>
  );
}