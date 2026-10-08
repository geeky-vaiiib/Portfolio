import { projects, moreWork } from "../../lib/constants.js";
import { SectionLabel } from "../SectionLabel.jsx";
import { Reveal } from "../Reveal.jsx";
import { ProjectItem } from "./ProjectItem.jsx";
import { AlsoBuilt } from "./AlsoBuilt.jsx";

export function Projects() {
  return (
    <section id="work" className="section section-work" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal>
          <SectionLabel n="01" count={projects.length} id="work-title">Selected work</SectionLabel>
        </Reveal>
        <ol className="project-list">
          {projects.map((p, i) => (
            <ProjectItem key={p.id} project={p} index={i} />
          ))}
        </ol>
        <AlsoBuilt items={moreWork} />
      </div>
    </section>
  );
}
