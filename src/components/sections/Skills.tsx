"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLinux, FaTools, FaServer, FaBug, FaMobileAlt, FaRobot } from "react-icons/fa";
import { SiTailwindcss, SiSupabase } from "react-icons/si";
import { TbDeviceImacCode } from "react-icons/tb";
import { LightBulbIcon, ChatBubbleLeftRightIcon, ArrowPathIcon, ClipboardDocumentListIcon, PresentationChartLineIcon, UsersIcon, CommandLineIcon, SparklesIcon } from "@heroicons/react/24/outline";

const technologies = [
  { icon: <FaCode size={18} />, label: "React.js & Next.js" },
  { icon: <TbDeviceImacCode size={18} />, label: "TypeScript" },
  { icon: <SiTailwindcss size={18} />, label: "Tailwind CSS" },
  { icon: <FaRobot size={18} />, label: "AI, Prompt Eng. & LLMs" },
  { icon: <FaMobileAlt size={18} />, label: "React Native" },
  { icon: <FaDatabase size={18} />, label: "PostgreSQL" },
  { icon: <SiSupabase size={18} />, label: "Supabase" },
  { icon: <FaServer size={18} />, label: "Node.js & Python" },
  { icon: <FaBug size={18} />, label: "Testing & QA" },
  { icon: <FaTools size={18} />, label: "Git & Figma" },
  { icon: <FaLinux size={18} />, label: "Linux" },
];

const powerSkills = [
  { icon: <LightBulbIcon className="w-5 h-5" />, label: "Problem Solving" },
  { icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, label: "Client Communication" },
  { icon: <ArrowPathIcon className="w-5 h-5" />, label: "Agile Methodologies" },
  { icon: <ClipboardDocumentListIcon className="w-5 h-5" />, label: "Full Project Lifecycle" },
  { icon: <PresentationChartLineIcon className="w-5 h-5" />, label: "Data-Driven Decisions" },
  { icon: <UsersIcon className="w-5 h-5" />, label: "Cross-Cultural Collaboration" },
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Technical Expertise */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CommandLineIcon className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Technical Expertise</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <motion.div 
                key={idx} 
                className="group flex items-center gap-2.5 px-4 py-2.5 bg-background border border-border/50 rounded-full hover:bg-amber-500/5 hover:border-amber-500/30 transition-all shadow-sm cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="text-muted-foreground group-hover:text-amber-500 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-amber-500 transition-colors">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Power Skills */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <SparklesIcon className="w-5 h-5 text-amber-500" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Power Skills</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {powerSkills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                className="group flex items-center gap-2.5 px-4 py-2.5 bg-muted/20 border border-border/40 rounded-full hover:bg-amber-500/5 hover:border-amber-500/30 transition-all shadow-sm cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="text-amber-600 dark:text-amber-500/80 group-hover:text-amber-500 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-foreground group-hover:text-amber-500 transition-colors">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
