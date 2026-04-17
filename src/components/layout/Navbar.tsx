"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/40 shadow-sm" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setIsMenuOpen(false);
            }} 
            className="font-bold text-lg tracking-tight z-10 hover:opacity-80 transition-opacity"
          >
            Fabián <span className="text-amber-500">Fernández</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-amber-500 transition-colors">
                {link.name}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-border/80" />
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 -mr-2 rounded-full hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-amber-400" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Toggles */}
          <div className="flex items-center gap-2 lg:hidden z-10">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
            >
              {mounted && theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-amber-400" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 rounded-full hover:bg-muted/50 transition-colors text-foreground"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3BottomRightIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg"
            >
              <div className="flex flex-col gap-6 p-6 py-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-foreground hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
