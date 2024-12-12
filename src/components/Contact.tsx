"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      className="my-16 px-6 sm:px-10 py-12 bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-10"
        variants={itemVariants}
      >
        Get in Contact
      </motion.h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10" variants={containerVariants}>
        {[
          {
            icon: FaEnvelope,
            label: "Email",
            info: "fabián.jose.fdez.fdez@gmail.com",
            href: "mailto:fabián.jose.fdez.fdez@gmail.com",
          },
          { icon: FaPhone, label: "Phone", info: "+506 85684670", href: "tel:+50685684670" },
          { icon: FaMapMarkerAlt, label: "Location", info: "Alajuela, Costa Rica" },
        ].map(({ icon: Icon, label, info, href }, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <Icon className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{label}</h3>
            {href ? (
              <a
                href={href}
                className="text-blue-600 dark:text-blue-400 font-medium break-words text-sm text-center"
              >
                {info}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">{info}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.form
        action="https://formspree.io/f/xldeaqob"
        method="POST"
        variants={containerVariants}
        className="space-y-6"
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
          <div>
            <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}