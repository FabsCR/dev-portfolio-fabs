"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, LockClosedIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const highlightedProjects = [
  {
    title: "AI MMA Analysis Platform",
    category: "Computer Vision & AI",
    description: "Private customized web platform for tactical opponent analysis using Artificial Intelligence and Computer Vision. Features AI video processing for movement patterns, frame-by-frame posture detection using MediaPipe, and motion tracking with OpenCV.",
    url: null,
    badge: "Private Client · In Development",
    tags: ["MediaPipe", "OpenCV", "Python", "AI", "Web Platform"],
  },
  {
    title: "Suplidora Santamaría",
    category: "Full-Stack Web App & CMS",
    description: "A comprehensive web portal including two dedicated sub-sites (Playpark and Synthetic Palm). Features a custom Content Management System and a scalable database architecture built on Supabase.",
    url: "https://www.suplidorasantamaria.com",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "CMS"],
  },
  {
    title: "TrezaCR",
    category: "E-Commerce & Branding",
    description: "\"Illuminating your projects with modern, efficient, and durable LED solutions.\" An e-commerce and web platform featuring a custom CMS and Supabase backend to manage products and inventory.",
    url: "https://trezacr.com",
    tags: ["React", "E-Commerce", "Supabase", "CMS", "Tailwind"],
  },
  {
    title: "Rancho Fdez",
    category: "Web Application",
    description: "A web platform designed for an event venue featuring complex quotation forms and business details.",
    url: "https://ranchofdez.com",
    tags: ["Next.js", "Tailwind CSS", "React", "Forms"],
  }
];

const otherProjects = [
  {
    title: "Fabstream",
    description: "A modern streaming interface showcasing movies and TV shows via public APIs like TMDB and embedded third-party players such as Videasy.",
    link: "https://fabstream.online",
    isSite: true,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Pet Health Tracker",
    description: "A Progressive Web Application (PWA) for veterinary management. The web app is for veterinarian administration, the mobile app is for clients, and the backend handles the database using FastAPI.",
    link: null,
    isSite: false,
    isMultiRepo: true,
    repos: [
      { name: "Web Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-web" },
      { name: "Mobile Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-mobile" },
      { name: "Backend Repository", link: "https://github.com/LuisMendezTEC/PetHealthTracker-backend" },
    ]
  },
  {
    title: "Pure Harvest Mobile Platform",
    description: "Collaborated within an Agile development team to deliver a scalable mobile marketplace. Implemented secure authentication and real-time data synchronization using Firebase services.",
    link: "https://github.com/zSnails/PureHarvest",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Distributed Retro Game System",
    description: "Distributed backend architecture utilizing asynchronous task queues and caching systems to power a retro game platform.",
    link: "https://github.com/AndresEsquivelG/retro-game-ditributed",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Book Event",
    description: "An application designed to streamline the event venue reservation process, built using Supabase and Nuxt 3.",
    link: "https://github.com/mortalcr/BookEvent",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Spotify Mobile App",
    description: "A React Native mobile application using Expo, integrated with the Spotify API.",
    link: "https://github.com/FabsCR/spotify-mobile-app",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Manage My Stock",
    description: "A CRUD application for inventory management aimed at small businesses. Built using Supabase and React.",
    link: "https://github.com/FabsCR/manage-my-stock",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Tecflix Movie Search",
    description: "A web platform for searching and managing movies using The Movie Database (TMDb) API. Built with React, React Router DOM, and Bootstrap. Features include adding movies to favorites and viewing movie details.",
    link: "https://github.com/rooseveltalej/tecflix-movie-search",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "IoT Digital Assistant",
    description: "An IoT project for a digital assistant using Python and ADB to manage and automate tasks.",
    link: "https://github.com/FabsCR/IoT-project",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Spark ETL",
    description: "Extract, transform, and load data using SparkSQL, PostgreSQL, and Jupyter notebooks.",
    link: "https://github.com/FabsCR/spark",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "DVD Rental",
    description: "A project focused on data replication and analysis using PostgreSQL and Tableau for data visualization and insights.",
    link: "https://github.com/FabsCR/dvd-rental",
    isSite: false,
    isMultiRepo: false,
    repos: []
  }
];

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-24 border-t border-border/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Highlighted Work</h2>
        <p className="text-lg text-muted-foreground flex items-center">
          Real end-to-end freelance projects, from requirements gathering to user manual delivery.
        </p>
      </div>
      
      <div className="flex flex-col gap-16">
        {highlightedProjects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="group relative border border-border/50 rounded-2xl p-6 sm:p-10 bg-muted/20 hover:bg-muted/40 transition-colors shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex flex-col flex-wrap lg:flex-nowrap sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="w-full">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="text-sm font-medium text-amber-500 dark:text-amber-400">{project.category}</p>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full bg-border text-xs font-medium text-muted-foreground flex flex-nowrap shrink-0 whitespace-nowrap items-center gap-1.5 border border-border/60">
                      <LockClosedIcon className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                      {project.title}
                      <ArrowUpRightIcon className="w-5 h-5 mb-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-foreground">
                      {project.title}
                    </span>
                  )}
                </h3>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold tracking-tight mb-8">Other Engineering Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="border border-border/30 rounded-xl p-6 hover:bg-muted/10 transition-colors flex flex-col h-full shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-3">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/30">
                {project.isMultiRepo ? (
                  project.repos?.map((repo, rIdx) => (
                    <a key={rIdx} href={repo.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-amber-500 transition-colors">
                      <FaGithub className="w-4 h-4" />
                      {repo.name}
                    </a>
                  ))
                ) : (
                  project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-amber-500 transition-colors">
                      {project.isSite ? <GlobeAltIcon className="w-4 h-4" /> : <FaGithub className="w-4 h-4" />}
                      {project.isSite ? "Visit Website" : "View Source Code"}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
