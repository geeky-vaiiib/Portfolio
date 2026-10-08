import { useState, useCallback } from "react";

const isDark = () => document.documentElement.classList.contains("dark");

export function useTheme() {
  // The inline script in index.html has already applied the saved or system theme.
  const [theme, setTheme] = useState(() => (isDark() ? "dark" : "light"));

  const toggleTheme = useCallback(() => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#161513" : "#f6f4ef");
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
}
