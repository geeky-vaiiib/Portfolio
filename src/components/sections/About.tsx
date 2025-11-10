import { aboutText, facts, skills } from "../../lib/constants";
import { GraduationCap, Laptop, MapPin, MessageSquare } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">{aboutText}</p>
            
            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Quick Facts
            </h3>
            {facts.map((fact, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {fact.icon === "GraduationCap" && <GraduationCap size={22} />}
                  {fact.icon === "Laptop" && <Laptop size={22} />}
                  {fact.icon === "MapPin" && <MapPin size={22} />}
                  {fact.icon === "MessageSquare" && <MessageSquare size={22} />}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
