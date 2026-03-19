"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Freelance Software Developer",
    company: "Freelancer · Independent Professional",
    date: "Apr 2025 - Present",
    location: "Remote",
    tags: ["Full-Stack Development", "AI & Machine Learning Solutions"],
    description: "I have worked with national companies, international clients, and independent professionals on custom software projects. My experience goes beyond coding, often leading the full project lifecycle, from gathering requirements and planning with clients to delivering incremental releases using agile methodologies. This has strengthened my ability to manage time zones, communicate clearly in English, and adapt to diverse teams and workflows. I focus on building scalable, user-centered solutions with a strong foundation in full-stack development and AI technologies.",
  },
  {
    role: "Assistant in Software Requirements Course",
    company: "Tecnológico de Costa Rica",
    date: "Feb 2025 - Present",
    location: "Hybrid",
    tags: [],
    description: "Supporting the professor in reviewing assignments, assessing projects, and ensuring the smooth execution of the course.",
  },
  {
    role: "Digital and Geospatial Projects Engineer",
    company: "Constructora HRH",
    date: "Oct 2025 - Feb 2026",
    location: "Alajuela, Costa Rica · On-site",
    tags: [],
    description: "Create and manage technical plans, geospatial data, and digital assets for construction and cadastral projects. Combine CAD and GIS work with web development and digital content management to support the company's technical and online operations.",
  },
  {
    role: "OGX Member Consideration",
    company: "AIESEC in Costa Rica",
    date: "Nov 2023 - Apr 2024",
    location: "Costa Rica · Hybrid",
    tags: [],
    description: "Update the national CRM (Podio) at each stage of the EP process and contact with SUs within 24 hours. Audit all documents in the APD process. Responsible for overseeing the EP process up to the APD and ensuring a smooth transition to PXP. Participate in B2C events for lead generation and analyze data for process improvement. Maintain constant communication with IR Partners for opportunity management.",
  }
];

const volunteering = [
  {
    role: "Career Mentor",
    company: "Tecnológico de Costa Rica",
    date: "Feb 2023 - Present",
    location: "Education",
    description: "Provided guidance and support to new computer engineering students during their transition to university life. Assisted students in understanding university processes and accessing academic resources."
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
            <div className="md:w-1/4 text-sm text-muted-foreground pt-1 flex flex-col">
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

              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
            <div className="md:w-1/4 text-sm text-muted-foreground pt-1 flex flex-col">
              <span className="font-medium text-foreground">{job.date}</span>
              <span className="mt-1">{job.location}</span>
            </div>
            <div className="md:w-3/4 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {job.role} <span className="text-muted-foreground font-normal"> at {job.company}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
