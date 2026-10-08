import { useEffect, useLayoutEffect, useRef, useState } from "react";

const PREFIX = "#/work/";
const read = () => (location.hash.startsWith(PREFIX) ? decodeURIComponent(location.hash.slice(PREFIX.length)) : null);
const jump = (el) => (el ? el.scrollIntoView({ behavior: "instant" }) : window.scrollTo({ top: 0, behavior: "instant" }));

/** Returns the open project slug (from #/work/<slug>) or null for the home page. */
export function useHashRoute() {
  const [slug, setSlug] = useState(read);
  const prev = useRef(slug);

  useEffect(() => {
    const onChange = () => setSlug(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  // Anchors can't resolve until the new view has rendered, so scroll after the commit.
  useLayoutEffect(() => {
    if (prev.current === slug) return;
    if (slug) jump(null);
    else jump(document.getElementById(location.hash.slice(1)));
    prev.current = slug;
  }, [slug]);

  return slug;
}
