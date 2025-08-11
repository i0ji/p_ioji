import { useEffect, useState } from "react";

type ProgressOptions = {
  // как считать «окно» прогресса: top 0→-vh*k
  endK?: number; // 1 = высота вьюпорта, 1.2/0.8 — ускорить/замедлить
  clamp?: boolean;
};

export function useSectionProgress(sectionId: string, opts: ProgressOptions = {}) {
  const { endK = 1, clamp = true } = opts;
  const [progress, setProgress] = useState(0); // 0..1
  const [inView, setInView] = useState(false); // видна ли секция хоть частично
  const [passedTop, setPassedTop] = useState(false); // верх прошёл верх вьюпорта

  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    let ticking = false;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = 0;          // rect.top = 0 — начало
      const end = -vh * endK;   // rect.top = -vh*endK — конец
      const t = (rect.top - start) / (end - start);
      const p = clamp ? Math.min(1, Math.max(0, t)) : t;

      setProgress(p);
      setInView(rect.bottom > 0 && rect.top < vh);
      setPassedTop(rect.top <= 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [sectionId, endK, clamp]);

  return { progress, inView, passedTop };
}
