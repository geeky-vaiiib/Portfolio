import { useEffect, useRef } from "react";

/**
 * A tiny "View" tag that trails the pointer while it is over [data-cursor] elements.
 * Only active for fine pointers that can hover; touch and reduced-motion users never see it.
 */
export function CursorLabel() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || reduce || !el) return;

    let raf = 0, x = 0, y = 0;
    const paint = () => { el.style.transform = `translate3d(${x + 16}px, ${y + 14}px, 0)`; raf = 0; };
    const onMove = (e) => {
      const host = e.target.closest?.("[data-cursor]");
      const overAction = e.target.closest?.("a[href^='http']");
      const show = host && !overAction;
      el.dataset.show = show ? "1" : "0";
      if (show) {
        el.textContent = host.dataset.cursor;
        x = e.clientX; y = e.clientY;
        if (!raf) raf = requestAnimationFrame(paint);
      }
    };
    const onLeave = () => { el.dataset.show = "0"; };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-label" aria-hidden="true" data-show="0" />;
}
