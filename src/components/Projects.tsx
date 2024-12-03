"use client";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Mobile App",
    description: "A React Native mobile application using Expo, integrated with the Spotify API.",
    link: "https://github.com/FabsCR/spotify-mobile-app",
    isMultiRepo: false,
  },
  {
    title: "Book Event",
    description: "An application designed to streamline the event venue reservation process, built using Supabase and Nuxt 3.",
    link: "https://github.com/mortalcr/BookEvent",
    isMultiRepo: false,
  },
  {
    title: "Tecflix Movie Search",
    description:
      "A web platform for searching and managing movies using The Movie Database (TMDb) API. Built with React, React Router DOM, and Bootstrap. Features include adding movies to favorites and viewing movie details.",
    link: "https://github.com/rooseveltalej/tecflix-movie-search",
    isMultiRepo: false,
  },
  {
    title: "Pet Health Tracker",
    description:
      "A Progressive Web Application (PWA) for veterinary management. The web app is for veterinarian administration, the mobile app is for clients, and the backend handles the database using FastAPI.",
    repos: [
      { name: "Web Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-web" },
      { name: "Mobile Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-mobile" },
      { name: "Backend Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-backend" },
    ],
    isMultiRepo: true,
  },
  {
    title: "DVD Rental",
    description:
      "A project focused on data replication and analysis using PostgreSQL and Tableau for data visualization and insights.",
    link: "https://github.com/FabsCR/dvd-rental",
    isMultiRepo: false,
  },
  {
    title: "IoT Digital Assistant",
    description:
      "An IoT project for a digital assistant using Python and ADB to manage and automate tasks.",
    link: "https://github.com/FabsCR/IoT-project",
    isMultiRepo: false,
  },
  {
    title: "Manage My Stock",
    description:
      "A CRUD application for inventory management aimed at small businesses. Built using Supabase and React.",
    link: "https://github.com/FabsCR/manage-my-stock",
    isMultiRepo: false,
  },
  {
    title: "Spark ETL",
    description:
      "Extract, transform, and load data using SparkSQL, PostgreSQL, and Jupyter notebooks.",
    link: "https://github.com/FabsCR/spark",
    isMultiRepo: false,
  },
];

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="my-16 px-6 sm:px-0 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

            {project.isMultiRepo ? (
              <div className="flex flex-col gap-2 mt-auto">
                {project.repos?.map((repo, repoIndex) => (
                  <a
                    key={repoIndex}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
                  >
                    <FaGithub className="inline-block mr-2" /> {repo.name}
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 mt-auto"
              >
                <FaGithub className="inline-block mr-2" /> View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}