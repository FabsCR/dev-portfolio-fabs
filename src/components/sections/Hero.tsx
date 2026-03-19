"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownTrayIcon, EnvelopeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/40 via-background to-background dark:from-zinc-800/20 dark:via-background dark:to-background"></div>
      
      <motion.div 
        className="flex-1 flex flex-col items-start gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-sm font-semibold tracking-wide shadow-sm">
          <SparklesIcon className="w-4 h-4" />
          <span>Available for internships or junior roles</span>
        </div>
        
        <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm -mt-2">
          Software Engineering Student & Freelance Developer
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
          Fabián Fernández
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
          Architecting scalable web applications and AI-driven solutions. I transform complex requirements into seamless, high-performance digital experiences through modern backend infrastructure and proactive problem-solving.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a 
            href="mailto:fabian.jose.fdez.fdez@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors shadow-lg"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Get in Touch
          </a>
          <a 
            href="/cv.pdf" 
            download="Fabian_Fernandez_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground border border-border font-medium rounded-full hover:bg-muted/80 transition-colors shadow-sm"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl flex-shrink-0 group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/Photo.jpeg"
          alt="Fabián Fernández"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </motion.div>
    </section>
  );
}
