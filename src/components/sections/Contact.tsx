"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-24 border-t border-border/40 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Connect</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
        I am actively seeking software engineering internships to contribute to enterprise systems in Application Integration, Data Analytics, and Infrastructure.
      </p>
      <motion.a 
        href="mailto:fabian.jose.fdez.fdez@gmail.com" 
        className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors text-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Say Hello
      </motion.a>
    </motion.section>
  );
}
