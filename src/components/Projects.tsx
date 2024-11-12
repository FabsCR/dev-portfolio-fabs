"use client";

import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="my-16 px-6 sm:px-0 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">My projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Project 1: Spotify Mobile App */}
        <div className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Spotify Mobile App</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A React Native mobile application using Expo, integrated with the Spotify API.
          </p>
          <a
            href="https://github.com/FabsCR/spotify-mobile-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 mt-auto"
          >
            <FaGithub className="inline-block mr-2" /> View on GitHub
          </a>
        </div>

        {/* Project 2: BookEvent */}
        <div className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">BookEvent</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An application designed to streamline the event venue reservation process, built using Supabase and Nuxt 3.
          </p>
          <a
            href="https://github.com/mortalcr/BookEvent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 mt-auto"
          >
            <FaGithub className="inline-block mr-2" /> View on GitHub
          </a>
        </div>

        {/* Project 3: Tecflix Movie Search */}
        <div className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Tecflix Movie Search</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A web platform for searching and managing movies using The Movie Database (TMDb) API. Built with React, React Router DOM, and Bootstrap. Features include adding movies to favorites and viewing movie details.
          </p>
          <a
            href="https://github.com/rooseveltalej/tecflix-movie-search"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 mt-auto"
          >
            <FaGithub className="inline-block mr-2" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
