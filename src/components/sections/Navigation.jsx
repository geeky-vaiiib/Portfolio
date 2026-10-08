import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/useTheme.js";
import { useActiveSection } from "../../lib/useActiveSection.js";
import { personalContext } from "../../lib/constants.js";

const navItems = [
  { id: "work", name: "Work" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" }
];
const ids = navItems.map((n) => n.id);

export function Navigation({ onDetail = false }) {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(onDetail ? [] : ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-name">{personalContext.name}</a>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
