"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 1.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      className="my-16 px-6 sm:px-8 lg:px-12 py-12 bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8"
        variants={itemVariants}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
      >
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          variants={itemVariants}
        >
          <FaEnvelope className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <a
              href="mailto:fabián.jose.fdez.fdez@gmail.com"
              className="text-blue-600 dark:text-blue-400 transition font-semibold"
            >
              Send me an email
            </a>
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          variants={itemVariants}
        >
          <FaPhone className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Phone</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">+506 85684670</p>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          variants={itemVariants}
        >
          <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            Alajuela, Costa Rica
          </p>
        </motion.div>
      </motion.div>

      <motion.form
        action="https://formspree.io/f/xldeaqob"
        method="POST"
        variants={containerVariants}
        className="space-y-6 max-w-4xl mx-auto"
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
          ></textarea>
        </motion.div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}