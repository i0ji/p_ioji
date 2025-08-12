// hooks/usePinnedSceneProgress.ts
import { useEffect, useRef, useState } from "react";

export function usePinnedSceneProgress() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    if (!ref.current) return;

    let ticking = false;

    const measure = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight; // прокручиваемая часть внутри сцены
      const y = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? y / total : 0);
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
  }, []);

  return { ref, progress };
}
