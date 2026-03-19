"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      className="py-24 border-t border-border/40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
      
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              selected === cat 
              ? "bg-foreground text-background shadow-md"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filtered.map((cert) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col justify-between p-6 border border-border/50 rounded-2xl bg-muted/20 hover:bg-muted/50 transition-colors"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
                  {cert.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-6 leading-snug">
                  {cert.title}
                </h3>
              </div>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
              >
                View Credential <FaExternalLinkAlt className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
