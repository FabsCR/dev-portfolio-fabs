"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section id="about" className="py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden min-h-[85vh]">
      {/* Aesthetic ambient background replacing the gray box */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[120px] opacity-60 dark:opacity-30 mix-blend-normal" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/10 rounded-full filter blur-[150px] opacity-40 dark:opacity-20 mix-blend-normal" />
      </div>
      
      <motion.div 
        className="flex-1 flex flex-col items-start gap-6 lg:gap-8 z-10 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/80 border border-border/50 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground pr-1">Available for new opportunities</span>
        </div>
        
        <div className="space-y-4 w-full">
          <p className="text-amber-600 dark:text-amber-500 font-semibold tracking-widest uppercase text-sm md:text-base">
            Software Engineering Student & Freelance Developer
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-amber-500/80 bg-clip-text text-transparent pb-2">
              Fabián Fernández
            </span>
          </h1>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Architecting scalable web applications and AI-driven solutions. I transform complex requirements into seamless, high-performance digital experiences through modern backend infrastructure and proactive problem-solving.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="mailto:fabian.jose.fdez.fdez@gmail.com" 
            className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
          >
            <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Let's build together
          </a>
          <a 
            href="/cv.pdf" 
            download="Fabian_Fernandez_Resume.pdf"
            className="group flex items-center gap-2 px-8 py-4 bg-background text-foreground border border-border/60 font-semibold rounded-full hover:bg-muted/50 hover:border-border transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <ArrowDownTrayIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] flex-shrink-0 z-10 group"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
      >
        {/* Decorative background shape */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-[3rem] rotate-6 scale-[1.02] -z-10 transition-transform duration-500 group-hover:rotate-12" />
        
        {/* Main image container */}
        <div className="absolute inset-0 border border-border/40 rounded-[3rem] bg-background/50 overflow-hidden shadow-2xl">
          <Image
            src="/Photo.jpeg"
            alt="Fabián Fernández"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
