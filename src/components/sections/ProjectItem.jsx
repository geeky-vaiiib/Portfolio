import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal.jsx";

export function ProjectItem({ project: p, index }) {
  return (
    <Reveal as="li" className="project" data-cursor="View">
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="project-body">
        <div className="project-head">
          <h3 className="project-title">
            <a href={`#/work/${p.id}`}>
              {p.title}
              <ArrowRight size={18} className="project-arrow" aria-hidden="true" />
            </a>
          </h3>
          <span className="meta">{p.kind} · {p.year}</span>
        </div>
        <p className="project-desc">{p.description}</p>
        <ul className="tags" aria-label="Technologies">
          {p.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="project-links">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="link">
            Source <ArrowUpRight size={14} className="arrow-up" aria-hidden="true" />
            <span className="sr-only"> for {p.title} on GitHub</span>
          </a>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="link">
              Live <ArrowUpRight size={14} className="arrow-up" aria-hidden="true" />
              <span className="sr-only"> demo of {p.title}</span>
            </a>
          )}
        </p>
      </div>
    </Reveal>
  );
}
