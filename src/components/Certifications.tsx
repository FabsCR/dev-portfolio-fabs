"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  link: string;
}

const certifications: Certification[] = [
  // English and management certification
  { title: "EF SET English Certificate 68/100 (C1 Advanced)", link: "https://cert.efset.org/QnGMAj" },
  { title: "Scrum Fundamentals Certified (SFC™)", link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=921105" },

  // Basic certifications in networking and cybersecurity
  { title: "CCNA: Introduction to Networks", link: "https://www.credly.com/badges/1f46c465-e158-4b0d-bb8a-7f2051432a57?source=linked_in_profile" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", link: "https://www.credly.com/badges/826147a2-fa20-4f44-82b3-8cead744d20c/linked_in_profile" },
  { title: "Introduction to Cybersecurity", link: "https://www.credly.com/badges/33234c56-7a7d-49cc-9509-76137ebdaf74?source=linked_in_profile" },
  { title: "Cybersecurity Fundamentals", link: "https://www.credly.com/badges/1802feae-badc-4cdc-ba9d-97173f560aa9/linked_in_profile" },
  { title: "Cybersecurity Essentials", link: "https://www.credly.com/badges/ed4dde3e-4c3a-4522-a83e-43dc2020144d?source=linked_in_profile" },

  // Certifications in IoT and networking essentials
  { title: "Introduction to IoT", link: "https://www.credly.com/badges/b1412e71-3573-4f12-b6e3-385f859c2e48?source=linked_in_profile" },
  { title: "Networking Essentials", link: "https://www.credly.com/badges/c78c0009-35c4-4c9e-ae60-b3c255fbaf12?source=linked_in_profile" },

  // Certifications in Python and data science
  { title: "Python Essentials 1", link: "https://www.credly.com/badges/76b05d4f-c483-436c-b9b2-1a78dc78c4e3/linked_in_profile" },
  { title: "Data Science Foundations - Level 1", link: "https://www.credly.com/badges/adb67730-7477-4e79-99b6-8841c6ccf71c/linked_in_profile" },
  { title: "Data Science Tools", link: "https://www.credly.com/badges/2a598409-56bf-4a06-ad90-1ed4fabfd11b/linked_in_profile" },

  // Advanced certification in cybersecurity analysis
  { title: "CWL Certified Cyber Security Analyst [C3SA]", link: "https://www.credential.net/e0e1a022-8b21-441a-aacf-b677359243f4#acc.Yrh0RC4t" },
];

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="my-20 px-6 sm:px-8 lg:px-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Certifications
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {certification.title}
            </h3>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 flex items-center justify-center gap-2 font-medium transition duration-300 ease-in-out"
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}