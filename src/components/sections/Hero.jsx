import { useTypewriter } from "../../lib/useTypewriter.js";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, personalContext } from "../../lib/constants.js";

export function Hero() {
  const { displayText } = useTypewriter({
    text: `Hi, I'm ${personalContext.name}`,
    speed: 80,
    delay: 300
  });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {displayText}
            <span className="cursor-blink text-primary">_</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            {personalContext.role}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building fast, reliable, and beautiful web experiences. Currently studying at {personalContext.institution}, graduating {personalContext.graduationYear}.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="GitHub"
            >
              <Github size={24} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href={socialLinks.email}
              className="group p-4 rounded-full border border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Email"
            >
              <Mail size={24} className="group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
