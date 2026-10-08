import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../../lib/constants.js";
import { SectionLabel } from "../SectionLabel.jsx";
import { Reveal } from "../Reveal.jsx";

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="wrap two-col">
        <Reveal><SectionLabel id="contact-title">Contact</SectionLabel></Reveal>
        <Reveal delay={80}>
          <p className="contact-lede">
            If you're hiring, building something interesting, or just want to compare notes, write to me.
          </p>
          <p>
            <a href={socialLinks.email} className="contact-mail">
              {socialLinks.emailAddress}
              <ArrowUpRight size={22} className="arrow-up" aria-hidden="true" />
            </a>
          </p>
          <p className="hero-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub <ArrowUpRight size={14} className="arrow-up" aria-hidden="true" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn <ArrowUpRight size={14} className="arrow-up" aria-hidden="true" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
