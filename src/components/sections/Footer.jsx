import { ArrowUp } from "lucide-react";
import { personalContext } from "../../lib/constants.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {personalContext.name}</span>
        <a href="#top" className="to-top">Back to top <ArrowUp size={14} className="arrow-top" aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
