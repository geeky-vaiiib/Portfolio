import { personalContext } from "../../lib/constants.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {personalContext.name}. Set in Newsreader and Instrument Sans.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
