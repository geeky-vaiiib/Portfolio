import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/useTheme.js";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm" 
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="text-lg font-bold hover:text-primary transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            {"<VaibhavJP />"}
          </button>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
