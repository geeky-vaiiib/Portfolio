import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { personalContext, intro, socialLinks } from "../../lib/constants.js";

const clock = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date());

export function Hero() {
  const inner = useRef(null);
  const [time, setTime] = useState(clock);

  useEffect(() => {
    const id = setInterval(() => setTime(clock()), 20000);
    return () => clearInterval(id);
  }, []);

  // Very light scroll response: the hero drifts up a few pixels and softens as it leaves.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const p = Math.min(window.scrollY / 500, 1);
      if (inner.current) {
        inner.current.style.transform = `translate3d(0, ${-p * 20}px, 0)`;
        inner.current.style.opacity = String(1 - p * 0.5);
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div ref={inner} className="hero-inner">
          <p className="eyebrow rise" style={{ "--i": 0 }}>
            <span className="dot" aria-hidden="true" />
            Software engineer · AI/ML &amp; full-stack
          </p>
          <h1 id="hero-title" className="hero-title rise" style={{ "--i": 1 }}>
            Building careful software for the web, <em>one small detail at a time.</em>
          </h1>
          <p className="lede rise" style={{ "--i": 2 }}>{intro}</p>
          <p className="hero-links rise" style={{ "--i": 3 }}>
            <a href="#work" className="link link-strong">Selected work <ArrowDown size={15} className="arrow-down" aria-hidden="true" /></a>
            <a href={socialLinks.email} className="link">{socialLinks.emailAddress}</a>
          </p>
          <p className="status rise" style={{ "--i": 4 }}>
            {personalContext.location} · <time>{time}</time> IST
          </p>
        </div>
      </div>
    </section>
  );
}
