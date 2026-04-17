"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface Certification {
  title: string;
  link: string;
  category: string;
}

const certifications: Certification[] = [
  { title: "EF SET English Certificate 68/100 (C1 Advanced)", link: "https://cert.efset.org/QnGMAj", category: "English" },
  { title: "Scrum Fundamentals Certified (SFC™)", link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=921105", category: "Management" },
  { title: "CCNA: Introduction to Networks", link: "https://www.credly.com/badges/1f46c465-e158-4b0d-bb8a-7f2051432a57?source=linked_in_profile", category: "Cybersecurity" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", link: "https://www.credly.com/badges/826147a2-fa20-4f44-82b3-8cead744d20c/linked_in_profile", category: "Cybersecurity" },
  { title: "Introduction to Cybersecurity", link: "https://www.credly.com/badges/33234c56-7a7d-49cc-9509-76137ebdaf74?source=linked_in_profile", category: "Cybersecurity" },
  { title: "Cybersecurity Fundamentals", link: "https://www.credly.com/badges/1802feae-badc-4cdc-ba9d-97173f560aa9/linked_in_profile", category: "Cybersecurity" },
  { title: "Cybersecurity Essentials", link: "https://www.credly.com/badges/ed4dde3e-4c3a-4522-a83e-43dc2020144d?source=linked_in_profile", category: "Cybersecurity" },
  { title: "Introduction to IoT", link: "https://www.credly.com/badges/b1412e71-3573-4f12-b6e3-385f859c2e48?source=linked_in_profile", category: "IoT" },
  { title: "Networking Essentials", link: "https://www.credly.com/badges/c78c0009-35c4-4c9e-ae60-b3c255fbaf12?source=linked_in_profile", category: "Cybersecurity" },
  { title: "Python Essentials 1", link: "https://www.credly.com/badges/76b05d4f-c483-436c-b9b2-1a78dc78c4e3/linked_in_profile", category: "Data Science" },
  { title: "Data Science Foundations - Level 1", link: "https://www.credly.com/badges/adb67730-7477-4e79-99b6-8841c6ccf71c/linked_in_profile", category: "Data Science" },
  { title: "Data Science Tools", link: "https://www.credly.com/badges/2a598409-56bf-4a06-ad90-1ed4fabfd11b/linked_in_profile", category: "Data Science" },
  { title: "CWL Certified Cyber Security Analyst [C3SA]", link: "https://www.credential.net/e0e1a022-8b21-441a-aacf-b677359243f4#acc.Yrh0RC4t", category: "Cybersecurity" },
];

const categories = ["All", "English", "Management", "Cybersecurity", "IoT", "Data Science"];

export default function Certifications() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" 
    ? certifications 
    : certifications.filter(c => c.category === selected);

  return (
    <motion.section 
      id="certifications" 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Certifications</h2>
          <p className="text-muted-foreground">Continuous learning and professional accreditations.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selected === cat 
                ? "bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 shadow-sm"
                : "bg-background border border-border/60 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between p-6 border border-border/40 rounded-2xl bg-muted/10 hover:bg-background hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all h-full"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 mb-4 bg-muted/50 border border-border/50 rounded-full text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {cert.category}
                </span>
                <h3 className="font-bold text-lg text-foreground group-hover:text-amber-500 transition-colors leading-tight">
                  {cert.title}
                </h3>
              </div>
              
              <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4 group-hover:border-amber-500/20 transition-colors">
                <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  View Credential
                </span>
                <FaExternalLinkAlt className="w-3.5 h-3.5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
