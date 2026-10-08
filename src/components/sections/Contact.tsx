import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../lib/constants";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Get In Touch
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          I'm always open to new opportunities and collaborations. Let's build something amazing together!
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* Email button */}
          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-3 btn-primary text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Mail size={24} />
            Email Me
          </a>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 pt-4 justify-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-8 bg-background border border-border rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[140px]"
            >
              <Github size={32} className="group-hover:text-primary group-hover:scale-110 transition-all" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-8 bg-background border border-border rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[140px]"
            >
              <Linkedin size={32} className="group-hover:text-primary group-hover:scale-110 transition-all" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}
