import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12">
        <p className="text-sm text-muted-foreground font-medium text-center md:text-left">
          © {new Date().getFullYear()} Fabián Fernández. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/FabsCR" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-muted-foreground hover:text-foreground bg-muted/30 border border-border/50 rounded-lg hover:border-foreground/50 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/fabian-fdez/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-muted-foreground hover:text-white bg-muted/30 border border-border/50 rounded-lg hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
