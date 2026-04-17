"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const experience = [
  {
    role: "Full Stack Developer",
    company: "STCA Center",
    date: "Apr 2026 - Present",
    location: "San José, Costa Rica · Remote",
    tags: ["Contract", "React.js", "Node.js", "SQL"],
    description: "• System Scalability: Modernizing a high-traffic enterprise platform integrated with a core ERP.\n• Feature Engineering: Optimizing critical modules using React.js, Node.js, and SQL.\n• API Orchestration: Enhancing complex integrations between frontend and backend services.\n• Incremental Development: Delivering technical improvements through milestone-based objectives.",
  },
  {
    role: "Freelance Software Developer",
    company: "Freelancer · Independent Professional",
    date: "Apr 2025 - Present",
    location: "Global / Remote",
    tags: ["Full-Stack", "AI & ML Solutions", "Agile Management"],
    description: "• Lead end-to-end custom project lifecycles for international clients, acting as sole technical architect.\n• Architect scalable, user-centric web applications and integrate intelligent Machine Learning analysis.\n• Drive continuous agile delivery with a strong focus on clean architecture and bilingual (English/Spanish) communication.",
  },
  {
    role: "Assistant in Software Requirements",
    company: "Tecnológico de Costa Rica",
    date: "Feb 2025 - Present",
    location: "Hybrid",
    tags: ["Mentorship", "Documentation"],
    description: "• Guide computer science students on requirement gathering, system architecture, and UI/UX best practices.\n• Assess technical projects and documentation ensuring adherence to rigorous academic standards.",
  },
  {
    role: "Digital & Geospatial Projects Engineer",
    company: "Constructora HRH",
    date: "Oct 2025 - Feb 2026",
    location: "Alajuela, Costa Rica · On-site",
    tags: ["GIS", "Web Analytics"],
    description: "• Centralized corporate data by integrating CAD and GIS systems into automated web modules.\n• Designed digital workflows to map geospatial assets, directly optimizing technical company operations.",
  },
  {
    role: "OGX Member Consideration",
    company: "AIESEC in Costa Rica",
    date: "Nov 2023 - Apr 2024",
    location: "Costa Rica · Hybrid",
    tags: ["CRM Administration", "B2C Funnels"],
    description: "• Managed the national CRM (Podio) data pipelines, auditing fast-paced B2C exchange processes.\n• Analyzed lead generation metrics to optimize cross-cultural opportunity management with global partners.",
  }
];

const volunteering = [
  {
    role: "Career Mentor",
    company: "Tecnológico de Costa Rica",
    date: "Feb 2023 - Present",
    location: "Education",
    tags: ["Mentoring", "Public Speaking"],
    description: "• Facilitate the academic transition for incoming computer engineering freshmen.\n• Provide hands-on guidance on university resources, time management, and core computer science fundamentals."
  }
];

function ExperienceCard({ item, idx }: { item: any; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className={`group relative border rounded-2xl transition-all duration-300 shadow-sm overflow-hidden ${
        isOpen 
          ? "border-amber-500/30 bg-muted/10 shadow-amber-500/5" 
          : "border-border/40 bg-gradient-to-br from-background to-muted/5 hover:border-amber-500/20 hover:bg-muted/10"
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 sm:p-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start focus:outline-none"
      >
        {/* Date & Location column */}
        <div className="md:w-1/4 text-sm text-muted-foreground pt-1 flex flex-col shrink-0">
          <span className="font-bold text-foreground uppercase tracking-wider text-xs mb-1.5 opacity-90">{item.date}</span>
          <span className="flex items-center gap-1.5 opacity-75 text-xs font-medium">{item.location}</span>
        </div>

        {/* Title & Tags */}
        <div className="md:w-3/4 flex flex-col items-start w-full">
          <div className="flex justify-between w-full items-start gap-4">
            <div>
              <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? "text-amber-500" : "text-foreground group-hover:text-amber-500"}`}>
                {item.role}
              </h3>
              <p className="text-muted-foreground font-medium mt-1">
                {item.company}
              </p>
            </div>
            
            <div className={`p-2 rounded-full border transition-all duration-300 shrink-0 mt-1 ${
              isOpen 
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 rotate-180' 
                : 'bg-muted/50 border-border/50 text-muted-foreground group-hover:text-amber-500 group-hover:border-amber-500/30 group-hover:bg-amber-500/5'
            }`}>
              <ChevronDownIcon className="w-5 h-5" />
            </div>
          </div>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map((tag: string) => (
                <span key={tag} className={`px-3 py-1 font-semibold rounded-full text-xs transition-colors ${
                  isOpen 
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20" 
                    : "bg-background border border-border/60 text-muted-foreground group-hover:border-amber-500/10"
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
              <div className="md:pl-[calc(25%+2rem)]">
                <div className="pt-6 border-t border-border/30">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="py-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-border/50 via-transparent to-transparent" />
      
      <div className="mb-16 flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BriefcaseIcon className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold tracking-wider uppercase text-amber-500/80">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground flex items-center max-w-2xl">
            A track record of driving technical solutions across multiple roles and industries.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-24">
        {experience.map((job, idx) => (
          <ExperienceCard key={`exp-${idx}`} item={job} idx={idx} />
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold tracking-tight mb-4">Volunteering</h3>
        <p className="text-muted-foreground">Giving back to the academic community.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        {volunteering.map((job, idx) => (
          <ExperienceCard key={`vol-${idx}`} item={job} idx={idx} />
        ))}
      </div>
    </motion.section>
  );
}
