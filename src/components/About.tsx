"use client";

import { FaCode, FaDatabase, FaGithub, FaLinux, FaTools } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface TechnologyCardProps {
  icon: JSX.Element;
  label: string;
}

const technologies = [
  { icon: <FaCode size={30} />, label: "React.js, Next.js, Vue.js, Nuxt 3" },
  { icon: <FaTools size={30} />, label: "React Native, Ionic" },
  { icon: <FaCode size={30} />, label: "Tailwind CSS, JavaScript, TypeScript" },
  { icon: <FaDatabase size={30} />, label: "PostgreSQL, MongoDB, Supabase" },
  { icon: <FaGithub size={30} />, label: "Git, GitHub" },
  { icon: <FaLinux size={30} />, label: "Linux (Arch-based, Lubuntu)" },
];

export function About() {
  return (
    <motion.section
      id="about"
      className="my-20 px-6 sm:px-8 lg:px-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="mb-8 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-110">
          <Image
            src="/Photo.jpeg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        I&apos;m a third-year Computer Engineering student at Tecnológico de Costa Rica, driven by a passion for problem-solving, self-learning, and continuous growth. I enjoy tackling new challenges and expanding my knowledge both personally and professionally.
      </motion.p>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
          My Top Technologies:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <p className="mb-6">
          I enjoy working on both frontend and backend technologies and continuously explore new tools to enhance my skills.
        </p>
      </motion.div>

      <a
        href="/cv.pdf"
        download="Fabian_Fernandez_CV.pdf"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-8"
      >
        View my CV
      </a>
    </motion.section>
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