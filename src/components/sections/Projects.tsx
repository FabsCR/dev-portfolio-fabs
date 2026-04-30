"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, LockClosedIcon, GlobeAltIcon, SparklesIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const highlightedProjects = [
  {
    title: "AI MMA Analysis Platform",
    category: "Computer Vision & AI",
    description: "An exclusive, AI-powered tactical analysis platform utilizing MediaPipe and OpenCV for frame-by-frame posture detection and predictive movement pattern extraction.",
    url: null,
    badge: "Private Client",
    tags: ["MediaPipe", "OpenCV", "Python", "AI", "Web Platform"],
  },
  {
    title: "Suplidora Santamaría",
    category: "Full-Stack Web App & CMS",
    description: "A robust digital ecosystem featuring a custom headless CMS and dedicated e-commerce sub-sites, engineered leveraging Next.js and Supabase for real-time scalability.",
    url: "https://www.suplidorasantamaria.com",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "TrezaCR",
    category: "E-Commerce",
    description: "A high-performance e-commerce and branded platform with an integrated inventory backend to seamlessly showcase premium LED lighting solutions.",
    url: "https://trezacr.com",
    tags: ["React", "Supabase", "CMS", "Tailwind"],
  },
  {
    title: "STCA Center",
    category: "Corporate Platform",
    description: "A comprehensive frontend solution connecting business vision with modern technological strategies. Engineered with Next.js and complete internationalization (i18n).",
    url: "https://stcacenter.com",
    badge: null,
    tags: ["Next.js", "i18n", "React", "Frontend", "Tailwind"],
  },
  {
    title: "Rancho Fdez",
    category: "Web Application",
    description: "A dynamic venue booking portal focused on complex quotation workflows and automated business operations built with React.",
    url: "https://ranchofdez.com",
    tags: ["Next.js", "Tailwind CSS", "React", "Forms"],
  }
];

const otherProjects = [
  {
    title: "Fabstream",
    description: "A modern streaming interface showcasing movies and TV shows via public APIs like TMDB and embedded third-party video players.",
    link: "https://fabstream.online",
    isSite: true,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Pet Health Tracker",
    description: "A comprehensive PWA for veterinary management featuring dual frontend environments interacting with a centralized FastAPI backend.",
    link: null,
    isSite: false,
    isMultiRepo: true,
    repos: [
      { name: "Web App", link: "https://github.com/LuisMendezTEC/PetHealthTracker-web" },
      { name: "Mobile App", link: "https://github.com/LuisMendezTEC/PetHealthTracker-mobile" },
      { name: "Backend", link: "https://github.com/LuisMendezTEC/PetHealthTracker-backend" },
    ]
  },
  {
    title: "Pure Harvest Mobile Platform",
    description: "Agile mobile marketplace backend featuring secure Firebase authentication and real-time data synchronization.",
    link: "https://github.com/zSnails/PureHarvest",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Distributed Retro Game System",
    description: "Highly distributed backend architecture utilizing asynchronous Celery task queues and Redis caching to power a retro game platform.",
    link: "https://github.com/AndresEsquivelG/retro-game-ditributed",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Book Event",
    description: "Nuxt 3 reservation portal built to streamline the event venue booking process via Supabase.",
    link: "https://github.com/mortalcr/BookEvent",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Spotify Mobile App",
    description: "A React Native mobile application seamlessly consuming the Spotify API.",
    link: "https://github.com/FabsCR/spotify-mobile-app",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Manage My Stock",
    description: "A secure inventory management dashboard developed with React and Supabase RLS policies.",
    link: "https://github.com/FabsCR/manage-my-stock",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Tecflix Movie Search",
    description: "A fully responsive movie tracking application consuming the TMDb API with custom favorites management.",
    link: "https://github.com/rooseveltalej/tecflix-movie-search",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "IoT Digital Assistant",
    description: "Python-driven IoT toolkit utilizing Android Debug Bridge (ADB) for dynamic task automation.",
    link: "https://github.com/FabsCR/IoT-project",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "Spark ETL Pipeline",
    description: "Scalable data ingestion pipelines extracting, transforming, and loading structured datasets via SparkSQL.",
    link: "https://github.com/FabsCR/spark",
    isSite: false,
    isMultiRepo: false,
    repos: []
  },
  {
    title: "DVD Rental DB",
    description: "PostgreSQL data replication research and Tableau-based visualization dashboards.",
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
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <SparklesIcon className="w-5 h-5 text-amber-500" />
          <span className="text-sm font-semibold tracking-wider uppercase text-amber-500/80">Portfolio</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Professional Projects
        </h2>
        <p className="text-xl text-muted-foreground flex items-center max-w-2xl">
          Real end-to-end freelance projects, from requirements gathering to user manual delivery.
        </p>
      </div>
      
      {/* PROFESSIONAL PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {highlightedProjects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="group relative border border-border/40 rounded-[2rem] p-6 md:p-8 bg-gradient-to-b from-muted/5 to-transparent hover:bg-muted/10 hover:border-amber-500/30 transition-all duration-500 shadow-sm hover:shadow-amber-500/5 overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-full mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">{project.category}</p>
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-background border border-border/50 text-[10px] font-bold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                      <LockClosedIcon className="w-3 h-3 text-amber-500/70" />
                      {project.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-amber-500 transition-colors">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-fit">
                      {project.title}
                      <ArrowUpRightIcon className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/30 w-full group-hover:border-amber-500/20 transition-colors">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-background border border-border/50 rounded-lg text-xs font-semibold text-foreground group-hover:border-amber-500/20 transition-all shadow-sm">
                    {tag}
                  </span>
                ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        
        <div className="pt-16 mb-10 flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 mb-2">
            <CodeBracketIcon className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold tracking-wider uppercase text-amber-500/80">More Work</span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-foreground">Other Projects</h3>
          <p className="text-muted-foreground">Academic work, open source contributions, and personal experiments.</p>
        </div>

        {/* OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="group relative border border-border/40 rounded-[1.5rem] p-6 lg:p-8 bg-background/40 backdrop-blur-md hover:bg-muted/10 hover:border-amber-500/30 transition-all duration-400 flex flex-col h-full shadow-sm hover:shadow-amber-500/5 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-start h-full w-full">
              <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-amber-500 transition-colors">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/30 w-full group-hover:border-amber-500/20 transition-colors">
                {project.isMultiRepo ? (
                  project.repos?.map((repo, rIdx) => (
                    <a key={rIdx} href={repo.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-amber-500 transition-colors">
                      <FaGithub className="w-4 h-4" />
                      {repo.name}
                    </a>
                  ))
                ) : (
                  project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-amber-500 transition-colors">
                      {project.isSite ? <GlobeAltIcon className="w-4 h-4" /> : <FaGithub className="w-4 h-4" />}
                      {project.isSite ? "Visit Website" : "View Source Code"}
                    </a>
                  )
                )}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
