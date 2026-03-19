"use client";

import { motion } from "framer-motion";

const experience = [
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
    description: "• Facilitate the academic transition for incoming computer engineering freshmen.\n• Provide hands-on guidance on university resources, time management, and core computer science fundamentals."
  }
];

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="py-24 border-t border-border/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>
      <div className="flex flex-col gap-12 mb-20">
        {experience.map((job, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col md:flex-row gap-4 md:gap-12 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="md:w-1/4 text-sm text-muted-foreground pt-1 flex flex-col shrink-0">
              <span className="font-medium text-foreground">{job.date}</span>
              <span className="mt-1">{job.location}</span>
            </div>
            <div className="md:w-3/4 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {job.role} <span className="text-muted-foreground font-normal"> at {job.company}</span>
              </h3>
              
              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted text-xs font-semibold rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold tracking-tight mb-12">Volunteering</h2>
      <div className="flex flex-col gap-12">
        {volunteering.map((job, idx) => (
          <motion.div 
            key={idx} 
            className="flex flex-col md:flex-row gap-4 md:gap-12 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="md:w-1/4 text-sm text-muted-foreground pt-1 flex flex-col shrink-0">
              <span className="font-medium text-foreground">{job.date}</span>
              <span className="mt-1">{job.location}</span>
            </div>
            <div className="md:w-3/4 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {job.role} <span className="text-muted-foreground font-normal"> at {job.company}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
