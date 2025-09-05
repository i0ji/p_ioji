import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "store/hooks";

const LINKS = [
  { id: "hero", label: "hero" },
  { id: "experience", label: "experience" },
  { id: "portfolio", label: "portfolio" },
  { id: "contacts", label: "contacts" },
];

export default function Header() {
  const activeSection = useAppSelector((s) => s.nav.activeSection);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  // Анимация ширины до порога — от скролла
  const { scrollY } = useScroll();
  const animatedWidth = useTransform(
    scrollY,
    [0, 1400],
    [isDesktop ? "90vw" : "100vw", "40vw"]
  );

  // Плавный горизонтальный сдвиг (вправо при схлопывании)
  const xRaw = useSpring(0, { stiffness: 260, damping: 26 }); // пружина
  const xWithCenter = useMotionTemplate`calc(-50% + ${xRaw}px)`; // совмещаем -50% и px-смещение

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth > 1280);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Порог схлопывания: когда верх секции #experience достигает верха вьюпорта (с небольшим буфером)
  useEffect(() => {
    const experienceEl = document.getElementById("experience");
    if (!experienceEl) return;

    const headerPx = headerRef.current?.offsetHeight ?? 56; // h-14 ≈ 56px
    const buffer = 16; // небольшой запас

    const computeThreshold = () => {
      const rect = experienceEl.getBoundingClientRect();
      return rect.top + window.scrollY - headerPx - buffer;
    };

    let threshold = computeThreshold();

    const onScroll = () => {
      setIsCollapsed(window.scrollY >= threshold);
    };

    const onResize = () => {
      threshold = computeThreshold();
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Обновление целевого сдвига x при смене состояния/resize
  useEffect(() => {
    const rightPad = 24;       // соответствует right-6
    const collapsedWidth = 48; // ширина круглой кнопки в схлопнутом состоянии

    const updateX = () => {
      // якорь остаётся по центру (left: 50% + translateX(-50%)),
      // поэтому целевой сдвиг вправо = половина вьюпорта - отступ - половина кнопки
      const target = isCollapsed
        ? window.innerWidth / 2 - rightPad - collapsedWidth / 2
        : 0;
      xRaw.set(target);
    };

    updateX();
    window.addEventListener("resize", updateX);
    return () => window.removeEventListener("resize", updateX);
  }, [isCollapsed, xRaw]);

  return (
    <motion.nav
      ref={headerRef}
      // ВНИМАНИЕ: x комбинируется с -50% через useMotionTemplate, чтобы не конфликтовать с Tailwind
      style={{
        x: xWithCenter,
        width: isCollapsed ? 48 : isDesktop ? (animatedWidth as MotionValue<string>) : "100%",
        height: isCollapsed ? 48 : 56,
        maxWidth: "100vw",
        borderRadius: isCollapsed ? 9999 : 16,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={clsx(
        "fixed z-50",
        // Всегда якорь в центре — дальше смещение делаем style.x
        "left-1/2 -translate-x-1/2",
        // Можно анимировать и y отдельно, но тут фиксируем верх
        isCollapsed ? "top-6" : "top-0 xl:mt-5",
        "border-[1px] border-solid border-gray-500 bg-black/30 backdrop-blur-md",
        "flex items-center justify-between",
        "will-change-[transform,opacity,filter]",
        isCollapsed ? "p-0" : "rounded-b-2xl xl:rounded-3xl"
      )}
      aria-label="Main navigation"
    >
      {isCollapsed ? (
        <div className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls="header-dropdown"
            onClick={() => setMenuOpen((s) => !s)}
            className="grid h-12 w-12 place-items-center text-gray-200"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="header-dropdown"
                role="menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-600/60 bg-black/70 backdrop-blur-md"
              >
                <ul className="py-2">
                  {LINKS.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <li key={link.id}>
                        <a
                          role="menuitem"
                          href={`#${link.id}`}
                          onClick={() => setMenuOpen(false)}
                          className={clsx(
                            "block px-4 py-2.5 transition-colors",
                            active ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/10"
                          )}
                          aria-current={active ? "true" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <ul className="flex w-full items-center justify-around">
          {LINKS.map((link) => {
            const active = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  aria-current={active ? "true" : undefined}
                  className={clsx(
                    "relative z-10 px-3 py-1 transition-colors",
                    active ? "text-white" : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  {link.label}
                </a>
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-md bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </motion.nav>
  );
}
