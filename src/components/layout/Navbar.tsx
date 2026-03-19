"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Fabián<span className="text-muted-foreground">.dev</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="#experience" className="hover:text-muted-foreground transition-colors hidden sm:inline">Experience</Link>
          <Link href="#projects" className="hover:text-muted-foreground transition-colors hidden sm:inline">Projects</Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
