"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLinux, FaTools, FaServer, FaBug, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiSupabase } from "react-icons/si";
import { TbDeviceImacCode } from "react-icons/tb";
import { LightBulbIcon, ChatBubbleLeftRightIcon, ArrowPathIcon, ClipboardDocumentListIcon, PresentationChartLineIcon, UsersIcon } from "@heroicons/react/24/outline";

const technologies = [
  { icon: <FaCode size={28} />, label: "React.js, Next.js" },
  { icon: <TbDeviceImacCode size={28} />, label: "TypeScript" },
  { icon: <SiTailwindcss size={28} />, label: "Tailwind CSS" },
  { icon: <FaMobileAlt size={28} />, label: "React Native" },
  { icon: <FaDatabase size={28} />, label: "PostgreSQL" },
  { icon: <SiSupabase size={28} />, label: "Supabase" },
  { icon: <FaServer size={28} />, label: "Node.js, Python" },
  { icon: <FaBug size={28} />, label: "Testing & QA" },
  { icon: <FaTools size={28} />, label: "Git, Figma" },
  { icon: <FaLinux size={28} />, label: "Linux" },
];

const powerSkills = [
  { icon: <LightBulbIcon className="w-8 h-8" />, label: "Problem Solving" },
  { icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />, label: "Client Communication" },
  { icon: <ArrowPathIcon className="w-8 h-8" />, label: "Agile Methodologies" },
  { icon: <ClipboardDocumentListIcon className="w-8 h-8" />, label: "Full Project Lifecycle" },
  { icon: <PresentationChartLineIcon className="w-8 h-8" />, label: "Data-Driven Decisions" },
  { icon: <UsersIcon className="w-8 h-8" />, label: "Cross-Cultural Collaboration" },
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-24 border-t border-border/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={idx} 
              className="group flex flex-col items-center justify-center p-6 bg-muted/20 border border-border/50 rounded-2xl hover:bg-muted/50 hover:border-border transition-all shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="mb-4 text-muted-foreground group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground text-center leading-tight">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-12">Power Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {powerSkills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              className="group flex items-center gap-4 p-6 bg-background border border-border/50 rounded-2xl hover:border-foreground/30 transition-all shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-lg font-semibold text-foreground">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.section>
  );
}
