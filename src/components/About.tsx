"use client";

import { FaCode, FaDatabase, FaGithub, FaLinux, FaTools } from "react-icons/fa";

interface TechnologyCardProps {
  icon: JSX.Element;
  label: string;
}

const technologies = [
  { icon: <FaCode size={30} />, label: "React.js, Vue.js, Nuxt 3" },
  { icon: <FaTools size={30} />, label: "React Native, Ionic" },
  { icon: <FaCode size={30} />, label: "Tailwind CSS, JS, TS" },
  { icon: <FaDatabase size={30} />, label: "PostgreSQL, MongoDB, Supabase" },
  { icon: <FaGithub size={30} />, label: "Git, GitHub" },
  { icon: <FaLinux size={30} />, label: "Linux (Arch-based, Lubuntu)" },
];

export function About() {
  return (
    <section id="about" className="my-20 px-6 sm:px-8 lg:px-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        About Me
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        I&apos;m a third-year Computer Engineering student at Tecnológico de Costa Rica, driven by a passion for problem-solving, self-learning, and continuous growth. I enjoy tackling new challenges and expanding my knowledge both personally and professionally.
      </p>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
          Technologies I&apos;ve worked with:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>

      <div className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        <p className="mb-6">
          I enjoy working on both frontend and backend technologies and continuously explore new tools to enhance my skills.
        </p>
      </div>
      <a
        href="/path.pdf" // TODO: Add link to my CV
        download
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-8"
      >
        View my CV
      </a>
    </section>
  );
}

function TechnologyCard({ icon, label }: TechnologyCardProps) {
  return (
    <div className="flex flex-col items-center text-gray-600 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-110 active:scale-95">
      <div className="flex items-center justify-center w-16 h-16 mb-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 ease-in-out">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{label}</span>
    </div>
  );
}