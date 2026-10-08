import { skillGroups, personalContext } from "../../lib/constants.js";
import { SectionLabel } from "../SectionLabel.jsx";
import { Reveal } from "../Reveal.jsx";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap two-col">
        <Reveal><SectionLabel n="02" id="about-title">About</SectionLabel></Reveal>
        <Reveal delay={80}>
          <p className="statement">
            I like projects where the interface and the system underneath have to agree: a screening form that is honest about what it can't conclude, a chatbot that cites its sources, a dashboard that stays readable when the data gets large.
          </p>
          <p className="prose">
            I'm a B.E. student at {personalContext.institution}, graduating in {personalContext.graduationYear}, based in {personalContext.location}. Most of my work starts with a problem close to home, such as campus information, alumni connections or food waste, and grows into something I can put in front of real users. I'm looking for internships and early roles where I can keep shipping and learn from people better than me.
          </p>

          <dl className="skills">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.items.split(", ").map((t, i) => <span key={t}>{i > 0 && <i aria-hidden="true"> · </i>}{t}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
