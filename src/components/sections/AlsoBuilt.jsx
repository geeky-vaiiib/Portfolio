import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../SectionLabel.jsx";
import { Reveal } from "../Reveal.jsx";

export function AlsoBuilt({ items }) {
  return (
    <Reveal className="also">
      <SectionLabel count={items.length} className="more-label" id="also-title">Also built</SectionLabel>
      <ul className="more-list" aria-labelledby="also-title">
        <li className="more-head" aria-hidden="true">
          <span>Project</span><span>Description</span><span />
        </li>
        {items.map((m) => (
          <li key={m.name}>
            <a href={m.live || m.github} target="_blank" rel="noopener noreferrer">
              <span className="more-name">{m.name}</span>
              <span className="more-note">{m.note}</span>
              <span className="more-go" aria-hidden="true">
                <ArrowRight size={14} className="go-right" />
                <ArrowUpRight size={15} className="arrow-up" />
              </span>
              <span className="sr-only">{m.live ? " (live site)" : " on GitHub"}</span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
