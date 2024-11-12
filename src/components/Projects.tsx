"use client";

export function Projects() {
    return (
      <section id="projects" className="my-8 px-4 sm:px-0 text-center">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3 bg-white shadow-md rounded dark:bg-gray-800">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-400">.</p>
          </div>
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3 bg-white shadow-md rounded dark:bg-gray-800">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-400">.</p>
          </div>
        </div>
      </section>
    );
  }