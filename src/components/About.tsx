"use client";

import { useEffect, useState } from "react";
import { FaCode, FaDatabase, FaGithub, FaLinux, FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Type definition for technology items
interface Technology {
  icon: JSX.Element;
  labelKey: string;
}

const technologies: Technology[] = [
  { icon: <FaCode size={30} />, labelKey: "technologies.0" },
  { icon: <FaTools size={30} />, labelKey: "technologies.1" },
  { icon: <FaCode size={30} />, labelKey: "technologies.2" },
  { icon: <FaDatabase size={30} />, labelKey: "technologies.3" },
  { icon: <FaGithub size={30} />, labelKey: "technologies.4" },
  { icon: <FaLinux size={30} />, labelKey: "technologies.5" },
];

// Type definition for TechnologyCard component props
interface TechnologyCardProps {
  icon: JSX.Element;
  label: string;
}

export const About: React.FC = () => {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Placeholder or loading state when translations are not ready
  if (!isClient || !ready) {
    return <p>Loading...</p>;
  }

  return (
    <section id="about" className="my-20 px-6 sm:px-8 lg:px-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        {t("about.title")}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        {t("about.description")}
      </p>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
          {t("about.technologiesTitle")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} icon={tech.icon} label={t(tech.labelKey)} />
          ))}
        </div>
      </div>

      <div className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        <p className="mb-6">{t("about.skills")}</p>
      </div>
      <a
        href="/path.pdf" // TODO: Add link to my CV
        download
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-8"
      >
        {t("about.cvButton")}
      </a>
    </section>
  );
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center text-gray-600 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-110 active:scale-95">
    <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 ease-in-out">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
      {label}
    </span>
  </div>
);