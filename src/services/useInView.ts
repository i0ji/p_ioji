import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  { threshold = 0.3, root = null, rootMargin = "0px 0px -15% 0px", once = true } = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once && ref.current) obs.unobserve(ref.current);
        } else if (!once) setInView(false);
      });
    }, { threshold, root, rootMargin });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, root, rootMargin, once]);
  return { ref, inView };
}
