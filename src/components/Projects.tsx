"use client";

import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface Repo {
  name: string;
  linkText: string;
  link: string;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  repos?: Repo[];
}

export const Projects: React.FC = () => {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  // Only renders on the client to prevent SSR mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !ready) {
    return null; // Prevent rendering until client-side and translations are ready
  }

  const projects = (t("projects.list", { returnObjects: true }) as Project[]) || [];

  return (
    <section id="projects" className="my-16 px-6 sm:px-0 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

// Component for individual project cards
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out flex flex-col justify-between">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
      {project.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      {project.description}
    </p>

    {project.repos && project.repos.length > 0 ? (
      <div className="flex flex-col gap-2 mt-auto">
        {project.repos.map((repo, repoIndex) => (
          <RepoLink key={repoIndex} repo={repo} />
        ))}
      </div>
    ) : (
      project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 mt-auto"
        >
          <FaGithub className="inline-block mr-2" /> {project.linkText || "View on GitHub"}
        </a>
      )
    )}
  </div>
);

// Component for individual repo links
const RepoLink: React.FC<{ repo: Repo }> = ({ repo }) => (
  <a
    href={repo.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
  >
    <FaGithub className="inline-block mr-2" /> {repo.linkText || "View on GitHub"}
  </a>
);