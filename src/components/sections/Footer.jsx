import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "../../lib/constants.js";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-1">
              © {currentYear} Vaibhav J P
            </p>
            <p className="text-xs text-muted-foreground/60">
              Built with React & Tailwind CSS • JetBrains Mono
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-muted hover:text-primary hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
