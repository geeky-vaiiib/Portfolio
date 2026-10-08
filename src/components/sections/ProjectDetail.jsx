import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../../lib/constants.js";

function Block({ label, children }) {
  return (
    <section className="detail-block">
      <h2 className="section-label">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export function ProjectDetail({ slug }) {
  const i = projects.findIndex((p) => p.id === slug);
  const p = projects[i];

  useEffect(() => {
    const prev = document.title;
    if (p) document.title = `${p.title} — Vaibhav J P`;
    const onKey = (e) => { if (e.key === "Escape") location.hash = "#work"; };
    window.addEventListener("keydown", onKey);
    return () => { document.title = prev; window.removeEventListener("keydown", onKey); };
  }, [p]);

  if (!p) {
    return (
      <div className="wrap detail">
        <a href="#work" className="back"><ArrowLeft size={14} /> All work</a>
        <h1 className="detail-title">Project not found</h1>
      </div>
    );
  }

  const next = projects[(i + 1) % projects.length];

  return (
    <article className="wrap detail">
      <a href="#work" className="back"><ArrowLeft size={14} className="arrow-back" /> All work</a>

      <header className="detail-head rise" style={{ "--i": 0 }}>
        <p className="eyebrow">{p.kind} · {p.year}</p>
        <h1 className="detail-title">{p.title}</h1>
        <p className="detail-thesis">{p.thesis}</p>
        <p className="project-links">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="link link-strong">
            Source on GitHub <ArrowUpRight size={14} className="arrow-up" />
          </a>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="link link-strong">
              Live demo <ArrowUpRight size={14} className="arrow-up" />
            </a>
          )}
        </p>
      </header>

      <div className="rise" style={{ "--i": 1 }}>
        <Block label="Overview"><p className="prose">{p.description}</p></Block>
        <Block label="What it does">
          <ul className="feature-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </Block>
        <Block label="Architecture"><p className="prose">{p.architecture}</p></Block>
        <Block label="Stack">
          <ul className="tags tags-lg">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </Block>
        {p.note && <Block label="Note"><p className="prose">{p.note}</p></Block>}
      </div>

      <a href={`#/work/${next.id}`} className="next">
        <span className="meta">Next project</span>
        <span className="next-title">{next.title} <ArrowRight size={20} className="project-arrow" /></span>
      </a>
    </article>
  );
}
